# HAHA — Bóng đổ theo vai trò

Trạng thái: đề xuất theo yêu cầu mới của người dùng, chưa kích hoạt. Các giá trị triển khai dưới đây không được coi là quy định gốc của bộ nhận diện nguồn.

| Cần đọc | Nguồn | Cách dùng |
|---|---|---|
| Chọn thông số | [Thông số](#thông-số) | Chọn theo vai trò, không đoán theo từng vật thể. |
| Chọn nền nhận | [Nền và trạng thái](#nền-và-trạng-thái) | Vùng sáng lồng trong trang tối vẫn dùng màu bóng của vùng sáng. |
| Xem ví dụ | [Tổng quan](design-system.html#shadow-guideline) | Thử nút, nền sáng/tối và đọc bảng thông số. |
| Dùng giá trị máy đọc | [Mô hình](shadow47.model.json) | `depthPolicy` là nguồn của HTML, CSS và hướng dẫn này. |

## Thông số

Mỗi thành phần hoặc bố cục độc lập luôn có một bóng trên lớp chịu trách nhiệm. HAHA dùng bóng cứng, giữ nguyên màu, chữ, hình, dữ liệu và chức năng của nguồn.

| Vai trò | x / y / độ nhòe / độ lan | Độ đậm |
|---|---|---|
| `control` · Điều khiển | 2 / 2 / 0 / 0 px | 1 |
| `surface` · Khối nội dung | 4 / 4 / 0 / 0 px | 1 |
| `floating` · Hộp nổi | 4 / 4 / 0 / 0 px | 1 |
| `hover` · Rê chuột | 3 / 3 / 0 / 0 px | 1 |
| `pressed` · Nhấn hoặc vô hiệu hóa | 1 / 1 / 0 / 0 px | 1 |

`x` và `y` là khoảng lệch ngang/dọc; độ nhòe làm mềm mép bóng; độ lan nới đường bao bóng; độ đậm từ 0 đến 1. Đơn vị `px` là điểm ảnh trong bản HTML. Bóng cứng dùng độ nhòe và độ lan bằng 0.

## Nền và trạng thái

- Nền sáng: nền mẫu #FFFFFF, màu bóng #000000.
- Nền tối: nền mẫu #111111, màu bóng #FFFFFF.
- Nút, ô nhập, lựa chọn và công tắc dùng `control`; rê chuột dùng `hover`; nhấn hoặc vô hiệu hóa dùng `pressed`, vẫn khác không.
- Đang xử lý dùng `control`, kể cả khi tạm khóa để tránh gửi lặp. Đang chọn hoặc có lỗi giữ bóng điều khiển và dấu nhận biết vốn có; bóng không thay thế ý nghĩa trạng thái.
- Bàn phím có viền riêng rộng 2px, cách mép 4px. Không dùng bóng làm dấu bàn phím duy nhất.

Màu bóng theo nền nhận thực tế, không chỉ theo nền toàn trang. Vùng sáng nằm trong trang tối dùng màu bóng sáng; bóng không được làm chữ nhạt hoặc đổi màu dữ liệu.

## Lớp chịu trách nhiệm

- Thẻ đọc, bảng, giao diện, khung biểu đồ và bố cục ứng dụng dùng một bóng `surface` ở lớp ngoài phù hợp.
- Nút đổi nền, mục lục và dừng chuyển động có bóng riêng. Các tab điều hướng chính dùng chung bóng của khung đầu trang; không nhân bóng trên từng tab.
- Thẻ mục chính trong mục lục có bóng; các liên kết con nằm trong cùng thẻ, giữ phẳng. Giữ nguyên cấu trúc, số mục, đường dẫn và bàn phím.
- Hộp thoại, hộp thông tin và lớp nổi dùng `floating`.
- Một nhóm nối liền có một đường bao và một bóng chung. Không đổ bóng lên mọi lớp lồng hoặc từng phân đoạn.
- Dấu dữ liệu, trục, nhãn và chữ không có bóng riêng; khung chứa biểu đồ chịu trách nhiệm. Giữ nguyên đường nét, thang đo, số và vị trí dữ liệu.
- Logo, ảnh và nét biểu tượng giữ nguồn; lớp bố cục nhận bóng. Không đổi pixel ảnh hoặc vẽ lại nhận diện để tạo độ sâu.

Chừa ít nhất 16px phần đã vẽ giữa các khối độc lập, tính cả bóng và viền bàn phím. Kiểm việc cắt bóng ở khung chứa và mép cửa sổ.

## Áp dụng theo đầu ra

Website, ứng dụng, slide, PDF, thiết kế và biên tập dùng cùng vai trò. Khối trên slide dùng nền của chính trang trình chiếu. Tài liệu giữ khả năng đọc và cuộn đến nội dung cuối; dữ liệu vẫn rõ khi in.

Giữ bóng ở bản in. Chỉ chế độ màu tương phản do hệ thống cưỡng bức được thay bóng bằng viền hệ thống để phục vụ khả năng truy cập. Đây là ngoại lệ tiếp cận, không phải một kiểu phẳng tự chọn.

HTML là trang được trình duyệt đọc; CSS quy định hình thức; PDF là tài liệu có trang cố định. Xem HTML hoặc đọc đúng giá trị CSS không chứng minh bản xuất PDF/slide thật đã đạt. Kiểm bản xuất riêng trước khi đưa ra tuyên bố tương ứng.

## Kiểm trước khi dùng

Đối chiếu cùng thông số giữa mô hình, Tổng quan, Thư viện, Ứng dụng và mẫu mở riêng. Kiểm nền sáng/tối, vùng sáng lồng trong trang tối, màn hình rộng/hẹp, rê chuột, nhấn, vô hiệu hóa, đang xử lý, bàn phím, bản in và chế độ tương phản hệ thống. Giữ nguyên dữ liệu, số lượng, nhận diện và hành vi gốc. Bản thử không tự cấp quyền kích hoạt, đăng ký vào thư viện hoặc xuất bản.
