# Agent Guidelines for BLUETO

## General Principles
- **Strictness**: ALWAYS/NEVER = strict rules. Prefer/Avoid = strong defaults with exceptions allowed
- **Verify Before Implementing**: ALWAYS verify APIs, library features, and configurations using Context7 or official documentation before implementation. NEVER assume attributes, methods, or behavior exist without verification
- **Ask Questions**: ALWAYS ask if unclear. NEVER assume. STOP and ask before proceeding if ANY of:
  - Multiple valid approaches exist
  - User intent could be interpreted multiple ways
  - Requirements are vague or incomplete
  - Design decisions needed (architecture, patterns, data models, APIs)
  - Trade-offs exist between options
  - Scope is ambiguous (what's in/out, how deep to go)

## Workflow
1. **Research**: Understand the codebase, requirements, and constraints before making changes
   - Check existing patterns and implementations for similar functionality
   - Review related Storybook stories to understand expected behavior
   - Identify dependencies and potential side effects
2. **Plan**: Create an initial plan breaking down the task into clear, actionable steps
   - For complex features (significant architectural changes, 3+ files affected, new external integrations), create a markdown plan file named `FEATURE_NAME_PLAN.md` (e.g., `TABLE_COMPONENT_PLAN.md`)
   - Plan files are temporary working documents - do NOT commit them to version control
   - NEVER delete plan files - leave them for the user to manage
   - For simpler tasks, a clear written plan in the conversation is sufficient
3. **Present Summary**: Present a brief plan summary to the user, allowing early feedback on approach, scope, or direction
4. **Clarify**: Ask questions to ensure complete understanding. REQUIRED before implementation if ANY ambiguity exists
   - Ask ONE question at a time, wait for answer, then ask the next question
   - Use previous answers to inform subsequent questions
   - Format each question as:
     ```
     **Question:** [question]?
     (1) [option]
     (2) [option]
     ```
     Mention that text answers are welcome (pick number, add context, or free-form text). Don't include "text answer" as a numbered option
   - Update plan with each Q&A after answering (in plan file if created, or in conversation)
   - Continue until ALL ambiguities resolved - don't stop after pre-written questions. Proactively identify new ambiguities and ask follow-ups. Don't ask permission to continue
   - Know when to stop: architecture, file structure, user-facing changes, breaking changes, major patterns - NOT minor implementation details
   - After all questions: comprehensively update plan with all decisions
   - NEVER skip if uncertain - defaulting to assumption is unacceptable
5. **Confirm**: Present the final plan summary and ask "Type `y` to implement this plan"
   - If "y": proceed to implementation
   - If other feedback: adjust the plan and ask for confirmation again
6. **Implement**: Execute the plan incrementally, following code style and architecture guidelines
   - Create Storybook stories alongside component implementation
   - Make incremental commits for major milestones if working on large features
7. **Validate**: Run all quality gates in order to ensure correctness (see Quality Gates section)
   - If any gate fails: fix issues and re-run all gates from the beginning
8. **Complete**: After all quality gates pass, summarize changes made and ask about committing (see Version Control section)

## Architecture

**Project Type**: React component library (design system)

**Purpose**: BLUETO is Blue Tomato's design system providing reusable UI components, design tokens, and brand assets

**Key Technologies**:
- **React 18+**: Core UI framework (peer dependency)
- **TypeScript**: Type-safe component development with strict mode
- **Vite**: Build tool for library bundling (ES modules)
- **Storybook**: Component development environment and documentation
- **SCSS Modules**: Component styling with CSS Modules
- **Biome**: Linting and formatting

**Dependencies**:
- `classnames`: Conditional CSS class composition
- `es-toolkit`: Modern utility library
- `react-tooltip`: Tooltip functionality
- `type-fest`: TypeScript utility types

**Build Output**: ES module library published to npm at `@blue-tomato/blueto`

## Project Structure

```
src/
  components/        # Reusable UI components (Button, Table, TextField, etc.)
  foundations/       # Design system primitives
    brandlogos/      # Blue Tomato brand logos in various formats
    icons/           # Icon sets (functional, social, payment, support, flags, carriers)
    colors.module.scss
    typography.module.scss
    spacing.module.scss
  stories/           # Storybook documentation and examples
    components/      # Component stories
    foundations/     # Foundation stories
  utils/             # Shared utilities and helpers
  types.ts           # Shared TypeScript types
  index.ts           # Public API exports
  index.module.scss  # Global styles
.storybook/          # Storybook configuration
lib/                 # Build output (gitignored, published to npm)
```

## Code Style

### General Principles
- **Simplicity**: Prefer straightforward solutions. Eliminate unnecessary intermediate variables - directly invoke/access when only used once
- **Paradigm**: Functional programming only - pure functions, immutability, no classes/mutations
- **Duplicate Code**: Extract repeated patterns into reusable helpers
- **Dependencies**: Check if existing dependencies solve the problem before adding new ones. Prefer well-maintained libraries. Document rationale for major dependencies

### Style & Formatting
- **Formatting**: Biome (tabs for indentation, auto-organize imports), empty line at end of files, whitespace between logical blocks
- **Property Ordering**: Alphabetical by default unless another ordering makes better sense. For mixed objects: primitives first, then nested (both alphabetically)

### Imports & Exports
- **Imports**: `@/` for src/, `./` for same directory only
- **Exports**: At end of files. Only export what's used elsewhere. Export shared types. Do not export unused code
- **Component Exports**: Export components and their types from `src/components/index.ts`

### Naming Conventions
- **Types/Interfaces**: PascalCase (e.g., `ButtonProps`, `TooltipPlacement`)
- **Functions/Variables/Constants**: camelCase (e.g., `transformRange`, `maxRetries`)
- **Components**: PascalCase matching filename (e.g., `Button.tsx` exports `Button`)
- **Files**: Named as the default export. Component files use PascalCase, utility files use camelCase
- **SCSS Modules**: Component-specific styles named `ComponentName.module.scss`

### TypeScript Practices
- **Types**: Strict TypeScript, never `any` - use `unknown` or proper types
  - Prefer `type` over `interface`
  - Let TypeScript infer types when obvious
  - Don't duplicate type definitions
  - Define component prop types inline unless shared
- **Variables**: Prefer `const` over `let`
  - Only use `let` for: singletons with lazy init, error handling/cleanup reassignments, loop counters, complex state management

### Functions & Control Flow
- **Functions**: Arrow functions preferred. Use implicit returns when possible
- **Callback Wrappers**: Pass function references directly when signatures match
  ```ts
  // Good
  onChange(handleChange)
  // Bad
  onChange={(e) => handleChange(e)}
  ```
- **Async**: Prefer async/await over callbacks/promises
- **Redundant Async**: Only use async/await when adding error handling or sequencing logic
- **Conditional Logic**: Combine related conditions - reduce nesting. Prefer single-line statements for simple conditions
  ```ts
  // Good for simple cases
  if (!value) throw new Error('Value required');
  ```

### Object & Data Handling
- **Object Construction**: Generally spread dynamic properties FIRST, explicit properties LAST (unless intentionally allowing overrides)
  ```ts
  // Preferred: explicit properties override spreads
  const props = { ...dynamicProps, className: styles.button, disabled }
  ```
- **Redundant Variables**: Don't create multiple variables holding same value
- **String Building**: Use array join for conditional concatenation instead of `+=`
- **Method Chaining**: Chain directly instead of storing intermediate results (unless needed for clarity/reuse)

### Component Patterns
- **Component Structure**: Functional components only, no class components
- **Props**: Destructure props with TypeScript type annotation
  ```ts
  type ButtonProps = {
  	variant?: 'primary' | 'secondary';
  	disabled?: boolean;
  	children: React.ReactNode;
  }
  
  export const Button = ({ variant = 'primary', disabled, children }: ButtonProps) => {
  	// implementation
  }
  ```
- **CSS Modules**: Import styles and use with `className` prop. Use `classnames` for conditional classes
  ```ts
  import classNames from 'classnames';
  import styles from './Button.module.scss';
  
  className={classNames(styles.button, styles[variant], { [styles.disabled]: disabled })}
  ```
- **Exports**: Default export for components, named exports for types

### SCSS Styling
- **Modules**: Use CSS Modules for component styles (`.module.scss`)
- **Variables**: Use design tokens from `foundations/` (colors, spacing, typography)
- **Class Names**: camelCase matching TypeScript usage (e.g., `.button`, `.buttonPrimary`)
- **Structure**: Component root class first, modifiers/variants next, nested elements last

### Comments & Documentation
- **When to Comment**: Explain "why" not "what" - document business logic, design decisions, accessibility considerations
- **Avoid**: Redundant comments that restate code
- **TODOs**: Use `// TODO:` with context and optionally a ticket reference

### Error Handling
- **Validation**: Validate component props when necessary, provide clear error messages
- **Error Boundaries**: Components should not throw - handle errors gracefully or propagate to parent
- **Accessibility**: Ensure proper ARIA attributes and semantic HTML

## Quality Gates

Run in this order to fail fast:

1. **TypeScript compilation** must succeed with no errors (`npm run typecheck`)
2. **Biome linting** must pass (`npm run lint`)
3. **Project must build** successfully (`npm run build`)
4. **Storybook must run** without errors (`npm run dev`)

## Version Control
- **NEVER do ANY git operation without explicit user permission** - This includes: commit, push, stage, unstage, branch operations, merges, rebases, etc.
- **Commit Workflow**: NEVER commit automatically. Only ask when logical
  - Before asking: check staged files (`git status`, `git diff --staged`)
  - Display: files to unstage (if any), additional files to stage (if any), proposed commit message (conventional format describing ALL changes), horizontal rule (`---`)
  - Display options based on staging needs:
    - If staging changes needed (files to unstage or additional files to stage): `s` to stage | `c` to stage and commit | `p` to stage, commit and push
    - If no staging changes needed: `c` to commit | `p` to commit and push
  - On `s`: unstage specified files, stage additional files, show staged changes, prompt with `c`/`p` options
  - On `c`/`p`: perform staging changes if needed, then commit (and push if `p`)
  - On other response: treat as instruction (modify message, change files, make more changes, etc.)
  - If file changes made relevant to current commit: restart entire workflow from beginning
- **When to Ask About Committing**: Ask when task complete AND no clear indication more changes coming
  - Logical unit complete (feature/bugfix/refactor/task finished)
  - Quality gates pass (or minimally, changes validated)
  - Before significantly different task
  - **Key principle**: When in doubt, ask. Only skip if certain larger commit coming
- **Commit Message Format**: `emoji type(scope): description`
  - Examples: `✨ feat(button): add loading state` | `🐛 fix(table): handle empty data` | `♻️ refactor(tooltip): simplify positioning logic`
  - **Body**: Keep simple and concise. Skip body for obvious changes. Use bullet list only for meaningful details (key architectural decisions, breaking changes, important context). Avoid exhaustive change lists
- **Types with Emojis**:
  - `✨ feat` - New feature or component
  - `🐛 fix` - Bug fix
  - `♻️ refactor` - Code refactoring
  - `📚 docs` - Documentation/Storybook changes
  - `🔧 chore` - Maintenance tasks
  - `🎨 style` - Code style/formatting changes or visual styling updates
  - `♿ a11y` - Accessibility improvements
- **Scope**: Component name (e.g., `button`, `table`, `icon`), `foundations`, `stories`, `utils`, `build`, or omit for global changes

## Commands
- **Build**: `npm run build` (production library build)
- **Build Analysis**: `npm run build:analyze` (analyze bundle size)
- **Dev**: `npm run dev` (start Storybook on port 6006)
- **Lint**: `npm run lint` (run Biome linter with auto-fix)
- **Typecheck**: `npm run typecheck` (run TypeScript type checking)
- **Build Storybook**: `npm run build:storybook` (static Storybook build)
