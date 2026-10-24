/* Exact legacy slide selector; preserve native gallery when no item is requested. */
(()=>{
 const id=new URLSearchParams(location.search).get('item');if(!id)return;
 const atlas=window.HAHAAtlas248;
 const render=()=>{
  const view=document.querySelector('#view');if(!view)return;
  const i=atlas.slideDefs.findIndex(d=>d[0]===id);
  if(i<0){view.replaceChildren();const p=document.createElement('p');p.textContent='Mẫu chưa có trong danh mục. Không tự chọn mẫu thay thế.';view.append(p);document.body.dataset.slideSelection='not-found';return;}
  view.innerHTML=atlas.slide(atlas.slideDefs[i],i);
  document.body.dataset.slideSelection=id;
  document.title=atlas.slideDefs[i][1]+' · HAHA';
 };
 const schedule=()=>requestAnimationFrame(render);
 window.addEventListener('hashchange',schedule);
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule,{once:true});else schedule();
})();
