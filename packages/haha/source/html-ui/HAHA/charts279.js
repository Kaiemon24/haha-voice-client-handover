/* HAHA chart role styling. Original data geometry is never changed. */
(()=>{'use strict';const NS='http://www.w3.org/2000/svg';
/* Edge-connected rectangles form one compound carrier. Only its exterior rounds.
   Original part bounds are preserved; corner-only contact and real gaps stay separate. */
let joinedSerial290=0;
function compoundRects290(svg,filled){
 const epsilon=.001,parts=filled.filter(e=>e.tagName.toLowerCase()==='rect'&&!(e.getAttribute('class')||'').includes('chart-surface'));
 const box=e=>{const b=e.getBBox();return{x:b.x,y:b.y,width:b.width,height:b.height}};
 const touch=(a,b)=>{const over=(p,w,q,h)=>Math.min(p+w,q+h)-Math.max(p,q)>epsilon;return((Math.abs(a.x+a.width-b.x)<epsilon||Math.abs(b.x+b.width-a.x)<epsilon)&&over(a.y,a.height,b.y,b.height))||((Math.abs(a.y+a.height-b.y)<epsilon||Math.abs(b.y+b.height-a.y)<epsilon)&&over(a.x,a.width,b.x,b.width))};
 const visited=new Set(),groups=[];
 for(const part of parts){if(visited.has(part))continue;const group=[part];visited.add(part);for(let i=0;i<group.length;i++)for(const peer of parts)if(!visited.has(peer)&&touch(box(group[i]),box(peer))){visited.add(peer);group.push(peer)}if(group.length>1)groups.push(group)}
 const result=new Map();let groupIndex=0;
 for(const members of groups){
  const rects=members.map(box),xs=[...new Set(rects.flatMap(r=>[r.x,r.x+r.width]))].sort((a,b)=>a-b),ys=[...new Set(rects.flatMap(r=>[r.y,r.y+r.height]))].sort((a,b)=>a-b);
  const occupied=(i,j)=>i>=0&&j>=0&&i<xs.length-1&&j<ys.length-1&&rects.some(r=>{const x=(xs[i]+xs[i+1])/2,y=(ys[j]+ys[j+1])/2;return x>r.x-epsilon&&x<r.x+r.width+epsilon&&y>r.y-epsilon&&y<r.y+r.height+epsilon});
  const key=p=>p.join(','),edges=new Map(),add=(a,b)=>edges.set(key(a),b);
  for(let i=0;i<xs.length-1;i++)for(let j=0;j<ys.length-1;j++)if(occupied(i,j)){
   if(!occupied(i,j-1))add([xs[i],ys[j]],[xs[i+1],ys[j]]);
   if(!occupied(i+1,j))add([xs[i+1],ys[j]],[xs[i+1],ys[j+1]]);
   if(!occupied(i,j+1))add([xs[i+1],ys[j+1]],[xs[i],ys[j+1]]);
   if(!occupied(i-1,j))add([xs[i],ys[j+1]],[xs[i],ys[j]]);
  }
  let d='';const radius=HAHAModel241.shapes.dataRadius;
  while(edges.size){const start=edges.keys().next().value,vertices=[];let k=start;do{vertices.push(k.split(',').map(Number));const next=edges.get(k);edges.delete(k);if(!next)throw Error('Incomplete compound outline');k=key(next)}while(k!==start);
   const corners=vertices.filter((p,i)=>{const a=vertices[(i+vertices.length-1)%vertices.length],b=vertices[(i+1)%vertices.length];return Math.abs((p[0]-a[0])*(b[1]-p[1])-(p[1]-a[1])*(b[0]-p[0]))>epsilon});
   const arcs=corners.map((p,i)=>{const a=corners[(i+corners.length-1)%corners.length],b=corners[(i+1)%corners.length],u=[p[0]-a[0],p[1]-a[1]],v=[b[0]-p[0],b[1]-p[1]],ul=Math.hypot(...u),vl=Math.hypot(...v),r=u[0]*v[1]-u[1]*v[0]>0?Math.min(radius,ul/2,vl/2):0;return{p,before:[p[0]-u[0]/ul*r,p[1]-u[1]/ul*r],after:[p[0]+v[0]/vl*r,p[1]+v[1]/vl*r],r}});
   d+='M'+arcs[0].after.join(' ');for(let i=1;i<=arcs.length;i++){const a=arcs[i%arcs.length];d+='L'+a.before.join(' ')+(a.r?'Q'+a.p.join(' ')+' '+a.after.join(' '):'')}d+='Z';
  }
  const id='kai-joined290-'+(++joinedSerial290),groupId=String(groupIndex++),defs=document.createElementNS(NS,'defs'),clip=document.createElementNS(NS,'clipPath'),contour=document.createElementNS(NS,'path'),group=document.createElementNS(NS,'g');
  clip.id=id;clip.setAttribute('clipPathUnits','userSpaceOnUse');contour.setAttribute('d',d);contour.setAttribute('data-outer-contour290',groupId);clip.append(contour);defs.append(clip);svg.insertBefore(defs,svg.firstChild);
  group.setAttribute('data-joined290',groupId);group.setAttribute('data-parts290',String(members.length));group.setAttribute('clip-path','url(#'+id+')');members[0].before(group);
  for(const [i,e] of members.entries()){e.setAttribute('rx','0');e.setAttribute('ry','0');e.setAttribute('data-part290',groupId+':'+i);group.append(e);result.set(e,{id:groupId,d,first:e===members[0]})}
 }
 return result;
}

function apply(markup,type){const doc=new DOMParser().parseFromString(markup.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" '),'image/svg+xml'),svg=document.importNode(doc.documentElement,true);if(svg.dataset.kaiStyle279)return markup;
const stage=document.createElement('div');stage.style.cssText='position:absolute;left:-10000px;top:0;visibility:hidden;pointer-events:none;width:460px';stage.append(svg);document.body.append(stage);
const filled=[...svg.querySelectorAll('rect,path,circle,polygon')].filter(e=>{const c=e.getAttribute('class')||'',s=getComputedStyle(e),b=e.getBBox();return !c.includes('shadow')&&s.fill!=='none'&&s.fill!=='transparent'&&b.width>=24&&b.height>=24});
const semantic=e=>(e.getAttribute('class')||'').includes('chart-surface');
const flat=HAHAModel241.chartPresentation.depth.flatFamilies.includes(type);
const joined=compoundRects290(svg,filled);
if(!flat){const layer=document.createElementNS(NS,'g');layer.setAttribute('data-chart-depth','thin');layer.setAttribute('aria-hidden','true');layer.setAttribute('transform','translate(2 2)');for(const e of filled.filter(e=>!semantic(e))){const union=joined.get(e);if(union&&!union.first)continue;const clone=union?document.createElementNS(NS,'path'):e.cloneNode(false);if(union){clone.setAttribute('d',union.d);clone.setAttribute('data-shadow-group290',union.id)}clone.removeAttribute('class');clone.removeAttribute('id');clone.setAttribute('style','fill:var(--shadow);stroke:none');layer.append(clone)}if(layer.children.length)svg.insertBefore(layer,svg.firstChild)}
function contains(shape,x,y){const pt=svg.createSVGPoint();pt.x=x;pt.y=y;return shape.isPointInFill(pt)}
for(const t of svg.querySelectorAll('text')){const b=t.getBBox();const carrier=filled.find(e=>{const r=e.getBBox();return b.x>=r.x&&b.x+b.width<=r.x+r.width&&b.y>=r.y&&b.y+b.height<=r.y+r.height&&contains(e,b.x+b.width/2,b.y+b.height/2)});if(carrier){t.setAttribute('data-text-role',type==='kpi-table'?'hierarchical':'shape-peer');t.style.fontWeight=type==='kpi-table'?(t.textContent==='Tổng'?'600':'700'):'700'}}
/* Center each independent peer-label group using final-font visible ink.
   Data geometry, axes, external labels and headline/body hierarchies stay fixed. */
const ctx=document.createElement('canvas').getContext('2d');
function ink(t){const s=getComputedStyle(t),p=t.getStartPositionOfChar(0);ctx.font=`${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;const m=ctx.measureText(t.textContent);return{x:p.x-m.actualBoundingBoxLeft,y:p.y-m.actualBoundingBoxAscent,right:p.x+m.actualBoundingBoxRight,bottom:p.y+m.actualBoundingBoxDescent}}
const groups=new Map();for(const t of svg.querySelectorAll('[data-text-role="shape-peer"]')){const b=t.getBBox(),e=filled.find(e=>{const r=e.getBBox();return b.x>=r.x&&b.x+b.width<=r.x+r.width&&b.y>=r.y&&b.y+b.height<=r.y+r.height&&contains(e,b.x+b.width/2,b.y+b.height/2)});if(e){if(!groups.has(e))groups.set(e,[]);groups.get(e).push(t)}}
let carrierIndex=0;for(const [shape,labels] of groups){const r=shape.getBBox(),bounds=labels.map(ink),left=Math.min(...bounds.map(b=>b.x)),top=Math.min(...bounds.map(b=>b.y)),right=Math.max(...bounds.map(b=>b.right)),bottom=Math.max(...bounds.map(b=>b.bottom)),dx=r.x+r.width/2-(left+right)/2,dy=r.y+r.height/2-(top+bottom)/2;
 const safe=labels.every((t,i)=>{const b=bounds[i],x=b.x+dx,y=b.y+dy,a=b.right+dx,z=b.bottom+dy;return x>=r.x+4&&a<=r.x+r.width-4&&y>=r.y+4&&z<=r.y+r.height-4&&[[x,y],[a,y],[x,z],[a,z],[(x+a)/2,(y+z)/2]].every(([x,y])=>contains(shape,x,y))});
 shape.setAttribute('data-carrier286',String(carrierIndex));for(const t of labels)t.setAttribute('data-carrier286',String(carrierIndex));carrierIndex++;
 if(safe){for(const t of labels){t.setAttribute('x',String(parseFloat(t.getAttribute('x'))+dx));t.setAttribute('y',String(parseFloat(t.getAttribute('y'))+dy));t.setAttribute('data-centered286','ink')}}else{for(const t of labels)t.setAttribute('data-centered286','review-containment')}
}
if(svg.querySelector('[data-shadow-group290]')){
 svg.setAttribute('data-joined-edge292','true');
 if(type==='treemap')for(const seam of svg.querySelectorAll('path[fill="none"][stroke="var(--paper)"]'))seam.setAttribute('data-joined-divider292','true');
 const css=document.createElementNS(NS,'style');css.textContent='[data-joined-edge292]{--edge292:#000000}body.dark [data-joined-edge292]{--edge292:#FFFFFF}[data-joined-edge292] [data-part290],[data-joined-edge292] [data-joined-divider292]{stroke:var(--edge292);stroke-width:1}[data-joined-edge292] [data-shadow-group290]{fill:var(--edge292)!important}[data-joined-edge292] [data-joined-outline292]{fill:none;stroke:var(--edge292);stroke-width:1;stroke-linejoin:miter}';svg.append(css);
 for(const e of svg.querySelectorAll('[data-outer-contour290]')){const outline=document.createElementNS(NS,'path');outline.setAttribute('d',e.getAttribute('d'));outline.setAttribute('data-joined-outline292','true');svg.append(outline)}
}
svg.dataset.kaiStyle279='true';svg.dataset.chartFamily=type;const result=svg.outerHTML;stage.remove();return result}
window.HAHAChartStyle279={apply};const old=HAHACharts262.svg;HAHACharts262.svg=t=>apply(old(t),t);
})();
