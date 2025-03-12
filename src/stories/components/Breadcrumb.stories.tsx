import { Breadcrumb } from "@/components";
import type { StoryMeta } from "@/types";
import styles from "./Breadcrumb.stories.module.scss";

const testBreadcrumbData = [
  { href: "https://www.blue-tomato.com/en-AT/men/", text: "Men" },
  { href: "blue-tomato.com/test", text: "Patagonia" },
  { href: "blue-tomato.com/test/123", text: "Streetwear" },
  { href: "blue-tomato.com/test/123/456", text: "T-Shirt" },
  { href: "blue-tomato.com/test/123/456/789", text: "New" },
];

const testBreadcrumbDataWrapped = [
  { href: "https://www.blue-tomato.com/en-AT/women/", text: "Women" },
  { href: "blue-tomato.com/test", text: "Patagonia" },
  { href: "blue-tomato.com/test/1", text: "Snowboard" },
  { href: "blue-tomato.com/test/123", text: "Snowboard Shop" },
  { href: "blue-tomato.com/test/123", text: "Snowboard Equipment" },
  { href: "blue-tomato.com/test/123/456", text: "Avalanche Safety Equipment" },
  { href: "blue-tomato.com/test/123/456/789", text: "Avalanche Transceivers" },
  { href: "blue-tomato.com/test/123/456/789/999", text: "New" },
];

const Docs: StoryMeta<typeof Breadcrumb> = {
  title: "BLUETO/components/Breadcrumb",
  component: Breadcrumb,
  args: {
    children: "Breadcrumb",
    breadcrumbs: testBreadcrumbData,
  },
  parameters: {
    links: {
      confluence: "GoCQLw",
      figma: "rUIq4O2W7nCzofq3nFoURP/BLUETO-Components?node-id=587-868",
    },
  },
};

const Default: StoryMeta<typeof Breadcrumb> = {
  render: (props) => (
    <div className={styles.text}>{<Breadcrumb {...props}></Breadcrumb>}</div>
  ),
};

const Wrapped: StoryMeta<typeof Breadcrumb> = {
  args: {
    breadcrumbs: testBreadcrumbDataWrapped,
  },
  render: (props) => (
    <div className={styles.text}>{<Breadcrumb {...props}></Breadcrumb>}</div>
  ),
};

export default Docs;
export { Default, Wrapped };
