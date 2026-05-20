document.addEventListener("DOMContentLoaded", function(){

function closeAll(){
document.querySelectorAll('.compliance-engine, .product-engine, .contact-engine').forEach(el=>{
el.classList.remove('active');
});
}

document.querySelectorAll('[data-open-compliance]').forEach(btn=>{
btn.addEventListener('click', ()=> {
closeAll();
document.querySelector('.compliance-engine').classList.add('active');
});
});

document.querySelectorAll('[data-open-contact]').forEach(btn=>{
btn.addEventListener('click', ()=> {
closeAll();
document.querySelector('.contact-engine').classList.add('active');
});
});

document.querySelectorAll('[data-open-product]').forEach(btn=>{
btn.addEventListener('click', ()=> {
closeAll();
document.querySelector('.product-engine').classList.add('active');
});
});

document.querySelectorAll('.compliance-close, .product-close, .contact-close').forEach(btn=>{
btn.addEventListener('click', closeAll);
});

});
