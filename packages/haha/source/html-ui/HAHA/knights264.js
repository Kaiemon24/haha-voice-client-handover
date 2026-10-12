/* Five neutral, functional role masters; IDs preserve departmental functions. */
window.HAHAKnights264=(()=>{
const items=[
 ['automation','AI automation','ink','Điều phối công việc','Các nút nối thể hiện công việc được điều phối.'],
 ['design','Design','ink','Thiết kế hình ảnh','Khung và nét vẽ thể hiện công việc thiết kế.'],
 ['html','HTML Motion graphic','ink','Giao diện và chuyển động','Cửa sổ và dấu lệnh thể hiện giao diện có hành động.'],
 ['video','Video','ink','Sản xuất video','Khung hình và nút phát thể hiện công việc video.'],
 ['content','Content','ink','Nội dung và lời viết','Trang và dòng chữ thể hiện công việc viết nội dung.']
];
const roles={
 automation:'M16 5V12M7 20V16H25V20M16 16V20',
 design:'M6 6H26V26H6ZM11 21L12 17L19 10L22 13L15 20Z',
 html:'M4 6H28V26H4ZM4 11H28M12 16L8 19L12 22M20 16L24 19L20 22',
 video:'M4 7H28V25H4ZM13 12L21 16L13 21ZM8 7V25M24 7V25',
 content:'M7 3H22L27 8V29H7ZM22 3V8H27M11 13H23M11 18H23M11 23H20'
};
function svg(id){const d=items.find(x=>x[0]===id),path=roles[id];if(!d)throw Error('Unknown agent role');const detail=id==='automation'?'<rect x="12" y="2" width="8" height="7"/><rect x="3" y="21" width="8" height="8"/><rect x="12" y="21" width="8" height="8"/><rect x="21" y="21" width="8" height="8"/>':'';return `<svg class="symbol motion-icon knight264 agent-role" data-motion="agent-role-${id}" data-code="ink" data-role="${id}" viewBox="0 0 32 32" role="img" aria-label="Vai trò ${d[1]} · ${d[3]}"><g class="moving knight264-head" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><path d="${path}"/>${detail}</g></svg>`}
function gallery(register,card){return '<p class="knight264-intro"><strong>Năm vai trò chức năng:</strong> Mỗi vai trò có biểu tượng và nhãn riêng. Chuyển động nhẹ giúp nhận ra mẫu; không báo công việc đã hoàn tất.</p><div class="grid knight264-grid">'+items.map(d=>{const id='agent-role-'+d[0];register(id,'Vai trò · '+d[1],d[3],'svg-motion',{source:'knights264.js',originalAuthoring:'HAHA local neutral SVG draft',department:d[1],paletteRole:'ink',paletteValue:'#111111',geometryFamily:'functional-role-'+d[0],expression:d[4],states:['Nghỉ','Nhịp nhẹ','Trở về'],dependencies:['knights264.js','knights264.css'],usage:{use:'Đại diện nhóm bằng biểu tượng chức năng và nhãn rõ.',avoid:'Không dùng chuyển động làm chứng cứ trạng thái công việc.',states:['Nghỉ','Nhịp nhẹ','Trở về']}});return card(id,'Vai trò · '+d[1],d[4],svg(d[0]),'<p class="note"><strong>Vai trò:</strong> '+d[3]+'</p><button data-pause="'+id+'" aria-pressed="true">Dừng mẫu</button>')}).join('')+'</div>'}
return {items,roles,svg,gallery};})();
