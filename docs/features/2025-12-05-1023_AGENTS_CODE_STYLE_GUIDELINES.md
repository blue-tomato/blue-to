# Feature: AGENTS.md Code Style Guidelines Enhancement

## Goal
Analyze the complete codebase (excluding NotificationBanner and ProductTile) to identify code style and form guidelines that should be added to AGENTS.md.

## Analysis Summary

Analyzed the following files:
- Components: Button, Breadcrumb, Checkbox, TextField, Pagination, Tooltip, Icon, RadioButton, CategoryButton, SizeButton, PasswordField, RangeSlider (multi-file), Table (multi-file), Caption
- SCSS files: Button, Checkbox, TextField, Pagination, Icon, Slider, and foundations (colors, spacing, typography)
- Stories: Button, Checkbox, Breadcrumb, Pagination, Tooltip, TextField, RangeSlider, Table, CategoryButton, RadioButton
- Utilities: index.ts, transformRange.ts
- Index files: components/index.ts, src/index.ts, foundations/icons/index.ts

## New Guidelines Identified

### 1. Component forwardRef Pattern
- Most components use `forwardRef` for ref forwarding
- Ref element type and Props type as generic parameters

### 2. Props Type Definition
- Always use `type Props = ` (not `ComponentNameProps`)
- Extend native HTML element attributes (e.g., `React.ButtonHTMLAttributes<HTMLButtonElement>`)
- Use `&` intersection to add custom props

### 3. Component Props Spreading
- `{...props}` spread on root element
- Explicit props come before spread for override capability
- `ref` is always the first prop on the forwarded element

### 4. Storybook Patterns
- Default export always named `Docs` (not `Meta`)
- All stories use `StoryMeta<typeof Component>` type from `@/types`
- Story file extension: `.stories.ts` or `.stories.tsx`
- Story names: PascalCase, descriptive (e.g., `WithError`, `WithLongText`)
- Title format: `"BLUETO/components/[ComponentName]"` with optional subdirectories
- Always export a `Default` story with empty object `{}`
- Include `parameters.links` with confluence/figma keys

### 5. SCSS Patterns (Refinements)
- Always import: `@use "@/index.module.scss" as *;`
- Root class naming: `.wrapper` for container components
- Separate modifier classes, not BEM (e.g., `.active`, `.disabled`)
- Use `@extend` for shared styles within same file
- Inline media queries
- Local `@mixin` for repeated patterns within a file

### 6. Icon Prop Type Pattern
- Common type: `type IconProp = React.ComponentProps<typeof Icon>["icon"] | React.ReactElement;`
- Or simpler: `type IconProp = React.ComponentProps<typeof Icon>["icon"];`

### 7. useId Pattern for Accessibility
- Use `useId().slice(1, -1)` for clean IDs without React's colon characters

### 8. Conditional Rendering
- Use `{condition && <Element />}` not ternaries for optional elements
- Use ternary only when both branches render something

### 9. classNames Usage
- Pattern: `classNames(className, styles.root, condition && styles.modifier)`
- Or with object: `{ [styles.active]: active }`

### 10. Multi-file Component Structure
- Folder named after component (e.g., `RangeSlider/`)
- Main component in `index.tsx`
- Sub-components in separate files
- Each file can have its own `.module.scss`

### 11. Utility Function Structure
- Default export for utility functions
- Re-export as named in barrel: `export { default as transformRange } from "./transformRange";`

### 12. Biome Lint Ignore Pattern
- Format: `// biome-ignore lint/suspicious/noArrayIndexKey: <reason>`

## Clarifying Q&A

### Q1: forwardRef pattern
**Question:** Should all components use forwardRef?
**Answer:** (3) forwardRef is optional - use when ref forwarding is needed

### Q2: Props type naming
**Question:** Should props always be named `type Props`?
**Answer:** (1) ALWAYS use `type Props` - strict rule

### Q3: Storybook default export naming
**Question:** Should default export always be named `Docs`?
**Answer:** (3) Don't document this - not important

### Q4: Storybook Patterns section
**Question:** Should I add a dedicated Storybook section?
**Answer:** (1) Yes, add a dedicated Storybook section with all patterns

### Q5: SCSS root class naming
**Question:** How should root classes be named?
**Answer:** (2) Use `.wrapper` for containers with multiple elements, use component name (e.g., `.button`) for single-element components

### Q6: SCSS modifier classes
**Question:** Should we document separate modifier classes vs BEM?
**Answer:** (1) Yes, document: use separate modifier classes, NOT BEM

### Q7: Conditional rendering
**Question:** Should we document the conditional rendering pattern?
**Answer:** (1) Yes, prefer `&&` for optional elements, ternary only when both branches render something

### Q8: Multi-file component structure
**Question:** Should we document the folder structure for multi-file components?
**Answer:** (1) Yes, document this - applies to components with sub-components: folder named after component, main component in `index.tsx`, sub-components in separate files

### Q9: Props spreading order
**Question:** Should we document the props order on JSX elements?
**Answer:** (1) Yes, document: ref first, explicit props (alphabetically ordered), then spread `{...props}` last

### Q10: useId pattern
**Question:** Should we document `useId().slice(1, -1)` pattern?
**Answer:** (3) Don't document this

### Q11: IconProp type pattern
**Question:** Should we document the IconProp type pattern?
**Answer:** Skipped - continue

### Q12: Biome lint ignore pattern
**Question:** Should we document the biome-ignore comment format?
**Answer:** (3) Don't document this

### Q13: classNames ordering pattern
**Question:** Should we document the classNames argument ordering?
**Answer:** (1) Yes, document: `className` prop first (for override), then base styles, then conditional modifiers

### Q14: Props extending native HTML attributes
**Question:** Should we document Props extending native HTML element attributes?
**Answer:** (1) Yes, document: Props should extend native HTML element attributes (e.g., `React.ButtonHTMLAttributes<HTMLButtonElement>`)

## Status
- [x] Analyze codebase
- [x] Identify new guidelines
- [x] Add to AGENTS.md
- [x] Present for review (completed, forwardRef rule removed per user request)
