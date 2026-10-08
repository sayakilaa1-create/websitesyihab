
const current = document.body.dataset.page;
document.querySelectorAll('.navbar a').forEach(a=>{
  if(a.dataset.page===current) a.classList.add('active');
});
document.querySelectorAll('[data-copy]').forEach(btn=>{
  btn.addEventListener('click',async()=>{
    const value=btn.dataset.copy;
    try{await navigator.clipboard.writeText(value)}catch(e){}
    const t=document.querySelector('.toast');
    if(t){t.textContent='Berhasil disalin: '+value;t.classList.add('show');
      setTimeout(()=>t.classList.remove('show'),1800);}
  });
});
document.querySelectorAll('.download-demo').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const t=document.querySelector('.toast');
    if(t){t.textContent='Dokumen siap diakses';t.classList.add('show');
      setTimeout(()=>t.classList.remove('show'),1800);}
  });
});
