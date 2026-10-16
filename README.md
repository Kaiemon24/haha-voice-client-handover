# HAHA + Voice — bàn giao độc lập

Bản hiện hành: **1.1.1**. Mở thư mục làm việc trong Codex rồi dán yêu cầu tại [START-HERE.md](START-HERE.md). Agent tự kiểm môi trường, tải đúng gói, tạo cây skill và tài nguyên, thử sử dụng rồi hướng dẫn ngắn. Chỉ hỏi khi thiếu nơi lưu, gặp xung đột hoặc cần quyền riêng.

- [Bản phát hành 1.1.1](https://github.com/Kaiemon24/haha-voice-client-handover/releases/tag/v1.1.1): một ZIP đã gồm HAHA và Voice.
- [Hướng dẫn tự thiết lập](SETUP.md), [cài và phục hồi](INSTALL.md), [tài sản mở rộng](LIBRARY-ELEMENTS.md).
- Mã ZIP và dung lượng chính xác trong [RELEASES.json](RELEASES.json).
- Đích mặc định: `.agents/skills/haha` và `.agents/skills/voice` trong workspace đã xác định. Tài nguyên HAHA nằm trong skill haha; dữ liệu khách ở `HAHA-Voice-work`.
- Giữ nhận diện và nội dung mẫu gốc; bản 1.1.1 tổ chức lại đích cài và cập nhật đường dẫn/metadata kiểm tra. Bộ cài không ghi đè nội dung khác mã.

Đã kiểm cơ chế cài và tài nguyên cục bộ. Menu, tác vụ thật và nghiệm thu trên máy khách còn chờ; thư mục tồn tại không chứng minh ứng dụng đã nhận skill. Không bảo đảm mọi môi trường cài được khi thiếu quyền hoặc công cụ.

## Nguồn và phiên bản trước

Source đầy đủ của 1.1.1 nằm trong ZIP mới. `packages/haha`, `packages/voice` và release v1.1.0 được giữ làm lịch sử; không dùng chúng thay ZIP 1.1.1. Gói là ảnh chụp bàn giao, không cần OS của bên dựng. Quyền tài sản theo CLIENT-USE.md; kho công khai không cấp giấy phép mở cho thương hiệu. Không kèm bí mật, hồ sơ trình duyệt hay dữ liệu khách.
