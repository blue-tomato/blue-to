import type { DocsContainerProps } from "@storybook/blocks";
import type { StoryMetaParameters } from "../../src/types";

import { DocsContainer } from "@storybook/blocks";
import type { PropsWithChildren } from "react";
import "./DocsLinks.scss";

type Props = PropsWithChildren<DocsContainerProps> & {
	context: { primaryStory: { parameters: StoryMetaParameters } };
};

const DocsLinks = ({ children, ...props }: Props) => {
	const links = props.context.primaryStory.parameters.links;

	return (
		<DocsContainer {...props}>
			{links && (
				<div className="docs-links">
					<a
						href={`https://blue-tomato.atlassian.net/wiki/x/${links.confluence}`}
						target="_blank"
						rel="noreferrer"
					>
						Confluence
					</a>
					<a
						href={`https://www.figma.com/design/${links.figma}`}
						target="_blank"
						rel="noreferrer"
					>
						Figma
					</a>
				</div>
			)}
			{children}
		</DocsContainer>
	);
};

export default DocsLinks;
