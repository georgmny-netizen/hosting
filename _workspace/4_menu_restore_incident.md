# Menu Restore Incident: Background Transparency Regression

Date: 2026-05-15

Project folder:

```text
C:\tmp\CANONICAL chatgpt\hosting2
```

## Task

Remove non-working header menu buttons without breaking the transparent block backgrounds:

- `CRITICAL MINERALS`
- `JAPAN HIGH-TECH`
- `TAIWAN FOUNDRY`
- `CHINA RESOURCE`
- `APAC RISK`

The site background includes the fixed `99.9999%` watermark. Many content blocks must remain transparent or semi-transparent so this watermark remains visible through them.

## What Went Wrong

The menu was restored too broadly from:

```text
C:\tmp\CANONICAL chatgpt\hosting_backup_bad background
```

Instead of transferring only the menu-related changes, a larger project state was pulled in. That backup contained unrelated CSS changes. Some of those CSS changes affected page blocks, cards, panels, and section backgrounds.

As a result, blocks that were supposed to stay transparent received denser backgrounds, and the `99.9999%` watermark stopped showing through them correctly.

The cause was not the menu removal itself. The cause was broad restoration from a backup that contained unrelated style changes.

## Correct Lesson

Do not restore whole files or whole folders from a backup when the task is narrow.

For menu work, transfer only the exact menu-related fragments.

Do not touch block backgrounds, global card styles, or section styles while fixing header navigation.

## Correct Procedure

### 1. Create a control backup first

```powershell
Copy-Item -LiteralPath "C:\tmp\CANONICAL chatgpt\hosting2" -Destination "C:\tmp\CANONICAL chatgpt\hosting2_transparent_OK_before_menu" -Recurse -Force
```

### 2. Remove the obsolete static header nav

Edit:

```text
C:\tmp\CANONICAL chatgpt\hosting2\sections\02_header.html
```

Remove the old block:

```html
<nav class="site-nav yyk-hard-primary-tabs">...</nav>
```

Replace it with:

```html
<!-- Obsolete regional directive nav removed from the visible header. -->
```

### 3. Remove only the JavaScript menu injectors

Edit:

```text
C:\tmp\CANONICAL chatgpt\hosting2\sections\06_scripts.html
```

Remove only these functions and their direct calls:

```js
ensureCriticalMineralsNav
ensureJapanNav
ensureTaiwanNav
ensureChinaNav
```

Do not remove the directive data objects:

```js
window.YYK_D21
window.YYK_D22
window.YYK_D23
window.YYK_D24
```

Those objects contain content/data for the site and are not the cause of the bad menu buttons.

### 4. Replace the old static language menu with a slot

Edit:

```text
C:\tmp\CANONICAL chatgpt\hosting2\sections\02_header.html
```

Replace:

```html
<nav aria-label="Regional language navigation" class="yyk-terminal-lang" id="yyk-i18n-nav">...</nav>
```

with:

```html
<div id="yyk-lang-slot"></div>
```

### 5. Move the working i18n panel into the slot

Edit:

```text
C:\tmp\CANONICAL chatgpt\hosting2\js\i18n.js
```

Change the panel style from fixed positioning to relative positioning:

```js
'position: relative',
'z-index: 100',
```

Replace:

```js
document.body.appendChild(panel);
```

with:

```js
var slot = document.getElementById('yyk-lang-slot');
var header = document.querySelector('.yyk-terminal-header');
if (slot) {
  slot.appendChild(panel);
} else if (header) {
  header.appendChild(panel);
} else {
  document.body.appendChild(panel);
}
```

### 6. Add only header layout CSS

Edit:

```text
C:\tmp\CANONICAL chatgpt\hosting2\css\overrides.css
```

Add only header-specific layout rules:

```css
/* Header menu layout only. No block/background rules here. */
header .yyk-terminal-header {
  display: grid !important;
  grid-template-columns: minmax(0, auto) 1fr !important;
  grid-template-areas:
    "brand lang"
    "command command" !important;
  gap: 6px 18px !important;
  align-items: center !important;
}

header .yyk-terminal-brand {
  grid-area: brand !important;
  justify-self: start !important;
}

header .yyk-terminal-command {
  grid-area: command !important;
  width: 100% !important;
  justify-content: flex-start !important;
}

header #yyk-lang-slot {
  grid-area: lang !important;
  justify-self: end !important;
  display: inline-flex !important;
  align-items: center !important;
}

@media (max-width: 760px) {
  header .yyk-terminal-header {
    grid-template-columns: 1fr !important;
    grid-template-areas:
      "brand"
      "lang"
      "command" !important;
    gap: 8px !important;
  }

  header #yyk-lang-slot {
    justify-self: start !important;
  }
}
```

## Build Command

After edits, rebuild:

```powershell
cd "C:\tmp\CANONICAL chatgpt\hosting2"
node build.js
```

## Verification Commands

Old static nav should be absent:

```powershell
Select-String -Path index.html,sections\02_header.html -SimpleMatch '<nav class="site-nav'
```

The command should print nothing.

Old JS injectors should be absent:

```powershell
rg -n -F "ensureCriticalMineralsNav" index.html sections\06_scripts.html
rg -n -F "ensureJapanNav" index.html sections\06_scripts.html
rg -n -F "ensureTaiwanNav" index.html sections\06_scripts.html
rg -n -F "ensureChinaNav" index.html sections\06_scripts.html
```

Each command should print nothing.

The language slot should exist:

```powershell
Select-String -Path index.html,sections\02_header.html,js\i18n.js -SimpleMatch "yyk-lang-slot","slot.appendChild(panel)","position: relative"
```

## Do Not Touch For This Task

Do not edit background or opacity rules for:

```css
section
.panel
.dense-card
.card
.passport
.table-panel
#yykFinalArchitecture
#infrastructure-control
#yyk-hybrid-canonical-intelligence
[class$="-shell"]
[class$="-engine"]
```

Do not add menu fixes using:

```css
background: ...
opacity: ...
```

Menu work must not change block transparency.

## Known Good Backups

Before staged menu work:

```text
C:\tmp\CANONICAL chatgpt\hosting2_transparent_OK_before_menu
```

After staged menu work:

```text
C:\tmp\CANONICAL chatgpt\hosting2_menu_staged_OK_20260515_231755
```

## Final Working Result

The correct fix was completed by changing the menu in small, isolated stages:

1. Removed static obsolete menu HTML.
2. Removed JS menu injectors.
3. Moved i18n into `#yyk-lang-slot`.
4. Added header-only CSS.
5. Rebuilt with `node build.js`.

The block backgrounds stayed transparent.
