# Tạo và lưu element HAHA

## Chọn trước khi tạo

Đọc `DESIGN.md` và `REUSE.md`, chọn tài sản sẵn có theo chức năng. Đối chiếu font, vai trò màu, bóng, viền, bảng, trạng thái và khoảng cách của HAHA. Giữ số lượng/chức năng mẫu baseline; biến đổi hình và bố cục theo HAHA và nhiệm vụ. Không sao chép nhận diện KAI, thêm mascot hoặc vẽ lại logo.

## Tạo element mới

Ghi mục đích, loại, ngữ cảnh và lý do mẫu sẵn chưa đủ. Dựng bản nguồn chỉnh được, bản preview và ví dụ sử dụng thật. Với icon có đường bao, giữ khoảng hở giữa nét bên trong và đường bao, trừ kết nối có chủ đích. Với khối nối, một silhouette và một bóng ngoài. Dữ liệu giữ trục, nhãn, số, đơn vị và nguồn.

Lưu tại `HAHA-Voice-work/library/custom/<element-id>/<version>/`: `element.json`, `source/`, `assets/`, `preview/`, `USAGE.md`. Mã ổn định dùng chữ thường-số-gạch nối; mỗi phiên bản mới là một thư mục riêng. Không đưa secrets, ảnh Pinterest chưa có quyền hoặc dữ liệu khách riêng vào thư viện dùng chung.

`element.json` ghi: id, version, type, purpose, useWhen, avoidWhen, brand, baselineVersion, selectedRules, files kèm SHA-256, dependencies, sourceRights, accessibility, validation, approval và status. Dùng mẫu `handover/templates/element.json`.

## Kiểm và đưa vào thư viện

Xem bản render đúng kích thước; kiểm trạng thái, tương phản, bàn phím/màn hình hẹp nếu có. Ghi phép kiểm và kết quả, không tự điền PASS. Tài sản chỉ thử nghiệm giữ `draft`; nghiệm thu tác vụ không tự cấp quyền xuất bản hoặc tái phân phối.

Sau khi khách duyệt dùng lại, thêm hàng Need/Path/Rule và mã kiểm vào `HAHA-Voice-work/library/CUSTOM-INDEX.md`; trỏ đúng phiên bản, điều kiện dùng và đường dẫn preview. Agent đọc chỉ mục mở rộng cùng DESIGN/REUSE, không chọn thư mục mới nhất theo tên.

Baseline 239 bản ghi đi kèm giữ nguyên. Muốn đưa element vào catalogue HTML chính: lập bản baseline mới và cập nhật dữ liệu nguồn, catalogue, gói yêu cầu Tái sử dụng, manifest và preview tương ứng; kiểm số lượng, link/phụ thuộc, clipboard và render trước phát hành. Không sửa riêng một SVG rồi đổi checksum hoặc bỏ qua phần dẫn xuất. Khách quản lý extension của mình; bộ bàn giao không tự tải hay đồng bộ tài sản ngược về người giao.
