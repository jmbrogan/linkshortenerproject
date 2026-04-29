# UI Standards - shadcn/ui

Use these rules for all UI work in this project.

## Required Rules

- Use shadcn/ui components for all UI elements.
- Do not create custom UI components when a shadcn/ui component can be used.
- Build new screens by composing existing shadcn/ui components.
- Prefer extending shadcn/ui with variants, props, and utility classes over creating new base primitives.

## Implementation Notes

- Import components from `@/components/ui/*`.
- Keep styling aligned with existing Tailwind tokens and utility patterns.
- If a required shadcn/ui component is missing, add it through the shadcn setup flow before building UI with alternatives.

## PR / Review Checklist

- Every visible control uses shadcn/ui.
- No custom button, input, select, dialog, card, table, or form primitives were introduced.
- UI remains consistent with existing app patterns.