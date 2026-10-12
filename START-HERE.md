# Bắt đầu cài HAHA + Voice

Sao chép toàn bộ prompt dưới đây, dán vào agent bạn đang dùng và trả lời tối đa ba câu hỏi. Agent tự kiểm môi trường, đưa bản xem trước rồi mới cài phần bạn xác nhận.

## Prompt cài đặt

```text
Cài HAHA + Voice theo https://github.com/Kaiemon24/haha-voice-client-handover/blob/f0110b2b9285a13529d43145453eca26db771c6b/SETUP.md và INSTALL.md cùng commit. Gói HAHA 1.1.0 đã gồm Voice; tải release v1.1.0 và kiểm SHA-256 theo RELEASES.json trước khi chạy.
Tự kiểm ứng dụng, OS, skill và công cụ hiện có. Hỏi tối đa 3 câu, dùng lại đáp án đã có:
1. Tôi muốn lưu bộ HAHA và tài sản mới ở thư mục nào?
2. Tôi muốn nối vào OS hiện có hay dùng riêng trong thư mục này?
3. Tôi xác nhận bản xem trước để bạn cài và tích hợp không?
Trước câu 3, trình đúng đường dẫn, thay đổi skill/router/thư viện, xung đột và công cụ cần cài với nguồn, vị trí, quyền, chi phí. Sau xác nhận, chỉ áp dụng phần được duyệt và OS cho phép; không ghi đè hoặc tự đổi quyền. Nếu phát sinh phạm vi mới, dừng nhánh đó.
Kiểm nhận skill và một tác vụ thật; hướng dẫn gọi /haha, /voice theo ứng dụng, dùng DESIGN.md/HTML và tạo/lưu tài sản theo LIBRARY-ELEMENTS.md. Trả nơi lưu, kết quả kiểm và bước còn chờ.
```

## Các bước bạn sẽ thấy

1. Chọn nơi lưu bộ HAHA và tài sản mới.
2. Chọn nối vào OS hiện có hoặc dùng riêng.
3. Xem đường dẫn, thay đổi và công cụ cần thiết; xác nhận để cài.

Sau cài, agent hướng dẫn chọn skill, mở design system và lưu tài sản mới. Nếu môi trường không hỗ trợ hoặc cần quyền mới ngoài bản đã duyệt, phần đó được ghi rõ là chưa thiết lập.

## Chi tiết khi cần

- [Quy trình ba câu hỏi](SETUP.md).
- [Cài đặt, gọi skill và tích hợp OS](INSTALL.md).
- [Tạo và lưu tài sản mới](LIBRARY-ELEMENTS.md).
- [Release v1.1.0](https://github.com/Kaiemon24/haha-voice-client-handover/releases/tag/v1.1.0).

Repository công khai, tải không cần tài khoản GitHub. Hướng dẫn được ghim theo commit; ZIP phát hành và mã kiểm giữ nguyên.
