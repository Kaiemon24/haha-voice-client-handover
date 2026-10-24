# LONG THÀNH — Hệ thống thiết kế

System: long-thanh-industrial · Version: 0.1.11-draft · Hash: e039d77a02d9852bf4b45f0ce2a87fbaf1ec5121b644c1063419aaa0f14a70a0

> Draft/proposal. Not registered. Missing/evidenced state is per section; no overall readiness implied.

## Read first
Read the requested sections only. Preserve source rights, locked brand facts and exact system binding. No automatic additions.

Human view: [design-system.html](design-system.html) · Elements: [integrated gallery](design-system.html#library) · Machine membership: [manifest](elements/manifest.json)

## Shared tokens
Exact proposal values; not independent brand approval.
- canvas: #F9FBFF
- text: #00102E
- muted: #435674
- accent: #084DD1
- surface: #FFFFFF
- border: #B8C9E6
- hover: #E5EEFF
- accentHover: #052368
- track: #DDE6F4
- font: Be Vietnam Pro, Arial, sans-serif
- motionMs: 180

## colors — Màu sắc
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: semantic role, HEX/RGBA, on-color pair, theme, contrast evidence
- brand-blue | Xanh hành động: #084DD1; nguồn CSS chính thức. Chữ trắng trên xanh cho nút chính; không tô toàn bộ dữ liệu bằng một màu nhấn. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- brand-red | Đỏ nhận diện: #FF0005; nguồn CSS chính thức. Dùng cho điểm nhấn nhận diện, không dùng chữ nhỏ màu đỏ này trên trắng; lỗi dùng #B42318 kèm lời giải thích. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- ink-surfaces | Chữ và nền: #00102E trên #FFFFFF; nền phụ #F9FBFF, nhóm liên quan #E5EEFF. Không dùng màu duy nhất để báo trạng thái. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- dark-colors | Nền tối: Nền #00102E, khung #10294D, chữ #FFFFFF, chữ phụ #C5D6F1, hành động #81B0FF với chữ #00102E. Giữ logo trên vùng trắng khi dùng bản logo nền sáng. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- status-colors | Trạng thái: Thành công #146C43, cảnh báo #8A4B00, lỗi #B42318, thông tin #084DD1; luôn kèm nhãn hoặc biểu tượng có nghĩa. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- contrast-contract | Độ tương phản: Chữ thường tối thiểu 4.5:1, chữ lớn 3:1; đo màu nhận thật sau lớp phủ. Khung điều khiển và dấu trạng thái 3:1. Màu nhấn nguồn không mặc nhiên đạt mọi cặp. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
Field coverage (absence is not verification):
- semantic role: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: brand-blue, brand-red, ink-surfaces, dark-colors, status-colors, contrast-contract | Evidence: source-audit.json, official-source-observations.json
- HEX/RGBA: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: brand-blue, brand-red, ink-surfaces, dark-colors, status-colors, contrast-contract | Evidence: source-audit.json, official-source-observations.json
- on-color pair: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: brand-blue, brand-red, ink-surfaces, dark-colors, status-colors, contrast-contract | Evidence: source-audit.json, official-source-observations.json
- theme: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: brand-blue, brand-red, ink-surfaces, dark-colors, status-colors, contrast-contract | Evidence: source-audit.json, official-source-observations.json
- contrast evidence: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: brand-blue, brand-red, ink-surfaces, dark-colors, status-colors, contrast-contract | Evidence: source-audit.json, official-source-observations.json

## typography — Chữ và số
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: font/source/rights/load/fallback, size/weight/leading/tracking tuples, Vietnamese, numeric alignment
- source-type | Phông nguồn: Trang chính thức khai báo SVN-Kelson Sans và Inter Tight. Chưa có tệp/phép tái phân phối phông nguồn trong Brandkit; không đóng gói phông tải từ website. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- proposal-type | Phông đề xuất: Be Vietnam Pro 400/700, giấy phép OFL đi kèm; phương án triển khai đề xuất, không phải xác nhận nhận diện gốc. Arial là phông dự phòng. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- type-scale | Thang chữ: Giao diện: tiêu đề 40/48, nhóm 28/36, nội dung 16/26, nhãn 14/20; ở khung hẹp tiêu đề 32/40. Slide 1280 × 720: tiêu đề 48/58, thân 28/40, chú thích 20/28. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- type-number | Số và đơn vị: Dùng chữ số thẳng hàng khi đối chiếu; viết 1200 × 1000 × 150 mm với đơn vị rõ. Không bỏ điều kiện tải tĩnh/tải động/tải kệ; không coi số ví dụ là thông số sản phẩm. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- type-vietnamese | Tiếng Việt: Giữ đầy đủ dấu, khoảng dòng tránh chạm dấu mũ/dấu thanh. Không viết toàn bộ đoạn dài bằng chữ hoa; không thu chữ nhỏ để nhét nội dung. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
Field coverage (absence is not verification):
- font/source/rights/load/fallback: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: source-type, proposal-type, type-scale, type-number, type-vietnamese | Evidence: source-audit.json, official-source-observations.json
- size/weight/leading/tracking tuples: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: source-type, proposal-type, type-scale, type-number, type-vietnamese | Evidence: source-audit.json, official-source-observations.json
- Vietnamese: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: source-type, proposal-type, type-scale, type-number, type-vietnamese | Evidence: source-audit.json, official-source-observations.json
- numeric alignment: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: source-type, proposal-type, type-scale, type-number, type-vietnamese | Evidence: source-audit.json, official-source-observations.json

## spacing-shape — Khoảng cách và hình học
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: spacing scale, padding/gap, radius/border/size, alignment/density
- spacing-scale | Nhịp khoảng cách: Thang 4,8,12,16,24,32,48,64 px; nội dung 16 px tối thiểu ở điện thoại,24 px ở desktop; thẻ 24 px, nhóm 32 px. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- geometry | Hình học: Khung kỹ thuật góc 4 px, hộp thoại 8 px; viền 1 px, nét biểu tượng 2 px/24 px. Tấm phẳng, ô thông số và nhịp sườn pallet tạo nét riêng; không dùng khung game hay hình pixel. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- safe-zone | Vùng an toàn bên trong: Giữ ít nhất 16 px giữa chữ và viền; nhãn ngắn căn giữa khối chữ theo hai trục sau khi phông tải xong; đoạn dài giữ căn trái. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- painted-gap | Khoảng hở đã vẽ: Các phần ngang hàng chừa 24 px sau cả bóng và nét. Không tính riêng hộp bố cục nếu hình hoặc bóng còn vượt ra ngoài. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- fill-outline | Hình đặc và viền: Hai bản phải giữ cùng đường bao, tâm và phần rỗng. Không thay hình học chỉ để bản viền trông mảnh hơn. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
Field coverage (absence is not verification):
- spacing scale: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: spacing-scale, geometry, safe-zone, painted-gap, fill-outline | Evidence: source-audit.json, official-source-observations.json
- padding/gap: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: spacing-scale, geometry, safe-zone, painted-gap, fill-outline | Evidence: source-audit.json, official-source-observations.json
- radius/border/size: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: spacing-scale, geometry, safe-zone, painted-gap, fill-outline | Evidence: source-audit.json, official-source-observations.json
- alignment/density: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: spacing-scale, geometry, safe-zone, painted-gap, fill-outline | Evidence: source-audit.json, official-source-observations.json

## components — Thành phần giao diện
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: purpose/anatomy, variants/states, responsive, keyboard/focus, motion reference, dependency/source/specimen/QA
- button-contract | Nút và trạng thái: Mỗi nhóm có một hành động chính; nút phụ, nguy hiểm, chỉ biểu tượng có nhãn truy cập. Có thường/rê/nhấn/tập trung/khóa/đang xử lý/lỗi/thành công; khóa không phát hành động. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- input-contract | Nhập và chọn: Nhãn cố định, hướng dẫn trước nhập, lỗi sát trường và chỉ cách sửa; lỗi không xóa nội dung. Công tắc dùng aria-checked; hộp kiểm dùng phần tử native. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- nav-contract | Điều hướng: Đánh dấu mục hiện tại bằng chữ và hình; bàn phím Tab/Enter hoạt động; liên kết sâu mở đúng phần và nội dung thu gọn chứa nó. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- dialog-contract | Hộp thoại: Tên rõ, khóa nền khi mở, giữ Tab trong hộp, Escape và nút đóng trả tập trung về nút gọi. Xóa cần bước xác nhận; mẫu không gửi dữ liệu. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- component-census | Mảnh ghép và bố cục: Mọi mảnh trong composition có mã thành phần lẻ; khác nội dung, tỷ lệ ảnh hoặc số hàng là biến thể, không nhân thành loại mới. Thiếu loại cần thiết phải báo, không tự nhận tương đương. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
Field coverage (absence is not verification):
- purpose/anatomy: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: button-contract, input-contract, nav-contract, dialog-contract, component-census | Evidence: source-audit.json, official-source-observations.json
- variants/states: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: button-contract, input-contract, nav-contract, dialog-contract, component-census | Evidence: source-audit.json, official-source-observations.json
- responsive: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: button-contract, input-contract, nav-contract, dialog-contract, component-census | Evidence: source-audit.json, official-source-observations.json
- keyboard/focus: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: button-contract, input-contract, nav-contract, dialog-contract, component-census | Evidence: source-audit.json, official-source-observations.json
- motion reference: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: button-contract, input-contract, nav-contract, dialog-contract, component-census | Evidence: source-audit.json, official-source-observations.json
- dependency/source/specimen/QA: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: button-contract, input-contract, nav-contract, dialog-contract, component-census | Evidence: source-audit.json, official-source-observations.json

## guidelines — Nguyên tắc và lời nói
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: principles, do/don't, voice/tone by situation, claim discipline, anti-slop exceptions
- principles | Ba nguyên tắc: Cho người đọc thấy sản phẩm hoặc công việc trước; đặt thông số cạnh điều kiện; hành động cuối rõ một việc. Ưu tiên khả năng đối chiếu hơn hiệu ứng. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- claim-discipline | Kỷ luật lời hứa: Không tự gắn chứng nhận, chuẩn an toàn, vật liệu, tải trọng, tuổi thọ, tái chế hay tiết kiệm. Mọi tuyên bố cần nguồn riêng còn hiệu lực; logo không chứng minh chất lượng. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- voice-policy | Giọng văn: Đề xuất: rõ việc, chính xác, tôn trọng. Nói người đọc cần cung cấp gì và bước tiếp theo; tránh tốt nhất, bền vững tuyệt đối, bảo đảm nếu thiếu căn cứ. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- data-limits | Dữ liệu minh họa: Số trong biểu đồ, bảng kho và báo giá mẫu là giả lập; không phải doanh số, tồn kho hoặc năng lực công ty. Giữ nhãn minh họa cạnh dữ liệu. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
Field coverage (absence is not verification):
- principles: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: principles, claim-discipline, voice-policy, data-limits | Evidence: source-audit.json, official-source-observations.json
- do/don't: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: principles, claim-discipline, voice-policy, data-limits | Evidence: source-audit.json, official-source-observations.json
- voice/tone by situation: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: principles, claim-discipline, voice-policy, data-limits | Evidence: source-audit.json, official-source-observations.json
- claim discipline: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: principles, claim-discipline, voice-policy, data-limits | Evidence: source-audit.json, official-source-observations.json
- anti-slop exceptions: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: principles, claim-discipline, voice-policy, data-limits | Evidence: source-audit.json, official-source-observations.json

## surfaces-elevation — Bề mặt và độ nổi
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: surface roles, border/shadow values or none, token references, clipping/layering
- shadow-levels | Độ nổi: Thẻ:0 3 px 9 px rgba(0,16,46,.12); hộp thoại:0 8 px 24 px rgba(0,16,46,.19). Phần nhận màu và khoảng hở là một phần của công thức. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- layering | Thứ tự lớp: Nền 0, nội dung 1, điều hướng 10, lớp phủ 40, hộp thoại 50, thông báo 60; không để bóng phủ chữ của phần ngang hàng. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- surface-exception | Ngoại lệ mặt phẳng: Chữ, logo, trục và dấu dữ liệu không đổ bóng riêng; khung ngoài chịu bóng. Chế độ tương phản cao dùng viền hệ thống rõ. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
Field coverage (absence is not verification):
- surface roles: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: shadow-levels, layering, surface-exception | Evidence: source-audit.json, official-source-observations.json
- border/shadow values or none: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: shadow-levels, layering, surface-exception | Evidence: source-audit.json, official-source-observations.json
- token references: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: shadow-levels, layering, surface-exception | Evidence: source-audit.json, official-source-observations.json
- clipping/layering: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: shadow-levels, layering, surface-exception | Evidence: source-audit.json, official-source-observations.json

## imagery-icons — Nhận diện và hình ảnh
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: identity usage, image grammar, icon grid/stroke/size, custom brand rules, rights/provenance
- identity-original | Logo gốc: Giữ nguyên bốn PNG nguồn. Không vẽ lại 405, đổi tỷ lệ, sửa chữ, đổi màu, cắt dấu mặt trời hoặc ghép vào biểu tượng mới. Khoảng trống minh họa là đề xuất, không phải quy chuẩn gốc. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- industrial-grammar | Ngữ pháp hình: Nhịp sườn, lớp xếp, ô kho và đường kích thước; xanh dương chủ đạo, đỏ điểm nhấn. Minh họa hình học mới mô tả vai trò, không phải bản vẽ kỹ thuật hay ảnh sản phẩm. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- icon-grid | Biểu tượng: Lucide ISC 24 × 24, nét 2 px, đầu nét tròn; bản xanh trên trắng và trắng trên xanh giữ nguyên đường nét. Biểu tượng chức năng không thay logo thương hiệu. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- product-image | Ảnh sản phẩm: Dùng ảnh đúng mã và nguồn có quyền; giữ tỷ lệ, bề mặt và màu thật, không dùng hình dựng để chứng minh cấu tạo hay chịu tải. Chưa có ảnh sản phẩm được duyệt trong thư mục nguồn. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- illustration-ai | Hình minh họa hỗ trợ: Slide thiên hình cần hình liên quan. Mẫu trống ghi rõ vị trí đặt hình. Hình tạo mới không được giả làm ảnh sản phẩm, chứng cứ thực nghiệm hay chứng nhận; nguồn và quyền phải rõ. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
Field coverage (absence is not verification):
- identity usage: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: identity-original, industrial-grammar, icon-grid, product-image, illustration-ai | Evidence: source-audit.json, official-source-observations.json
- image grammar: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: identity-original, industrial-grammar, icon-grid, product-image, illustration-ai | Evidence: source-audit.json, official-source-observations.json
- icon grid/stroke/size: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: identity-original, industrial-grammar, icon-grid, product-image, illustration-ai | Evidence: source-audit.json, official-source-observations.json
- custom brand rules: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: identity-original, industrial-grammar, icon-grid, product-image, illustration-ai | Evidence: source-audit.json, official-source-observations.json
- rights/provenance: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: identity-original, industrial-grammar, icon-grid, product-image, illustration-ai | Evidence: source-audit.json, official-source-observations.json

## layout-composition — Bố cục và cách ghép
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: grid/container/breakpoints, hierarchy/anchor, long-content, selected domain/slide patterns
- responsive-grid | Lưới thích nghi: Desktop 12 cột, rộng nội dung 1200 px, khe 24 px; tablet 8 cột, khe 20 px; mobile 4 cột, khe 16 px. Dưới 768 px xếp dọc; không cuộn ngang phần nội dung bắt buộc. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- eye-stops | Ba điểm đọc: Sản phẩm hoặc câu hỏi là điểm đầu; dữ kiện/điều kiện là điểm hai; hành động hoặc kết luận là điểm ba. Không để logo lớn cạnh tranh thông điệp. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- composition-rule | Quy tắc ghép chính: Chọn công việc đọc, tỷ lệ khung và mảnh đã có; giữ phông/màu/trạng thái/nguồn; thay thứ tự và cách xếp. Không chế thêm loại thành phần khi đang áp dụng. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- table-rule | Bảng dài: Tiêu đề và đơn vị rõ, số căn phải, nhãn căn trái, lặp đầu bảng khi sang trang; giữ đủ hàng. Không cắt cột hoặc chụp ảnh bảng để mất khả năng tìm chữ. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- slide-rule | Slide 16:9: Một thông điệp chính; vùng an toàn 48 px; nguồn 20 px; hình và chữ có vai trò. Chính sách slide 2.1 ưu tiên nội dung, cấu trúc và điểm nhấn trước số lượng hình/chữ. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- map-rule | Bản đồ: Chỉ dùng hình học có nguồn; giữ Hoàng Sa/Trường Sa và 51 đơn vị Hoa Kỳ theo nguồn đã chọn. Dữ liệu giả lập không biểu thị thị trường hay chi nhánh thật. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
Field coverage (absence is not verification):
- grid/container/breakpoints: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: responsive-grid, eye-stops, composition-rule, table-rule, slide-rule, map-rule | Evidence: source-audit.json, official-source-observations.json
- hierarchy/anchor: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: responsive-grid, eye-stops, composition-rule, table-rule, slide-rule, map-rule | Evidence: source-audit.json, official-source-observations.json
- long-content: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: responsive-grid, eye-stops, composition-rule, table-rule, slide-rule, map-rule | Evidence: source-audit.json, official-source-observations.json
- selected domain/slide patterns: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: responsive-grid, eye-stops, composition-rule, table-rule, slide-rule, map-rule | Evidence: source-audit.json, official-source-observations.json

## motion — Chuyển động
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: purpose/trigger, duration/easing, interruption/reentry, reduced/offscreen/static fallback, backend/dependencies
- motion-timing | Thời gian: Phản hồi 120–180 ms, mở vùng 240 ms ease-out; chuyển slide 320 ms. Chỉ chuyển động để giải thích trạng thái, quan hệ hoặc thứ tự. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- motion-lifecycle | Vòng đời: Mặc định đứng yên với mẫu biểu tượng; Play/Pause trên cùng hình; ngắt tiếp diễn không nhân vòng lặp; khi khuất màn hình dừng; giảm chuyển động dùng trạng thái tĩnh. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- opposing-ribbon | Hai dải ngược chiều: Hình chạy trái và chữ chạy phải; mỗi nửa lặp cùng thứ tự; có nút dừng chung. Nội dung bắt buộc luôn có bản tĩnh, không buộc đuổi theo chữ. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- model-control | Mô hình 3D: Mô hình hình học minh họa có xoay/dừng/đặt lại và bản tĩnh. Không nhận là mô hình CAD, phép đo sản phẩm hoặc nguồn ảnh gốc. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
Field coverage (absence is not verification):
- purpose/trigger: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: motion-timing, motion-lifecycle, opposing-ribbon, model-control | Evidence: source-audit.json, official-source-observations.json
- duration/easing: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: motion-timing, motion-lifecycle, opposing-ribbon, model-control | Evidence: source-audit.json, official-source-observations.json
- interruption/reentry: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: motion-timing, motion-lifecycle, opposing-ribbon, model-control | Evidence: source-audit.json, official-source-observations.json
- reduced/offscreen/static fallback: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: motion-timing, motion-lifecycle, opposing-ribbon, model-control | Evidence: source-audit.json, official-source-observations.json
- backend/dependencies: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: motion-timing, motion-lifecycle, opposing-ribbon, model-control | Evidence: source-audit.json, official-source-observations.json

## usage — Cách dùng và phạm vi
Status: proposed — Các giá trị triển khai mới là đề xuất; nguồn quan sát và giới hạn được nêu tại từng quy tắc.
Required detail: task reading map, binding, reuse recipe, constraints, version/change/gaps
- reading-map | Đọc theo việc: Overview nêu quy tắc và định hướng; Library chứa mảnh và ví dụ. Slide vào Nội dung; Website/App vào Giao diện; Design/Edit ở Overview, không tạo tab Applications thứ ba. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- exact-reuse | Tái sử dụng đúng nguồn: Gói tái sử dụng ghi mã, bản 0.1.11-draft, hash tệp, phụ thuộc, quy tắc, quyền và giới hạn. Clipboard lỗi phải hiện văn bản chọn/sao chép; không tự nhận đã ghi bộ nhớ hệ điều hành. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- rights-scope | Quyền và phạm vi: Logo theo manifest approved-reusable; Lucide theo ISC; Be Vietnam Pro theo OFL; hình/tệp mới là đề xuất. Chưa chứng nhận quyền toàn bộ thư viện hoặc xuất bản. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- output-scope | Bốn mục đích PDF: Bốn tài liệu: slide; web/app/UI; design; edit. Overview và quy tắc chung đủ trong cả bốn; vật liệu theo mục đích, toàn bộ hợp lại đủ nguồn. Bản tĩnh không thực thi điều khiển. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- version-gaps | Phiên bản và khoảng trống: Tệp nguồn và manifest ràng buộc hash. Bản này chưa kích hoạt; thiếu phông thương hiệu được phép đóng gói và ảnh sản phẩm được duyệt. Phần đề xuất không được gọi chính thức chỉ vì dựng thành công. | Source: Official CSS/logo observation where named; otherwise task-authored proposal.
- runtime-reading-00 | Vai trò dùng chung và địa chỉ nguồn: Vai trò dùng chung và địa chỉ nguồn
Mỗi vai trò giữ một địa chỉ riêng. Các vai trò có thể dùng chung hình gốc; số vai trò không phải số hình gốc.
Hộp kiểm chưa chọn · vai trò dùng chung
Hộp kiểm chưa chọn
Trạng thái chưa chọn của một lựa chọn; đi cùng nhãn và điều khiển hộp kiểm native.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Tệp · vai trò dùng chung
Tệp
Biểu đạt chức năng tệp; cùng hình ở hai nền nhận.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Dừng tác vụ · vai trò dùng chung
Dừng tác vụ
Lệnh dừng có chủ ý, hình vuông đặc; không dùng thay dấu đầu dòng hay hộp kiểm.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Kiện hàng · vai trò dùng chung
Kiện hàng
Biểu đạt chức năng kiện hàng; cùng hình ở hai nền nhận.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Vận chuyển · vai trò dùng chung
Vận chuyển
Biểu đạt chức năng vận chuyển; cùng hình ở hai nền nhận.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Kiện hàng · vai trò dùng chung
Kiện hàng
Biểu đạt chức năng kiện hàng; cùng hình ở hai nền nhận.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Tác vụ tự động minh họa · vai trò dùng chung
Tác vụ tự động minh họa
Nhịp nhấn nhẹ quanh biểu tượng tác vụ tự động. Chuyển động minh họa không báo tác vụ đang chạy hoặc hoàn tất.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Hiệu chỉnh thiết kế · vai trò dùng chung
Hiệu chỉnh thiết kế
Nhấn hình bút để chỉ vị trí chỉnh sửa; không tự sửa nội dung.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Đọc mã giao diện · vai trò dùng chung
Đọc mã giao diện
Nhấn biểu tượng mã khi giới thiệu tài liệu HTML; không báo chương trình đã chạy.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Nội dung video · vai trò dùng chung
Nội dung video
Nhịp nhấn cho loại video; nút phát thực tế phải có tên và trạng thái riêng.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Soạn nội dung · vai trò dùng chung
Soạn nội dung
Nhấn biểu tượng chữ để giới thiệu bước soạn; không báo đã lưu.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Định hướng theo điểm nối · vai trò dùng chung
Định hướng theo điểm nối
Đánh dấu đường đi giữa các điểm nội dung bằng nhịp chú ý. Không phải la bàn địa lý hay dữ liệu định vị.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Làm mới thông tin · vai trò dùng chung
Làm mới thông tin
Nhịp chú ý quanh hình làm mới để minh họa yêu cầu cập nhật. Không chứng minh dữ liệu đã được tải hoặc kiểm chứng.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Đối chiếu điều kiện bảo vệ · vai trò dùng chung
Đối chiếu điều kiện bảo vệ
Nhịp chú ý cho bước đối chiếu điều kiện; không phải chứng nhận an toàn hoặc xác nhận hệ thống đã được bảo vệ.
Trạng thái: tĩnh · phát · dừng · giảm chuyển động.
Play
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Thanh ngang · vai trò dùng chung
Thanh ngang
Số công việc: 8, 6, 10. Trục 0–12.
Trạng thái: tĩnh · chi tiết · tái sử dụng.
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Danh sách bằng dấu hình · vai trò dùng chung
Danh sách bằng dấu hình
Nhóm các ý ngang cấp bằng dấu vuông nhỏ.
Trạng thái: tĩnh · chi tiết · tái sử dụng.
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Danh sách bằng biểu tượng · vai trò dùng chung
Danh sách bằng biểu tượng
Nhóm các ý ngang cấp bằng biểu tượng có nhãn.
Trạng thái: tĩnh · chi tiết · tái sử dụng.
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Phiếu mục tiêu · vai trò dùng chung
Phiếu mục tiêu
Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
Trạng thái: tĩnh · chi tiết · tái sử dụng.
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Quy tắc và cách sửa · vai trò dùng chung
Quy tắc và cách sửa
Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
Trạng thái: tĩnh · chi tiết · tái sử dụng.
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Phạm vi sử dụng · vai trò dùng chung
Phạm vi sử dụng
Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
Trạng thái: tĩnh · chi tiết · tái sử dụng.
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Ví dụ có giải thích · vai trò dùng chung
Ví dụ có giải thích
Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
Trạng thái: tĩnh · chi tiết · tái sử dụng.
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò
Thẻ nguồn · vai trò dùng chung
Thẻ nguồn
Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
Trạng thái: tĩnh · chi tiết · tái sử dụng.
Mở hình gốc và chức năng
Tái sử dụng đúng vai trò | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-01 | Ghép mảnh, không tạo thêm loại: Ghép mảnh, không tạo thêm loại
Chốt câu hỏi và khung: xác định người đọc, ý chính, tỷ lệ, chiều rộng và cách cuộn hoặc phân trang.
Lập danh sách mảnh: chọn đúng mã component, biến thể và trường nội dung. Mỗi mảnh hiện trên composition phải có mẫu lẻ để đối chiếu.
Giữ phần cố định: phông, vai trò màu, khung, bóng, chức năng, trạng thái, đơn vị và nguồn. Chỉ thay nội dung, số lượng trong sức chứa và cách xếp.
Đổi cách xếp: chọn cột, hàng, thứ tự đọc, tỷ lệ vùng ảnh và điểm ngắt từ mảnh hiện có. Không thêm loại thẻ, biểu đồ hay điều khiển mới.
Thiếu loại cần thiết: báo đúng chỗ thiếu; đổi cách trình bày hoặc đề xuất bổ sung riêng để duyệt. Không âm thầm chế component.
Kiểm tại nơi dùng: đọc nội dung thật; kiểm căn hàng, khoảng hở, chữ, nguồn, trạng thái và tràn. Nếu quá sức chứa, thêm trang hoặc xếp dọc; không ép chữ nhỏ lại.
Đích	Cách thích nghi	Điều giữ nguyên
Slide 16:9	Khung ngang, một thông điệp chính.	Mẫu lẻ, lưới căn và vùng an toàn.
PDF dọc / tỷ lệ khác	Xếp lại cùng mảnh, ngắt trang tại nhóm ý; lặp tiêu đề bảng.	Thứ tự, dữ liệu, nguồn và cỡ chữ đọc được.
Website	Chia vùng cuộn; đổi từ nhiều cột thành một cột khi hẹp.	Chức năng mảnh và quan hệ giữa các nhóm.
App	Đặt mảnh vào luồng tác vụ và điều khiển đã có.	Trạng thái, bàn phím và phản hồi thao tác.
Đọc hướng dẫn và hợp đồng dành cho agent | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-02 | Căn giữa ô và thẻ nhãn ngắn: Căn giữa ô và thẻ nhãn ngắn
Với ô hoặc thẻ độc lập chứa nhãn ngắn, căn giữa chữ theo cả hai chiều. Nếu xuống dòng, căn giữa từng dòng theo trục ngang và toàn bộ khối chữ theo trục dọc; giữ khoảng đệm quanh chữ. Đo sau khi phông chữ tải xong, không dùng vị trí dòng đầu làm tâm và không kéo lệch từng nhãn để chữa lỗi.
Khi thích nghi cùng loại component sang design system khác, giữ cách căn này, dùng phông chữ, màu và khoảng đệm của hệ thống đích rồi kiểm lại ở khung hẹp, khung rộng và nhãn nhiều dòng. Đoạn văn dài, bảng đọc theo cột và thẻ có phân cấp tiêu đề–nội dung giữ bố cục đọc riêng.
Vùng an toàn bên trong khung · Khoảng hở giữa các phần, tính cả bóng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-03 | Cùng mảnh ghép · đổi khung: Cùng mảnh ghép · đổi khung
Chọn khung để kiểm cách dàn lại; mẫu này chỉ ghép các mảnh đã liệt kê.
16:9
A4 dọc
1:1
Website / App
VÍ DỤ THÍCH NGHI · CÙNG MẢNH GHÉP
Đọc dữ kiện cùng ngữ cảnh.
Đọc đúng ngữ cảnh
Hình pallet đặt trọng tâm. Cột này giải thích nhu cầu cần đối chiếu: kích thước, cách di chuyển và môi trường sử dụng.
Yêu cầu	Mẫu A	Mẫu B
Kích thước	Cần nguồn	Cần nguồn
Môi trường	Kho khô · ví dụ	Ngoài trời · ví dụ
Tải trọng	Chưa xác nhận	Chưa xác nhận
LONG THÀNH · Nội dung minh họa | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-04 | Chức năng và trạng thái: Chức năng và trạng thái
Hành động chính dùng một nút nổi bật trong mỗi nhóm. Hành động phụ giữ độ nhấn thấp hơn; thao tác xóa cần xác nhận trong mẫu thật.
Lưu mẫu
Đặt lại
Xóa lựa chọn
Không khả dụng
i
Nhận thông tin
Bật thông báo
Chọn nhóm
Nội dung
Tên mẫu
Chưa lưu. Đây là dữ liệu minh họa trong trình duyệt.
Cách kiểm các trạng thái
Thường: không tương tác. Rê chuột: đưa chuột lên nút. Nhấn: giữ chuột. Bàn phím: dùng Tab rồi Enter. Đang chọn: bật ô kiểm hoặc công tắc. Đang xử lý: bấm Lưu khi có tên. Lỗi: bấm Lưu khi tên trống. Không khả dụng: nút khóa không tạo hành động.
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-05 | Dải hình và chữ chạy ngược chiều: Dải hình và chữ chạy ngược chiều
Hình chạy sang trái, chữ chạy sang phải; hai dải lặp liên tục và dùng chung Play / Pause. Thay nội dung, giữ hai nửa của mỗi dải giống nhau.
Kích thước rõ
Điều kiện đủ
Đối chiếu nguồn
Kích thước rõ
Điều kiện đủ
Đối chiếu nguồn
Kích thước rõ
Điều kiện đủ
Đối chiếu nguồn
Kích thước rõ
Điều kiện đủ
Đối chiếu nguồn
Bản chữ tĩnh: Kích thước rõ · Điều kiện đủ · Đối chiếu nguồn.
Play
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-06 | Địa cầu 3D và bản đồ: Địa cầu 3D và bản đồ
Xoay địa cầu thật hoặc chọn bản đồ Việt Nam, Hoa Kỳ. Việt Nam có hai khung nhìn gần Hoàng Sa và Trường Sa.
Địa cầu 3D
Việt Nam
Hoa Kỳ
Mở bản đồ đầy đủ và nguồn
Play
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-07 | Làm slide theo nội dung: LONG THÀNH / HƯỚNG DẪN DÙNG SLIDE TEMPLATE
Làm slide theo nội dung
Chọn đúng ý. Giải thích trực quan. Viết ngắn và dễ hiểu.
Khuyến khích minh họa bằng AI khi phù hợp
Với slide nhiều hình, ít chữ, xác định ý nghĩa và vị trí từng khung ảnh. Tạo hình minh họa bằng AI khi phù hợp, đúng nội dung và phong cách thương hiệu; đặt ảnh thật vào placeholder trước khi bàn giao slide hoàn chỉnh. Giữ tỷ lệ, vùng an toàn, điểm nhìn và cách cắt ảnh của mẫu; kiểm ảnh đã tải và không còn khung trống ngoài chủ đích. Mẫu thư viện có thể giữ placeholder trung tính để tái sử dụng; phải ghi rõ đó là mẫu. Tuân thủ quyền sử dụng, riêng tư, chi phí và quy trình Image; không dùng ảnh tạo làm bằng chứng người, sự kiện hay dự án thật, không bịa số liệu.
Nhịp tham chiếu: 3 slide chữ / 1 slide hình
Dùng mốc 3 slide nhiều chữ, ít hình / 1 slide nhiều hình, ít chữ để rà soát nhịp toàn bộ bài. Không bắt buộc ba slide chữ liên tiếp và không cần chờ đủ ba mới dùng hình. Có thể xen kẽ, đặt hình sớm hoặc dùng nhiều slide hình liên tục khi nội dung phù hợp. Hình phải mang ý nghĩa giải thích; icon nhỏ, nền trang trí và trang chỉ có tiêu đề không được tính. Với bài ngắn hoặc số trang đã chốt, sắp lại trong phạm vi đó; không thêm hình hay trang thừa để đủ tỷ lệ.
Theo nội dung; trực quan, ngắn và dễ hiểu
Chọn template và cách sắp xếp theo câu hỏi cần trả lời, không ép nội dung vào một công thức cố định. Ưu tiên trực quan hóa bằng các component hiện có khi giúp người đọc hiểu nhanh hơn: sơ đồ cho quan hệ hoặc tiến trình, biểu đồ cho dữ liệu, ảnh cho bối cảnh và ví dụ. Mỗi slide tập trung một thông điệp; viết ngắn gọn, đi thẳng vào ý chính, dùng từ dễ hiểu. Giữ dữ kiện, điều kiện và nguồn cần thiết; không rút gọn đến mất nghĩa.
Giữ nghĩa, cấu trúc và kiểm bản xuất
Dùng icon có nghĩa ở tiêu đề
Đặt một icon phù hợp với ý chính bên cạnh tiêu đề slide hoặc tiêu đề nhóm khi giúp định hướng và hợp mẫu đã chọn. Dùng bộ icon đã duyệt của thương hiệu; đồng bộ nét, kích thước, màu và khoảng cách với chữ. Giữ tiêu đề là chữ đọc được, căn icon theo nhóm chữ thực tế kể cả khi xuống dòng; icon không thay nội dung, không che chữ và không thay hình minh họa chính. Kiểm tiêu đề cùng icon trên bản HTML và PDF cuối. Với tiêu đề đã khóa, trích nguyên văn hoặc mẫu chủ đích không có icon, giữ thiết kế và ghi lý do.
Giữ nghĩa trước khi rút gọn
Đọc toàn bộ nguồn. Chọn câu hỏi chính cho từng slide, viết lại ngắn và rõ theo giọng được hướng dẫn trong cẩm nang này. Giữ người phụ trách, số/đơn vị, thứ tự, điều kiện, phủ định và trạng thái đề xuất hoặc ví dụ. Không biến lịch tham chiếu thành cam kết. Ghi rõ phần gộp, đưa vào ghi chú/phụ lục hoặc loại khỏi phạm vi.
Chọn cách chia ý
Một ý giải thích liên tục dùng đoạn ngắn. Nhiều ý song song dùng danh sách có bullet; các bước có thứ tự dùng số; so sánh dùng bảng; quan hệ dùng sơ đồ đúng nghĩa. Số ngoài thẻ không thay cho danh sách các tác vụ bên trong. Chỉ dùng icon thay bullet khi nó bổ sung nghĩa và hợp bộ biểu tượng của thương hiệu.
Nhấn từ khóa trong thân bài
In đậm chọn lọc từ/cụm từ quan trọng trong thân bài bằng phông đậm thật của thương hiệu; phần còn lại thường. Giữ phủ định và điều kiện cần hiểu. Không lấy tiêu đề đậm hoặc cả đoạn đậm làm bằng chứng rằng từ khóa đã được nhấn đúng.
Kiểm chính bản xuất cuối
Giữ phông, màu, bóng, khung và vùng an toàn của thương hiệu trong cẩm nang. Kiểm bản xuất thật: đủ ý/điều kiện; tiếng Việt đủ dấu; bullet và chữ đậm đúng; hình không mất/cắt; nhịp toàn bộ bộ slide đạt; nguồn và chú thích đúng. Sửa lỗi trước bàn giao. Chỉ khẳng định đã tuân thủ sau khi kiểm chính đầu ra đó.
Chọn hình thức theo quan hệ nội dung
Nội dung	Cách thể hiện	Điều cần giữ
Một ý liên tục	Đoạn ngắn	Không cắt vụn câu bằng dấu đầu dòng.
Nhiều ý song song	Danh sách gạch đầu dòng	Một ý độc lập trên mỗi mục.
Các bước có thứ tự	Số hoặc sơ đồ tiến trình	Giữ đúng thứ tự và người phụ trách.
So sánh cùng tiêu chí	Bảng đối chiếu	Dùng chung tiêu chí cho các đối tượng.
Số liệu hoặc quan hệ	Biểu đồ hoặc sơ đồ	Chỉ vẽ dữ liệu và quan hệ có nguồn.
Ví dụ: nhiều việc song song
Đọc toàn bộ nguồn trước khi chọn ý chính.
Giữ điều kiện và phủ định khi viết ngắn lại.
Chọn hình giải thích đúng quan hệ cần truyền đạt.
Ví dụ hợp lệ: chữ → hình → chữ → hình; hoặc hình → hình → chữ. Không phải chờ đủ ba slide chữ mới dùng hình.
Trạng thái bốn tài liệu PDF
Đọc hướng dẫn dạng văn bản
Chọn mẫu nhiều hình | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-08 | Quy tắc và thông tin bổ sung: 7 loại mảnh được đối chiếu với 27 slide. Các biến thể cùng chức năng nằm chung một thẻ. Nội dung, số hàng và tỷ lệ ảnh là tham số; không tạo thẻ trùng chỉ vì đổi chữ hoặc tỷ lệ. | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-09 | Tiêu đề và nhãn dẫn: Tiêu đề và nhãn dẫn
Mở đầu
Dùng trong 27 bố cục.
Các biến thể cùng loại
Đối chiếu nhu cầu lưu trữ và vận chuyển
Xem nơi dùng
Mở đầu
Mục lục
Mở phần
Kết thúc
Một hình lớn
Dải hình
Bảng hình
Hai hàng có ngữ cảnh
Hình chính và chi tiết
Toàn cảnh và hai góc
Đối chiếu hai hình
Sáu chi tiết
Hình nền và vùng chữ
Hình dọc và thông điệp
Ma trận đối chiếu
Hai bảng dữ kiện
Ba nhóm nội dung
Dữ kiện và giới hạn
Bốn bước thực hiện
Bảng theo dõi
Tổng quan dữ kiện
Bảng và hình
Các mục và hình dọc
Hành trình theo bước
Cơ cấu dữ liệu minh họa
So sánh theo tiêu chí
Xếp hạng minh họa
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-10 | Khối chữ · nội dung và chú thích: Khối chữ · nội dung và chú thích
Tài liệu minh họa · 24/10/2026
Dùng trong 20 bố cục. Biến thể: Đoạn nội dung · Chú thích.
Các biến thể cùng loại
Nhóm sử dụng: người chuẩn bị thông tin sản phẩm · Người trình bày: nhóm thiết kế đề xuất
Minh họa pallet
Xem nơi dùng
Mở đầu
Mục lục
Mở phần
Kết thúc
Một hình lớn
Dải hình
Bảng hình
Hai hàng có ngữ cảnh
Hình chính và chi tiết
Toàn cảnh và hai góc
Đối chiếu hai hình
Sáu chi tiết
Hình nền và vùng chữ
Hình dọc và thông điệp
Bảng theo dõi
Tổng quan dữ kiện
Bảng và hình
Các mục và hình dọc
Hành trình theo bước
Cơ cấu dữ liệu minh họa
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-11 | Nguồn và số trang: Nguồn và số trang
Dữ liệu và hình học giả lập · Không phải thông số, thị trường hoặc kết quả Long Thành
Dùng trong 27 bố cục.
Xem nơi dùng
Mở đầu
Mục lục
Mở phần
Kết thúc
Một hình lớn
Dải hình
Bảng hình
Hai hàng có ngữ cảnh
Hình chính và chi tiết
Toàn cảnh và hai góc
Đối chiếu hai hình
Sáu chi tiết
Hình nền và vùng chữ
Hình dọc và thông điệp
Ma trận đối chiếu
Hai bảng dữ kiện
Ba nhóm nội dung
Dữ kiện và giới hạn
Bốn bước thực hiện
Bảng theo dõi
Tổng quan dữ kiện
Bảng và hình
Các mục và hình dọc
Hành trình theo bước
Cơ cấu dữ liệu minh họa
So sánh theo tiêu chí
Xếp hạng minh họa
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-12 | Danh sách và các bước: Danh sách và các bước
Nhu cầu và phạm vi
Dữ kiện cần đối chiếu
Khung trình bày và nguồn
Điểm chưa xác nhận và bước tiếp theo
Dùng trong 4 bố cục.
Các biến thể cùng loại
Môi trường sử dụng
Kích thước và cách di chuyển
Điều kiện cần xác nhận
Ghi nhu cầu
Nhận nguồn
Đối chiếu
Xác nhận
Xem nơi dùng
Mục lục
Mở phần
Bốn bước thực hiện
So sánh theo tiêu chí
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-13 | Thẻ tiêu đề và diễn giải: Thẻ tiêu đề và diễn giải
Đọc đúng ngữ cảnh
Hình pallet đặt trọng tâm. Cột này giải thích nhu cầu cần đối chiếu: kích thước, cách di chuyển và môi trường sử dụng.
Dùng trong 7 bố cục.
Xem nơi dùng
Một hình lớn
Hai hàng có ngữ cảnh
Ma trận đối chiếu
Ba nhóm nội dung
Dữ kiện và giới hạn
Các mục và hình dọc
Xếp hạng minh họa
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-14 | Bảng đối chiếu: Bảng đối chiếu
Yêu cầu	Mẫu A	Mẫu B
Kích thước	Cần nguồn	Cần nguồn
Môi trường	Kho khô · ví dụ	Ngoài trời · ví dụ
Tải trọng	Chưa xác nhận	Chưa xác nhận
Dùng trong 9 bố cục. Biến thể: 3 cột · 2 cột · 4 cột · 5 cột.
Xem nơi dùng
Ma trận đối chiếu
Hai bảng dữ kiện
Bốn bước thực hiện
Tổng quan dữ kiện
Bảng và hình
Hành trình theo bước
Cơ cấu dữ liệu minh họa
So sánh theo tiêu chí
Xếp hạng minh họa
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
- runtime-reading-15 | Biểu đồ cột trong slide: Biểu đồ cột trong slide
Dữ liệu giả lập; không phải số liệu Long Thành.
Dùng trong 4 bố cục.
Xem nơi dùng
Dữ kiện và giới hạn
Bảng theo dõi
Tổng quan dữ kiện
Cơ cấu dữ liệu minh họa
Tái sử dụng | Source: Current own-authored runtime literal readback; component/source figures remain in the associated native records; no operation or approval claim.
Field coverage (absence is not verification):
- task reading map: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: reading-map, exact-reuse, rights-scope, output-scope, version-gaps | Evidence: source-audit.json, official-source-observations.json
- binding: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: reading-map, exact-reuse, rights-scope, output-scope, version-gaps | Evidence: source-audit.json, official-source-observations.json
- reuse recipe: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: reading-map, exact-reuse, rights-scope, output-scope, version-gaps | Evidence: source-audit.json, official-source-observations.json
- constraints: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: reading-map, exact-reuse, rights-scope, output-scope, version-gaps | Evidence: source-audit.json, official-source-observations.json
- version/change/gaps: proposed — Quy tắc và mẫu triển khai đề xuất; cần kiểm tại nơi dùng và đánh giá độc lập. | Records: reading-map, exact-reuse, rights-scope, output-scope, version-gaps | Evidence: source-audit.json, official-source-observations.json

## overview — Cách đọc hệ thống
Đối chiếu quy tắc cách đọc hệ thống với mẫu áp dụng thực tế trong cùng vùng đọc.
- Đọc theo việc: Overview nêu quy tắc và định hướng; Library chứa mảnh và ví dụ. Slide vào Nội dung; Website/App vào Giao diện; Design/Edit ở Overview, không tạo tab Applications thứ ba.
- Tái sử dụng đúng nguồn: Gói tái sử dụng ghi mã, bản 0.1.11-draft, hash tệp, phụ thuộc, quy tắc, quyền và giới hạn. Clipboard lỗi phải hiện văn bản chọn/sao chép; không tự nhận đã ghi bộ nhớ hệ điều hành.
- Quyền và phạm vi: Logo theo manifest approved-reusable; Lucide theo ISC; Be Vietnam Pro theo OFL; hình/tệp mới là đề xuất. Chưa chứng nhận quyền toàn bộ thư viện hoặc xuất bản.
- Bốn mục đích PDF: Bốn tài liệu: slide; web/app/UI; design; edit. Overview và quy tắc chung đủ trong cả bốn; vật liệu theo mục đích, toàn bộ hợp lại đủ nguồn. Bản tĩnh không thực thi điều khiển.
- Phiên bản và khoảng trống: Tệp nguồn và manifest ràng buộc hash. Bản này chưa kích hoạt; thiếu phông thương hiệu được phép đóng gói và ảnh sản phẩm được duyệt. Phần đề xuất không được gọi chính thức chỉ vì dựng thành công.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## identity — Nhận diện nguồn
Đối chiếu quy tắc nhận diện nguồn với mẫu áp dụng thực tế trong cùng vùng đọc.
- Logo gốc: Giữ nguyên bốn PNG nguồn. Không vẽ lại 405, đổi tỷ lệ, sửa chữ, đổi màu, cắt dấu mặt trời hoặc ghép vào biểu tượng mới. Khoảng trống minh họa là đề xuất, không phải quy chuẩn gốc.
- Ngữ pháp hình: Nhịp sườn, lớp xếp, ô kho và đường kích thước; xanh dương chủ đạo, đỏ điểm nhấn. Minh họa hình học mới mô tả vai trò, không phải bản vẽ kỹ thuật hay ảnh sản phẩm.
- Biểu tượng: Lucide ISC 24 × 24, nét 2 px, đầu nét tròn; bản xanh trên trắng và trắng trên xanh giữ nguyên đường nét. Biểu tượng chức năng không thay logo thương hiệu.
- Ảnh sản phẩm: Dùng ảnh đúng mã và nguồn có quyền; giữ tỷ lệ, bề mặt và màu thật, không dùng hình dựng để chứng minh cấu tạo hay chịu tải. Chưa có ảnh sản phẩm được duyệt trong thư mục nguồn.
- Hình minh họa hỗ trợ: Slide thiên hình cần hình liên quan. Mẫu trống ghi rõ vị trí đặt hình. Hình tạo mới không được giả làm ảnh sản phẩm, chứng cứ thực nghiệm hay chứng nhận; nguồn và quyền phải rõ.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## type — Chữ và số
Đối chiếu quy tắc chữ và số với mẫu áp dụng thực tế trong cùng vùng đọc.
- Phông nguồn: Trang chính thức khai báo SVN-Kelson Sans và Inter Tight. Chưa có tệp/phép tái phân phối phông nguồn trong Brandkit; không đóng gói phông tải từ website.
- Phông đề xuất: Be Vietnam Pro 400/700, giấy phép OFL đi kèm; phương án triển khai đề xuất, không phải xác nhận nhận diện gốc. Arial là phông dự phòng.
- Thang chữ: Giao diện: tiêu đề 40/48, nhóm 28/36, nội dung 16/26, nhãn 14/20; ở khung hẹp tiêu đề 32/40. Slide 1280 × 720: tiêu đề 40/48 hoặc 42/50 trong trình đọc; thân 22/31 cho mẫu bảng dày, tối thiểu 18/24 cho chú thích. Các mức này là đề xuất có kiểm tra khung, không phải phông nhận diện gốc.
- Số và đơn vị: Dùng chữ số thẳng hàng khi đối chiếu; viết 1200 × 1000 × 150 mm với đơn vị rõ. Không bỏ điều kiện tải tĩnh/tải động/tải kệ; không coi số ví dụ là thông số sản phẩm.
- Tiếng Việt: Giữ đầy đủ dấu, khoảng dòng tránh chạm dấu mũ/dấu thanh. Không viết toàn bộ đoạn dài bằng chữ hoa; không thu chữ nhỏ để nhét nội dung.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## colors — Vai trò màu
Đối chiếu quy tắc vai trò màu với mẫu áp dụng thực tế trong cùng vùng đọc.
- Xanh hành động: #084DD1; nguồn CSS chính thức. Chữ trắng trên xanh cho nút chính; không tô toàn bộ dữ liệu bằng một màu nhấn.
- Đỏ nhận diện: #FF0005; nguồn CSS chính thức. Dùng cho điểm nhấn nhận diện, không dùng chữ nhỏ màu đỏ này trên trắng; lỗi dùng #B42318 kèm lời giải thích.
- Chữ và nền: #00102E trên #FFFFFF; nền phụ #F9FBFF, nhóm liên quan #E5EEFF. Không dùng màu duy nhất để báo trạng thái.
- Nền tối: Nền #00102E, khung #10294D, chữ #FFFFFF, chữ phụ #C5D6F1, hành động #81B0FF với chữ #00102E. Giữ logo trên vùng trắng khi dùng bản logo nền sáng.
- Trạng thái: Thành công #146C43, cảnh báo #8A4B00, lỗi #B42318, thông tin #084DD1; luôn kèm nhãn hoặc biểu tượng có nghĩa.
- Độ tương phản: Chữ thường tối thiểu 4.5:1, chữ lớn 3:1; đo màu nhận thật sau lớp phủ. Khung điều khiển và dấu trạng thái 3:1. Màu nhấn nguồn không mặc nhiên đạt mọi cặp.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## spacing — Khoảng cách và hình học
Đối chiếu quy tắc khoảng cách và hình học với mẫu áp dụng thực tế trong cùng vùng đọc.
- Nhịp khoảng cách: Thang 4, 8, 12, 16, 24, 32, 48, 64 px; nội dung 16 px tối thiểu ở điện thoại, 24 px ở desktop; thẻ 24 px, nhóm 32 px.
- Hình học: Khung kỹ thuật góc 4 px, hộp thoại 8 px; viền 1 px, nét biểu tượng 2 px/24 px. Tấm phẳng, ô thông số và nhịp sườn pallet tạo nét riêng; không dùng khung game hay hình pixel.
- Vùng an toàn bên trong: Giữ ít nhất 16 px giữa chữ và viền; nhãn ngắn căn giữa khối chữ theo hai trục sau khi phông tải xong; đoạn dài giữ căn trái.
- Khoảng hở đã vẽ: Các phần ngang hàng chừa 24 px sau cả bóng và nét. Không tính riêng hộp bố cục nếu hình hoặc bóng còn vượt ra ngoài.
- Hình đặc và viền: Hai bản phải giữ cùng đường bao, tâm và phần rỗng. Không thay hình học chỉ để bản viền trông mảnh hơn.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## shadow-guideline — Bề mặt và độ nổi
Đối chiếu quy tắc bề mặt và độ nổi với mẫu áp dụng thực tế trong cùng vùng đọc.
- Độ nổi: Thẻ: 0 3 px 9 px rgba(0,16,46,.12); hộp thoại: 0 8 px 24 px rgba(0,16,46,.19). Phần nhận màu và khoảng hở là một phần của công thức.
- Thứ tự lớp: Nền 0, nội dung 1, điều hướng 10, lớp phủ 40, hộp thoại 50, thông báo 60; không để bóng phủ chữ của phần ngang hàng.
- Ngoại lệ mặt phẳng: Chữ, logo, trục và dấu dữ liệu không đổ bóng riêng; khung ngoài chịu bóng. Chế độ tương phản cao dùng viền hệ thống rõ.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## body-rules — Chữ, hình và dữ kiện
Đối chiếu quy tắc chữ, hình và dữ kiện với mẫu áp dụng thực tế trong cùng vùng đọc.
- Lưới thích nghi: Desktop 12 cột, rộng nội dung 1200 px, khe 24 px; tablet 8 cột, khe 20 px; mobile 4 cột, khe 16 px. Dưới 768 px xếp dọc; không cuộn ngang phần nội dung bắt buộc.
- Ba điểm đọc: Sản phẩm hoặc câu hỏi là điểm đầu; dữ kiện/điều kiện là điểm hai; hành động hoặc kết luận là điểm ba. Không để logo lớn cạnh tranh thông điệp.
- Quy tắc ghép chính: Chọn công việc đọc, tỷ lệ khung và mảnh đã có; giữ phông/màu/trạng thái/nguồn; thay thứ tự và cách xếp. Không chế thêm loại thành phần khi đang áp dụng.
- Bảng dài: Tiêu đề và đơn vị rõ, số căn phải, nhãn căn trái, lặp đầu bảng khi sang trang; giữ đủ hàng. Không cắt cột hoặc chụp ảnh bảng để mất khả năng tìm chữ.
- Slide 16:9: Một thông điệp chính; vùng an toàn 48 px; nguồn 20 px; hình và chữ có vai trò. Chính sách slide 2.1 ưu tiên nội dung, cấu trúc và điểm nhấn trước số lượng hình/chữ.
- Bản đồ: Chỉ dùng hình học có nguồn; giữ Hoàng Sa/Trường Sa và 51 đơn vị Hoa Kỳ theo nguồn đã chọn. Dữ liệu giả lập không biểu thị thị trường hay chi nhánh thật.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## icon-geometry — Hình học biểu tượng
Đối chiếu quy tắc hình học biểu tượng với mẫu áp dụng thực tế trong cùng vùng đọc.
- Logo gốc: Giữ nguyên bốn PNG nguồn. Không vẽ lại 405, đổi tỷ lệ, sửa chữ, đổi màu, cắt dấu mặt trời hoặc ghép vào biểu tượng mới. Khoảng trống minh họa là đề xuất, không phải quy chuẩn gốc.
- Ngữ pháp hình: Nhịp sườn, lớp xếp, ô kho và đường kích thước; xanh dương chủ đạo, đỏ điểm nhấn. Minh họa hình học mới mô tả vai trò, không phải bản vẽ kỹ thuật hay ảnh sản phẩm.
- Biểu tượng: Lucide ISC 24 × 24, nét 2 px, đầu nét tròn; bản xanh trên trắng và trắng trên xanh giữ nguyên đường nét. Biểu tượng chức năng không thay logo thương hiệu.
- Ảnh sản phẩm: Dùng ảnh đúng mã và nguồn có quyền; giữ tỷ lệ, bề mặt và màu thật, không dùng hình dựng để chứng minh cấu tạo hay chịu tải. Chưa có ảnh sản phẩm được duyệt trong thư mục nguồn.
- Hình minh họa hỗ trợ: Slide thiên hình cần hình liên quan. Mẫu trống ghi rõ vị trí đặt hình. Hình tạo mới không được giả làm ảnh sản phẩm, chứng cứ thực nghiệm hay chứng nhận; nguồn và quyền phải rõ.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## relation-rules — Quan hệ dữ liệu
Đối chiếu quy tắc quan hệ dữ liệu với mẫu áp dụng thực tế trong cùng vùng đọc.
- Lưới thích nghi: Desktop 12 cột, rộng nội dung 1200 px, khe 24 px; tablet 8 cột, khe 20 px; mobile 4 cột, khe 16 px. Dưới 768 px xếp dọc; không cuộn ngang phần nội dung bắt buộc.
- Ba điểm đọc: Sản phẩm hoặc câu hỏi là điểm đầu; dữ kiện/điều kiện là điểm hai; hành động hoặc kết luận là điểm ba. Không để logo lớn cạnh tranh thông điệp.
- Quy tắc ghép chính: Chọn công việc đọc, tỷ lệ khung và mảnh đã có; giữ phông/màu/trạng thái/nguồn; thay thứ tự và cách xếp. Không chế thêm loại thành phần khi đang áp dụng.
- Bảng dài: Tiêu đề và đơn vị rõ, số căn phải, nhãn căn trái, lặp đầu bảng khi sang trang; giữ đủ hàng. Không cắt cột hoặc chụp ảnh bảng để mất khả năng tìm chữ.
- Slide 16:9: Một thông điệp chính; vùng an toàn 48 px; nguồn 20 px; hình và chữ có vai trò. Chính sách slide 2.1 ưu tiên nội dung, cấu trúc và điểm nhấn trước số lượng hình/chữ.
- Bản đồ: Chỉ dùng hình học có nguồn; giữ Hoàng Sa/Trường Sa và 51 đơn vị Hoa Kỳ theo nguồn đã chọn. Dữ liệu giả lập không biểu thị thị trường hay chi nhánh thật.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## component-rules — Thành phần và trạng thái
Đối chiếu quy tắc thành phần và trạng thái với mẫu áp dụng thực tế trong cùng vùng đọc.
- Nút và trạng thái: Mỗi nhóm có một hành động chính; nút phụ, nguy hiểm, chỉ biểu tượng có nhãn truy cập. Có thường/rê/nhấn/tập trung/khóa/đang xử lý/lỗi/thành công; khóa không phát hành động.
- Nhập và chọn: Nhãn cố định, hướng dẫn trước nhập, lỗi sát trường và chỉ cách sửa; lỗi không xóa nội dung. Công tắc dùng aria-checked; hộp kiểm dùng phần tử native.
- Điều hướng: Đánh dấu mục hiện tại bằng chữ và hình; bàn phím Tab/Enter hoạt động; liên kết sâu mở đúng phần và nội dung thu gọn chứa nó.
- Hộp thoại: Tên rõ, khóa nền khi mở, giữ Tab trong hộp, Escape và nút đóng trả tập trung về nút gọi. Xóa cần bước xác nhận; mẫu không gửi dữ liệu.
- Mảnh ghép và bố cục: Mọi mảnh trong composition có mã thành phần lẻ; khác nội dung, tỷ lệ ảnh hoặc số hàng là biến thể, không nhân thành loại mới. Thiếu loại cần thiết phải báo, không tự nhận tương đương.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## layout-rules — Lưới và bố cục
Đối chiếu quy tắc lưới và bố cục với mẫu áp dụng thực tế trong cùng vùng đọc.
- Lưới thích nghi: Desktop 12 cột, rộng nội dung 1200 px, khe 24 px; tablet 8 cột, khe 20 px; mobile 4 cột, khe 16 px. Dưới 768 px xếp dọc; không cuộn ngang phần nội dung bắt buộc.
- Ba điểm đọc: Sản phẩm hoặc câu hỏi là điểm đầu; dữ kiện/điều kiện là điểm hai; hành động hoặc kết luận là điểm ba. Không để logo lớn cạnh tranh thông điệp.
- Quy tắc ghép chính: Chọn công việc đọc, tỷ lệ khung và mảnh đã có; giữ phông/màu/trạng thái/nguồn; thay thứ tự và cách xếp. Không chế thêm loại thành phần khi đang áp dụng.
- Bảng dài: Tiêu đề và đơn vị rõ, số căn phải, nhãn căn trái, lặp đầu bảng khi sang trang; giữ đủ hàng. Không cắt cột hoặc chụp ảnh bảng để mất khả năng tìm chữ.
- Slide 16:9: Một thông điệp chính; vùng an toàn 48 px; nguồn 20 px; hình và chữ có vai trò. Chính sách slide 2.1 ưu tiên nội dung, cấu trúc và điểm nhấn trước số lượng hình/chữ.
- Bản đồ: Chỉ dùng hình học có nguồn; giữ Hoàng Sa/Trường Sa và 51 đơn vị Hoa Kỳ theo nguồn đã chọn. Dữ liệu giả lập không biểu thị thị trường hay chi nhánh thật.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## motion-rules — Chuyển động có mục đích
Đối chiếu quy tắc chuyển động có mục đích với mẫu áp dụng thực tế trong cùng vùng đọc.
- Thời gian: Phản hồi 120–180 ms, mở vùng 240 ms ease-out; chuyển slide 320 ms. Chỉ chuyển động để giải thích trạng thái, quan hệ hoặc thứ tự.
- Vòng đời: Mặc định đứng yên với mẫu biểu tượng; Play/Pause trên cùng hình; ngắt tiếp diễn không nhân vòng lặp; khi khuất màn hình dừng; giảm chuyển động dùng trạng thái tĩnh.
- Hai dải ngược chiều: Hình chạy trái và chữ chạy phải; mỗi nửa lặp cùng thứ tự; có nút dừng chung. Nội dung bắt buộc luôn có bản tĩnh, không buộc đuổi theo chữ.
- Mô hình 3D: Mô hình hình học minh họa có xoay/dừng/đặt lại và bản tĩnh. Không nhận là mô hình CAD, phép đo sản phẩm hoặc nguồn ảnh gốc.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## guidelines — Nguyên tắc và giới hạn
Đối chiếu quy tắc nguyên tắc và giới hạn với mẫu áp dụng thực tế trong cùng vùng đọc.
- Ba nguyên tắc: Cho người đọc thấy sản phẩm hoặc công việc trước; đặt thông số cạnh điều kiện; hành động cuối rõ một việc. Ưu tiên khả năng đối chiếu hơn hiệu ứng.
- Kỷ luật lời hứa: Không tự gắn chứng nhận, chuẩn an toàn, vật liệu, tải trọng, tuổi thọ, tái chế hay tiết kiệm. Mọi tuyên bố cần nguồn riêng còn hiệu lực; logo không chứng minh chất lượng.
- Giọng văn: Đề xuất: rõ việc, chính xác, tôn trọng. Nói người đọc cần cung cấp gì và bước tiếp theo; tránh tốt nhất, bền vững tuyệt đối, bảo đảm nếu thiếu căn cứ.
- Dữ liệu minh họa: Số trong biểu đồ, bảng kho và báo giá mẫu là giả lập; không phải doanh số, tồn kho hoặc năng lực công ty. Giữ nhãn minh họa cạnh dữ liệu.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## voice — Giọng viết rõ việc
Đối chiếu quy tắc giọng viết rõ việc với mẫu áp dụng thực tế trong cùng vùng đọc.
- Ba nguyên tắc: Cho người đọc thấy sản phẩm hoặc công việc trước; đặt thông số cạnh điều kiện; hành động cuối rõ một việc. Ưu tiên khả năng đối chiếu hơn hiệu ứng.
- Kỷ luật lời hứa: Không tự gắn chứng nhận, chuẩn an toàn, vật liệu, tải trọng, tuổi thọ, tái chế hay tiết kiệm. Mọi tuyên bố cần nguồn riêng còn hiệu lực; logo không chứng minh chất lượng.
- Giọng văn: Đề xuất: rõ việc, chính xác, tôn trọng. Nói người đọc cần cung cấp gì và bước tiếp theo; tránh tốt nhất, bền vững tuyệt đối, bảo đảm nếu thiếu căn cứ.
- Dữ liệu minh họa: Số trong biểu đồ, bảng kho và báo giá mẫu là giả lập; không phải doanh số, tồn kho hoặc năng lực công ty. Giữ nhãn minh họa cạnh dữ liệu.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## system-relationship — Chuẩn và nơi áp dụng
Đối chiếu quy tắc chuẩn và nơi áp dụng với mẫu áp dụng thực tế trong cùng vùng đọc.
- Đọc theo việc: Overview nêu quy tắc và định hướng; Library chứa mảnh và ví dụ. Slide vào Nội dung; Website/App vào Giao diện; Design/Edit ở Overview, không tạo tab Applications thứ ba.
- Tái sử dụng đúng nguồn: Gói tái sử dụng ghi mã, bản 0.1.11-draft, hash tệp, phụ thuộc, quy tắc, quyền và giới hạn. Clipboard lỗi phải hiện văn bản chọn/sao chép; không tự nhận đã ghi bộ nhớ hệ điều hành.
- Quyền và phạm vi: Logo theo manifest approved-reusable; Lucide theo ISC; Be Vietnam Pro theo OFL; hình/tệp mới là đề xuất. Chưa chứng nhận quyền toàn bộ thư viện hoặc xuất bản.
- Bốn mục đích PDF: Bốn tài liệu: slide; web/app/UI; design; edit. Overview và quy tắc chung đủ trong cả bốn; vật liệu theo mục đích, toàn bộ hợp lại đủ nguồn. Bản tĩnh không thực thi điều khiển.
- Phiên bản và khoảng trống: Tệp nguồn và manifest ràng buộc hash. Bản này chưa kích hoạt; thiếu phông thương hiệu được phép đóng gói và ảnh sản phẩm được duyệt. Phần đề xuất không được gọi chính thức chỉ vì dựng thành công.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## adapt — Thích nghi cùng mảnh ghép
Đối chiếu quy tắc thích nghi cùng mảnh ghép với mẫu áp dụng thực tế trong cùng vùng đọc.
- Lưới thích nghi: Desktop 12 cột, rộng nội dung 1200 px, khe 24 px; tablet 8 cột, khe 20 px; mobile 4 cột, khe 16 px. Dưới 768 px xếp dọc; không cuộn ngang phần nội dung bắt buộc.
- Ba điểm đọc: Sản phẩm hoặc câu hỏi là điểm đầu; dữ kiện/điều kiện là điểm hai; hành động hoặc kết luận là điểm ba. Không để logo lớn cạnh tranh thông điệp.
- Quy tắc ghép chính: Chọn công việc đọc, tỷ lệ khung và mảnh đã có; giữ phông/màu/trạng thái/nguồn; thay thứ tự và cách xếp. Không chế thêm loại thành phần khi đang áp dụng.
- Bảng dài: Tiêu đề và đơn vị rõ, số căn phải, nhãn căn trái, lặp đầu bảng khi sang trang; giữ đủ hàng. Không cắt cột hoặc chụp ảnh bảng để mất khả năng tìm chữ.
- Slide 16:9: Một thông điệp chính; vùng an toàn 48 px; nguồn 20 px; hình và chữ có vai trò. Chính sách slide 2.1 ưu tiên nội dung, cấu trúc và điểm nhấn trước số lượng hình/chữ.
- Bản đồ: Chỉ dùng hình học có nguồn; giữ Hoàng Sa/Trường Sa và 51 đơn vị Hoa Kỳ theo nguồn đã chọn. Dữ liệu giả lập không biểu thị thị trường hay chi nhánh thật.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## package-docs — Nguồn và cách dùng lại
Đối chiếu quy tắc nguồn và cách dùng lại với mẫu áp dụng thực tế trong cùng vùng đọc.
- Đọc theo việc: Overview nêu quy tắc và định hướng; Library chứa mảnh và ví dụ. Slide vào Nội dung; Website/App vào Giao diện; Design/Edit ở Overview, không tạo tab Applications thứ ba.
- Tái sử dụng đúng nguồn: Gói tái sử dụng ghi mã, bản 0.1.11-draft, hash tệp, phụ thuộc, quy tắc, quyền và giới hạn. Clipboard lỗi phải hiện văn bản chọn/sao chép; không tự nhận đã ghi bộ nhớ hệ điều hành.
- Quyền và phạm vi: Logo theo manifest approved-reusable; Lucide theo ISC; Be Vietnam Pro theo OFL; hình/tệp mới là đề xuất. Chưa chứng nhận quyền toàn bộ thư viện hoặc xuất bản.
- Bốn mục đích PDF: Bốn tài liệu: slide; web/app/UI; design; edit. Overview và quy tắc chung đủ trong cả bốn; vật liệu theo mục đích, toàn bộ hợp lại đủ nguồn. Bản tĩnh không thực thi điều khiển.
- Phiên bản và khoảng trống: Tệp nguồn và manifest ràng buộc hash. Bản này chưa kích hoạt; thiếu phông thương hiệu được phép đóng gói và ảnh sản phẩm được duyệt. Phần đề xuất không được gọi chính thức chỉ vì dựng thành công.
Nên dùng: Giữ nguồn, điều kiện và trạng thái ở nơi dùng.
Tránh dùng: Không nhận đề xuất là quy chuẩn đã duyệt hoặc dữ liệu công ty.
Nguồn: Nguồn quan sát chính thức; logo supplied Brandkit; giá trị triển khai mới là đề xuất.

## Showcase structure and selected coverage
Proposed visual records are separate from admitted elements.
```json
{
  "schemaVersion": "design-showcase/v2",
  "coverageMode": "full-benchmark-adaptation",
  "navigation": "header-views-sidebar-contents",
  "counts": {
    "proposedByFamily": {
      "logo": 1,
      "icons-static": 124,
      "ui": 7,
      "reading": 25,
      "backgrounds": 2,
      "charts": 40,
      "models": 3,
      "generative-ai": 1,
      "icons-motion": 8
    },
    "admitted": 0,
    "applications": 42
  },
  "benchmark": {
    "version": "324.10-standard-review",
    "sha256": "2f3a8daf9f6eb3148622a00b31487d9a62fa4909cedf51211940cc38d719f52b"
  },
  "overviewMap": [
    {
      "sourceId": "identity-crest",
      "disposition": "mapped",
      "targetGroups": [
        "imagery-icons"
      ],
      "targetId": "source-overview-identity-crest"
    },
    {
      "sourceId": "identity-direction",
      "disposition": "mapped",
      "targetGroups": [
        "imagery-icons"
      ],
      "targetId": "source-overview-identity-direction"
    },
    {
      "sourceId": "overview",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "overview"
    },
    {
      "sourceId": "identity",
      "disposition": "mapped",
      "targetGroups": [
        "imagery-icons"
      ],
      "targetId": "identity"
    },
    {
      "sourceId": "type",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "type"
    },
    {
      "sourceId": "colors",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "colors"
    },
    {
      "sourceId": "spacing",
      "disposition": "mapped",
      "targetGroups": [
        "spacing-shape"
      ],
      "targetId": "spacing"
    },
    {
      "sourceId": "icon-geometry",
      "disposition": "mapped",
      "targetGroups": [
        "imagery-icons"
      ],
      "targetId": "icon-geometry"
    },
    {
      "sourceId": "body-rules",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "body-rules"
    },
    {
      "sourceId": "relation-rules",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "relation-rules"
    },
    {
      "sourceId": "component-rules",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "component-rules"
    },
    {
      "sourceId": "layout-rules",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "layout-rules"
    },
    {
      "sourceId": "motion-rules",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "motion-rules"
    },
    {
      "sourceId": "icon-clearance",
      "disposition": "mapped",
      "targetGroups": [
        "spacing-shape"
      ],
      "targetId": "source-overview-icon-clearance"
    },
    {
      "sourceId": "guidelines",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "guidelines"
    },
    {
      "sourceId": "voice",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "voice"
    },
    {
      "sourceId": "system-relationship",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "system-relationship"
    },
    {
      "sourceId": "adapt",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "adapt"
    },
    {
      "sourceId": "package-docs",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ],
      "targetId": "package-docs"
    }
  ],
  "exclusions": [
    "No KAI identity, literal brand copy or donor-count quota transfer.",
    "AI image not generated/verified; guidance and blocked image state retained.",
    "No admission, canonical activation, public rights certification or publication."
  ],
  "authorityReference": "Explicit current user request full current-standard Long Thành system; task-local draft preparation only.",
  "featureDisposition": {
    "downloadActions": "none"
  },
  "coverageIntent": {
    "mode": "full-benchmark",
    "authorityReference": "Current explicit full creation request; preserve all256 source-function addresses, independent Long Thành masters and full current20-feature profile."
  },
  "navigationProfile": "compact-design-system/v2",
  "benchmarkFunctions": [
    {
      "id": "icon-core-bullet-square",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-checkbox-empty",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-page-outline",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-home",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-back",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-forward",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-up",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-down",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-menu",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-expand",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-collapse",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-add",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-edit",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-delete",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-duplicate",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-save",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-download",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-upload",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-share",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-search",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-filter",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-sort",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-grid",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-list",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-zoom-in",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-zoom-out",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-eye",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-success",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-warning",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-error",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-info",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-loading",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-help",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-blocked",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-pending",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-file",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-folder",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-text",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-image",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-video",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-audio",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-archive",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-link",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-user",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-team",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-mail",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-chat",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-notification",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-calendar",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-meeting",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-contact",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-task",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-checklist",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-project",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-kanban",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-flag",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-target",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-clock",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-approval",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-bar-chart",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-line-chart",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-pie-chart",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-table",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-trend-up",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-trend-down",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-database",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-report",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-agent",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-workflow",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-terminal",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-code",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-integration",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-run",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-pause",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-stop",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-settings",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-lock",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-unlock",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-key",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-shield",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-permissions",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-refresh",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-logout",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-cart",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-bag",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-card",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-receipt",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-tag",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-package",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-delivery",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-refund",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-book",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-lesson",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-bookmark",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-idea",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-microphone",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-camera",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-presentation",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-core-certificate",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-sword",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-shield-crest",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-helmet",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-armor",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-boots",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-gauntlet",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-bow",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-arrow",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-staff",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-potion",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-scroll",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-quest-board",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-bonfire",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-ember",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-torch",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-lantern",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-castle",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-gate",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-tower",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-tent",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-compass",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-map-marker",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-gem",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "icon-kai-chest",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "agent-knight-automation",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "agent-knight-design",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "agent-knight-html",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "agent-knight-video",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "agent-knight-content",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "animated-compass",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "animated-fire",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "animated-shield",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "ui-buttons",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "ui-topnav",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "ui-actions",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "ui-search",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "ui-tabs",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "ui-check",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "ui-dialog",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "model-helmet",
      "view": "library",
      "family": "models"
    },
    {
      "id": "model-treasure",
      "view": "library",
      "family": "models"
    },
    {
      "id": "model-bonfire",
      "view": "library",
      "family": "models"
    },
    {
      "id": "chart-bar",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-column",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-line",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-area",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-donut",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-stack",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-scatter",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-pie",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-histogram",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-box",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-waterfall",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-heatmap",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-progress-ring",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-stacked-absolute",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-funnel",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-treemap",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-diverging",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-gantt",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-grouped",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-combo",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-slope",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-dumbbell",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-bullet",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-lollipop",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-sparklines",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-calendar-density",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-state-timeline",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-cohort",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-dependency-network",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-sankey",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-parallel",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-candlestick",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-regional-map",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-kpi-table",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-monitored-series",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-decision-tree",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "chart-journey-comparison",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "reading-five-actions",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-moodboard",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-comparison-table",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-quantitative-chart",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-attributed-quote",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-literal-command",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-connectors",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-listing-status",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-listing-sections",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-listing-shapes",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-listing-icons",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-task-brief",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-rule-check-fix",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-readiness-levels",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-worked-example",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "reading-reference-card",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "slide283-default-cover",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-default-agenda",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-default-divider",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-default-close",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-hero",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-strip",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-grid",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-story",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-detail",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-collage",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-pair",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-mosaic",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-background",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-image-split",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-matrix",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-tables",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-columns",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-evidence",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-plan",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-dashboard",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-overview",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-mixed",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-sections",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-journey",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-sales-mix",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-competitors",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "slide283-text-ranking",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "pdf-cover",
      "view": "applications",
      "family": "pdf"
    },
    {
      "id": "pdf-task-brief",
      "view": "applications",
      "family": "pdf"
    },
    {
      "id": "pdf-rule-check-fix",
      "view": "applications",
      "family": "pdf"
    },
    {
      "id": "pdf-readiness-levels",
      "view": "applications",
      "family": "pdf"
    },
    {
      "id": "pdf-worked-example",
      "view": "applications",
      "family": "pdf"
    },
    {
      "id": "pdf-reference-card",
      "view": "applications",
      "family": "pdf"
    },
    {
      "id": "pdf-source-index",
      "view": "applications",
      "family": "pdf"
    },
    {
      "id": "application-service",
      "view": "applications",
      "family": "web-app"
    },
    {
      "id": "application-article",
      "view": "applications",
      "family": "web-app"
    },
    {
      "id": "application-dashboard",
      "view": "applications",
      "family": "web-app"
    },
    {
      "id": "application-editor",
      "view": "applications",
      "family": "web-app"
    },
    {
      "id": "identity-crest",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "identity-direction",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "logo-pair",
      "view": "library",
      "family": "logo"
    },
    {
      "id": "poster-moodboard",
      "view": "applications",
      "family": "production"
    },
    {
      "id": "thumbnail-guideline",
      "view": "applications",
      "family": "production"
    },
    {
      "id": "image-style",
      "view": "applications",
      "family": "production"
    },
    {
      "id": "edit-guideline",
      "view": "applications",
      "family": "production"
    },
    {
      "id": "overview",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "identity",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "type",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "colors",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "spacing",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "icon-geometry",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "body-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "relation-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "component-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "layout-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "motion-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "icon-clearance",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "guidelines",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "voice",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "system-relationship",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "adapt",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "package-docs",
      "view": "overview",
      "family": "rule-jobs"
    }
  ],
  "nativeCensusRef": {
    "path": "assets/native-census.json",
    "sha256": "c9e7369fb508a1675832bd0b13a9b10ab8562ffaa251948795bd242e9057a472"
  },
  "requiredLibraryCategories": [
    "backgrounds",
    "charts",
    "generative-ai",
    "icons-motion",
    "icons-static",
    "logo",
    "models",
    "reading",
    "ui"
  ],
  "primaryCounts": {
    "library": 189,
    "applications": 42,
    "icons": 118,
    "sourceFunctions": 256,
    "sourceRoleAliases": 22,
    "overviewRoleAliases": 3
  },
  "nativeLibrary": {
    "hostId": "view",
    "dataScript": "data.js",
    "rendererScript": "system.js"
  },
  "methodProvenance": {
    "profile": "compact-design-system/v2",
    "profilePath": "reference/benchmark/compact-role-model-v2.json",
    "sha256": "6187b5cac7152e1412309e2404c43354eee1346485b84116d5320a50b290e9e9",
    "revision": "20261021-r09",
    "acceptance": "user-accepted frozen source closure; structure/function transfer only; no donor identity or new asset admission"
  }
}
```
### logo-pair — Logo nguồn Long Thành
Status: proposed; not admitted.
- purpose: Giữ nguyên logo gốc; không dựng lại dấu 405.
- family: logo
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/identity/logo-01.png, assets/identity/logo-03.png, assets/identity/logo_nhựa long thành (1).png, assets/identity/logo_nhựa long thành.png
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-001-square — Dấu đầu dòng vuông
Status: proposed; not admitted.
- purpose: Đánh dấu các ý ngang cấp; không biểu thị lựa chọn hay điều khiển dừng.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Original simple geometry authored for Long Thành functional role; not a copied brand mark.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/role-icon-core-bullet-square-blue-on-white.svg, assets/icons/role-icon-core-bullet-square-white-on-blue.svg
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-002-square-check — Ô đã chọn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng ô đã chọn; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-002-square-check-blue-on-white.svg, assets/icons/icon-002-square-check-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-003-file — Tệp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tệp; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-003-file-blue-on-white.svg, assets/icons/icon-003-file-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-004-house — Trang chủ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trang chủ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-004-house-blue-on-white.svg, assets/icons/icon-004-house-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-005-arrow-left — Quay lại
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng quay lại; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-005-arrow-left-blue-on-white.svg, assets/icons/icon-005-arrow-left-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-006-arrow-right — Đi tiếp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đi tiếp; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-006-arrow-right-blue-on-white.svg, assets/icons/icon-006-arrow-right-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-007-arrow-up — Đi lên
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đi lên; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-007-arrow-up-blue-on-white.svg, assets/icons/icon-007-arrow-up-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-008-arrow-down — Đi xuống
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đi xuống; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-008-arrow-down-blue-on-white.svg, assets/icons/icon-008-arrow-down-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-009-menu — Trình đơn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trình đơn; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-009-menu-blue-on-white.svg, assets/icons/icon-009-menu-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-010-maximize — Mở rộng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mở rộng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-010-maximize-blue-on-white.svg, assets/icons/icon-010-maximize-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-011-minimize — Thu gọn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thu gọn; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-011-minimize-blue-on-white.svg, assets/icons/icon-011-minimize-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-012-plus — Thêm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thêm; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-012-plus-blue-on-white.svg, assets/icons/icon-012-plus-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-013-pencil — Chỉnh sửa
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chỉnh sửa; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-013-pencil-blue-on-white.svg, assets/icons/icon-013-pencil-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-014-trash-2 — Xóa
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng xóa; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-014-trash-2-blue-on-white.svg, assets/icons/icon-014-trash-2-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-015-copy — Sao chép
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng sao chép; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-015-copy-blue-on-white.svg, assets/icons/icon-015-copy-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-016-save — Lưu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lưu; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-016-save-blue-on-white.svg, assets/icons/icon-016-save-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-017-download — Tải xuống
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tải xuống; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-017-download-blue-on-white.svg, assets/icons/icon-017-download-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-018-upload — Tải lên
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tải lên; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-018-upload-blue-on-white.svg, assets/icons/icon-018-upload-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-019-share-2 — Chia sẻ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chia sẻ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-019-share-2-blue-on-white.svg, assets/icons/icon-019-share-2-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-020-search — Tìm kiếm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tìm kiếm; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-020-search-blue-on-white.svg, assets/icons/icon-020-search-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-021-list-filter — Lọc
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lọc; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-021-list-filter-blue-on-white.svg, assets/icons/icon-021-list-filter-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-022-arrow-down-up — Sắp xếp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng sắp xếp; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-022-arrow-down-up-blue-on-white.svg, assets/icons/icon-022-arrow-down-up-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-023-layout-grid — Dạng lưới
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dạng lưới; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-023-layout-grid-blue-on-white.svg, assets/icons/icon-023-layout-grid-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-024-list — Danh sách
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng danh sách; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-024-list-blue-on-white.svg, assets/icons/icon-024-list-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-025-zoom-in — Phóng to
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng phóng to; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-025-zoom-in-blue-on-white.svg, assets/icons/icon-025-zoom-in-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-026-zoom-out — Thu nhỏ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thu nhỏ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-026-zoom-out-blue-on-white.svg, assets/icons/icon-026-zoom-out-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-027-eye — Xem
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng xem; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-027-eye-blue-on-white.svg, assets/icons/icon-027-eye-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-028-circle-check — Thành công
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thành công; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-028-circle-check-blue-on-white.svg, assets/icons/icon-028-circle-check-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-029-triangle-alert — Cảnh báo
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng cảnh báo; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-029-triangle-alert-blue-on-white.svg, assets/icons/icon-029-triangle-alert-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-030-circle-x — Lỗi
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lỗi; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-030-circle-x-blue-on-white.svg, assets/icons/icon-030-circle-x-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-031-info — Thông tin
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thông tin; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-031-info-blue-on-white.svg, assets/icons/icon-031-info-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-032-loader-circle — Đang xử lý
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đang xử lý; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-032-loader-circle-blue-on-white.svg, assets/icons/icon-032-loader-circle-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-033-circle-question-mark — Trợ giúp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trợ giúp; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-033-circle-question-mark-blue-on-white.svg, assets/icons/icon-033-circle-question-mark-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-034-ban — Không cho phép
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng không cho phép; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-034-ban-blue-on-white.svg, assets/icons/icon-034-ban-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-035-clock — Đang chờ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đang chờ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-035-clock-blue-on-white.svg, assets/icons/icon-035-clock-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-037-folder — Thư mục
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thư mục; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-037-folder-blue-on-white.svg, assets/icons/icon-037-folder-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-038-type — Chữ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chữ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-038-type-blue-on-white.svg, assets/icons/icon-038-type-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-039-image — Hình ảnh
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng hình ảnh; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-039-image-blue-on-white.svg, assets/icons/icon-039-image-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-040-video — Video
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng video; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-040-video-blue-on-white.svg, assets/icons/icon-040-video-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-041-volume-2 — Âm lượng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng âm lượng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-041-volume-2-blue-on-white.svg, assets/icons/icon-041-volume-2-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-042-archive — Lưu trữ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lưu trữ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-042-archive-blue-on-white.svg, assets/icons/icon-042-archive-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-043-link — Liên kết
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng liên kết; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-043-link-blue-on-white.svg, assets/icons/icon-043-link-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-044-user — Người dùng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng người dùng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-044-user-blue-on-white.svg, assets/icons/icon-044-user-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-045-users — Nhóm người
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nhóm người; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-045-users-blue-on-white.svg, assets/icons/icon-045-users-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-046-mail — Thư
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thư; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-046-mail-blue-on-white.svg, assets/icons/icon-046-mail-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-047-calendar — Lịch
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lịch; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-047-calendar-blue-on-white.svg, assets/icons/icon-047-calendar-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-048-contact — Liên hệ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng liên hệ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-048-contact-blue-on-white.svg, assets/icons/icon-048-contact-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-049-list-checks — Danh sách kiểm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng danh sách kiểm; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-049-list-checks-blue-on-white.svg, assets/icons/icon-049-list-checks-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-050-clipboard-check — Đối chiếu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đối chiếu; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-050-clipboard-check-blue-on-white.svg, assets/icons/icon-050-clipboard-check-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-051-folder-kanban — Dự án
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dự án; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-051-folder-kanban-blue-on-white.svg, assets/icons/icon-051-folder-kanban-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-052-columns-3 — Ba cột
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng ba cột; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-052-columns-3-blue-on-white.svg, assets/icons/icon-052-columns-3-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-053-flag — Đánh dấu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đánh dấu; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-053-flag-blue-on-white.svg, assets/icons/icon-053-flag-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-054-target — Mục tiêu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mục tiêu; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-054-target-blue-on-white.svg, assets/icons/icon-054-target-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-055-timer — Thời gian
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thời gian; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-055-timer-blue-on-white.svg, assets/icons/icon-055-timer-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-056-badge-check — Xác nhận
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng xác nhận; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-056-badge-check-blue-on-white.svg, assets/icons/icon-056-badge-check-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-057-chart-no-axes-column — Biểu đồ cột
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng biểu đồ cột; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-057-chart-no-axes-column-blue-on-white.svg, assets/icons/icon-057-chart-no-axes-column-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-058-chart-line — Biểu đồ đường
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng biểu đồ đường; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-058-chart-line-blue-on-white.svg, assets/icons/icon-058-chart-line-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-059-chart-pie — Biểu đồ tỷ trọng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng biểu đồ tỷ trọng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-059-chart-pie-blue-on-white.svg, assets/icons/icon-059-chart-pie-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-060-table — Bảng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bảng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-060-table-blue-on-white.svg, assets/icons/icon-060-table-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-061-trending-up — Tăng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tăng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-061-trending-up-blue-on-white.svg, assets/icons/icon-061-trending-up-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-062-trending-down — Giảm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng giảm; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-062-trending-down-blue-on-white.svg, assets/icons/icon-062-trending-down-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-063-database — Dữ liệu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dữ liệu; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-063-database-blue-on-white.svg, assets/icons/icon-063-database-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-064-file-chart-column — Báo cáo
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng báo cáo; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-064-file-chart-column-blue-on-white.svg, assets/icons/icon-064-file-chart-column-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-065-bot — Tác vụ tự động
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tác vụ tự động; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-065-bot-blue-on-white.svg, assets/icons/icon-065-bot-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-066-workflow — Luồng công việc
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng luồng công việc; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-066-workflow-blue-on-white.svg, assets/icons/icon-066-workflow-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-067-terminal — Dòng lệnh
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dòng lệnh; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-067-terminal-blue-on-white.svg, assets/icons/icon-067-terminal-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-068-code — Mã
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mã; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-068-code-blue-on-white.svg, assets/icons/icon-068-code-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-069-plug — Kết nối
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng kết nối; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-069-plug-blue-on-white.svg, assets/icons/icon-069-plug-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-070-play — Phát
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng phát; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-070-play-blue-on-white.svg, assets/icons/icon-070-play-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-071-pause — Dừng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dừng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-071-pause-blue-on-white.svg, assets/icons/icon-071-pause-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-073-settings — Thiết lập
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thiết lập; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-073-settings-blue-on-white.svg, assets/icons/icon-073-settings-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-074-lock — Khóa
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng khóa; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-074-lock-blue-on-white.svg, assets/icons/icon-074-lock-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-075-lock-open — Mở khóa
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mở khóa; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-075-lock-open-blue-on-white.svg, assets/icons/icon-075-lock-open-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-076-key-round — Khóa truy cập
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng khóa truy cập; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-076-key-round-blue-on-white.svg, assets/icons/icon-076-key-round-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-077-shield — Bảo vệ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bảo vệ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-077-shield-blue-on-white.svg, assets/icons/icon-077-shield-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-078-user-check — Người được xác nhận
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng người được xác nhận; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-078-user-check-blue-on-white.svg, assets/icons/icon-078-user-check-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-079-refresh-cw — Làm mới
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng làm mới; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-079-refresh-cw-blue-on-white.svg, assets/icons/icon-079-refresh-cw-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-080-log-out — Thoát
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thoát; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-080-log-out-blue-on-white.svg, assets/icons/icon-080-log-out-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-081-shopping-cart — Giỏ hàng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng giỏ hàng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-081-shopping-cart-blue-on-white.svg, assets/icons/icon-081-shopping-cart-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-082-shopping-bag — Túi hàng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng túi hàng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-082-shopping-bag-blue-on-white.svg, assets/icons/icon-082-shopping-bag-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-083-credit-card — Thẻ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thẻ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-083-credit-card-blue-on-white.svg, assets/icons/icon-083-credit-card-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-084-receipt — Chứng từ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chứng từ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-084-receipt-blue-on-white.svg, assets/icons/icon-084-receipt-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-085-tag — Nhãn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nhãn; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-085-tag-blue-on-white.svg, assets/icons/icon-085-tag-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-086-package — Kiện hàng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng kiện hàng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-086-package-blue-on-white.svg, assets/icons/icon-086-package-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-087-truck — Vận chuyển
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng vận chuyển; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-087-truck-blue-on-white.svg, assets/icons/icon-087-truck-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-088-undo-2 — Hoàn tác
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng hoàn tác; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-088-undo-2-blue-on-white.svg, assets/icons/icon-088-undo-2-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-089-book-open — Tài liệu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tài liệu; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-089-book-open-blue-on-white.svg, assets/icons/icon-089-book-open-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-090-graduation-cap — Hướng dẫn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng hướng dẫn; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-090-graduation-cap-blue-on-white.svg, assets/icons/icon-090-graduation-cap-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-091-bookmark — Lưu mục
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lưu mục; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-091-bookmark-blue-on-white.svg, assets/icons/icon-091-bookmark-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-092-lightbulb — Gợi ý
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng gợi ý; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-092-lightbulb-blue-on-white.svg, assets/icons/icon-092-lightbulb-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-093-mic — Thu âm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thu âm; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-093-mic-blue-on-white.svg, assets/icons/icon-093-mic-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-094-camera — Máy ảnh
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng máy ảnh; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-094-camera-blue-on-white.svg, assets/icons/icon-094-camera-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-095-presentation — Trình bày
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trình bày; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-095-presentation-blue-on-white.svg, assets/icons/icon-095-presentation-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-096-award — Huy hiệu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng huy hiệu; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-096-award-blue-on-white.svg, assets/icons/icon-096-award-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-098-warehouse — Nhà kho
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nhà kho; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-098-warehouse-blue-on-white.svg, assets/icons/icon-098-warehouse-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-099-container — Thùng vận chuyển
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thùng vận chuyển; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-099-container-blue-on-white.svg, assets/icons/icon-099-container-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-100-forklift — Xe nâng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng xe nâng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-100-forklift-blue-on-white.svg, assets/icons/icon-100-forklift-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-102-boxes — Nhóm kiện
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nhóm kiện; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-102-boxes-blue-on-white.svg, assets/icons/icon-102-boxes-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-103-layers — Lớp xếp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lớp xếp; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-103-layers-blue-on-white.svg, assets/icons/icon-103-layers-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-104-ruler — Kích thước
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng kích thước; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-104-ruler-blue-on-white.svg, assets/icons/icon-104-ruler-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-105-gauge — Thang đo
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thang đo; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-105-gauge-blue-on-white.svg, assets/icons/icon-105-gauge-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-106-weight — Khối lượng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng khối lượng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-106-weight-blue-on-white.svg, assets/icons/icon-106-weight-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-107-snowflake — Làm lạnh
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng làm lạnh; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-107-snowflake-blue-on-white.svg, assets/icons/icon-107-snowflake-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-108-wine — Đồ uống
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đồ uống; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-108-wine-blue-on-white.svg, assets/icons/icon-108-wine-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-109-armchair — Ghế
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng ghế; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-109-armchair-blue-on-white.svg, assets/icons/icon-109-armchair-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-110-shopping-basket — Giỏ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng giỏ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-110-shopping-basket-blue-on-white.svg, assets/icons/icon-110-shopping-basket-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-111-factory — Nhà máy
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nhà máy; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-111-factory-blue-on-white.svg, assets/icons/icon-111-factory-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-112-package-open — Mở kiện
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mở kiện; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-112-package-open-blue-on-white.svg, assets/icons/icon-112-package-open-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-113-recycle — Tái chế
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tái chế; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-113-recycle-blue-on-white.svg, assets/icons/icon-113-recycle-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-114-shield-check — Kiểm bảo vệ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng kiểm bảo vệ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-114-shield-check-blue-on-white.svg, assets/icons/icon-114-shield-check-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-115-thermometer — Nhiệt độ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nhiệt độ; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-115-thermometer-blue-on-white.svg, assets/icons/icon-115-thermometer-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-116-droplets — Chất lỏng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chất lỏng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-116-droplets-blue-on-white.svg, assets/icons/icon-116-droplets-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-117-sun — Mặt trời
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mặt trời; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-117-sun-blue-on-white.svg, assets/icons/icon-117-sun-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-118-grid-3x3 — Ô lưới
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng ô lưới; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-118-grid-3x3-blue-on-white.svg, assets/icons/icon-118-grid-3x3-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-119-waypoints — Điểm nối
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng điểm nối; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-119-waypoints-blue-on-white.svg, assets/icons/icon-119-waypoints-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### ui-buttons — Nút và phản hồi
Status: proposed; not admitted.
- purpose: Kiểm trạng thái thật, bàn phím và phản hồi của cùng điều khiển.
- family: ui
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/interaction-runtime.js, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### ui-topnav — Điều hướng
Status: proposed; not admitted.
- purpose: Kiểm trạng thái thật, bàn phím và phản hồi của cùng điều khiển.
- family: ui
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/interaction-runtime.js, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### ui-actions — Thanh hành động
Status: proposed; not admitted.
- purpose: Kiểm trạng thái thật, bàn phím và phản hồi của cùng điều khiển.
- family: ui
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/interaction-runtime.js, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### ui-search — Tìm và lọc
Status: proposed; not admitted.
- purpose: Kiểm trạng thái thật, bàn phím và phản hồi của cùng điều khiển.
- family: ui
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/interaction-runtime.js, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### ui-tabs — Tab theo tác vụ
Status: proposed; not admitted.
- purpose: Kiểm trạng thái thật, bàn phím và phản hồi của cùng điều khiển.
- family: ui
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/interaction-runtime.js, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### ui-check — Chọn và bật tắt
Status: proposed; not admitted.
- purpose: Kiểm trạng thái thật, bàn phím và phản hồi của cùng điều khiển.
- family: ui
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/interaction-runtime.js, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### ui-dialog — Xác nhận và lỗi
Status: proposed; not admitted.
- purpose: Kiểm trạng thái thật, bàn phím và phản hồi của cùng điều khiển.
- family: ui
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/interaction-runtime.js, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-steps — Năm bước chọn thông tin
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-moodboard — Hình và chất liệu đề xuất
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/illustrations/cooler.svg, assets/illustrations/crate.svg, assets/illustrations/pallet.svg, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-comparison — Bảng đối chiếu
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-quantitative — Dữ kiện có điều kiện
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-quote — Trích dẫn có nguồn
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-literal — Chuỗi cần giữ nguyên
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-connectors — Quan hệ và trình tự
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-status — Danh sách có trạng thái
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-metric — Chỉ số và giới hạn
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-media — Khung ảnh đúng tỷ lệ
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/illustrations/pallet.svg, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-source — Nguồn và ghi chú
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-text — Đoạn giải thích
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-heading — Tiêu đề và ý chính
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-list — Nhóm ý liên quan
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-104-ruler.svg, assets/icons/icon-111-factory.svg, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-faq — Câu hỏi và câu trả lời
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### reading-callout — Chú ý và việc cần làm
Status: proposed; not admitted.
- purpose: Mảnh nội dung có vai trò riêng; giữ nội dung và điều kiện khi đổi khung.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### background-warehouse-grid — Nền warehouse-grid
Status: proposed; not admitted.
- purpose: Nhịp kỹ thuật đề xuất; giữ vùng trái cho nội dung và tương phản.
- family: backgrounds
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/illustrations/warehouse-grid.svg
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### background-layer-rhythm — Nền layer-rhythm
Status: proposed; not admitted.
- purpose: Nhịp kỹ thuật đề xuất; giữ vùng trái cho nội dung và tương phản.
- family: backgrounds
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/illustrations/layer-rhythm.svg
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### chart-bar — Thanh ngang
Status: proposed; not admitted.
- purpose: Số công việc: 8, 6, 10. Trục 0–12.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-column — Cột theo kỳ
Status: proposed; not admitted.
- purpose: Ba kỳ: 4, 7, 9. Trục 0–10.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-line — Đường xu hướng
Status: proposed; not admitted.
- purpose: Bốn kỳ: 2, 5, 4, 9. Trục 0–10.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-area — Vùng theo thời gian
Status: proposed; not admitted.
- purpose: Cùng chuỗi 2, 5, 4, 9; nền vùng giữ đường rõ.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-donut — Vòng cơ cấu
Status: proposed; not admitted.
- purpose: Xong 60, còn 40; tổng 100.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-stack — Thanh cơ cấu 100%
Status: proposed; not admitted.
- purpose: Hai nhóm 60% và 40%; không dùng cho số tuyệt đối.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-scatter — Phân tán hai biến
Status: proposed; not admitted.
- purpose: Năm cặp x/y; hai trục 0–10. Không suy quan hệ nhân quả.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-pie — Tròn cơ cấu
Status: proposed; not admitted.
- purpose: Hai phần 60 và 40, tổng 100; nhãn ghi trực tiếp tỷ lệ.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-histogram — Phân bố theo khoảng
Status: proposed; not admitted.
- purpose: Ba khoảng bằng nhau: 0–10 có 2, 10–20 có 5, 20–30 có 3 quan sát.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-box — Hộp và khoảng biến thiên
Status: proposed; not admitted.
- purpose: Tóm tắt mẫu: nhỏ nhất 2, tứ phân vị 4 và 8, trung vị 6, lớn nhất 10.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-waterfall — Đóng góp tăng và giảm
Status: proposed; not admitted.
- purpose: Bắt đầu 8, thêm 4, bớt 2, kết thúc 10. Giữ dấu tăng/giảm.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-heatmap — Ma trận có giá trị
Status: proposed; not admitted.
- purpose: Hai nhóm, ba kỳ; mỗi ô giữ số. Màu hỗ trợ đọc, không thay số.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-progress-ring — Vòng tiến độ
Status: proposed; not admitted.
- purpose: Hoàn tất 6 trên 10 mục; tỷ lệ 60%.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-stacked-absolute — Thanh chồng số tuyệt đối
Status: proposed; not admitted.
- purpose: A có 4+6=10; B có 3+5=8 mục.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-funnel — Phễu theo bước
Status: proposed; not admitted.
- purpose: Cùng một nhóm:20→12→6 mục qua ba bước.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-treemap — Ô diện tích cơ cấu
Status: proposed; not admitted.
- purpose: Ba phần 50,30,20 mục; tổng 100.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-diverging — Thanh hai phía
Status: proposed; not admitted.
- purpose: Thay đổi: A−4; B+6; C−2; D+3 mục.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-gantt — Lịch công việc
Status: proposed; not admitted.
- purpose: A ngày 1–3; B ngày 3–6; C ngày 5–8.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-grouped — Cột theo nhóm
Status: proposed; not admitted.
- purpose: A:4/7; B:6/5; C:3/8 mục cho Đọc/Dựng.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-combo — Cột và đường cùng trục
Status: proposed; not admitted.
- purpose: Số tiếp nhận 4/7/9; số hoàn tất 3/5/8 mục.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-slope — Độ dốc giữa hai kỳ
Status: proposed; not admitted.
- purpose: A 4→7; B 8→6; C 2→5 mục.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-dumbbell — Hai đầu theo nhóm
Status: proposed; not admitted.
- purpose: A 3→7; B 5→8; C 2→6 mục.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-bullet — Thực tế và mục tiêu
Status: proposed; not admitted.
- purpose: Thực tế 7; mục tiêu 9; thang 0–12 mục.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-lollipop — Chấm có trục so sánh
Status: proposed; not admitted.
- purpose: A 4; B 7; C 9 mục; trục 0–10.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-sparklines — Đường nhỏ theo nhóm
Status: proposed; not admitted.
- purpose: A 2/4/3/6; B 5/3/4/7 mục; cùng thang 0–10.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-calendar-density — Lịch có giá trị
Status: proposed; not admitted.
- purpose: Ba tuần minh họa, mỗi ngày 0–4 mục.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-state-timeline — Dải trạng thái theo thời gian
Status: proposed; not admitted.
- purpose: Ngày 1–2 Chờ;3–5 Làm;6–8 Kiểm.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-cohort — Giữ lại theo nhóm bắt đầu
Status: proposed; not admitted.
- purpose: Ba nhóm; tỷ lệ ở kỳ 0 luôn 100%.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-dependency-network — Quan hệ phụ thuộc
Status: proposed; not admitted.
- purpose: A→B; A→C; B→D; C→D.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-sankey — Luồng có lượng
Status: proposed; not admitted.
- purpose: A 10 mục chia thành B 6 và C 4.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-parallel — Nhiều tiêu chí song song
Status: proposed; not admitted.
- purpose: Ba tiêu chí đều thang 0–10 điểm; hai nhóm A/B.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-candlestick — Nến khoảng và hai thời điểm
Status: proposed; not admitted.
- purpose: Ba kỳ; mở/cao/thấp/đóng trên thang 0–10 điểm minh họa.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-regional-map — Bản đồ vùng sơ đồ
Status: proposed; not admitted.
- purpose: Ba vùng A 4; B 7; C 2 mục. Hình không theo địa lý thật.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-kpi-table — Chỉ số và bảng chi tiết
Status: proposed; not admitted.
- purpose: Tổng 15 mục = Đọc 6 + Dựng 5 + Kiểm 4.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-monitored-series — Chuỗi có ngưỡng theo dõi
Status: proposed; not admitted.
- purpose: Bốn kỳ 2/5/4/8; ngưỡng 6 mục.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-decision-tree — Cây lựa chọn
Status: proposed; not admitted.
- purpose: Hai điều kiện: có nguồn và cần duyệt; ba hướng đi.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### chart-journey-comparison — Hành trình theo bước
Status: proposed; not admitted.
- purpose: Ba bước; đối chiếu hành động, điểm khó và cách cải thiện.
- family: charts
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### model-pallet — Mô hình pallet
Status: proposed; not admitted.
- purpose: Mô hình WebGL riêng: xoay, dừng, đặt lại; có hình tĩnh và giảm chuyển động.
- family: models
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, xoay, dừng, đặt lại, giảm chuyển động, WebGL không khả dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/illustrations/pallet.svg, assets/models/native-webgl.js, assets/models/pallet.json, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### model-crate — Mô hình sóng nhựa
Status: proposed; not admitted.
- purpose: Mô hình WebGL riêng: xoay, dừng, đặt lại; có hình tĩnh và giảm chuyển động.
- family: models
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, xoay, dừng, đặt lại, giảm chuyển động, WebGL không khả dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/illustrations/crate.svg, assets/models/crate.json, assets/models/native-webgl.js, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### model-cooler — Mô hình thùng lạnh
Status: proposed; not admitted.
- purpose: Mô hình WebGL riêng: xoay, dừng, đặt lại; có hình tĩnh và giảm chuyển động.
- family: models
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, xoay, dừng, đặt lại, giảm chuyển động, WebGL không khả dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/illustrations/cooler.svg, assets/models/cooler.json, assets/models/native-webgl.js, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### generative-guidance — Hình tạo mới · đề bài và giới hạn
Status: proposed; not admitted.
- purpose: Danh mục hướng dẫn; chưa tạo hoặc xác minh tài sản AI.
- family: generative-ai
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Task-authored Long Thành proposal; official source observations bound in source-audit.json.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### map-world-3d — Địa cầu vật lý
Status: proposed; not admitted.
- purpose: Đất liền vật lý Natural Earth 110 m; có thể thiếu đảo nhỏ. Không có lớp chủ quyền hoặc dữ liệu thị trường. Hình dựng từ tọa độ nguồn, không phải quan sát giao diện KAI.
- family: charts
- anatomy: Not specified; inspect source model.
- variants: Not specified; inspect source model.
- states: tĩnh, xoay nếu là địa cầu, giảm chuyển động
- source: Inert neutral geography paths/coordinates; independent Long Thành renderer.
- rights: ISC US/WORLD Atlas; Natural Earth public domain; notices retained.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/maps/LICENSES.txt, assets/maps/globe.js, assets/maps/world-land.json, assets/maps/world-texture.png, assets/maps/world.html, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Giữ đủ nguồn, giấy phép, đảo/khung chèn và giới hạn.
### map-vietnam — Việt Nam và khung đảo
Status: proposed; not admitted.
- purpose: Hình học bờ biển tổng quát và một số đảo; khung Hoàng Sa/Trường Sa là điểm đại diện theo nguồn. Giữ lưu ý tranh chấp quốc tế; không có đường ranh biển/tỉnh và không phải danh mục toàn bộ đảo.
- family: charts
- anatomy: Not specified; inspect source model.
- variants: Not specified; inspect source model.
- states: tĩnh, xoay nếu là địa cầu, giảm chuyển động
- source: Inert neutral geography paths/coordinates; independent Long Thành renderer.
- rights: ISC US/WORLD Atlas; Natural Earth public domain; notices retained.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/maps/LICENSES.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Giữ đủ nguồn, giấy phép, đảo/khung chèn và giới hạn.
### map-us — Hoa Kỳ 51 đơn vị
Status: proposed; not admitted.
- purpose: Hình học tổng quát 2017:50 tiểu bang và District of Columbia. Alaska/Hawaii dùng khung chèn. Không phải hình khảo sát, không biểu thị thị trường hay chi nhánh Long Thành.
- family: charts
- anatomy: Not specified; inspect source model.
- variants: Not specified; inspect source model.
- states: tĩnh, xoay nếu là địa cầu, giảm chuyển động
- source: Inert neutral geography paths/coordinates; independent Long Thành renderer.
- rights: ISC US/WORLD Atlas; Natural Earth public domain; notices retained.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/maps/LICENSES.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Giữ đủ nguồn, giấy phép, đảo/khung chèn và giới hạn.
### icon-native-message-circle — Trao đổi
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trao đổi.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-native-message-circle-blue-on-white.svg, assets/icons/icon-native-message-circle-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-native-bell — Thông báo
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thông báo.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-native-bell-blue-on-white.svg, assets/icons/icon-native-bell-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### icon-native-calendar-clock — Cuộc hẹn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng cuộc hẹn.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Task-authored Long Thành proposal; official CSS/logo observations separately bound.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-native-calendar-clock-blue-on-white.svg, assets/icons/icon-native-calendar-clock-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-icon-core-checkbox-empty — Hộp kiểm chưa chọn
Status: proposed; not admitted.
- purpose: Trạng thái chưa chọn của một lựa chọn; đi cùng nhãn và điều khiển hộp kiểm native.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Original simple geometry authored for Long Thành functional role; not a copied brand mark.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/role-icon-core-checkbox-empty-blue-on-white.svg, assets/icons/role-icon-core-checkbox-empty-white-on-blue.svg
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-icon-core-file — Tệp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tệp; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-003-file-blue-on-white.svg, assets/icons/icon-003-file-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-icon-core-stop — Dừng tác vụ
Status: proposed; not admitted.
- purpose: Lệnh dừng có chủ ý, hình vuông đặc; không dùng thay dấu đầu dòng hay hộp kiểm.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Original simple geometry authored for Long Thành functional role; not a copied brand mark.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/role-icon-core-stop-blue-on-white.svg, assets/icons/role-icon-core-stop-white-on-blue.svg
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-icon-kai-sword — Kiện hàng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng kiện hàng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-086-package-blue-on-white.svg, assets/icons/icon-086-package-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-icon-kai-boots — Vận chuyển
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng vận chuyển; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-087-truck-blue-on-white.svg, assets/icons/icon-087-truck-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-icon-kai-chest — Kiện hàng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng kiện hàng; cùng hình ở hai nền nhận.
- family: icons-static
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-086-package-blue-on-white.svg, assets/icons/icon-086-package-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-agent-knight-automation — Tác vụ tự động minh họa
Status: proposed; not admitted.
- purpose: Nhịp nhấn nhẹ quanh biểu tượng tác vụ tự động. Chuyển động minh họa không báo tác vụ đang chạy hoặc hoàn tất.
- family: icons-motion
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-065-bot-blue-on-white.svg, assets/icons/icon-065-bot-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-agent-knight-design — Hiệu chỉnh thiết kế
Status: proposed; not admitted.
- purpose: Nhấn hình bút để chỉ vị trí chỉnh sửa; không tự sửa nội dung.
- family: icons-motion
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-013-pencil-blue-on-white.svg, assets/icons/icon-013-pencil-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-agent-knight-html — Đọc mã giao diện
Status: proposed; not admitted.
- purpose: Nhấn biểu tượng mã khi giới thiệu tài liệu HTML; không báo chương trình đã chạy.
- family: icons-motion
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-068-code-blue-on-white.svg, assets/icons/icon-068-code-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-agent-knight-video — Nội dung video
Status: proposed; not admitted.
- purpose: Nhịp nhấn cho loại video; nút phát thực tế phải có tên và trạng thái riêng.
- family: icons-motion
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-040-video-blue-on-white.svg, assets/icons/icon-040-video-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-agent-knight-content — Soạn nội dung
Status: proposed; not admitted.
- purpose: Nhấn biểu tượng chữ để giới thiệu bước soạn; không báo đã lưu.
- family: icons-motion
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-038-type-blue-on-white.svg, assets/icons/icon-038-type-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-animated-compass — Định hướng theo điểm nối
Status: proposed; not admitted.
- purpose: Đánh dấu đường đi giữa các điểm nội dung bằng nhịp chú ý. Không phải la bàn địa lý hay dữ liệu định vị.
- family: icons-motion
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-119-waypoints-blue-on-white.svg, assets/icons/icon-119-waypoints-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-animated-fire — Làm mới thông tin
Status: proposed; not admitted.
- purpose: Nhịp chú ý quanh hình làm mới để minh họa yêu cầu cập nhật. Không chứng minh dữ liệu đã được tải hoặc kiểm chứng.
- family: icons-motion
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-079-refresh-cw-blue-on-white.svg, assets/icons/icon-079-refresh-cw-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-animated-shield — Đối chiếu điều kiện bảo vệ
Status: proposed; not admitted.
- purpose: Nhịp chú ý cho bước đối chiếu điều kiện; không phải chứng nhận an toàn hoặc xác nhận hệ thống đã được bảo vệ.
- family: icons-motion
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng, phát nét, dừng, giảm chuyển động
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-114-shield-check-blue-on-white.svg, assets/icons/icon-114-shield-check-white-on-blue.svg, assets/licenses/Lucide-ISC.txt
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-reading-quantitative-chart — Thanh ngang
Status: proposed; not admitted.
- purpose: Số công việc: 8, 6, 10. Trục 0–12.
- family: reading
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/charts/chart-core.js, assets/charts/chart-data.json, assets/charts/chart-roles.css, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### source-role-reading-listing-shapes — Danh sách bằng dấu hình
Status: proposed; not admitted.
- purpose: Nhóm các ý ngang cấp bằng dấu vuông nhỏ.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-104-ruler.svg, assets/icons/icon-111-factory.svg, assets/native/layout.css, assets/specimens/reading-list.html
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-reading-listing-icons — Danh sách bằng biểu tượng
Status: proposed; not admitted.
- purpose: Nhóm các ý ngang cấp bằng biểu tượng có nhãn.
- family: reading
- anatomy: Tiêu đề, nội dung hoặc hình theo vai trò, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Logo theo nguồn được phép; phông OFL, biểu tượng ISC; hình và mã mới là đề xuất trong phạm vi công việc hiện tại.
- dependencies: assets/icons/icon-104-ruler.svg, assets/icons/icon-111-factory.svg, assets/native/layout.css, assets/specimens/reading-list.html
- ruleGroups: layout-composition, imagery-icons
- reuse: Đọc đúng bản 0.1.11-draft, tệp/hash và phụ thuộc; giữ dữ liệu, nguồn, trạng thái và điều kiện khi thích nghi.
### source-role-reading-task-brief — Phiếu mục tiêu
Status: proposed; not admitted.
- purpose: Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- family: reading
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### source-role-reading-rule-check-fix — Quy tắc và cách sửa
Status: proposed; not admitted.
- purpose: Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- family: reading
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### source-role-reading-readiness-levels — Phạm vi sử dụng
Status: proposed; not admitted.
- purpose: Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- family: reading
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### source-role-reading-worked-example — Ví dụ có giải thích
Status: proposed; not admitted.
- purpose: Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- family: reading
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### source-role-reading-reference-card — Thẻ nguồn
Status: proposed; not admitted.
- purpose: Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- family: reading
- anatomy: Tiêu đề, thành phần theo công việc đọc, điều kiện và nguồn.
- variants: Not specified; inspect source model.
- states: tĩnh, chi tiết, tái sử dụng
- source: Functional role adapted from the exact r09 census; target geometry/content authored independently for Long Thành.
- rights: Hình/mã đề xuất trong công việc hiện tại. Phông OFL và biểu tượng ISC có giấy phép riêng.
- dependencies: assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/OFL.txt, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons, usage
- reuse: Dùng đúng tệp/hash, phiên bản và phụ thuộc. Giữ nguồn, dữ liệu, trạng thái và giới hạn; bản này không tự cho phép đăng ký hoặc xuất bản.
### map-world-flat — Thế giới · bản phẳng dự phòng
Status: proposed; not admitted.
- purpose: Giữ toàn bộ đường bờ tổng quát của 127 đa giác nguồn ở bản phẳng; có nội dung thay thế khi không dùng WebGL.
- family: reading
- anatomy: Not specified; inspect source model.
- variants: Not specified; inspect source model.
- states: tĩnh, đọc nhãn, dự phòng không WebGL
- source: Inert neutral geography paths/coordinates; independent Long Thành renderer.
- rights: ISC US/WORLD Atlas; Natural Earth public domain; notices retained.
- dependencies: assets/maps/LICENSES.txt, assets/maps/world-land.json, assets/native/layout.css
- ruleGroups: layout-composition, imagery-icons
- reuse: Giữ đủ nguồn, giấy phép, đảo/khung chèn và giới hạn.
## Authoring contract
Overview owns these rule references; Library and Applications consume them.
```json
{
  "formats": {
    "app": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "design": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "edit": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "knowledge-pdf": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "slide": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "website": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    }
  },
  "roles": {
    "feedback": {
      "formatIds": [
        "website",
        "app",
        "slide",
        "knowledge-pdf",
        "design",
        "edit"
      ],
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ],
      "stateIds": [
        "normal",
        "error",
        "uncertain",
        "reduced-motion"
      ],
      "typeIds": [
        "text",
        "image",
        "data",
        "control"
      ]
    },
    "illustration": {
      "formatIds": [
        "website",
        "app",
        "slide",
        "knowledge-pdf",
        "design",
        "edit"
      ],
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ],
      "stateIds": [
        "normal",
        "error",
        "uncertain",
        "reduced-motion"
      ],
      "typeIds": [
        "text",
        "image",
        "data",
        "control"
      ]
    },
    "message": {
      "formatIds": [
        "website",
        "app",
        "slide",
        "knowledge-pdf",
        "design",
        "edit"
      ],
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ],
      "stateIds": [
        "normal",
        "error",
        "uncertain",
        "reduced-motion"
      ],
      "typeIds": [
        "text",
        "image",
        "data",
        "control"
      ]
    },
    "navigation": {
      "formatIds": [
        "website",
        "app",
        "slide",
        "knowledge-pdf",
        "design",
        "edit"
      ],
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ],
      "stateIds": [
        "normal",
        "error",
        "uncertain",
        "reduced-motion"
      ],
      "typeIds": [
        "text",
        "image",
        "data",
        "control"
      ]
    },
    "technical-data": {
      "formatIds": [
        "website",
        "app",
        "slide",
        "knowledge-pdf",
        "design",
        "edit"
      ],
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ],
      "stateIds": [
        "normal",
        "error",
        "uncertain",
        "reduced-motion"
      ],
      "typeIds": [
        "text",
        "image",
        "data",
        "control"
      ]
    }
  },
  "schemaVersion": "overview-authoring/v1",
  "states": {
    "error": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "normal": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "reduced-motion": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "uncertain": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    }
  },
  "types": {
    "control": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "data": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "image": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    },
    "text": {
      "ruleIds": [
        "principles",
        "composition-rule",
        "exact-reuse",
        "rights-scope"
      ]
    }
  }
}
```
Rule hash: 43964dd25fd46246b70050bdf23bfce169aeba97540c9b40aa8b7f3f06c974c3
## Evidence
No independent visual release or external license certification implied.
No designer/developer kit is required.

## Application examples
These are declared examples, not verified executable outputs.
### slide-default-cover — Mở đầu
slide · proposed · Giữ công việc đọc riêng của mở đầu; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-default-agenda — Mục lục
slide · proposed · Giữ công việc đọc riêng của mục lục; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-default-divider — Mở phần
slide · proposed · Giữ công việc đọc riêng của mở phần; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-default-close — Kết thúc
slide · proposed · Giữ công việc đọc riêng của kết thúc; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-hero — Một hình lớn
slide · proposed · Giữ công việc đọc riêng của một hình lớn; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-strip — Dải hình
slide · proposed · Giữ công việc đọc riêng của dải hình; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-grid — Bảng hình
slide · proposed · Giữ công việc đọc riêng của bảng hình; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-story — Hai hàng có ngữ cảnh
slide · proposed · Giữ công việc đọc riêng của hai hàng có ngữ cảnh; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-detail — Hình chính và chi tiết
slide · proposed · Giữ công việc đọc riêng của hình chính và chi tiết; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-collage — Toàn cảnh và hai góc
slide · proposed · Giữ công việc đọc riêng của toàn cảnh và hai góc; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-pair — Đối chiếu hai hình
slide · proposed · Giữ công việc đọc riêng của đối chiếu hai hình; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-mosaic — Sáu chi tiết
slide · proposed · Giữ công việc đọc riêng của sáu chi tiết; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-background — Hình nền và vùng chữ
slide · proposed · Giữ công việc đọc riêng của hình nền và vùng chữ; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-image-split — Hình dọc và thông điệp
slide · proposed · Giữ công việc đọc riêng của hình dọc và thông điệp; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-matrix — Ma trận đối chiếu
slide · proposed · Giữ công việc đọc riêng của ma trận đối chiếu; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-tables — Hai bảng dữ kiện
slide · proposed · Giữ công việc đọc riêng của hai bảng dữ kiện; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-columns — Ba nhóm nội dung
slide · proposed · Giữ công việc đọc riêng của ba nhóm nội dung; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-evidence — Dữ kiện và giới hạn
slide · proposed · Giữ công việc đọc riêng của dữ kiện và giới hạn; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-plan — Bốn bước thực hiện
slide · proposed · Giữ công việc đọc riêng của bốn bước thực hiện; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-dashboard — Bảng theo dõi
slide · proposed · Giữ công việc đọc riêng của bảng theo dõi; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-overview — Tổng quan dữ kiện
slide · proposed · Giữ công việc đọc riêng của tổng quan dữ kiện; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-mixed — Bảng và hình
slide · proposed · Giữ công việc đọc riêng của bảng và hình; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-sections — Các mục và hình dọc
slide · proposed · Giữ công việc đọc riêng của các mục và hình dọc; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-journey — Hành trình theo bước
slide · proposed · Giữ công việc đọc riêng của hành trình theo bước; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-sales-mix — Cơ cấu dữ liệu minh họa
slide · proposed · Giữ công việc đọc riêng của cơ cấu dữ liệu minh họa; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-competitors — So sánh theo tiêu chí
slide · proposed · Giữ công việc đọc riêng của so sánh theo tiêu chí; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### slide-text-ranking — Xếp hạng minh họa
slide · proposed · Giữ công việc đọc riêng của xếp hạng minh họa; hình và số chỉ minh họa.
- Một thông điệp chính; giữ đủ nguồn, điều kiện và cùng mảnh ghép.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### document-cover — Cách đọc và dùng
knowledge-pdf · proposed · Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### document-task-brief — Phiếu mục tiêu
knowledge-pdf · proposed · Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### document-rule-check-fix — Quy tắc và cách sửa
knowledge-pdf · proposed · Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### document-readiness-levels — Phạm vi sử dụng
knowledge-pdf · proposed · Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### document-worked-example — Ví dụ có giải thích
knowledge-pdf · proposed · Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### document-reference-card — Thẻ nguồn
knowledge-pdf · proposed · Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### document-source-index — Nguồn và giới hạn
knowledge-pdf · proposed · Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Tài liệu đọc theo dòng; đủ nội dung và giới hạn khi phân trang.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### website-products — Website · nhóm sản phẩm
website · proposed · Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### website-guide — Website · bài hướng dẫn
website · proposed · Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### app-dashboard — App · bảng theo dõi
app · proposed · Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### app-editor — App · soạn yêu cầu
app · proposed · Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### poster — Poster · thông tin và hình
design · proposed · Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### thumbnail — Ảnh thu nhỏ · một ý chính
design · proposed · Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### image-style — Hình minh họa · nhịp kỹ thuật
design · proposed · Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
### edit-treatment — Edit · nhịp và lớp chữ
edit · proposed · Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Ví dụ Long Thành theo công việc thực; dữ liệu giả lập và giới hạn rõ.
- Giữ điều kiện, dữ liệu và nguồn. Nội dung mẫu không phải lời chứng thực hay thông số thực.
Element references: none
## Complete voice guideline
# long-thanh-clear-technical — Voice guideline

Generated; DO NOT EDIT. Source: voice model.
System: long-thanh-industrial | Version: 0.1.11-draft | Status: proposed
Field coverage is not evidence of native quality or authentic brand fit.

## context

- audience: Người mua và đội tư vấn sản phẩm nhựa
- job: Hiểu nhóm, điều kiện và bước đối chiếu tiếp theo
- channels: Website, app, slide, tài liệu, design, edit
- owner: LONG THÀNH; đề xuất trong công việc hiện tại

## niche

- domain: Sản phẩm nhựa công nghiệp và gia dụng
- readerKnowledge: Không mặc định biết ký hiệu kỹ thuật
- readerDecision: Chuẩn bị điều kiện để đối chiếu đúng sản phẩm
- risks: Nhầm minh họa thành thông số hoặc lời hứa
- evidenceNeeded: Mã, nguồn, đơn vị và điều kiện còn hiệu lực
- termPolicy: Giải thích thuật ngữ khi nó ảnh hưởng lựa chọn
- emotionalContext: Tôn trọng, bình tĩnh, rõ việc
- excludedPromises: Không tự hứa tải trọng, tuổi thọ, an toàn hay lợi ích môi trường

## traits

- Item 1:
  - id: voice-1
  - instruction: Nói rõ việc cần làm
  - appliesWhen: Mọi nội dung hướng dẫn và giao diện
  - exception: Giữ nguyên trích dẫn nguồn có nhãn
  - positiveExample: Ghi kích thước và đơn vị.
  - negativeExample: Hãy tối ưu hóa mọi thứ.
  - confidence: proposed
  - status: proposed
  - sourceRefs:
    - neutral-baseline
- Item 2:
  - id: voice-2
  - instruction: Giữ điều kiện cạnh thông số
  - appliesWhen: Mọi nội dung hướng dẫn và giao diện
  - exception: Giữ nguyên trích dẫn nguồn có nhãn
  - positiveExample: Cần nguồn xác nhận tải trọng theo cách dùng.
  - negativeExample: Chịu tải vượt trội trong mọi điều kiện.
  - confidence: proposed
  - status: proposed
  - sourceRefs:
    - neutral-baseline
- Item 3:
  - id: voice-3
  - instruction: Giữ đúng mức chắc chắn
  - appliesWhen: Mọi nội dung hướng dẫn và giao diện
  - exception: Giữ nguyên trích dẫn nguồn có nhãn
  - positiveExample: Chưa có thông số trong mẫu.
  - negativeExample: Thông số đã được bảo đảm.
  - confidence: proposed
  - status: proposed
  - sourceRefs:
    - neutral-baseline

## tones

- Item 1:
  - scenario: normal
  - readerState: Cần biết thông tin
  - informationOrder: Nhóm → điều kiện → bước tiếp
  - personalityLimit: Không thổi phồng, không đổ lỗi người đọc
  - action: Nêu một việc có thể làm
- Item 2:
  - scenario: error
  - readerState: Cần sửa đầu vào
  - informationOrder: Lỗi → cách sửa → dữ liệu được giữ
  - personalityLimit: Không thổi phồng, không đổ lỗi người đọc
  - action: Chỉ trường và cách sửa
- Item 3:
  - scenario: uncertain
  - readerState: Chưa có nguồn đủ
  - informationOrder: Điều biết → điều chưa xác nhận → cách đối chiếu
  - personalityLimit: Không thổi phồng, không đổ lỗi người đọc
  - action: Giữ giới hạn và yêu cầu đúng nguồn

## locales

- vi:
  - address: Dùng câu trực tiếp; quý khách khi quan hệ dịch vụ cần; không đoán tuổi/giới.
  - syntax: Viết từ ý bằng tiếng Việt, động từ cụ thể.
  - rhythm: Một ý rõ mỗi câu; thay độ dài theo công việc đọc.
  - terminology: Giữ mã/đơn vị; giải thích thuật ngữ lạ cạnh lần đầu.
  - opening: Nêu việc hoặc dữ kiện chính.
  - closing: Nêu bước tiếp theo và điều kiện cần.
  - do: Ghi kích thước, khối lượng và môi trường sử dụng.
  - dont: Không viết bảo đảm tuyệt đối khi thiếu nguồn.
  - normalExample: Chọn nhóm sản phẩm để xem thông tin cần đối chiếu.
  - errorExample: Nhập kích thước và đơn vị trước khi xem trước. Nội dung khác vẫn được giữ.
  - uncertainExample: Mẫu chưa có thông số sản phẩm được xác nhận.
- en:
  - address: Direct, respectful instructions; do not assume familiarity.
  - syntax: Use concrete actions and preserve conditions.
  - rhythm: Match sentence length to the reading task.
  - terminology: Keep exact codes and units; explain unfamiliar terms.
  - opening: Lead with the action or relevant fact.
  - closing: State the next step and its prerequisite.
  - do: Provide dimensions, weight and operating conditions.
  - dont: Do not promise verified performance without evidence.
  - normalExample: Choose a product group to review the information needed.
  - errorExample: Enter the dimensions and unit before previewing. Other entries are retained.
  - uncertainExample: This sample does not contain verified product specifications.

## claims

- immutable: Giữ mã, nguồn, đơn vị, điều kiện và mức chắc chắn
- allowed: Mô tả công việc và thông tin có nguồn
- forbidden: Không tự gắn chứng nhận, tải trọng, tốt nhất hoặc bền vững tuyệt đối
- unknownHandling: Nêu chưa xác nhận và cách đối chiếu

## components

- Item 1:
  - type: Nút và thông báo
  - behavior: Phản hồi đúng thao tác
  - copyRule: Động từ rõ, không báo đã gửi khi chưa gửi
  - budget: Đủ ý, kiểm trong khung thật
  - notApplicable: Không dùng thông báo mẫu làm chứng cứ tác vụ thật

## examples

- Item 1:
  - scenario: uncertain
  - language: vi
  - facts: No verified product specifications in the sample.
  - before: Thông số được bảo đảm.
  - after: Mẫu chưa có thông số sản phẩm được xác nhận.
  - reason: Preserve uncertainty; do not invent verification.
  - ruleIds:
    - voice-3
- Item 2:
  - scenario: uncertain
  - language: en
  - facts: No verified product specifications in the sample.
  - before: Guaranteed specifications.
  - after: This sample does not contain verified product specifications.
  - reason: Preserve uncertainty; do not invent verification.
  - ruleIds:
    - voice-3

## governance

- versionReason: Đề xuất hệ thống mới
- approvalRef: pending
- authenticity: proposed-neutral-baseline
- gaps: Chưa có tập mẫu EN/VI được duyệt để học giọng thương hiệu
- updatePolicy: Giữ bản, nguồn và bằng chứng; không tự kích hoạt

## procedure

- Chốt người đọc và công việc.
- Kiểm nguồn, dữ kiện và điều kiện.
- Viết trực tiếp theo ngôn ngữ, giữ nhãn nguồn.
- Đọc lại ý nghĩa và độ tự nhiên.
- Kiểm nội dung hợp nhất trong đầu ra hiện tại.

## sources

- Item 1:
  - id: neutral-baseline
  - kind: proposal
  - locator: Voice EN/VI neutral language baseline; not a brand corpus
  - rights: Method applied; no copied third-party prose

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
