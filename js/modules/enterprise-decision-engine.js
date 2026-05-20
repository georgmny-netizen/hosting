(function(){

function q(sel){return document.querySelector(sel)}
function qa(sel){return Array.from(document.querySelectorAll(sel))}

function getVal(keys){
  for(let k of keys){
    let el=q(k)
    if(el && el.value) return el.value.toLowerCase()
  }
  return ""
}

function normMaterial(v){
  if(v.includes("cu")||v.includes("copper")) return "cu"
  if(v.includes("al")) return "al"
  if(v.includes("zn")||v.includes("zinc")) return "zn"
  if(v.includes("ree")||v.includes("rare")) return "ree"
  return "cu"
}

function normDest(v){
  if(v.includes("china")||v.includes("cn")) return "cn"
  if(v.includes("japan")||v.includes("jp")) return "jp"
  if(v.includes("taiwan")||v.includes("tw")) return "tw"
  return "kr"
}

function applyState(){

  let m = normMaterial(getVal(["#rfqMaterial","select[name*=material]","input[name*=material]"]))
  let d = normDest(getVal(["#rfqDestination","select[name*=destination]","input[name*=destination]"]))

  // compliance tab switch
  let map = {
    kr:"privacy",
    jp:"terms",
    cn:"legal-framework",
    tw:"legal-framework"
  }

  if(window.YYKActivateComplianceTab){
    window.YYKActivateComplianceTab(map[d])
  }

  // ESG context update
  let esg = document.querySelector(".esg-decision-context")
  if(esg){
    esg.textContent = m.toUpperCase()+" &ndash;"+d.toUpperCase()+" sourcing control active"
  }

  // Risk context
  let risk = document.querySelector(".risk-engine-context")
  if(risk){
    risk.textContent = "Risk profile: "+m+" / "+d
  }

}

document.addEventListener("change",applyState,true)
document.addEventListener("DOMContentLoaded",applyState)

})();
