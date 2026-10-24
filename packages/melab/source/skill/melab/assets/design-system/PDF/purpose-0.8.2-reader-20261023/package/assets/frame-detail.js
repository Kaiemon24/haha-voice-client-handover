/* Details, gallery and full sample use the same source-bound receiving contract. */
(()=>{'use strict';const prior=openDetail;let dispose=null;const dialog=document.querySelector('#detail');
const clean=()=>{dispose?.();dispose=null;};
openDetail=function(item){clean();prior(item);if(!item||item.format!=='html'||item.family==='charts')return;const slot=dialog.querySelector('.detail-preview');if(slot)dispose=window.MELAB_CATALOGUE.openInViewer(item,slot);};
dialog.addEventListener('close',clean);
addEventListener('message',event=>{if(event.data?.type!=='melab-sample-close-request'||!dialog.open)return;const frame=dialog.querySelector('.detail-preview iframe');if(frame&&event.source===frame.contentWindow)dialog.close();});
})();
