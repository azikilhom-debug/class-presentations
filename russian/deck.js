
let i=0;
const slides=[...document.querySelectorAll('.slide')];
const progress=document.querySelector('.progress');
const counter=document.querySelector('.counter');
function show(n){
  if(!slides.length) return;
  i=Math.max(0,Math.min(n,slides.length-1));
  slides.forEach((s,k)=>s.classList.toggle('active',k===i));
  if(progress) progress.style.width=((i+1)/slides.length*100)+'%';
  if(counter) counter.textContent=(i+1)+' / '+slides.length;
  window.scrollTo(0,0);
}
function next(){show(i+1)}
function prev(){show(i-1)}
document.addEventListener('keydown',e=>{
  if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();next()}
  if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();prev()}
  if(e.key==='Home')show(0); if(e.key==='End')show(slides.length-1);
});
let x0=null;document.addEventListener('touchstart',e=>x0=e.changedTouches[0].clientX,{passive:true});
document.addEventListener('touchend',e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>60)(dx<0?next():prev());x0=null},{passive:true});
document.querySelectorAll('[data-reveal]').forEach(btn=>btn.addEventListener('click',()=>{
  const el=btn.parentElement.querySelector('.hidden-answer'); if(el) el.classList.toggle('show');
}));
show(0);
