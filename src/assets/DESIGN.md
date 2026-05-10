---
name: Obsidian & Electric
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4fdbc8'
  on-secondary: '#003731'
  secondary-container: '#04b4a2'
  on-secondary-container: '#003f38'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  section-padding: 120px
  section-padding-mobile: 64px
---

## Brand & Style
The brand personality is authoritative yet understated, designed to showcase high-end creative work through a lens of technical precision. It targets a premium audience that values clarity, modernism, and attention to detail. 

The design style is a blend of **Minimalism** and **Glassmorphism**. It relies on high-quality typography and expansive whitespace to create a sense of luxury. Visual interest is generated through subtle depth—using translucent layers and fine-lined borders rather than heavy shadows—to maintain a digital-native, "high-tech" sophistication. Interactions should feel deliberate and fluid, utilizing reveal animations to guide the eye across the portfolio's narrative.

## Colors
The palette is rooted in a deep "After Hours" aesthetic. The primary background is a near-black slate, providing a canvas where content can truly pop. 

- **Primary (Electric Indigo):** Used for primary actions, active states, and critical highlights.
- **Secondary (Teal):** Used for success states, secondary accents, or specific category tags to provide visual variety.
- **Neutrals:** A range of slate grays are used to create hierarchy within the UI. Text is never pure white, but ranges from high-contrast silver to muted charcoal to reduce eye strain and increase sophistication.
- **Accents:** Borders use a semi-transparent white to create a "hairline" effect that feels precise and architectural.

## Typography
The typography strategy leverages **Syne** for its avant-garde, bold personality in headings, creating an immediate editorial impact. For body copy, **Inter** provides maximum legibility and a systematic feel that balances the expressive headlines. **JetBrains Mono** is introduced for labels and small metadata to reinforce the "technical/modern" aspect of the portfolio.

High contrast is achieved not just through color, but through scale. Large display titles should have tight tracking, while body text is given generous line height to ensure a comfortable reading experience against the dark background.

## Layout & Spacing
The layout follows a **Fixed Grid** system for desktop, centering the content within a 1280px container to ensure readability on wide monitors. It uses a 12-column grid with wide 32px gutters to maintain a "breathable" feel.

- **Vertical Rhythm:** A massive 120px padding between sections creates a "gallery" effect, forcing the user to focus on one project or statement at a time.
- **Mobile Adaptivity:** On mobile, the grid collapses to 4 columns with 16px margins. Section padding is halved to keep the scroll momentum engaging.
- **Alignment:** Use asymmetrical layouts (e.g., text spanning 5 columns, images spanning 7) to create a dynamic, modern visual flow.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Backdrop Blurs**. Rather than using traditional drop shadows which can look muddy on dark backgrounds, this design system uses varying levels of slate grays to indicate "height."

- **Level 0 (Base):** Deepest charcoal background.
- **Level 1 (Cards):** Slightly lighter slate with a 1px subtle border.
- **Level 2 (Modals/Overlays):** A semi-transparent surface with a `backdrop-filter: blur(12px)`.

Transitions should use a "staggered reveal" effect—elements should fade in and slide up slightly (20px) as they enter the viewport to give the interface a lifelike, responsive quality.

## Shapes
The shape language is **Soft (0.25rem)**, leaning toward sharp edges. This choice preserves the architectural and professional feel of the portfolio. While large cards use a 0.75rem (`rounded-xl`) corner to feel modern, buttons and inputs remain more disciplined with smaller radii to maintain a sophisticated, "precision-tooled" aesthetic.

## Components
- **Buttons:** Primary buttons use the Electric Indigo background with white text. They should have a subtle outer glow on hover rather than a shadow. Ghost buttons use a 1px slate-300 border and a subtle fill on hover.
- **Cards:** Portfolio project cards should be borderless by default, using a "reveal" state on hover where a subtle border appears and the image scales slightly (1.05x).
- **Inputs:** Text fields are dark-filled (surface color) with a bottom-only border that transforms into a full primary-color border on focus.
- **Chips:** Used for "Tech Stack" or "Service" tags. These should use the `label-sm` typography and a very low-opacity indigo tint as a background.
- **Navigation:** A sticky header with a heavy backdrop-blur effect. The active link should be marked with a small indigo dot or a subtle underline.
- **Reveal Animations:** All major sections should use Intersection Observer to trigger a fade-in-up animation, ensuring the content "arrives" as the user scrolls.