# HAHA — Design và Edit bổ sung

| Need | Path | Rule |
|---|---|---|
| Bóng đổ và lớp hiển thị | [SHADOW.md](SHADOW.md) | Chọn vai trò, nền nhận bóng và trạng thái. |
| Poster theo từ khóa | [Mẫu moodboard](design-system.html#poster-moodboard) | Mỗi từ khóa có Pinterest, hình AI mới, cách chuyển ý, dùng khi và tránh. |
| Thumbnail | [Mẫu thumbnail](design-system.html#thumbnail-guideline) | Tách mặt và tiêu đề; kiểm320×180 và mẫu lớn. |
| Edit | [Mẫu edit](design-system.html#edit-guideline) | Người dẫn, đồ họa, màn hình, trang phục và bối cảnh; ví dụ tĩnh. |

Năm từ khóa: Bold, Energetic Layout, Vibrant, Sophisticated, Modern. Mỗi từ khóa có tham chiếu Pinterest và bản diễn giải theo HAHA. Giữ nhận diện HAHA khi chọn bố cục và hình ảnh. Tám ảnh AI là ảnh gốc ở kích thước thật của công cụ, không phóng lớn: sáu ảnh từ0.3 và hai ảnh mới0.5 dành riêng cho trang phục và studio. Người trong hình là hư cấu.

Logo, Design và Edit là phần thử riêng; chưa thành mặc định và chưa backport KAI. Chưa có footage/audio thật nên không chứng nhận đồng bộ lời nói, phụ đề hay chuyển động. Khi có ảnh nguồn, phân tích nguồn đó trước; không thay bằng ảnh AI mặc định.

## Khung người dẫn và ảnh đúng mục đích

Chia sẻ màn hình: người dẫn nằm trong khung có viền tương phản, tỷ lệ theo nguồn (mẫu này16:9); dùng object-fit:contain để giữ toàn ảnh. Không ép ảnh ngang thành dải dọc. Khung có vùng riêng, không che nội dung hoặc thao tác; màn hình hẹp chuyển khung xuống dưới.

Trang phục và bối cảnh có hai nguồn AI độc lập: assets/ai/wardrobe306.png (toàn thân,1122×1402) và assets/ai/set306.png (studio trống,1672×941). Hiển thị nguyên khung, chiều cao tự động. Prompt đầy đủ nằm cạnh từng ảnh. Đây là hướng dẫn của bản thử, chưa kích hoạt thành chuẩn chung.


## Bóng đổ theo chức năng

Đọc [SHADOW.md](SHADOW.md) trước khi dựng. Khối đọc và dữ liệu phẳng; nút hành động 2px, hộp nổi 4px. Màu bóng theo nền nhận bóng, kiểm lại ở trạng thái và kích thước đầu ra thật.
