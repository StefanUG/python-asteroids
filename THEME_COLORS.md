# Space Theme Color Reference

This document describes the color scheme used in the Asteroids tutorial site.

## Color Palette

### Primary Colors
- **Space Dark**: `#0a0e27` - Main background
- **Space Darker**: `#050816` - Code blocks, deeper backgrounds
- **Nebula Purple**: `#6b2d5c` - Accent color
- **Nebula Blue**: `#1a4d6f` - Secondary accent
- **Star White**: `#ffffff` - Text and highlights
- **Star Yellow**: `#ffd700` - Links hover, highlights

### Accent Colors
- **Cyan Blue**: `#5eb3f6` - Primary links and buttons
- **Light Blue**: `#7ec5ff` - Hover states
- **Purple Accent**: `#9d4edd` - Purple buttons
- **Blue Accent**: `#4895ef` - Blue buttons
- **Asteroid Gray**: `#8b8b8b` - Neutral elements

## Usage

### Backgrounds
```css
body: linear-gradient with space-dark and nebula colors
code blocks: rgba(5, 8, 22, 0.8)
sidebar: gradient from space-dark to nebula-blue
```

### Text
```css
headings: white with yellow glow
body text: light gray (#d0d0d0)
links: cyan blue (#5eb3f6)
code: light gray (#e0e0e0)
```

### Interactive Elements
```css
buttons: blue/purple gradients with glow
hover: yellow glow effect
active: enhanced glow + transform
```

### Special Effects
- Animated starfield using CSS radial-gradients
- Text-shadow for glow effects
- Box-shadow for depth and lighting
- Backdrop-filter for glass morphism

## Customization

To change the theme colors, edit the `:root` variables in `_sass/custom/custom.scss`:

```scss
:root {
  --space-dark: #0a0e27;        /* Change main background */
  --star-white: #ffffff;        /* Change text color */
  --nebula-blue: #1a4d6f;       /* Change accent color */
  /* ... etc */
}
```
