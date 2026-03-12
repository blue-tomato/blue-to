import type { Plugin } from "@opencode-ai/plugin";

const DEBOUNCE_MS = 1000 * 60 * 10; // 10 minutes

const docsUpdatePlugin: Plugin = async ({ client }) => {
	const cwd = process.cwd();
	const docsDir = `${cwd}/docs/`;
	const docsReadme = `${cwd}/docs/README.md`;
	const pendingFiles: Set<string> = new Set();
	let debounceTimer: ReturnType<typeof setTimeout> | null = null;

	const executeUpdate = async () => {
		const files = Array.from(pendingFiles);

		pendingFiles.clear();

		if (files.length === 0) return;

		const sessionTitle = `${new Date().toISOString().split("T")[0]} Docs Update Plugin`;

		await client.tui.showToast({
			body: {
				message: `Updating Docs in: "${sessionTitle}"`,
				variant: "info",
			},
		});

		const { data: sessions } = await client.session.list();
		let session = sessions?.find((session) => session.title === sessionTitle);

		if (!session) {
			const { data: newSession, error } = await client.session.create({
				body: { title: sessionTitle },
			});

			if (error || !newSession) return;

			session = newSession;
		}

		const fileList = files.join("\n- ");

		await client.session.prompt({
			path: { id: session.id },
			body: {
				parts: [
					{
						type: "text",
						text: `Documentation files were changed:
- ${fileList}

Your task: Update docs/README.md to reflect the current state of all documentation.

Instructions:
1. Read all files in the docs/ folder (recursively)
2. Read all .md files outside the docs/ folder (e.g., README.md), except AGENTS.md and CLAUDE.md
3. Create a unified summary of all documentation (not per-file summaries)
4. If files have timestamps and information conflicts between files, use the newer file's information
5. If any information is unclear, look at the project codebase as the source of truth
6. Update docs/README.md with this unified summary
7. If docs/README.md doesn't exist, create it
8. Keep the summary concise but informative
9. Remove any content from docs/README.md that cannot be found in any documentation file

Do not include docs/README.md itself in the summary.`,
					},
				],
			},
		});
	};

	return {
		event: async ({ event }) => {
			if (event.type !== "file.watcher.updated") return;

			const file = event.properties.file;
			const isReadme = file === docsReadme;
			const isAgentFile = file === `${cwd}/AGENTS.md` || file === `${cwd}/CLAUDE.md`;

			// Skip if it's the README itself or an agent instructions file
			if (isReadme || isAgentFile) return;

			const isInDocsFolder = file.startsWith(docsDir);
			const isMarkdownFile = file.endsWith(".md");

			// Process if it's in docs folder OR if it's a markdown file outside docs
			if (!isInDocsFolder && !isMarkdownFile) return;

			// Add file to pending set and reset debounce timer
			pendingFiles.add(file);

			if (debounceTimer) {
				clearTimeout(debounceTimer);
			}

			debounceTimer = setTimeout(() => {
				debounceTimer = null;
				executeUpdate();
			}, DEBOUNCE_MS);
		},
	};
};

export { docsUpdatePlugin };
