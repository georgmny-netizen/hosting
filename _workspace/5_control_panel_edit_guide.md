# Инструкция по редактированию Tier-1 Control Panel

Дата: 2026-05-16

Папка проекта:

```text
C:\tmp\hosting
```

## Что такое Tier-1 Control Panel

Тёмная панель под Executive Decision Layer с:

- Заголовком «TIER-1 CONTROL PANEL / Procurement Workspace»
- Кнопками режимов: Procurement / Engineering / Compliance
- Текстом контекста (описание текущего режима)
- Кнопками действий (Executive Overview, Virtual Data Room, Legal Engine, и т.д.)

HTML-файл: `sections/03_control-panel.html`, строки 54–67.  
CSS-файл: `css/overrides.css`, секция 6 (строки ~240–381).  
JS-файл: `sections/06_scripts.html`, скрипт `yyk-v70-terminal-core-unified`.

---

## Структура HTML

```
#yykAuditControlPanel (div, role=navigation)
└── .yyk-audit-wrap
    ├── .yyk-audit-top
    │   ├── div (заголовок)
    │   │   ├── .yyk-audit-kicker    → «Tier-1 Control Panel»
    │   │   └── .yyk-audit-title     → «Procurement Workspace»
    │   └── .yyk-audit-modes (tablist)
    │       ├── button.yyk-mode-btn  → Procurement
    │       ├── button.yyk-mode-btn  → Engineering
    │       └── button.yyk-mode-btn  → Compliance
    ├── .yyk-audit-context           → Описание режима
    └── #yykAuditControlActions      → Кнопки действий (заполняются JS)
```

### Позиция в DOM (03_control-panel.html)

Текущий правильный порядок блоков в файле:

```
1. #yykFinalArchitecture        ← Архитектурная карта (строки 3-40)
2. #yykExecutiveDecisionLayer   ← Deal cockpit (строки 41-52)
3. #yykAuditControlPanel        ← НАША ПАНЕЛЬ (строки 54-67)
4. #yykAuditModeWorkspace       ← Рабочее пространство (строки 69-77)
```

---

## Где редактировать CSS

**Только файл:** `css/overrides.css`

**Никогда не трогать:** `css/style.css`, `css/legacy-blocks.css`

### Почему нужна высокая специфичность

Монолитный CSS (`legacy-blocks.css`) содержит правила с `!important` которые:
- Ставят `display:none` на `.yyk-audit-top`
- Ставят `display:grid` и `display:contents` на `.yyk-audit-wrap` и `.yyk-audit-top`
- Задают `min-height: 96px`, `min-height: 116px` на `.yyk-audit-wrap`
- Задают `flex: 1 1 360px` на `.yyk-control-actions` (раздувает пустое место)
- Задают `gap: 16px`, `gap: 24px` между элементами

Наши overrides побеждают за счёт:
1. `overrides.css` загружается **последним** (в `07_tail.html`)
2. Префикс `html body` повышает специфичность
3. Каждое свойство обязательно с `!important`

### Шаблон CSS-правила

```css
/* ❌ НЕ РАБОТАЕТ — проигрывает legacy */
#yykAuditControlPanel .yyk-audit-wrap {
  gap: 4px;
}

/* ❌ НЕ РАБОТАЕТ — !important есть, но специфичность равна legacy */
#yykAuditControlPanel .yyk-audit-wrap {
  gap: 4px !important;
}

/* ✅ РАБОТАЕТ — html body + !important побеждает всё */
html body #yykAuditControlPanel .yyk-audit-wrap {
  gap: 4px !important;
}
```

---

## Текущие CSS-overrides (что они делают)

### Контейнер панели

```css
html body #yykAuditControlPanel {
  height: auto !important;
  min-height: 0 !important;
  max-height: none !important;
  overflow: visible !important;
}
```

Зачем: legacy ставит фиксированные min-height, которые раздувают панель.

### Обёртка .yyk-audit-wrap

```css
html body #yykAuditControlPanel .yyk-audit-wrap {
  display: flex !important;           /* Заменяет display:grid из legacy */
  flex-direction: column !important;  /* Вертикальный стек вместо grid */
  justify-content: flex-start !important;
  align-items: stretch !important;
  gap: 4px !important;               /* Убирает gap:16px/24px из legacy */
  grid-template-columns: unset !important;  /* Отключает grid */
  grid-template-areas: unset !important;    /* Отключает grid */
  width: min(1500px, 90vw) !important;
  padding: 8px 0 !important;
  min-height: 0 !important;          /* Убирает min-height:96/116px */
  height: auto !important;
}
```

### Все прямые дети обёртки

```css
html body #yykAuditControlPanel .yyk-audit-wrap > * {
  flex: 0 0 auto !important;   /* Не растягиваться по вертикали */
  height: auto !important;
  min-height: 0 !important;
}
```

Зачем: без этого flex-children растягиваются на всю доступную высоту, создавая пустые области между строками по 200-350px.

### Блок заголовка .yyk-audit-top

```css
html body #yykAuditControlPanel .yyk-audit-top {
  display: flex !important;     /* Legacy ставит display:none или display:contents */
  flex-direction: column !important;
  gap: 4px !important;
  visibility: visible !important;
  opacity: 1 !important;
}
```

### Кнопки режимов .yyk-audit-modes

```css
html body #yykAuditControlPanel .yyk-audit-modes {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;  /* 3 равные колонки */
  gap: 0 !important;
  width: 100% !important;
}
```

---

## Типичные задачи

### Изменить отступы между строками

Редактировать `gap` в `.yyk-audit-wrap`:

```css
html body #yykAuditControlPanel .yyk-audit-wrap {
  gap: 8px !important;   /* Было 4px, увеличить до 8px */
}
```

### Изменить текст заголовка

Редактировать `sections/03_control-panel.html`, строка 57:

```html
<div class="yyk-audit-kicker" data-i18n="auto.t25">Tier-1 Control Panel</div>
<div class="yyk-audit-title" data-i18n="auto.t26">Procurement Workspace</div>
```

Для перевода — обновить соответствующие ключи (`auto.t25`, `auto.t26`) в `lang/*.json`.

### Добавить/удалить кнопку режима

Редактировать `sections/03_control-panel.html`, строки 59-61:

```html
<button class="yyk-mode-btn active" data-yyk-mode="procurement">Procurement</button>
<button class="yyk-mode-btn" data-yyk-mode="engineering">Engineering</button>
<button class="yyk-mode-btn" data-yyk-mode="compliance">Compliance</button>
```

После добавления/удаления кнопки — обновить CSS grid:

```css
html body #yykAuditControlPanel .yyk-audit-modes {
  grid-template-columns: repeat(4, 1fr) !important;  /* Было 3, стало 4 */
}
```

### Изменить кнопки действий (Executive Overview, VDR, Legal, и т.д.)

Кнопки действий создаются **JavaScript-ом**, а не в HTML.  
Файл: `sections/06_scripts.html`, скрипт `yyk-v70-terminal-core-unified`.

Карта движков (MAP) определяет какие кнопки открывают какие модальные окна:

```javascript
var MAP = {
  data: 'dataRoomStressEngine',
  vdr: 'vdrEngine',
  supply: 'supplyChainEngine',
  legal: 'yykLegalEngine',
  tds: 'tdsFoundryEngine',
  pricing: 'pricingEngine',
  partnership: 'technicalPartnershipEngine'
};
```

Для добавления нового движка — добавить запись в MAP и создать кнопку в функции `setupRail()`.

### Скрыть/показать контекстное описание

```css
/* Скрыть */
html body #yykAuditControlPanel .yyk-audit-context {
  display: none !important;
}

/* Показать (по умолчанию показано) */
html body #yykAuditControlPanel .yyk-audit-context {
  display: block !important;
}
```

---

## Корневые причины прошлых багов

### Баг: Огромные пустые пространства между строками (350px+)

**Причина:** Legacy CSS задаёт `flex: 1 1 360px` на дочерних элементах `.yyk-audit-wrap`, из-за чего они растягиваются на всю доступную высоту.

**Решение:** `flex: 0 0 auto !important` на всех дочерних элементах через селектор `.yyk-audit-wrap > *`.

### Баг: Заголовок «Procurement Workspace» не виден

**Причина:** Legacy CSS ставит `display:none!important` на `.yyk-audit-top` или `display:contents` (что убирает его из flex/grid потока).

**Решение:** `display: flex !important` + `visibility: visible !important` на `.yyk-audit-top` с префиксом `html body`.

### Баг: Кнопки режимов (Procurement/Engineering/Compliance) растянуты или скрыты

**Причина:** Legacy CSS ставит `display:flex` + `flex-wrap:wrap` + `gap:8px` + `min-width:330px`, превращая кнопки в горизонтальный ряд переменной ширины.

**Решение:** `display: grid !important` + `grid-template-columns: repeat(3, 1fr) !important` для ровных трёх колонок.

---

## Порядок действий при редактировании

### 1. Создать бэкап

```powershell
Copy-Item -LiteralPath "C:\tmp\hosting" -Destination "C:\tmp\hosting_backup_before_panel_edit" -Recurse -Force
```

### 2. Внести изменения

- HTML → `sections/03_control-panel.html`
- CSS → `css/overrides.css` (секция 6, с html body префиксом)
- JS (кнопки действий) → `sections/06_scripts.html`, скрипт `yyk-v70-terminal-core-unified`

### 3. Пересобрать

```powershell
cd C:\tmp\hosting
node build.js
```

### 4. Проверить

```powershell
# Панель на месте
Select-String -Path index.html -SimpleMatch "yykAuditControlPanel"

# Кнопки режимов на месте
Select-String -Path index.html -SimpleMatch "yyk-mode-btn"

# Overrides загружается последним
Select-String -Path index.html -SimpleMatch 'href="css/overrides.css"'
```

---

## Не трогать при правке панели

Не редактировать эти элементы — они не относятся к панели:

```
css/style.css                    ← Монолитные стили, запрещено
css/legacy-blocks.css            ← Технический долг, запрещено
#yykFinalArchitecture            ← Архитектурная карта (отдельный блок)
#yykExecutiveDecisionLayer       ← Executive Decision (отдельный блок)
.yyk-arch-grid                   ← Restricted: строго 2 потомка
section backgrounds / opacity    ← Прозрачность блоков не трогать
```

---

## Эталон для сверки

```text
C:\tmp\CANONICAL\CANONICAL.html
```

При сомнениях в правильности макета — сверять с CANONICAL файлом.
