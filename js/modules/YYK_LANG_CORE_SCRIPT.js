(function(){
 const map = {
   en:'en',
   ko:'ko',
   ja:'ja',
   tw:'tw',
   cn:'cn'
 };

 function setLang(region){
   region = region || 'en';
   const lang = map[region] || 'en';

   document.body.className = document.body.className
     .replace(/lang-\w+/g,'')
     .replace(/region-\w+/g,'');

   document.body.classList.add('lang-'+lang);
   document.body.classList.add('region-'+region);

   localStorage.setItem('yyk_lang', region);
 }

 document.addEventListener('DOMContentLoaded', function(){

   let saved = localStorage.getItem('yyk_lang') || 'en';
   setLang(saved);

   // Update active state on load
   document.querySelectorAll('.region-btn, .lang-btn, .yyk-terminal-lang-link, .i18n-link').forEach(b => {
     b.classList.remove('active');
     if(b.getAttribute('data-lang') === saved || b.textContent.toLowerCase().includes(saved)) {
       b.classList.add('active');
     }
   });

   document.querySelectorAll('.region-btn, .lang-btn, .yyk-terminal-lang-link, .i18n-link').forEach(btn=>{
     btn.addEventListener('click', function(e){
       if(btn.tagName.toLowerCase() === 'a') e.preventDefault();
       let txt = btn.textContent.toLowerCase();
       let dataLang = btn.getAttribute('data-lang');
       let targetLang = 'en';

       if(dataLang) {
         targetLang = dataLang;
       } else {
         if(txt.includes('kr')||txt.includes('한국')) targetLang = 'ko';
         else if(txt.includes('jp')||txt.includes('日本')) targetLang = 'ja';
         else if(txt.includes('tw')||txt.includes('tw')) targetLang = 'tw';
         else if(txt.includes('cn')||txt.includes('简')) targetLang = 'cn';
       }
       
       setLang(targetLang);
       
       document.querySelectorAll('.region-btn, .lang-btn, .yyk-terminal-lang-link, .i18n-link').forEach(b => b.classList.remove('active'));
       btn.classList.add('active');
       
       if (window.YYKi18n && typeof window.YYKi18n.setLanguage === 'function') {
           window.YYKi18n.setLanguage(targetLang);
       }
     });
   });

 });

})();
