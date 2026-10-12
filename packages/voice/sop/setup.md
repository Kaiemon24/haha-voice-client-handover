# Hướng dẫn tái tạo và cài đặt

## P · Chuẩn bị
Giải nén toàn bộ ZIP, giữ nguyên cấu trúc. Chọn một thư mục công việc do khách quản lý. Có Python 3.10 trở lên; không cần thư viện Python bên ngoài cho bộ cài hoặc Voice. Trình duyệt hiện đại dùng để xem HTML. Tài khoản Codex và quyền dùng nội dung do khách quản lý.

## A · Kiểm gói
Đọc manifest.json, checksums.sha256 và quyền sử dụng. Chạy --preview với đường dẫn thật của khách. Mở installer/install-preview.md. Bộ cài chỉ tạo tệp mới, giữ tệp giống mã kiểm và từ chối tệp khác nội dung, đường dẫn thoát hoặc liên kết thư mục. Đừng dùng --apply trước khi đọc bản xem trước.

## C · Cài và nối sử dụng
Sau khi khách xác nhận đúng thư mục, chạy --apply --confirm. Bộ cài đọc lại mã kiểm đích, không sửa các chỉ dẫn hệ thống chung, không tạo liên kết và không tự đồng bộ runtime. Mở chat Codex mới, kiểm tên skill và yêu cầu một đầu ra nhỏ. Nếu menu không hiện, yêu cầu agent đọc trực tiếp SKILL.md đã cài. Việc nhận skill trong giao diện phụ thuộc phiên bản ứng dụng; gói không cài hoặc nâng cấp Codex.

## K · Giữ bản có thể tái sử dụng
Voice: chọn giọng viết hoặc nói, EN/VI hoặc hồ sơ thương hiệu, giữ sự thật và quyền hành động. Kiểm đầu ra thực tế trước khi gửi. Giữ bản cũ để so sánh; một cập nhật khác nội dung cần kế hoạch nâng cấp riêng. Ghi nhận phiên bản, nhiệm vụ thử, đường dẫn cài và kết quả máy khách.

## Mẫu thử sau cài
Thử một đoạn giải thích tiếng Việt cho đội triển khai và một đoạn tiếng Anh, mỗi đoạn có dữ kiện khóa và hành động rõ. Yêu cầu agent đọc .codex/skills/Content/voice/SKILL.md, chọn nền tảng EN/VI, chạy kiểm tra bằng các script trong gói và đọc lại nghĩa. Kiểm rằng đầu ra không thêm kết quả, cam kết hoặc quyền hành động. Nếu có thương hiệu, dùng hồ sơ đã cung cấp hoặc tạo bản đề xuất có ghi rõ giới hạn. HAHA chỉ là tích hợp tùy chọn khi khách đã cài gói HAHA riêng. Đây là thử nghiệm khách cần làm, không phải kết quả cài đã xảy ra trên máy khách.

## Khi bộ cài dừng
Hash sai: giải nén lại bản ZIP nguyên vẹn. Xung đột: giữ tệp hiện tại, chọn thư mục mới hoặc lập bản nâng cấp; không đổi hash cho qua. Preview cũ: chạy lại --preview. Không có Python: chuẩn bị runtime từ nguồn chính thức theo quy trình của khách; gói không tự tải hoặc cài. Clipboard bị chặn: HTML đưa văn bản để chọn và sao chép thủ công.

## Sơ đồ và bản đồ bàn giao
Sơ đồ thao tác nằm trong handover/BOD-WORKFLOW-AGENT-FLOWCHART.drawio và PNG cùng thư mục. Bản đồ MOT-HANDOVER-MAP.md liệt kê chức năng từng phần. Tệp .original.txt là bản nguồn bất động để truy nguyên, không phải skill đang chạy.

## Lệnh xem trước
python installer/install_client_package.py --target-root "<thu-muc-cong-viec-cua-khach>" --preview

## Lệnh cài sau khi xác nhận
python installer/install_client_package.py --target-root "<thu-muc-cong-viec-cua-khach>" --apply --confirm
