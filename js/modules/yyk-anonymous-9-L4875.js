// YONGYEOKYO Directive 25 APAC Interdependency JS START
(function(){
  window.YYK_D25 = {
    version: "Directive 25 Canonical / APAC Interdependency 2024-2025",
    dashboard: "AUDIT / Regional Risk & Strategy",
    matrix: {
      China: { identity: "Resource Sword", materials: ["Rare earths", "Gallium", "Graphite"], function: "MOFCOM license navigation and regulated route control" },
      SouthKorea: { identity: "Battery & Memory Hub", materials: ["Lithium", "Nickel", "DRAM/NAND"], function: "Busan redistribution and battery / memory demand mapping" },
      Japan: { identity: "Precision Foundation", materials: ["JOGMEC", "Equipment", "Purity"], function: "Yokohama / Niigata high-purity stockpiling route" },
      Taiwan: { identity: "Silicon Shield", materials: ["<3nm Foundry", "Lithography"], function: "Foundry-grade PVD target continuity" }
    },
    crossBorderComplianceLogic: "Our system acts as a buffer between China's export controls and the Silicon Shield's demand, providing a neutral, bonded transit and verification route.",
    regionalSynergyIndex: 92,
    gapCloser: {
      Kuantan: "Alternative Malaysia ECER feedstock origin outside Chinese licensing bottlenecks",
      Busan: "Regional redistribution bridge for APAC critical-mineral flows"
    },
    gates: ["Origin verification", "CoA / ISO 17025", "MOFCOM / METI / KOSTI review", "KYC", "Sanctions Screening"]
  };
  function ensureDirective25Nav(){
    var nav = document.querySelector('.site-nav');
    if(nav && !nav.querySelector('[data-d25-apac-link]')){
      var a=document.createElement('a');
      a.href='#directive25-apac-interdependency';
      a.textContent='APAC MATRIX'; a.setAttribute('data-i18n','auto.t2471');
      a.className='nav-link';
      a.setAttribute('data-d25-apac-link','true');
      nav.appendChild(a);
    }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensureDirective25Nav, {once:true});
  else ensureDirective25Nav();
})();
// YONGYEOKYO Directive 25 APAC Interdependency JS END
