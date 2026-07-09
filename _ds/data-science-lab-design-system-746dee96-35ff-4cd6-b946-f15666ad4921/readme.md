# Data Science Lab (DSL) Design System

**Data Science Lab (데이터 사이언스 랩)** is Yonsei University's data science student society (연세대학교 데이터 사이언스 학회), covering deep learning, machine learning, AI, and data analysis. The brand pursues a refined color base and clean, minimal color combinations and UI design.

## Sources provided
- `uploads/logo-01.png` (originally `로고-01.png`) — the DS cloud mark, 2250×1417 transparent PNG. Primary blue #4060A8 ("D"), mist blue #D8E0F0 ("S"), with a left-to-right gradient baseline.
- `uploads/Group 6.png` — horizontal lockup: cloud mark + "연세대학교 데이터 사이언스 학회 / DATA SCIENCE LAB" wordmark, 195×35 transparent PNG (low-res; request a higher-res export).
- No codebase, Figma, decks, or font files were provided. Components below are an authored standard set, not recreations.

## CONTENT FUNDAMENTALS
- **Bilingual**: Korean is the primary voice (학회 소개, 모집 공고, 세션 안내); English appears for technical terms (Deep Learning, ML, EDA, Kaggle) and the brand name, always as "Data Science Lab" or "DSL".
- **Tone**: 학술적이면서 친근한 — academic but approachable. Formal polite endings (합니다/입니다) for official copy; concise noun-ending phrases (모집 안내, 프로젝트 발표) for labels and headings.
- **Casing**: English display text may be set in uppercase with wide tracking (DATA SCIENCE LAB); sentence case elsewhere. Never title-case Korean.
- **Person**: The society speaks as "저희" / "DSL은"; addresses readers as "여러분".
- **No emoji** in official copy. Numbers and dates set in mono where tabular (일정표, 통계).
- Examples: "DSL 12기 신입 학회원을 모집합니다", "딥러닝 세션 · 매주 화요일 19:00", "프로젝트: 서울시 따릉이 수요 예측".

## VISUAL FOUNDATIONS
- **Color**: One hue, many tints. Primary `--dsl-blue-600 #4060A8`, mist `--dsl-blue-100 #D8E0F0`, full 50–900 blue ramp + cool grays. White surfaces dominate; blue is for actions, links, accents. Status colors are muted and used sparingly.
- **Gradient**: the only sanctioned gradient is the brand fade `--gradient-brand` (blue-600 → blue-100, 90deg), used as thin rules/underlines echoing the logo baseline — never as large backgrounds.
- **Type**: display = **Google Sans Flex** (Google Fonts, Latin-only — Korean display text falls back to IBM Plex Sans KR) via `--font-display`; body/UI = IBM Plex Sans KR; IBM Plex Mono for code/data/tabular numerals. Display Latin tracked −0.02em; uppercase labels tracked +0.08em. Weights 400/500/600/700.
- **Spacing**: 4px base scale (`--space-1`…`--space-20`). Generous whitespace; minimal density.
- **Backgrounds**: flat white or `--dsl-gray-50`; brand-tint `--dsl-blue-50` for highlighted sections. No textures, patterns, or imagery-heavy backgrounds.
- **Cards**: white, 1px `--border-default`, `--radius-lg` (14px), `--shadow-sm`. Elevation increases shadow, never border weight.
- **Borders**: 1px hairlines, cool gray. No colored left-border accent cards.
- **Shadows**: blue-tinted rgba(28,44,80), very light. No inner shadows.
- **Radii**: 6/10/14/20px + pill. Buttons `--radius-md`, cards `--radius-lg`, tags pill.
- **Animation**: quick and quiet — 120–320ms, `--ease-out`; fades and small translates only. No bounces.
- **Hover**: darker fill (blue-600→700) for solid controls; `--dsl-gray-100` wash for ghost/quiet controls. **Press**: darker still (blue-800); no shrink transforms.
- **Focus**: 3px soft blue ring `--focus-ring`.
- **Transparency/blur**: none, except overlay scrims rgba(28,44,80,.4) behind dialogs.
- **Imagery**: cool-toned, clean photography if any; prefer whitespace over decoration. No hand-drawn illustration language exists.

## ICONOGRAPHY
- No icon set was provided. **Substitute: [Lucide](https://lucide.dev) via CDN** — 2px-ish rounded stroke matches the logo's thick rounded line. Use `stroke-width: 2`, sized 16/20/24px, colored `currentColor`.
- Logos in `assets/`: `dsl-mark.png` (cloud mark), `dsl-lockup-horizontal.png` (full lockup, low-res). Never redraw the mark; place the PNG. Where no logo fits, set "DATA SCIENCE LAB" in caps with `--tracking-caps`.
- No emoji, no unicode-glyph icons.

## Fonts
No brand font files were provided. Loaded from Google Fonts in `tokens/typography.css`: **Google Sans Flex** (display, Latin-only), **IBM Plex Sans KR** (body/UI, Korean+Latin), and **IBM Plex Mono**.

## Index
- `styles.css` — global entry; imports `tokens/colors.css`, `tokens/typography.css`, `tokens/layout.css`, `tokens/base.css`
- `assets/` — `dsl-mark.png`, `dsl-lockup-horizontal.png`
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, shadow, brand)
- `components/core/` — Button, IconButton, Badge, Tag, Card, Input, Select, Checkbox, Radio, Switch, Tabs, Dialog, Toast, Tooltip (authored standard set; see "Intentional additions" note above — no source inventory existed)
- `SKILL.md` — agent skill entry point
- No UI kits or slide templates yet — no product surfaces or decks were provided.
