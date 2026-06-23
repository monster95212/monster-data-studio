# Monster Data Studio Requirements

## Project Goal

Build a premium one-page showcase website for Monster Data Studio, a data analysis and modeling delivery service. The site should help potential clients quickly understand what Monster can deliver, review representative case types, understand the workflow, and submit project requirements.

## Brand

- Brand name: Monster Data Studio
- Short name: Monster
- Use only `Monster` or `Monster Data Studio` across the site.
- Do not use real names.

## Positioning

Monster Data Studio is a professional data analysis service site, not a personal resume. The site should feel like a high-end product/service landing page for taking data analysis orders.

Primary messages:

- What data analysis services Monster can provide.
- What types of desensitized cases Monster has handled.
- Which tools and methods Monster can use.
- What the delivery workflow looks like.
- How clients can submit requirements or contact Monster.

## Target Users

- Clients with raw data who need cleaning, analysis, modeling, visualization, or reports.
- Students, researchers, teams, or businesses needing professional statistical/data analysis support.
- Users who may not know the exact method yet and need a clear analysis plan.

## Functional Scope

Version 1 is a landing page with a lightweight server-side contact API:

- No login.
- No admin panel.
- No database.
- No payment.
- Contact form submits to `POST /api/contact`.
- Contact API sends email through QQ Mail SMTP using environment variables.
- SMTP credentials must never be hard-coded or committed.

## Page Structure

Single-page landing page with fixed navigation:

1. Hero
2. Services
3. Selected Works
4. Process
5. Tools & Methods
6. About
7. FAQ
8. Contact
9. Footer

Navigation items:

- Monster
- 服务
- 作品
- 流程
- 关于
- 联系
- CTA button: 提交需求

Navigation clicks should smooth-scroll to sections.

## Required Modules

### Hero

Top label:

> 数据分析 / 统计建模 / 机器学习 / 可复现报告交付

Brand label:

> Monster Data Studio

Main title:

> 专业数据分析与建模交付服务

Description:

> 从原始数据清洗、统计建模、机器学习预测，到可视化图表、可复现代码和 Word 分析报告，把复杂数据整理成清楚、可信、可交付的结果。

Professional proof points:

- 统计分析与论文结果表: 回归 / 方差分析 / 信效度 / 中介调节
- 机器学习预测与模型解释: XGBoost / LSTM / SHAP / 聚类预测
- 可复现交付: Notebook / Word 报告 / 图表 / 代码
- Additional compact proof tags: 稳健性检验, ROC / 校准曲线 / DCA, 文本分析 / GIS / 可视化报告

Buttons:

- 查看案例
- 提交需求

Hero visual should be a professional analysis delivery workspace using abstract/mock data only:

- Forecast line chart with prediction interval
- Model validation card with mock AUC / Accuracy / RMSE or MAPE
- SHAP / feature-importance bars
- Delivery package card showing Word report, Notebook, metrics table, and chart package

### Services

Title:

> 从原始数据到最终报告，完成一整套可交付分析。

Subtitle:

> 不只是跑出结果，更重视数据是否干净、方法是否合理、图表是否清楚、结论是否能被复现。

Six cards:

1. 数据清洗
2. 统计分析
3. 回归建模
4. 机器学习
5. 可视化图表
6. 报告交付

### Selected Works

Title:

> Selected Works  
> 精选数据分析案例

Note:

> 用脱敏案例展示从数据清洗、建模验证到图表报告的完整交付能力。

Six advanced desensitized proof cards:

1. 多变量时间序列销量预测
2. 用户生命周期与流失预测
3. 医学风险预测模型
4. 问卷结构方程 / 信效度 / 中介调节分析
5. 文本主题建模与情感分析
6. 空间数据与交互地图分析

Each card should show the analysis problem, workflow, metrics, deliverables, complexity level, technology tags, and a distinct mock analysis visual. Detail buttons open a modal with project background, data type, analysis goal, workflow, core metrics, representative mock chart, and deliverable files.

Mock visuals:

- Forecast line chart with error band
- Segmentation scatter plus SHAP bars
- ROC plus calibration curve
- SEM path diagram plus reliability indicators
- Topic bubbles plus word-frequency bars
- Map grid plus heat points

### Process

Five steps:

1. 提交需求
2. 检查数据
3. 确认方案
4. 执行分析
5. 交付修改

### Analysis Stack

Title:

> Analysis Stack

Subtitle:

> 一套从数据清洗到可复现交付的方法体系。

Five capability modules:

- Data Pipeline 数据处理链路
- Statistical Inference 统计推断
- Modeling & Prediction 建模预测
- Explainability & Validation 模型解释与验证
- Visualization & Delivery 可视化交付

Each module should explain applicable problems, common methods, and output results. This section should not be a simple skill tag wall.

### About

Use service-focused copy only. Avoid resume-style education/background lists.

Required emphasis:

> 不只做出结果，更重视结果是否清楚、合理、可复现。

Optional identity card:

> Monster  
> Data Analysis / Modeling / Reporting  
> Python / R / Stata / SPSS / SQL / Excel  
> Clean. Model. Visualize. Deliver.

### FAQ

Use a cooperation notes and professional boundaries layout:

Left side commitment cards:

- 数据脱敏
- 可复现交付
- 不伪造结果

Right side FAQ accordion with twelve questions covering data quality, code/report options, insignificant results, method selection, analysis planning, validation/explainability, deliverables, delivery time, privacy, and paper data-analysis support.

FAQ must clearly reject fake data, manufactured significance, and improper academic promises.

### Contact

Title:

> Ready to turn your data into answers?

Subtitle:

> 把你的数据、需求和截止时间发给我，我会根据任务难度给出分析方案。

Fields:

- 项目类型
- 数据格式
- 期望工具
- 截止时间
- 需要交付什么
- 项目说明
- 联系方式

Submit text:

> 提交需求

Submit result:

> 需求已提交，我会尽快联系你。

Contact API:

- Route: `POST /api/contact`
- SMTP host: `smtp.qq.com`
- SMTP port: `465`
- SMTP secure: `true`
- Required environment variables:
  - `QQ_EMAIL_USER`
  - `QQ_EMAIL_AUTH_CODE`
  - `CONTACT_TO_EMAIL`
- Required fields:
  - 项目类型
  - 联系方式
  - 项目说明

## Technical Requirements

Preferred stack:

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lenis smooth scroll

Keep dependencies minimal. If a native browser/CSS solution is enough, prefer it.

Suggested structure:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Services.tsx`
- `src/components/Works.tsx`
- `src/components/Process.tsx`
- `src/components/Tools.tsx`
- `src/components/About.tsx`
- `src/components/FAQ.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/Section.tsx`
- `src/lib/content.ts`
- `src/lib/utils.ts`

## Responsive Requirements

Must work at:

- 1440px desktop
- 1280px laptop
- Tablet
- Around 390px mobile

Mobile requirements:

- Navigation collapses to a menu button.
- Hero does not overflow.
- Services and works are single-column.
- Process becomes vertical.
- Form fields are single-column.
- No horizontal scrolling.
- Text does not overflow.
- Buttons remain easy to tap.

## Prohibited Content

- No real names.
- No client private data.
- No public raw data from clients.
- No claims such as `包过`, `保证显著`, `代写论文`, `保证高分`.
- No resume-style presentation.
- No admin/dashboard-style look.
- No unrelated features.

## Acceptance Criteria

- Static landing page runs locally.
- All planned sections are present.
- Navigation smooth-scroll works.
- Hero buttons scroll to Works and Contact.
- FAQ opens and closes smoothly.
- Contact form shows a confirmation message.
- Desktop and mobile layouts are checked in browser.
- No horizontal overflow or obvious text clipping.
- `docs/CHANGELOG.md` is updated after implementation and browser QA.
