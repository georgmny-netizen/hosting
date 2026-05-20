(function(){
  "use strict";
  var MATERIAL_DEFAULTS={
    "Copper Cu · CAS 7440-50-8 · KE-08896 · Up to 99.99999% (7N)":{purity:"Up to 99.99999% (7N)",form:"Powder",particle:"ingot / bar / ultrafine powder; PSD by RFQ"},
    "Aluminum Al · CAS 7429-90-5 · High-purity ingot route":{purity:"Up to 99.9999% (6N)",form:"Ingots",particle:""},
    "Zinc Zn · CAS 7440-66-6 · Up to 99.9995% (5N5)":{purity:"Up to 99.9995% (5N5)",form:"Powder",particle:"powder / formulations / coatings; PSD by RFQ"},
    "Rare Earth Materials · Metals / Oxides / Salts / Alloys · Custom grades":{purity:"Custom grades available",form:"Oxide / Salt",particle:""}
  };
  function byId(id){return document.getElementById(id)}
  function setValue(id,value){var el=byId(id);if(!el)return;if(el.tagName==="SELECT"){var exists=false;Array.prototype.forEach.call(el.options,function(o){if(o.value===value||o.textContent===value)exists=true});if(value&&!exists){var opt=document.createElement("option");opt.value=value;opt.textContent=value;el.appendChild(opt)}}el.value=value||"";el.dispatchEvent(new Event("input",{bubbles:true}));el.dispatchEvent(new Event("change",{bubbles:true}))}
  function closeProductPassport(){var p=byId("productEngine");if(p){p.classList.remove("active");p.setAttribute("aria-hidden","true")}}
  function openRfqEntry(){var d=byId("sogoDrawer");if(d){d.classList.add("active");d.setAttribute("aria-hidden","false");document.body.classList.remove("apex-modal-open");document.body.style.overflow="";document.documentElement.style.overflow="";return}var r=byId("rfq");if(r&&r.scrollIntoView)r.scrollIntoView({behavior:"smooth",block:"start"});try{location.hash="rfq"}catch(e){}}
  function route(material){if(!material)return false;var def=MATERIAL_DEFAULTS[material]||{};setValue("rfqMaterial",material);if(def.form!==undefined)setValue("rfqForm",def.form);if(def.purity!==undefined)setValue("rfqPurity",def.purity);if(def.particle!==undefined)setValue("rfqParticle",def.particle);if(typeof window.updateRFQ==="function"){try{window.updateRFQ()}catch(e){}}if(typeof window.renderRiskEngine==="function"){try{window.renderRiskEngine(null)}catch(e){}}closeProductPassport();openRfqEntry();return false}
  window.YYK_PRODUCT_PASSPORT_RFQ={add:route};
  window.selectMaterial=function(material){return route(material)};
  document.addEventListener("click",function(e){var b=e.target&&e.target.closest?e.target.closest("#productEngine [data-pp-add-rfq],#productEngine .product-actions button"):null;if(!b)return;var material=b.getAttribute("data-pp-add-rfq");if(!material){var panel=b.closest("[data-product-panel]");var key=panel?panel.getAttribute("data-product-panel"):"";var map={cu:"Copper Cu · CAS 7440-50-8 · KE-08896 · Up to 99.99999% (7N)",al:"Aluminum Al · CAS 7429-90-5 · High-purity ingot route",zn:"Zinc Zn · CAS 7440-66-6 · Up to 99.9995% (5N5)",ree:"Rare Earth Materials · Metals / Oxides / Salts / Alloys · Custom grades"};material=map[key]}if(material){e.preventDefault();e.stopPropagation();route(material)}},true);
})();
