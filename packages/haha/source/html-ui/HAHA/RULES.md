# HAHA — Quy tắc của bản thử 0.5

| Need | Path | Rule |
|---|---|---|
| Bóng đổ và lớp hiển thị | [SHADOW.md](SHADOW.md) | Chọn vai trò, nền nhận bóng và trạng thái. |
| Nhận diện và logo | [LOGO.md](LOGO.md) | Giữ byte nguồn và hình chữ; quy tắc mới chưa là chuẩn đã duyệt. |
| Màu và chữ | [TOKENS.md](TOKENS.md) | Đen–trắng, Be Vietnam Pro; số đo vai trò từ mô hình hiện tại. |
| Tìm đúng mẫu | [REUSE.md](REUSE.md) | Đọc đúng mã; không tải toàn bộ thư viện cho một việc. |
| Nội dung và nguồn | [CONTENT-GROUPS.md](CONTENT-GROUPS.md) | Giữ dữ kiện, đơn vị, nguồn, phạm vi và điều kiện. |
| Phần bổ sung | [STUDIO.md](STUDIO.md) | Moodboard, thumbnail và edit đang nhận phản hồi riêng. |

Một nhãn, số hoặc icon độc lập căn giữa theo cả hai trục của khung. Đoạn văn dài giữ căn đọc. Nhóm liền nhau dùng một đường bao ngoài, góc nối trong vuông; không tạo bóng riêng ở mối nối.

Khung HAHA phẳng, bo 0–4 px và không có bóng cứng. Nút chính đen/chữ trắng ở nền sáng; trắng/chữ đen ở nền tối. Trạng thái có cả hình/chữ, không chỉ màu. Giữ bàn phím, focus và giảm chuyển động.

Thư viện có 195 bản ghi; 42 mẫu ứng dụng và 2 mẫu Overview. Giữ chức năng, mã và loại tài sản; hình dáng, bố cục, nét và chuyển động phải phù hợp HAHA. Chỉ dùng logo chữ chính thức. Không có mascot hoặc biểu tượng nhận diện thứ hai trong phạm vi này.

Mọi dữ liệu mẫu là minh họa. Bản thử không chứng minh kết quả kinh doanh, năng lực vận hành hoặc quyền công khai. productionAllowed=false.

## Thích nghi hình ảnh và khoảng hở icon

Giữ mã, số lượng, loại và chức năng đã chọn. Hình dáng, nét, bố cục và chuyển động được thiết kế lại theo nhận diện HAHA; không phải giữ hình thức của hệ mẫu.

Chi tiết độc lập bên trong icon phải cách viền ngoài ít nhất2 đơn vị nét nhìn thấy trên master32 đơn vị khi hiển thị32px. Kiểm lại ở16/24/32px và hai chế độ màu; đơn giản hóa chi tiết nếu khoảng hở mất ở cỡ nhỏ. Nếp gấp, quai và vách chia là các mối nối cấu trúc có chủ ý. Dùng cùng một master trong bản tĩnh và chuyển động; kiểm cả các trạng thái biên.


## Bóng đổ theo chức năng

Đọc [SHADOW.md](SHADOW.md) trước khi dựng. Khối đọc và dữ liệu phẳng; nút hành động 2px, hộp nổi 4px. Màu bóng theo nền nhận bóng, kiểm lại ở trạng thái và kích thước đầu ra thật.


## Guide table application

Use the HAHA semantic reading grid: 1px separators, 16px cell padding, prose aligned to reading start, numeric columns aligned to end. Role tables reflow to labeled rows on narrow screens. Fixed slide tables retain authored type and column roles with visible row dividers. Reading frames stay flat; only action/floating roles use the bounded Shadow policy.
