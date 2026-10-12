# HAHA — Bóng đổ và lớp hiển thị

| Need | Path | Rule |
|---|---|---|
| Chọn vai trò và thông số | [Thông số](#thong-so) | Đọc trước khi dựng thành phần. |
| Chọn nền và trạng thái | [Nền và trạng thái](#nen-va-trang-thai) | Dựa vào nền nhận bóng thực tế. |
| Áp dụng theo đầu ra | [Đầu ra](#dau-ra) | Kiểm tại kích thước xuất thật. |
| Kiểm mẫu trực tiếp | [HTML](design-system.html#shadow-guideline) | Có sáng/tối và vùng sáng lồng trong nền tối. |
| Giá trị nguồn | [Mô hình](semantic241.json) | depthPolicy; cùng nguồn với HTML và CSS. |

## thong-so

Phong cách HAHA: bóng cứng mảnh, đơn sắc; ưu tiên mặt phẳng và tương phản chữ. Đây là thông số triển khai đề xuất, không phải quy định được trích từ brandkit.

| Vai trò | x / y / blur / spread | Opacity | Dùng cho |
|---|---|---|---|
| flat | 0 / 0 / 0 / 0 | 0 | Thẻ đọc, logo, ảnh, icon, nhãn, số, tab, điều hướng, input và dấu dữ liệu. |
| control | 2 / 2 / 0 / 0 px | 1 | Nút hành động. |
| hover | 3 / 3 / 0 / 0 px | 1 | Nút hành động đang hover. |
| floating | 4 / 4 / 0 / 0 px | 1 | Dialog và lớp đồ họa nổi có mục đích. |

## nen-va-trang-thai

Nền sáng: #000000. Nền tối: #FFFFFF. Outline và hard shadow cùng màu trung tính của nền nhận bóng. Khai báo data-depth-surface="light" hoặc "dark" tại vùng có nền riêng; không suy từ theme toàn trang hay fill của nút. Giữ fill và màu chữ theo TOKENS.md.

Default2px; hover3px; pressed/disabled0px; loading2px. Focus giữ bóng default và vòng2px, offset4px; tab chọn vẫn phẳng. Không dịch bố cục khi tương tác. Không để selector blanket box-shadow:none loại bỏ cả focus hoặc lớp nổi. Print/forced-colors bỏ bóng, giữ viền và focus.

Các phần nối sát nhau dùng một silhouette ngoài, một bóng của lớp nếu cần nổi; cạnh nối trong vuông. Không nhân shadow từng phân đoạn. Thẻ nhiều dòng theo căn đọc; nhãn đơn trong shape giữ căn giữa hai chiều.

## dau-ra

Website/App dùng control2 và floating4; vùng đọc phẳng. Slide/PDF mặc định nội dung và dữ liệu phẳng; callout thật sự nằm trên một lớp mới dùng silhouette4px. Design/Edit không thêm shadow vào logo, người dẫn hoặc ảnh. Overlay đồ họa có chức năng có thể dùng4px, giữ vùng an toàn và phụ đề.

Khoảng trống đã vẽ ít nhất16px; tính cả viền, bóng và vòng focus. Kiểm nested background, long label, width390/1152, theme sáng/tối, hover/pressed/focus/disabled, dialog và đối chiếu các sibling cùng chức năng. Giá trị CSS không tự chứng minh pixel hoặc quyền sử dụng. Không nhận bản thử vào thư viện chính thức hay gọi PDF/Slide xuất đạt nếu chỉ xem HTML.

Khi đổi --depth-ink tại nền nhận bóng, tính lại các tuple --depth-control/--depth-hover/--depth-floating tại chính vùng đó; không kế thừa tuple đã resolve màu từ :root. Loading giữ2px ngay cả khi nút tạm disabled để chặn gửi lặp.
