---
name: Nico Farms Admin
colors:
  surface: '#effdee'
  surface-dim: '#d0decf'
  surface-bright: '#effdee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e9f7e8'
  surface-container: '#e4f2e2'
  surface-container-high: '#deecdd'
  surface-container-highest: '#d8e6d7'
  on-surface: '#131e15'
  on-surface-variant: '#414941'
  inverse-surface: '#273329'
  inverse-on-surface: '#e6f5e5'
  outline: '#717970'
  outline-variant: '#c1c9be'
  surface-tint: '#3a6843'
  primary: '#154423'
  on-primary: '#ffffff'
  primary-container: '#2e5c38'
  on-primary-container: '#a0d3a5'
  inverse-primary: '#a0d3a5'
  secondary: '#566156'
  on-secondary: '#ffffff'
  secondary-container: '#d7e3d4'
  on-secondary-container: '#5a665a'
  tertiary: '#5f2f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#814200'
  on-tertiary-container: '#ffb782'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bbefc0'
  primary-fixed-dim: '#a0d3a5'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#22502d'
  secondary-fixed: '#dae6d7'
  secondary-fixed-dim: '#becabb'
  on-secondary-fixed: '#141e15'
  on-secondary-fixed-variant: '#3f4a3f'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb781'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703800'
  background: '#effdee'
  on-background: '#131e15'
  surface-variant: '#d8e6d7'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses modern, data-driven agricultural management through an aesthetic of calm, utilitarian clarity. The target audience comprises farm managers, agronomists, and operational leads who require rapid situational awareness across harvest logs, soil sensor feeds, inventory levels, and labor allocations.

The visual style blends refined **Minimalism** with functional **Tactile-Flat Modernism**. Visual noise is eliminated in favor of high-contrast hierarchy, expansive negative space, and disciplined data presentation. The emotional tone evokes the quiet confidence of an early morning field walk: grounded, dependable, airy, and deeply pragmatic.

## Colors

The palette draws directly from the agricultural landscape, anchored by an authoritative deep canopy green and balanced by organic light neutrals.

- **Primary (`#2E5C38`)**: Forest green used for key actions, navigation states, active toggles, and primary metric emphasis.
- **Secondary (`#D8E4D5`)**: Soft sage green used for contextual badges, table hover highlights, active selection fills, and low-priority chips.
- **Tertiary (`#B5651D`)**: Earth-toned raw sienna applied strictly to alerts, field attention flags, and operational warnings.
- **Neutral (`#243026`)**: Deep charcoal-forest hue delivering high-contrast, fatigue-free readability for text and iconography.
- **Background (`#F9FAF8`)**: Soft, warm off-white canvas eliminating harsh glare during prolonged daytime usage.
- **Border / Divider (`#E5E9E2`)**: Crisp hairline division token ensuring clean component boundaries without heavy visual weight.
- **Surface (`#FFFFFF`)**: Pure white cards and table surfaces elevated through contrast against the off-white canvas.

## Typography

Typographic discipline rests on `Inter` across all structural tiers. Tight letter-spacing in headlines yields a sharp, editorial appearance, while body and tabular figures retain default metrics to ensure instant readability in high-density data environments.

- **Display & Headings**: Reserved for farm-level overviews, section titles, and key operational totals.
- **Body**: Optimized for inventory descriptions, notes, and log histories.
- **Labels & Numbers**: Employ `label-md` and `label-sm` with slight uppercase tracking for sensor statuses, batch numbers, and field tags. Enable tabular lining figures (`font-variant-numeric: tabular-nums`) across all analytical tables and live telemetry readouts.

## Layout & Spacing

The layout is built upon a balanced 12-column fluid grid system pinned to a maximum canvas width of 1440px on large viewports, framed by consistent outer margins.

- **Desktop (1024px+)**: 12 columns, 24px (`1.5rem`) gutters, 32px (`2rem`) margins. A fixed 256px sidebar navigates primary field hubs.
- **Tablet (768px - 1023px)**: 8 columns, 24px (`1.5rem`) gutters, 24px (`1.5rem`) margins. Navigation collapses to an accessible drawer.
- **Mobile (< 768px)**: 4 columns, 16px (`1rem`) gutters, 16px (`1rem`) margins. Multi-column metric groups collapse into single-column vertical stacks.

Vertical rhythmic pacing strictly adheres to multiples of 4px and 8px. Component-internal spacing uses `space-sm` (8px) and `space-md` (16px), maintaining tight, compact groupings without dense clutter.

## Elevation & Depth

Visual hierarchy is maintained almost exclusively through **low-contrast outlines** and subtle tonal planes rather than pronounced drop shadows.

- **Canvas Base**: `#F9FAF8` establishes ground level.
- **Card and Panel Surface**: Solid `#FFFFFF` combined with a clean 1px hairline perimeter border in `#E5E9E2`.
- **Active / Elevated Modals and Menus**: A single ambient shadow token is reserved solely for dropdown menus, date pickers, and confirmation drawers:
  - `box-shadow: 0 4px 16px -2px rgba(36, 48, 38, 0.08), 0 1px 2px 0 rgba(36, 48, 38, 0.04);`
- **Tonal Depth**: Layering within cards (such as secondary metrics or table headers) relies on `#F5F7F3` surface fill, avoiding drop shadows entirely.

## Shapes

The design adopts a **Soft** corner architecture (`roundedness: 1`), conveying structured agricultural utility without harsh industrial severity or toy-like softness.

- Standard inputs, buttons, and badges utilize 4px (`0.25rem`) corner rounding.
- Cards, panels, and data tables use 8px (`0.5rem`, `rounded-lg`).
- High-level modals and overlay sheets use 12px (`0.75rem`, `rounded-xl`).
- Micro-indicators and pill chips use fully rounded radiuses (9999px) strictly when denoting lifecycle statuses.

## Components

### Buttons
- **Primary**: Background `#2E5C38`, text `#FFFFFF`, 4px radius, 36px standard height (`space-sm` top/bottom, `space-md` left/right). On hover: `#244B2D`.
- **Secondary**: Background `#FFFFFF`, border 1px solid `#E5E9E2`, text `#243026`. On hover: `#F5F7F3`.
- **Tertiary / Ghost**: Transparent fill, text `#2E5C38`. On hover: `#D8E4D5` with 20% opacity.

### Input Fields & Controls
- Standard height of 36px with 1px solid `#E5E9E2` border, white fill, `#243026` text, and 8px inline padding.
- Focused state applies a sharp 1px ring in `#2E5C38` with an additional 2px outer aura at 15% opacity.
- Labels are positioned strictly above inputs using `label-md` in `#243026` with 6px vertical separation.

### Checkboxes & Radio Buttons
- 16px square (or circle) with 1px solid `#E5E9E2` border.
- Selected state fills with `#2E5C38` displaying a white checkmark or center pip. Focus maintains an organic green outer halo.

### Chips & Badges
- 22px height, 4px border radius (or pill for status items), 8px horizontal padding.
- **Normal/Active**: `#D8E4D5` background with `#2E5C38` text.
- **Alert/Attention**: `#FCEEE3` background with `#B5651D` text.
- **Neutral**: `#E5E9E2` background with `#243026` text.

### Tables
- Flat container with 1px perimeter border `#E5E9E2` and rounded 8px outer corners.
- Table header row uses `#F5F7F3` background, 32px height, uppercase `label-sm` with letter spacing.
- Rows measure 44px in height, featuring hairline `#E5E9E2` horizontal separators and no vertical borders.
- Hover state updates cell background to `#F9FAF8`. Numeric columns are right-aligned with tabular numerals enabled.

### Cards
- Surface `#FFFFFF`, 1px solid `#E5E9E2` border, 8px radius, `space-md` internal padding.
- Card headers feature clear separation through a bottom border or direct typographic contrast using `headline-sm`.

### Agricultural Domain Specifics
- **Telemetry Metric Tile**: Displays sensor readings (moisture, temperature, pH) featuring a large display number, trend badge, and subtle 2px top accent line colored according to target safety thresholds.
- **Batch / Harvest Timeline**: Minimalist vertical lineage line (1.5px solid `#E5E9E2`) punctuated with 8px solid dots representing verification and packaging stages.