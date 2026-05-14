---
name: Anda Styling
description: Personal styling practice based in Calgary. Marketing surface, brand register.
colors:
  paper: "#F4F1EA"
  paper-alt: "#ECE7DC"
  ink: "#15110D"
  ink-strong: "#1A1614"
  ink-soft: "#6B645B"
  accent: "#FF4A1C"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 9vw, 8.25rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  serif:
    fontFamily: "Instrument Serif, serif"
    fontSize: "clamp(1.5rem, 4vw, 7rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
    fontFeature: "italic"
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.125em"
rounded:
  sharp: "0"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "40px"
  "3xl": "60px"
  "4xl": "100px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sharp}"
    padding: "16px 28px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "16px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "4px 8px"
    typography: "{typography.label}"
  input:
    backgroundColor: "{colors.paper-alt}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "12px 14px"
    typography: "{typography.body}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
---

<!-- BASELINE-OF-RECORD: this DESIGN.md captures the current implementation faithfully. The hero band was audited as a saturated editorial-typographic AI template and is scheduled for re-shape. Re-run /impeccable document after the next shape pass to refresh. -->

# Design System: Anda Styling

## 1. Overview

**Creative North Star: "The Paper Atelier"**

A page that should read like a sheet of warm paper on a working table: ink-dark type, one rust-orange thread, a few hand-cut images, generous quiet between blocks. Anda's practice is in-person and tactile; the site is the first proof that the person behind it can be trusted with a closet. The system answers that promise through restraint, not embellishment.

The aesthetic philosophy is **calm before performance**. A senior professional visiting on her phone after the kids are asleep should not feel sold to. The page does not raise its voice. White space is generous. Type is the primary instrument; image is the secondary; colour is the third, used once.

What this system explicitly rejects (from PRODUCT.md): magazine-cover editorial templates, wedding-photographer beige, influencer lifestyle, corporate-consulting decks. The current implementation slips toward the first of these (italic-serif drop word, mono kickers, `§ N°` numbering, masthead cosplay); those moves are documented below as **Don'ts** and will be removed in the next shape pass.

**Key Characteristics:**
- Off-white paper background carries the page; pure white is forbidden.
- Ink near-black for type; pure `#000` is forbidden.
- One accent (rust orange) used at display scale only.
- Sharp corners by default. No rounded cards, no soft shapes.
- Flat surfaces. No shadows. Depth via 1-px rule lines.
- Asymmetric grids; left-aligned compositions over centered stacks.
- Type does the work. Imagery is structural, never decorative filler.

## 2. Colors

A two-temperature palette: warm paper neutrals against one declarative accent. Calm and tactile at rest; rust orange used as the single moment of voice.

### Primary
- **Anda Rust** (`#FF4A1C`): the singular accent. Reserved for moments of intent — the brand dot in the wordmark, the display-scale italic word in headlines, the pull-quote field, the kicker chip when set at large size, the price-from numerals on the services index. Never used on body text or small labels; contrast fails AA below 18px.

### Neutral
- **Studio Paper** (`#F4F1EA`): the page surface. Carries 60-70% of any viewport. Pure white is banned; this is the warm substitute.
- **Drafting Cream** (`#ECE7DC`): one tonal step deeper than paper. Used for the CTA band background, form-field interiors, and service-row hover. The whole purpose is to show structure without resorting to lines or shadows.
- **Anda Ink** (`#15110D`): the type colour. Near-black, biased warm; `#000` is banned because it sits cold against the paper.
- **Studio Ink** (`#1A1614`): used only inside image-plate placeholder backgrounds. One tonal step warmer than Anda Ink. Visible only behind the striped placeholder pattern.
- **Ash Ink** (`#6B645B`): the muted-text colour. Used for body lede, captions, soft labels. Sits at the contrast floor (≈4.7:1 on paper) — borderline for AA, acceptable for headings and supporting text but verify before using at <14px.

### Named Rules

**The One Voice Rule.** Anda Rust appears at display scale only (≥18px text, or as a block field). Small accent text on paper drops below WCAG AA contrast. If a small label must be the accent, the surface beneath it inverts to ink.

**The Warmth Rule.** No `#000` and no `#FFF`. Every neutral is tinted warm. The page should never read clinical.

**The Single Thread Rule.** Anda Rust is a thread, not a wash. If it appears more than three times in a viewport, the system is wrong; review and remove.

## 3. Typography

**Display Font:** Bricolage Grotesque (with system-ui sans fallback)
**Body Font:** Bricolage Grotesque (single family, weight contrast does the work)
**Label / Mono Font:** JetBrains Mono (ui-monospace fallback)
**Accent / Drop-word Font:** Instrument Serif italic (serif fallback)

**Character:** A grotesque sans does almost everything; weight and size contrast separate hierarchy. The serif italic is reserved for one or two words per spread, used as a tonal break in display type. The mono labels are inherited from the magazine-template lane and are scheduled for removal — see Don'ts.

### Hierarchy

- **Display** (Bricolage Grotesque 700, `clamp(2.5rem, 9vw, 8.25rem)`, line 0.92, letter-spacing `-0.025em`): hero headline only. One per page.
- **Headline** (Bricolage Grotesque 700, `clamp(2rem, 5vw, 6rem)`, line 0.94, letter-spacing `-0.03em`): section titles (`What I do.`, `Four chapters.`, `The stylist.`). Always paired with a short kicker.
- **Title** (Bricolage Grotesque 600, `clamp(1.5rem, 2.5vw, 2.75rem)`, line 1.05): service names, process names, footer brand.
- **Serif Display** (Instrument Serif italic 400, scales with adjacent display, line 1.15, letter-spacing `-0.02em`): the one or two words promoted from headline. Used as a tonal note, not decoration.
- **Body** (Bricolage Grotesque 400, 17px, line 1.6): hero lede, section ledes, testimonial copy. Cap line length at 65-75ch — currently enforced by `max-width: 440-460px` on lede paragraphs.
- **Label** (JetBrains Mono 400, 11px, letter-spacing 2px, uppercase): currently used for ten or more roles (top strip, plate labels, kickers, stat labels, form labels, footer columns, copyright). **Overused.** Treat as the system's biggest debt; see Don'ts.

### Named Rules

**The One Italic Rule.** Instrument Serif italic appears once per section maximum, on a single word or phrase inside a display headline. Never as body copy, never on captions. It is a pause inside the type, not a flavour added on top.

**The Mono Reservation Rule (aspirational, not yet enforced).** JetBrains Mono should be reserved for genuinely data-shaped content (timestamps, technical specs, code) or for one deliberate brand-voice surface (a single kicker style at most). Anything else falls into the mono-as-costume anti-pattern. Current implementation violates this rule across the page.

## 4. Elevation

The system is **flat by default**. No box-shadows are declared anywhere in `styles.css`. Depth and grouping are conveyed through three tools, in order of preference:

1. **Tonal layering**: shifting the surface from Studio Paper to Drafting Cream (`#F4F1EA → #ECE7DC`) to denote a different zone (CTA band, form field, hover row).
2. **Full-bleed colour fields**: the Process section inverts to Anda Ink with paper type; the Pull-Quote section drenches in Anda Rust. These are the loudest "elevation" moves and are used twice per page.
3. **1-px rule lines**: `var(--line)` (`rgba(21,17,13,.14)`) for soft separators inside sections; `var(--ink)` for hard section borders.

### Named Rules

**The Flat-By-Default Rule.** No shadows, no glassmorphism, no blurred backdrops. If something needs to feel "raised", invert its background tone instead.

**The Rule-Line Vocabulary.** Two weights of horizontal line are allowed: 1-px ink (hard, between sections, marks chapter breaks) and 1-px line-token (soft, inside lists, marks row breaks). No other line weights, no double rules, no decorative dividers.

## 5. Components

### Buttons

- **Shape:** sharp corners (radius 0). Pill-shaped buttons are forbidden.
- **Primary (`.btn.solid`):** Anda Ink background, Studio Paper text. Padding `16px 28px`. Hover: background swaps to Anda Rust (`.25s` transition). Small variant `.btn.small` reduces padding to `10px 18px` and font to 13px; used in the nav.
- **Ghost (`.btn.ghost`):** transparent background with 1-px Anda Ink stroke, Anda Ink text. Hover inverts to solid Anda Ink + Studio Paper text.
- **Iconography:** trailing arrow glyph `→` after most CTAs, set inside the button as plain text, no SVG.

### Chips

- **Style:** transparent background, Anda Ink text, 1-px line-token border. Mono 10-11px, letter-spacing 1-2px, uppercase. Used for service-inclusion tags ("Mood-mapping", "Outfit blueprint").
- **State:** no hover, no selected state. Static.

### Image Plates (placeholder system)

A distinctive primitive: square or 3:4 aspect-ratio panels currently rendered as Studio Ink fields with a 135° striped overlay (`repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 1px, transparent 1px 12px)`) plus a small uppercase label top-left and meta string bottom-right. Will be replaced by real photography; the striped pattern is a working placeholder.

### Cards / Containers

The system mostly **avoids cards**. Service rows are 6-column CSS grids with row borders, not card grids. The Form Card is the only true card on the page:
- **Background:** Studio Paper
- **Border:** 1-px Anda Ink (hard border, no shadow)
- **Padding:** `36px`
- **Corner radius:** 0
- **Inset on Drafting Cream surface** for tonal contrast

### Inputs / Fields

- **Style:** 1-px line-token border, Drafting Cream background, 12-14px padding, sharp corners.
- **Focus:** border darkens to Anda Ink (`.2s` transition). No glow, no shadow.
- **Service options:** checkbox-style labels with a 14×14 outlined square that fills with Anda Ink when active.
- **Textarea:** same field treatment, resize vertical, 14px padding.

### Navigation

- **Style:** 3-column grid (`1fr auto 1fr`) with left-side text links, centered wordmark, right-side controls.
- **Wordmark:** `Anda` set in Bricolage 700 at 44px display with a rust dot for the period.
- **Default:** Bricolage 400 at 14px, ink colour, no underline.
- **Active:** Bricolage 600 (weight only).
- **Hover:** colour shifts to Anda Rust.
- **Mobile (≤860px):** entire link row hidden, no replacement disclosure. **Documented as a known bug; see Don'ts.**

### Top Strip

A 1-row ink band above the nav carrying three mono labels — issue masthead, booking status, location list. Visual debt from the editorial-template lane; flagged for replacement.

### Pull-Quote Band

Full-bleed Anda Rust field with display headline + mono attribution. The single Drenched colour-strategy moment on the page. One per page maximum.

## 6. Do's and Don'ts

### Do:
- **Do** use Studio Paper (`#F4F1EA`) for the dominant page surface. 60-70% of any viewport.
- **Do** reserve Anda Rust (`#FF4A1C`) for display-scale type and full colour fields. Never small label colour on paper.
- **Do** keep buttons sharp (radius 0). The system has no rounded affordances except the single `.svc-arrow` 40-px ink circle.
- **Do** use 1-px rule lines for separation. Two weights only: hard ink, soft line-token.
- **Do** invert tonally for "elevation": shift from Studio Paper to Drafting Cream rather than reach for a shadow.
- **Do** keep body copy at 65-75ch (`max-width: 440-460px` enforces this on ledes).
- **Do** write alt text in Anda's voice when imagery lands ("Cream linen overshirt and tailored wool trouser, March fitting"), per PRODUCT.md.
- **Do** respect `prefers-reduced-motion` on every fade-in or transition.

### Don't:
- **Don't** use magazine-cover editorial templates. No `VOL.04 / ISSUE 12` mastheads, no `★ Cover Story — N° 12` kickers, no `§ 01 — INDEX` section numbering. The current implementation does this; remove in the next shape pass.
- **Don't** scaffold every section with a mono uppercase tracked kicker. PRODUCT.md anti-reference; brand.md ban. One kicker style at most.
- **Don't** use Instrument Serif italic as page-grammar. One word per section, max. "Like you", "do", "stylist", "say", "note" — pick fewer; some sections should land without the italic note at all.
- **Don't** use Anda Rust on body text or 11-px labels. Contrast fails WCAG AA. Promote to display, or restate in ink.
- **Don't** use pure `#000` or `#FFF`. Every neutral is tinted warm toward the paper hue.
- **Don't** introduce box-shadows. Flat-by-default. If depth is needed, change the surface colour.
- **Don't** add rounded corners. Sharp is the system. Pill buttons, soft cards, rounded inputs — all banned.
- **Don't** ship colored gradient blocks where photographs should sit. PRODUCT.md / brand.md ban for fashion briefs; the current image-plate placeholders are temporary working scaffolding only.
- **Don't** publish testimonials, press citations, or metrics that are not real. PRODUCT.md design principle: "Service is the product. Empty space beats fabricated proof."
- **Don't** leave mobile nav as a hidden link row with no replacement. Add a disclosure before launch.
- **Don't** default to centered hero stacks with icon-title-subtitle cards. The system is left-aligned and asymmetric.
- **Don't** add a fifth or sixth font family. The system is three: Bricolage, Instrument Serif (italic only), JetBrains Mono. The mono is on probation.
