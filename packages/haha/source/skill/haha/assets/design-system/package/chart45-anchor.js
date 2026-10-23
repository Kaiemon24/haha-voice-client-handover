/* Measure the actual responsive header; preserve ordinary hash navigation. */
(()=>{'use strict';const root=document.documentElement,header=document.querySelector('.topbar');if(!header)return;let queued=false;
const measure=()=>root.style.setProperty('--chart45-header-height',Math.ceil(header.getBoundingClientRect().height)+'px');
const follow=()=>{measure();if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;const id=location.hash.slice(1),C=window.ChartCatalogue45;if(!C)return;let block;if(id==='charts')block=document.getElementById('charts');else if(C.has(id)){const semantic=C.target.localAliases[id]||id,family=C.profile.families.find(f=>f.members.includes(semantic));if(family)block=document.querySelector('.sc45-card[data-sc45-family="'+family.id+'"]');}block?.scrollIntoView({block:'start',behavior:'instant'});});};
measure();new ResizeObserver(measure).observe(header);addEventListener('hashchange',follow);addEventListener('resize',follow);document.addEventListener('DOMContentLoaded',follow);document.fonts.ready.then(follow);
})();
