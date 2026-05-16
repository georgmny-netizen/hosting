# YYK Engine Modal Audit — CANONICAL vs Hosting Site

## 1. Модальные окна (Engine Modals) — Все 16 совпадают

| Engine ID | CSS Class | CANONICAL | Наш сайт | Тип |
|---|---|---|---|---|
| `dataRoomStressEngine` | `.yyk-data-room-engine` | ✅ | ✅ | Audit evidence, defense |
| `vdrEngine` | `.yyk-vdr-engine` | ✅ | ✅ | NDA/KYC access, VDR index |
| `supplyChainEngine` | `.yyk-supply-engine` | ✅ | ✅ | Bonded-zone, custody, trade finance |
| `yykLegalEngine` | `.yyk-legal-engine` | ✅ | ✅ | Liability, RMA, EUC |
| `tdsFoundryEngine` | `.yyk-tds-engine` | ✅ | ✅ | Impurity matrix, U/Th, SPC |
| `pricingEngine` | `.yyk-pricing-engine` | ✅ | ✅ | Index pricing, market insights |
| `technicalPartnershipEngine` | `.yyk-partnership-engine` | ✅ | ✅ | Trace profile, samples, joint lab |
| `supplierApprovalEngine` | `.yyk-approval-engine` | ✅ | ✅ | Approval simulation gate |
| `bcpEngine` | `.yyk-bcp-engine` | ✅ | ✅ | BCP & antifragility protocol |
| `redTeamAuditEngine` | `.red-team-engine` | ✅ | ✅ | Red team audit |
| `complianceEngine` | `.compliance-engine` | ✅ | ✅ | Compliance overlays |
| `productEngine` | `.product-engine` | ✅ | ✅ | Product/testing detail |
| `contactEngine` | `.contact-engine` | ✅ | ✅ | Contact form |
| `deal-execution-engine` | — | ✅ | ✅ | Deal execution |
| `rfqRiskEngine` | — | ✅ | ✅ | RFQ risk engine |
| `riskEngineContext` | — | ✅ | ✅ | Risk context |

## 2. Другие модальные элементы

| Element | CANONICAL | Наш сайт |
|---|---|---|
| `yykLegalShieldModal` | ✅ | ✅ |
| `vaultModal` | ✅ | ✅ |
| `sogoDrawer` | ✅ | ✅ |

## 3. Кнопки-триггеры

### Статические (в HTML)
| Кнопка | `data-open-engine` | CANONICAL | Наш сайт |
|---|---|---|---|
| Open Evidence | `data` | ✅ | ✅ |
| Legal Gate | `legal` | ✅ | ✅ |
| Route Gate | `supply` | ✅ | ✅ |
| Foundry Gate | `tds` | ✅ | ✅ |
| APAC Legal Desk | `legal` | ❌ | ✅ (доп.) |

### Динамические (генерируются JS через `render()`)
Procurement mode: 7 кнопок (data, vdr, supply, legal, pricing, tds, partnership)
Engineering mode: 4 кнопки (tds, partnership, pricing, data)
Compliance mode: 4 кнопки (vdr, legal, supply, data)

**Итого: 18 кнопок в CANONICAL, ~21 в нашем сайте**

### Другие триггеры

| Тип | CANONICAL | Наш сайт | Дельта |
|---|---|---|---|
| `data-open-sogo` | 6 | 3 | -3 |
| `data-open-compliance` | 9 | 8 | -1 |
| `openVault()` | 3 | 1 | -2 |
| `selectMaterial()` | 7 | 7 | = |
| Close buttons | 10 | 10 | = |

## 4. Router MAP

### CANONICAL (7 ключей)
```javascript
var MAP={
  data:'dataRoomStressEngine',
  vdr:'vdrEngine',
  supply:'supplyChainEngine',
  legal:'yykLegalEngine',
  tds:'tdsFoundryEngine',
  pricing:'pricingEngine',
  partnership:'technicalPartnershipEngine'
};
```

### Наш сайт (11 ключей — расширен)
```javascript
var MAP={
  data:'dataRoomStressEngine',
  vdr:'vdrEngine',
  supply:'supplyChainEngine',
  legal:'yykLegalEngine',
  tds:'tdsFoundryEngine',
  pricing:'pricingEngine',
  partnership:'technicalPartnershipEngine',
  redteam:'redTeamAuditEngine',     // добавлено
  bcp:'bcpEngine',                   // добавлено
  approval:'supplierApprovalEngine', // добавлено
  exec:'vdrEngine'                   // добавлено
};
```

## 5. MODES конфигурация — идентична в обоих версиях

```
procurement: 7 items (data, vdr, supply, legal, pricing, tds, partnership)
engineering: 4 items (tds, partnership, pricing, data)
compliance:  4 items (vdr, legal, supply, data)
```

## 6. Restoration Log (May 2026)

**1. Event Delegation Restoration (JS Engine Scripts):**
The original audit found that internal module buttons (e.g., `vdrRunQualification`) were not bound properly in our hosting site because the inline `onclick` handlers were missing or out of scope. We restored the interactive functionality for:
- `yyk-vdr-engine-script.js`: Added document click listeners for VDR tabs, Qualification run, and Report download.
- `yyk-supplier-approval-engine-script.js`: Added document click listeners for Scorecard download, select all, reset, and dynamic re-computation on checkbox clicks.
- `yyk-pricing-engine-script.js`: Implemented the missing `loadDemo` function and bound it, along with tabs and the Memo download button.
- `yyk-bcp-engine-script.js`: Added binding for the BCP One-Pager download button.
- `main.js` (Cookie Banner): Added null checks for `#openSettingsTop` to prevent crashes, restoring full functionality to cookie management buttons.

**2. Scroll Jump Fix:**
Removed aggressive `window.scrollTo(0,0)` and `window.scrollTo(0, window._yykScrollPos)` from `yyk-deep-audit-single-router.js`. Since the modals use `position: fixed` with z-index overrides, manual scroll resetting is unnecessary and caused visually jarring UI jumps on open/close.

**3. UTF-8 Corrupted Encoding Fix:**
A systemic parsing error corrupted specific UTF-8 characters across `05_modal-engines.html` and `06_scripts.html` (e.g., the `×` character became `횞`, em-dashes `—` became `??`, arrows `→` became `??`). 
A Node.js script was run to universally correct the formatting, safely restoring over 100 character instances to HTML entities (e.g., `&times;`, `&rarr;`, `&quot;`) and rebuilding the minified production bundle.
