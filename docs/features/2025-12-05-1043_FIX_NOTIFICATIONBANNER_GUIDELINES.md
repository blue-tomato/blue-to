# Feature: Fix NotificationBanner to Follow AGENTS.md Guidelines

## Goal
Update NotificationBanner component, SCSS, and stories to follow the code style guidelines defined in AGENTS.md.

## Files to Update
- `src/components/NotificationBanner.tsx`
- `src/components/NotificationBanner.module.scss`
- `src/stories/components/NotificationBanner.stories.tsx`

## Violations Found

### NotificationBanner.tsx
1. **classNames Order** - `className` should be first (for override), then base styles, then conditional modifiers
   - Current: `styles.banner`, object with modifiers, `className`
   - Should be: `className`, `styles.banner`, condition-based modifiers

2. **classNames pattern** - Uses object notation `{ [styles.error]: type === "error" }` but codebase prefers `&&` pattern
   - Should use: `type === "error" && styles.error`

### NotificationBanner.module.scss
3. **Root Class naming** - Uses `.banner` but component is a container with multiple elements
   - Should use: `.wrapper`

### NotificationBanner.stories.tsx
4. **Default Story missing** - Has `Information` as first story instead of `Default`
   - Should add: `const Default: StoryMeta<typeof NotificationBanner> = {};`

5. **Exports ordering** - Should be alphabetically ordered
   - Current: `Information, Success, WithError`
   - Should be: `Default, Information, Success, WithError`

## Clarifying Q&A

### Q1: classNames pattern
**Question:** Convert object notation to `&&` pattern?
**Answer:** (1) Yes, convert to `&&` pattern to match codebase style

## Status
- [x] Fix component classNames order and pattern
- [x] Rename SCSS root class to .wrapper
- [x] Add Default story
- [x] Fix exports ordering
- [x] Run quality gates (passed - lint errors in ProductTile are out of scope)
