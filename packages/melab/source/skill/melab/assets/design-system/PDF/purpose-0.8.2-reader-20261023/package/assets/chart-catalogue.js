/* Project-only MELAB chart review adapter. Membership and aliases belong to system.model.json. */
(()=>{'use strict';
const policy=M.chartCatalogue;
if(!policy||policy.schemaVersion!=='chart-catalogue/v1')throw Error('Missing chart catalogue source');
const variants=new Map(policy.variantRecords.map(x=>[x.id,x]));
const families=new Map(policy.families.map(x=>[x.canonicalId,x]));
const memberships=new Map(policy.families.flatMap(f=>f.members.map(id=>[id,f])));
const originalFind=find,originalOpen=openDetail,originalReuse=reusePacket,originalSet=setView,originalContents=contents;
const primaryRecords=M.libraryDrafts.filter(x=>x.family!=='charts').concat(policy.families.map(f=>({...variants.get(f.canonicalId),title:f.title,purpose:f.useWhen,usage:f.members.map(id=>id+' '+variants.get(id).title+' '+variants.get(id).purpose).join(' · '),chartFamilyId:f.id,defaultComponent:f.members.some(id=>variants.get(id).defaultComponent)})));
const sourceCard=card;card=function(item){const markup=sourceCard(item);return item.chartFamilyId?markup.replace('data-family="charts"',`data-family="charts" data-chart-family="${esc(item.chartFamilyId)}"`):markup;};
showLibrary=function(){const q=$('#search').value.toLocaleLowerCase('vi');const xs=primaryRecords.filter(x=>(activeFamily==='all'||x.family===activeFamily)&&`${x.title} ${x.purpose} ${x.usage}`.toLocaleLowerCase('vi').includes(q));$('#library-grid').innerHTML=xs.map(card).join('');$('#count').textContent=`${xs.length} mục chính${activeFamily==='charts'?' · 40 mẫu và biến thể trong chi tiết':''}`;$('#empty').hidden=xs.length>0;return xs;};
$('#search').oninput=showLibrary;
contents=function(){originalContents();if(current!=='library')return;document.querySelectorAll('#contents [data-section]').forEach(a=>{const n=a.dataset.section==='all'?primaryRecords.length:primaryRecords.filter(x=>x.family===a.dataset.section).length;a.querySelector('.nav-count').textContent=n;a.querySelector('.nav-count').dataset.count=n;a.setAttribute('aria-label',a.querySelector('.nav-label').textContent+' · '+n+' mục chính');});};
find=function(id){return originalFind(id)||variants.get(id);};
let disposeDetail=null;
const clean=()=>{disposeDetail?.();disposeDetail=null;};
function showVariant(id){
 const item=variants.get(id),family=memberships.get(id),slot=document.querySelector('#chart-detail-stage');
 if(!item||!family||!slot)return;
 clean();
 document.querySelector('#chart-variant').value=id;
 document.querySelector('#chart-variant-purpose').textContent=item.purpose;
 document.querySelector('#chart-source-info').innerHTML=`<dl class="detail-info"><dt>Nguồn và dữ liệu</dt><dd>${esc(item.source)}</dd><dt>Giới hạn</dt><dd>${esc(item.limits)}</dd><dt>Quyền sử dụng</dt><dd>${esc(item.rights)}</dd><dt>Quy tắc áp dụng</dt><dd>${item.overviewRuleIds.map(rule=>`<a href="#overview/${esc(rule)}">${esc(M.overviewJobs.find(x=>x.id===rule)?.title||rule)}</a>`).join(' · ')}</dd><dt>Tệp nguồn</dt><dd>${esc(item.file)}</dd><dt>Dấu kiểm tra tệp</dt><dd>${esc(item.sha256)}</dd><dt>Phụ thuộc</dt><dd>${(item.dependencyFiles||[]).map(x=>esc(x.path)+' · '+esc(x.sha256)).join('; ')}</dd></dl>`;
 document.querySelector('#chart-variant-actions').innerHTML=actions(item).replace(/<button data-open="[^"]+">Xem chi tiết<\/button>/,'').replace('data-preview=', 'data-chart-fullpage=');
 disposeDetail=window.MELAB_CATALOGUE.openInViewer(item,slot);
 document.querySelector('#detail-content').dataset.selectedVariant=id;
}
openDetail=function(item){
 if(!item)return;
 const family=memberships.get(item.id);
 if(!family){clean();return originalOpen(item);}
 originalOpen(item);
 clean();
 const comparison=policy.usageComparisons[family.id],list=rows=>'<ul>'+rows.map(row=>`<li data-condition-source="${esc(row.sourceIds.join(' '))}">${row.variantTitle?'<strong>'+esc(row.variantTitle)+':</strong> ':''}${esc(row.text)}</li>`).join('')+'</ul>';
 document.querySelector('#detail-content').innerHTML=`<span class="tag">BIỂU ĐỒ · ${family.members.length} mẫu trong họ</span><h2>${esc(family.title)}</h2><table class="chart-use-table"><thead><tr><th id="chart-use-yes" scope="col">Nên dùng khi</th><th id="chart-use-no" scope="col">Không dùng khi</th></tr></thead><tbody><tr><td headers="chart-use-yes" data-label="Nên dùng khi">${list(comparison.use)}</td><td headers="chart-use-no" data-label="Không dùng khi">${list(comparison.avoid)}</td></tr></tbody></table><label class="chart-variant-label" for="chart-variant">Chọn biến thể hoặc mẫu dữ liệu</label><select id="chart-variant">${family.members.map(id=>`<option value="${esc(id)}">${esc(variants.get(id).title)}</option>`).join('')}</select><p id="chart-variant-purpose"></p><div id="chart-detail-stage"></div><details class="chart-source-detail"><summary>Nguồn, dữ liệu và cách dùng lại</summary><div id="chart-source-info"></div><p>Giữ đơn vị, thứ tự, mẫu số và ý nghĩa ô chưa có dữ liệu. Bảng số trong mẫu được tạo từ cùng dữ liệu với hình vẽ.</p></details><div id="chart-variant-actions"></div>`;
 document.querySelector('#chart-variant').addEventListener('change',e=>showVariant(e.target.value));
 showVariant(item.id);
 document.querySelector('#close').focus();
};
document.querySelector('#detail').addEventListener('close',clean);
reusePacket=function(item){
 const family=memberships.get(item.id);
 if(!family)return originalReuse(item);
 const selected=variants.get(item.id)||item;
 return originalReuse(selected)+`\nHọ biểu đồ: ${family.canonicalId} — ${family.title}\nBiến thể được chọn: ${selected.id}\nÝ nghĩa dữ liệu của biến thể: ${policy.variantMeaningVi?.[selected.id]||selected.usage}\nDùng khi: ${family.useWhen}\nKhông dùng khi: ${family.doNotUseWhen}\nCác tên cũ tra cứu cùng họ: ${family.members.join(', ')}\nCác tệp phụ thuộc và dấu kiểm tra:\n`+(selected.dependencyFiles||[]).map(x=>x.path+' · SHA-256 '+x.sha256).join('\n');
};
window.DESIGN_SHOWCASE_REUSE.packet=reusePacket;
setView=function(v,s){
 if(v==='library'&&memberships.has(s)){
  const result=originalSet(v,'charts');
  requestAnimationFrame(()=>openDetail(variants.get(s)));
  return result;
 }
 return originalSet(v,s);
};
function route(){const [v,s,id]=location.hash.slice(1).split('/');if(v==='library'&&s==='charts'&&memberships.has(id))openDetail(variants.get(id));else if(v==='library'&&memberships.has(s))setView(v,s);}
addEventListener('hashchange',route);
addEventListener('message',e=>{const frame=document.querySelector('#chart-detail-stage iframe');if(e.data?.type==='melab-sample-close-request'&&frame&&e.source===frame.contentWindow)document.querySelector('#detail').close();});
document.addEventListener('click',e=>{const button=e.target.closest('[data-chart-fullpage]');if(!button)return;e.preventDefault();const id=button.dataset.chartFullpage,family=memberships.get(id),opener=document.querySelector(`[data-library-id="${family.canonicalId}"] [data-preview]`)||$('#search');document.querySelector('#detail').close();const previous=opener.dataset.preview;opener.dataset.preview=id;opener.click();if(previous===undefined)delete opener.dataset.preview;else opener.dataset.preview=previous;});
window.MELAB_CHARTS={families:policy.families,variants:policy.variantRecords,primaryRecords,resolve:id=>memberships.get(id)?.canonicalId,open:id=>openDetail(variants.get(id))};
if(current==='library'){showLibrary();contents();}
route();
})();
