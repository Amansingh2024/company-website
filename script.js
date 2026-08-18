const modal = document.querySelector('#filmModal');
const openFilm = document.querySelector('#playFilm');
const closeFilm = document.querySelector('.close');
if (openFilm) openFilm.addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); });
if (closeFilm) closeFilm.addEventListener('click', () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); });
if (modal) modal.addEventListener('click', (event) => { if (event.target === modal) closeFilm.click(); });

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
if (dot && ring && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', ({ clientX:x, clientY:y }) => { dot.style.transform = `translate(${x}px, ${y}px)`; ring.style.transform = `translate(${x}px, ${y}px)`; });
  document.querySelectorAll('a, button, .film-visual').forEach((item) => { item.addEventListener('pointerenter', () => document.body.classList.add('cursor-active')); item.addEventListener('pointerleave', () => document.body.classList.remove('cursor-active')); });
}
document.querySelectorAll('.pill').forEach((button) => { button.addEventListener('pointermove', (event) => { if (!window.matchMedia('(pointer:fine)').matches) return; const box = button.getBoundingClientRect(); button.style.transform = `translate(${(event.clientX-box.left-box.width/2)*.16}px, ${(event.clientY-box.top-box.height/2)*.16}px)`; }); button.addEventListener('pointerleave', () => button.style.transform = 'translate(0,0)'); });
document.querySelectorAll('.product-card, .catalog-item').forEach((card) => { card.addEventListener('pointermove', (event) => { if (!window.matchMedia('(pointer:fine)').matches) return; const box=card.getBoundingClientRect(); card.style.transform=`perspective(1000px) rotateX(${-(event.clientY-box.top-box.height/2)/box.height*5}deg) rotateY(${(event.clientX-box.left-box.width/2)/box.width*5}deg)`; }); card.addEventListener('pointerleave', () => card.style.transform='perspective(1000px) rotateX(0) rotateY(0)'); });
