---
name: dax
description: Apply the bundled DAX design system and voice from its exact version; preserve facts, identity and rights, inspect actual output. Portable delivery snapshot.
---
# DAX — Bộ hướng dẫn độc lập

## 1. Nguồn và phạm vi
Giải quyết đường dẫn từ thư mục của chính SKILL.md, không từ thư mục shell. Đọc `assets/design-system/packages/0.1.0-candidate-r23/DESIGN.md`, `USE.md`, `COMPOSITION.md` và `VOICE.md`; chỉ chọn họ quy tắc và vật liệu cần dùng. Phiên bản 0.1.0-candidate-r23; HTML bắt đầu ở assets/design-system/design-system.html. PDF nằm tại `assets/design-system/PDF/purpose-0.1.0-candidate-r23-20261024/documents`. Không cần nguồn OS hoặc dự án của bên tạo.

## 2. Áp dụng
Đọc references/current-production.md trước khi dựng. Dùng đúng hình học, phông, màu, mặt phẳng, bóng và trạng thái theo DESIGN.md, không chỉ đổi màu giao diện chung. Chọn thành phần và cấu trúc ghép từ chính thư viện; ghi vai trò/nơi dùng và ngoại lệ có lý do. Quy tắc của từng thương hiệu thắng ví dụ tổng quát. Giữ logo, tỷ lệ, dữ kiện sản phẩm, đơn vị, phủ định, điều kiện, nguồn và trạng thái minh họa/đề xuất.

## 3. Giọng và ngôn ngữ
VOICE.md của thương hiệu điều khiển phần viết. Giữ nét giọng phù hợp với người đọc, thể loại, tình huống và ngôn ngữ; không suy giọng từ màu. Bản còn là đề xuất không tự thành giọng đã học thật. Viết tiếng Việt tự nhiên, giữ đúng nghĩa; bản tiếng Anh dùng quy tắc của chính VOICE.md. Chọn lọc từ khóa in đậm, không in đậm cả đoạn. Voice chung được cung cấp riêng trong kho; chức năng học hồ sơ mới chỉ chạy khi phụ thuộc đó đã có và được phép, không phải điều kiện để đọc quy tắc thương hiệu đã đóng gói.

## 4. Kiểm và sửa
Chạy scripts/inspect_dax.py để kiểm tệp. Xem đầu ra thật ở kích thước đọc: nội dung, kiểu chữ, viền, khoảng đệm, bóng, dữ liệu, nhóm, trạng thái và màn hình/nền liên quan. Từng vùng phải có vật liệu đã chọn hoặc lý do không dùng. Nội dung dài phải đổi bố cục/tiếp trang; không cắt chữ hoặc co chữ để che lỗi. Kiểm thanh mục lục và các bản riêng sau khi sửa thành phần chung. Kiểm mã không chứng minh hình thức, tương tác hay menu nhận skill.

## 5. Dữ liệu khách và quyền
Giữ mẫu đóng gói bất biến. Đầu vào, đầu ra và thành phần mới ở `DAX-Design-work/input`, `output`, `library/custom` trong workspace thực. Thành phần mới có nguồn sửa được, bản xem, mục đích, quy tắc, phụ thuộc, quyền, phiên bản và kiểm trước khi lập chỉ mục. Không tự gửi/công bố, cài, ghi đè, đổi quyền hoặc mua dịch vụ. Gói công khai không cấp giấy phép mở cho thương hiệu. Chỉ báo hoàn tất từng bước có bằng chứng; giữ toàn bộ yêu cầu và quay lại đầu ra chính sau kiểm hỗ trợ.

## 6. Cài và sử dụng
Đọc SETUP.md của gói khi được yêu cầu cài. Cài mới cộng thêm vào .agents/skills/dax; xem trước và giữ cổng xác nhận của máy đích. Menu, tác vụ thật và nghiệm thu người nhận được kiểm riêng. Khi thiếu menu, agent có thể đọc trực tiếp chính SKILL.md này và báo rõ đường dùng đã thử.
