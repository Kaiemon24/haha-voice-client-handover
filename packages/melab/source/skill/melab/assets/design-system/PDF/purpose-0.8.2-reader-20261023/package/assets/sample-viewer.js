/* MELAB sample viewer. Share the source-bound direct receiver when available. */
(()=>{'use strict';
const viewer=document.createElement('dialog');viewer.id='sample-viewer';viewer.setAttribute('aria-labelledby','sample-viewer-title');
viewer.innerHTML='<div class="sample-toolbar"><h2 id="sample-viewer-title"></h2><button type="button" id="sample-close" aria-label="Đóng mẫu">Đóng <span aria-hidden="true">×</span></button></div><div class="sample-stage"><p id="sample-message" role="status" hidden></p><button type="button" id="sample-retry" hidden>Thử tải lại mẫu</button><div id="sample-frame-slot"></div></div>';
document.body.append(viewer);
let opener=null,selected=null,request=null,cleanup=null,previousOverflow='',serial=0;
const message=viewer.querySelector('#sample-message'),retry=viewer.querySelector('#sample-retry'),slot=viewer.querySelector('#sample-frame-slot');
function clearSample(){request?.abort();request=null;cleanup?.();cleanup=null;slot.replaceChildren();delete slot.dataset.receiver;}
async function loadSample(item){
 const ticket=++serial;clearSample();viewer.dataset.loaded='false';message.hidden=false;message.textContent='Đang tải mẫu…';retry.hidden=true;
 try{
  const open=window.MELAB_CATALOGUE?.openInViewer;
  if(typeof open==='function'){
   const dispose=open(item,slot);
   if(typeof dispose==='function'){
    const stage=slot.querySelector('.catalogue-stage');if(!stage){dispose();throw Error('Missing shared sample stage');}
    const update=()=>{if(ticket!==serial||!viewer.open)return;const ready=stage.dataset.ready==='true'&&stage.dataset.state==='ready';const failed=stage.dataset.state==='error';viewer.dataset.loaded=String(ready);message.hidden=ready;retry.hidden=!failed;if(failed)message.textContent='Chưa tải được mẫu. Thử tải lại hoặc đóng hộp xem.';};
    const watch=new MutationObserver(update);watch.observe(stage,{attributes:true,attributeFilter:['data-ready','data-state']});cleanup=()=>{watch.disconnect();dispose();};update();return;
   }
  }
  request=new AbortController();
  const url=new URL(item.file,location.href);if(url.origin!==location.origin)throw Error('Unsupported sample origin');url.searchParams.set('sampleViewer','dialog');url.searchParams.set('v',item.sha256.slice(0,16));
  const response=await fetch(url,{signal:request.signal});if(!response.ok||!response.headers.get('content-type')?.includes('text/html'))throw Error('Sample unavailable');
  if(ticket!==serial||!viewer.open)return;
  const frame=document.createElement('iframe');frame.id='sample-frame';frame.title=item.title;frame.setAttribute('sandbox','allow-scripts');
  frame.addEventListener('load',()=>{if(ticket!==serial)return;message.hidden=true;viewer.dataset.loaded='true';});
  frame.src=url.href;slot.append(frame);
 }catch(error){if(error.name==='AbortError'||ticket!==serial)return;clearSample();message.hidden=false;message.textContent='Chưa tải được mẫu. Thử tải lại hoặc đóng hộp xem.';retry.hidden=false;viewer.dataset.loaded='false';}
}
function openSample(item,source){
 if(!item||item.format!=='html')return;opener=source;selected=item;viewer.querySelector('h2').textContent=item.title;viewer.dataset.sampleId=item.id;viewer.dataset.loaded='false';
 if(!viewer.open){previousOverflow=document.documentElement.style.overflow;document.documentElement.style.overflow='hidden';viewer.showModal();}viewer.querySelector('#sample-close').focus();loadSample(item);
}
viewer.querySelector('#sample-close').addEventListener('click',()=>viewer.close());retry.addEventListener('click',()=>loadSample(selected));
window.addEventListener('message',event=>{const frame=slot.querySelector('iframe');if(viewer.open&&frame&&event.source===frame.contentWindow&&event.data?.type==='melab-sample-close-request')viewer.close();});
viewer.addEventListener('close',()=>{serial++;clearSample();message.hidden=true;retry.hidden=true;viewer.dataset.loaded='false';document.documentElement.style.overflow=previousOverflow;const source=opener;opener=null;selected=null;source?.isConnected&&source.focus({preventScroll:true});});
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
document.addEventListener('click',event=>{const trigger=event.target.closest('[data-preview]');if(!trigger)return;event.preventDefault();event.stopImmediatePropagation();openSample(find(trigger.dataset.preview),trigger);},true);
document.addEventListener('error',event=>{const image=event.target;if(!(image instanceof HTMLImageElement)||!image.matches('img[data-preview-poster]'))return;const host=image.closest('.asset-preview');if(!host||host.querySelector('.preview-error'))return;const status=document.createElement('p');status.className='preview-error';status.setAttribute('role','status');status.textContent='Chưa tải được ảnh xem trước. Bấm để xem mẫu.';host.append(status);},true);
})();
