# HAHA 1.2.11-reader + Voice — bản bàn giao độc lập

Dùng dữ liệu HAHA 1.2.11-reader mới nhất và bốn PDF theo công việc. Voice được giữ nguyên từ bản bàn giao 1.1.1; không sửa OS Voice của bên giao hoặc ghi đè Voice khác mã trên máy khách.

Đọc SETUP.md; các tệp cài đặt đầy đủ nằm trong packages/haha. Kiểm archive/checksums, chọn đúng workspace và xem trước. Bộ cài mặc định thêm .agents/skills/haha và .agents/skills/voice; không sửa router/toàn máy. Tệp trùng khác mã là xung đột và cần phạm vi nâng cấp riêng.

HAHA: mở packages/haha/source/skill/haha/SKILL.md; tài nguyên có một nơi tại packages/haha/source/skill/haha/assets/design-system/package, đầu vào/đầu ra và thư viện tùy chỉnh ở HAHA-Voice-work. HTML là thư viện trực quan; Markdown là quy tắc; bốn PDF ở packages/haha/source/skill/haha/assets/design-system/documents/index.html. Mẫu nguồn bất biến; tạo extension có nguồn sửa được, preview, quyền, phụ thuộc, phiên bản và kiểm tra riêng.

Bản chụp không cần KAI OS hay thư mục máy dựng. Python 3.10+ và thư viện chuẩn dùng bộ cài/kiểm; Codex và trình duyệt hiện có dùng tác vụ thực tế. Không tự cài công cụ/đổi quyền/xuất bản/gửi thay khách. Giữ CLIENT-USE và giấy phép font; kho công khai không cấp giấy phép mở cho thương hiệu.

Bốn trạng thái tách riêng: đủ tệp; ứng dụng nhận skill; tác vụ thật; người nhận nghiệm thu. Local fixture không chứng minh ba trạng thái sau. Kiểm tra đúng tệp và mã kiểm từ URL bản phát hành đã ghim trước khi sử dụng.
