import { useState } from "react";
import { RangeSlider } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof RangeSlider> = {
	title: "BLUETO/components/RangeSlider",
	render: (props: React.ComponentProps<typeof RangeSlider>) => {
		const [maxValue, setMaxValue] = useState(props.max);
		const [minValue, setMinValue] = useState(props.min);

		return (
			<RangeSlider
				maxValue={maxValue}
				minValue={minValue}
				onMaxValueChange={setMaxValue}
				onMinValueChange={setMinValue}
				{...props}
			/>
		);
	},
	args: {
		max: 200,
		min: 10,
		placeholderMax: "max",
		placeholderMin: "min",
		rangeText: "to",
		resultText: "120 Products",
		symbol: "€",
	},
	parameters: {
		links: {
			confluence: "ioAwL",
			figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=167-127",
		},
	},
};

const Default: StoryMeta<typeof RangeSlider> = {};

const Minimum: StoryMeta<typeof RangeSlider> = {
	args: {
		max: undefined,
		min: undefined,
		placeholderMax: undefined,
		placeholderMin: undefined,
		rangeText: undefined,
		resultText: undefined,
		symbol: undefined,
	},
};

export default Docs;
export { Default, Minimum };
