import { Breadcrumb } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof Breadcrumb> = {
  title: "BLUETO/components/Breadcrumb",
  component: Breadcrumb,
  args: {
    children: "Breadcrumb",
  },
  parameters: {
    links: {
      confluence: "GoCQLw",
      figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=587-868",
    },
  },
};

const Default: StoryMeta<typeof Breadcrumb> = {};

const Wrapped: StoryMeta<typeof Breadcrumb> = {
  // render: (props) => <div style={{ maxWidth: "400px" }}>{<Breadcrumb {...props} />}</div>,
};

export default Docs;
export { Default, Wrapped };
