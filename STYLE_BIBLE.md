# Veterans Employment Assistance Styling Bible

## Design Identity

The Veterans Employment Assistance site uses a **light command-center** design language. It should feel modern, calm, precise, and usable without becoming flashy or visually loud.

Core feeling:

- Futuristic, but not sci-fi dark mode.
- Human-centered, but not casual.
- Calm and guided, not brochure-like.
- Useful at a glance, not content-heavy.
- Interactive, but visually stable.

The current one-screen console on `index.html` is the styling base.

## Layout Principles

- Use a fixed one-screen experience for the Veterans homepage.
- Avoid document-level scrolling on the main console.
- Present information through mode switching, not page hopping.
- Keep the user oriented by preserving panel size and position between clicks.
- Do not use card grids for the Veterans console.
- Use two functional zones:
  - **Left panel:** controls, selectors, actions, and mode context.
  - **Right panel:** primary display, video surface, or large readable detail.
- Keep navigation implied through large mode buttons at the bottom.
- Avoid decorative labels that do not change behavior or add clarity.

## Visual System

### Color Palette

Primary colors:

```css
--color-primary: #0d4a75;
--color-primary-dark: #062d47;
--color-secondary: #1f6f8b;
--color-light: #f5f7fa;
```

Console-specific tones:

- Page background: pale ice blue gradients.
- Outer console shell: translucent white glass.
- Content display panel: brighter white glass.
- Control panel: slightly darker blue-gray glass.
- Accent borders: low-opacity blue.
- Active selection: pale blue fill with stronger blue border.

Use blue-gray contrast rather than saturated blue blocks.

### Backgrounds

Use layered subtlety:

- Soft radial gradients on the page background.
- Very light grid lines in the main stage.
- Glassy panels with translucent fills.
- Large circular/radial forms inside the display area.

Avoid:

- Heavy hero gradients.
- Large solid color backgrounds.
- Loud shadows.
- Dense card stacks.

## Typography

Font:

```css
font-family: 'Poppins', Arial, sans-serif;
```

Use typography as structure:

- Large headings for primary detail display.
- Small uppercase labels for state/context.
- Medium-weight compact labels for controls.
- Do not over-explain inside selector panels.

Guidelines:

- Detail titles should be large and stable.
- Long titles should wrap without shifting the whole layout.
- Body text should stay readable but constrained.
- Selector copy should be short and functional.

Current detail panel behavior:

- Fixed internal zones for kicker, title, and body.
- Balanced wrapping for large titles.
- Stable min-heights to prevent jitter while clicking quickly.

## Panels

### Console Shell

The outer shell should:

- Fit inside the viewport.
- Use rounded corners.
- Have a soft translucent white background.
- Use subtle shadow for depth.
- Never feel like a boxed form or dashboard widget.

### Stage

The stage is the main interactive area.

It should:

- Use a faint grid background.
- Contain exactly two primary panels.
- Preserve the same layout across mode changes.
- Hide overflow to protect the no-scroll experience.

### Control Panel

The control panel uses `.console-copy`.

It should:

- Sit on the left.
- Be slightly darker than the content panel.
- Hold mode text, selectors, and calls to action.
- Stay visually quieter than the display panel.
- Never compete with the primary detail display.

For selector-heavy modes, use compact selector mode:

- Hide large title and lead text.
- Show a small selector label.
- Show a compact current-selection summary.
- Present category chips before subcategory chips.

### Display Panel

The display panel uses `.console-video-plane`.

It should:

- Sit on the right.
- Be the main visual/readable surface.
- Use large typography for detail content.
- Use circular background geometry for depth.
- Display videos, resource surfaces, or selected FAQ/benefit details.

## Interaction Rules

- Bottom mode buttons change the console state in place.
- Do not navigate away for core Veterans content.
- Keep mode transitions visually stable.
- Avoid layout movement when switching between FAQ or Benefits items.
- Active states should be obvious but not loud.
- Chips should change color/border only; avoid positional animation.
- Do not add buttons unless they perform a meaningful action.

## Selector Design

Category and subcategory controls must look distinct.

Category chips:

- Larger.
- More prominent.
- Rounded pill style.
- Stronger active fill and border.

Subcategory chips:

- Smaller.
- Flatter.
- Lighter border.
- Less visual weight.
- Treated as secondary choices.

Selector panels should include:

- A compact `Viewing` summary.
- A small section label like `Area`, `Specific benefit`, or `Question`.
- The controls only.

Selector panels should not include:

- Large headings.
- Long explanatory paragraphs.
- Redundant instructional text.

## Motion and Stability

The design should feel stable under rapid clicking.

Required constraints:

- Preserve panel dimensions.
- Use fixed internal zones for large detail text.
- Clamp title and body typography.
- Give selector summaries and chip rows minimum heights.
- Avoid hover/active transforms on chips.
- Use color-only transitions for chip states.

Avoid:

- Layout shifts.
- Changing panel height.
- Text pushing controls down.
- Buttons jumping between rows unpredictably.

## Content Voice

Tone:

- Direct.
- Calm.
- Veteran-focused.
- Educational.
- Minimal.

Do:

- Use short labels.
- Say what the section does.
- Keep details readable in the display panel.
- Use `Federal Employment Assistance` only when referring to that program.

Do not:

- Over-explain in the selector panel.
- Use sales-heavy language.
- Mention paid tools in the Veterans console pathway unless specifically required.
- Use placeholder or coming-soon text in the main visible UI.

## Accessibility

Required:

- Mode controls are real buttons.
- Use `aria-pressed` for active mode/chip states.
- Keep the stage in an `aria-live="polite"` region.
- Preserve keyboard focus visibility.
- Ensure links remain actual links.

Visual accessibility:

- Maintain strong text contrast.
- Avoid relying on color alone for active states.
- Use size, border, and fill differences between category and subcategory chips.

## Mobile Rules

The mobile version should still feel like one screen.

Use:

- `100dvh` for viewport height.
- Compact grid layout.
- Smaller mode buttons.
- Reduced detail title/body sizes.
- Hidden nonessential footer text if needed.

Avoid:

- Full-page scrolling.
- Large text blocks in selector panels.
- Multi-page mobile fallbacks for the Veterans homepage.

## Reuse Checklist

Before adding or changing a UI element, ask:

- Does it help the user decide or act?
- Does it preserve the one-screen experience?
- Does it keep the left panel as controls and the right panel as display?
- Does it avoid visual jumping during rapid interaction?
- Is the wording short enough for the console?
- Is it visually quieter than the primary content unless it is the selected detail?

If the answer is no, simplify it.
