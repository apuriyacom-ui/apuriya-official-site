// Google Analytics 4
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-BPX14E5P3R');

(function loadGoogleTag(){
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-BPX14E5P3R';
  document.head.appendChild(s);
})();

document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.menu-btn'),n=document.querySelector('.mobile-nav');
  if(b&&n){
    b.addEventListener('click',()=>{
      const o=n.classList.toggle('open');
      b.setAttribute('aria-expanded',String(o));
    });
    n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      n.classList.remove('open');
      b.setAttribute('aria-expanded','false');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});