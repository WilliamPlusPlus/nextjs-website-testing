# Next.js on GitHub Pages

A minimal Next.js 15 starter project originally configured for GitHub Pages static export.

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata
  - `page.tsx` - Home page
- `next.config.ts` - Next.js configuration (static export only in production)
- `package.json` - Dependencies and scripts

## Development

- Runs on port 5000 with host 0.0.0.0
- Uses Turbopack for fast development builds
- Command: `npm run dev`

## Deployment

- Deployment target: static
- Build command: `npm run build` (produces `out/` directory via Next.js static export)
- Public directory: `out/`

## Notes

- The `output: 'export'` in `next.config.ts` is only active in production (`NODE_ENV=production`) to allow normal dev server operation in Replit
- Uses pnpm as the package manager
