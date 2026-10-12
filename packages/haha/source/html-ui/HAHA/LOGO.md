# HAHA — Logo và cách ứng dụng

| Need | Path | Rule |
|---|---|---|
| Bóng đổ và lớp hiển thị | [SHADOW.md](SHADOW.md) | Chọn vai trò, nền nhận bóng và trạng thái. |
| Tỷ lệ | [ty-le](#ty-le) | Giữ tỷ lệ phần chữ HAHA. |
| Vùng an toàn | [vung-an-toan](#vung-an-toan) | Đo từ nét nhìn thấy; kiểm vùng an toàn. |
| Chọn nền | [phien-ban-theo-nen](#phien-ban-theo-nen) | Chọn bản đen hoặc trắng theo nền. |
| Ảnh, video, banner | [ung-dung](#ung-dung) | Kiểm vùng đặt trên ảnh và video thật. |
| Agent cần làm gì | [agent](#agent) | Khóa hình chữ, kiểm alpha; không nhận AI sai hình. |

Giữ nguyên logo HAHA. Đo phần chữ nhìn thấy để căn đặt và chọn phiên bản theo nền.

## ty-le

PNG gốc 1920×1080. Logo đen nhìn thấy ở hộp (421,337)–(1499,682), 1078×345 px, khoảng3,125:1. Đo phần chữ để căn đặt; canvas không phải vùng an toàn. Logo trắng có hộp riêng (303,329)–(1617,750),1314×421 px; không tái dùng crop của logo đen.

## vung-an-toan

H = chiều cao nét nhìn thấy. Đề xuất 1H ở mỗi cạnh cho bản thử; chưa phải số đo HAHA chính thức. Kích thước tối thiểu phải kiểm tại đầu ra thật; không suy kích thước in tối thiểu từ mẫu HTML.

## phien-ban-theo-nen

Logo đen: assets/logos/Logo white.png. Logo trắng: assets/logos/Logo black.png. Chọn theo màu thật, không suy từ tên file. Đen trên nền sáng, trắng trên nền tối; giữ opacity1, tỷ lệ và nét chữ. Không recolor, retype hoặc thêm bóng/viền.

## ung-dung

Không nền đỡ khi vùng đặt đủ yên và tương phản rõ. Chuyển vị trí, đổi bản đen/trắng trước. Logo tránh mặt, tiêu đề, phần dữ liệu và phụ đề. Trên HTML, PNG đen/white canvas dùng mix-blend-mode:multiply; PNG trắng/black canvas dùng screen. Byte và hình chữ gốc giữ nguyên; đây là hòa trộn hiển thị, không phải PNG có alpha. Không export tệp gốc có nền kín và gọi nó là trong suốt.

Dùng nền đỡ đen/trắng có chủ đích khi nền thay sáng–tối hoặc không còn vùng đặt đủ rõ. Chừa vùng an toàn quanh chữ; nền đỡ là một phần bố cục, không phải mặc định cho mọi logo. Kiểm tất cả khung video thay nền và kích thước hiển thị nhỏ nhất.

## agent

1. Chọn nguồn gốc theo hash/variant; contain và opacity1; không redraw hoặc gõ lại chữ.
2. Đo hộp nét nhìn thấy; vùng an toàn1H là đề xuất của bản thử, không gán official status.
3. Nếu cần alpha thật: ưu tiên vector/PNG trong suốt được xác nhận; không nhúng canvas trắng như bản alpha.
4. AI chỉ được tách nền từ nguồn khóa. Kiểm alpha0–255, mọi lỗ chữ, contour, khoảng cách, tỷ lệ và nền sáng/tối/photo. Không nhận khi drift.
5. Chỉ nhận bản tách nền khi hình chữ, khoảng cách và tỷ lệ khớp nguồn khóa; từ chối kết quả sai hình.
6. PNG nguồn + multiply/screen chỉ dành HTML. Đầu ra cần alpha/vector chưa có nguồn đạt chuẩn: báo thiếu và giữ bước xuất phụ thuộc ở trạng thái chưa xác nhận.
7. Đổi vị trí/variant trước; thêm backing chỉ khi kiểm tương phản thật vẫn thất bại. Ghi lựa chọn, file/hash và nơi dùng trong hồ sơ nhiệm vụ.

Quyền công khai, bản vector/alpha chính thức, lockup và kích thước in tối thiểu chưa xác nhận. Bản này để phản hồi cục bộ, productionAllowed=false.


## Bóng đổ theo chức năng

Đọc [SHADOW.md](SHADOW.md) trước khi dựng. Khối đọc và dữ liệu phẳng; nút hành động 2px, hộp nổi 4px. Màu bóng theo nền nhận bóng, kiểm lại ở trạng thái và kích thước đầu ra thật.
