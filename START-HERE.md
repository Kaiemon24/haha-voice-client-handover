# Cài HAHA + Voice bằng một prompt

Gửi cho agent có quyền đọc repository GitHub riêng tư này:

```text
Đọc INSTALL.md trong repository Kaiemon24/haha-voice-client-handover, phiên bản v1.1.0. Tải gói HAHA (đã gồm Voice) và kiểm SHA-256 theo RELEASES.json tại commit được khóa. Kiểm OS/skill hiện có, hỏi tôi workspace đích, chạy preview và hướng dẫn tôi xác nhận trước apply. Đăng ký skill theo cơ chế ứng dụng đang dùng để chọn HAHA/Voice trong menu; kiểm danh mục và một tác vụ thật. Giải thích cách dùng HTML/MD và tạo/lưu element theo LIBRARY-ELEMENTS.md. Không ghi đè skill/router có sẵn, cài toàn máy, đổi quyền hoặc gọi mô hình ngoài khi chưa được tôi cho phép.
```

Một prompt khởi động toàn quy trình; agent vẫn hỏi đích và xử lý xung đột cần quyết định. Repository riêng tư: khách cần quyền GitHub được người giao cấp riêng. Không có quyền thì agent dừng; không xin token trong chat.
