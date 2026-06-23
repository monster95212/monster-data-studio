# Monster Data Studio Design System

## Design Direction

The site should feel like a restrained, high-end product website inspired by Apple's polish and smoothness, not a generic template, portfolio, resume, or admin dashboard.

Keywords:

- 高级
- 克制
- 大留白
- 黑白灰
- 丝滑滚动
- 毛玻璃导航
- 细腻光影
- 卡片渐入
- 轻微悬浮
- 专业可信

## Color Palette

Primary dark background:

- `#050505`
- `#0B0B0C`

Optional light section:

- `#F7F7F5`

Text:

- Primary on dark: `#FFFFFF`
- Primary on light: `#111111`
- Secondary: `#A1A1AA`

Borders:

- `rgba(255,255,255,0.12)`

Accent:

- Ice blue: `#7DD3FC`
- Silver gray: `#D4D4D8`

Use accent color sparingly for focus, CTA glow, active states, and tiny data visualization highlights.

## Layout Principles

- Use generous vertical spacing.
- Keep sections full-width with constrained content width.
- Avoid nested cards.
- Use cards only for repeated items, framed tools, modals, and compact content blocks.
- Keep text blocks readable and not crowded.
- Avoid dense dashboard/table layouts.

## Navigation

- Fixed top navigation.
- Uses `backdrop-filter: blur(...)` glass effect.
- Dark translucent background after scroll.
- Desktop shows text links and right CTA.
- Mobile collapses to a menu button.

## Typography

- Prefer system sans fonts for crisp product-site feeling.
- Large Hero title, but keep it compact enough that the first viewport still shows visual context.
- Clear hierarchy:
  - Hero title: largest, high contrast.
  - Section titles: strong but restrained.
  - Body text: comfortable line height.
  - Tags/meta: smaller, muted.
- No negative letter spacing.
- Chinese copy should not be squeezed; allow wrapping naturally.

## Cards

Card style:

- Deep gray glass texture.
- Subtle border using `rgba(255,255,255,0.12)`.
- Radius around 8px to 18px depending on component importance.
- Soft inner glow or gradient only when subtle.
- Hover may slightly lift, scale, or brighten the border.

Avoid:

- Excessive shadows.
- Bright multicolor icons.
- Decorative clutter.

## Motion

Motion should be smooth and premium, never bouncy or noisy.

Required:

- Full-site smooth scrolling.
- Hero text fades in and moves upward.
- Hero data cards float lightly.
- Service cards appear progressively on viewport entry.
- Work cards slightly scale and brighten on hover.
- Process steps progressively highlight while scrolling.
- Navigation background becomes glassy after scroll.
- FAQ opens/closes smoothly.
- Contact submit message appears naturally.

Mobile:

- Reduce animation complexity if needed for performance.
- Prioritize stability and readability.

## Hero Visual

Use an abstract data analysis workspace mockup, not real customer data or screenshots.

Elements may include:

- Code card
- Line chart
- Regression output table
- Word report card
- Notebook card

Visual tone:

- Dark, layered, subtle.
- Ice-blue highlights.
- Simulated values only.
- Product-like rather than spreadsheet-like.

## Icons & Visual Details

- Use simple line icons or numeric markers only where useful.
- Avoid many colorful logos.
- Tool tags should look like a refined parameter wall, not a resume skill dump.

## Forms

- Dark glass or minimal light inputs.
- Clear labels.
- Large enough tap targets.
- Single-column on mobile.
- CTA button should be visually clear.

## Responsive Rules

- No horizontal overflow.
- Use grid changes rather than squeezing.
- Hero stacks cleanly on mobile.
- Cards become one column on mobile.
- Process becomes vertical on mobile.
- Text wraps before it shrinks.

## Things To Avoid

- Cheap template look.
- Purple blob/orb heavy backgrounds.
- Too many colors.
- Overly playful animations.
- Admin dashboard styling.
- Resume-style layout.
- Large irrelevant decorative SVGs.
- Unneeded dependencies or speculative components.
