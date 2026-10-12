---
name: haha
description: Apply the bundled HAHA design system and brand voice to visual and written client tasks. Read only the needed asset/rule family, preserve real HAHA identity and verify the actual output. Standalone delivery snapshot; no source OS required.
---
# HAHA — Hướng dẫn độc lập

## Chọn dữ liệu

Tìm `Brand asset/HAHA/Design system` trong workspace được khách chọn khi cài. Dùng `scripts/inspect_haha.py` để kiểm manifest và phiên bản; có thể truyền `--brand-root` khi gói chưa cài. Đọc bảng đường dẫn mở đầu `DESIGN.md`, sau đó chỉ mở phần/quy tắc/mẫu phù hợp nhiệm vụ. Không quét toàn bộ máy, chọn thư mục mới nhất hay lấy nhận diện thương hiệu khác thay HAHA.

## Áp dụng

Đọc `references/apply-design.md` và `references/quality-checks.md` trước khi dựng. Dùng vật liệu và thành phần thật của HAHA: font, vai trò màu, chữ đậm, hình học, bảng có khung/khoảng đệm, trạng thái, nền và bóng theo `SHADOW.md`. Với điều hướng, đọc `NAVIGATION.md`: nhóm chính dùng thẻ có bóng2px; mục con dùng dấu đầu dòng, thụt thêm20px và không có bóng riêng. Mỗi vùng nội dung phải có mẫu được chọn hoặc lý do không dùng. Giữ chức năng và loại mẫu; được thay đổi hình ảnh/bố cục theo nhiệm vụ khi vẫn phù hợp HAHA.

Với nội dung đọc/nghe, `VOICE.md` trong bộ HAHA là hướng dẫn thương hiệu. Voice chung đi kèm trong the bundled `voice` sibling selected during installation bổ sung phương pháp EN/VI, kiểm nghĩa và tình huống; không thay giọng thương hiệu đã duyệt. Voice nói ở đây là cách viết kịch bản để nói, không phải tạo âm thanh.

Logo giữ hình chữ gốc, tỷ lệ và vùng đặt theo `LOGO.md`; không vẽ lại, gõ lại hay tự đặt mascot. Hình AI là minh họa. Đọc `CLIENT-USE.md` về phạm vi tài sản và các giới hạn alpha/in/video. Nguồn nghiên cứu không phải tài sản HAHA được phép phân phối lại.

## Kiểm trước bàn giao

Kiểm danh sách vùng và nơi dùng thực tế: trang chính, trang riêng, chi tiết mở, nội dung dài, bàn phím, màn hình hẹp và chế độ màu khi có. Đối chiếu thuộc tính đã hiển thị, không chỉ khai báo token hay đếm đủ mẫu. Khối dữ liệu giữ số, đơn vị, trục và nguồn; không đổi hình mang giá trị để sửa bố cục. Xem ảnh/HTML/PDF/trang trình chiếu thật đúng kích thước. Sửa lỗi vật liệu, viền, khoảng cách, chữ, tương phản hoặc clipping rồi kiểm lại các trường hợp tương tự.

Không báo đã lưu/gửi/thanh toán/cài/xuất bản khi chưa có thao tác thật và đọc lại kết quả. Chỉ tác động ngoài workspace/cài máy khách/đổi quyền hoặc gửi người khác khi khách đã cho phép đúng phạm vi. Hướng dẫn này không cài công cụ, mua gói, thay quyền hay thay OS.

## Tệp đi kèm

`references/apply-design.md`, `references/quality-checks.md`, `scripts/inspect_haha.py`, bộ HAHA trong Brand asset, và Voice đi kèm. Không cần Design, Teacher Mode, Skill Manager hay thư mục dự án của bên tạo để chạy.

## Client installation and discovery

For explicit install/adopt/integrate requests, read `references/client-integration.md`. This delivery defaults to workspace `.agents/skills`; preserve the client OS routing and approval rules. Ordinary application does not rerun setup.

For new reusable visual elements, read `references/library-elements.md`; keep baseline source immutable and index only verified, approved client extensions.
