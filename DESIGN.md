---
version: alpha
name: Kurva Forest Modern ERP
description: Unified design system for the Kurva ERP redesign. Dense, authoritative, finance-grade UI built on a deep forest green brand, slate neutrals, tabular numerals and border-first containment.
colors:
  # Brand
  primary: '#1E4B3D'
  primary-hover: '#16382E'
  primary-pressed: '#112922'
  on-primary: '#FFFFFF'
  primary-container: '#1B3F34'
  on-primary-container: '#A1D0BE'
  primary-subtle: '#ECFDF5'
  primary-subtle-border: '#A7F3D0'
  secondary: '#059669'
  on-secondary: '#FFFFFF'
  secondary-container: '#D1FAE5'
  on-secondary-container: '#047857'
  brand-forest-deep: '#1B3F34'
  brand-forest-mid: '#2D6A4F'
  brand-mint-accent: '#34D399'
  brand-emerald-dark: '#059669'
  # Shell (dark sidebar)
  sidebar-canvas: '#0F1916'
  sidebar-surface: '#162721'
  sidebar-border: '#1E3B32'
  sidebar-text: '#94A3B8'
  # Surfaces (green-tinted neutrals)
  canvas-bg: '#F7FBF8'
  card-bg: '#FFFFFF'
  surface-container-low: '#F1F7F3'
  surface-container: '#E8F1EC'
  surface-container-high: '#DDE9E2'
  scrim: '#0F172A66'
  focus-ring: '#10B98133'
  # Text
  text-primary: '#0F172A'
  text-secondary: '#475569'
  text-muted: '#64748B'
  text-dim: '#94A3B8'
  # Borders
  border-subtle: '#E2E8F0'
  border-strong: '#CBD5E1'
  border-input: '#7F8EA3'
  # Status (fill/icon/dot = base, text on subtle = -text)
  status-success: '#10B981'
  status-success-subtle: '#ECFDF5'
  status-success-text: '#047857'
  status-success-border: '#A7F3D0'
  status-warning: '#F59E0B'
  status-warning-subtle: '#FFFBEB'
  status-warning-text: '#B45309'
  status-warning-border: '#FDE68A'
  status-danger: '#F43F5E'
  status-danger-subtle: '#FFF1F2'
  status-danger-text: '#BE123C'
  status-danger-border: '#FECDD3'
  status-danger-solid: '#E11D48'
  status-info: '#0EA5E9'
  status-info-subtle: '#F0F9FF'
  status-info-text: '#0369A1'
  status-info-border: '#BAE6FD'
  # Data viz
  chart-series-1: '#1E4B3D'
  chart-series-2: '#0EA5E9'
  chart-series-3: '#6366F1'
  chart-series-4: '#F59E0B'
  chart-series-5: '#10B981'
  chart-grid: '#F1F5F9'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.01em
  metric-display:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-base:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-micro:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-mono:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1rem
  full: 9999px
spacing:
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-base: 1rem
  space-lg: 1.25rem
  space-xl: 1.5rem
  space-2xl: 2rem
  gutter: 1rem
  gutter-lg: 1.25rem
  margin: 1.5rem
  margin-mobile: 1rem
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.lg}'
    height: 36px
    padding: 0 12px
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
  button-primary-pressed:
    backgroundColor: '{colors.primary-pressed}'
  button-secondary:
    backgroundColor: '{colors.card-bg}'
    textColor: '{colors.text-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.lg}'
    height: 36px
    padding: 0 12px
  button-ghost:
    backgroundColor: transparent
    textColor: '{colors.primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.lg}'
    height: 32px
    padding: 0 10px
  button-ghost-hover:
    backgroundColor: '{colors.primary-subtle}'
  button-danger:
    backgroundColor: '{colors.status-danger-solid}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.lg}'
    height: 36px
    padding: 0 12px
  input:
    backgroundColor: '{colors.card-bg}'
    textColor: '{colors.text-primary}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.lg}'
    height: 36px
    padding: 0 12px
  card:
    backgroundColor: '{colors.card-bg}'
    textColor: '{colors.text-primary}'
    rounded: '{rounded.xl}'
    padding: 16px
  card-hero:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.xl}'
    padding: 20px
  kpi-value:
    textColor: '{colors.text-primary}'
    typography: '{typography.metric-display}'
  table-header:
    backgroundColor: '{colors.surface-container-low}'
    textColor: '{colors.text-secondary}'
    typography: '{typography.label-caps}'
    height: 36px
    padding: 0 16px
  table-cell:
    textColor: '{colors.text-primary}'
    typography: '{typography.body-sm}'
    height: 44px
    padding: 0 16px
  badge-success:
    backgroundColor: '{colors.status-success-subtle}'
    textColor: '{colors.status-success-text}'
    typography: '{typography.label-micro}'
    rounded: '{rounded.full}'
    padding: 2px 10px
  badge-warning:
    backgroundColor: '{colors.status-warning-subtle}'
    textColor: '{colors.status-warning-text}'
    typography: '{typography.label-micro}'
    rounded: '{rounded.full}'
    padding: 2px 10px
  badge-danger:
    backgroundColor: '{colors.status-danger-subtle}'
    textColor: '{colors.status-danger-text}'
    typography: '{typography.label-micro}'
    rounded: '{rounded.full}'
    padding: 2px 10px
  badge-info:
    backgroundColor: '{colors.status-info-subtle}'
    textColor: '{colors.status-info-text}'
    typography: '{typography.label-micro}'
    rounded: '{rounded.full}'
    padding: 2px 10px
  count-pill:
    backgroundColor: '{colors.status-danger-solid}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-micro}'
    rounded: '{rounded.full}'
    height: 16px
  sidebar:
    backgroundColor: '{colors.sidebar-canvas}'
    textColor: '{colors.sidebar-text}'
    typography: '{typography.label-md}'
    width: 256px
  sidebar-nav-item-active:
    backgroundColor: '{colors.brand-forest-deep}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.lg}'
    height: 36px
  header:
    backgroundColor: '{colors.card-bg}'
    height: 56px
  drawer:
    backgroundColor: '{colors.card-bg}'
    width: 512px
  dropzone:
    backgroundColor: '{colors.surface-container-low}'
    textColor: '{colors.text-secondary}'
    rounded: '{rounded.xl}'
    padding: 32px
  tab-active:
    textColor: '{colors.primary}'
    typography: '{typography.label-md}'
    height: 40px
---

## Brand & Style

Kurva targets mid-market to enterprise accounting, supply chain and fiscal operations. The personality is **authoritative, precise and dependable**: high information density, structured cards, hairline borders, clear temporal context and an immediate path from observation to action.

The identity is a deep **forest green** primary with **emerald/mint** accents on a **green-tinted neutral canvas**. Green carries brand and positive action only. Red, amber and blue are reserved for semantic status, so a colour on screen always means something.

Principles that resolve most design decisions:
1. **Border-first, shadow-second.** Containment comes from 1px borders; shadows are barely-there.
2. **Numbers are the product.** Tabular figures, right-aligned, consistent currency and negative formats.
3. **One primary action per view.** Every other action is secondary or ghost.
4. **Colour carries meaning, never decoration.** Zero values are neutral, not red or green.
5. **Dense but legible.** Minimum text size 11px, minimum text contrast 4.5:1.

Language: UI copy is Indonesian (Bahasa baku), sentence case, no English in parentheses (write `Ringkasan`, not `Ringkasan (Overview)`; `Lewat tempo`, not `Overdue`). Module names follow the sidebar spelling (`Kustomisasi`, `Produk & Stok`).

## Colors

- **Primary `#1E4B3D`**: the single action colour. Primary buttons, active tab text and underline, links, document numbers, focus-adjacent accents. Hover `#16382E`, pressed `#112922`. `primary-subtle #ECFDF5` is its tint for ghost-button hover, selected rows and selected cards.
- **Primary container / brand-forest-deep `#1B3F34`**: hero surfaces (featured KPI, CTA banner, active nav item, page-header icon badge). Hero cards add an inset border `1px solid #2D6A4F` (`brand-forest-mid`). `on-primary-container #A1D0BE` is secondary text on it; **mint `#34D399`** is the accent for icons, deltas and sparklines on dark surfaces only.
- **Secondary / emerald-dark `#059669`**: focus borders, positive trend emphasis, toggles in the on state when a lighter green is needed. As text it is allowed only at 20px+ bold (3.8:1 on white) or in icons; for smaller text use `status-success-text`. Never put white text on it (3.8:1).
- **Shell**: sidebar `#0F1916` (`sidebar-canvas`), hover `#162721` (`sidebar-surface`), active `#1B3F34`, dividers `#1E3B32`, inactive text `#94A3B8` (6.99:1 on the sidebar).
- **Surfaces**: page canvas `#F7FBF8`; cards `#FFFFFF`; inset panels, table headers, toolbars, row hover `#F1F7F3`; chips and neutral badges `#E8F1EC`; pressed chips `#DDE9E2`. All neutrals are green-tinted so surfaces never read blue against the forest brand. `#F8FAFC` is retired; use `canvas-bg` or `surface-container-low`.
- **Text**: primary `#0F172A` (17.9:1), secondary `#475569` (7.6:1), muted `#64748B` (4.8:1 on `card-bg`, 4.6:1 on `canvas-bg`), dim `#94A3B8` (2.6:1). **`text-muted` is allowed only on `card-bg` and `canvas-bg`.** On tinted surfaces (`surface-container-low`, `surface-container`) it falls to 4.4 and 4.1:1, so use `text-secondary` there (table headers, toolbar labels, chip and count-pill text). **`text-dim` is for icons, placeholders, disabled states and decoration only, never for captions or values on light surfaces.**
- **Borders**: `border-subtle #E2E8F0` for card, table and section edges; `border-strong #CBD5E1` for hover emphasis and dashed dropzones; `border-input #7F8EA3` for form-control edges (3.3:1 on white, 3.1:1 on `surface-container-low`, meeting the 3:1 non-text minimum).
- **Status**: each status has a base colour (dots, icons, bars, chart fills), a subtle background, a **text-safe dark variant** and a border tint.

| Status | Base | Subtle | Text on subtle | Border | Meaning |
|---|---|---|---|---|---|
| Success | `#10B981` | `#ECFDF5` | `#047857` | `#A7F3D0` | Lunas, balanced, synced, positive delta |
| Warning | `#F59E0B` | `#FFFBEB` | `#B45309` | `#FDE68A` | Pending, session warning, near due |
| Danger | `#F43F5E` | `#FFF1F2` | `#BE123C` | `#FECDD3` | Overdue, void, negative balance, destructive |
| Info | `#0EA5E9` | `#F0F9FF` | `#0369A1` | `#BAE6FD` | Neutral information, AI, KurvaBot |

  Base colours as text on subtle backgrounds fail WCAG (2.1 to 3.3:1); always use the `-text` variant for text. Solid danger fills with white text (count pills, destructive buttons) use `status-danger-solid #E11D48` (4.7:1).
- **Charts**: series 1 forest `#1E4B3D`, 2 sky `#0EA5E9`, 3 indigo `#6366F1`, 4 amber `#F59E0B`, 5 emerald `#10B981`. Gridlines `#F1F5F9`, axis lines `#CBD5E1`, axis labels `text-muted`.
- Do not use raw Tailwind palette colours (`slate-*`, `emerald-*`, `rose-*`) or arbitrary hex in components; every colour must be a token above.

## Typography

**Plus Jakarta Sans** for page titles, card titles and nav branding. **Inter** for everything else, including KPI figures, tables, labels and microcopy.

| Token | Spec | Use |
|---|---|---|
| headline-xl | Jakarta 28/40 · 700 | Rare hero numbers, empty-state hero |
| headline-lg | Jakarta 24/32 · 700 | Page title (H1), one per page |
| headline-md | Jakarta 18/26 · 700 | Card, drawer and modal titles |
| headline-sm | Jakarta 16/24 · 700 | Section headings inside a page |
| metric-display | Inter 20/28 · 700, tabular | KPI and summary-card values |
| body-lg / base | Inter 15/22, 14/20 | Long-form text, form review text |
| body-sm | Inter 13/18 | Default UI text, table cells, inputs |
| body-xs | Inter 11/16 | Helper text, footnotes, secondary table lines |
| label-md | Inter 13/18 · 500 | Buttons, tabs, nav items, field labels |
| label-sm | Inter 12/16 · 500 | Compact buttons, chips, form meta |
| label-caps | Inter 11/16 · 700 · 0.06em · uppercase | Table headers, sidebar group labels, overlines |
| label-micro | Inter 10/14 · 700 · 0.04em | Status badges, count pills only |
| code-mono | Inter 12/16 · 500, tabular + slashed zero | Document numbers, account codes (COA), IDs |

Headline weights are 700 everywhere (every source page overrode the 600 token with bold). Page titles are never smaller than 24px; card titles never smaller than 16px.

**Numerals** use Inter with `font-variant-numeric: tabular-nums slashed-zero` so columns never jitter (this is why KPI values are Inter rather than Jakarta). Money, quantities and percentages are right-aligned, and column headers align with their values.

**Formats**
- Currency: `Rp 1.234.567,00` (space after `Rp`, dot thousands, comma decimals, always two decimals in tables and statements).
- Negatives: lists, KPIs, variance and charts use a leading minus, `-Rp 66.045.000,00`, in `status-danger-text`. Formal statements (Neraca, Laba Rugi, Neraca Saldo, Buku Besar) use parentheses, `Rp (66.045.000,00)`.
- Zero: `Rp 0,00` in `text-muted`, never red or green, and never `text-dim` (a value must stay readable).
- Abbreviations on charts, KPI sublines and axes: `rb` (thousand), `jt` (million), `M` (billion), `T` (trillion), one decimal, comma separator (`194,1 M`, `6,4 jt`). Always pair with the unit tag `Rupiah (Rp)`.
- Dates: `05 Okt 2026` in tables and labels; `Okt 26` on chart axes; timestamps `10 Okt 2026, 23.59 WIB`; ISO `2026-10-10` only inside date inputs and exports.
- Percent deltas: signed, one decimal, comma (`+115,1%`).

## Layout & Spacing

**Application shell**
- Fixed dark sidebar **256px** (collapsed **72px**, 300ms ease), fixed top bar **56px** white with `shell` shadow, scrolling main area on `canvas-bg`.
- Sidebar: logo block (mint tile + `KURVA` + `ERP` tag), nav groups, user card pinned to the bottom. The first group (Dasbor, Ruang Kerja, Laporan, Anggaran) has no label; the others use `label-caps` group labels (`Transaksi`, `Master`, `Pembukuan`, `Sistem`). Nav item: 36px tall, 18px icon, radius 8; hover `sidebar-surface`; active `brand-forest-deep` with white text and mint icon; `aria-current="page"` drives the state.
- Collapsed sidebar: labels and group headers hide, items centre their icon, hovering shows a dark tooltip (`data-tooltip`). The header collapses to the mint logo mark; the pin toggle becomes a 20px edge handle on the sidebar border. The pin icon is `push_pin` when pinned (expanded) and `keep_off` when collapsed.
- Top bar, right-aligned: split button `+ Buat ▾` (primary), `Bantuan`, `Riwayat saya`, app switcher, `KurvaBot` (info-subtle), notifications with count pill, avatar. Global search is not part of the shell; search lives inside each module toolbar.
- Below 1024px the sidebar becomes an off-canvas drawer opened from a hamburger in the top bar.

**Page anatomy** (top to bottom, 24px between blocks)
1. Page header: 36px icon badge (`brand-forest-deep` tile, mint 20px icon), H1 (`headline-lg`), one-line description (`body-sm`, `text-muted`), page actions on the right (one primary), 1px `border-subtle` rule beneath, 16px padding.
2. Optional banner (session, sync or data warnings).
3. Summary or KPI row.
4. Toolbar (search, filters) joined to the table card it controls.
5. Content cards, tables, charts.

**Grid**: main padding 24px; 12-column fluid grid, 16px gutters (20px on dashboards). KPI cards span 3 columns, side-by-side charts 6, primary trend 7 or 8, action queues 4 or 5. Below 1024px a four-up KPI row becomes 2×2; below 640px a single column.

**Spacing**: 4px base unit. Card padding 16px (20px for KPI, chart and summary cards). Control gaps 8px, field-to-field 16px, section gaps 24px.

**Control heights**: 28 (inline row action), 32 (compact), **36 (default)**, 40 (large or primary page CTA in forms).

**Table density**: header 36px; default row 44px; compact (statements, ledgers) 36px; two-line row 56px; horizontal cell padding 16px.

**Layers**: header 40 · sidebar 50 · drawer/scrim 60 · modal 70 · toast 80 · tooltip 90.

**Motion**: hover and colour 150ms; popovers and accordions 200ms; drawers and sidebar 300ms; easing `cubic-bezier(0.4,0,0.2,1)`. Respect `prefers-reduced-motion`.

## Elevation & Depth

- **Border-first**: cards, tables, toolbars and inputs use `1px solid border-subtle`. Every card has a border, including dashboard cards.
- **Card shadow** `0 1px 3px 0 rgba(15,23,42,.04), 0 1px 2px -1px rgba(15,23,42,.02)`; clickable cards lift to `0 4px 6px -1px rgba(15,23,42,.06), 0 2px 4px -2px rgba(15,23,42,.04)` and `border-strong` on hover.
- **Popover** (menus, dropdowns, date pickers) `0 10px 15px -3px rgba(15,23,42,.08), 0 4px 6px -4px rgba(15,23,42,.03)`, white, `border-strong`.
- **Overlay** (drawers, modals) `0 20px 25px -5px rgba(15,23,42,.12), 0 8px 10px -6px rgba(15,23,42,.06)` over a `#0F172A` 40% scrim with a 2px backdrop blur.
- **Shell** (top bar) `0 1px 8px rgba(0,0,0,.04)`.
- **Hero KPI**: inverted surface `#1B3F34` with inset border `#2D6A4F` instead of extra shadow.
- Banners are in-flow, bordered, 0 elevation.

## Shapes

- **Cards, panels, dropzones, modals**: 12px (`xl`).
- **Buttons, inputs, selects, tabs' hover areas, menu surfaces, nav items**: 8px (`lg`).
- **Tags, chips, kbd, small tiles**: 6px (`DEFAULT`).
- **Status badges, count pills, avatars, switches, progress bars**: full pill.
- **Icon badges**: 8px at 36px, 12px at 40–48px.
- Sparkline and chart containers, nested table wrappers: 8px to sit inside a 12px card.
- Drawers have square edges against the viewport; inside, controls follow the rules above.

## Iconography

Material Symbols Outlined, weight 400, grade 0, optical size 20, fill 0 (fill 1 for selected or active states). Sizes: 16 (inline, row actions, chips), 18 (buttons, nav, inputs), 20 (page-header badge, empty states small), 24 (launcher tiles), 32 (dropzone), 48 (blank canvas). Icons are `text-dim` or `text-muted` unless they carry status. Token classes: `text-icon-xs` (16), `text-icon-sm` (18), `text-icon-md` (20), `text-icon-lg` (24), `text-icon-xl` (32), `text-icon-2xl` (48). Do not use other sizes (14, 15, 17, 19, 22 and 26 all appear in the source pages and are retired).

## Components

### Buttons and CTAs
Hierarchy: **Primary** (solid `primary`, white text, hover `primary-hover`, pressed `primary-pressed`) · **Secondary** (white, 1px `border-subtle`, text `text-primary`, hover `surface-container-low`) · **Ghost / table action** (borderless, text `primary` or `text-secondary`, hover `primary-subtle`, often trailing `chevron_right`, e.g. `Periksa >`) · **Destructive** (solid `status-danger-solid`, or ghost with `status-danger-text`) · **Link** (text `primary`, underline on hover).
Sizes 28/32/36/40, radius 8, `label-md` text, 18px icon with 6px gap. Disabled: 60% opacity, `cursor-not-allowed`. Loading: spinner replaces the leading icon and the label stays. Keyboard focus: 2px `secondary` ring with 2px offset.
**Primary CTA**: one per view, in the page header (`+ Buat`, `+ Anggaran baru`, `Impor data`) or the drawer footer. A split primary with a chevron (`+ Buat ▾`) opens a popover menu of document types. Order in a footer: cancel (secondary) on the left, confirm (primary) on the right.
**Integration CTAs**: `Hubungkan` (primary, sm), connected state `Terhubung` (secondary with a check icon), `Putuskan` (ghost danger, behind a confirm dialog). A **CTA banner** (`#1B3F34`, white title, `on-primary-container` text, mint icon, white-outline or mint-solid button) promotes discoverable actions such as `Jelajahi integrasi lain`; at most one per page.

### Forms and fields
Field = label (`label-md`, above, `text-primary`), control, helper (`body-xs`, `text-muted`) or error (`body-xs`, `status-danger-text` with a 14px error icon). Required fields mark a red `*`. Input: 36px, white, 1px `border-input`, radius 8, 13px text, 12px side padding, placeholder `text-dim`. Hover `border-strong`; **focus** `border-secondary` plus a `rgba(16,185,129,.20)` 2px ring; error `border-status-danger` with the same ring in rose; disabled `surface-container-low`. Select: same box with a chevron. Textarea: min 80px. Checkbox and radio: 16px, checked `primary`. **Switch**: 36×20 track, off `border-strong`, on `primary`, 16px white thumb; the label sits on the left and the switch on the right of a settings row.
Date input: native date or composite trigger (`Per tanggal`, `Rentang tanggal`). Currency input: right-aligned tabular text, `Rp` prefix, thousand separators while typing, amounts entered in rupiah.
**Form (page-level, e.g. Profil Perusahaan)**: stacked section cards, each with a title (`headline-sm`), a one-line description and a 2-column field grid (1 column below 768px, 16px gaps, full-width for address and notes). Logo upload sits in a 96px dashed tile. Sections: Informasi dasar, Alamat, Pajak, Kontak. A sticky **Save CTA** bar closes the page.

### Save CTA
Sticky bar at the bottom of the scroll area, white, `border-subtle` top edge, `popover` shadow, aligned to content width. It appears when the form is dirty: left, an amber dot with `Ada perubahan yang belum disimpan`; right, `Batalkan` (secondary) and `Simpan perubahan` (primary). While saving the button shows a spinner and is disabled; on success it shows a check with `Tersimpan` for two seconds, then the bar hides. Leaving a dirty form asks for confirmation.

### Search
Inside the module toolbar only. 36px input, 18px `search` icon at the left (`text-dim`), placeholder `Cari {entitas}…` (`Cari nomor atau pelanggan…`), clear button once there is a value, results filter live (300ms debounce). Minimum width 260px, flexes to fill. `/` focuses it and shows a `kbd` hint.

### Filter
A toolbar row on a `surface-container-low` strip joined to the table card, controls on one baseline with no external labels. Each control is a composite trigger: `{Label}: {Nilai} ⌄` (e.g. `Status: Semua`, `Tahun: 2026`, `Bulan acuan: Desember 2026`). Date ranges use one trigger (`Rentang tanggal: 01 Jan – 10 Okt 2026`) opening a popover calendar with presets. Applied filters show as removable chips; `Reset filter` is a ghost button at the right end, disabled when nothing is applied. For more than four filters, collapse extras into a `Filter` button with a count badge that opens a popover panel.

### Tabs and segmented control
**Tabs** are underline tabs on a 1px `border-subtle` baseline: 40px high, 12px side padding, 4px gap, `label-md`. Active: text `primary`, 2px `primary` underline, weight 600. Inactive: `text-muted`, hover `text-primary` with a `border-strong` underline. Optional 18px icon, count pill (`surface-container`, `text-secondary`, `code-mono`) and alert dot (`status-danger`). Tabs inside a card sit above its toolbar with 16px side padding. Tabs overflow-scroll horizontally on small screens.
**Segmented control** (view switchers): `surface-container-low` track, 2px padding, radius 8; segments 32px high; selected = white with card shadow and `primary` text.

### Tables
Wrapper = card with 1px border, radius 12, `overflow-x-auto`. Header: 36px, `surface-container-low`, `label-caps` in `text-secondary`, bottom hairline, sticky when the table scrolls. Body: 44px rows (two-line 56px, compact 36px), 1px `border-subtle` dividers, hover `surface-container-low`, selected `primary-subtle` with a 3px `primary` left edge. Cell text `body-sm`; secondary line `body-xs` `text-muted`. **Document numbers and account codes** are `code-mono`, semibold, `primary`; counterparties `label-md` `text-primary`. Number columns right-aligned, tabular. Status column centred badge. Last column is Aksi. Group rows (statements) use a tinted band with `label-caps` or semibold text; subtotal rows are italic with a top hairline; grand totals sit on `brand-forest-deep` with white text and mint amounts. Footer: row count left (`6 dokumen`), page indicator and compact prev/next right (`Halaman 1 dari 1`), on `surface-container-low`. Empty and error states replace the body (see Empty state).

### Pagination
`{n} baris · Halaman x / y` in `body-xs` `text-muted`, with `Sebelumnya` / `Berikutnya` secondary compact buttons (disabled at the ends) or 28px chevron icon buttons in dense footers.

### Row actions
Last column, right or centre aligned, at most two visible: one **ghost action** (`Detail`, `Periksa`, `Lihat varians`, with a 16px icon or trailing chevron; 28px high) plus an optional overflow button (`more_vert`, 28px) opening a **menu** (popover, 192px wide, 32px items with 16px icon, divider before destructive items such as `Hapus`/`Void` in `status-danger-text`). Actions are always visible, never hover-only. The row itself opens the detail drawer when clicked.

### Expand / collapse
Chevron toggle (`chevron_right`, 18px, rotates 90° in 150ms) in a 24px button with `aria-expanded`; Enter and Space toggle. In trees and statements each level indents 16px and the group row stays visible with its subtotal when collapsed. Toolbars of long trees offer `Perluas semua` / `Ciutkan semua` ghost buttons. Panels (e.g. the budget variance panel) collapse with a header chevron or a close icon and keep their state while filters change.

### Expandable detail
- **Chart or card detail**: a `Lihat tabel ⌄` ghost button under a chart reveals its data table inside the same card behind a top hairline; the label becomes `Sembunyikan tabel ⌃`.
- **Row detail**: a row expands to a full-width sub-row on `surface-container-low` with a key-value grid (3 columns) and optional sub-table, indented 16px.

### Cards
All cards: white, 1px `border-subtle`, radius 12, card shadow, padding 16 (20 for data cards).
- **Summary card** (transactional modules; 3 to 4 per row): label (`label-md`, `text-muted`), value (`metric-display`; colour only when meaningful: `status-danger-text` when overdue is above zero, otherwise `text-primary`), footnote row after a hairline (`body-xs`, `text-dim` reference date or count, e.g. `0 faktur terbuka · per 31 Des 2026`). No sparkline.
- **KPI card** (dashboards): icon + title row, optional delta pill (success or danger subtle, `code-mono`, signed), value `metric-display`, reference line, inline SVG sparkline (2px stroke, terminal dot), footer with a ghost link (`Lihat rincian >`) and a status word. The **hero** variant is `#1B3F34` with white text, `on-primary-container` secondary text, mint sparkline and an inset `#2D6A4F` border; use one hero per row.
- **Navigation card** (Laporan catalogue): 40px icon tile (`surface-container-low`, border), title (`label-md` bold), description (`body-xs` `text-muted`, two lines), footer after a hairline with action text and a chevron. Hover: `border-strong`, lift, title turns `primary`. **Selected**: `border-primary`, a 1px `primary` ring and a small `Aktif` label (`label-micro`, `primary` bg, white) pinned to the top-right corner.
- **App card** (Integrasi): 48px logo tile, name (`label-md` bold), category (`body-xs`), description (`body-sm`, 2-line clamp), footer with a connection badge (`Terhubung` success, `Belum terhubung` neutral, `Perlu tindakan` warning) and the CTA. 3 or 4 per row, equal height.
- **Service / feature card** (Kustomisasi): 40px icon badge (`primary-subtle`, `primary` icon), title, description, and either a switch (feature toggle) or an `Atur` ghost link (opens configuration). Disabled features show a neutral badge `Nonaktif`; paid or unavailable features show `Segera hadir` neutral.
- **Information card** (Impor Data): static guidance. Icon badge + title (`label-md` bold) + body (`body-sm` `text-secondary`) + optional ghost link. Variants: neutral (white), info (`status-info-subtle`, `status-info-border`), warning (`status-warning-subtle`). Used for supported formats, tips, limits and validation summaries. Unlike a banner it lives in the content grid and can hold a list.

### Badges, chips and avatars
**Status badge**: pill, 20px high, `label-micro` uppercase, subtle fill + `-text` colour + 1px `-border`. Mapping: `Lunas`/`Terhubung`/`Aktif`/`Seimbang` success · `Belum lunas`/`Menunggu`/`Perlu tindakan` warning · `Void`/`Lewat tempo`/`Ditolak` danger · `Draf`/`Nonaktif`/`Belum terhubung` neutral (`surface-container`, `text-secondary`) · `Audited`/`AI` info. **Dot status** (6px circle + `body-xs` text) for list rows. **Count pill**: `status-danger-solid`, white `label-micro`, 16px high, over nav triggers (`99+`). **Chips/tags**: 28px, radius 6, `surface-container-low` with border, selected = `primary` fill and white text; removable chips have a 14px close icon. **Avatar**: 32px circle, `brand-forest-mid` fill, white initials (`label-sm`), 24 and 40px sizes. **Kbd**: `code-mono`, white, border, radius 4.

### Banners, empty states, toasts, dialogs
- **Banner**: in-flow strip, radius 8, status subtle fill + border, 20px status icon, `body-sm` text, ghost action (`Coba lagi`) and a close button. Session, sync and data warnings use warning; errors danger; info otherwise.
- **Empty state**: centred in the content area, 48px circular icon on `surface-container`, title (`label-md` bold) and one helper line (`body-xs`), optional primary or secondary action. Filtered-empty text always says how to recover (`Ubah kata kunci atau sesuaikan filter tahun`).
- **Toast**: bottom-right, 360px, white, border, popover shadow, status icon, auto-dismiss in 5s, `Urungkan` ghost action when reversible. Replaces browser `alert()` for save, post and error feedback.
- **Confirm dialog**: centred modal 440px, `headline-md` title, `body-sm` message, footer secondary + primary or destructive; destructive dialogs name the object being affected.

### Edit drawer
Right slide-over, **512px** (`drawer`) or **640px** (`drawer-wide`) for line-item forms, 300ms slide with a scrim click-to-close. Header (white, hairline): `headline-md` title, `body-xs` helper line, 32px close button. Body: scrolls, 24px padding, 20px field gaps; repeatable line items are bordered `surface-container-low` blocks with a `Tambah baris` secondary button and a per-row delete icon button; totals right-aligned in a summary strip. Footer (`surface-container-low`, top hairline): `Batal` secondary, primary confirm (`Simpan draf`, `Simpan anggaran`) aligned right. Closing with unsaved changes asks for confirmation. Document numbers and journals are created by the system and stated in the helper text, not editable.

### Detail drawer
Same shell as the edit drawer, read-only. Header: `code-mono` identifier or avatar + name, status badge, subtitle (document type). Body: a bordered summary block of key-value pairs (`body-xs` label left, `label-md` value right), a **Rincian nilai** block (total, outstanding, journal status with a success check), optional inner tabs (`Ringkasan`, `Transaksi`, `Catatan`), and a locked-document note as an info card. Footer: `Cetak PDF` secondary, primary action (`Ubah` / `Terima pembayaran`) and `Tutup`. Opened from a row click or the row action.

### Print preview (Jurnal and reports)
Full-screen modal over the app. Toolbar (56px, white): back arrow + `Pratinjau cetak` + document title; centre zoom controls and page navigator (`1 / 3`); right paper size select (`A4`), orientation segmented control, `Unduh PDF` secondary and `Cetak` primary. Stage: `surface-container-high` background with the paper centred as a white sheet (A4 ratio, `popover` shadow, 24px gaps between pages). Paper content: company name and report title (`headline-md`), period and filters (`body-xs`), a compact 1px-ruled table in black on white at 10pt, tabular figures, and a running footer (`Dicetak 10 Okt 2026 oleh {pengguna} · Halaman 1 dari 3`). `@media print` hides the shell and shows only the sheet.

### Launchers and workspaces
- **Page launcher** (Ruang Kerja): a grid of page tiles (3 or 4 per row): 40px icon badge, page title (`label-md` bold), meta line (`body-xs`: `Dibuka 2 jam lalu`), a pin toggle, ghost `Buka`. The first tile is a dashed `Buat halaman` tile. Recently opened pages appear as a horizontal chip strip above.
- **Launcher** (Integrasi and quick actions): compact tiles, 24px icon in a 40px badge with a `label-md` name beneath or beside it, optional `body-xs` subtitle; hover lifts and borders `border-strong`. For launching external apps or actions rather than pages; app cards (above) are for connectable services.
- **Blank canvas** (empty workspace): a `canvas-bg` area with a 16px dot grid (`#E2E8F0` dots), a centred 48px icon, `headline-md` title (`Mulai dengan halaman kosong`), a `body-sm` hint and a primary `+ Tambah widget` with a secondary `Gunakan templat`. Once content exists the grid stays visible only in edit mode.
- **Multi-view workspace**: a view bar under the page header: saved views as underline tabs, a `+` tab to add a view, and a segmented control to switch layout (`Kanban`, `Daftar`, `Kalender`). The workspace toolbar holds search, filter and `Bagikan`. Kanban columns are 288px, `surface-container-low`, radius 12, with a `label-caps` title, count pill and card stack of white 8px-radius cards; the active column drop target shows a dashed `primary` outline.

### Approval queue (Persetujuan)
Two-pane layout inside one bordered card. **Left, queue (360px)**: tabs `Menunggu` / `Disetujui` / `Ditolak` with counts, search, and a scrolling list. Queue item (72px): checkbox, `code-mono` document number, type badge, counterparty, amount right-aligned, requester avatar with relative time, and an SLA marker (`Lewat SLA` danger dot after the due time). Selected item uses `primary-subtle` with a 3px `primary` left edge. Selecting items shows a sticky bulk bar on `brand-forest-deep` (`3 dipilih · Setujui · Tolak`). **Right, review pane**: the Review form (below). Empty selection shows the empty state `Pilih dokumen untuk ditinjau`.

### Review form (Persetujuan)
Header: `headline-md` document number, status badge, type and period, requester, submitted time. Body (scrolls): key-value summary grid (3 columns), compact line-item table with totals, attachments list (file rows), a vertical **approval timeline** (12px dots on a 1px rail: done = `success` check, current = `primary` filled, pending = outlined; each step shows approver, role, time and comment). Decision area (sticky footer): comment textarea (required when rejecting), `Minta revisi` (secondary), `Tolak` (destructive ghost), `Setujui` (primary). Posting effects are stated in a one-line `body-xs` note (`Jurnal akan diposting otomatis`).

### Review / confirmation (Dokumen AI)
Split view for checking AI-extracted data. **Left (55%)**: document viewer on `surface-container-high` with zoom, rotate and page controls and highlight boxes (`primary` 2px outline) tied to the focused field. **Right (45%)**: extracted fields as a form, each field showing a confidence chip (`Tinggi` success ≥90%, `Sedang` warning 70–89%, `Rendah` danger below 70%); low-confidence or empty required fields get a `status-warning` 3px left edge and are listed in a `Perlu ditinjau (3)` banner at the top. A small `AI` info badge (with `smart_toy` icon) marks machine-filled values; any edit removes it. Footer: `Tolak dokumen` (ghost danger), `Simpan draf` (secondary), `Konfirmasi & posting` (primary, disabled until required fields are valid). After confirmation, show a summary card with the created document and a link.

### Upload (Dokumen AI)
**Dropzone**: `surface-container-low`, 2px dashed `border-strong`, radius 12, 32px padding, centred 48px white circle with a 32px `cloud_upload` icon, `label-md` line `Tarik dan lepas berkas di sini atau Pilih berkas` (link in `primary`), `body-xs` helper `PDF, JPG, PNG · maks. 10 MB · hingga 20 berkas`. Drag-over: `primary` dashed border + `primary-subtle` fill. **File row**: type icon, name (`label-md`), size (`body-xs`), a 4px progress bar (`primary` on `surface-container`), status (`Mengunggah 64%`, `Selesai` success check, `Gagal` danger with `Coba lagi`), remove icon. Rejected files list the reason inline (`Ukuran melebihi 10 MB`).

### Upload forms and wizard (Impor Data)
Horizontal **stepper** (24px circles joined by 1px rails: done = `primary` with check, current = `primary` outline with filled dot, upcoming = `border-strong`; label `label-md`, `body-xs` sublabel) over four steps: `Pilih jenis data` → `Unggah berkas` → `Petakan kolom` → `Tinjau & impor`. Step 1: radio cards (info-card style) per data type with a `Unduh templat` ghost link. Step 2: dropzone + file row. Step 3: mapping table (source column → Kurva field select, sample value, match status badge). Step 4: validation summary using three summary cards (`Valid`, `Peringatan`, `Galat`), an errors table with row numbers, and `Mulai impor` primary (disabled while errors remain, with `Unduh laporan galat` secondary). Footer: `Kembali` secondary, `Lanjut` primary.

### Configuration (Kustomisasi)
Settings page: a left sub-nav (200px, vertical tabs with 18px icons) or stacked sections. Each **section card** has a header (`headline-sm` + description) followed by **setting rows**: label (`label-md`) and helper (`body-xs`, `text-muted`) on the left, the control on the right (switch, select, segmented control, input, or `Atur` ghost button), 16px vertical padding, hairline between rows. Destructive or irreversible rows sit in a final `Zona berisiko` card with a `status-danger-border` edge. Changes use the **Save CTA** bar; toggles that apply instantly show a toast instead.

### Role configuration (Administrasi)
Left: role list (280px) of selectable role cards (`label-md` name, `body-xs` `12 pengguna`, `Sistem` neutral badge for locked roles; selected = `primary-subtle` + `primary` left edge) with `+ Peran baru` at the bottom. Right: **permission matrix**: sticky header row with actions (`Lihat`, `Buat`, `Ubah`, `Hapus`, `Setujui`, `Ekspor`) as centred `label-caps` columns, rows grouped by module (collapsible group rows with a tri-state `Pilih semua` checkbox), 16px checkboxes centred in 44px cells. Sensitive actions (`Hapus`, `Setujui`) carry a 14px `status-danger-text` shield icon in the header. Locked roles render the matrix read-only with `text-dim` checks. Header has `Duplikat peran` secondary and the Save CTA applies.

### User list (Administrasi)
Table pattern with: user cell (32px avatar + name `label-md` + email `body-xs` muted), role badge (neutral or info), status dot (`Aktif` success, `Undangan terkirim` warning, `Nonaktif` neutral), `Terakhir aktif` date, and row actions (`Ubah` ghost + overflow with `Reset kata sandi`, `Nonaktifkan`). Toolbar: search, `Peran`, `Status` filters; page action `+ Undang pengguna` (primary). Invite and edit use the edit drawer.

### Charts
Cards with a title (`headline-md`), reference period (`body-xs`), a legend row (10px swatches, `body-xs`), a unit tag (`Rupiah (Rp)`, `code-mono`, right) and range controls (`Rentang tanggal`, `Reset`) top-right. Plot: left-aligned tabular axis labels in `text-muted` (never `text-dim`), gridlines `#F1F5F9`, zero line `#CBD5E1`, bars 16px wide with 2px radius, lines 2.5px with 3.5px end markers, series in token order. Hover tooltips use popover cards with the period, each series value and its swatch. Donut: 12px ring, centred label stack (`Saldo neto`, value `headline-md`, unit), legend rows with swatch, name and amount; negative balances are listed separately under a `Saldo negatif · di luar donat` label in `status-danger-text`. Under every chart: `Lihat tabel ⌄` (expandable detail) and a one-line `body-xs` explanation or highlight (`Puncak laba: Des 2026 (93,5 M)`). Colour is never the only differentiator: also use markers or labels.

### Variance and financial semantics
Variance colour expresses **favourable or unfavourable**, not the numeric sign. Over budget on an expense is danger; under budget is success; revenue reverses this. Do not colour balance-sheet or ledger lines by sign alone. Zero is always neutral.

## Implementation (Tailwind)

Every token maps 1:1 to the companion `tailwind.config.js`; use the token class, never a raw palette class or arbitrary value.

- **Colours**: `bg-{token}`, `text-{token}`, `border-{token}` (`bg-primary`, `text-text-muted`, `border-border-subtle`, `bg-status-success-subtle`). Opacity modifiers work (`border-status-success/20`).
- **Typography**: pair family and size utilities of the same token (`font-label-md text-label-md`). Add `tabular-nums slashed-zero` to every number. Icon sizes use `text-icon-*` (see Iconography); never `text-[18px]` or any other arbitrary size.
- **Page body**: `<body class="h-full bg-canvas-bg font-body-base text-text-primary antialiased">`. Do not use `bg-[#F8FAFC]`, `text-slate-800` or `bg-white`; use `bg-canvas-bg`, `text-text-primary` and `bg-card-bg`.
- **Radius**: `rounded` 6px, `rounded-lg` 8px, `rounded-xl` 12px, `rounded-full`. **Spacing**: `p-space-base`, `gap-space-sm`, `gap-gutter`, `p-margin`.
- **Elevation**: `shadow-card`, `shadow-card-hover`, `shadow-popover`, `shadow-overlay`, `shadow-shell`. **Layers**: `z-header`, `z-sidebar`, `z-drawer`, `z-modal`, `z-toast`, `z-tooltip`.
- **Sizes**: control heights `h-control-xs` (28), `h-control-sm` (32), `h-control` (36), `h-control-lg` (40); table `h-table-head`, `h-row`, `h-row-compact`, `h-row-2line`; shell `h-header`, `w-sidebar`, `w-sidebar-collapsed`; panels `w-drawer`, `w-drawer-wide`, `w-queue`, `w-role-list`, `w-kanban-col`, `w-dialog`, `w-toast`, `w-menu`.
- **Motion**: `duration-fast` 150ms, `duration-base` 200ms, `duration-slow` 300ms with `ease-standard`.

Shared `<head>` for every page (all pages must load the same fonts and plugins, otherwise inputs and body text render differently from page to page):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@600;700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script src="tailwind.config.js"></script>
```

Reference recipes:

| Element | Classes |
|---|---|
| Primary button | `h-control px-space-md rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-hover active:bg-primary-pressed transition-colors duration-fast` |
| Secondary button | `h-control px-space-md rounded-lg bg-card-bg text-text-primary border border-border-subtle font-label-md text-label-md hover:bg-surface-container-low` |
| Input | `h-control px-space-md rounded-lg bg-card-bg border border-border-input font-body-sm text-body-sm text-text-primary placeholder:text-text-dim focus:border-secondary focus:ring-2 focus:ring-focus-ring` |
| Card | `bg-card-bg border border-border-subtle rounded-xl shadow-card p-space-base` |
| Table header cell | `h-table-head px-space-base bg-surface-container-low text-text-secondary font-label-caps text-label-caps uppercase` |
| Status badge (success) | `inline-flex h-5 px-2.5 rounded-full border border-status-success-border bg-status-success-subtle text-status-success-text font-label-micro text-label-micro uppercase` |
| Amount cell | `text-right font-code-mono text-body-sm tabular-nums slashed-zero` |

## Pattern coverage

All 33 patterns in `Kurva_Pattern.csv`. **Unified** = existed in the source pages with conflicting rules, now one rule. **Specified** = visible in source pages but previously undocumented. **New** = not in the source pages or in DESIGN.md; specified here in the Forest Modern direction from the pattern name and module context and to be validated against the live screen.

| # | Pattern | Modules | Section | Status |
|---|---|---|---|---|
| 1 | Table | 13 modules | Tables | Unified |
| 2 | Summary Cards | 11 modules | Cards | Unified |
| 3 | Search | 10 modules | Search | Unified |
| 4 | Filter | 8 modules | Filter | Unified |
| 5 | Edit Drawer | 7 modules | Edit drawer | Specified |
| 6 | Tabs | 6 modules | Tabs and segmented control | Unified |
| 7 | Primary CTA | 5 modules | Buttons and CTAs | Unified |
| 8 | Expand/Collapse | Laporan, Kas & Bank | Expand / collapse | Specified |
| 9 | App Cards | Integrasi | Cards | New |
| 10 | Approval Queue | Persetujuan | Approval queue | New |
| 11 | Blank Canvas | Ruang Kerja | Launchers and workspaces | New |
| 12 | CTA | Integrasi | Buttons and CTAs | New |
| 13 | Charts | Dasbor | Charts | Unified |
| 14 | Configuration | Kustomisasi | Configuration | New |
| 15 | Detail Drawer | Kontak | Detail drawer | Specified |
| 16 | Expandable Detail | Dasbor | Expandable detail | Specified |
| 17 | Form | Profil Perusahaan | Forms and fields | New |
| 18 | Information Cards | Impor Data | Cards | New |
| 19 | KPI Cards | Dasbor | Cards | Unified |
| 20 | Launcher | Integrasi | Launchers and workspaces | New |
| 21 | Multi-view Workspace | Ruang Kerja | Launchers and workspaces | New |
| 22 | Navigation Cards | Laporan | Cards | Specified |
| 23 | Page Launcher | Ruang Kerja | Launchers and workspaces | New |
| 24 | Print Preview | Jurnal | Print preview | New |
| 25 | Review Form | Persetujuan | Review form | New |
| 26 | Review/Confirmation | Dokumen AI | Review / confirmation | New |
| 27 | Role Configuration | Administrasi | Role configuration | New |
| 28 | Row Actions | Kontak | Row actions | Specified |
| 29 | Save CTA | Profil Perusahaan | Save CTA | New |
| 30 | Service/Feature Cards | Kustomisasi | Cards | New |
| 31 | Upload | Dokumen AI | Upload | New |
| 32 | Upload Forms | Impor Data | Upload forms and wizard | New |
| 33 | User List | Administrasi | User list | New |

## Do's and Don'ts

**Do**
- Use `primary #1E4B3D` for every primary action and hover it to `#16382E`; one primary per view.
- Use `-text` status colours for any status text on a subtle background.
- Right-align and tabularise all numbers; keep currency, negative and date formats exactly as above.
- Give every card a 1px `border-subtle` border and the card shadow, including dashboard cards.
- Use the same row-action, drawer, filter-bar and pagination patterns in every module.
- Keep UI copy in Indonesian, sentence case.

**Don't**
- Don't introduce a second action green (`#006c49`, `#059669` buttons) or a third dark-green button background (`#013427`, `#132E25`).
- Don't use `text-dim` for captions, values, zero amounts or footnotes on light surfaces.
- Don't use `text-muted` on tinted surfaces (`surface-container-low`, `surface-container`); use `text-secondary`.
- Don't put white text on `secondary #059669`, and don't use status base colours (`status-success`, `status-danger`) as text; use the `-text` variants.
- Don't colour zero values or colour by numeric sign alone.
- Don't use raw palette colours, arbitrary hex or arbitrary font sizes (`text-[11px]`) when a token exists.
- Don't use browser `alert()` for feedback; use toasts and confirm dialogs.
- Don't hide row actions behind hover; don't stack more than two visible row actions.
- Don't put global search in the top bar; keep search in the module toolbar.
- Don't use more than one hero KPI or one CTA banner per row or page.