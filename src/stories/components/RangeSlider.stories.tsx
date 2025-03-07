import { RangeSlider } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof RangeSlider> = {
  title: "BLUETO/components/RangeSlider",
  component: RangeSlider,
  args: {
    children: "RangeSlider",
  },
  parameters: {
    links: {
      confluence: "3ArPKQ",
      figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=167-127",
    },
  },
};

const Empty: StoryMeta<typeof RangeSlider> = {
  args: {
    placeholderMax: "max",
    placeholderMin: "min",
    range: "bis",
  },
};

const Default: StoryMeta<typeof RangeSlider> = {
  args: {
    count: 230,
    handleCountUpdate: () => 160,
    max: 200,
    min: 10,
    placeholderMax: "max",
    placeholderMin: "min",
    range: "bis",
    symbol: "€",
  },
};

export default Docs;
export { Default, Empty };
