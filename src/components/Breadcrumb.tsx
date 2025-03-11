import classNames from "classnames";
import styles from "./Breadcrumb.module.scss";
import Icon from "./Icon";

type Props = {
  href: string;
  text: string;
};

const BreadcrumbItem = ({ href, text }: Props) => {
  return (
    <li className="breadcrumb-item" area-current="page">
      <a href={href}>{text}</a>
      <Icon icon="functional.arrowrightDefaultBlack" />
    </li>
  );
};

const testBreadcrumbData = [
  { href: "blue-tomato.com", text: "Home" },
  { href: "blue-tomato.com/test", text: "Library" },
  { href: "blue-tomato.com/test/123", text: "Data" },
  { href: "blue-tomato.com/test/123/456", text: "Streetwear" },
  { href: "blue-tomato.com/test/123/456/789", text: "Shoes" },
];

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {testBreadcrumbData.map((item, index) => (
          <BreadcrumbItem key={index} href={item.href} text={item.text} />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
