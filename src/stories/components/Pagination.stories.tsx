import { Pagination } from "@/components";
import type { StoryMeta } from "@/types";

const Docs: StoryMeta<typeof Pagination> = {
  title: "BLUETO/components/Pagination",
  component: Pagination,
  args: {
    page: 1,
    totalPage: 10,
  },
  parameters: {
    links: {
      confluence: "iwCMLw",
      figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=424-89",
    },
  },
};

const Default: StoryMeta<typeof Pagination> = {
  render: (props) => (
    <div style={{ position: "relative", top: "500px" }}>
      <Pagination {...props}></Pagination>
    </div>
  ),
};

const MiddlePage: StoryMeta<typeof Pagination> = {
  args: {
    page: 5,
  },
  render: (props) => (
    <div style={{ position: "relative", top: "500px" }}>
      <Pagination {...props}></Pagination>
    </div>
  ),
};

export default Docs;
export { Default, MiddlePage };
