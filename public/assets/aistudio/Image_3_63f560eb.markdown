---
name: NadStore Boutique Architecture
colors:
  surface: '#fff8f8'
  surface-dim: '#e7d6d8'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f2'
  surface-container: '#fbeaec'
  surface-container-high: '#f5e4e6'
  surface-container-highest: '#f0dee1'
  on-surface: '#22191b'
  on-surface-variant: '#534345'
  inverse-surface: '#382e30'
  inverse-on-surface: '#feecef'
  outline: '#857275'
  outline-variant: '#d8c1c3'
  surface-tint: '#904857'
  primary: '#400919'
  on-primary: '#ffffff'
  primary-container: '#5c1f2e'
  on-primary-container: '#d98594'
  inverse-primary: '#ffb2bf'
  secondary: '#655e49'
  on-secondary: '#ffffff'
  secondary-container: '#ece2c7'
  on-secondary-container: '#6b644f'
  tertiary: '#37131c'
  on-tertiary: '#ffffff'
  tertiary-container: '#502831'
  on-tertiary-container: '#c68e98'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#ffb2bf'
  on-primary-fixed: '#3c0516'
  on-primary-fixed-variant: '#733140'
  secondary-fixed: '#ece2c7'
  secondary-fixed-dim: '#cfc6ac'
  on-secondary-fixed: '#201b0b'
  on-secondary-fixed-variant: '#4c4733'
  tertiary-fixed: '#ffd9df'
  tertiary-fixed-dim: '#f4b6c1'
  on-tertiary-fixed: '#331019'
  on-tertiary-fixed-variant: '#663a43'
  background: '#fff8f8'
  on-background: '#22191b'
  surface-variant: '#f0dee1'
typography:
  display:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 2.75rem
    fontWeight: '600'
    lineHeight: '1.3'
  display-mobile:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.35'
  headline-lg-mobile:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.35'
  headline-md:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: '1.4'
  headline-sm:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.8'
  body-md:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.75'
  body-sm:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.4'
  label-sm:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.4'
  caption:
    fontFamily: Inter, Vazirmatn, system-ui, sans-serif
    fontSize: 0.6875rem
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system defines an understated, high-end commerce interface tailored for Persian boutique curations transitioning from social platforms into a dedicated digital storefront. The aesthetic embodies quiet confidence, restraint, and spaciousness. Instead of aggressive commercial tropes, high-density badge noise, and urgency indicators, the experience prioritizes warm negative space, editorial proportion, and unhurried browsing.

The design movement combines Japanese and Nordic minimalism with traditional Iranian warmth:
- **Atmosphere**: Serene, tactile, and curated. Tactile warmth is introduced via balanced off-white stone backdrops and cream highlight tiers, avoiding harsh clinical whites.
- **RTL-First Structure**: All spatial balances, optical clearances, and directional sweeps naturally flow from right to left (`dir="rtl"`), ensuring native typography and navigation feel effortless.
- **Controlled Focal Points**: Deep burgundy is preserved exclusively for key focal interactions (primary call-to-action buttons, the brand emblem, and vital selections), creating crisp visual gravity without visual fatigue.
- **Content-Forward**: Layouts serve as quiet stages for high-craft boutique product photography, utilizing delicate linework and gentle transitions.

## Colors

The palette relies on deliberate chromatic discipline: warm mineral neutrals form the vast majority of the canvas, while deep botanical burgundy directs deliberate action.

### Roles & Semantic Mapping
- **Primary (`#5C1F2E` - Deep Burgundy)**: Strict focal anchor. Reserved strictly for primary action buttons (Checkout, Add to Bag), brand insignia, and authoritative interactive states. Never applied to bulk decorative elements or large backgrounds.
- **Secondary (`#EDE3C8` - Cream)**: Warm container tint. Utilized for thematic section backdrops, subtle tag containers, voucher panels, and contextual highlights.
- **Tertiary (`#B07A84` - Dusty Rose)**: Soft contextual accent for discreet micro-indicators, delicate promotional accents, or subtle visual categories.
- **Supplementary Accents**:
  - Sage (`#8A957B`): Order completion, in-stock notices, sustainability indicators.
  - Navy (`#1F2A44`): Order tracking, informational badges, formal disclosures.
- **Canvas & Neutrals**:
  - `page-background` (`#FAF6EC`): Warm stone off-white for the root page canvas.
  - `surface-elevated` (`#FFFFFF`): Crisp white applied to floating product tiles, drawers, and modal surfaces.
  - `text-primary` (`#231A1C`): Charcoal-plum near-black for high legibility, avoiding harsh neutral zero-black.
  - `text-muted` (`#6E6264`): Subdued warm slate for metadata, sku labels, subtitles, and timestamps.
  - `border-subtle` (`#DDD2B8`): Warm muted sand for ultra-refined structural separators and cards.
  - `glass-surface` (`rgba(255, 255, 255, 0.70)`): Frosted boundary for sticky navigation and curated feature banners.

## Typography

Typography centers on optical calm, structural clarity, and bi-directional balance. Latin alphanumeric instances (prices, SKU codes, Western names) leverage Inter, paired seamlessly with Vazirmatn for Persian typography.

### Principles & Configuration
- **Weights**: Restricted strictly to two functional weights: `400` (Regular) and `600` (Semi-Bold). This limitation strips out visual tension, establishing a crisp hierarchy between editorial headlines and reading copy.
- **RTL Metric Accommodations**: Persian body typography inherently demands generous vertical clearance. Line heights are tuned to `1.75`â€“`1.8` for continuous text to prevent descender collisions and ensure effortless readability across mobile viewports.
- **Numerals & Pricing**: Persian numerals (`Û° Û± Û² Û³ Û´ Ûµ Û¶ Û· Û¸ Û¹`) are standard throughout checkout, pricing, and sizing tags to maintain cultural immersion, rendered with equal font weight alongside currency denotations (ØªÙˆÙ…Ø§Ù†).

## Layout & Spacing

The layout embraces expansive editorial rhythm, preventing clutter and honoring each individual boutique collection.

### Layout Mechanics
- **Grid Structure**: 
  - **Mobile (< 768px)**: 4-column layout with `1rem` outer canvas margins and `1.25rem` gutters. Product showcases collapse into clean 2-column or full-width carousel arrangements.
  - **Tablet (768px â€“ 1024px)**: 8-column layout with `2rem` outer margins.
  - **Desktop (L
JŠŽˆL‹XÛÛ[[ˆ^[Ý]Ø\Y]HX^[][HÚYÙˆLŽ
™[X
K™\Ý[™ÈÙ[˜[HÛˆHØ\›HÑQ‘PØØ[˜\ÈÚ]Ë\™[XX\™Ú[œÈ[™œ™[XÝ]\œË‚‹H
Š”•›ÝÈ[˜[ZXÜÊŠŽˆ]\˜[ÜÚ][Ûš[™È[\È\™H[™\YˆXY[YÛ›Y[
šYÚ
KÙXÛÛ™\žHY]Y]H
Y
Kˆš[X\žHš\ÝX[ÝY\ÈØ\ØØYHœ›ÛH\\‹\šYÚÝÛˆÈÝÙ\‹[Y‚‹H
Š”ÜXÚ[™ÈØY[˜ÙJŠŽˆZXÜ›ÈÜXÚ[™È
ÜXÙK^Ø›ÝYÚÜXÙK[Y
H[™\ÈÛÛ\Û™[[\š[ÜˆY[™È[™]K]ËY\ØÜš\[ÛˆØ\ËˆXXÜ›ÈÜXÚ[™È
ÜXÙK[ØÈÜXÙK^
H›ÝšY\Èœ™X][™È›ÛÛH™]ÙY[ˆÝ\˜]YY]ÜšX[ÙYÛY[Ë‚‚ˆÈÈ[]˜][Ûˆ	ˆ\‚•š\ÝX[Y\˜\˜ÚH\È]Z[™Y›ÝYÚXÝ[H^Y\š[™ËÛ˜[ÝXÚÚ[™Ë[™][ÜÜ\šXÈ[YY™\Ú[Ûˆ˜]\ˆ[ˆX]žH\ÚXØ[›ÜË‚‚ˆÈÈÈ\˜Ú]XÝ\˜[\ÂŒKˆ
Š”›ÛÝØ[˜\È

JŠŽˆÑQ‘PØ›Ý[™][Û‹‚Œ‹ˆ
Š•Ø\›H[œÙ]^Y\ˆ
Y
JŠŽˆÑQLÐÎÜ™X[HÛ™H›ÜˆØ]YÛÜžH˜^\Ëš[\ˆ[˜XÚÚ[™ÜË[™[››Ý[˜Ù[Y[šX˜›ÛœÈÚ]™\›ÈÚYÝË‚ŒËˆ
ŠØ\™Y\ˆ
™
JŠŽˆÜš\ÜÚ]HÝ\™˜XÙ\È
Ñ‘‘‘‘‘˜
Hœ˜[YYžHHÝXH›Ü™\ˆ
ÑŽ\ÛÛY
KXØÛÛ\[šYYžH[ˆ][ÜÜ\šXÈ\™Ý[™K][YÛÙY™\Ú[ÛŽ‚ˆH›Þ\ÚYÝÎˆÌ™Ø˜JL‹ÌK‹ŒŠNØˆH\ÈÝXH\™Ý[™H[™ÙHš[™È[]˜]Y[[Y[ÈÈHš[X\žHœ˜[™ÛÛÜ‹]›ÚY[™ÈÙ[™\šXÈÛÛÜ™^H›ÜÚYÝÜË‚ˆ
Š‘œ›ÜÝY\]ZYÛ\ÜÊŠŽˆ™\Ù\™YÝšXÝH›ÜˆH\œÚ\Ý[ÝXÚÞHXY\‹Û˜]šYØ][Ûˆ˜\ˆ[™ØØØ\Ú[Û˜[›YÜÚ\\›ÈØ\™Î‚ˆH˜XÚÙÜ›Ý[™ˆ™Ø˜JMKMKMKÌ
XˆH˜XÚÙ›Üš[\Žˆ›\ŠMœ
XˆH›Ü™\Žˆ\ÛÛY™Ø˜JMKMKMKŒ
XˆHÚYÝÎˆ™Ø˜JL‹ÌK‹Œ
XKˆ
Š“Ý™\›^HY\ˆ
[Ù[ËÛYK[Ý™\ˆÚÜ[™È˜YÊJŠŽˆ\™HÑ‘‘‘‘‘˜Ý\™˜XÙHYYžHŒ™Ø˜JL‹ÌK‹ŒLŠX˜XÚÙYžH[ˆ][ÜÜ\šXÈ[[Z[™ÈØÜš[H
™Ø˜JÍK‹ŽŒÍJX
K‚‚ˆÈÈÚ\\Â‚•H[\™˜XÙH[Xœ˜XÙ\ÈÜ™Ø[šXÈÝ\˜]\™K^™\ÜÚ[™ÈØ\›][™\›ØXÚX›H^\žH›ÝYÚÛÙÛÛÝ\œÎ‚‚‹H
Š‘ÛØ˜[Ý[™\™
ŠŽˆ›Ý[™Y™\ÜÎˆØ˜[œÛ]\È[È[\Ú\Y›Ü›H˜XÝÜœÈ›ÜˆÝË\›Ùš[HÛÛ\Û™[È[™ÛÙÝ\˜]\™HXÜ›ÜÜÈ\™ÙHØ\™È
ŒÈŽ
K‚‹H
Š’[\˜XÝ]™HÛÛ›ÛÈ
]ÛœË[œ]Ëš[\œËÚ\ÊJŠŽˆ[ÛÛÝ\ˆ
›Ü™\‹\˜Y]\ÎˆNNN\
K[]™\š[™ÈHXÝ[KÛÛY›ÜX›HÝXÚ\™Ù]‚‹H
ŠØ\™È	ˆÛÛ[›ØÚÜÊŠŽˆÝ]\ˆ›Ü™\œÈÙ]È›Ý[™YLÞ
Ûˆ\ÚÝÜŒÛˆ[Øš[HØÜ™Y[œÊK‚‹H
Š’[\›˜[[XYÙ\žJŠŽˆ›ÙXÝ[XYÙH[˜ÛÜÝ\™\È[œÚYHØ\™È][^™H™\ÝY˜YZH
NÈŒ
K[œÝ\š[™ÈÛÛœÚ\Ý[š\ÝX[\›[ÛžHÚ]H[˜ÛÜÚ[™ÈÛÛZ[™\‹‚‚ˆÈÈÛÛ\Û™[Â‚ˆÈÈÈ]ÛœÂ‹H
Š”š[X\žH]ÛŠŠŽˆÛÛYÍPÌQŒ‘XÚ]\™HÑ‘‘‘‘‘˜\ÙÜ˜\Kˆ[Ú\H
›Ý[™YY[
KZYÚ
[Øš[Nˆ
KY[™ÈˆÝXHÝ™\ˆÝ]HY\[œÈÛ™HšXHš[\ŽˆœšYÚ™\ÜÊŽLŠXˆ›ØÝ\Èš[™ÎˆœÛÛYÍPÌQŒ‘XÚ]œÙ™œÙ][ˆÑQ‘PØ‚‹H
Š”ÙXÛÛ™\žH]ÛŠŠŽˆÜš\ÜÑ‘‘‘‘‘˜Ý\™˜XÙHÜˆ˜[œÜ\™[˜XÚÙÜ›Ý[™Ú]H\›Ü™\ˆ[ˆÑŽX™[[ˆÌŒÌPLPØˆ[Ú\KˆÝ™\ˆÚYÈ˜XÚÙÜ›Ý[™ÈÑQLÐÎ
Ü™X[JK‚‹H
Š•\X\žHÈÚÜÝ]ÛŠŠŽˆ›Ü™\›\ÜËX™[[ˆÍPÌQŒ‘XÜˆÌŒÌPLPØY[™ÈLœˆÝXH[˜XÚÙÜ›Ý[™[ˆ™Ø˜JL‹ÌK‹ŒJXÛˆÝ™\‹‚‚ˆÈÈÈÚ\È	ˆš[\ˆYÜÂ‹H[\Ú\Y
›Ý[™YY[
KZYÚÍœÜš^›Û[Y[™ÈMœ‚‹H
Š‘Y˜][Ý]JŠŽˆÝ\™˜XÙHÑ‘‘‘‘‘˜›Ü™\ˆ\ÛÛYÑŽ^Í‘MŒ‚‹H
Š”Ù[XÝYÝ]JŠŽˆÝ\™˜XÙHÑQLÐÎ›Ü™\ˆ\ÛÛYÍPÌQŒ‘X^ÍPÌQŒ‘X›ÛÙZYÚŒ‚‚ˆÈÈÈØ\™È
›ÙXÝÚÝØØ\Ù\ÊB‹H˜XÚÙÜ›Ý[™Ñ‘‘‘‘‘˜›Ü™\ˆ\ÛÛYÑŽ›Ü™\ˆ˜Y]\È
›Ý[™YLÞ
K‚‹HÚYÝÎˆÌ™Ø˜JL‹ÌK‹ŒŠX‚‹H[XYÙHÛÛZ[™\ŽˆH™\XØ[›Ý]\]YH˜][Ë™\ÝY›Ü™\ˆ˜Y]\ÈŒÝ™\™›ÝÈY[‹‚‹HY[™Îˆ[\›˜[ÛÛZ[™\ˆÜXÚ[™ÈMœˆ]H[YÛ™YšYÚ\œÚX[ˆšXÙH[™Ø\XÝ[Ûˆ[YÛ™YY‚‚ˆÈÈÈ›Ü›H[œ]Â‹H˜XÚÙÜ›Ý[™Ñ‘‘‘‘‘˜\ÛÛY›Ü™\ˆ[ˆÑŽ[\Ú\Y
›Ý[™YY[
KZYÚÜš^›Û[Y[™ÈŒ‚‹H\ÙÜ˜\H[YÛ™YšYÚ
^X[YÛŽˆšYÚ
KXÙZÛ\ˆ[ˆÍ‘MŒ‚‹H›ØÝ\ÈÝ]Nˆ›Ü™\ˆ˜[œÚ][ÛœÈÈÍPÌQŒ‘X›ÞÚYÝÈÜ™Ø˜JL‹ÌK‹ŒJX‚‚ˆÈÈÈÙ[XÝ[ÛˆÛÛ›ÛÈ
ÚXÚØ›Þ	ˆ˜Y[ÊB‹H
Š”˜Y[ÊŠŽˆÚ\˜Ý[\‹ŒX[Y]\‹›Ü™\ˆK\ÛÛYÑŽˆÚXÚÙYÝ]Nˆ›Ü™\ˆÍPÌQŒ‘XÚ][ˆ[›™\ˆÍPÌQŒ‘XÛÛYÝ
L
K‚‹H
ŠÚXÚØ›Þ
ŠŽˆ›Ý[™Y[Ø
œ
KŒÚYÚZYÚˆÚXÚÙYÝ]NˆÛÛYÍPÌQŒ‘XÚ]H\™HÚ]HZ[š[X[\ÝÚXÚÈXÛÛ‹‚‚ˆÈÈÈ˜]šYØ][Ûˆ˜\‚‹H\œÚ\Ý[Ü˜\ˆ›Ø][™ÈÚ]Mœ[œÙ]œ›ÛHHØÜ™Y[ˆ›Ý[™\žK‚‹Hœ›ÜÝYÛ\ÜÈš[š\Úˆ™Ë]Ú]KÍÌ˜XÚÙ›ÜX›\‹[Y›Ü™\ˆ\ÛÛY™Ø˜JMKMKMKJX‚‹H[ÜˆŽ›Ý[™YÚ\KÛÛZ[š[™ÈšYÚX[YÛ™Yœ˜[™X\šËÙ[\™Y˜]šYØ][Û˜[[šÜË[™YX[YÛ™YZ[š[X[[™H˜\ÚÙ][™ÙX\˜ÚXÛÛœË‚‚ˆÈÈÈ›Ý]\]YH[œÝYÜ˜[H[YÜ˜][Ûˆ˜^B‹HYXØ]Y˜]Ù\‹ØØ\™YÚYÚ[™ÈHÚÜ	ÜÈÛØÚX[ÜšYÚ[‹ˆÝ][™Y[ˆÑŽXØÙ[YÚ]HÛÙÜ™X[H˜XÚÙÜ›Ý[™
ÑQLÐÎ
KXØÛÛ\[šYYžH™Yš[™YK\Ý›ÚÙHXÛÛœË