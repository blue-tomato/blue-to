import type { Meta } from "@storybook/react";

type StoryMetaParameters = {
	links?: {
		confluence: string;
		figma: string;
	};
};

type StoryMeta<T> = Meta<T> & {
	parameters?: StoryMetaParameters;
};

export type { StoryMeta, StoryMetaParameters };
