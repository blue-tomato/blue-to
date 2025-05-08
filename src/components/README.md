# Coding Guidelines

* Use this basic template for a new component
  ```tsx
  import { forwardRef } from "react";

  type Props = React.HTMLAttributes<HTMLDivElement> & {};

  const Component = forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => (
    <div ref={ref} {...props} />
  ));

  export default Component;
  ```
* If you need to merge classNames, put the className which is a property first
  ```tsx
  <div ref={ref} className={classNames(className, styles.wrapper)} {...props} />
  ```
