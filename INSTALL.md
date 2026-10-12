# Cài và tích hợp qua agent

Một prompt khởi động giúp agent tải, kiểm và dẫn khách qua cài đặt. Bắt đầu ở [SETUP.md](SETUP.md): tối đa ba câu hỏi về nơi lưu, cách nối vào OS và xác nhận bản xem trước. Các mục dưới là chi tiết vận hành; không tạo thêm một vòng phỏng vấn.

## 1. Lấy đúng bản

Repository Kaiemon24/haha-voice-client-handover đã công khai: đọc hướng dẫn và tải release không cần tài khoản, token hoặc lời mời GitHub. Chọn release `v1.1.0`, gói HAHA 1.1.0 (đã có Voice) hoặc Voice 1.0.1 độc lập. Nếu đường dẫn lỗi, kiểm lại đúng kho và phiên bản; không chuyển sang bản khác hay nguồn Drive cũ.

Mục truy cập này thay chỉ dẫn xin quyền riêng tư trong snapshot/PDF cũ. ZIP và mã kiểm phát hành giữ nguyên; các quy tắc cài đặt, xác nhận đích và nghiệm thu trong gói vẫn áp dụng. Công khai kho không chuyển quyền sở hữu nhãn hiệu hoặc cấp giấy phép mở cho tài sản HAHA.

Đối chiếu SHA-256 ZIP với `RELEASES.json` tại commit được khóa. Giải nén vào thư mục tạm do khách chọn, kiểm đường dẫn và `checksums.sha256`. Mở installer trước khi chạy. Không dùng chuỗi tải rồi thực thi chưa kiểm.

## 2. Chọn đích và kiểm OS đang có

Agent dùng câu hỏi 1 và 2 của SETUP.md để chọn nơi lưu và kiểu tích hợp; dùng lại thông tin đã có. Kiểm `AGENTS.md`, router được khai báo và các skill cùng tên trong phạm vi đó. Không quét toàn bộ máy hoặc thay cấu trúc OS của khách. Giữ quy tắc và giọng thương hiệu đã duyệt.

Codex tiêu chuẩn: dùng `--skill-layout codex`; bộ cài đặt skill ở `.agents/skills/haha` và `.agents/skills/voice`, dữ liệu ở `Brand asset/HAHA/Design system`. HTML nằm ngay lớp đầu thư mục Design system. Đây là phạm vi workspace, không tự cài toàn máy.

OS có chủ sở hữu theo nhóm: chỉ chọn `--skill-layout kai-os` khi khách xác nhận OS thực sự sử dụng `.codex/skills/Visual/haha` và `.codex/skills/Content/voice`. Agent đọc cơ chế đăng ký/routing của OS đó rồi trình bày thay đổi riêng. Không tự chép thêm bản trùng tên sang nơi khác, dùng symlink hay sửa cấu hình toàn máy để làm menu xuất hiện.

## 3. Xem trước rồi áp dụng

```text
python installer/install_client_package.py --target-root "THU_MUC_KHACH_CHON" --skill-layout codex --preview
```

Đọc `installer/install-preview.md`: đúng đích, đúng layout, tệp tạo mới/giữ nguyên và không có xung đột. Khách xác nhận đúng preview thì agent chạy:

```text
python installer/install_client_package.py --target-root "THU_MUC_KHACH_CHON" --skill-layout codex --apply --confirm
```

Bộ cài chỉ tạo tệp mới hoặc giữ tệp giống mã kiểm. Tệp khác nội dung làm dừng; không ghi đè Voice đã có hay router của OS. Khách muốn nâng cấp cần phương án đối chiếu và lưu bản cũ riêng. Công cụ thiếu chỉ được cài nếu đúng tên, nguồn, vị trí, quyền và chi phí đã nằm trong bản xem trước được khách xác nhận ở câu 3 của SETUP.md; không tự cài toàn máy hoặc đổi quyền. Nếu preview mới khác bản đã duyệt, dừng nhánh apply.

## 4. Skill được gọi như thế nào

`SKILL.md` có tên và mô tả chức năng; `agents/openai.yaml` cung cấp tên hiển thị. Giao diện đọc metadata trước, đọc hướng dẫn đầy đủ khi chọn skill. Bảng đầu `DESIGN.md` dẫn tới quy tắc/tài sản phù hợp; HTML dùng để xem hình và lấy yêu cầu tái sử dụng.

Trong Codex desktop, mở chat mới tại workspace đích, gõ `/haha` hoặc `/voice` và chọn đúng mục nếu menu của bản ứng dụng hỗ trợ. `/` là cách chọn của giao diện, không phải HTML tự biến thành skill. Codex CLI/IDE dùng `/skills` hoặc `$haha`, `$voice`. Nếu chưa thấy mục, kiểm nơi tải skill và trạng thái bật skill trước; chỉ khởi động lại khi cần, do khách thực hiện.

Kiểm hai lớp: danh mục thực sự nhận tên/tệp hướng dẫn, rồi một tác vụ nhỏ đọc đúng DESIGN/VOICE và trả về quy tắc đã chọn. Menu có mục chưa chứng minh tác vụ áp dụng đúng. Nếu không đọc được UI của khách, ghi bước xác nhận menu còn chờ; không khẳng định đã kiểm nó.

## 5. Nối với OS và quản lý thư viện

Nếu OS có bảng Need/Path/Rule, đề xuất một hàng HAHA tới skill và một hàng Voice tới chủ giọng chung; ghi phiên bản/mã kiểm nguồn. Chỉ sửa router thuộc đích đã được khách duyệt. OS chưa có router dùng discovery của Codex, không cần áp cấu trúc KAI OS.

HAHA dùng được tài sản và giọng đi kèm; không cần cài skill mẹ Design System hoặc toàn bộ KAI OS. Bộ HAHA đã gồm Voice. Cài thêm gói Voice cùng phiên bản chỉ giữ tệp giống nhau; tệp khác bị báo xung đột.

Đọc `handover/LIBRARY-ELEMENTS.md` để tạo/lưu element. Bản baseline và manifest đi kèm là bản cố định. Tài sản mới của khách lưu ở thư viện mở rộng riêng; không sửa baseline hoặc giả mạo checksum để che thay đổi. Muốn nhập vào baseline: tạo phiên bản mới, duyệt, tái tạo chỉ mục và kiểm lại.

## 6. Nghiệm thu và khôi phục

Đọc lại mã kiểm mọi tệp đã cài. Mở HTML ngay đầu Design system; thử một nút Tái sử dụng, một mẫu và giọng viết/nói cần dùng. Ghi phiên bản, layout, đích, kết quả nhận skill, tác vụ thật và điểm chưa kiểm trong biên bản khách giữ.

Nếu đang sao chép bị lỗi, installer xóa đúng các tệp vừa tạo trong lượt đó, giữ tệp có từ trước và thư mục. Không xóa tệp người khác thay đổi. Nếu cài xong rồi muốn gỡ, đối chiếu receipt và mã kiểm trước, trình khách phạm vi gỡ; không xóa cả Brand asset hay skill Voice dùng chung.

Nguồn cơ chế Codex: https://learn.chatgpt.com/docs/build-skills . Hành vi menu tùy phiên bản ứng dụng; nghiệm thu tại máy khách mới xác nhận được.
