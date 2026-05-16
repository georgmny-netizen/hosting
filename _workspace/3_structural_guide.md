# 📐 Руководство по структуре YONGYEOKYO Terminal

**Версия:** 2.0  
**Дата:** 14 мая 2026  
**Автор:** Разработка + AI-ассистент  
**Статус:** Действующий документ

> [!IMPORTANT]
> **v2.0 — Крупное обновление.** Документ полностью переработан после архитектурной стабилизации (Phase 5–6). Монолитный `index.html` разделён на секции и собирается через `build.js`. JavaScript унифицирован. Все изменения помечены тегом `[v2.0]`.

---

## Оглавление

1. [Файловая архитектура](#1-файловая-архитектура)
2. [Система сборки](#2-система-сборки)
3. [DOM-иерархия (сверху вниз)](#3-dom-иерархия-сверху-вниз)
4. [CSS: порядок загрузки и специфичность](#4-css-порядок-загрузки-и-специфичность)
5. [JavaScript-архитектура](#5-javascript-архитектура)
6. [Запретные зоны (Restricted Containers)](#6-запретные-зоны-restricted-containers)
7. [Протокол отладки](#7-протокол-отладки-структура--css)
8. [Хронология структурных изменений](#8-хронология-структурных-изменений)
9. [Золотые правила](#9-золотые-правила)

---

## 1. Файловая архитектура

### `[v2.0]` Текущая структура (после Phase 6)

```
c:\tmp\hosting\
├── index.html                  ← Собранный файл (~11 000 строк). Генерируется build.js
├── build.js                    ← [v2.0] Сборщик: sections/ → index.html
├── sections/                   ← [v2.0] Секционные исходники
│   ├── 01_head.html            ← <head>, inline <style>, PWC card (710 строк)
│   ├── 02_header.html          ← <header>: навигация, языковое меню (56 строк)
│   ├── 03_control-panel.html   ← Tier-1 Control Panel + Architecture + Executive + Workspace (76 строк)
│   ├── 04_main-content.html    ← Основной контент: продукты, логистика, APAC (3304 строк)
│   ├── 05_modal-engines.html   ← Модальные движки: VDR, Legal, Supply, TDS, Pricing (1457 строк)
│   ├── 06_scripts.html         ← Все <script> блоки, включая unified core v7.0 (5408 строк)
│   ├── 06_scripts.backup.html  ← Бэкап до рефакторинга JS (Phase 5)
│   └── 07_tail.html            ← </body></html> (6 строк)
├── css/
│   ├── style.css               ← Монолитные стили (НЕ ТРОГАТЬ)
│   ├── legacy-blocks.css       ← [v2.0] Вынесенные inline-стили. Технический долг
│   └── overrides.css           ← Наш override-слой (все CSS-правки — ТОЛЬКО здесь)
├── js/
│   └── i18n.js                 ← Движок локализации + purgeGhosts()
├── lang/
│   ├── en.json / ko.json / ja.json / tw.json / cn.json
└── _workspace/                 ← Документация, журналы
    ├── 1_restoration_report.md
    ├── 2_dev_journal.md
    └── 3_structural_guide.md   ← ВЫ ЗДЕСЬ
```

### Как было раньше (v1.0, до Phase 5)

```diff
- index.html                    ← Единый монолит (~21 400 строк). Редактировался напрямую
- css/style.css                 ← Единственный CSS-файл
+ index.html                    ← Генерируется build.js из sections/
+ sections/                     ← 7 секционных файлов
+ css/legacy-blocks.css         ← Вынесенные inline <style> блоки
```

### Принцип: Секции + Сборка `[v2.0]`

| Слой | Файл | Кто редактирует | Правило |
|------|-------|-----------------| --------|
| Сборка | `build.js` | ⛔ Не трогать | Только конкатенация, без трансформаций |
| Секции | `sections/*.html` | ✅ Мы | Редактировать секции, затем `node build.js` |
| Стили ядра | `css/style.css` | ⛔ Никто | Все визуальные правки — через `overrides.css` |
| Legacy CSS | `css/legacy-blocks.css` | ⚠️ Осторожно | Технический долг. Нейтрализован overrides.css |
| Наш слой | `css/overrides.css` | ✅ Мы | Единственное место для CSS-правок |
| Логика | `js/i18n.js` | ✅ Мы | Локализация + сборщик мусора |
| Переводы | `lang/*.json` | ✅ Мы | Словари для 5 языков |

> [!WARNING]
> **Никогда не редактируйте `index.html` напрямую.** Он перезаписывается при каждом `node build.js`. Все изменения делаются в `sections/` и затем собираются.

---

## 2. Система сборки

### `[v2.0]` Добавлена в Phase 5

```bash
# Собрать index.html из секций
cd c:\tmp\hosting
node build.js
```

**Порядок сборки** (конкатенация в указанном порядке):

```
01_head.html → 02_header.html → 03_control-panel.html →
04_main-content.html → 05_modal-engines.html → 06_scripts.html → 07_tail.html
```

**Как было раньше:** `index.html` редактировался напрямую как единый монолит. Это приводило к конфликтам при работе нескольких скриптов, вставленных в разных местах файла.

---

## 3. DOM-иерархия (сверху вниз)

Структура организована по принципу **«discovery → action → decision»**:

### `[v2.0]` Текущая структура (после исправления 14 мая)

```
<body>
│
├── <header>                                    ← Level 01: Discovery
│   ├── .yyk-terminal-header                    ← Логотип + APAC часы
│   ├── .yyk-terminal-nav                       ← SUPPLY: / PRODUCT: / DEAL: / AUDIT:
│   └── .yyk-hard-primary-tabs                  ← CRITICAL MINERALS / JAPAN / TAIWAN / ...
│                                                  (02_header.html)
│
├── #yykAuditControlPanel                       ← Level 02: Action (Tier-1 Control Panel)
│   └── .yyk-audit-wrap
│       ├── .yyk-audit-top                      ← "Procurement Workspace" + Mode buttons
│       ├── .yyk-audit-context                  ← Описание текущего режима
│       └── #yykAuditControlActions             ← Кнопки действий (заполняются JS v7.0)
│                                                  (03_control-panel.html, строки 2-15)
│
├── <section #yykFinalArchitecture>             ← Архитектурная карта (SEO + UX)
│   └── .yyk-arch-wrap
│       ├── .yyk-arch-head                      ← Заголовок + badge
│       ├── .yyk-arch-grid ⚠️ RESTRICTED        ← Двухколоночный grid (СТРОГО 2 потомка)
│       │   ├── article.yyk-arch-card           ← UX spatial hierarchy
│       │   └── article.yyk-arch-card           ← Buyer journey logic
│       └── .yyk-arch-seo                       ← SEO-кластеры (4 ссылки)
│                                                  (03_control-panel.html, строки 17-55)
│
├── <section #yykExecutiveDecisionLayer>        ← Level 03: Decision
│   └── .yyk-exec-wrap
│       ├── .yyk-exec-head                      ← "Deal approval cockpit" + Status pill
│       └── .yyk-exec-grid                      ← Executive KPI + AI Recommendation + Kill Switch
│                                                  (03_control-panel.html, строки 56-67)
│
├── <section #yykAuditModeWorkspace>            ← Рабочее пространство
│   └── .yyk-work-wrap                          ← Заголовок + карточки режима (заполняются JS)
│                                                  (03_control-panel.html, строки 68-76)
│
├── <main #top>                                 ← Основной контент
│   ├── .hero                                   ← Hero-секция
│   ├── Продуктовые секции (Cu/Al/Zn/REE)
│   ├── Логистика + Directive 20
│   └── APAC Matrix + RSI                        (04_main-content.html)
│
├── Modal Engines                               ← Движки-панели (VDR, Legal, Supply...)
│                                                  (05_modal-engines.html)
│
├── <script> блоки                              ← Вся логика, включая unified core v7.0
│                                                  (06_scripts.html)
│
├── <link overrides.css>                        ← Загружается ПОСЛЕДНИМ
└── <script i18n.js>                            ← Инициализация локализации
</body>
```

### Как было раньше (до 14 мая)

```diff
  <header> ... </header>
-
- <section #yykFinalArchitecture>                ← Архитектурная карта шла ПЕРВОЙ
-   └── .yyk-arch-wrap
-       ├── .yyk-arch-grid
-       │   ├── article.yyk-arch-card
-       │   └── article.yyk-arch-card
-       ├── .yyk-relocated-audit                 ← ⚠️ Control Panel был ВЛОЖЕН сюда!
-       │   └── #yykAuditControlPanel            ← Ловушка третьего потомка
-       └── .yyk-arch-seo
-
- <section #yykExecutiveDecisionLayer>           ← Deal cockpit шёл СРАЗУ после архитектуры
-
- <section #yykAuditModeWorkspace>
+ #yykAuditControlPanel                          ← Теперь ПЕРЕД архитектурной картой
+
+ <section #yykFinalArchitecture>                ← Архитектурная карта
+   └── .yyk-arch-wrap
+       ├── .yyk-arch-grid (только 2 потомка!)
+       └── .yyk-arch-seo
+
+ <section #yykExecutiveDecisionLayer>           ← Deal cockpit на своём месте
+
+ <section #yykAuditModeWorkspace>
```

> [!CAUTION]
> **`#yykAuditControlPanel` должен быть САМОСТОЯТЕЛЬНЫМ блоком** между `</header>` и `<section #yykFinalArchitecture>`. Он НЕ ДОЛЖЕН быть вложен внутрь `.yyk-arch-wrap` или любого grid-контейнера. Это было причиной бага «ловушка третьего потомка» (§8.1).

---

## 4. CSS: порядок загрузки и специфичность

### Каскад загрузки (приоритет растёт сверху вниз)

```
1. <style> блоки в <head>                       ← Самый низкий приоритет
2. <link href="css/style.css">                   ← Монолитные стили
3. <link href="css/legacy-blocks.css">           ← [v2.0] Вынесенные inline-стили
4. <style id="yyk-v35-final-architecture-...">   ← Оставшиеся inline-стили
5. <link href="css/overrides.css">               ← НАШ слой — ВЫИГРЫВАЕТ
```

### Специфичность

Монолит и `legacy-blocks.css` активно используют `!important`. Наши overrides **обязаны** использовать `!important` + повышенную специфичность:

```css
/* ❌ НЕ РАБОТАЕТ */
.yyk-arch-card { border: 1px solid gold; }

/* ✅ РАБОТАЕТ — наш файл загружается позже + !important */
.yyk-arch-card { border: 1px solid gold !important; }

/* ✅ НАДЁЖНЕЕ — повышенная специфичность для борьбы с legacy-blocks */
html body .yyk-arch-card { border: 1px solid gold !important; }
```

### `[v2.0]` Ключевые overrides для стабильности

| Селектор | Что делает | Зачем |
|----------|-----------|-------|
| `html body #yykAuditControlPanel .yyk-audit-top` | `display: flex` | legacy-blocks L8210 ставит `display:none` |
| `html body #yykAuditControlPanel .yyk-audit-wrap` | `flex-direction: column` | Заменяет конфликтующий `display:grid` из legacy |
| `html body #yykAuditControlPanel .yyk-control-actions` | `flex: 0 0 auto` | legacy ставит `flex: 1 1 360px` → гигантский gap |
| `html body #yykAuditControlPanel .yyk-audit-modes` | `order: 2; flex: 0 0 auto` | Фиксирует кнопки режимов справа |

### Исключение: Footer

Системные индикаторы в футере (`#yykFooterSystemStatus .yyk-green`) **намеренно оставлены зелёными**.

---

## 5. JavaScript-архитектура

### `[v2.0]` Unified Core v7.0 (после Phase 5–6)

Файл `06_scripts.html` содержит единственный управляющий скрипт **`yyk-v70-terminal-core-unified`** (строка 5273), который заменил 9 конкурирующих скриптов.

**Функции unified core:**

| Функция | Назначение |
|---------|-----------|
| `closeAll()` | Закрывает все активные модальные движки |
| `openEngine(key)` | Открывает конкретный движок (VDR, Legal, Supply, TDS, Pricing, Partnership) |
| `setupRail()` | Собирает панель действий: создаёт кнопки Executive Overview и Exit, привязывает обработчики |
| `normalizeModes()` | Нормализует текст кнопок режимов (Procurement / Engineering / Compliance) |
| `computeDecision()` | Вычисляет Executive Decision (risk index, recommendation, kill switch) |

**Карта движков (MAP):**

```javascript
{data:'dataRoomStressEngine', vdr:'vdrEngine', supply:'supplyChainEngine',
 legal:'yykLegalEngine', tds:'tdsFoundryEngine', pricing:'pricingEngine',
 partnership:'technicalPartnershipEngine'}
```

### Как было раньше (до Phase 5)

```diff
- 9 отдельных <script> блоков (v2.5, v2.6, v2.9, v3.0, v3.1, v3.2, v5.1, v5.2, v6.0)
- Каждый использовал свой setTimeout для инициализации
- Гонка условий (race conditions): скрипты перезаписывали DOM друг друга
- Множественные конкурирующие MutationObserver-ы
+ Единый скрипт yyk-v70-terminal-core-unified
+ Одна точка инициализации: DOMContentLoaded → init()
+ Детерминированный порядок: normalizeModes → setupRail → computeDecision
```

> [!WARNING]
> **Все UI-правки в JS — только внутри блока `yyk-v70-terminal-core-unified`** в `06_scripts.html`. Запрещено добавлять новые `<script>` блоки для UI-фиксов — это вернёт race conditions.

**Бэкап:** `sections/06_scripts.backup.html` — полная копия до рефакторинга.

---

## 6. Запретные зоны (Restricted Containers)

Некоторые контейнеры имеют **фиксированное количество прямых потомков**. Лишние элементы ломают CSS Grid.

### ⚠️ `.yyk-arch-grid` — СТРОГО 2 потомка

```css
.yyk-arch-grid { display: grid; grid-template-columns: 1.05fr .95fr; }
```

| Потомок | Класс | Содержимое |
|---------|-------|------------|
| 1 | `article.yyk-arch-card` | UX spatial hierarchy (3 Level-карточки) |
| 2 | `article.yyk-arch-card` | Buyer journey logic (4 шага) |

**⚠️ Третий потомок = коллапс макета.** См. §8.1 для подробного разбора.

### ⚠️ `.yyk-arch-lanes` — СТРОГО 3 потомка

Level 01, Level 02, Level 03. Не добавлять 4-й.

### ⚠️ `.yyk-arch-seo` — СТРОГО 4 потомка

4 SEO-кластера. Сетка `repeat(4, minmax(0, 1fr))`.

### Как проверить

```javascript
document.querySelector('.yyk-arch-grid').children.length  // Должно быть 2
```

---

## 7. Протокол отладки: Структура → CSS

```
┌─────────────────────────────────────────────────┐
│  ШАГ 1: Проверь HTML-структуру                  │
│  • Открой DevTools → Elements                    │
│  • Посчитай прямых потомков контейнера            │
│  • Сверь с таблицей Restricted Containers (§6)   │
│  • Если лишний потомок → УДАЛИ / ПЕРЕНЕСИ        │
│                                                  │
│  ↓ Только если структура в порядке ↓             │
│                                                  │
│  ШАГ 2: Сверь с CANONICAL.html                   │
│  • Файл: c:\tmp\CANONICAL\CANONICAL.html         │
│  • Сравни порядок секций и вложенность            │
│                                                  │
│  ↓ Только если структура совпадает ↓             │
│                                                  │
│  ШАГ 3: Исправь CSS (только overrides.css)       │
│  • Используй html body + !important              │
│  • Проверь legacy-blocks.css на конфликты         │
│  • Проверь медиа-запросы                          │
│                                                  │
│  ШАГ 4: Пересобери и проверь                     │
│  • node build.js                                  │
│  • Визуальная проверка в браузере                 │
└─────────────────────────────────────────────────┘
```

**💡 Правило 80/20:** 80% визуальных багов — структурные дефекты HTML. Только 20% — CSS-проблемы.

---

## 8. Хронология структурных изменений

### 8.1 Ловушка третьего потомка (13 мая 2026)

**Симптом:** «UX spatial hierarchy» растянулся на всю ширину, «Buyer journey logic» сжался до ~270px.

**Ошибочная диагностика:** Предположили слабые пропорции CSS Grid → усилили до `1.25fr / .75fr` → **стало хуже**.

**Правильная диагностика:** В `.yyk-arch-grid` оказалось **3 потомка** вместо 2 — `#yykAuditControlPanel` был вложен внутрь как `.yyk-relocated-audit`:

```html
<!-- ❌ Было: Control Panel ВНУТРИ .yyk-arch-grid -->
<div class="yyk-arch-grid">
  <article class="yyk-arch-card">UX hierarchy</article>
  <article class="yyk-arch-card">Buyer journey</article>
  <div class="yyk-relocated-audit">Control Panel (1200px+)</div>  ← ЛИШНИЙ!
</div>
```

**Решение:** Вынесли `#yykAuditControlPanel` из grid-контейнера, поставили перед `#yykFinalArchitecture`.

**Урок:** Симптом (CSS-растягивание) ≠ Причина (лишний DOM-элемент). Всегда проверяй структуру ДО правки CSS.

### 8.2 Унификация JavaScript (14 мая 2026, Phase 5)

**Проблема:** 9 скриптов (v2.5–v6.0) конкурировали за инициализацию DOM через разные `setTimeout`. Race conditions приводили к прыгающим/исчезающим элементам.

**Решение:** Создан единый `yyk-v70-terminal-core-unified`. Удалены все 9 устаревших блоков. Бэкап: `06_scripts.backup.html`.

### 8.3 Перенос Control Panel из .yyk-relocated-audit (14 мая 2026, Phase 6)

**Проблема:** После рефакторинга `Procurement Workspace` визуально «сполз» внутрь архитектурной карты. `Deal approval cockpit` оказался слишком близко к workspace. Огромный вертикальный gap (~360px) между текстом и кнопками.

**Причина 1 (DOM):** `#yykAuditControlPanel` был обёрнут в `<div class="yyk-relocated-audit">` внутри `.yyk-arch-wrap`, а не стоял самостоятельно перед `#yykFinalArchitecture`.

**Причина 2 (CSS):** `legacy-blocks.css` содержал `flex: 1 1 360px !important` для `.yyk-control-actions`, что раздувало пустое пространство.

**Решение:**
1. Вырезали `#yykAuditControlPanel` из `yyk-relocated-audit` wrapper
2. Поставили его в начало `03_control-panel.html` — перед `#yykFinalArchitecture`
3. Добавили CSS override: `flex: 0 0 auto !important` для `.yyk-control-actions`

**Текущий правильный порядок:**
```
</header> → #yykAuditControlPanel → #yykFinalArchitecture → #yykExecutiveDecisionLayer → #yykAuditModeWorkspace
```

### 8.4 CSS-стабилизация flexbox layout (14 мая 2026, Phase 6)

**Проблема:** `legacy-blocks.css` содержит `display:grid` и `display:none` для элементов Control Panel, конфликтуя с нашим `flexbox` layout.

**Решение:** `overrides.css` содержит блок высокоспецифичных правил (`html body #yykAuditControlPanel ...`) которые нейтрализуют legacy-стили, обеспечивая стабильный flex-layout.

---

## 9. Золотые правила

### Для AI-ассистентов и разработчиков

1. **Структура первична.** При визуальном баге — сначала HTML (потомки, вложенность, порядок). Потом CSS.

2. **Не трогай `style.css`.** Все CSS-правки — исключительно в `overrides.css`.

3. **Не трогай `index.html` напрямую.** Редактируй `sections/`, затем `node build.js`.

4. **Считай потомков.** Перед инъекцией в DOM — проверь Restricted Containers (§6).

5. **Один скрипт.** Все UI-правки JS — только внутри `yyk-v70-terminal-core-unified`. Новые `<script>` блоки для UI запрещены.

6. **`!important` + `html body` обязательны.** Без них overrides проигрывают `legacy-blocks.css`.

7. **Сверяй с CANONICAL.** При сомнениях — `c:\tmp\CANONICAL\CANONICAL.html` = эталон порядка секций.

8. **Медиа-запросы.** Breakpoints: `≤ 1180px` (1 колонка), `≤ 760px` (мобильная раскладка).

9. **Всегда пересобирай.** После правки секций: `cd c:\tmp\hosting && node build.js`.

10. **Документируй.** Структурный баг → `2_dev_journal.md`. Новое правило → этот файл.

---

*Документ поддерживается в актуальном состоянии. Последнее обновление: 14 мая 2026, v2.0.*
