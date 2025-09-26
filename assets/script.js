const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if(btn){
  btn.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}