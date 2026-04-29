# Link Shortener Project - Agent Instructions

This file is automatically used by VS Code Copilot and other agents to understand project-specific coding standards.

> ⚠️ **CRITICAL RULE — NO EXCEPTIONS**: Before writing ANY code, you MUST use `read_file` to read the relevant `.md` file(s) in the `/docs` directory. Do not generate code based on assumptions or general knowledge alone. Skipping this step is not allowed.

**For comprehensive guidelines, see [`.instructions.md`](.instructions.md) and the [docs folder](docs/).**

---

## Quick Reference

### Project Type
- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript 5.x (strict mode)
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS 4.x
- **Auth**: Clerk

### Core Standards

✅ **Do**:
- Use TypeScript with strict mode enabled
- Type all component props with interfaces
- Follow Next.js App Router patterns
- Use Server Components by default, Client Components only when needed
- Import from `@/*` (absolute imports)
- Use `cn()` utility for conditional Tailwind classes
- Handle errors with try-catch
- Follow ESLint rules (run `npm run lint`)

❌ **Don't**:
- Use `any` type (use `unknown` instead)
- Create mega-sized components (keep under 300 lines)
- Mix relative and absolute imports
- Hardcode URLs or secrets
- Skip error handling
- Leave console.log statements

---

## File Organization

```
┌─ app/              Next.js routes
├─ components/       React components (ui/, features/, common/)
├─ DB/              Database layer (schema.ts, index.ts)
├─ lib/             Utilities (utils.ts, types.ts)
├─ docs/            Detailed standards by topic

```

---

## Before Starting Work

> 🚨 **MANDATORY — YOU MUST DO THIS FIRST**: Use `read_file` to read the relevant file(s) from the `/docs` directory **before writing a single line of code**. This is non-negotiable. If you skip this step, your output will not conform to project standards.

The following docs files map to specific task types:

| Task Type | Required Doc |
|---|---|
| Authentication / Clerk | `docs/auth-clerk.md` |
| UI / shadcn components | `docs/ui-shadcn.md` |

**If you are unsure which doc applies, read all files in `/docs` before proceeding.**
---

## Key Commands

```bash
# Development
npm run dev        # Start dev server
npm run build      # Build for production
npm run start      # Start production server

# Code Quality
npm run lint       # Check ESLint rules
npm run lint --fix # Auto-fix ESLint issues

# Database
npx drizzle-kit generate    # Generate migrations
npx drizzle-kit migrate     # Run migrations
```

---

## Examples

### Creating a Component

```typescript
// ✅ Good component
'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LinkCardProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

export function LinkCard({ title, onClick, className }: LinkCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'p-4 border rounded-lg bg-white hover:shadow-md transition',
        className
      )}
    >
      {title}
    </div>
  );
}
```

### Database Query

```typescript
// ✅ Good query in DB/index.ts
import { eq } from 'drizzle-orm';
import { shortLinks } from './schema';

export async function getShortLink(shortCode: string) {
  try {
    const result = await db
      .select()
      .from(shortLinks)
      .where(eq(shortLinks.shortCode, shortCode))
      .limit(1);
    
    return result[0] || null;
  } catch (error) {
    console.error('Failed to fetch link:', error);
    throw error;
  }
}
```

### API Response Pattern

```typescript
// ✅ Type-safe response
type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

async function createLink(url: string): Promise<ApiResponse<ShortLink>> {
  try {
    const link = await db.insert(shortLinks).values({...});
    return { success: true, data: link };
  } catch (error) {
    return { success: false, error: 'Failed to create link' };
  }
}
```

---

## Linting & Type Checking

The project enforces:
- **ESLint**: Next.js Core Web Vitals compliance
- **TypeScript**: Strict mode with no implicit `any`

Run before committing:
```bash
npm run lint       # Must pass
npm run build      # Must compile
```

---

## Import Rules

```typescript
// 1. React/Next.js
import { useState } from 'react';
import Link from 'next/link';

// 2. Third-party
import { eq } from 'drizzle-orm';
import { Button } from '@/components/ui/button';

// 3. Local absolute (@/)
import { cn } from '@/lib/utils';
import type { ShortLink } from '@/lib/types';

// 4. Relative (last)
import { LinkItem } from './link-item';
```

---

## For More Details

> 🚨 **REMINDER**: You MUST read the relevant `/docs` file using `read_file` before generating any code. This applies every time, without exception.

Detailed guidelines are located in the `/docs` directory. Always read the relevant file first:
- Authentication tasks → `docs/auth-clerk.md`
- UI tasks → `docs/ui-shadcn.md`

