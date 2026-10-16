# Cài HAHA + Voice 1.1.1 — agent tự thiết lập

## Bản phát hành cố định cần tải

- Release: [v1.1.1](https://github.com/Kaiemon24/haha-voice-client-handover/releases/tag/v1.1.1).
- ZIP: [HAHA-Voice-1.1.1-client.zip](https://github.com/Kaiemon24/haha-voice-client-handover/releases/download/v1.1.1/HAHA-Voice-1.1.1-client.zip). Gói này đã gồm cả HAHA và Voice; không tải thêm Voice riêng.
- Dung lượng: 16783261 byte.
- SHA-256 độc lập từ bản bàn giao: `cddcc1fe8d1510ff33f55ae9e78254e3b612ead1ba3ffe6287a6114271e4d693`.

Agent tải đúng URL này vào thư mục nguồn tạm thuộc tác vụ, kiểm SHA-256 trước khi giải nén hoặc chạy; đọc bộ cài và kiểm toàn bộ checksums.sha256. Không dùng latest, không thay ZIP khác hoặc tự lấy packages/haha cũ từ nhánh main. Thư mục packages/ trong kho giữ source lịch sử 1.1.0; source của 1.1.1 nằm đầy đủ trong ZIP mới. Tải công khai không cần tài khoản GitHub, Git hay GitHub CLI.

Bạn chỉ cần mở đúng thư mục làm việc trong Codex rồi dán prompt được bàn giao. Agent thực hiện các bước dưới đây; chỉ cần bạn trả lời khi thiếu thông tin, có xung đột hoặc hệ thống yêu cầu quyền riêng.

## Kết quả sau khi cài

```text
WORKSPACE/
  .agents/skills/haha/
    SKILL.md
    agents/openai.yaml
    references/
    scripts/inspect_haha.py
    assets/design-system/DESIGN.md
    assets/design-system/VOICE.md
    assets/design-system/design-system.html
    assets/design-system/assets/
  .agents/skills/voice/
    SKILL.md
    references/
    functions/
    scripts/
  HAHA-Voice-work/
    input/
    output/
    library/custom/
```

WORKSPACE là thư mục người dùng đã mở hoặc chỉ định rõ trong ứng dụng, không phải một thư mục shell tình cờ. Chỉ hỏi nơi lưu khi không xác định được đúng thư mục. Tài nguyên thiết kế và font nằm trong cây skill haha; Voice là skill đi kèm riêng. Không cần KAI OS, skill Design mẹ hay thư mục máy dựng. Không chép thêm một bản Brand asset hoặc skill toàn máy để chữa menu.

## Agent thực hiện

1. Kiểm đúng gói HAHA-Voice-1.1.1-client.zip và mã SHA-256 nhận cùng prompt trước khi giải nén/chạy. Kiểm đường dẫn ZIP không vượt ra ngoài thư mục giải nén, không có liên kết tệp; đọc checksums.sha256 và kiểm toàn bộ file. Không tải rồi thực thi trong một chuỗi chưa kiểm.
2. Kiểm ứng dụng, hệ điều hành, công cụ hiện có, quy tắc workspace và skill trùng tên trong đúng phạm vi. Ưu tiên Python có sẵn, gồm Python đi cùng ứng dụng nếu dùng được. Gói chỉ cần Python 3.10+ và thư viện chuẩn cho bộ cài; không tự cài Python, sửa quyền, đổi cấu hình toàn máy hoặc tải thêm gói trả phí.
3. Dùng mặc định cài mới vào .agents/skills. Xác định đường dẫn tuyệt đối và chạy bộ cài ở chế độ xem trước. Đọc tệp tạo mới, giữ nguyên và xung đột. Trình bản xem trước ngắn; yêu cầu cài đặt trong prompt cho phép phần cài mới đã nêu, nhưng không thay thế cổng duyệt riêng của máy đích. Nếu máy đích yêu cầu xác nhận riêng thì chờ đúng xác nhận đó. Không đặt ba câu hỏi cố định về thư mục và kiến trúc OS.
4. Chỉ sau khi đúng quyền, chạy chế độ áp dụng. Không ghi đè skill/Voice đã có hoặc router. Nếu trùng tên khác nội dung, giữ nguyên và trình phạm vi nâng cấp riêng: tệp nào thay, bản cũ lưu đâu, cách khôi phục; chưa duyệt thì nhánh nâng cấp dừng. Chạy lại gói giống mã giữ nguyên file, không tạo cây skill lồng nhau.
5. Tạo HAHA-Voice-work/input, output và library/custom trong workspace nếu chưa có, chỉ bằng thao tác tạo mới. Đây là dữ liệu khách; không ghi đầu ra hay tài sản tùy chỉnh vào thư viện mẫu cố định. Nếu đã có dữ liệu, giữ nguyên. Chỉ mục tài sản mới ghi mục đích, nguồn chỉnh sửa, bản xem, quy tắc, phụ thuộc, quyền dùng, phiên bản và kiểm tra trước khi đưa vào dùng lại.
6. Đọc lại mã mọi file đã cài. Chạy hai tác vụ thử trong mục dưới từ đúng workspace và một thư mục con khác. Không tuyên bố menu đã nhận chỉ vì thư mục tồn tại. Giới hạn hai lần thử cùng một chẩn đoán, sau đó xét lại nguyên nhân; không lặp vô hạn hay đổi phương thức để vượt quyền bị từ chối.

Agent dùng cùng Python đã kiểm và truyền đường dẫn thật, không yêu cầu khách tự gõ lệnh:

```text
python installer/install_client_package.py --target-root "WORKSPACE_ABSOLUTE" --preview
python installer/install_client_package.py --target-root "WORKSPACE_ABSOLUTE" --apply --confirm
```

WORKSPACE_ABSOLUTE phải được agent thay bằng đường dẫn thực. Cờ --confirm là tham số kỹ thuật, không tự tạo bằng chứng người dùng đã cấp quyền. Sau lỗi hoặc gián đoạn, đọc lại bản xem trước/biên nhận và trạng thái file trước khi thử lại. Bộ cài chỉ khôi phục các file nó vừa tạo và vẫn đúng mã; giữ nguyên thay đổi của người khác. Không xóa thư mục, bản cũ hay dữ liệu khách để dọn dẹp.

## Hai tác vụ thử bắt buộc

- HAHA: chạy scripts/inspect_haha.py của skill đã cài. Kết quả phải là status PASS, không thiếu tài nguyên và mã khớp package-manifest262.json. Sau đó mở assets/design-system/design-system.html, chọn một mẫu, thử Tái sử dụng và xác nhận font/hình/quy tắc tải được. Ghi rõ vùng nào chưa xem hoặc chưa thử; kiểm mã không chứng minh chất lượng thiết kế.
- Voice: đọc SKILL.md và đúng hướng dẫn tiếng Việt đã cài; viết lại mẫu trong assets/examples/install-smoke-input.md thành một thông báo ngắn. Giữ nguyên giờ, ngày, hình thức họp và hạn xác nhận. Đọc lại đầu ra và đối chiếu từng dữ kiện. Tác vụ này không cần gửi email, tạo tài liệu ngoài hay dùng mô hình trả phí.

Ghi bốn trạng thái riêng: đủ file/tài nguyên; ứng dụng nhận skill; tác vụ thực tế; người nhận ký nghiệm thu. Chỉ đánh dấu từng trạng thái đạt khi có bằng chứng của chính bước đó. Thử cục bộ của bên giao không chứng minh máy Mac của khách hoặc mọi phiên bản Codex.

## Nếu chưa gọi được trong menu

Xác nhận đúng workspace, vị trí .agents/skills, metadata name/description, mục skill bị tắt, bản trùng tên và cơ chế nạp lại được ứng dụng hỗ trợ. Không mặc định /haha hoặc /voice có ở mọi ứng dụng. CLI/IDE hỗ trợ /skills hoặc $haha, $voice; giao diện khác dùng mục chọn thực sự quan sát được.

Khi menu chưa nhận, có thể dùng ngay đường đọc file: nhờ agent mở chính .agents/skills/haha/SKILL.md hoặc .agents/skills/voice/SKILL.md trong workspace đã xác định rồi làm cùng tác vụ thử. Báo rõ đây là gọi trực tiếp qua file, menu vẫn chờ xác minh. Nếu cần chat mới hay khởi động lại, đưa một bước ngắn để khách thực hiện; không tự khởi động lại ứng dụng hoặc tuyên bố khách đã làm.

## Hướng dẫn dùng sau khi thử đạt

Trả đúng năm mục ngắn: thư mục làm việc; cách gọi đã thử; một ví dụ; nơi đặt đầu vào/đầu ra; điểm còn chờ. Ví dụ: dùng HAHA chọn mẫu thẻ quyết định cho nội dung mới; dùng Voice viết lại thông báo theo dữ kiện và giọng đã duyệt. HAHA dùng VOICE.md của thương hiệu; Voice chung hỗ trợ phương pháp và kiểm nghĩa, không tự thay giọng thương hiệu.

Giữ nguyên logo, bản quyền và giới hạn tài sản trong CLIENT-USE.md. Gói này là ảnh chụp bàn giao, không phải nguồn chỉ dẫn chính thức của bên dựng. Không xin token trong chat, đổi quyền, xuất bản, mua công cụ hoặc gửi thay khách. Nguồn cơ chế Codex: https://learn.chatgpt.com/docs/build-skills .
