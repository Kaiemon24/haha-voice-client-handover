# LONG THÀNH — Cách ghép thành phần

## Cách đọc hệ thống

- Đọc theo việc: Overview nêu quy tắc và định hướng; Library chứa mảnh và ví dụ. Slide vào Nội dung; Website/App vào Giao diện; Design/Edit ở Overview, không tạo tab Applications thứ ba.
- Tái sử dụng đúng nguồn: Gói tái sử dụng ghi mã, bản 0.1.11-draft, hash tệp, phụ thuộc, quy tắc, quyền và giới hạn. Clipboard lỗi phải hiện văn bản chọn/sao chép; không tự nhận đã ghi bộ nhớ hệ điều hành.
- Quyền và phạm vi: Logo theo manifest approved-reusable; Lucide theo ISC; Be Vietnam Pro theo OFL; hình/tệp mới là đề xuất. Chưa chứng nhận quyền toàn bộ thư viện hoặc xuất bản.
- Bốn mục đích PDF: Bốn tài liệu: slide; web/app/UI; design; edit. Overview và quy tắc chung đủ trong cả bốn; vật liệu theo mục đích, toàn bộ hợp lại đủ nguồn. Bản tĩnh không thực thi điều khiển.
- Phiên bản và khoảng trống: Tệp nguồn và manifest ràng buộc hash. Bản này chưa kích hoạt; thiếu phông thương hiệu được phép đóng gói và ảnh sản phẩm được duyệt. Phần đề xuất không được gọi chính thức chỉ vì dựng thành công.

## Nhận diện nguồn

- Logo gốc: Giữ nguyên bốn PNG nguồn. Không vẽ lại 405, đổi tỷ lệ, sửa chữ, đổi màu, cắt dấu mặt trời hoặc ghép vào biểu tượng mới. Khoảng trống minh họa là đề xuất, không phải quy chuẩn gốc.
- Ngữ pháp hình: Nhịp sườn, lớp xếp, ô kho và đường kích thước; xanh dương chủ đạo, đỏ điểm nhấn. Minh họa hình học mới mô tả vai trò, không phải bản vẽ kỹ thuật hay ảnh sản phẩm.
- Biểu tượng: Lucide ISC 24 × 24, nét 2 px, đầu nét tròn; bản xanh trên trắng và trắng trên xanh giữ nguyên đường nét. Biểu tượng chức năng không thay logo thương hiệu.
- Ảnh sản phẩm: Dùng ảnh đúng mã và nguồn có quyền; giữ tỷ lệ, bề mặt và màu thật, không dùng hình dựng để chứng minh cấu tạo hay chịu tải. Chưa có ảnh sản phẩm được duyệt trong thư mục nguồn.
- Hình minh họa hỗ trợ: Slide thiên hình cần hình liên quan. Mẫu trống ghi rõ vị trí đặt hình. Hình tạo mới không được giả làm ảnh sản phẩm, chứng cứ thực nghiệm hay chứng nhận; nguồn và quyền phải rõ.

## Chữ và số

- Phông nguồn: Trang chính thức khai báo SVN-Kelson Sans và Inter Tight. Chưa có tệp/phép tái phân phối phông nguồn trong Brandkit; không đóng gói phông tải từ website.
- Phông đề xuất: Be Vietnam Pro 400/700, giấy phép OFL đi kèm; phương án triển khai đề xuất, không phải xác nhận nhận diện gốc. Arial là phông dự phòng.
- Thang chữ: Giao diện: tiêu đề 40/48, nhóm 28/36, nội dung 16/26, nhãn 14/20; ở khung hẹp tiêu đề 32/40. Slide 1280 × 720: tiêu đề 40/48 hoặc 42/50 trong trình đọc; thân 22/31 cho mẫu bảng dày, tối thiểu 18/24 cho chú thích. Các mức này là đề xuất có kiểm tra khung, không phải phông nhận diện gốc.
- Số và đơn vị: Dùng chữ số thẳng hàng khi đối chiếu; viết 1200 × 1000 × 150 mm với đơn vị rõ. Không bỏ điều kiện tải tĩnh/tải động/tải kệ; không coi số ví dụ là thông số sản phẩm.
- Tiếng Việt: Giữ đầy đủ dấu, khoảng dòng tránh chạm dấu mũ/dấu thanh. Không viết toàn bộ đoạn dài bằng chữ hoa; không thu chữ nhỏ để nhét nội dung.

## Vai trò màu

- Xanh hành động: #084DD1; nguồn CSS chính thức. Chữ trắng trên xanh cho nút chính; không tô toàn bộ dữ liệu bằng một màu nhấn.
- Đỏ nhận diện: #FF0005; nguồn CSS chính thức. Dùng cho điểm nhấn nhận diện, không dùng chữ nhỏ màu đỏ này trên trắng; lỗi dùng #B42318 kèm lời giải thích.
- Chữ và nền: #00102E trên #FFFFFF; nền phụ #F9FBFF, nhóm liên quan #E5EEFF. Không dùng màu duy nhất để báo trạng thái.
- Nền tối: Nền #00102E, khung #10294D, chữ #FFFFFF, chữ phụ #C5D6F1, hành động #81B0FF với chữ #00102E. Giữ logo trên vùng trắng khi dùng bản logo nền sáng.
- Trạng thái: Thành công #146C43, cảnh báo #8A4B00, lỗi #B42318, thông tin #084DD1; luôn kèm nhãn hoặc biểu tượng có nghĩa.
- Độ tương phản: Chữ thường tối thiểu 4.5:1, chữ lớn 3:1; đo màu nhận thật sau lớp phủ. Khung điều khiển và dấu trạng thái 3:1. Màu nhấn nguồn không mặc nhiên đạt mọi cặp.

## Khoảng cách và hình học

- Nhịp khoảng cách: Thang 4, 8, 12, 16, 24, 32, 48, 64 px; nội dung 16 px tối thiểu ở điện thoại, 24 px ở desktop; thẻ 24 px, nhóm 32 px.
- Hình học: Khung kỹ thuật góc 4 px, hộp thoại 8 px; viền 1 px, nét biểu tượng 2 px/24 px. Tấm phẳng, ô thông số và nhịp sườn pallet tạo nét riêng; không dùng khung game hay hình pixel.
- Vùng an toàn bên trong: Giữ ít nhất 16 px giữa chữ và viền; nhãn ngắn căn giữa khối chữ theo hai trục sau khi phông tải xong; đoạn dài giữ căn trái.
- Khoảng hở đã vẽ: Các phần ngang hàng chừa 24 px sau cả bóng và nét. Không tính riêng hộp bố cục nếu hình hoặc bóng còn vượt ra ngoài.
- Hình đặc và viền: Hai bản phải giữ cùng đường bao, tâm và phần rỗng. Không thay hình học chỉ để bản viền trông mảnh hơn.

## Bề mặt và độ nổi

- Độ nổi: Thẻ: 0 3 px 9 px rgba(0,16,46,.12); hộp thoại: 0 8 px 24 px rgba(0,16,46,.19). Phần nhận màu và khoảng hở là một phần của công thức.
- Thứ tự lớp: Nền 0, nội dung 1, điều hướng 10, lớp phủ 40, hộp thoại 50, thông báo 60; không để bóng phủ chữ của phần ngang hàng.
- Ngoại lệ mặt phẳng: Chữ, logo, trục và dấu dữ liệu không đổ bóng riêng; khung ngoài chịu bóng. Chế độ tương phản cao dùng viền hệ thống rõ.

## Chữ, hình và dữ kiện

- Lưới thích nghi: Desktop 12 cột, rộng nội dung 1200 px, khe 24 px; tablet 8 cột, khe 20 px; mobile 4 cột, khe 16 px. Dưới 768 px xếp dọc; không cuộn ngang phần nội dung bắt buộc.
- Ba điểm đọc: Sản phẩm hoặc câu hỏi là điểm đầu; dữ kiện/điều kiện là điểm hai; hành động hoặc kết luận là điểm ba. Không để logo lớn cạnh tranh thông điệp.
- Quy tắc ghép chính: Chọn công việc đọc, tỷ lệ khung và mảnh đã có; giữ phông/màu/trạng thái/nguồn; thay thứ tự và cách xếp. Không chế thêm loại thành phần khi đang áp dụng.
- Bảng dài: Tiêu đề và đơn vị rõ, số căn phải, nhãn căn trái, lặp đầu bảng khi sang trang; giữ đủ hàng. Không cắt cột hoặc chụp ảnh bảng để mất khả năng tìm chữ.
- Slide 16:9: Một thông điệp chính; vùng an toàn 48 px; nguồn 20 px; hình và chữ có vai trò. Chính sách slide 2.1 ưu tiên nội dung, cấu trúc và điểm nhấn trước số lượng hình/chữ.
- Bản đồ: Chỉ dùng hình học có nguồn; giữ Hoàng Sa/Trường Sa và 51 đơn vị Hoa Kỳ theo nguồn đã chọn. Dữ liệu giả lập không biểu thị thị trường hay chi nhánh thật.

## Hình học biểu tượng

- Logo gốc: Giữ nguyên bốn PNG nguồn. Không vẽ lại 405, đổi tỷ lệ, sửa chữ, đổi màu, cắt dấu mặt trời hoặc ghép vào biểu tượng mới. Khoảng trống minh họa là đề xuất, không phải quy chuẩn gốc.
- Ngữ pháp hình: Nhịp sườn, lớp xếp, ô kho và đường kích thước; xanh dương chủ đạo, đỏ điểm nhấn. Minh họa hình học mới mô tả vai trò, không phải bản vẽ kỹ thuật hay ảnh sản phẩm.
- Biểu tượng: Lucide ISC 24 × 24, nét 2 px, đầu nét tròn; bản xanh trên trắng và trắng trên xanh giữ nguyên đường nét. Biểu tượng chức năng không thay logo thương hiệu.
- Ảnh sản phẩm: Dùng ảnh đúng mã và nguồn có quyền; giữ tỷ lệ, bề mặt và màu thật, không dùng hình dựng để chứng minh cấu tạo hay chịu tải. Chưa có ảnh sản phẩm được duyệt trong thư mục nguồn.
- Hình minh họa hỗ trợ: Slide thiên hình cần hình liên quan. Mẫu trống ghi rõ vị trí đặt hình. Hình tạo mới không được giả làm ảnh sản phẩm, chứng cứ thực nghiệm hay chứng nhận; nguồn và quyền phải rõ.

## Quan hệ dữ liệu

- Lưới thích nghi: Desktop 12 cột, rộng nội dung 1200 px, khe 24 px; tablet 8 cột, khe 20 px; mobile 4 cột, khe 16 px. Dưới 768 px xếp dọc; không cuộn ngang phần nội dung bắt buộc.
- Ba điểm đọc: Sản phẩm hoặc câu hỏi là điểm đầu; dữ kiện/điều kiện là điểm hai; hành động hoặc kết luận là điểm ba. Không để logo lớn cạnh tranh thông điệp.
- Quy tắc ghép chính: Chọn công việc đọc, tỷ lệ khung và mảnh đã có; giữ phông/màu/trạng thái/nguồn; thay thứ tự và cách xếp. Không chế thêm loại thành phần khi đang áp dụng.
- Bảng dài: Tiêu đề và đơn vị rõ, số căn phải, nhãn căn trái, lặp đầu bảng khi sang trang; giữ đủ hàng. Không cắt cột hoặc chụp ảnh bảng để mất khả năng tìm chữ.
- Slide 16:9: Một thông điệp chính; vùng an toàn 48 px; nguồn 20 px; hình và chữ có vai trò. Chính sách slide 2.1 ưu tiên nội dung, cấu trúc và điểm nhấn trước số lượng hình/chữ.
- Bản đồ: Chỉ dùng hình học có nguồn; giữ Hoàng Sa/Trường Sa và 51 đơn vị Hoa Kỳ theo nguồn đã chọn. Dữ liệu giả lập không biểu thị thị trường hay chi nhánh thật.

## Thành phần và trạng thái

- Nút và trạng thái: Mỗi nhóm có một hành động chính; nút phụ, nguy hiểm, chỉ biểu tượng có nhãn truy cập. Có thường/rê/nhấn/tập trung/khóa/đang xử lý/lỗi/thành công; khóa không phát hành động.
- Nhập và chọn: Nhãn cố định, hướng dẫn trước nhập, lỗi sát trường và chỉ cách sửa; lỗi không xóa nội dung. Công tắc dùng aria-checked; hộp kiểm dùng phần tử native.
- Điều hướng: Đánh dấu mục hiện tại bằng chữ và hình; bàn phím Tab/Enter hoạt động; liên kết sâu mở đúng phần và nội dung thu gọn chứa nó.
- Hộp thoại: Tên rõ, khóa nền khi mở, giữ Tab trong hộp, Escape và nút đóng trả tập trung về nút gọi. Xóa cần bước xác nhận; mẫu không gửi dữ liệu.
- Mảnh ghép và bố cục: Mọi mảnh trong composition có mã thành phần lẻ; khác nội dung, tỷ lệ ảnh hoặc số hàng là biến thể, không nhân thành loại mới. Thiếu loại cần thiết phải báo, không tự nhận tương đương.

## Lưới và bố cục

- Lưới thích nghi: Desktop 12 cột, rộng nội dung 1200 px, khe 24 px; tablet 8 cột, khe 20 px; mobile 4 cột, khe 16 px. Dưới 768 px xếp dọc; không cuộn ngang phần nội dung bắt buộc.
- Ba điểm đọc: Sản phẩm hoặc câu hỏi là điểm đầu; dữ kiện/điều kiện là điểm hai; hành động hoặc kết luận là điểm ba. Không để logo lớn cạnh tranh thông điệp.
- Quy tắc ghép chính: Chọn công việc đọc, tỷ lệ khung và mảnh đã có; giữ phông/màu/trạng thái/nguồn; thay thứ tự và cách xếp. Không chế thêm loại thành phần khi đang áp dụng.
- Bảng dài: Tiêu đề và đơn vị rõ, số căn phải, nhãn căn trái, lặp đầu bảng khi sang trang; giữ đủ hàng. Không cắt cột hoặc chụp ảnh bảng để mất khả năng tìm chữ.
- Slide 16:9: Một thông điệp chính; vùng an toàn 48 px; nguồn 20 px; hình và chữ có vai trò. Chính sách slide 2.1 ưu tiên nội dung, cấu trúc và điểm nhấn trước số lượng hình/chữ.
- Bản đồ: Chỉ dùng hình học có nguồn; giữ Hoàng Sa/Trường Sa và 51 đơn vị Hoa Kỳ theo nguồn đã chọn. Dữ liệu giả lập không biểu thị thị trường hay chi nhánh thật.

## Chuyển động có mục đích

- Thời gian: Phản hồi 120–180 ms, mở vùng 240 ms ease-out; chuyển slide 320 ms. Chỉ chuyển động để giải thích trạng thái, quan hệ hoặc thứ tự.
- Vòng đời: Mặc định đứng yên với mẫu biểu tượng; Play/Pause trên cùng hình; ngắt tiếp diễn không nhân vòng lặp; khi khuất màn hình dừng; giảm chuyển động dùng trạng thái tĩnh.
- Hai dải ngược chiều: Hình chạy trái và chữ chạy phải; mỗi nửa lặp cùng thứ tự; có nút dừng chung. Nội dung bắt buộc luôn có bản tĩnh, không buộc đuổi theo chữ.
- Mô hình 3D: Mô hình hình học minh họa có xoay/dừng/đặt lại và bản tĩnh. Không nhận là mô hình CAD, phép đo sản phẩm hoặc nguồn ảnh gốc.

## Nguyên tắc và giới hạn

- Ba nguyên tắc: Cho người đọc thấy sản phẩm hoặc công việc trước; đặt thông số cạnh điều kiện; hành động cuối rõ một việc. Ưu tiên khả năng đối chiếu hơn hiệu ứng.
- Kỷ luật lời hứa: Không tự gắn chứng nhận, chuẩn an toàn, vật liệu, tải trọng, tuổi thọ, tái chế hay tiết kiệm. Mọi tuyên bố cần nguồn riêng còn hiệu lực; logo không chứng minh chất lượng.
- Giọng văn: Đề xuất: rõ việc, chính xác, tôn trọng. Nói người đọc cần cung cấp gì và bước tiếp theo; tránh tốt nhất, bền vững tuyệt đối, bảo đảm nếu thiếu căn cứ.
- Dữ liệu minh họa: Số trong biểu đồ, bảng kho và báo giá mẫu là giả lập; không phải doanh số, tồn kho hoặc năng lực công ty. Giữ nhãn minh họa cạnh dữ liệu.

## Giọng viết rõ việc

- Ba nguyên tắc: Cho người đọc thấy sản phẩm hoặc công việc trước; đặt thông số cạnh điều kiện; hành động cuối rõ một việc. Ưu tiên khả năng đối chiếu hơn hiệu ứng.
- Kỷ luật lời hứa: Không tự gắn chứng nhận, chuẩn an toàn, vật liệu, tải trọng, tuổi thọ, tái chế hay tiết kiệm. Mọi tuyên bố cần nguồn riêng còn hiệu lực; logo không chứng minh chất lượng.
- Giọng văn: Đề xuất: rõ việc, chính xác, tôn trọng. Nói người đọc cần cung cấp gì và bước tiếp theo; tránh tốt nhất, bền vững tuyệt đối, bảo đảm nếu thiếu căn cứ.
- Dữ liệu minh họa: Số trong biểu đồ, bảng kho và báo giá mẫu là giả lập; không phải doanh số, tồn kho hoặc năng lực công ty. Giữ nhãn minh họa cạnh dữ liệu.

## Chuẩn và nơi áp dụng

- Đọc theo việc: Overview nêu quy tắc và định hướng; Library chứa mảnh và ví dụ. Slide vào Nội dung; Website/App vào Giao diện; Design/Edit ở Overview, không tạo tab Applications thứ ba.
- Tái sử dụng đúng nguồn: Gói tái sử dụng ghi mã, bản 0.1.11-draft, hash tệp, phụ thuộc, quy tắc, quyền và giới hạn. Clipboard lỗi phải hiện văn bản chọn/sao chép; không tự nhận đã ghi bộ nhớ hệ điều hành.
- Quyền và phạm vi: Logo theo manifest approved-reusable; Lucide theo ISC; Be Vietnam Pro theo OFL; hình/tệp mới là đề xuất. Chưa chứng nhận quyền toàn bộ thư viện hoặc xuất bản.
- Bốn mục đích PDF: Bốn tài liệu: slide; web/app/UI; design; edit. Overview và quy tắc chung đủ trong cả bốn; vật liệu theo mục đích, toàn bộ hợp lại đủ nguồn. Bản tĩnh không thực thi điều khiển.
- Phiên bản và khoảng trống: Tệp nguồn và manifest ràng buộc hash. Bản này chưa kích hoạt; thiếu phông thương hiệu được phép đóng gói và ảnh sản phẩm được duyệt. Phần đề xuất không được gọi chính thức chỉ vì dựng thành công.

## Thích nghi cùng mảnh ghép

- Lưới thích nghi: Desktop 12 cột, rộng nội dung 1200 px, khe 24 px; tablet 8 cột, khe 20 px; mobile 4 cột, khe 16 px. Dưới 768 px xếp dọc; không cuộn ngang phần nội dung bắt buộc.
- Ba điểm đọc: Sản phẩm hoặc câu hỏi là điểm đầu; dữ kiện/điều kiện là điểm hai; hành động hoặc kết luận là điểm ba. Không để logo lớn cạnh tranh thông điệp.
- Quy tắc ghép chính: Chọn công việc đọc, tỷ lệ khung và mảnh đã có; giữ phông/màu/trạng thái/nguồn; thay thứ tự và cách xếp. Không chế thêm loại thành phần khi đang áp dụng.
- Bảng dài: Tiêu đề và đơn vị rõ, số căn phải, nhãn căn trái, lặp đầu bảng khi sang trang; giữ đủ hàng. Không cắt cột hoặc chụp ảnh bảng để mất khả năng tìm chữ.
- Slide 16:9: Một thông điệp chính; vùng an toàn 48 px; nguồn 20 px; hình và chữ có vai trò. Chính sách slide 2.1 ưu tiên nội dung, cấu trúc và điểm nhấn trước số lượng hình/chữ.
- Bản đồ: Chỉ dùng hình học có nguồn; giữ Hoàng Sa/Trường Sa và 51 đơn vị Hoa Kỳ theo nguồn đã chọn. Dữ liệu giả lập không biểu thị thị trường hay chi nhánh thật.

## Nguồn và cách dùng lại

- Đọc theo việc: Overview nêu quy tắc và định hướng; Library chứa mảnh và ví dụ. Slide vào Nội dung; Website/App vào Giao diện; Design/Edit ở Overview, không tạo tab Applications thứ ba.
- Tái sử dụng đúng nguồn: Gói tái sử dụng ghi mã, bản 0.1.11-draft, hash tệp, phụ thuộc, quy tắc, quyền và giới hạn. Clipboard lỗi phải hiện văn bản chọn/sao chép; không tự nhận đã ghi bộ nhớ hệ điều hành.
- Quyền và phạm vi: Logo theo manifest approved-reusable; Lucide theo ISC; Be Vietnam Pro theo OFL; hình/tệp mới là đề xuất. Chưa chứng nhận quyền toàn bộ thư viện hoặc xuất bản.
- Bốn mục đích PDF: Bốn tài liệu: slide; web/app/UI; design; edit. Overview và quy tắc chung đủ trong cả bốn; vật liệu theo mục đích, toàn bộ hợp lại đủ nguồn. Bản tĩnh không thực thi điều khiển.
- Phiên bản và khoảng trống: Tệp nguồn và manifest ràng buộc hash. Bản này chưa kích hoạt; thiếu phông thương hiệu được phép đóng gói và ảnh sản phẩm được duyệt. Phần đề xuất không được gọi chính thức chỉ vì dựng thành công.

## Hướng dẫn dùng slide template

### Khuyến khích minh họa bằng AI khi phù hợp

Với slide nhiều hình, ít chữ, xác định ý nghĩa và vị trí từng khung ảnh. Tạo hình minh họa bằng AI khi phù hợp, đúng nội dung và phong cách thương hiệu; đặt ảnh thật vào placeholder trước khi bàn giao slide hoàn chỉnh. Giữ tỷ lệ, vùng an toàn, điểm nhìn và cách cắt ảnh của mẫu; kiểm ảnh đã tải và không còn khung trống ngoài chủ đích. Mẫu thư viện có thể giữ placeholder trung tính để tái sử dụng; phải ghi rõ đó là mẫu. Tuân thủ quyền sử dụng, riêng tư, chi phí và quy trình Image; không dùng ảnh tạo làm bằng chứng người, sự kiện hay dự án thật, không bịa số liệu.

### Nhịp tham chiếu: 3 slide chữ / 1 slide hình

Dùng mốc 3 slide nhiều chữ, ít hình / 1 slide nhiều hình, ít chữ để rà soát nhịp toàn bộ bài. Không bắt buộc ba slide chữ liên tiếp và không cần chờ đủ ba mới dùng hình. Có thể xen kẽ, đặt hình sớm hoặc dùng nhiều slide hình liên tục khi nội dung phù hợp. Hình phải mang ý nghĩa giải thích; icon nhỏ, nền trang trí và trang chỉ có tiêu đề không được tính. Với bài ngắn hoặc số trang đã chốt, sắp lại trong phạm vi đó; không thêm hình hay trang thừa để đủ tỷ lệ.

### Theo nội dung; trực quan, ngắn và dễ hiểu

Chọn template và cách sắp xếp theo câu hỏi cần trả lời, không ép nội dung vào một công thức cố định. Ưu tiên trực quan hóa bằng các component hiện có khi giúp người đọc hiểu nhanh hơn: sơ đồ cho quan hệ hoặc tiến trình, biểu đồ cho dữ liệu, ảnh cho bối cảnh và ví dụ. Mỗi slide tập trung một thông điệp; viết ngắn gọn, đi thẳng vào ý chính, dùng từ dễ hiểu. Giữ dữ kiện, điều kiện và nguồn cần thiết; không rút gọn đến mất nghĩa.

### Dùng icon có nghĩa ở tiêu đề

Đặt một icon phù hợp với ý chính bên cạnh tiêu đề slide hoặc tiêu đề nhóm khi giúp định hướng và hợp mẫu đã chọn. Dùng bộ icon đã duyệt của thương hiệu; đồng bộ nét, kích thước, màu và khoảng cách với chữ. Giữ tiêu đề là chữ đọc được, căn icon theo nhóm chữ thực tế kể cả khi xuống dòng; icon không thay nội dung, không che chữ và không thay hình minh họa chính. Kiểm tiêu đề cùng icon trên bản HTML và PDF cuối. Với tiêu đề đã khóa, trích nguyên văn hoặc mẫu chủ đích không có icon, giữ thiết kế và ghi lý do.

### Giữ nghĩa trước khi rút gọn

Đọc toàn bộ nguồn. Chọn câu hỏi chính cho từng slide, viết lại ngắn và rõ theo giọng được hướng dẫn trong cẩm nang này. Giữ người phụ trách, số/đơn vị, thứ tự, điều kiện, phủ định và trạng thái đề xuất hoặc ví dụ. Không biến lịch tham chiếu thành cam kết. Ghi rõ phần gộp, đưa vào ghi chú/phụ lục hoặc loại khỏi phạm vi.

### Chọn cách chia ý

Một ý giải thích liên tục dùng đoạn ngắn. Nhiều ý song song dùng danh sách có bullet; các bước có thứ tự dùng số; so sánh dùng bảng; quan hệ dùng sơ đồ đúng nghĩa. Số ngoài thẻ không thay cho danh sách các tác vụ bên trong. Chỉ dùng icon thay bullet khi nó bổ sung nghĩa và hợp bộ biểu tượng của thương hiệu.

### Nhấn từ khóa trong thân bài

In đậm chọn lọc từ/cụm từ quan trọng trong thân bài bằng phông đậm thật của thương hiệu; phần còn lại thường. Giữ phủ định và điều kiện cần hiểu. Không lấy tiêu đề đậm hoặc cả đoạn đậm làm bằng chứng rằng từ khóa đã được nhấn đúng.

### Kiểm chính bản xuất cuối

Giữ phông, màu, bóng, khung và vùng an toàn của thương hiệu trong cẩm nang. Kiểm bản xuất thật: đủ ý/điều kiện; tiếng Việt đủ dấu; bullet và chữ đậm đúng; hình không mất/cắt; nhịp toàn bộ bộ slide đạt; nguồn và chú thích đúng. Sửa lỗi trước bàn giao. Chỉ khẳng định đã tuân thủ sau khi kiểm chính đầu ra đó.

Ví dụ hợp lệ: chữ → hình → chữ → hình; hoặc hình → hình → chữ. Không phải chờ đủ ba slide chữ mới dùng hình.
