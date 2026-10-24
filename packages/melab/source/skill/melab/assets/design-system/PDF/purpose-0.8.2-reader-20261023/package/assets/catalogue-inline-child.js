/* Source-bound inline receiving context; the original standalone file is untouched. */
(()=>{'use strict';
const config=window.MELAB_INLINE_CONTEXT;
if(!config||parent===window)return;
if(config.viewer)document.addEventListener('keydown',event=>{if(event.key!=='Escape'||document.querySelector('dialog[open]'))return;event.preventDefault();event.stopPropagation();parent.postMessage({type:'melab-sample-close-request'},'*');});
if(config.contentOnly){const content=document.querySelector('.reader-page .c282');if(content){const body=document.body;body.replaceChildren(content);body.style.setProperty('padding','0','important');}}
if(config.vertical){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
 while(node=walker.nextNode()){const element=node.parentElement;if(!node.textContent.trim()||!element||element.closest('svg,script,style,[hidden]'))continue;const style=getComputedStyle(element);if(style.display!=='none'&&parseFloat(style.fontSize)<16)element.style.setProperty('font-size','16px','important');if(node.textContent.includes('Kéo ngang để xem toàn biểu đồ. Dữ liệu đầy đủ:'))node.textContent=node.textContent.replace('Kéo ngang để xem toàn biểu đồ. Dữ liệu đầy đủ:','Dữ liệu biểu đồ:');}
}
if(config.reading||(config.vertical&&innerWidth<760)){
 // The receiving composition keeps every original table header/value together.
 document.querySelectorAll('table').forEach(table=>{
  const headers=[...table.querySelectorAll('tr:first-child > *')].map(x=>x.textContent.trim());
  const overflow=table.scrollWidth>table.parentElement.clientWidth+2;
  if(headers.length<4&&!overflow&&!table.closest('.app280,.product280'))return;
  // Interactive table cells retain their original controls and native roles.
  if(table.querySelector('button,input,select,textarea,a[href]'))return;
  const box=document.createElement('div');box.className='catalogue-table-reading';box.setAttribute('aria-label',table.getAttribute('aria-label')||'Bảng dữ liệu theo từng dòng');
  [...table.rows].forEach((row,index)=>{if(index===0&&row.querySelector('th'))return;const list=document.createElement('dl');[...row.cells].forEach((cell,i)=>{const label=document.createElement('dt'),value=document.createElement('dd');label.textContent=headers[i]||'Cột '+(i+1);value.textContent=cell.textContent.trim();list.append(label,value);});box.append(list);});
  table.hidden=true;table.after(box);
 });
 // SVG axes retain their full canvas; their exact text also remains readable unscaled.
 document.querySelectorAll('.slide-canvas svg').forEach(svg=>{const labels=[...svg.querySelectorAll('text')].map(x=>x.textContent.trim()).filter(Boolean);if(!labels.length)return;const section=document.createElement('details');section.className='catalogue-chart-reading';section.open=true;const title=document.createElement('summary');title.textContent='Đọc nhãn và số liệu biểu đồ';const list=document.createElement('ul');labels.forEach(label=>{const li=document.createElement('li');li.textContent=label;list.append(li);});section.append(title,list);svg.after(section);});
}
let scheduled=false,last='';
const send=()=>{scheduled=false;const b=document.body;
 const height=Math.ceil(Math.max(b.offsetHeight,...[...b.children].filter(x=>getComputedStyle(x).position!=='fixed').map(x=>x.getBoundingClientRect().bottom+scrollY))+parseFloat(getComputedStyle(b).paddingBottom));
 if(!Number.isFinite(height)||height<40||height>200000)return;
 const bad=[...document.images].filter(x=>x.complete&&!x.naturalWidth).map(x=>x.getAttribute('src'));
 const state={type:'melab-inline-size',id:config.id,height,width:document.documentElement.clientWidth,contentWidth:b.scrollWidth,textLength:b.innerText.trim().length,brokenImages:bad,fonts:document.fonts.status,sourceSha256:config.sha256};
 const signature=JSON.stringify(state);if(signature!==last||config.report){parent.postMessage(state,'*');last=signature;config.report=false;}
};
const measure=()=>{if(!scheduled){scheduled=true;queueMicrotask(send);}};
document.addEventListener('load',measure,true);
document.addEventListener('input',measure);document.addEventListener('click',measure);
document.addEventListener('toggle',measure,true);
new ResizeObserver(measure).observe(document.body);
new MutationObserver(measure).observe(document.body,{subtree:true,childList:true,attributes:true});
addEventListener('message',e=>{if(e.source!==parent||e.data?.type!=='melab-inline-state'||e.data.id!==config.id)return;
 document.body.classList.toggle('dark',!!e.data.dark);
 document.documentElement.dataset.motionPaused=String(!!e.data.paused);
 config.report=true;measure();
});
document.fonts.ready.then(measure);Promise.all([...document.images].map(x=>x.decode().catch(()=>{}))).then(()=>{config.report=true;measure();});
// Keep local sample navigation within this receiving frame and its measured lifecycle.
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||e.defaultPrevented)return;
 const url=new URL(a.href);if(url.hash&&url.pathname===new URL(document.baseURI).pathname){e.preventDefault();document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView();return;}
 if(config.allowed.includes(url.origin+url.pathname)){e.preventDefault();parent.postMessage({type:'melab-inline-navigate',id:config.id,url:url.href},'*');}
});
measure();
})();
