# Agent Guidelines for BLUETO

## General Principles
- **Strictness**: ALWAYS/NEVER = strict rules. Prefer/Avoid = strong defaults with exceptions allowed
- **Git Operations**: NEVER EVER do ANY git operation (`git add`, `git stage`, `git restore --staged`, `git commit`, `git push`, `git checkout`, `git branch`, `git merge`, `git rebase`, etc.) without EXPLICIT user permission. This is an absolute rule with ZERO exceptions. Only the user initiates git operations
- **Verify Before Implementing**: ALWAYS verify APIs, library features, and configurations using Context7 or official documentation before implementation. NEVER assume attributes, methods, or behavior exist without verification
- **Ask Questions**: ALWAYS ask if unclear. NEVER assume. STOP and ask before proceeding if ANY of:
  - Multiple valid approaches exist
  - User intent could be interpreted multiple ways
  - Requirements are vague or incomplete
  - Design decisions needed (architecture, patterns, data models, APIs)
  - Trade-offs exist between options
  - Scope is ambiguous (what's in/out, how deep to go)

## Feature Workflow
1. **Research**: Understand the codebase, requirements, and constraints before making changes
   - Check existing patterns and implementations for similar functionality
   - Review related Storybook stories to understand expected behavior
   - Identify dependencies and potential side effects
2. **Plan**: Create an initial plan breaking down the task into clear, actionable steps
   - Create a markdown feature file in `docs/features/` named `YYYY-MM-DD-HHMM_FEATURE_NAME.md`
   - Use `date +%Y-%m-%d-%H%M` to get the timestamp (e.g., `docs/features/2025-11-26-1530_AUTHENTICATION.md`)
3. **Present Summary**: Present a brief plan summary to the user
   - Display: "Type `y` to go to clarifying"
   - If user adds context/feedback: immediately update the feature file
   - Continue showing the prompt until user types `y`
   - Only proceed to step 4 (Clarify) after user confirmation
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
   - Update the feature file with each Q&A after answering
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

Key directories:
- `.storybook/` - Storybook configuration
- `src/components/` - Reusable UI components (Button, Table, TextField, etc.)
- `src/foundations/` - Design system primitives (colors, typography, spacing, icons, logos)
- `src/stories/` - Storybook documentation and examples
- `src/utils/` - Shared utilities and helpers
- `src/index.ts` - Public API exports
- `lib/` - Build output (gitignored, published to npm)

## Code Style

### General Principles
- **Simplicity**: Straightforward solutions. No unnecessary intermediate variables—directly invoke/access if used once
- **Paradigm**: Functional only—pure functions, immutability, no classes/mutations
- **Duplicate Code**: Extract to reusable helpers
- **Dependencies**: Check existing before adding new. Prefer well-maintained. Document rationale for major ones

### Style & Formatting
- **Formatting**: Biome (tabs, 120 line width, auto-organize imports), empty line at end of files, whitespace between logical blocks
- **Property Ordering**: Alphabetical by default unless another ordering makes better sense. For mixed objects: primitives first, then nested (both alphabetically)

### Imports & Exports
- **Imports**: `@/` for src/, `./` for same directory only
- **Exports**: ALWAYS at end of file (EOF). Only export what's used elsewhere. Export shared types. Do not export unused code
  - Use inline `type` keyword in export statements: `export { functionName, type TypeName }`
  - Alphabetical ordering for exports (case-insensitive)
- **Default exports preferred**: Nearly every file has default export named as file
  - Named exports only for: types, constants alongside default, or utilities grouping together (rare)
  - Barrel files (index.ts): Only re-export actual consumer imports—remove unused
- **File Organization**: Remove folder if only index file—move up and rename to folder name. No `types.ts` files. Files named as default export
- **Type Location**: Define types in the module where they're **primarily used**, export for other modules to import
- **Component Exports**: Export components and their types from `src/components/index.ts`

### Naming Conventions
- **PascalCase**: Types/Interfaces/Classes (`OrderEvent`, `UserConfig`)
- **camelCase**: Functions/Variables/Constants (`processOrder`, `maxRetries`)
- **Descriptive Names**: Full names, not abbreviations—especially parameters. Exceptions: `i` (index), `error` (catch), single-letter generics (`T`, `K`, `V`)
- **Components**: PascalCase matching filename (e.g., `Button.tsx` exports `Button`)
- **Files**: Named as default export. Component files use PascalCase, utility files use camelCase
- **SCSS Modules**: Component-specific styles named `ComponentName.module.scss`

### TypeScript Practices
- **Types**: Strict, never `any` (use `unknown`). Prefer `type` over `interface`. Infer when obvious. No `types.ts` files—define inline, co-located with primary implementation
- **Type Assertions**: Prefer `satisfies` over `as`. Use type predicates for filters: `items.filter((item): item is NonNullable<typeof item> => item !== null)`
- **Variables**: Prefer `const`. Use `let` only for: lazy init singletons, error cleanup, loop counters, complex state
- **Inline Constants**: Inline strings/numbers used 2-3 times in one module. Extract only when cross-module, complex, or likely to change

### Functions & Control Flow
- **Functions**: Arrow functions, implicit returns when possible
- **Callbacks**: Pass references directly if signatures match: `process.on("SIGINT", shutdown)`
- **Wrapper Functions**: Don't create functions called once at startup—execute at module scope. Don't wrap array functions—use single-item arrays
- **Async**: Prefer async/await
- **Loops**: Prefer functional (map, filter, reduce) over imperative (for, while)
- **Conditionals**: Combine related, reduce nesting. Single-line for simple cases

### Object & Data Handling
- **Object Construction**: Spread dynamic FIRST, explicit LAST (explicit overrides): `{ ...dynamicProps, id: 123 }`
- **Redundant Variables**: Don't create multiple holding same value
- **String Building**: Array join for conditional concat (not `+=`)
- **Method Chaining**: Chain directly unless needed for clarity

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
- **When**: Explain "why" not "what"—business logic, workarounds, non-obvious decisions
- **Avoid**: NEVER restate code. If self-explanatory, no comment needed
- **TODOs**: `// TODO:` with context (optional ticket ref)

### Error Handling
- **Validation**: Validate component props when necessary, provide clear error messages
- **Error Boundaries**: Components should not throw - handle errors gracefully or propagate to parent
- **Accessibility**: Ensure proper ARIA attributes and semantic HTML

## Quality Gates

Run in this order to fail fast:

1. TypeScript compilation must succeed with no errors (`npm run typecheck`)
2. Biome linting must pass (`npm run lint`)
3. Project must build successfully (`npm run build`)
4. Storybook must run without errors (`npm run dev`)

## Version Control

### CRITICAL: Explicit Permission Required
- **NEVER do ANY git operation without explicit user permission** - This includes: commit, push, stage, unstage, branch operations, merges, rebases, etc.
- **ALWAYS wait for user to type `y`, `c`, or `p`** before executing ANY git command
- **Even if quality gates pass, even if the user said "commit" earlier in the conversation, even if it seems obvious** - STOP and ask for confirmation with the exact options below
- **No exceptions. No shortcuts. No assuming intent.**

### Quality Gates & Timing
- **Quality Gates Required**: Run ALL quality gates before ANY git operation. If any gate fails, inform the user and stop
- **When to Ask About Committing**: Ask when you feel like it makes sense
  - Logical unit complete (feature/bugfix/refactor/task finished)
  - Quality gates pass (or minimally, changes validated)
  - Before significantly different task
  - **Key principle**: When in doubt, ask. Only skip if certain larger commit coming
- **Commit Workflow**: NEVER commit automatically. Only ask when logical
  - Ask: "Type `y` to start committing"
  - If "y": Run quality gates first. If any gate fails, inform the user and stop. Then proceed with commit workflow:
    - Check staged files (`git status`, `git diff --staged`)
    - Display: files to unstage (if any), additional files to stage (if any), proposed commit message (conventional format describing ALL changes), horizontal rule (`---`)
    - Display options based on staging needs:
      - If staging changes needed (files to unstage or additional files to stage): Type `s` to stage | `c` to stage and commit | `p` to stage, commit and push
      - If no staging changes needed: Type `c` to commit | `p` to commit and push
    - On `s`: unstage specified files, stage additional files, show staged changes, prompt with `c`/`p` options
    - On `c`/`p`: perform staging changes if needed, then commit (and push if `p`)
    - On other response: treat as instruction (modify message, change files, make more changes, etc.)
    - If file changes made relevant to current commit: restart entire workflow from beginning
  - On other response: treat as instruction (don't start commit workflow)
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
