# sunnyzhang.dev

Personal developer portfolio for Sunny Zhang — projects, education, and contact.
Live at **[sunnyzhang.dev](https://sunnyzhang.dev)**.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animation
- `next/font` (Figtree, Gaegu, JetBrains Mono)
- Deployed on [Vercel](https://vercel.com) with [Vercel Analytics](https://vercel.com/analytics)

## Development

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Structure

```
app/
  layout.tsx            # root layout, fonts, metadata
  page.tsx              # home (bio, education/experience, featured projects)
  projects/page.tsx     # full projects list
  components/           # SiteNav, SocialButtons
  data/projects.ts      # project content (edit this to add/update projects)
  globals.css           # theme tokens + shared utilities
  sitemap.ts robots.ts  # SEO
public/                 # images, icons, resume
```

To add or edit a project, update `app/data/projects.ts`.
