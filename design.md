---
name: Modern CS Dashboard
colors:
  surface: '#20092b'
  surface-dim: '#20092b'
  surface-bright: '#483053'
  surface-container-lowest: '#1a0425'
  surface-container-low: '#291234'
  surface-container: '#2d1638'
  surface-container-high: '#382043'
  surface-container-highest: '#442b4f'
  on-surface: '#f7d8ff'
  on-surface-variant: '#d6c0d0'
  inverse-surface: '#f7d8ff'
  inverse-on-surface: '#3f274a'
  outline: '#9f8b9a'
  outline-variant: '#52424f'
  surface-tint: '#ffaaf7'
  primary: '#ffaaf7'
  on-primary: '#5a005d'
  primary-container: '#bd42bd'
  on-primary-container: '#100011'
  inverse-primary: '#9f24a2'
  secondary: '#e9b3ff'
  on-secondary: '#4f086f'
  secondary-container: '#6b2b8a'
  on-secondary-container: '#e29fff'
  tertiary: '#a8c8ff'
  on-tertiary: '#003061'
  tertiary-container: '#2c77d2'
  on-tertiary-container: '#000512'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd6f7'
  primary-fixed-dim: '#ffaaf7'
  on-primary-fixed: '#380039'
  on-primary-fixed-variant: '#800084'
  secondary-fixed: '#f7d8ff'
  secondary-fixed-dim: '#e9b3ff'
  on-secondary-fixed: '#310048'
  on-secondary-fixed-variant: '#682887'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#a8c8ff'
  on-tertiary-fixed: '#001b3c'
  on-tertiary-fixed-variant: '#004689'
  background: '#20092b'
  on-background: '#f7d8ff'
  surface-variant: '#442b4f'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  h2:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-label:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  container-max: 1440px
---

## Brand & Style
The brand personality of this design system is intellectual, futuristic, and highly technical. It is designed to evoke the feeling of a high-end IDE crossed with a gamified command center. The target audience—computer science students and software engineers—should feel a sense of digital mastery and precision when interacting with the interface.

The design style combines **Minimalism** with **Glassmorphism**. It utilizes a strict bento-grid structure to organize complex data into digestible "knowledge pockets." The aesthetic is "Vibrant Cyber-Industrial": clean, dark, and illuminated by vibrant, functional accents that represent data flow and user progress.

## Colors
The palette is rooted in a dark, purple-tinted neutral canvas to maximize contrast and reduce eye strain during long coding sessions. The primary **Vibrant Magenta** is used for interactive elements and primary actions, symbolizing energy and connectivity. The **Deep Amethyst** acts as the secondary accent, specifically reserved for XP gains, leveling up, and achievement milestones.

A functional **Cobalt Blue** (tertiary) is used for "Success" states and completed modules. Neutrals are tiered from deep obsidian to semi-transparent amethysts to create the glass effect, ensuring that the interface feels layered rather than flat.

## Typography
This design system employs **Space Grotesk** for headlines and technical labels to provide a geometric, "code-adjacent" feel without sacrificing the professional polish of a modern UI. Its idiosyncratic letterforms (like the 'a' and 'g') lend a distinct tech-forward personality.

**Inter** is used for all long-form body text to ensure maximum readability and accessibility, especially when explaining complex CS concepts. For actual code snippets and terminal outputs, a system monospace font (such as JetBrains Mono or SF Mono) should be utilized, though it is not defined as the primary UI font.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Bento Grid**. The primary dashboard is organized into a 12-column grid system where components occupy specific "slots" (e.g., 2x2, 4x2, 6x4). This creates a structured yet dynamic mosaic appearance.

A strict 8px spacing rhythm governs all internal paddings and margins. To maintain the "Glassmorphism" effect, gutters between bento cards are kept at a consistent 16px, allowing the background blur and subtle edge highlights to remain distinct and visible. Larger components like the "Code Editor" should span at least 8 columns, while "Progress Trackers" occupy smaller 4-column side widgets.

## Elevation & Depth
Depth is achieved through **Glassmorphism and Tonal Layering** rather than traditional heavy shadows. Surfaces are defined by:

1.  **Backdrop Blur:** A standard 12px to 20px blur on all card surfaces.
2.  **Inner Glows:** A 1px semi-transparent top and left border (white at 10% opacity) to simulate light catching the edge of a glass pane.
3.  **Subtle Outer Shadows:** Very soft, large-radius shadows (20-40px blur) with a low opacity (0.1) of the primary Magenta color to suggest the card is "hovering" over a digital substrate.
4.  **Z-Index Logic:** Lower layers are darker and more opaque; higher layers (modals, popovers) are lighter and more transparent with stronger blurs.

## Shapes
The design system uses a **Rounded (Level 2)** shape language to soften the technical edge of the interface. This creates a "friendly-tech" vibe. Standard cards and bento units use a 1rem (16px) radius, while nested elements like buttons or input fields use a smaller 0.5rem (8px) radius. 

Progress bars and status pills utilize fully rounded (pill-shaped) caps to differentiate them from structural layout elements.

## Components
-   **Bento Cards:** The foundational container. Features a `surface_glass` fill and `border_subtle`. On hover, the border color should shift toward the `primary_color_hex`.
-   **Buttons:** Primary buttons use a solid-to-gradient fill (Vibrant Magenta to Deep Amethyst). Secondary buttons use a glass background with a high-contrast white or primary-colored border.
-   **Progress Trackers:** Linear bars with a glow effect. The "fill" should have a CSS `box-shadow` that matches the bar color (Magenta for general progress, Amethyst for XP).
-   **Input Fields:** Inspired by terminal prompts. They should feature a subtle `>` prefix and a blinking underscore cursor in the `primary_color_hex` for focused states.
-   **Status Chips:** Small, high-contrast badges for "New," "In Progress," or "Syntax Error," using tertiary or semantic colors (Red/Yellow/Blue).
-   **XP Counter:** A specialized component featuring a large `display-lg` number in `secondary_color_hex` with a subtle pulsing animation when values increase.
