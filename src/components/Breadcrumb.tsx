import classNames from "classnames";
import styles from "./Breadcrumb.module.scss";
import Icon from "./Icon";

type Props = {
  href: string;
  text: string;
  className?: string;
  iconClassName?: string;
  isLast?: boolean;
};

const BreadcrumbItem = ({
  className,
  iconClassName,
  isLast,
  href,
  text,
}: Props) => {
  return (
    <li
      className={classNames(className, styles.item)}
      area-current={isLast ? "page" : undefined}
    >
      <a href={href}>{text}</a>
      {!isLast && (
        <Icon
          className={classNames(iconClassName, styles.icon)}
          icon="functional.arrowrightDefaultBlack"
        />
      )}
    </li>
  );
};

type Breadcrumbs = {
  href: string;
  text: string;
}[];

type BreadcrumbProps = {
  className?: string;
  breadcrumbs: Breadcrumbs;
};

const Breadcrumb = ({ breadcrumbs, className }: BreadcrumbProps) => {
  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className={className}>
        {breadcrumbs?.map((item, index) => (
          <BreadcrumbItem
            key={index}
            href={item.href ?? ""}
            text={item.text ?? ""}
            isLast={index === breadcrumbs.length - 1}
          />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
