> NON-CANONICAL DELIVERY SNAPSHOT — 2026.10.12-v1. Portable adaptation; not the source OS authority.

# Giọng báo cáo và phép thử với người đọc

| Need | Path | Rule |
|---|---|---|
| Phạm vi | [Phạm vi](#phạm-vi) | Read when you need phạm vi; retain the prerequisites and limits stated in that section. |
| Hồ sơ giọng cho từng báo cáo | [Hồ sơ giọng cho từng báo cáo](#hồ-sơ-giọng-cho-từng-báo-cáo) | Read when you need hồ sơ giọng cho từng báo cáo; retain the prerequisites and limits stated in that section. |
| Bốn cách xử lý | [Bốn cách xử lý](#bốn-cách-xử-lý) | Read when you need bốn cách xử lý; retain the prerequisites and limits stated in that section. |
| Viết và kiểm nghĩa riêng | [Viết và kiểm nghĩa riêng](#viết-và-kiểm-nghĩa-riêng) | Read when you need viết và kiểm nghĩa riêng; retain the prerequisites and limits stated in that section. |
| Thiết kế phép thử nhỏ | [Thiết kế phép thử nhỏ](#thiết-kế-phép-thử-nhỏ) | Read when you need thiết kế phép thử nhỏ; retain the prerequisites and limits stated in that section. |
| Bộ kiểm tra chứng minh gì | [Bộ kiểm tra chứng minh gì](#bộ-kiểm-tra-chứng-minh-gì) | Read when you need bộ kiểm tra chứng minh gì; retain the prerequisites and limits stated in that section. |

## Phạm vi

Tài liệu này bổ sung cách kiểm chứng cho chủ sở hữu tiếng Việt hiện có. Không tạo thêm bộ quyết định giọng. Quy tắc bảo toàn nghĩa và quyền hạn luôn ưu tiên hơn cách nói trôi chảy.

Việc sửa một ví dụ sai nghĩa, tăng kiểm kê câu hoặc kích hoạt bộ kiểm tra cấu trúc có thể được phê duyệt độc lập. Chưa có kết quả người đọc thì chỉ được nói đã sửa cách kiểm tra, không được nói tiếng Việt đã tự nhiên hơn.

## Hồ sơ giọng cho từng báo cáo

Trước khi viết, ghi một hồ sơ ngắn gồm:

- Người đọc và quyết định họ cần đưa ra.
- Vai người nói: Đơn vị tư vấn, người nghiên cứu, người vận hành hoặc người bán hàng.
- Loại tài liệu: Báo cáo đầy đủ, thẻ nội dung, bảng hoặc bài trình bày.
- Xưng hô, độ trực tiếp, mức giải thích thuật ngữ và những điều không được hứa.
- 5–10 câu mẫu do người có thẩm quyền duyệt cho chính giọng này; ghi nguồn và ngày duyệt. Chưa có mẫu thì đánh dấu hồ sơ tạm, không tự gắn nhãn đã duyệt.
- Ngoại lệ cần giữ nguyên: Tên riêng, điều khoản, đơn vị, trích dẫn hoặc câu đã tự nhiên.
- Mã kiểm tra SHA-256 của tệp hồ sơ sau khi chốt; thay hồ sơ thì tạo phép thử mới.

Giọng tư vấn nêu đề xuất rõ nhưng không tự thêm người đề xuất. Giọng nghiên cứu giữ giới hạn bằng chứng. Giọng bán hàng không tự thêm lợi ích, mức khẩn cấp hay số liệu. Không áp cùng giọng vào cả ba.

## Bốn cách xử lý

- `no_change`: Giữ nguyên khi câu đã rõ và đúng vai.
- `rewrite`: Sửa cách diễn đạt, giữ nguyên mọi mệnh đề và giới hạn có ý nghĩa.
- `review_comment`: Nêu vấn đề lập luận hoặc mâu thuẫn; không âm thầm biến kết luận sai thành nguồn đã xác thực.
- `needs_author_decision`: Chưa thể viết bản cuối vì thiếu thông tin ảnh hưởng đến nghĩa. Hỏi đúng chỗ thiếu; không tự điền.

Những cách xử lý này là kỳ vọng của ca thử, không phải đáp án văn phong duy nhất. Người đánh giá có thể phản biện kỳ vọng và ghi lý do trước khi thay phiên bản bộ thử.

## Viết và kiểm nghĩa riêng

Lượt viết dùng hồ sơ giọng và nguồn đã khóa. Lượt kiểm so sánh từng câu với nguồn, dò chủ thể, số liệu, đơn vị, thời gian, phủ định, điều kiện, ngoại lệ, nguyên nhân và mức chắc chắn. Người kiểm ghi đoạn nguồn và đoạn sửa để chứng minh nhận xét. Cờ tự khai giữ nghĩa không thay được đối chiếu.

Lượt kiểm nghĩa có thể do cùng công cụ chạy riêng để tìm lỗi, nhưng không gọi đó là người chấm độc lập. Câu đổi nghĩa không đủ điều kiện thắng dù đọc hay hơn. Từ được bôi đậm hay đổi màu không chứng minh câu tự nhiên.

## Thiết kế phép thử nhỏ

Gói này không chứa bộ ca thử, phiếu điểm hay dữ liệu người đọc. Khi cần
đánh giá thực, người quản lý chuẩn bị ca mới có quyền sử dụng, bỏ dữ liệu riêng
và chốt phần phát triển/phần giữ riêng trước khi sửa hướng dẫn. Số người và số
ca bên dưới là thiết kế ví dụ; không phải chứng nhận chất lượng phổ quát.

1. Chốt hai cách viết, hồ sơ giọng, bộ ca và mã tệp trước khi tạo đầu ra.
2. Dùng 20 ca phát triển để sửa quy tắc. Khi bắt đầu xem kết quả phần giữ riêng, đóng băng hướng dẫn; nếu tiếp tục sửa theo chúng thì đổi bộ giữ riêng.
3. Lưu đủ nguồn, bản A và B. Xáo thứ tự A/B từng ca; giữ tên phương pháp và bảng giải mã ngoài bản đưa người chấm.
4. Mời ít nhất hai người thật đọc tiếng Việt trong bối cảnh báo cáo. Mỗi người chấm đủ 20 ca giữ riêng và không xem câu trả lời của người kia.
5. Trước chấm giọng, mỗi bản nhận kết luận nghĩa: `pass`, `fail` hoặc `undetermined`, có lý do cụ thể. Bản chưa rõ nghĩa không được tính là bản thắng.
6. Chấm độ tự nhiên 1–5, giải thích điểm vướng; chọn `A`, `B`, `tie` hoặc `neither`. Hòa và cả hai chưa đạt là hai kết quả khác nhau.
7. Khóa phiếu riêng, sau đó mới thảo luận chỗ bất đồng. Giữ cả kết quả ban đầu; không xóa ý kiến thiểu số.
8. Báo số ca đủ dữ liệu, lỗi nghĩa, thắng/thua/hòa/cả hai chưa đạt và bất đồng giữa người đọc. Hai người và 20 ca không chứng minh chất lượng trên mọi báo cáo.

Một người nhập dữ liệu có thể chép phiếu đã nhận, nhưng phải ghi nguồn phiếu và người chấm thật; không dùng đầu ra AI để điền vào ô người chấm. Không cần lưu thông tin cá nhân ngoài mã người chấm và dẫn chứng phiếu trong phạm vi được phép.

## Bộ kiểm tra chứng minh gì

Gói này không kèm công cụ kiểm phiếu nghiên cứu. Nếu thực hiện phép thử với
người đọc, giữ nguồn, mã tệp, phiếu riêng và các đối chiếu thực trong dữ liệu
của nhiệm vụ. Kiểm tra đủ hồ sơ không chứng minh đánh giá trung thực hay câu
tự nhiên hơn. Chưa nhận phiếu thật thì không được tự tạo điểm thay người chấm.

Trạng thái còn thiếu phải là `REVIEW_INCOMPLETE`. Không tạo điểm mẫu rồi để người dùng tưởng là kết quả thật.

### Chú thích thuật ngữ

- **SHA-256:** Mã tệp dùng để phát hiện thay đổi.
- **Ca phát triển:** Câu được dùng để xây và sửa quy tắc.
- **Ca giữ riêng:** Câu dành để đánh giá sau khi chốt quy tắc.
- **A/B:** Hai bản viết được ẩn tên cách tạo.

