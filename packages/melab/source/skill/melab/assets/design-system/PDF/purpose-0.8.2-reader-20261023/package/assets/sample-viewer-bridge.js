/* Only the explicitly opened viewer may request parent closure. */
(()=>{'use strict';
if(window.parent===window||new URLSearchParams(location.search).get('sampleViewer')!=='dialog')return;
document.addEventListener('keydown',event=>{
 if(event.key!=='Escape'||document.querySelector('dialog[open]'))return;
 event.preventDefault();event.stopPropagation();
 window.parent.postMessage({type:'melab-sample-close-request'},'*');
});
})();
