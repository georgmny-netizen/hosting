# 🛠️ YONGYEOKYO — Инструкция по диагностике и восстановлению

> **Для:** AI-агент, выполняющий визуальную проверку или починку
> **Дата создания:** 2026-05-20
> **Критично:** Это LIVE PRODUCTION-САЙТ. Любая ошибка = поломка для клиента.

---

## 1. Общая информация о проекте

| Параметр | Значение |
|----------|----------|
| Репозиторий | `c:\tmp\hosting` |
| GitHub | `https://github.com/georgmny-netizen/hosting` |
| Живой сайт | `https://georgmny-netizen.github.io/hosting/` |
| Сборка | `node build.js` (обязательно после КАЖДОГО изменения) |
| Push | `git push origin main --force` (всегда force) |
| Бэкап до рефакторинга | `c:\tmp\hosting_backup_20260520` |

---

## 2. Структура проекта

```
c:\tmp\hosting\
├── build.js                           ← Сборщик (читай комментарии внутри!)
├── index.html                         ← СОБИРАЕТСЯ АВТОМАТИЧЕСКИ, не редактировать!
│
├── css/
│   ├── modules/
│   │   ├── 01_base.css … 15_*.css     ← Плоские CSS-модули
│   │   ├── 16/  (68 файлов)           ← CSS подмодули (density, specs, UI)
│   │   └── 17/  (86 файлов)           ← CSS подмодули (header fixes, patches)
│   ├── legacy-blocks.css              ← СОБИРАЕТСЯ из modules/ (не редактировать!)
│   ├── critical-layout.css            ← Критичные layout правила (загружается первым)
│   └── overrides.css                  ← Переопределения поверх legacy (загружается вторым)
│
├── sections/
│   ├── 01_head.html                   ← <head>: meta, JSON-LD, ранние скрипты
│   ├── 02_header.html                 ← Навигация + переключатель языка
│   ├── 03_control-panel.html          ← Панель управления (Procurement/Engineering/Compliance)
│   ├── content/  (11 файлов)          ← Контент страницы (hero → footer)
│   ├── modals/   (4 файла)            ← Модалки (vault, compliance, product, contact)
│   ├── 06_scripts.html                ← Загрузчик 98 внешних <script src="…">
│   └── 07_tail.html                   ← Закрывающие теги </body></html>
│
├── js/
│   ├── i18n.js                        ← Движок переключения языков
│   └── modules/
│       ├── *.js  (98 файлов)          ← JS модули (извлечены из inline)
│       └── head/ (12 файлов)          ← Ранние скрипты (kill-switches, guards)
│
├── lang/
│   ├── ko.js, ja.js, cn.js, tw.js    ← Языковые файлы (JSONP формат)
│
├── img/                               ← Изображения
├── _backup/                           ← Старые бэкапы и удалённые файлы
└── _workspace/                        ← Журнал разработки и документация
```

---

## 3. Как работает сборка

```bash
cd c:\tmp\hosting
node build.js
```

Скрипт выполняет 3 шага:
1. **CSS:** Конкатенирует `css/modules/` → `css/legacy-blocks.css` (в алфавитном порядке, подкаталоги рекурсивно)
2. **HTML:** Собирает `sections/` → `index.html` (в порядке, заданном в массиве SECTIONS)
3. **Валидация:** Проверяет синтаксис всех inline `<script>` блоков через `node -c`

> [!CAUTION]
> **НИКОГДА не редактируй `index.html` и `css/legacy-blocks.css` напрямую!**
> Эти файлы генерируются автоматически и перезаписываются при каждой сборке.

---

## 4. Правила внесения изменений

### CSS-правки
- **Куда:** `css/overrides.css` (для новых переопределений) или конкретный файл в `css/modules/`
- **Формат:** Используй максимально специфичные селекторы с `!important`:
  ```css
  html body #id .class { property: value !important; }
  ```
- **Порядок каскада:** `01_base.css` → … → `17/86_*.css` → `critical-layout.css` → `overrides.css`

### HTML-правки
- Редактируй файлы в `sections/`, `sections/content/` или `sections/modals/`
- После правки: `node build.js`

### JS-правки
- Редактируй файлы в `js/modules/` или `js/modules/head/`
- Не нужно пересобирать — браузер загружает JS по `src` напрямую
- Но если добавляешь новый скрипт — добавь `<script src="...">` в `sections/06_scripts.html`

---

## 5. Диагностика проблем

### 5.1 Страница не загружается / белый экран
```bash
# Проверь сборку
node build.js

# Проверь что все файлы на месте
node -e "var fs=require('fs'); var html=fs.readFileSync('index.html','utf8'); var re=/<script[^>]+src=\"([^\"]+)\"/gi; var m; while((m=re.exec(html))!==null){var s=m[1].split('?')[0]; if(!s.startsWith('http')&&!fs.existsSync(s)) console.log('MISSING: '+s)}"
```

### 5.2 CSS сломан / элементы съехали
```bash
# Пересобери CSS из модулей
node build.js

# Проверь что legacy-blocks.css собрался корректно
# (должен быть ~550 KB, ~12277 строк)
node -e "var fs=require('fs'); var s=fs.statSync('css/legacy-blocks.css'); console.log(Math.round(s.size/1024)+'KB', fs.readFileSync('css/legacy-blocks.css','utf8').split('\\n').length+'lines')"
```

### 5.3 JS не работает / ошибки в консоли
```bash
# Синтаксическая проверка конкретного модуля
node -c js/modules/ИМЯ-ФАЙЛА.js

# Проверка всех модулей разом
node -e "var fs=require('fs'),cp=require('child_process'); fs.readdirSync('js/modules').filter(f=>f.endsWith('.js')).forEach(f=>{try{cp.execSync('node -c js/modules/'+f,{stdio:'pipe'})}catch(e){console.log('ERROR: '+f)}})"
```

### 5.4 Язык не переключается
- Проверь что файлы `lang/*.js` существуют (ko.js, ja.js, cn.js, tw.js)
- Проверь что `js/i18n.js` загружается (строка с `src="js/i18n.js"` в `01_head.html`)
- Проверь консоль на ошибку `[i18n] Script load error`

### 5.5 Модалки не открываются / не закрываются
- Модуль закрытия: `js/modules/yyk-global-close-delegation.js`
- Compliance engine: `sections/modals/02_compliance-engine.html`
- Product engine: `sections/modals/03_product-engine.html`
- Contact engine: `sections/modals/04_contact-engine.html`

---

## 6. Процедуры восстановления

### 6.1 Откат к предыдущему коммиту (рекомендуемый способ)

```bash
cd c:\tmp\hosting

# Посмотреть историю
git log --oneline -15

# Откатиться к конкретному коммиту
git reset --hard <COMMIT_HASH>

# Пересобрать
node build.js

# Запушить
git push origin main --force
```

**Ключевые коммиты:**

| Коммит | Описание | Что содержит |
|--------|----------|-------------|
| `0e6b3fe` | Последний (journal update) | Полностью рефакторённый проект |
| `298c93e` | build.js документация | Комментарии добавлены |
| `48af60f` | Head JS extraction | 12 скриптов из head извлечены |
| `3386e0a` | CSS 16+17 sub-split | CSS разбит на 154 подмодуля |
| `20a2497` | Lang dedup | Удалены .json дубли |
| `9e80501` | Phase 2 JS extraction | 98 inline скриптов извлечены |
| `32b8a27` | Old monolith HTML removed | Монолиты перемещены в _backup |
| `6048551` | Phase 1+3 complete | CSS + HTML модуляризация |

### 6.2 Полный откат к состоянию до рефакторинга

```bash
# ВНИМАНИЕ: это полный откат ко всему старому коду!
cd c:\tmp
Remove-Item -Recurse -Force hosting
Copy-Item -Recurse hosting_backup_20260520 hosting
cd hosting
node build.js
git add -A
git commit -m "revert: full rollback to pre-refactor state"
git push origin main --force
```

### 6.3 Восстановление отдельного файла из бэкапа

```bash
# Пример: вернуть старый монолит main-content
Copy-Item _backup\04_main-content.html sections\04_main-content.html

# Или из полного бэкапа
Copy-Item c:\tmp\hosting_backup_20260520\sections\04_main-content.html sections\04_main-content.html

# Пересобрать
node build.js
```

### 6.4 Восстановление из _backup/

Файлы в `_backup/`:
```
_backup/
├── 04_main-content.html       ← Оригинальный монолит контента
├── 05_modal-engines.html      ← Оригинальный монолит модалок
├── main.js                    ← Старый JS-монолит (395 KB)
├── full_audit.md              ← Журнал аудита
├── yyk-bcp-engine-script.js          ← Старые версии JS
├── yyk-deep-audit-single-router.js
├── yyk-pricing-engine-script.js
├── yyk-supplier-approval-engine-script.js
└── yyk-vdr-engine-script.js
```

---

## 7. Чеклист после любого изменения

```bash
# 1. Пересобрать
node build.js

# 2. Убедиться что 0 ошибок (должно быть "Build complete")

# 3. Проверить размеры (ориентиры)
#    index.html:          ~540 KB, ~5500 строк
#    legacy-blocks.css:   ~550 KB, ~12277 строк

# 4. Закоммитить
git add -A
git commit -m "описание изменения"

# 5. Запушить
git push origin main --force

# 6. Подождать ~30 секунд и проверить live-сайт
```

---

## 8. Контакты и ресурсы

- **Журнал разработки:** `_workspace/2_dev_journal.md` (22 записи)
- **Гайд по control panel:** `_workspace/5_control_panel_edit_guide.md`
- **Структурный гайд:** `_workspace/3_structural_guide.md`
- **Инцидент с меню:** `_workspace/4_menu_restore_incident.md`

---

> [!WARNING]
> **Золотые правила:**
> 1. После КАЖДОГО изменения — `node build.js` и проверка «Build complete»
> 2. Никогда не редактируй `index.html` и `legacy-blocks.css` напрямую
> 3. Всегда используй `git push origin main --force`
> 4. Не удаляй код, если не доказано, что он не используется
> 5. Не меняй визуальный результат — ни один пиксель не должен сдвинуться
