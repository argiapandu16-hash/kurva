/**
 * Kurva ERP, unified Tailwind configuration ("Forest Modern").
 * Companion to DESIGN.md. Colors, typography, radii and spacing are generated from the
 * DESIGN.md front matter and must stay identical to it; shadows, sizes, layers, motion and
 * icon sizes follow the prose sections. Change DESIGN.md first, then this file.
 *
 * Works in both setups:
 *   - Tailwind Play CDN (Stitch / prototypes): paste or load this file after the
 *     CDN <script>; it assigns tailwind.config itself. Load the forms and
 *     container-queries plugins with the CDN query string, as the source pages do:
 *     https://cdn.tailwindcss.com?plugins=forms,container-queries
 *   - Node build (Tailwind v3): module.exports; the two plugins load if installed.
 *
 * Fonts: Plus Jakarta Sans (600, 700) and Inter (400, 500, 600, 700, italic 400) from Google Fonts,
 * and Material Symbols Outlined for icons.
 */
const fallbackDisplay = ["ui-sans-serif", "system-ui", "sans-serif"];
const fallback = ["ui-sans-serif", "system-ui", "sans-serif"];

const config = {
  darkMode: "class", // no dark theme is defined yet; kept for compatibility with source pages
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: "#1E4B3D",
        "primary-hover": "#16382E",
        "primary-pressed": "#112922",
        "on-primary": "#FFFFFF",
        "primary-container": "#1B3F34",
        "on-primary-container": "#A1D0BE",
        "primary-subtle": "#ECFDF5",
        "primary-subtle-border": "#A7F3D0",
        secondary: "#059669",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#D1FAE5",
        "on-secondary-container": "#047857",
        "brand-forest-deep": "#1B3F34",
        "brand-forest-mid": "#2D6A4F",
        "brand-mint-accent": "#34D399",
        "brand-emerald-dark": "#059669",
        // Shell (dark sidebar)
        "sidebar-canvas": "#0F1916",
        "sidebar-surface": "#162721",
        "sidebar-border": "#1E3B32",
        "sidebar-text": "#94A3B8",
        // Surfaces (green-tinted neutrals)
        "canvas-bg": "#F7FBF8",
        "card-bg": "#FFFFFF",
        "surface-container-low": "#F1F7F3",
        "surface-container": "#E8F1EC",
        "surface-container-high": "#DDE9E2",
        scrim: "#0F172A66",
        // Text
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        "text-muted": "#64748B",
        "text-dim": "#94A3B8",
        // Borders and focus
        "border-subtle": "#E2E8F0",
        "border-strong": "#CBD5E1",
        "border-input": "#7F8EA3",
        "focus-ring": "#10B98133",
        // Status: base = dots, icons, bars, fills; -text = text on -subtle
        "status-success": "#10B981",
        "status-success-subtle": "#ECFDF5",
        "status-success-text": "#047857",
        "status-success-border": "#A7F3D0",
        "status-warning": "#F59E0B",
        "status-warning-subtle": "#FFFBEB",
        "status-warning-text": "#B45309",
        "status-warning-border": "#FDE68A",
        "status-danger": "#F43F5E",
        "status-danger-subtle": "#FFF1F2",
        "status-danger-text": "#BE123C",
        "status-danger-border": "#FECDD3",
        "status-danger-solid": "#E11D48",
        "status-info": "#0EA5E9",
        "status-info-subtle": "#F0F9FF",
        "status-info-text": "#0369A1",
        "status-info-border": "#BAE6FD",
        // Data viz
        "chart-series-1": "#1E4B3D",
        "chart-series-2": "#0EA5E9",
        "chart-series-3": "#6366F1",
        "chart-series-4": "#F59E0B",
        "chart-series-5": "#10B981",
        "chart-grid": "#F1F5F9",

        // DEPRECATED aliases: map old or Stitch/Material role names to the unified values.
        // Do not use in new designs. Remove once source pages are migrated.
        "brand-forest-dark": "#0F1916",
        "primary-fixed-dim": "#A1D0BE",
        "forest-50": "#ECFDF5",
        "forest-100": "#D1FAE5",
        "forest-400": "#34D399",
        "forest-700": "#1E4B3D",
        "forest-800": "#1B3F34",
        "forest-900": "#0F1916",
        "mint-400": "#34D399",
        surface: "#F7FBF8",
        background: "#F7FBF8",
        "surface-bright": "#FFFFFF",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-highest": "#DDE9E2",
        "surface-variant": "#DDE9E2",
        "surface-dim": "#DDE9E2",
        "on-surface": "#0F172A",
        "on-background": "#0F172A",
        "on-surface-variant": "#475569",
        outline: "#7F8EA3",
        "outline-variant": "#CBD5E1",
        error: "#E11D48",
        "on-error": "#FFFFFF",
        "error-container": "#FFF1F2",
        "on-error-container": "#BE123C",
      },

      fontFamily: {
        sans: ["Inter", ...fallback], // default body font is Inter
        display: ["Plus Jakarta Sans", ...fallbackDisplay],
        // one entry per typography token, so that font-label-md etc. resolve
        "headline-xl": ["Plus Jakarta Sans", ...fallbackDisplay],
        "headline-xl-mobile": ["Plus Jakarta Sans", ...fallbackDisplay],
        "headline-lg": ["Plus Jakarta Sans", ...fallbackDisplay],
        "headline-md": ["Plus Jakarta Sans", ...fallbackDisplay],
        "headline-sm": ["Plus Jakarta Sans", ...fallbackDisplay],
        "metric-display": ["Inter", ...fallback],
        "body-lg": ["Inter", ...fallback],
        "body-base": ["Inter", ...fallback],
        "body-sm": ["Inter", ...fallback],
        "body-xs": ["Inter", ...fallback],
        "label-md": ["Inter", ...fallback],
        "label-sm": ["Inter", ...fallback],
        "label-caps": ["Inter", ...fallback],
        "label-micro": ["Inter", ...fallback],
        "code-mono": ["Inter", ...fallback],
      },

      // text-{token} sets size, line-height, tracking and weight together.
      fontSize: {
        "headline-xl": ["28px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-xl-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg": ["24px", { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["18px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-sm": ["16px", { lineHeight: "24px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "metric-display": ["20px", { lineHeight: "28px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["15px", { lineHeight: "22px", fontWeight: "400" }],
        "body-base": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "18px", fontWeight: "400" }],
        "body-xs": ["11px", { lineHeight: "16px", fontWeight: "400" }],
        "label-md": ["13px", { lineHeight: "18px", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "label-caps": ["11px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "700" }],
        "label-micro": ["10px", { lineHeight: "14px", letterSpacing: "0.04em", fontWeight: "700" }],
        "code-mono": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "icon-xs": ["16px", { lineHeight: "1" }],
        "icon-sm": ["18px", { lineHeight: "1" }],
        "icon-md": ["20px", { lineHeight: "1" }],
        "icon-lg": ["24px", { lineHeight: "1" }],
        "icon-xl": ["32px", { lineHeight: "1" }],
        "icon-2xl": ["48px", { lineHeight: "1" }],
      },

      // Material Symbols sizes. Use text-icon-* instead of text-[18px].
            borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        DEFAULT: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },

      spacing: {
        "space-2xs": "0.125rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "0.75rem",
        "space-base": "1rem",
        "space-lg": "1.25rem",
        "space-xl": "1.5rem",
        "space-2xl": "2rem",
        gutter: "1rem",
        "gutter-lg": "1.25rem",
        margin: "1.5rem",
        "margin-mobile": "1rem",
      },

      boxShadow: {
        card: "0 1px 3px 0 rgba(15,23,42,.04), 0 1px 2px -1px rgba(15,23,42,.02)",
        "card-hover": "0 4px 6px -1px rgba(15,23,42,.06), 0 2px 4px -2px rgba(15,23,42,.04)",
        popover: "0 10px 15px -3px rgba(15,23,42,.08), 0 4px 6px -4px rgba(15,23,42,.03)",
        overlay: "0 20px 25px -5px rgba(15,23,42,.12), 0 8px 10px -6px rgba(15,23,42,.06)",
        shell: "0 1px 8px rgba(0,0,0,.04)",
      },

      height: {
        "control-xs": "1.75rem", // 28 inline row action
        "control-sm": "2rem", // 32 compact
        control: "2.25rem", // 36 default
        "control-lg": "2.5rem", // 40 form CTA, tabs
        header: "3.5rem", // 56 top bar
        "table-head": "2.25rem", // 36
        row: "2.75rem", // 44 default table row
        "row-compact": "2.25rem", // 36 statements, ledgers
        "row-2line": "3.5rem", // 56
        "queue-item": "4.5rem", // 72 approval queue item
      },

      width: {
        sidebar: "16rem", // 256
        "sidebar-collapsed": "4.5rem", // 72
        drawer: "32rem", // 512
        "drawer-wide": "40rem", // 640 line-item forms
        queue: "22.5rem", // 360 approval queue pane
        "role-list": "17.5rem", // 280
        "kanban-col": "18rem", // 288
        subnav: "12.5rem", // 200 configuration sub-nav
        dialog: "27.5rem", // 440 confirm dialog
        toast: "22.5rem", // 360
        menu: "12rem", // 192 row-action menu
      },

      zIndex: {
        header: "40",
        sidebar: "50",
        drawer: "60", // drawer and scrim
        modal: "70",
        toast: "80",
        tooltip: "90",
      },

      transitionDuration: { fast: "150ms", base: "200ms", slow: "300ms" },
      transitionTimingFunction: { standard: "cubic-bezier(0.4, 0, 0.2, 1)" },
    },
  },
  plugins: [],
};

// Node build: load the form and container-query plugins when they are installed.
if (typeof module !== "undefined" && module.exports) {
  try {
    config.plugins.push(require("@tailwindcss/forms"), require("@tailwindcss/container-queries"));
  } catch (e) {
    /* plugins optional */
  }
  module.exports = config;
}
// Tailwind Play CDN: the global `tailwind` object exists.
if (typeof tailwind !== "undefined") {
  tailwind.config = config;
}
