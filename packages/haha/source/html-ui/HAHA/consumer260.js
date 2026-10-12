/* Apply accepted Overview body emphasis to the selected explanatory fixtures.
 * Exact quotations, machine payloads, quantitative cells and existing markup are preserved. */
(()=>{const terms=['vai trò chữ','tổ hợp','anatomy','phạm vi','nguồn','đơn vị','dữ kiện','điều kiện','thứ tự đọc','câu hỏi','nhất quán','giới hạn','trạng thái','chức năng','chú giải','hành động','dữ liệu','chất liệu','hình dáng','cách kết hợp','phần chọn','nhãn chính','nhãn luôn hiện','nhãn','bàn phím','phím mũi tên','vùng bấm','định hướng','ngọn lửa','biểu trưng','giữ yên','đóng bằng Escape','giảm chuyển động','cùng chiều cao'];
function emphasize(text){let n=0;return text.replace(new RegExp(terms.join('|'),'gi'),x=>++n<=3?'<strong>'+x+'</strong>':x)}
function apply(root){for(const p of root.querySelectorAll('p')){if(p.children.length||p.closest('pre,table,blockquote,.k241-quote,.k241-command')||p.matches('.note,.chart-note,.discovery259-result p'))continue;p.innerHTML=emphasize(p.innerHTML)}}
window.HAHAConsumer260={emphasize,apply};})();
