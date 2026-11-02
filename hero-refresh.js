/* Independent homepage slideshow. Existing site-v2.js continues to manage galleries. */
(() => {
 const host=document.getElementById('hero-slides'), position=document.getElementById('hero-position');
 if(!host)return;
 let slides=[],current=0,timer;
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const safeUrl=(s)=>typeof s==='string' && !/^\s*(javascript:|data:)/i.test(s) ? s : '';
 function show(i){
  if(!slides.length)return;
  current=(i+slides.length)%slides.length;
  slides.forEach((el,n)=>el.classList.toggle('active',n===current));
  position.textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
 }
 function reset(){clearInterval(timer);if(slides.length>1&&!reduce)timer=setInterval(()=>show(current+1),5000);}
 document.getElementById('hero-prev').addEventListener('click',()=>{show(current-1);reset()});
 document.getElementById('hero-next').addEventListener('click',()=>{show(current+1);reset()});
 fetch('data/artworks.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Artwork feed unavailable');return r.json()}).then(data=>{
  if(!Array.isArray(data))return;
  const originals=data.filter(w=>w&&w.category!=='print'&&safeUrl(w.image));
  const featured=originals.filter(w=>w.featured);
  const selected=(featured.length?featured:originals).slice(0,12);
  selected.forEach(w=>{
   const slide=document.createElement('div');slide.className='hero-slide';
   // Use CSS background to crop to the viewport, without changing the original artwork.
   slide.style.backgroundImage='url('+JSON.stringify(safeUrl(w.image))+')';
   slide.style.setProperty('--focus',typeof w.heroPosition==='string'?w.heroPosition:'center');
   host.appendChild(slide);slides.push(slide);
  });
  if(slides.length){show(0);reset();}
  else position.textContent='ATELIER OLIVISA';
 }).catch(()=>{position.textContent='ATELIER OLIVISA'});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInterval(timer);else reset()});
})();
