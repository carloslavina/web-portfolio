---
name: Experimental Monolith
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#603e39'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#956d67'
  outline-variant: '#ebbbb4'
  surface-tint: '#c00100'
  primary: '#bc0100'
  on-primary: '#ffffff'
  primary-container: '#eb0000'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a8'
  secondary: '#026e00'
  on-secondary: '#ffffff'
  secondary-container: '#00f900'
  on-secondary-container: '#026d00'
  tertiary: '#2f38ff'
  on-tertiary: '#ffffff'
  tertiary-container: '#5660ff'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930100'
  secondary-fixed: '#77ff61'
  secondary-fixed-dim: '#02e600'
  on-secondary-fixed: '#002200'
  on-secondary-fixed-variant: '#015300'
  tertiary-fixed: '#e0e0ff'
  tertiary-fixed-dim: '#bec2ff'
  on-tertiary-fixed: '#00006e'
  on-tertiary-fixed-variant: '#0000ef'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: EB Garamond
    fontSize: 84px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Space Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Space Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  col-1: 30%
  col-2: 50%
  col-3: 20%
  gutter: 1px
  margin-page: 2rem
  stack-overlap: -2rem
---

## Brand & Style

This design system is built for an experimental artist portfolio, prioritizing a raw, "work-in-progress" aesthetic over traditional polish. It merges **Minimalism** with **Brutalism**, utilizing heavy whitespace and structural transparency to create a digital "white cube" gallery space. 

The emotional response is one of intellectual curiosity and avant-garde precision. Visual interest is generated through **messy layering**—where elements may overlap or bleed into adjacent columns—challenging the user's perception of interface boundaries while maintaining absolute clarity through high-contrast typography.

## Colors

The palette is strictly high-contrast. The foundation is pure white (#FFFFFF) and absolute black (#000000). 

Primary colors (RGB) are reserved exclusively for utility and interaction:
- **Red (#FF0000):** High-priority actions and contact triggers.
- **Green (#00FF00):** Success states or active navigation indicators.
- **Blue (#0000FF):** Secondary interactive links or data-heavy metadata.

Transparency plays a key role; containers should use alpha-channel variations of the background to allow overlapping content to remain visible, creating depth without using shadows.

## Typography

This system utilizes a tension between the classicism of **EB Garamond** and the technical rigidity of **Space Mono**. 

- **Serif (EB Garamond):** Used for large-scale display text and project titles. It should feel literary and archival.
- **Monospace (Space Mono):** Used for all functional UI, body copy, and metadata. This grounds the experimental layout in a "system-level" aesthetic.

Type should often be used as a structural element, sometimes rotated 90 degrees or placed in unexpected intersections to reinforce the experimental nature of the portfolio.

## Layout & Spacing

The layout is a rigid **3-column grid with 30-50-20 proportions**. 
- **Left Column (30%):** Navigation, Artist Statement, and Persistent Metadata.
- **Center Column (50%):** Main Content Feed, Large Imagery, Case Studies.
- **Right Column (20%):** Indexing, Dates, and "Micro" interactions.

While the columns provide the structure, the content is encouraged to break the grid. Use negative margins (`stack-overlap`) to allow images to "spill" into adjacent columns. Use 1px black borders as separators to mimic architectural blueprints.

## Elevation & Depth

Standard shadows are strictly prohibited. Depth is achieved through **Tonal Layering** and **Transparency**:
- **Z-Index Layering:** Content "stacks" like physical papers on a desk. Top layers use 95% opacity white backgrounds, allowing the skeletal outlines of the layers beneath to bleed through.
- **Glassmorphism (Minimal):** Use a very subtle backdrop blur (2px to 4px) on overlapping panels to ensure text legibility without losing the sense of "messy" transparency.
- **Outlines:** Elements are defined by 1px solid black strokes rather than elevation.

## Shapes

The shape language is **Sharp (0px)**. There are no rounded corners in this design system. 

Every interactive element, image container, and UI module must maintain hard 90-degree angles. This reinforces the brutalist, architectural influence and contrasts with the organic nature of the potential artwork displayed. Buttons are simple rectangular boxes; chips are framed by 1px borders with sharp corners.

## Components

### Buttons
- **Primary ('Contacto'):** 1px black border, sharp corners. No fill. On hover, fills with a primary color (Red/Blue/Green) and shifts the text to white.
- **Ghost:** Text only in Space Mono, underlined on hover.

### Cards & Image Containers
- Images should have no padding within their containers. 
- Captions are placed in the 20% column or directly overlapping the image bottom-left using a transparent background.
- Apply a grayscale filter to images by default, transitioning to full color only on hover.

### Navigation
- Vertical orientation in the 30% column. 
- Active states are indicated by a strike-through or a primary color block trailing the text.

### Layout Modules
- **The "Messy" Stack:** A component that takes 3 images and offsets them randomly by +/- 20px to create a collaged appearance.
- **The Index List:** High-density list in the 20% column using `label-caps` for archival-style sorting.

### Inputs
- Simple 1px bottom border only. No background fill. Text appears in Space Mono.