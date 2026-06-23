# Findings & Decisions

## Requirements

- Build a one-page showcase website for `Monster Data Studio`.
- The site is for data analysis/modeling service orders, not a resume.
- No login, backend, database, payment, or real form sending in Version 1.
- Required sections: Hero, Services, Selected Works, Process, Tools & Methods, About, FAQ, Contact, Footer.
- Brand usage must be limited to `Monster` and `Monster Data Studio`.
- Do not include real names, private client data, or claims like `包过`, `保证显著`, `代写论文`, `保证高分`.
- Visual style: restrained, premium, Apple-inspired, dark black/gray palette with sparse ice-blue accents.
- Mobile support is required, including around 390px width with no horizontal overflow.
- Browser QA is required after implementation.

## Research Findings

- Workspace initially contained only `.git`; no existing app files to preserve.
- `build-web-apps@openai-curated` is not exposed as an available skill/tool in this session.
- `browser:control-in-app-browser` is available and should be used during browser QA.
- `ponytail` is available and requires minimal, non-overengineered implementation.
- Production build passed.
- Browser QA passed at 1440, 1280, and 390 widths with no horizontal overflow.
- Full-page screenshots were unreliable with smooth scrolling in the browser tool, so final QA screenshots use viewport captures.
- Professional proof upgrade passed build and browser QA: Selected Works now has six advanced cases with distinct mock visuals, Analysis Stack replaces the tag wall, and FAQ has cooperation notes plus twelve questions.
- Deployment preparation build passed through the local Next.js binary.
- The current Codex runtime does not expose `npm`, so the requested `npm run build` command cannot run in this local tool environment.
- GitHub and Vercel deployment plugin tools are not exposed in this session; manual GitHub/Vercel steps are required unless the user installs the curated plugins.
- `.env`, `.env.local`, and `.env.*.local` are ignored; `.env.local` must not be pushed to GitHub.

## Technical Decisions

| Decision | Rationale |
|----------|-----------|
| Use Next.js/React/Tailwind if dependencies can be installed | Matches user-preferred stack |
| Centralize repeated copy/data in `src/lib/content.ts` | Keeps section components clean and future edits easier |
| Use CSS/native behavior where sufficient | Reduces dependencies and complexity |
| Use frontend-only form confirmation | Required by no-backend Version 1 scope |

## Issues Encountered

| Issue | Resolution |
|-------|------------|
| Empty project directory | Treat as greenfield Next.js project |
| Requested build-web-apps plugin unavailable | Noted install command and continue with available tools unless user installs it |
| pnpm install DNS failure in sandbox | Re-ran with network escalation |
| pnpm blocked `sharp` scripts | Approved only `sharp` |
| `pnpm build` non-TTY dependency check | Used local Next binary with bundled Node path |
| Browser `networkidle` unsupported | Used `load` plus targeted waits |
| Smooth-scroll screenshot timing | Used precise scroll offsets and longer waits for final QA screenshots |
| `npm` unavailable in Codex runtime | Used local Next binary for equivalent production build |
| GitHub/Vercel deployment plugins unavailable | Documented manual deployment steps and plugin install commands |

## Resources

- User request attachment: `/Users/monster/.codex/attachments/850b97df-af38-4af3-9c62-48dbabbde6dd/pasted-text.txt`
- Project docs:
  - `docs/REQUIREMENTS.md`
  - `docs/DESIGN_SYSTEM.md`
  - `docs/TASK_PLAN.md`
  - `docs/CHANGELOG.md`
- QA screenshots:
  - `docs/qa/final-desktop-1440-top.png`
  - `docs/qa/final-laptop-1280-top.png`
  - `docs/qa/final-mobile-390-top.png`
  - `docs/qa/upgrade-works-desktop.png`
  - `docs/qa/upgrade-analysis-stack-desktop-final.png`
  - `docs/qa/upgrade-faq-desktop-final.png`
  - `docs/qa/upgrade-works-mobile-390.png`
  - `docs/qa/upgrade-modal-mobile-390.png`

## Visual/Browser Findings

- Desktop 1440 screenshot shows Hero, glass navigation, CTA buttons, and abstract data workspace mockup correctly.
- Mobile 390 screenshot shows stacked Hero, mobile menu button, readable text, tappable CTAs, and no horizontal overflow.
- Desktop upgrade screenshots show advanced case visuals, Analysis Stack matrix, and FAQ commitment cards.
- Mobile upgrade screenshots show single-column case cards, scrollable case modal, Analysis Stack, and FAQ without horizontal overflow.
