'use strict';
(()=>{
const host=document.getElementById('element-gallery')||document,D=window.ELEMENT_DATA,$=s=>host.querySelector(s),base=host.dataset?.base||'',make=(t,s)=>{const n=document.createElement(t);n.textContent=s;return n};
if(!D){$('#empty').textContent='Thiếu danh sách; không tự tìm thư mục khác.';return}
const tokenMap={canvas:'--paper',text:'--ink',muted:'--muted',accent:'--accent',surface:'--surface',border:'--line',font:'--font',hover:'--hover',accentHover:'--accent-hover',track:'--track'};
for(const[k,v]of Object.entries(D.tokens||{}))if(tokenMap[k])document.documentElement.style.setProperty(tokenMap[k],v);
if($('#identity'))$('#identity').textContent=D.systemId+' · '+D.systemVersion;
const norm=s=>String(s??'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
const aliases={'bieu do':'chart','bieu tuong':'icon','chuyen dong':'motion'};
const terms=s=>{let q=norm(s);for(const[a,b]of Object.entries(aliases))q=q.split(a).join(b);return q.split(/\s+/).filter(Boolean)};
for(const id of ['category','media','aspect'])for(const v of [...new Set(D.elements.flatMap(e=>id==='category'?e.categories||[]:[e[id]||'unknown']))].sort()){const o=make('option',v);o.value=v;$('#'+id).append(o)}
const current=e=>e.systemId===D.systemId&&e.systemVersion===D.systemVersion&&e.systemHash===D.systemHash;
const allowed=p=>p&&p.rights==='approved-for-preview'&&p.reviewRef&&/^[a-f0-9]{64}$/.test(p.sha256||'')&&/^previews\/[a-zA-Z0-9_/-]+\.(png|jpe?g|webp|mp4|webm)$/.test(p.path||'')&&!p.path.includes('..');
const activeVideos=new Set(),reduced=matchMedia('(prefers-reduced-motion: reduce)');
function stopMedia(){for(const v of activeVideos){v.pause();v.removeAttribute('src');v.load()}activeVideos.clear()}
addEventListener('pagehide',stopMedia);
addEventListener('design-panel-change',stopMedia);
reduced.addEventListener('change',()=>{for(const v of activeVideos){v.pause();if(reduced.matches)v.currentTime=0}});
const observer=new IntersectionObserver(es=>{for(const x of es)if(!x.isIntersecting&&x.target.tagName==='VIDEO')x.target.pause()});
function preview(e,card){
const p=e.preview,reason=make('p','Chưa có bản xem trước an toàn.');reason.className='note';
if(!allowed(p)){card.append(reason);return}
if(p.kind==='image'&&/\.(png|jpe?g|webp)$/.test(p.path)){const img=document.createElement('img');img.src=base+p.path;img.alt=p.alt||e.title;img.loading='lazy';img.className='element-preview';img.onerror=()=>{img.remove();reason.textContent='Không tải được bản xem trước; kiểm tra lại nguồn.';card.append(reason)};card.append(img);return}
if(p.kind==='video'&&/\.(mp4|webm)$/.test(p.path)){
const poster=e.poster;
if(!allowed(poster)||poster.kind!=='image'){reason.textContent='Video chưa có ảnh tĩnh đã kiểm tra; chưa mở xem trước.';card.append(reason);return}
const v=document.createElement('video');v.controls=true;v.preload='none';v.muted=true;v.playsInline=true;v.poster=base+poster.path;v.className='element-preview';v.setAttribute('aria-label',p.alt||e.title);
const button=make('button','Mở video xem trước');button.onclick=()=>{v.src=base+p.path;v.load();activeVideos.add(v);button.hidden=true;reason.textContent=reduced.matches?'Đang giảm chuyển động: giữ ảnh tĩnh; chỉ phát khi bạn chủ động.':'Dùng nút phát của video; không tự phát.'};
v.onerror=()=>{v.remove();button.remove();reason.textContent='Video không tải được; giữ thông tin nguồn để kiểm tra.'};
observer.observe(v);card.append(v,button,reason);return
}
card.append(reason);
}
function draw(){
stopMedia();observer.disconnect();const q=terms($('#search').value);
const es=D.elements.filter(e=>{const words=terms([e.id,e.title,e.description,e.role,e.style,e.runtime,...(e.tags||[]),...(e.aliases||[]),...(e.categories||[])].join(' '));return q.every(t=>words.some(w=>w.includes(t)))&&(!$('#category').value||(e.categories||[]).includes($('#category').value))&&['media','motion','aspect'].every(k=>!$('#'+k).value||(e[k]||'unknown')===$('#'+k).value)});
$('#results').replaceChildren();$('#count').textContent=es.length+' / '+D.elements.length+' thành phần';$('#empty').hidden=es.length>0;$('#empty').textContent=D.elements.length?'Không có kết quả phù hợp.':'Chưa có thành phần nào được thêm.';
for(const e of es){
const card=make('section','');card.dataset.elementId=e.id;card.append(make('h2',e.title),make('p',(e.description||'')+' · '+e.role),make('p',current(e)?'Phiên bản đã khớp; quyền dùng: '+e.rights:'Phiên bản cũ — cần kiểm tra lại'));
preview(e,card);
const detail=make('details','');detail.append(make('summary','Nguồn và cách tái sử dụng'));
for(const[label,value]of [['Nguồn gốc',e.materialId+' · '+e.materialVersion+' · '+e.materialHash],['Biến thể',e.variant],['Phần được sửa',e.editableParts],['Phụ thuộc',e.dependencies],['Giới hạn',e.limitations],['Kiểm chứng',e.verification],['Yêu cầu thêm',e.admissionRef]])detail.append(make('p',label+': '+(typeof value==='string'?value:JSON.stringify(value??'Chưa xác minh'))));
for(const item of e.sourceLinks||[]){try{const u=new URL(item.url);if(u.protocol!=='https:'||u.username||u.password)continue;const a=make('a',item.label||'Mở nguồn');a.href=u.href;a.target='_blank';a.rel='noopener noreferrer';const p=make('p','');p.append(a);detail.append(p)}catch{}}
const packet={systemId:D.systemId,systemVersion:D.systemVersion,systemHash:D.systemHash,elementId:e.id,materialId:e.materialId,materialVersion:e.materialVersion,materialHash:e.materialHash,role:e.role,variant:e.variant??null,rights:e.rights,dependencies:e.dependencies??[],bindingCurrent:current(e),executionAuthorized:false,readBeforeReuse:'Inspect exact source, rights, dependencies and verification; metadata is not execution authority.'};
const area=make('textarea','');area.value=JSON.stringify(packet,null,2);area.readOnly=true;area.rows=8;area.setAttribute('aria-label','Thông tin tái sử dụng '+e.id);
const copy=make('button','Reuse this'),status=make('p',current(e)?'Chỉ sao chép khi bạn bấm; không tự gửi.':'Chặn sao chép phiên bản cũ.');status.setAttribute('role','status');copy.disabled=!current(e);
copy.onclick=async()=>{try{await navigator.clipboard.writeText(area.value);status.textContent='Đã sao chép; chưa gửi hay thực thi.'}catch{detail.open=true;area.focus();area.select();status.textContent='Bạn có thể sao chép phần đã chọn.'}};
detail.append(area);card.append(detail,copy,status);$('#results').append(card)
}
}
for(const id of ['search','category','media','motion','aspect'])$('#'+id).addEventListener(id==='search'?'input':'change',draw);
$('#clear').onclick=()=>{for(const id of ['search','category','media','motion','aspect'])$('#'+id).value='';draw();$('#search').focus()};
draw();
})();
