# BLUETO Documentation

BLUETO is Blue Tomato's design system - a React component library providing reusable UI components, design tokens, and brand assets.

## Development

1. Clone the repository via `git clone git@github.com:blue-tomato/blueto.git`
2. Run `npm install` inside of the repository
3. Run `npm run dev`

## Component Guidelines

Use this template for new components:

```tsx
import { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {};

const Component = forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => (
	<div ref={ref} {...props} />
));

export default Component;
```

When merging classNames, put the `className` prop first (for override capability):

```tsx
<div ref={ref} className={classNames(className, styles.wrapper)} {...props} />
```

## Feature Documentation

Feature files in `docs/features/` track planned and completed work.

### Completed

- **AGENTS Code Style Guidelines** - Enhanced AGENTS.md with comprehensive code style rules covering component patterns, SCSS styling, Storybook conventions, and more.
- **Fix NotificationBanner Guidelines** - Updated NotificationBanner component to follow AGENTS.md code style guidelines (classNames order, SCSS root class naming, Storybook patterns).
