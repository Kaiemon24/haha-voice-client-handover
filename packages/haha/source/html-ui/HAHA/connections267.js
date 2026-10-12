/* Local HAHA review specimen. Source: DOM anchors after layout; no donor artwork. */
window.HAHAConnections267=(()=>{
 let observer;
 const NS='http://www.w3.org/2000/svg';
 const edges={
  arrow:[['read','build','Trình tự đã chọn'],['build','check','Trình tự đã chọn']],
  dashed:[['proposal','verify','Quan hệ đề xuất, chưa xác nhận']],
  curved:[['research','library','Nguồn cho Thư viện'],['design','library','Thiết kế cho Thư viện'],['design','application','Đề xuất áp dụng, chưa xác nhận','dashed'],['content','application','Nội dung cho Ứng dụng']]
 };
 function draw(map){
  const kind=map.dataset.connection267, r=map.getBoundingClientRect();if(!r.width||!r.height)return;
  const xs=map.offsetWidth/r.width,ys=map.offsetHeight/r.height;
  const box=id=>{const q=map.querySelector(`[data-node267="${id}"]`).getBoundingClientRect();return{x:(q.left-r.left)*xs,y:(q.top-r.top)*ys,w:q.width*xs,h:q.height*ys}};
  let svg=map.querySelector(':scope>.connection267-wire');if(!svg){svg=document.createElementNS(NS,'svg');svg.classList.add('connection267-wire');svg.setAttribute('aria-hidden','true');map.prepend(svg)}
  svg.setAttribute('viewBox',`0 0 ${map.offsetWidth} ${map.offsetHeight}`);svg.replaceChildren();
  const vertical=kind==='arrow'&&getComputedStyle(map).gridTemplateColumns.split(' ').length===1;
  const records=[];
  for(const [from,to,meaning,style] of edges[kind]){
   const a=box(from),b=box(to),s=vertical?{x:a.x+a.w/2,y:a.y+a.h}:{x:a.x+a.w,y:a.y+a.h/2},t=vertical?{x:b.x+b.w/2,y:b.y}:{x:b.x,y:b.y+b.h/2};
   const dashed=kind==='dashed'||style==='dashed';let d,head=[];
   if(kind==='arrow'){
    const size=10,half=4,base=vertical?{x:t.x,y:t.y-size}:{x:t.x-size,y:t.y};
    d=`M${s.x} ${s.y}L${base.x} ${base.y}`;
    head=vertical?[[t.x,t.y],[t.x-half,t.y-size],[t.x+half,t.y-size]]:[[t.x,t.y],[t.x-size,t.y-half],[t.x-size,t.y+half]];
   }else if(kind==='curved'){
    const gap=t.x-s.x;d=`M${s.x} ${s.y}C${s.x+gap*.45} ${s.y},${t.x-gap*.45} ${t.y},${t.x} ${t.y}`;
   }else d=`M${s.x} ${s.y}L${t.x} ${t.y}`;
   const p=document.createElementNS(NS,'path');p.setAttribute('d',d);p.setAttribute('fill','none');p.setAttribute('stroke','var(--green)');p.setAttribute('stroke-width','3');p.setAttribute('stroke-linecap','butt');if(dashed)p.setAttribute('stroke-dasharray','8 6');p.dataset.from267=from;p.dataset.to267=to;p.dataset.meaning267=meaning;svg.append(p);
   if(head.length){const h=document.createElementNS(NS,'polygon');h.setAttribute('points',head.map(x=>x.join(',')).join(' '));h.setAttribute('fill','var(--green)');h.dataset.arrow267='true';svg.append(h)}
   else for(const port of [s,t]){const c=document.createElementNS(NS,'circle');c.setAttribute('cx',port.x);c.setAttribute('cy',port.y);c.setAttribute('r','4');c.setAttribute('fill','var(--panel)');c.setAttribute('stroke','var(--green)');c.setAttribute('stroke-width','2');c.dataset.port267='true';svg.append(c)}
   records.push({from,to,meaning,dashed,start:s,end:t,head,d});
  }
  map.dataset.edges267=JSON.stringify(records);map.dataset.connected267='true';
 }
 function init(root){window.HAHAConnections265.init(root);observer?.disconnect();observer=new ResizeObserver(es=>es.forEach(x=>draw(x.target)));root.querySelectorAll('[data-connection267]').forEach(e=>{draw(e);observer.observe(e)})}
 const node=(id,title,body)=>`<div class="connection267-node" data-node267="${id}"><strong>${title}</strong><p>${body}</p></div>`;
 function specimen(){return `<div class="connector267-variants">
 <section class="connector267-variant"><h3>01 · Nhánh vuông, đường liền</h3><p><strong>Quan hệ đã xác định:</strong> Một nguồn liên hệ với nhiều nhóm; không ngụ ý thứ tự thực hiện.</p>${window.HAHAConnections265.specimen().split('<ul class="connector265-rules">')[0]}<p class="connector267-caption"><strong>Điểm rẽ chung:</strong> Các nhánh giao cùng một trục; không để đoạn nối rời.</p></section>
 <section class="connector267-variant"><h3>02 · Mũi tên có hướng</h3><p><strong>Trình tự đã chọn:</strong> Đọc nguồn → Dựng mẫu → Kiểm đầu ra.</p><div class="connection267-map connection267-arrow" data-connection267="arrow">${node('read','Đọc nguồn','Giữ dữ kiện và điều kiện')}${node('build','Dựng mẫu','Dùng cấu trúc phù hợp')}${node('check','Kiểm đầu ra','Đối chiếu trước khi dùng')}</div><p class="connector267-caption"><strong>Đầu mũi tên:</strong> Chỉ hướng từ nguồn tới đích; chạm đúng cạnh, thân nét dừng ở đáy đầu mũi tên.</p></section>
 <section class="connector267-variant"><h3>03 · Nét đứt có chú giải</h3><p><strong>Quan hệ đề xuất:</strong> Cần kiểm trước khi xác nhận.</p><div class="connection267-map connection267-dashed" data-connection267="dashed">${node('proposal','Nguồn đề xuất','Chưa xác nhận liên hệ')}${node('verify','Nhóm cần kiểm','Đối chiếu nguồn trước khi dùng')}</div><p class="connector267-caption"><strong>Chú giải nét đứt:</strong> Quan hệ đề xuất, chưa xác nhận. Không dùng nét đứt chỉ để trang trí hoặc giả báo một lỗi.</p></section>
 <section class="connector267-variant"><h3>04 · Đường cong giữa nhiều nút</h3><p><strong>Nhiều liên hệ:</strong> Giữ điểm nối tại cạnh nút và một hành lang riêng ở giữa hai cột.</p><div class="connection267-map connection267-curved" data-connection267="curved"><div class="connection267-column">${node('research','Nghiên cứu','Nguồn cho Thư viện')}${node('design','Thiết kế','Cho Thư viện; đề xuất áp dụng')}${node('content','Nội dung','Cho Ứng dụng')}</div><div class="connection267-column">${node('library','Thư viện','Nguồn và tài sản đã chọn')}${node('application','Ứng dụng','Mẫu đầu ra cần nội dung')}</div></div><p class="connector267-caption"><strong>Chú giải:</strong> Nét liền là quan hệ đã xác định; nét đứt từ Thiết kế tới Ứng dụng là đề xuất chưa xác nhận. Đường cong chỉ thay cách đi tuyến, không biểu thị hướng hay độ mạnh.</p></section>
 </div><div class="connector267-framework"><h3>Chọn tuyến theo ý nghĩa</h3><ul>
 <li><strong>Liền hay đứt:</strong> Chọn theo trạng thái quan hệ; mọi nét đứt cần nhãn hoặc chú giải ngay cạnh hình.</li>
 <li><strong>Có hướng hay không:</strong> Chỉ thêm đầu mũi tên khi nguồn và đích có hướng hoặc thứ tự thật. Hai chiều chỉ khi có quan hệ hai chiều được ghi rõ.</li>
 <li><strong>Vuông hay cong:</strong> Vuông hợp phân cấp và nhánh chung; cong hợp nhiều điểm nối giữa các nút. Không dùng độ cong để thêm nghĩa.</li>
 <li><strong>Điểm neo:</strong> Đo vị trí thực sau bố cục; nối giữa cạnh hoặc cổng được khai báo. Điểm nối rỗng giúp nhận ra đầu/cuối; một cổng dùng chung phải có cùng ý nghĩa.</li>
 <li><strong>Khoảng hở:</strong> Dành hành lang riêng, tối thiểu16px từ phần nét/cổng đã vẽ tới chữ; tính cả bán kính và viền cổng. Không xuyên nút, không chạm nhãn; tránh giao cắt, chia thành nhiều hình khi tuyến quá dày.</li>
 <li><strong>Nét và đầu mũi tên:</strong> Nét3px; nét đứt8px/cách6px; đầu mũi tên dài10px/rộng8px trong mẫu này. Giữ cùng thông số ở các tuyến cùng vai trò; kiểm lại sau thu phóng.</li>
 <li><strong>Màu và nhãn:</strong> Dùng màu đủ tương phản với nền; không dựa riêng vào màu. Nhãn giải thích ý nghĩa hoặc dùng chú giải chung khi cùng loại quan hệ.</li>
 <li><strong>Tự kiểm:</strong> Kiểm mọi nguồn/đích, đầu mũi tên, phần giao nhau, nhãn và viền khung ở bản rộng/hẹp, sáng/tối và sau đổi kích thước. Mẫu không bảo đảm mọi mạng nút tự động bố trí đẹp.</li>
 </ul></div>`}
 return {init,draw,specimen,edges};
})();
