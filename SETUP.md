# Bắt đầu cài HAHA + Voice

Khách dán một prompt từ START-HERE.md, trả lời tối đa ba câu hỏi rồi nhận hướng dẫn dùng. Agent đọc quy trình này trước khi hỏi. Gói HAHA 1.1.0 đã gồm Voice; không cần tải thêm Voice nếu không có nhu cầu dùng riêng.

## 1. Kiểm trước khi hỏi

Đọc INSTALL.md, RELEASES.json và LIBRARY-ELEMENTS.md tại cùng commit với hướng dẫn này. Chọn release v1.1.0. Kiểm mã SHA-256 ZIP và nội dung giải nén trước khi thực thi; đọc installer. Kho công khai, không yêu cầu token, GitHub CLI hay tài khoản để tải.

Kiểm chỉ trong phạm vi công việc: ứng dụng agent đang dùng, quy tắc OS được khai báo, nơi ứng dụng nhận skill, HAHA/Voice hiện có, Python và quyền ghi. Không quét toàn máy, không đoán đường dẫn hoặc tự đổi quyền. Kiểm xung đột trước khi lập kế hoạch.

## 2. Tối đa ba câu hỏi

Dùng lại câu trả lời đã có. Hai câu đầu có thể gửi cùng lúc. Không lồng nhiều quyết định không liên quan vào một câu.

1. **Nơi lưu:** “Bạn muốn lưu bộ HAHA và tài sản mới ở thư mục nào?” Nếu khách chưa biết, đề xuất một thư mục cụ thể trong workspace hiện có và đưa vào bản xem trước; chưa ghi vào đó.
2. **Cách dùng:** “Bạn muốn nối HAHA + Voice vào OS đang dùng hay dùng riêng trong thư mục này?” Đọc OS trước, giải thích ngắn lựa chọn phù hợp. Nếu không nhận diện được ứng dụng đích, dùng câu này để xác định ứng dụng và kiểu tích hợp.
3. **Xác nhận:** Sau khi hoàn tất kiểm tra và bản xem trước, hỏi “Bạn xác nhận bản xem trước này để tôi cài và tích hợp không?”

Bản xem trước ở câu 3 phải ghi đường dẫn chính xác; layout; tệp tạo/giữ nguyên; thay đổi đăng ký hoặc router; nơi lưu tài sản mới; mọi xung đột; kiểm nghiệm thu và cách hoàn tác. Chỉ thực hiện phần đã được khách xác nhận và OS cho phép. Không coi câu trả lời 1 hoặc 2 là quyền sửa router, ghi đè hoặc cài công cụ.

## 3. Công cụ cần thiết

Dùng công cụ có sẵn trước. Python 3.10+ là yêu cầu để chạy installer đi kèm; không buộc khách cài Codex, Git hoặc GitHub CLI nếu agent hiện có tải và xử lý gói được.

Nếu thiếu công cụ, trước câu 3 hãy ghi đúng tên/phiên bản, nguồn chính thức, cách kiểm gói tải, vị trí cài, thay đổi dự kiến, quyền cần và chi phí. Chỉ cài đúng công cụ được xác nhận; ưu tiên phạm vi người dùng hoặc workspace, không tự nâng quyền. Nếu khách không chấp nhận hoặc môi trường cấm cài, giữ nhánh đó ở trạng thái chưa thiết lập và đưa cách làm thủ công. Không yêu cầu khách dán mật khẩu/token vào chat.

## 4. Cài, nối và kiểm

Sau câu 3: thực hiện công cụ được duyệt nếu cần; chạy preview của installer với đích/layout đã chọn, đọc lại trước apply. Nếu khác bản khách duyệt, không apply. Nếu giống, apply và kiểm toàn vẹn.

Codex tiêu chuẩn dùng .agents/skills/haha và .agents/skills/voice. Chỉ dùng layout theo nhóm của OS nếu cơ chế thật đã được đọc và đích được xác nhận. Bộ cài không sửa router; agent chỉ làm thay đổi tích hợp được liệt kê và được phép. Nếu OS yêu cầu một quy trình duyệt riêng, để thay đổi đó chờ quy trình ấy; không lách bằng bản sao hoặc symlink.

Kiểm ứng dụng nhận skill, rồi một tác vụ nhỏ dùng đúng DESIGN.md và VOICE.md. Hướng dẫn chọn /haha hoặc /voice trong menu nếu ứng dụng hỗ trợ; CLI/IDE có thể dùng /skills hoặc $haha, $voice. HTML là bản xem và lấy chỉ dẫn Tái sử dụng; Markdown là tuyến đọc quy tắc cho agent.

Mở HTML lớp đầu Design system; thử Tái sử dụng và một mẫu. Tài sản khách tạo nằm trong thư viện mở rộng có phiên bản, nguồn sửa được, preview, quy tắc, mã kiểm và chỉ mục; không sửa baseline phát hành. Chi tiết trong LIBRARY-ELEMENTS.md.

## 5. Kết quả khách nhận

Trả một biên nhận ngắn: phiên bản, nơi lưu, skill được nhận, kết quả tác vụ, cách gọi lần sau, nơi lưu tài sản mới và bước chưa kiểm. Chỉ ghi “đã cài và dùng được” khi có bằng chứng tại môi trường khách. Không dùng kiểm thử máy dựng để thay nghiệm thu của khách.

Nếu sau câu 3 xuất hiện quyền, xung đột, chi phí hoặc đích mới ngoài bản đã duyệt, dừng riêng nhánh đó và ghi quyết định còn thiếu; không vượt giới hạn ba câu bằng chuỗi hỏi tiếp hoặc tự bỏ qua quyền. Quy trình này giảm hỏi trong trường hợp đủ điều kiện, không bảo đảm mọi OS cài xong trong ba câu.

