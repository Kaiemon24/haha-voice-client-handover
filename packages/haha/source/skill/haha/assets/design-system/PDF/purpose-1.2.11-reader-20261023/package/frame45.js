/* Scoped layout-only carrier enhancement; no source data, visual tokens or media mutation. */
(()=>{'use strict';let observer;
function mount(){const slide=document.querySelector('#image-style .image308-slide');if(!slide||slide.parentElement.classList.contains('frame45-slide-wrap'))return;
 const wrap=document.createElement('div');wrap.className='frame45-slide-wrap';slide.before(wrap);wrap.append(slide);
 const fit=()=>{const scale=wrap.clientWidth/1280;slide.style.transform='scale('+scale+')';wrap.style.height=720*scale+'px'};observer?.disconnect();observer=new ResizeObserver(fit);observer.observe(wrap);fit();
 const tools=document.createElement('div');tools.className='frame45-tools';const button=document.createElement('button');button.type='button';button.textContent='Đọc nội dung';button.setAttribute('aria-expanded','false');
 const reading=document.createElement('div');reading.className='frame45-reading';reading.id='frame45-image-style-reading';reading.hidden=true;button.setAttribute('aria-controls',reading.id);reading.append(slide.querySelector('.image308-copy').cloneNode(true));
 button.addEventListener('click',()=>{reading.hidden=!reading.hidden;button.setAttribute('aria-expanded',String(!reading.hidden));button.textContent=reading.hidden?'Đọc nội dung':'Đóng nội dung đọc';if(!reading.hidden)reading.scrollIntoView({block:'nearest'})});tools.append(button);wrap.after(tools,reading);
}
addEventListener('hashchange',()=>requestAnimationFrame(mount));document.addEventListener('DOMContentLoaded',mount);requestAnimationFrame(mount);
})();
