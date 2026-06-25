# Changelog

## 2026-06-25

### CloudBase Deployment Fix

- Fixed the CloudBase deployment failure caused by production startup loading `next.config.ts` without TypeScript available.
- Replaced `next.config.ts` with `next.config.mjs` while preserving the existing Next.js `output: "standalone"` configuration.
- Added a project `Dockerfile` so Tencent CloudBase uses the repository Dockerfile instead of an auto-generated Dockerfile.
- Updated the production start script to listen on `0.0.0.0:3000`.
- Tencent CloudBase deployment should set Dockerfile: 有.

## 2026-06-23

### Deployment Preparation

- Confirmed the project is a Next.js app with the required scripts:
  - `dev`
  - `build`
  - `start`
- Attempted the requested `npm run build`, but this Codex runtime does not provide an `npm` executable.
- Ran the equivalent production build through the local Next.js binary:
  - `PATH=/Users/monster/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH ./node_modules/.bin/next build`
- Production build passed:
  - `/` is generated as static content
  - `/api/contact` remains a dynamic server route
- Checked the Contact API production behavior:
  - Uses `process.env.QQ_EMAIL_USER`
  - Uses `process.env.QQ_EMAIL_AUTH_CODE`
  - Uses `process.env.CONTACT_TO_EMAIL`
  - Uses QQ SMTP host `smtp.qq.com`
  - Does not hardcode the QQ authorization code
  - Returns friendly frontend-safe errors when configuration or sending fails
- Confirmed `.env.example` contains:
  - `QQ_EMAIL_USER=`
  - `QQ_EMAIL_AUTH_CODE=`
  - `CONTACT_TO_EMAIL=`
- Updated `.gitignore` to explicitly ignore local environment files:
  - `.env`
  - `.env.local`
  - `.env.*.local`
- Verified `.env.local`, `.env`, and `.env.production.local` are ignored by git.

### Deployment Tooling Status

- Vercel plugin tooling is not currently exposed in this Codex session.
- GitHub plugin tooling is not currently exposed in this Codex session.
- To enable direct assisted deployment in a future session, install:

```bash
codex plugin add github@openai-curated
codex plugin add vercel@openai-curated
```

### Manual GitHub Deployment Steps

1. Create a new GitHub repository.
2. Add it as the project remote:

```bash
git remote add origin <你的 GitHub 仓库地址>
git branch -M main
git push -u origin main
```

Do not commit `.env.local` or any real QQ authorization code.

### Manual Vercel Deployment Steps

Recommended Vercel settings:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: default
- Root Directory: the folder containing `package.json`

If Vercel auto-detects `pnpm-lock.yaml`, leaving the Install Command as default is also acceptable.

Configure these environment variables in the Vercel project dashboard:

```env
QQ_EMAIL_USER=我的QQ邮箱
QQ_EMAIL_AUTH_CODE=我的QQ邮箱授权码
CONTACT_TO_EMAIL=我的接收邮箱
```

After adding or changing environment variables, redeploy the Vercel project.

### Online Test Checklist

- Open the public Vercel URL.
- Confirm the Hero section displays normally.
- Confirm Selected Works displays normally.
- Confirm the Contact form displays normally on desktop and mobile.
- Submit a complete Contact form and check whether the QQ mailbox receives the email.
- If email does not arrive, check:
  - Vercel environment variables
  - QQ Mail SMTP status
  - QQ authorization code validity
  - Spam folder
  - Vercel Function logs for `/api/contact`

### Public URL

- Not deployed from this session because GitHub/Vercel deployment plugins are not available yet.

### QQ Mail SMTP Contact Form

- Added real Contact form submission through a Next.js API route.
- Added QQ Mail SMTP email delivery with Nodemailer.
- Added server-side validation:
  - 项目类型不能为空
  - 联系方式不能为空
  - 项目说明不能为空
  - Field length limits prevent unusually long input
  - Missing environment variables return a friendly error
  - Server error details are logged server-side only and not exposed to the frontend
- Updated the Contact form to:
  - Collect all fields with React state
  - Submit JSON to `/api/contact`
  - Show `提交中...` while sending
  - Prevent duplicate submits while sending
  - Show success or failure messages
  - Clear the form after successful submission
  - Show frontend validation when required fields are missing
- Added `.env.example` template without real secrets.
- Updated `.gitignore` so `.env.local` and `.env*.local` are not committed.

### Files Modified / Created

- `.env.example`
- `.gitignore`
- `package.json`
- `pnpm-lock.yaml`
- `src/app/api/contact/route.ts`
- `src/components/Contact.tsx`
- `docs/REQUIREMENTS.md`
- `docs/CHANGELOG.md`
- `docs/qa/contact-email-desktop.png`
- `docs/qa/contact-email-mobile-390.png`

### Dependencies Added

- `nodemailer`
- `@types/nodemailer`

### Environment Variables

Create `.env.local` manually in the project root:

```env
QQ_EMAIL_USER=你的完整QQ邮箱，例如 2748894504@qq.com
QQ_EMAIL_AUTH_CODE=你的QQ邮箱授权码，不是QQ登录密码
CONTACT_TO_EMAIL=接收客户需求的邮箱，可以和 QQ_EMAIL_USER 一样
```

Do not send the authorization code in chat. Do not commit `.env.local`.

### Local Test Results

- Production build passed:
  - `PATH=/Users/monster/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH ./node_modules/.bin/next build`
- Local preview used:
  - `http://127.0.0.1:3001`
- API tests:
  - Empty payload returned `请选择项目类型。`
  - Missing contact returned `请填写联系方式。`
  - Complete payload without `.env.local` returned `邮件服务暂未配置，请稍后重试。`
- Frontend tests:
  - Empty form submit showed frontend validation text
  - Filled form submit without `.env.local` showed friendly configuration error
  - Mobile 390px Contact form has no horizontal overflow
- Real email sending was not tested because `.env.local` with the real QQ authorization code was intentionally not created by Codex.

### How To Test Email Sending

1. Create `.env.local` from `.env.example`.
2. Fill in `QQ_EMAIL_USER`, `QQ_EMAIL_AUTH_CODE`, and `CONTACT_TO_EMAIL`.
3. Restart the dev server.
4. Open the site and submit the Contact form with valid content.
5. Check the inbox for `Monster Data Studio 新需求提交 - {项目类型}`.

### Deployment Note

When deploying to Vercel or Netlify, configure the same environment variables in the platform dashboard:

- `QQ_EMAIL_USER`
- `QQ_EMAIL_AUTH_CODE`
- `CONTACT_TO_EMAIL`

### Known Issues / Remaining Work

- Email delivery depends on QQ Mail SMTP being enabled and the authorization code being valid.
- Some serverless deployment providers may restrict outbound SMTP. If emails do not send in production, use a form/email service or provider-supported mail API.

## 2026-06-22

### Hero First-Screen Optimization

- Updated Hero information hierarchy for Chinese clients.
- Reduced `Monster Data Studio` from the largest title to a small brand label above the main headline.
- Replaced the largest title with:
  - `专业数据分析与建模交付服务`
- Rewrote the Hero description to focus on data cleaning, statistical modeling, machine learning prediction, visualization, reproducible code, and Word report delivery.
- Changed the primary CTA from `查看作品` to `查看案例`.
- Added professional proof cards:
  - 统计分析与论文结果表
  - 机器学习预测与模型解释
  - 可复现交付
- Added compact proof tags:
  - 稳健性检验
  - ROC / 校准曲线 / DCA
  - 文本分析 / GIS / 可视化报告
- Reworked the right-side Hero mockup into a professional analysis delivery workspace:
  - Forecast line chart with prediction interval
  - Model validation metrics card
  - SHAP / feature-importance bars
  - Complete delivery package card

### Files Modified For Hero

- `docs/REQUIREMENTS.md`
- `docs/CHANGELOG.md`
- `src/components/Hero.tsx`

### Hero Browser QA

- Production build passed:
  - `PATH=/Users/monster/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH ./node_modules/.bin/next build`
- Browser preview used:
  - `http://127.0.0.1:3001`
- 3000 was unavailable during this check, so 3001 was used for the same local Next.js app.
- Desktop 1440 x 1000:
  - Largest heading is `专业数据分析与建模交付服务`
  - `Monster Data Studio` appears as small brand text
  - Professional proof cards are visible in the first screen
  - Right-side mockup shows forecasting, validation, SHAP, and delivery package
  - No horizontal overflow
- Mobile 390 x 844:
  - Chinese title does not overflow
  - Buttons are easy to tap
  - Ability cards stack cleanly
  - Right-side mockup moves below the text and remains readable
  - No horizontal overflow
- QA screenshots saved:
  - `docs/qa/hero-optimized-desktop-1440.png`
  - `docs/qa/hero-optimized-mobile-390.png`
  - `docs/qa/hero-optimized-mobile-390-mockup.png`

### Hero Known Issues / Remaining Work

- No known Hero layout blockers.
- Future improvement: after real service positioning is finalized, refine the Hero subtitle for a more specific audience such as thesis analysis, business analysis, medical statistics, or machine learning projects.

### Professional Proof Upgrade

- Kept the existing Hero, black glass visual direction, navigation, smooth scrolling, and overall landing page structure.
- Upgraded `Selected Works` into a stronger case proof section with six advanced desensitized cases:
  - 多变量时间序列销量预测
  - 用户生命周期与流失预测
  - 医学风险预测模型
  - 问卷结构方程 / 信效度 / 中介调节分析
  - 文本主题建模与情感分析
  - 空间数据与交互地图分析
- Added distinct CSS/SVG mock analysis visuals:
  - Forecast line chart with error band
  - Segmentation scatter plus SHAP bars
  - ROC plus calibration curve
  - SEM path diagram plus reliability indicators
  - Topic bubbles plus word-frequency bars
  - Spatial grid plus heat points
- Expanded case cards with:
  - Complexity
  - Analysis problem
  - Workflow
  - Core metrics
  - Deliverables
  - Technology tags
- Upgraded case detail modal with background, data type, analysis goal, workflow, metrics, representative mock chart, and deliverable files.
- Replaced the old `Tools & Methods` tag wall with `Analysis Stack`, a five-module capability matrix:
  - Data Pipeline
  - Statistical Inference
  - Modeling & Prediction
  - Explainability & Validation
  - Visualization & Delivery
- Expanded FAQ into a cooperation and professional-boundary section with three commitment cards and twelve questions.

### Files Modified

- `docs/REQUIREMENTS.md`
- `docs/TASK_PLAN.md`
- `docs/CHANGELOG.md`
- `src/lib/content.ts`
- `src/components/Works.tsx`
- `src/components/Tools.tsx`
- `src/components/FAQ.tsx`

### Build / Browser QA

- Production build passed:
  - `PATH=/Users/monster/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH ./node_modules/.bin/next build`
- Local preview used:
  - `http://127.0.0.1:3001`
- Desktop browser QA:
  - 1440 x 1000 checked
  - No horizontal overflow
  - Selected Works shows all six upgraded cases
  - Analysis Stack is no longer a simple tag wall
  - FAQ shows three commitment cards and twelve accordion questions
  - Case detail modal opens and closes correctly
- Mobile browser QA:
  - 390 x 844 checked
  - No horizontal overflow
  - Selected Works cards stack correctly
  - Case detail modal fits within viewport and scrolls internally
  - Analysis Stack and FAQ stack into single-column layouts
- QA screenshots saved:
  - `docs/qa/upgrade-works-desktop.png`
  - `docs/qa/upgrade-analysis-stack-desktop-final.png`
  - `docs/qa/upgrade-faq-desktop-final.png`
  - `docs/qa/upgrade-works-mobile-390.png`
  - `docs/qa/upgrade-modal-mobile-390.png`
  - `docs/qa/upgrade-analysis-stack-mobile-390-final.png`
  - `docs/qa/upgrade-faq-mobile-390-final.png`

### Known Issues / Remaining Work

- No known responsive or functional blockers from this upgrade.
- Future improvement: add full case detail pages with longer narratives, downloadable sample reports, or anonymized demo notebooks.

### Implementation

- Initialized a Next.js / React / Tailwind CSS project for Monster Data Studio.
- Added Framer Motion for restrained reveal/hover/accordion/modal motion.
- Added Lenis for smooth scrolling.
- Built the complete single-page landing page:
  - Fixed glass navigation with mobile menu
  - Hero with abstract data analysis workspace mockup
  - Services grid
  - Selected Works cards with desensitized case summaries and modal details
  - Process timeline
  - Tools & Methods tag wall
  - About Monster service-focused section
  - FAQ accordion
  - Contact form with front-end confirmation
  - Footer
- Centralized repeatable content in `src/lib/content.ts`.

### Files Created / Modified

- `package.json`
- `.gitignore`
- `pnpm-lock.yaml`
- `next.config.ts`
- `postcss.config.js`
- `tailwind.config.ts`
- `tsconfig.json`
- `next-env.d.ts`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/lib/content.ts`
- `src/lib/utils.ts`
- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `src/components/FAQ.tsx`
- `src/components/Footer.tsx`
- `src/components/Hero.tsx`
- `src/components/Navbar.tsx`
- `src/components/Process.tsx`
- `src/components/Section.tsx`
- `src/components/Services.tsx`
- `src/components/SmoothScroll.tsx`
- `src/components/Tools.tsx`
- `src/components/Works.tsx`
- `docs/qa/final-desktop-1440-top.png`
- `docs/qa/final-laptop-1280-top.png`
- `docs/qa/final-mobile-390-top.png`

### Build / Preview Checks

- Production build passed with direct Next command:
  - `PATH=/Users/monster/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH ./node_modules/.bin/next build`
- Local preview started at:
  - `http://127.0.0.1:3000`
- Browser checked sizes:
  - 1440 x 1000
  - 1280 x 900
  - 390 x 844
- No horizontal overflow detected:
  - 1440 viewport: `scrollWidth` = `clientWidth` = 1440
  - 1280 viewport: `scrollWidth` = `clientWidth` = 1280
  - 390 viewport: `scrollWidth` = `clientWidth` = 390
- Verified all required sections exist:
  - Hero
  - Services
  - Selected Works
  - Process
  - Tools & Methods
  - About
  - FAQ
  - Contact

### Interaction Checks

- `查看作品` button scrolls to Selected Works.
- Hero `提交需求` button scrolls to Contact.
- Desktop navigation works.
- Mobile menu opens and mobile `联系` scrolls to Contact.
- FAQ opens and closes smoothly.
- Contact form accepts input and shows:
  - `已收到需求示例。正式上线后可接入邮箱、表单服务或数据库。`

### Notes

- `build-web-apps@openai-curated` was not available in this session. Install with `codex plugin add build-web-apps@openai-curated` if desired later.
- pnpm initially blocked the `sharp` build script; it was approved through `pnpm approve-builds`.
- In this Codex desktop environment, `pnpm build` triggered a pnpm non-TTY dependency check issue, so the successful production build was run through the local Next binary with the bundled Node path.
- Full-page screenshots plus smooth scrolling produced stitched/duplicated captures in the browser tool, so final QA screenshots use viewport screenshots.

### Known Issues / Remaining Work

- No known functional or responsive blockers in Version 1.
- Contact form is intentionally front-end only. Add email/form service/database only when going live.
- Selected Works details are modal summaries only. Add case detail pages later if needed.

### Planning

- Created initial documentation set for Monster Data Studio.
- Captured product positioning, page structure, visual direction, content requirements, technical approach, responsive requirements, and acceptance criteria.

### Files Created

- `docs/REQUIREMENTS.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/TASK_PLAN.md`
- `docs/CHANGELOG.md`
