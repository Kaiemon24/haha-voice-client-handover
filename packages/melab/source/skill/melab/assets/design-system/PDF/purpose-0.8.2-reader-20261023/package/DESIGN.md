# MELAB — Hướng dẫn thiết kế

Generated selected-package companion; DO NOT EDIT independently. Source: Design references/design-system/compact-role-model-v2.md; SHA-256 b9f53df56802e56e07f7bff1482acbc4aeabba62916ee0d3ea3a23737f8026d6; profile compact-design-system/v2.

Selected package: 0.8.2-reader. Canonical root: Brand asset/MELAB/Design system/packages/0.8.2-reader. Native identity, media, semantic data and per-asset rights remain MELAB-owned.

| Cần làm | Đọc | Xem |
|---|---|---|
| Bản sắc và giọng văn | VOICE.md and original brand rules below | design-system.html#identity |
| Vùng an toàn trong khung | COMPOSITION.md | design-system.html#spacing-inner-safe-zone |
| Khoảng hở tính cả bóng | COMPOSITION.md | design-system.html#spacing-painted-clearance |
| Ghép bố cục từ mảnh có sẵn | COMPOSITION.md and component-map.json | design-system.html#composition |
| Tìm mảnh và nguồn dùng lại | Selected record; current Tái sử dụng action | design-system.html#library |

The current human entry has exactly Overview and Library. Logo/Design/Edit live in Overview; UI UX and Nội dung use nested groups in Library. Composition rule is a primary Library item. Historical Applications/PDF catalogue placement below is source provenance, not current navigation or permission to invent component types. Native preview/source/variant access remains available. Existing PDFs and prior proof files are historical; no fresh export, public rights or whole-library admission is certified by this structural revision.

## Original brand-specific rules and source details

The following original text is historical provenance. Current selection and structure are defined above; this successor remains inactive until its exact activation approval.


# MELAB — Hệ thống thiết kế

## Read first
Read the requested sections only. Preserve source rights, locked brand facts and exact system binding. No automatic additions.

Human view: [design-system.html](design-system.html) · Elements: [integrated gallery](design-system.html#library) · Machine membership: [manifest](elements/manifest.json)

## Shared tokens
Exact proposal values; not independent brand approval.
- canvas: #F5F8FF
- text: #15233F
- muted: #4B5B77
- accent: #4164FF
- surface: #FFFFFF
- border: #D9E0EF
- hover: #EDF2FF
- accentHover: #2543DD
- track: #D9E0EF
- font: Be Vietnam Pro, sans-serif
- motionMs: 180

## colors — Color Palette
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: semantic role, HEX/RGBA, on-color pair, theme, contrast evidence
- rule-colors | Bốn màu MELAB: Bốn màu MELAB Mỗi màu có vai trò và nền nhận riêng. Tiger Flame #FE6237 Màu gốc Sunflower Gold #FFB62E Màu gốc Maya Blue #7CC3FF Màu gốc Electric Sapphire #4164FF Màu gốc Nền sáng #F5F8FF Vai trò đề xuất Bề mặt #FFFFFF Vai trò đề xuất Chữ chính #15233F Vai trò đề xuất Nền tối #111B31 Vai trò đề xuất Chữ trắng trên sapphire Cặp #FFFFFF/#4164FF có tỷ lệ tương phản khoảng 4,68:1 theo phép tính màu phẳng. Kiểm lại trên bề mặt thật. Chữ đậm trên màu sáng Dùng #15233F trên vàng, Maya Blue hoặc trắng. Không dùng cam/vàng làm chữ nhỏ trên trắng. Phân biệt màu gốc và vai trò đề xuất Tiger Flame #FE6237; Sunflower Gold #FFB62E. Maya Blue #7CC3FF; Electric Sapphire #4164FF. Đề xuất xanh sapphire làm màu thao tác; cam và vàng tạo điểm nhấn. Không dùng cam/vàng làm chữ nhỏ trên trắng. | Source: MELAB original guideline plus explicitly proposed implementation roles
Field coverage (absence is not verification):
- semantic role: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-colors | Evidence: none
- HEX/RGBA: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-colors | Evidence: none
- on-color pair: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-colors | Evidence: none
- theme: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-colors | Evidence: none
- contrast evidence: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-colors | Evidence: none

## typography — Typography
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: font/source/rights/load/fallback, size/weight/leading/tracking tuples, Vietnamese, numeric alignment
- rule-type | Chữ và phân cấp: Chữ và phân cấp Be Vietnam Pro, hỗ trợ tiếng Việt có dấu. Thử nội dung tiếng Việt Tiêu đề chính · 48/58 px · độ đậm 800 Học hỏi để mở điều mới. Tiêu đề phần · 32/42 px · độ đậm 700 Học hỏi để mở điều mới. Đề mục · 24/34 px · độ đậm 700 Học hỏi để mở điều mới. Nội dung · 18/30 px · độ đậm 400 Học hỏi để mở điều mới. Chú thích · 14/22 px · độ đậm 400 Học hỏi để mở điều mới. Số nổi bật · 48/58 px · độ đậm 800 0123456789 Nhãn thao tác · 16/24 px · độ đậm 700 Học hỏi để mở điều mới. Đặt chữ trong hình Giữ chữ và nhãn cách viền ít nhất 16 px; thêm dòng hoặc vùng chứa khi nội dung dài, không tự ép nhỏ phông. Căn theo chức năng Căn trái cho nội dung nhiều dòng; căn giữa hai chiều cho một nhãn hay một con số trong vùng riêng. Không dùng một cách căn cho mọi ngữ cảnh. Vai trò của phông Tiêu đề Be Vietnam Pro 700–800, làm rõ điểm đầu. Nội dung Be Vietnam Pro 400–500, giữ tiếng Việt và nhịp đọc. Điều khiển và số Be Vietnam Pro 700; số dùng tabular-nums khi hỗ trợ. Tổ hợp thường dùng Trình chiếu Tiêu đề 48; nội dung 20, dữ liệu dày 16–18 ở khung 1280×720. Đây là đề xuất; tách trang khi không đủ chỗ. Trang đọc Đề mục 24–32; nội dung 18; chú thích 14. Giao diện Nhãn 16 đậm; nội dung 16–18; vùng bấm44 px. Giới hạn và cách kiểm Bảy mức đậm từ 200 đến 800 có trong tài liệu gốc. Vai trò đề xuất: tiêu đề 48/58, tiêu đề phần 32/42, đề mục 24/34, nội dung 18/30, chú thích 14/22 và nhãn thao tác 16/24 px; độ đậm theo mẫu bên trên. Giữ chữ rõ ở kích thước đọc; thêm trang thay vì ép nhỏ nội dung. | Source: MELAB original guideline plus explicitly proposed implementation roles
- rule-body-rules | Nội dung dễ đọc: Nội dung dễ đọc Một đoạn giải thích một ý và hành động rõ. Nhấn ý và nhóm thông tin Nội dung chính 18 px, dòng 30 px ở khung đủ rộng. Dùng danh sách cho thông tin song song; bảng cho đối chiếu. Cột chữ dài không quá khoảng 70 ký tự; số liệu thẳng hàng và có đơn vị. Từ khóa nhấn có độ đậm 700; đoạn thường không bị in đậm toàn bộ. Nêu điều kiện và giới hạn ngay cạnh kết luận. | Source: MELAB original guideline plus explicitly proposed implementation roles
Field coverage (absence is not verification):
- font/source/rights/load/fallback: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-type, rule-body-rules | Evidence: none
- size/weight/leading/tracking tuples: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-type, rule-body-rules | Evidence: none
- Vietnamese: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-type, rule-body-rules | Evidence: none
- numeric alignment: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-type, rule-body-rules | Evidence: none

## spacing-shape — Spacing & Shape
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: spacing scale, padding/gap, radius/border/size, alignment/density
- rule-spacing | Khoảng cách và hình khối: Khoảng cách và hình khối Nhóm liên quan ở gần nhau; nhóm khác ở xa hơn. 4 px 8 px 16 px 24 px 32 px 48 px Trong nhóm và giữa nhóm Đề xuất 16 px trong nhóm,32 px giữa nhóm; lề vùng lớn48–64 px. Tính cả phần đã vẽ, viền và vùng bàn phím. Góc và đường bao Thẻ 16–20 px, điều khiển 12 px; phần ghép có một đường bao ngoài, không bo từng ô làm đứt quan hệ. Căn giữa đúng vùng Một nhãn/số trong khung được căn giữa hai chiều. Đo cả khoảng thở trên/dưới khi một nhóm nằm giữa hai vùng khác. Giới hạn Đề xuất nhịp 4/8/12/16/24/32/48/64 px. Khoảng cách trong nhóm 16 px; giữa nhóm tối thiểu 32 px. Dùng cung tròn và góc bo có chủ đích theo hình học nguồn. | Source: MELAB original guideline plus explicitly proposed implementation roles
Field coverage (absence is not verification):
- spacing scale: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-spacing | Evidence: none
- padding/gap: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-spacing | Evidence: none
- radius/border/size: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-spacing | Evidence: none
- alignment/density: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-spacing | Evidence: none

## components — Components
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: purpose/anatomy, variants/states, responsive, keyboard/focus, motion reference, dependency/source/specimen/QA
- rule-component-rules | Thành phần giao diện: Thành phần giao diện Một cấu trúc dùng nhất quán qua các trạng thái. Thành phần và trạng thái Có trạng thái nghỉ, trỏ chuột, nhấn, bàn phím; chọn, bận, vô hiệu khi phù hợp. Nút chính xanh sapphire/chữ trắng; nút phụ nền trắng/chữ xanh. Vùng bấm đề xuất tối thiểu 44×44 px; không chỉ dùng màu để thông báo. Thử hành động Đang khóa Đang xử lý Nhãn đậm 700; không nhầm trạng thái chọn với đã hoàn tất. | Source: MELAB original guideline plus explicitly proposed implementation roles
Field coverage (absence is not verification):
- purpose/anatomy: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-component-rules | Evidence: none
- variants/states: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-component-rules | Evidence: none
- responsive: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-component-rules | Evidence: none
- keyboard/focus: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-component-rules | Evidence: none
- motion reference: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-component-rules | Evidence: none
- dependency/source/specimen/QA: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-component-rules | Evidence: none

## guidelines — Guidelines
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: principles, do/don't, voice/tone by situation, claim discipline, anti-slop exceptions
- rule-guidelines | Nên dùng và tránh dùng: Nên dùng và tránh dùng Giữ hình khối rõ, nội dung có căn cứ. Nên dùng Một điểm đầu rõ trong mỗi khung. Chữ dễ đọc, hình học có mục đích, màu có vai trò. Dữ liệu có đơn vị, kỳ và nguồn. Tránh dùng Kéo giãn logo hoặc thay logo bằng chữ gõ lại. Màu cam/vàng làm chữ nhỏ trên trắng. Thêm linh vật, nét pixel hoặc nhận diện của nguồn tham chiếu. Điều chưa có căn cứ Ghi là đề xuất hoặc chưa xác minh; không tự biến thành chuẩn chính thức. | Source: MELAB original guideline plus explicitly proposed implementation roles
- rule-voice | Giọng viết Việt và Anh: Rõ và cụ thể. Clear and concrete. Giọng biên tập đề xuất cho hướng dẫn MELAB, không chứng nhận giọng thương hiệu chính thức. Mở tất cả Thu gọn Đọc đầy đủ Bối cảnh Đội thiết kế, nội dung và phát triển cần tìm đúng quy tắc và mẫu dùng lại. Công việc người đọc Tìm việc cần làm, hiểu cách áp dụng, biết giới hạn và bước tiếp theo. Đặc tính Rõ, cụ thể, có năng lượng vừa đủ. Đây là đề xuất biên tập, chưa phải giọng thương hiệu đã học từ tập mẫu. Giọng theo tình huống Bình thường: chỉ hành động. Lỗi: nói điều chưa làm được, nguyên nhân đã biết hoặc chưa biết và bước xử lý đã xác minh. Chưa rõ: nêu thiếu nguồn, không đoán. Tiếng Việt / English VI: câu tự nhiên, giữ dấu và điều kiện. EN: concrete verbs, consistent terms, explicit uncertainty. Tuyên bố Giữ nguyên màu, tên, đơn vị và số nguồn. Không thêm lời hứa về doanh thu hay kết quả học tập. Thành phần và ví dụ Bình thường: Chọn một mục để xem cách dùng. Lỗi: Chưa mở được mẫu; chưa xác định nguyên nhân. Xem thông tin và giới hạn trong bản ghi. Unknown: Official print specifications have not been verified. Cách cập nhật Đọc nguồn → viết theo nhiệm vụ → kiểm nghĩa và tiếng Việt/Anh → xem trên bản thật. Chỉnh nội dung làm hết giá trị kiểm chứng cũ. | Source: MELAB original guideline plus explicitly proposed implementation roles
Field coverage (absence is not verification):
- principles: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-guidelines, rule-voice | Evidence: none
- do/don't: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-guidelines, rule-voice | Evidence: none
- voice/tone by situation: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-guidelines, rule-voice | Evidence: none
- claim discipline: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-guidelines, rule-voice | Evidence: none
- anti-slop exceptions: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-guidelines, rule-voice | Evidence: none

## surfaces-elevation — Surfaces & Elevation
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: surface roles, border/shadow values or none, token references, clipping/layering
- rule-shadow-guideline | Bóng đổ theo vai trò: Bóng đổ theo vai trò Mỗi thành phần hoặc bố cục độc lập luôn có bóng trên lớp chịu trách nhiệm. Đề xuất theo yêu cầu mới của người dùng; thông số không được coi là quy định gốc của brandkit. MELAB dùng bóng mềm, giữ nguyên màu, chữ, hình và chức năng đang có. Nền sáng nhận bóng Khối nội dung có bóng Một lớp ngoài; chữ và hình bên trong giữ nguyên. Thử hành động Không khả dụng Đang xử lý Nhấn thử để kiểm chức năng; dùng Tab để kiểm viền. Nền tối nhận bóng Khối nội dung có bóng Một lớp ngoài; chữ và hình bên trong giữ nguyên. Thử hành động Không khả dụng Đang xử lý Nhấn thử để kiểm chức năng; dùng Tab để kiểm viền. Thông số từ một nguồn x / y / độ nhòe / độ lan và độ đậm Vai trò Thông số Độ đậm control 0 / 2 / 6 / 0 px 0.14 surface 0 / 4 / 12 / 0 px 0.14 floating 0 / 12 / 28 / 0 px 0.2 hover 0 / 3 / 8 / 0 px 0.18 pressed 0 / 1 / 3 / 0 px 0.12 Lớp ngoài chịu trách nhiệm Thẻ đọc, bảng, khung biểu đồ, giao diện và bố cục ứng dụng có một bóng ngoài. Nút, ô nhập và điều khiển có bóng theo trạng thái; nhấn hoặc vô hiệu hóa vẫn có bóng nhỏ. Một nhóm nối liền chỉ có một bóng trên đường bao chung; không đổ bóng lên mọi lớp lồng. Biểu đồ giữ nguyên dữ liệu Bóng thuộc khung chứa biểu đồ. Giữ nguyên dấu dữ liệu, trục, nhãn, chữ và số; không gắn bóng vào các dấu dữ liệu. Logo, ảnh và nét biểu tượng giữ nguồn gốc; khung bố cục nhận bóng khi cần. Ứng dụng ở mọi định dạng Website, ứng dụng, slide, PDF, thiết kế và biên tập dùng cùng vai trò. Giữ bóng ở bản in; chỉ chế độ màu tương phản của hệ thống được thay bóng bằng viền hệ thống. Bản xuất thật cần kiểm riêng; xem HTML không chứng minh bản xuất đã đạt. Chừa ít nhất 24px phần đã vẽ giữa các khối độc lập; tính cả bóng và viền bàn phím. Màu bóng theo nền nhận thực tế, gồm vùng sáng nằm trong trang tối. Đọc quy tắc bóng mới · Thông số đề xuất | Source: user-directed candidate proposal; shadow47.model.json
Field coverage (absence is not verification):
- surface roles: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-shadow-guideline | Evidence: none
- border/shadow values or none: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-shadow-guideline | Evidence: none
- token references: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-shadow-guideline | Evidence: none
- clipping/layering: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-shadow-guideline | Evidence: none

## imagery-icons — Imagery & Iconography
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: identity usage, image grammar, icon grid/stroke/size, custom brand rules, rights/provenance
- rule-identity | Logo và nhận diện: Logo và nhận diện Giữ nguyên hình gốc, chọn vùng nền dễ đọc. Logo nguyên bản Giữ tỷ lệ, màu và cấu trúc nguồn. Ngữ pháp hình học Hình đặc, bo mềm, phần rỗng rõ; một hình gốc và hai nền nhận. Dùng logo Dùng đúng PNG nguồn; không gõ lại tên để thay logo. Giữ tỷ lệ ảnh và dùng cách hiển thị vừa trọn khung. Khoảng trống và kích thước màn hình dưới đây là đề xuất, chưa phải chuẩn in chính thức. | Source: MELAB original guideline plus explicitly proposed implementation roles
- rule-icon-geometry | Biểu tượng và hai bản màu: Biểu tượng và hai bản màu Một hình gốc, hai nền nhận, cùng kích thước. Một hình gốc, hai nền nhận Khung hình gốc 64×64; vùng vẽ chính giữ khoảng trống quanh biên. Bản đề xuất: #4164FF trên #FFFFFF và #FFFFFF trên #4164FF. Mã này lấy từ bảng màu; không khẳng định nền xanh trong minh họa PDF có cùng mã. Hai bản đặt cạnh nhau, dùng chung cấu trúc. Không đếm hai màu thành hai loại biểu tượng. Khoảng thở bên trong hình Giữ các chi tiết tách nhau và không chạm viền ngoài trừ điểm nối có chủ đích. Xem lại ở 24/32/64 px; hình quá phức tạp cần đơn giản hóa, không kéo giãn. | Source: MELAB original guideline plus explicitly proposed implementation roles
Field coverage (absence is not verification):
- identity usage: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-identity, rule-icon-geometry | Evidence: none
- image grammar: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-identity, rule-icon-geometry | Evidence: none
- icon grid/stroke/size: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-identity, rule-icon-geometry | Evidence: none
- custom brand rules: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-identity, rule-icon-geometry | Evidence: none
- rights/provenance: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-identity, rule-icon-geometry | Evidence: none

## layout-composition — Layout & Composition
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: grid/container/breakpoints, hierarchy/anchor, long-content, selected domain/slide patterns
- rule-relation-rules | Quan hệ và đường nối: Quan hệ và đường nối Nối đúng đối tượng, giữ hướng đọc và nhãn ý nghĩa. Hình và màu phải có nghĩa Đường có hướng dùng mũi tên; quan hệ ngang hàng không tự thêm hướng. Đầu mũi tên có thể chạm đúng đường bao của đối tượng nhận; không xuyên vào hình, chữ hoặc vùng nội dung. Giữ tuyến nối và nhãn có khoảng trống riêng. Nhãn mô tả quan hệ, không lặp lại tên hai đầu. Màu xanh biểu đạt thao tác/chọn; cam/vàng nhấn ý, không thay cho nhãn trạng thái. Mũi tên giữ hướng đọc; đầu mũi tên có thể chạm đường bao khối nhận, không xuyên vào khối hoặc đè lên chữ. | Source: MELAB original guideline plus explicitly proposed implementation roles
- rule-layout-rules | Bố cục và hình ảnh: Bố cục và hình ảnh Giữ vùng chữ, hình và nguồn theo đúng công việc đọc. Bố cục theo việc đọc Slide dùng khung 1280×720, lề đề xuất 64 px. Ảnh minh họa trong guideline là tham khảo phong cách: sáng, tương phản, bóng rõ, đồ vật có chủ đích. Không biến ảnh tham khảo thành tài sản tái phân phối khi chưa rõ quyền. Khung đọc và phần tử bên trong Phân cấp Một tiêu đề chính, nội dung hỗ trợ và nguồn/giới hạn khi có. Giữ vùng chữ, hình, bảng và chú thích riêng; không để nhãn rơi ngoài vùng sở hữu. Bảng dữ liệu Vai trò cột Cách căn Điều phải giữ Tên / nhãn Trái Đủ nghĩa Số / đơn vị Phải Cùng thang và kỳ mẫu Nhận xét Trái Giới hạn suy luận Khả năng chứa Thêm vùng hoặc trang khi không đủ chỗ. Không biến chữ nội dung thành chú thích chỉ để vừa khung. Hình và nhãn Hình nằm trong vùng an toàn; nhãn và chú thích có chỗ riêng, không đè lên vùng kế tiếp. | Source: MELAB original guideline plus explicitly proposed implementation roles
Field coverage (absence is not verification):
- grid/container/breakpoints: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-relation-rules, rule-layout-rules | Evidence: none
- hierarchy/anchor: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-relation-rules, rule-layout-rules | Evidence: none
- long-content: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-relation-rules, rule-layout-rules | Evidence: none
- selected domain/slide patterns: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-relation-rules, rule-layout-rules | Evidence: none

## motion — Motion
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: purpose/trigger, duration/easing, interruption/reentry, reduced/offscreen/static fallback, backend/dependencies
- rule-motion-rules | Chuyển động có mục đích: Chuyển động có mục đích Chỉ chuyển động để giải thích hoặc phản hồi. Nghỉ · thay đổi · trở về Đề xuất phản hồi 160–220 ms; không suy thời lượng từ guideline tĩnh. Luôn có trạng thái tĩnh khi người xem giảm chuyển động. Dừng khi rời vùng nhìn; nhấn lặp không tạo nhiều tác vụ chồng nhau. Nút dừng của Thư viện dùng bản tĩnh; ưu tiên thiết lập giảm chuyển động của thiết bị. | Source: MELAB original guideline plus explicitly proposed implementation roles
Field coverage (absence is not verification):
- purpose/trigger: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-motion-rules | Evidence: none
- duration/easing: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-motion-rules | Evidence: none
- interruption/reentry: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-motion-rules | Evidence: none
- reduced/offscreen/static fallback: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-motion-rules | Evidence: none
- backend/dependencies: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-motion-rules | Evidence: none

## usage — Usage Guide
Status: proposed — MELAB source facts preserved; implementation rules explicitly proposed; current proof recorded separately.
Required detail: task reading map, binding, reuse recipe, constraints, version/change/gaps
- rule-overview | Một ý rõ ràng. Nhiều cách thể hiện.: Một ý rõ ràng. Nhiều cách thể hiện. Mỗi hình thức phục vụ một việc đọc. Nhu cầu Đọc phần Quy tắc Đọc quy tắc Tổng quan Đọc đúng nguồn và giá trị đề xuất. Chọn tài sản Thư viện Chọn theo mục đích; xem chi tiết và nguồn. Chọn bố cục Ứng dụng Giữ cấu trúc từng họ và thích nghi nội dung. Cách bắt đầu Chọn một thông điệp chính trước khi bố trí. Giữ cùng quy tắc chữ, màu và khoảng cách qua các định dạng. Dùng thư viện theo mục đích, không theo tên gọi đơn thuần. | Source: MELAB original guideline plus explicitly proposed implementation roles
- rule-system-relationship | Quy tắc, tài sản, ứng dụng: Quy tắc, tài sản, ứng dụng Đọc quy tắc trước, chọn tài sản rồi phối vào ngữ cảnh. Tổng quan : sở hữu quy tắc và giá trị. Thư viện : chứa tài sản, nguồn và cách dùng lại. Ứng dụng : kết hợp tài sản theo công việc đọc. Một nguồn chung Tổng quan sở hữu quy tắc; Thư viện chứa tài sản; Ứng dụng cho thấy cách kết hợp. Mỗi tài sản có mã ổn định, nguồn, giới hạn và cách dùng. Một mẫu đẹp không tự chứng nhận quyền sử dụng hay toàn bộ thư viện. | Source: MELAB original guideline plus explicitly proposed implementation roles
- rule-adapt | Thích nghi theo nhiệm vụ: Thích nghi theo nhiệm vụ Giữ nhận diện, đổi cách sắp xếp để phục vụ nội dung. Đọc nguồn Chọn đúng hệ thống, phiên bản và mục đích. Giữ điều bất biến Logo nguồn, màu gốc, phông và ý nghĩa dữ liệu. Thích nghi nội dung Thay chữ/hình phù hợp nhiệm vụ; giữ vùng và thứ tự của họ bố cục. Kiểm và dùng lại Kiểm chữ, màu, hình, trạng thái và phụ thuộc trên kết quả thật; quyền sử dụng vẫn giữ riêng. | Source: MELAB original guideline plus explicitly proposed implementation roles
- rule-package-docs | Nguồn và cách sử dụng: Nguồn và cách sử dụng Đọc đúng phiên bản, giữ giới hạn kiểm chứng. Đọc đúng phần Chọn mục đích, đọc quy tắc rồi mở đúng bản ghi. DESIGN.md · VOICE.md · Danh mục · Nguồn và phụ thuộc Gói cục bộ dùng để rà soát. Chưa đăng ký hay công bố thành tài sản thương hiệu chính thức. | Source: MELAB original guideline plus explicitly proposed implementation roles
Field coverage (absence is not verification):
- task reading map: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-overview, rule-system-relationship, rule-adapt, rule-package-docs | Evidence: none
- binding: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-overview, rule-system-relationship, rule-adapt, rule-package-docs | Evidence: none
- reuse recipe: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-overview, rule-system-relationship, rule-adapt, rule-package-docs | Evidence: none
- constraints: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-overview, rule-system-relationship, rule-adapt, rule-package-docs | Evidence: none
- version/change/gaps: proposed — See topic rules and actual current specimen; no source-only visual acceptance. | Records: rule-overview, rule-system-relationship, rule-adapt, rule-package-docs | Evidence: none

## overview — Một ý rõ ràng. Nhiều cách thể hiện.
Mỗi hình thức phục vụ một việc đọc.
- Chọn một thông điệp chính trước khi bố trí.
- Giữ cùng quy tắc chữ, màu và khoảng cách qua các định dạng.
- Dùng thư viện theo mục đích, không theo tên gọi đơn thuần.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## identity — Logo và nhận diện
Giữ nguyên hình gốc, chọn vùng nền dễ đọc.
- Dùng đúng PNG nguồn; không gõ lại tên để thay logo.
- Giữ tỷ lệ ảnh và dùng cách hiển thị vừa trọn khung.
- Khoảng trống và kích thước màn hình dưới đây là đề xuất, chưa phải chuẩn in chính thức.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## type — Chữ và phân cấp
Be Vietnam Pro, hỗ trợ tiếng Việt có dấu.
- Bảy mức đậm từ 200 đến 800 có trong tài liệu gốc.
- Vai trò đề xuất: tiêu đề 48/58, tiêu đề phần 32/42, đề mục 24/34, nội dung 18/30, chú thích 14/22 và nhãn thao tác 16/24 px; độ đậm theo mẫu bên trên.
- Giữ chữ rõ ở kích thước đọc; thêm trang thay vì ép nhỏ nội dung.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## colors — Bốn màu MELAB
Mỗi màu có vai trò và nền nhận riêng.
- Tiger Flame #FE6237; Sunflower Gold #FFB62E.
- Maya Blue #7CC3FF; Electric Sapphire #4164FF.
- Đề xuất xanh sapphire làm màu thao tác; cam và vàng tạo điểm nhấn. Không dùng cam/vàng làm chữ nhỏ trên trắng.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## spacing — Khoảng cách và hình khối
Nhóm liên quan ở gần nhau; nhóm khác ở xa hơn.
- Đề xuất nhịp 4/8/12/16/24/32/48/64 px.
- Khoảng cách trong nhóm 16 px; giữa nhóm tối thiểu 32 px.
- Dùng cung tròn và góc bo có chủ đích theo hình học nguồn.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## shadow-guideline — Bề mặt và độ sâu
Mỗi thành phần hoặc bố cục độc lập luôn có bóng mềm trên lớp chịu trách nhiệm.
- Thẻ nội dung: một bóng mềm surface 0 / 4 / 12 / 0 px, độ đậm 0.14; giữ viền #D9E0EF.
- Hộp nổi: đề xuất 0 / 12 / 28 / 0 px, độ đậm 0.20; lấy màu từ nền nhận.
- Nút giữ bóng control ở mặc định, hover, focus và loading; nhấn/vô hiệu hóa vẫn dùng bóng pressed khác không. Bàn phím có viền riêng.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## body-rules — Nội dung dễ đọc
Một đoạn giải thích một ý và hành động rõ.
- Nội dung chính 18 px, dòng 30 px ở khung đủ rộng.
- Dùng danh sách cho thông tin song song; bảng cho đối chiếu.
- Cột chữ dài không quá khoảng 70 ký tự; số liệu thẳng hàng và có đơn vị.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## icon-geometry — Biểu tượng và hai bản màu
Một hình gốc, hai nền nhận, cùng kích thước.
- Khung hình gốc 64×64; vùng vẽ chính giữ khoảng trống quanh biên.
- Bản đề xuất: #4164FF trên #FFFFFF và #FFFFFF trên #4164FF. Mã này lấy từ bảng màu; không khẳng định nền xanh trong minh họa PDF có cùng mã.
- Hai bản đặt cạnh nhau, dùng chung cấu trúc. Không đếm hai màu thành hai loại biểu tượng.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## relation-rules — Quan hệ và đường nối
Nối đúng đối tượng, giữ hướng đọc và nhãn ý nghĩa.
- Đường có hướng dùng mũi tên; quan hệ ngang hàng không tự thêm hướng.
- Đầu mũi tên có thể chạm đúng đường bao của đối tượng nhận; không xuyên vào hình, chữ hoặc vùng nội dung. Giữ tuyến nối và nhãn có khoảng trống riêng.
- Nhãn mô tả quan hệ, không lặp lại tên hai đầu.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## component-rules — Thành phần giao diện
Một cấu trúc dùng nhất quán qua các trạng thái.
- Có trạng thái nghỉ, trỏ chuột, nhấn, bàn phím; chọn, bận, vô hiệu khi phù hợp.
- Nút chính xanh sapphire/chữ trắng; nút phụ nền trắng/chữ xanh.
- Vùng bấm đề xuất tối thiểu 44×44 px; không chỉ dùng màu để thông báo.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## layout-rules — Bố cục và hình ảnh
Giữ vùng chữ, hình và nguồn theo đúng công việc đọc.
- Slide dùng khung 1280×720, lề đề xuất 64 px.
- Ảnh minh họa trong guideline là tham khảo phong cách: sáng, tương phản, bóng rõ, đồ vật có chủ đích.
- Không biến ảnh tham khảo thành tài sản tái phân phối khi chưa rõ quyền.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## motion-rules — Chuyển động có mục đích
Chỉ chuyển động để giải thích hoặc phản hồi.
- Đề xuất phản hồi 160–220 ms; không suy thời lượng từ guideline tĩnh.
- Luôn có trạng thái tĩnh khi người xem giảm chuyển động.
- Dừng khi rời vùng nhìn; nhấn lặp không tạo nhiều tác vụ chồng nhau.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## guidelines — Nên dùng và tránh dùng
Giữ hình khối rõ, nội dung có căn cứ.
- Chọn một điểm nhấn trong mỗi khung.
- Không kéo giãn logo, pha màu tùy tiện hoặc nhập biểu tượng nhận diện thương hiệu khác.
- Không biến số liệu minh họa thành lời hứa hiệu quả.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## voice — Giọng viết Việt và Anh
Rõ, cụ thể; độ tự tin đi cùng bằng chứng.
- Tiếng Việt: dùng câu tự nhiên, hành động cụ thể, nhất quán cách gọi.
- English: use concrete verbs and preserve conditions and uncertainty.
- Giọng hiện tại là đề xuất biên tập; chưa có đủ tập mẫu để chứng nhận giọng thương hiệu đã học.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## system-relationship — Quy tắc, tài sản, ứng dụng
Đọc quy tắc trước, chọn tài sản rồi phối vào ngữ cảnh.
- Tổng quan sở hữu quy tắc; Thư viện chứa tài sản; Ứng dụng cho thấy cách kết hợp.
- Mỗi tài sản có mã ổn định, nguồn, giới hạn và cách dùng.
- Một mẫu đẹp không tự chứng nhận quyền sử dụng hay toàn bộ thư viện.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## adapt — Thích nghi theo nhiệm vụ
Giữ nhận diện, đổi cách sắp xếp để phục vụ nội dung.
- Giữ nguyên logo, màu gốc, kiểu chữ và ý nghĩa dữ liệu.
- Đổi tỷ lệ hình/chữ khi cần; giữ cấu trúc của họ bố cục đã chọn.
- Thiếu ảnh dùng ô ghi rõ thiếu ảnh; không coi ô trống là hình hoàn tất.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## package-docs — Nguồn và cách sử dụng
Đọc đúng phiên bản, giữ giới hạn kiểm chứng.
- Xem DESIGN.md để tìm quy tắc theo mục đích.
- Dùng tệp và mã băm trong source-map.json để kiểm tra nguồn.
- Đọc trạng thái từng bản ghi; tài sản đề xuất không tự trở thành tài sản thương hiệu được đăng ký.
Nên dùng: Dùng đúng nguồn, vai trò và giới hạn.
Tránh dùng: Không tự biến đề xuất thành chuẩn chính thức.
Nguồn: 

## Showcase structure and selected coverage
Proposed visual records are separate from admitted elements.
```json
{
  "schemaVersion": "design-showcase/v2",
  "coverageMode": "full-benchmark-adaptation",
  "navigation": "header-views-sidebar-contents",
  "counts": {
    "proposedByFamily": {
      "logo-pair": 1,
      "icons-static": 123,
      "icons-motion": 8,
      "ui": 7,
      "models": 3,
      "charts": 40,
      "reading": 16,
      "backgrounds": 2
    },
    "admitted": 3,
    "applications": 42
  },
  "overviewMap": [
    {
      "sourceId": "overview:overview",
      "disposition": "mapped",
      "targetGroups": [
        "usage"
      ]
    },
    {
      "sourceId": "overview:identity",
      "disposition": "mapped",
      "targetGroups": [
        "imagery-icons"
      ]
    },
    {
      "sourceId": "overview:type",
      "disposition": "mapped",
      "targetGroups": [
        "typography"
      ]
    },
    {
      "sourceId": "overview:colors",
      "disposition": "mapped",
      "targetGroups": [
        "colors"
      ]
    },
    {
      "sourceId": "overview:spacing",
      "disposition": "mapped",
      "targetGroups": [
        "spacing-shape"
      ]
    },
    {
      "sourceId": "overview:shadow-guideline",
      "disposition": "mapped",
      "targetGroups": [
        "surfaces-elevation"
      ]
    },
    {
      "sourceId": "overview:body-rules",
      "disposition": "mapped",
      "targetGroups": [
        "typography"
      ]
    },
    {
      "sourceId": "overview:icon-geometry",
      "disposition": "mapped",
      "targetGroups": [
        "imagery-icons"
      ]
    },
    {
      "sourceId": "overview:relation-rules",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ]
    },
    {
      "sourceId": "overview:component-rules",
      "disposition": "mapped",
      "targetGroups": [
        "components"
      ]
    },
    {
      "sourceId": "overview:layout-rules",
      "disposition": "mapped",
      "targetGroups": [
        "layout-composition"
      ]
    },
    {
      "sourceId": "overview:motion-rules",
      "disposition": "mapped",
      "targetGroups": [
        "motion"
      ]
    },
    {
      "sourceId": "overview:guidelines",
      "disposition": "mapped",
      "targetGroups": [
        "guidelines"
      ]
    },
    {
      "sourceId": "overview:voice",
      "disposition": "mapped",
      "targetGroups": [
        "guidelines"
      ]
    },
    {
      "sourceId": "overview:system-relationship",
      "disposition": "mapped",
      "targetGroups": [
        "usage"
      ]
    },
    {
      "sourceId": "overview:adapt",
      "disposition": "mapped",
      "targetGroups": [
        "usage"
      ]
    },
    {
      "sourceId": "overview:package-docs",
      "disposition": "mapped",
      "targetGroups": [
        "usage"
      ]
    }
  ],
  "benchmark": {
    "version": "324.1-sidebar",
    "sha256": "76492376ede5f203a51507cebbdb96e47cd5bdccb8a4ffd4c3600d3261c01c17"
  },
  "exclusions": [
    "generative-ai catalogue",
    "every download/save action"
  ],
  "authorityReference": "User selected original MELAB full17/197/42, no planner and frozen current KAI structure; paired icon colors side by side.; RUN43 explicit MELAB-first family consolidation, reviewed before shared rollout",
  "coverageIntent": {
    "mode": "full-benchmark",
    "authorityReference": "Current explicit user request full17/197/42, retain frozen KAI and no planner."
  },
  "benchmarkFunctions": [
    {
      "id": "overview:overview",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:identity",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:type",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:colors",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:spacing",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:shadow-guideline",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:body-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:icon-geometry",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:relation-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:component-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:layout-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:motion-rules",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:guidelines",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:voice",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:system-relationship",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:adapt",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "overview:package-docs",
      "view": "overview",
      "family": "rule-jobs"
    },
    {
      "id": "library:logo-pair",
      "view": "library",
      "family": "logo-pair"
    },
    {
      "id": "library:icon-core-bullet-square",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-checkbox-empty",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-page-outline",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-home",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-back",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-forward",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-up",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-down",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-menu",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-expand",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-collapse",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-add",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-edit",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-delete",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-duplicate",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-save",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-download",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-upload",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-share",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-search",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-filter",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-sort",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-grid",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-list",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-zoom-in",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-zoom-out",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-eye",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-success",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-warning",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-error",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-info",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-loading",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-help",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-blocked",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-pending",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-file",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-folder",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-text",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-image",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-video",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-audio",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-archive",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-link",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-user",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-team",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-mail",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-chat",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-notification",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-calendar",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-meeting",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-contact",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-task",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-checklist",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-project",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-kanban",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-flag",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-target",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-clock",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-approval",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-bar-chart",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-line-chart",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-pie-chart",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-table",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-trend-up",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-trend-down",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-database",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-report",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-agent",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-workflow",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-terminal",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-code",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-integration",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-run",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-pause",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-stop",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-settings",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-lock",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-unlock",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-key",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-shield",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-permissions",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-refresh",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-logout",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-cart",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-bag",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-card",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-receipt",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-tag",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-package",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-delivery",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-refund",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-book",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-lesson",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-bookmark",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-idea",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-microphone",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-camera",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-presentation",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-core-certificate",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-sword",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-shield-crest",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-helmet",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-armor",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-boots",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-gauntlet",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-bow",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-arrow",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-staff",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-potion",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-scroll",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-quest-board",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-bonfire",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-ember",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-torch",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-lantern",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-castle",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-gate",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-tower",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-tent",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-compass",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-map-marker",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-gem",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:icon-kai-chest",
      "view": "library",
      "family": "icons-static"
    },
    {
      "id": "library:agent-knight-automation",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "library:agent-knight-design",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "library:agent-knight-html",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "library:agent-knight-video",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "library:agent-knight-content",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "library:animated-compass",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "library:animated-fire",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "library:animated-shield",
      "view": "library",
      "family": "icons-motion"
    },
    {
      "id": "library:ui-buttons",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "library:ui-topnav",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "library:ui-actions",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "library:ui-search",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "library:ui-tabs",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "library:ui-check",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "library:ui-dialog",
      "view": "library",
      "family": "ui"
    },
    {
      "id": "library:model-helmet",
      "view": "library",
      "family": "models"
    },
    {
      "id": "library:model-treasure",
      "view": "library",
      "family": "models"
    },
    {
      "id": "library:model-bonfire",
      "view": "library",
      "family": "models"
    },
    {
      "id": "library:chart-bar",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-column",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-line",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-area",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-donut",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-stack",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-scatter",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-pie",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-histogram",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-box",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-waterfall",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-heatmap",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-progress-ring",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-stacked-absolute",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-funnel",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-treemap",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-diverging",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-gantt",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-grouped",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-combo",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-slope",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-dumbbell",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-bullet",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-lollipop",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-sparklines",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-calendar-density",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-state-timeline",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-cohort",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-dependency-network",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-sankey",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-parallel",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-candlestick",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-regional-map",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-kpi-table",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-monitored-series",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-decision-tree",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:chart-journey-comparison",
      "view": "library",
      "family": "charts"
    },
    {
      "id": "library:reading-five-actions",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-moodboard",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-comparison-table",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-quantitative-chart",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-attributed-quote",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-literal-command",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-connectors",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-listing-status",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-listing-sections",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-listing-shapes",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-listing-icons",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-task-brief",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-rule-check-fix",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-readiness-levels",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-worked-example",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "library:reading-reference-card",
      "view": "library",
      "family": "reading"
    },
    {
      "id": "applications:slide283-default-cover",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-default-agenda",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-default-divider",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-default-close",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-hero",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-strip",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-grid",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-story",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-detail",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-collage",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-pair",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-mosaic",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-background",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-image-split",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-matrix",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-tables",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-columns",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-evidence",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-plan",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-dashboard",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-overview",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-mixed",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-sections",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-journey",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-sales-mix",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-competitors",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:slide283-text-ranking",
      "view": "applications",
      "family": "slides"
    },
    {
      "id": "applications:pdf-cover",
      "view": "applications",
      "family": "theory"
    },
    {
      "id": "applications:pdf-task-brief",
      "view": "applications",
      "family": "theory"
    },
    {
      "id": "applications:pdf-rule-check-fix",
      "view": "applications",
      "family": "theory"
    },
    {
      "id": "applications:pdf-readiness-levels",
      "view": "applications",
      "family": "theory"
    },
    {
      "id": "applications:pdf-worked-example",
      "view": "applications",
      "family": "theory"
    },
    {
      "id": "applications:pdf-reference-card",
      "view": "applications",
      "family": "theory"
    },
    {
      "id": "applications:pdf-source-index",
      "view": "applications",
      "family": "theory"
    },
    {
      "id": "applications:application-service",
      "view": "applications",
      "family": "websites"
    },
    {
      "id": "applications:application-article",
      "view": "applications",
      "family": "websites"
    },
    {
      "id": "applications:application-dashboard",
      "view": "applications",
      "family": "apps"
    },
    {
      "id": "applications:application-editor",
      "view": "applications",
      "family": "apps"
    },
    {
      "id": "applications:poster-moodboard",
      "view": "applications",
      "family": "design"
    },
    {
      "id": "applications:thumbnail-guideline",
      "view": "applications",
      "family": "design"
    },
    {
      "id": "applications:image-style",
      "view": "applications",
      "family": "design"
    },
    {
      "id": "applications:edit-guideline",
      "view": "applications",
      "family": "edit"
    }
  ],
  "nativeCensusRef": {
    "path": "assets/frozen-functions.json",
    "sha256": "2df6ab86305a612e64d7d0394b5cf2ecd6e1e9d82387857d9d44ce8ba9743af2"
  },
  "requiredLibraryCategories": [
    "logo-pair",
    "icons-static",
    "icons-motion",
    "ui",
    "models",
    "charts",
    "reading",
    "backgrounds"
  ],
  "featureDisposition": {
    "excludedLibraryCategories": [
      "generative-ai"
    ],
    "downloadActions": "none",
    "authorityReference": "Explicit earlier removal retained by latest full rebuild direction",
    "preserveBenchmarkFunctions": true,
    "preserveOriginalFiles": true
  },
  "sidebarPresentation": {
    "mode": "section-cards-with-counts",
    "countUnit": "unique-records"
  },
  "cataloguePresentation": {
    "mode": "direct-full-width",
    "htmlSource": "current-source-bound-srcdoc; unchanged sources retained and37 charts rebuilt from preserved example data",
    "fixedCanvas": "uniform-whole-canvas-fit-with-narrow-vertical-reading",
    "longDocuments": "vertical-reading-no-horizontal-crop",
    "receivingInsets": {
      "desktop": 24,
      "narrow": 16
    },
    "activeFrameBudget": 6,
    "detailPreview": {
      "mode": "whole-canvas-contain",
      "fit": "uniform-min-width-height",
      "htmlRecordCount": 108,
      "fullSourceLink": true
    },
    "authority": "RUN39 user correction: direct full-width specimens; complete horizontal slide canvas as KAI; narrow reading preserves every content item; long documents continue vertically. Original files and frozen reference are unchanged.",
    "chartFamilies": {
      "families": 22,
      "sourceVariants": 40,
      "desktopPlot": [
        460,
        300
      ],
      "minimumLabelPx": 16,
      "source": "system.model.json#chartCatalogue",
      "pendingApproval": "shared skill, KAI and HAHA"
    }
  }
}
```
### logo-pair — Logo MELAB nguyên bản
Status: proposed; not admitted.
- purpose: Tỷ lệ, khoảng bảo vệ, nền, ứng dụng và chỉ dẫn agent.
- family: logo-pair
- anatomy: Các vùng nội dung, hình minh họa, nguồn và khoảng trống theo chức năng.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: 
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-bullet-square — Dấu đầu dòng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dấu đầu dòng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-bullet-square-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-bullet-square-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-bullet-square-blue-on-white.svg, assets/icons/icon-core-bullet-square-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-checkbox-empty — Ô chưa chọn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng ô chưa chọn bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-checkbox-empty-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-checkbox-empty-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-checkbox-empty-blue-on-white.svg, assets/icons/icon-core-checkbox-empty-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-page-outline — Trang tài liệu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trang tài liệu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-page-outline-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-page-outline-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-page-outline-blue-on-white.svg, assets/icons/icon-core-page-outline-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-home — Trang chính
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trang chính bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-home-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-home-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-home-blue-on-white.svg, assets/icons/icon-core-home-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-back — Quay lại
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng quay lại bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-back-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-back-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-back-blue-on-white.svg, assets/icons/icon-core-back-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-forward — Đi tiếp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đi tiếp bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-forward-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-forward-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-forward-blue-on-white.svg, assets/icons/icon-core-forward-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-up — Đi lên
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đi lên bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-up-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-up-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-up-blue-on-white.svg, assets/icons/icon-core-up-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-down — Đi xuống
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đi xuống bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-down-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-down-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-down-blue-on-white.svg, assets/icons/icon-core-down-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-menu — Mở mục lục
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mở mục lục bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-menu-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-menu-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-menu-blue-on-white.svg, assets/icons/icon-core-menu-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-expand — Mở rộng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mở rộng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-expand-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-expand-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-expand-blue-on-white.svg, assets/icons/icon-core-expand-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-collapse — Thu gọn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thu gọn bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-collapse-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-collapse-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-collapse-blue-on-white.svg, assets/icons/icon-core-collapse-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-add — Thêm mục
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thêm mục bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-add-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-add-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-add-blue-on-white.svg, assets/icons/icon-core-add-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-edit — Chỉnh sửa
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chỉnh sửa bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-edit-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-edit-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-edit-blue-on-white.svg, assets/icons/icon-core-edit-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-delete — Xóa mục
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng xóa mục bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-delete-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-delete-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-delete-blue-on-white.svg, assets/icons/icon-core-delete-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-duplicate — Nhân bản
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nhân bản bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-duplicate-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-duplicate-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-duplicate-blue-on-white.svg, assets/icons/icon-core-duplicate-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-save — Lưu nội dung
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lưu nội dung bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-save-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-save-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-save-blue-on-white.svg, assets/icons/icon-core-save-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-download — Tải tệp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tải tệp bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-download-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-download-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-download-blue-on-white.svg, assets/icons/icon-core-download-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-upload — Đưa tệp lên
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đưa tệp lên bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-upload-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-upload-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-upload-blue-on-white.svg, assets/icons/icon-core-upload-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-share — Chia sẻ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chia sẻ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-share-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-share-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-share-blue-on-white.svg, assets/icons/icon-core-share-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-search — Tìm kiếm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tìm kiếm bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-search-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-search-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-search-blue-on-white.svg, assets/icons/icon-core-search-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-filter — Lọc nội dung
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lọc nội dung bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-filter-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-filter-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-filter-blue-on-white.svg, assets/icons/icon-core-filter-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-sort — Sắp xếp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng sắp xếp bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-sort-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-sort-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-sort-blue-on-white.svg, assets/icons/icon-core-sort-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-grid — Lưới nội dung
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lưới nội dung bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-grid-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-grid-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-grid-blue-on-white.svg, assets/icons/icon-core-grid-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-list — Danh sách
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng danh sách bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-list-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-list-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-list-blue-on-white.svg, assets/icons/icon-core-list-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-zoom-in — Phóng to
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng phóng to bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-zoom-in-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-zoom-in-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-zoom-in-blue-on-white.svg, assets/icons/icon-core-zoom-in-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-zoom-out — Thu nhỏ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thu nhỏ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-zoom-out-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-zoom-out-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-zoom-out-blue-on-white.svg, assets/icons/icon-core-zoom-out-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-eye — Xem nội dung
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng xem nội dung bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-eye-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-eye-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-eye-blue-on-white.svg, assets/icons/icon-core-eye-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-success — Hoàn tất
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng hoàn tất bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-success-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-success-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-success-blue-on-white.svg, assets/icons/icon-core-success-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-warning — Cần chú ý
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng cần chú ý bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-warning-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-warning-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-warning-blue-on-white.svg, assets/icons/icon-core-warning-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-error — Có lỗi
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng có lỗi bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-error-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-error-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-error-blue-on-white.svg, assets/icons/icon-core-error-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-info — Thông tin
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thông tin bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-info-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-info-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-info-blue-on-white.svg, assets/icons/icon-core-info-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-loading — Đang xử lý
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đang xử lý bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-loading-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-loading-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-loading-blue-on-white.svg, assets/icons/icon-core-loading-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-help — Trợ giúp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trợ giúp bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-help-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-help-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-help-blue-on-white.svg, assets/icons/icon-core-help-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-blocked — Đang bị chặn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đang bị chặn bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-blocked-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-blocked-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-blocked-blue-on-white.svg, assets/icons/icon-core-blocked-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-pending — Đang chờ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đang chờ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-pending-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-pending-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-pending-blue-on-white.svg, assets/icons/icon-core-pending-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-file — Tệp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tệp bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-file-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-file-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-file-blue-on-white.svg, assets/icons/icon-core-file-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-folder — Thư mục
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thư mục bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-folder-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-folder-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-folder-blue-on-white.svg, assets/icons/icon-core-folder-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-text — Văn bản
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng văn bản bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-text-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-text-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-text-blue-on-white.svg, assets/icons/icon-core-text-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-image — Hình ảnh
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng hình ảnh bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-image-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-image-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-image-blue-on-white.svg, assets/icons/icon-core-image-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-video — Video
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng video bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-video-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-video-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-video-blue-on-white.svg, assets/icons/icon-core-video-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-audio — Âm thanh
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng âm thanh bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-audio-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-audio-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-audio-blue-on-white.svg, assets/icons/icon-core-audio-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-archive — Kho lưu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng kho lưu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-archive-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-archive-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-archive-blue-on-white.svg, assets/icons/icon-core-archive-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-link — Liên kết
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng liên kết bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-link-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-link-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-link-blue-on-white.svg, assets/icons/icon-core-link-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-user — Người học
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng người học bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-user-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-user-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-user-blue-on-white.svg, assets/icons/icon-core-user-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-team — Nhóm học
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nhóm học bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-team-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-team-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-team-blue-on-white.svg, assets/icons/icon-core-team-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-mail — Thư
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thư bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-mail-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-mail-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-mail-blue-on-white.svg, assets/icons/icon-core-mail-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-chat — Trao đổi
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trao đổi bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-chat-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-chat-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-chat-blue-on-white.svg, assets/icons/icon-core-chat-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-notification — Thông báo
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thông báo bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-notification-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-notification-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-notification-blue-on-white.svg, assets/icons/icon-core-notification-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-calendar — Lịch học
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng lịch học bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-calendar-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-calendar-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-calendar-blue-on-white.svg, assets/icons/icon-core-calendar-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-meeting — Buổi gặp
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng buổi gặp bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-meeting-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-meeting-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-meeting-blue-on-white.svg, assets/icons/icon-core-meeting-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-contact — Liên hệ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng liên hệ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-contact-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-contact-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-contact-blue-on-white.svg, assets/icons/icon-core-contact-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-task — Công việc
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng công việc bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-task-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-task-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-task-blue-on-white.svg, assets/icons/icon-core-task-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-checklist — Danh sách kiểm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng danh sách kiểm bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-checklist-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-checklist-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-checklist-blue-on-white.svg, assets/icons/icon-core-checklist-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-project — Dự án
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dự án bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-project-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-project-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-project-blue-on-white.svg, assets/icons/icon-core-project-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-kanban — Bảng công việc
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bảng công việc bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-kanban-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-kanban-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-kanban-blue-on-white.svg, assets/icons/icon-core-kanban-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-flag — Cột mốc
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng cột mốc bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-flag-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-flag-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-flag-blue-on-white.svg, assets/icons/icon-core-flag-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-target — Mục tiêu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mục tiêu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-target-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-target-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-target-blue-on-white.svg, assets/icons/icon-core-target-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-clock — Thời gian
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thời gian bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-clock-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-clock-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-clock-blue-on-white.svg, assets/icons/icon-core-clock-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-approval — Đã duyệt
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đã duyệt bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-approval-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-approval-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-approval-blue-on-white.svg, assets/icons/icon-core-approval-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-bar-chart — Biểu đồ cột
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng biểu đồ cột bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-bar-chart-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-bar-chart-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-bar-chart-blue-on-white.svg, assets/icons/icon-core-bar-chart-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-line-chart — Biểu đồ đường
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng biểu đồ đường bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-line-chart-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-line-chart-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-line-chart-blue-on-white.svg, assets/icons/icon-core-line-chart-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-pie-chart — Biểu đồ tròn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng biểu đồ tròn bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-pie-chart-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-pie-chart-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-pie-chart-blue-on-white.svg, assets/icons/icon-core-pie-chart-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-table — Bảng dữ liệu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bảng dữ liệu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-table-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-table-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-table-blue-on-white.svg, assets/icons/icon-core-table-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-trend-up — Xu hướng tăng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng xu hướng tăng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-trend-up-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-trend-up-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-trend-up-blue-on-white.svg, assets/icons/icon-core-trend-up-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-trend-down — Xu hướng giảm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng xu hướng giảm bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-trend-down-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-trend-down-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-trend-down-blue-on-white.svg, assets/icons/icon-core-trend-down-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-database — Dữ liệu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dữ liệu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-database-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-database-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-database-blue-on-white.svg, assets/icons/icon-core-database-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-report — Báo cáo
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng báo cáo bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-report-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-report-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-report-blue-on-white.svg, assets/icons/icon-core-report-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-agent — Trợ lý
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trợ lý bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-agent-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-agent-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-agent-blue-on-white.svg, assets/icons/icon-core-agent-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-workflow — Quy trình
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng quy trình bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-workflow-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-workflow-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-workflow-blue-on-white.svg, assets/icons/icon-core-workflow-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-terminal — Cửa sổ lệnh
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng cửa sổ lệnh bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-terminal-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-terminal-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-terminal-blue-on-white.svg, assets/icons/icon-core-terminal-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-code — Mã nguồn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mã nguồn bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-code-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-code-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-code-blue-on-white.svg, assets/icons/icon-core-code-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-integration — Kết nối
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng kết nối bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-integration-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-integration-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-integration-blue-on-white.svg, assets/icons/icon-core-integration-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-run — Bắt đầu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bắt đầu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-run-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-run-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-run-blue-on-white.svg, assets/icons/icon-core-run-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-pause — Tạm dừng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tạm dừng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-pause-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-pause-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-pause-blue-on-white.svg, assets/icons/icon-core-pause-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-stop — Dừng lại
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dừng lại bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-stop-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-stop-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-stop-blue-on-white.svg, assets/icons/icon-core-stop-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-settings — Thiết lập
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thiết lập bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-settings-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-settings-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-settings-blue-on-white.svg, assets/icons/icon-core-settings-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-lock — Khóa
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng khóa bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-lock-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-lock-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-lock-blue-on-white.svg, assets/icons/icon-core-lock-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-unlock — Mở khóa
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mở khóa bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-unlock-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-unlock-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-unlock-blue-on-white.svg, assets/icons/icon-core-unlock-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-key — Chìa khóa
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chìa khóa bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-key-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-key-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-key-blue-on-white.svg, assets/icons/icon-core-key-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-shield — Bảo vệ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bảo vệ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-shield-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-shield-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-shield-blue-on-white.svg, assets/icons/icon-core-shield-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-permissions — Quyền truy cập
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng quyền truy cập bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-permissions-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-permissions-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-permissions-blue-on-white.svg, assets/icons/icon-core-permissions-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-refresh — Làm mới
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng làm mới bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-refresh-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-refresh-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-refresh-blue-on-white.svg, assets/icons/icon-core-refresh-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-logout — Đăng xuất
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đăng xuất bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-logout-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-logout-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-logout-blue-on-white.svg, assets/icons/icon-core-logout-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-cart — Giỏ hàng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng giỏ hàng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-cart-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-cart-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-cart-blue-on-white.svg, assets/icons/icon-core-cart-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-bag — Túi học tập
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng túi học tập bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-bag-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-bag-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-bag-blue-on-white.svg, assets/icons/icon-core-bag-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-card — Thẻ thanh toán
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thẻ thanh toán bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-card-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-card-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-card-blue-on-white.svg, assets/icons/icon-core-card-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-receipt — Biên nhận
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng biên nhận bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-receipt-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-receipt-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-receipt-blue-on-white.svg, assets/icons/icon-core-receipt-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-tag — Nhãn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nhãn bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-tag-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-tag-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-tag-blue-on-white.svg, assets/icons/icon-core-tag-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-package — Gói tài liệu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng gói tài liệu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-package-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-package-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-package-blue-on-white.svg, assets/icons/icon-core-package-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-delivery — Giao nhận
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng giao nhận bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-delivery-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-delivery-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-delivery-blue-on-white.svg, assets/icons/icon-core-delivery-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-refund — Hoàn trả
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng hoàn trả bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-refund-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-refund-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-refund-blue-on-white.svg, assets/icons/icon-core-refund-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-book — Sách mở
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng sách mở bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-book-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-book-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-book-blue-on-white.svg, assets/icons/icon-core-book-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-lesson — Bài học
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bài học bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-lesson-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-lesson-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-lesson-blue-on-white.svg, assets/icons/icon-core-lesson-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-bookmark — Đánh dấu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng đánh dấu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-bookmark-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-bookmark-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-bookmark-blue-on-white.svg, assets/icons/icon-core-bookmark-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-idea — Ý tưởng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng ý tưởng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-idea-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-idea-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-idea-blue-on-white.svg, assets/icons/icon-core-idea-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-microphone — Thu âm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng thu âm bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-microphone-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-microphone-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-microphone-blue-on-white.svg, assets/icons/icon-core-microphone-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-camera — Máy ảnh
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng máy ảnh bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-camera-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-camera-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-camera-blue-on-white.svg, assets/icons/icon-core-camera-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-presentation — Trình chiếu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng trình chiếu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-presentation-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-presentation-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-presentation-blue-on-white.svg, assets/icons/icon-core-presentation-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### icon-core-certificate — Chứng nhận
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chứng nhận bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/icon-core-certificate-blue-on-white.svg, Trắng trên xanh: assets/icons/icon-core-certificate-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/icon-core-certificate-blue-on-white.svg, assets/icons/icon-core-certificate-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-pencil — Nét bút ý tưởng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nét bút ý tưởng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-pencil-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-pencil-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-pencil-blue-on-white.svg, assets/icons/melab-symbol-pencil-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-safety-badge — Dấu bảo hộ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng dấu bảo hộ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-safety-badge-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-safety-badge-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-safety-badge-blue-on-white.svg, assets/icons/melab-symbol-safety-badge-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-learning-cap — Mũ học tập
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng mũ học tập bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-learning-cap-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-learning-cap-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-learning-cap-blue-on-white.svg, assets/icons/melab-symbol-learning-cap-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-backpack — Hành trang
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng hành trang bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-backpack-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-backpack-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-backpack-blue-on-white.svg, assets/icons/melab-symbol-backpack-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-next-step — Bước tiếp theo
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bước tiếp theo bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-next-step-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-next-step-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-next-step-blue-on-white.svg, assets/icons/melab-symbol-next-step-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-helping-hand — Bàn tay hỗ trợ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bàn tay hỗ trợ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-helping-hand-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-helping-hand-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-helping-hand-blue-on-white.svg, assets/icons/melab-symbol-helping-hand-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-focus-target — Tập trung mục tiêu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tập trung mục tiêu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-focus-target-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-focus-target-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-focus-target-blue-on-white.svg, assets/icons/melab-symbol-focus-target-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-direction — Hướng mở
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng hướng mở bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-direction-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-direction-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-direction-blue-on-white.svg, assets/icons/melab-symbol-direction-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-mentor — Người hướng dẫn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng người hướng dẫn bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-mentor-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-mentor-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-mentor-blue-on-white.svg, assets/icons/melab-symbol-mentor-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-energy-flask — Năng lượng thử nghiệm
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng năng lượng thử nghiệm bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-energy-flask-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-energy-flask-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-energy-flask-blue-on-white.svg, assets/icons/melab-symbol-energy-flask-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-knowledge-scroll — Cuộn kiến thức
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng cuộn kiến thức bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-knowledge-scroll-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-knowledge-scroll-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-knowledge-scroll-blue-on-white.svg, assets/icons/melab-symbol-knowledge-scroll-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-learning-board — Bảng học tập
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bảng học tập bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-learning-board-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-learning-board-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-learning-board-blue-on-white.svg, assets/icons/melab-symbol-learning-board-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-gathering — Vòng kết nối
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng vòng kết nối bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-gathering-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-gathering-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-gathering-blue-on-white.svg, assets/icons/melab-symbol-gathering-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-spark — Điểm lóe sáng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng điểm lóe sáng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-spark-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-spark-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-spark-blue-on-white.svg, assets/icons/melab-symbol-spark-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-inspiration — Nguồn cảm hứng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nguồn cảm hứng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-inspiration-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-inspiration-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-inspiration-blue-on-white.svg, assets/icons/melab-symbol-inspiration-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-sun — Ánh sáng khám phá
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng ánh sáng khám phá bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-sun-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-sun-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-sun-blue-on-white.svg, assets/icons/melab-symbol-sun-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-campus — Không gian học
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng không gian học bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-campus-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-campus-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-campus-blue-on-white.svg, assets/icons/melab-symbol-campus-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-open-door — Cánh cửa mới
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng cánh cửa mới bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-open-door-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-open-door-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-open-door-blue-on-white.svg, assets/icons/melab-symbol-open-door-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-telescope — Tầm nhìn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng tầm nhìn bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-telescope-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-telescope-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-telescope-blue-on-white.svg, assets/icons/melab-symbol-telescope-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-shelter — Nơi hội tụ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng nơi hội tụ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-shelter-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-shelter-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-shelter-blue-on-white.svg, assets/icons/melab-symbol-shelter-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-compass — La bàn định hướng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng la bàn định hướng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-compass-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-compass-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-compass-blue-on-white.svg, assets/icons/melab-symbol-compass-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-place — Điểm đến
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng điểm đến bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-place-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-place-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-place-blue-on-white.svg, assets/icons/melab-symbol-place-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-value-gem — Giá trị cốt lõi
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng giá trị cốt lõi bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-value-gem-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-value-gem-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-value-gem-blue-on-white.svg, assets/icons/melab-symbol-value-gem-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-symbol-resource-kit — Bộ công cụ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng bộ công cụ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-static
- anatomy: Một hình gốc32×32, hai nền nhận trắng/xanh, tỷ lệ hình và phần rỗng giống nhau.
- variants: Xanh trên trắng: assets/icons/melab-symbol-resource-kit-blue-on-white.svg, Trắng trên xanh: assets/icons/melab-symbol-resource-kit-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/fonts/OFL.txt, assets/icons/melab-symbol-resource-kit-blue-on-white.svg, assets/icons/melab-symbol-resource-kit-white-on-blue.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-motion-settings — Chuyển động · Thiết lập
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chuyển động · thiết lập bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-motion
- anatomy: Một hình gốc, trạng thái nghỉ/chuyển động và bản tĩnh; hai nền nhận cùng hình.
- variants: Xanh trên trắng: assets/motion/melab-motion-settings-blue-on-white.svg, Trắng trên xanh: assets/motion/melab-motion-settings-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/motion/melab-motion-settings-static.svg, assets/fonts/OFL.txt, assets/motion/melab-motion-settings-blue-on-white.svg, assets/motion/melab-motion-settings-blue-on-white-static.svg, assets/motion/melab-motion-settings-white-on-blue.svg, assets/motion/melab-motion-settings-white-on-blue-static.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-motion-edit — Chuyển động · Chỉnh sửa
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chuyển động · chỉnh sửa bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-motion
- anatomy: Một hình gốc, trạng thái nghỉ/chuyển động và bản tĩnh; hai nền nhận cùng hình.
- variants: Xanh trên trắng: assets/motion/melab-motion-edit-blue-on-white.svg, Trắng trên xanh: assets/motion/melab-motion-edit-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/motion/melab-motion-edit-static.svg, assets/fonts/OFL.txt, assets/motion/melab-motion-edit-blue-on-white.svg, assets/motion/melab-motion-edit-blue-on-white-static.svg, assets/motion/melab-motion-edit-white-on-blue.svg, assets/motion/melab-motion-edit-white-on-blue-static.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-motion-code — Chuyển động · Mã nguồn
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chuyển động · mã nguồn bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-motion
- anatomy: Một hình gốc, trạng thái nghỉ/chuyển động và bản tĩnh; hai nền nhận cùng hình.
- variants: Xanh trên trắng: assets/motion/melab-motion-code-blue-on-white.svg, Trắng trên xanh: assets/motion/melab-motion-code-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/motion/melab-motion-code-static.svg, assets/fonts/OFL.txt, assets/motion/melab-motion-code-blue-on-white.svg, assets/motion/melab-motion-code-blue-on-white-static.svg, assets/motion/melab-motion-code-white-on-blue.svg, assets/motion/melab-motion-code-white-on-blue-static.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-motion-video — Chuyển động · Video
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chuyển động · video bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-motion
- anatomy: Một hình gốc, trạng thái nghỉ/chuyển động và bản tĩnh; hai nền nhận cùng hình.
- variants: Xanh trên trắng: assets/motion/melab-motion-video-blue-on-white.svg, Trắng trên xanh: assets/motion/melab-motion-video-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/motion/melab-motion-video-static.svg, assets/fonts/OFL.txt, assets/motion/melab-motion-video-blue-on-white.svg, assets/motion/melab-motion-video-blue-on-white-static.svg, assets/motion/melab-motion-video-white-on-blue.svg, assets/motion/melab-motion-video-white-on-blue-static.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-motion-text — Chuyển động · Văn bản
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chuyển động · văn bản bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-motion
- anatomy: Một hình gốc, trạng thái nghỉ/chuyển động và bản tĩnh; hai nền nhận cùng hình.
- variants: Xanh trên trắng: assets/motion/melab-motion-text-blue-on-white.svg, Trắng trên xanh: assets/motion/melab-motion-text-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/motion/melab-motion-text-static.svg, assets/fonts/OFL.txt, assets/motion/melab-motion-text-blue-on-white.svg, assets/motion/melab-motion-text-blue-on-white-static.svg, assets/motion/melab-motion-text-white-on-blue.svg, assets/motion/melab-motion-text-white-on-blue-static.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-motion-target — Chuyển động · Mục tiêu
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chuyển động · mục tiêu bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-motion
- anatomy: Một hình gốc, trạng thái nghỉ/chuyển động và bản tĩnh; hai nền nhận cùng hình.
- variants: Xanh trên trắng: assets/motion/melab-motion-target-blue-on-white.svg, Trắng trên xanh: assets/motion/melab-motion-target-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/motion/melab-motion-target-static.svg, assets/fonts/OFL.txt, assets/motion/melab-motion-target-blue-on-white.svg, assets/motion/melab-motion-target-blue-on-white-static.svg, assets/motion/melab-motion-target-white-on-blue.svg, assets/motion/melab-motion-target-white-on-blue-static.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-motion-idea — Chuyển động · Ý tưởng
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chuyển động · ý tưởng bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-motion
- anatomy: Một hình gốc, trạng thái nghỉ/chuyển động và bản tĩnh; hai nền nhận cùng hình.
- variants: Xanh trên trắng: assets/motion/melab-motion-idea-blue-on-white.svg, Trắng trên xanh: assets/motion/melab-motion-idea-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/motion/melab-motion-idea-static.svg, assets/fonts/OFL.txt, assets/motion/melab-motion-idea-blue-on-white.svg, assets/motion/melab-motion-idea-blue-on-white-static.svg, assets/motion/melab-motion-idea-white-on-blue.svg, assets/motion/melab-motion-idea-white-on-blue-static.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-motion-shield — Chuyển động · Bảo vệ
Status: proposed; not admitted.
- purpose: Biểu đạt chức năng chuyển động · bảo vệ bằng hình học rõ, bo mềm và hai bản màu MELAB.
- family: icons-motion
- anatomy: Một hình gốc, trạng thái nghỉ/chuyển động và bản tĩnh; hai nền nhận cùng hình.
- variants: Xanh trên trắng: assets/motion/melab-motion-shield-blue-on-white.svg, Trắng trên xanh: assets/motion/melab-motion-shield-white-on-blue.svg
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/motion/melab-motion-shield-static.svg, assets/fonts/OFL.txt, assets/motion/melab-motion-shield-blue-on-white.svg, assets/motion/melab-motion-shield-blue-on-white-static.svg, assets/motion/melab-motion-shield-white-on-blue.svg, assets/motion/melab-motion-shield-white-on-blue-static.svg
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### ui-buttons — Các loại nút
Status: proposed; not admitted.
- purpose: Chọn đúng vai trò trước khi chọn màu.
- family: ui
- anatomy: Nhãn, vùng bấm, phản hồi và các trạng thái áp dụng; tương tác mẫu cục bộ.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/specimens/ui-topnav.html, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### ui-topnav — Điều hướng trên
Status: proposed; not admitted.
- purpose: Giữ nhãn chính ngắn, trạng thái chọn rõ và vùng bấm đủ rộng.
- family: ui
- anatomy: Nhãn, vùng bấm, phản hồi và các trạng thái áp dụng; tương tác mẫu cục bộ.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/logo.png, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### ui-actions — Nhóm hành động
Status: proposed; not admitted.
- purpose: Hành động chính xanh, hành động phụ nền giấy; cùng chiều cao.
- family: ui
- anatomy: Nhãn, vùng bấm, phản hồi và các trạng thái áp dụng; tương tác mẫu cục bộ.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### ui-search — Tìm nội dung
Status: proposed; not admitted.
- purpose: Nhãn luôn hiện; hướng dẫn không nằm riêng trong placeholder.
- family: ui
- anatomy: Nhãn, vùng bấm, phản hồi và các trạng thái áp dụng; tương tác mẫu cục bộ.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### ui-tabs — Chọn phần nội dung
Status: proposed; not admitted.
- purpose: Phần chọn hiển thị nội dung riêng; hỗ trợ phím mũi tên.
- family: ui
- anatomy: Nhãn, vùng bấm, phản hồi và các trạng thái áp dụng; tương tác mẫu cục bộ.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### ui-check — Mục có ô kiểm
Status: proposed; not admitted.
- purpose: Chỉ đánh dấu khi việc đã được kiểm; giữ nhãn sát đúng điều khiển.
- family: ui
- anatomy: Nhãn, vùng bấm, phản hồi và các trạng thái áp dụng; tương tác mẫu cục bộ.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### ui-dialog — Hộp thông tin
Status: proposed; not admitted.
- purpose: Đọc thêm rồi trở về đúng vị trí; đóng bằng Escape.
- family: ui
- anatomy: Nhãn, vùng bấm, phản hồi và các trạng thái áp dụng; tương tác mẫu cục bộ.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-model-pavilion — Mái che học tập
Status: proposed; not admitted.
- purpose: Mô hình WebGL MELAB cục bộ; không có thư viện bên ngoài.
- family: models
- anatomy: Hình học3D, camera, vật liệu màu MELAB, xoay/đặt lại và tĩnh khi giảm chuyển động.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/model-viewer.js, assets/models/melab-pavilion-static.png, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-model-toolkit — Bộ công cụ ý tưởng
Status: proposed; not admitted.
- purpose: Mô hình WebGL MELAB cục bộ; không có thư viện bên ngoài.
- family: models
- anatomy: Hình học3D, camera, vật liệu màu MELAB, xoay/đặt lại và tĩnh khi giảm chuyển động.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/model-viewer.js, assets/models/melab-toolkit-static.png, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-model-gathering — Khối hội tụ
Status: proposed; not admitted.
- purpose: Mô hình WebGL MELAB cục bộ; không có thư viện bên ngoài.
- family: models
- anatomy: Hình học3D, camera, vật liệu màu MELAB, xoay/đặt lại và tĩnh khi giảm chuyển động.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng, giảm chuyển động, dừng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/model-viewer.js, assets/models/melab-gathering-static.png, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-bar — Thanh ngang
Status: proposed; not admitted.
- purpose: Số công việc: 8, 6, 10. Trục 0–12.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-column — Cột theo kỳ
Status: proposed; not admitted.
- purpose: Ba kỳ: 4, 7, 9. Trục 0–10.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-line — Đường xu hướng
Status: proposed; not admitted.
- purpose: Bốn kỳ: 2, 5, 4, 9. Trục 0–10.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-area — Vùng theo thời gian
Status: proposed; not admitted.
- purpose: Cùng chuỗi 2, 5, 4, 9; nền vùng giữ đường rõ.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-donut — Vòng cơ cấu
Status: proposed; not admitted.
- purpose: Xong 60, còn 40; tổng 100.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-stack — Thanh cơ cấu 100%
Status: proposed; not admitted.
- purpose: Hai nhóm 60% và 40%; không dùng cho số tuyệt đối.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-scatter — Phân tán hai biến
Status: proposed; not admitted.
- purpose: Năm cặp x/y; hai trục 0–10. Không suy quan hệ nhân quả.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-pie — Tròn cơ cấu
Status: proposed; not admitted.
- purpose: Hai phần 60 và 40, tổng 100; nhãn ghi trực tiếp tỷ lệ.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-histogram — Phân bố theo khoảng
Status: proposed; not admitted.
- purpose: Ba khoảng bằng nhau: 0–10 có 2, 10–20 có 5, 20–30 có 3 quan sát.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-box — Hộp và khoảng biến thiên
Status: proposed; not admitted.
- purpose: Tóm tắt mẫu: nhỏ nhất 2, tứ phân vị 4 và 8, trung vị 6, lớn nhất 10.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-waterfall — Đóng góp tăng và giảm
Status: proposed; not admitted.
- purpose: Bắt đầu 8, thêm 4, bớt 2, kết thúc 10. Giữ dấu tăng/giảm.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-heatmap — Ma trận có giá trị
Status: proposed; not admitted.
- purpose: Hai nhóm, ba kỳ; mỗi ô giữ số. Màu hỗ trợ đọc, không thay số.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-progress-ring — Vòng tiến độ
Status: proposed; not admitted.
- purpose: Hoàn tất 6 trên 10 mục; tỷ lệ 60%.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-stacked-absolute — Thanh chồng số tuyệt đối
Status: proposed; not admitted.
- purpose: A có 4+6=10; B có 3+5=8 mục.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-funnel — Phễu theo bước
Status: proposed; not admitted.
- purpose: Cùng một nhóm:20→12→6 mục qua ba bước.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-treemap — Ô diện tích cơ cấu
Status: proposed; not admitted.
- purpose: Ba phần 50,30,20 mục; tổng 100.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-diverging — Thanh hai phía
Status: proposed; not admitted.
- purpose: Thay đổi: A−4; B+6; C−2; D+3 mục.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-gantt — Lịch công việc
Status: proposed; not admitted.
- purpose: A ngày 1–3; B ngày 3–6; C ngày 5–8.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-grouped — Cột theo nhóm
Status: proposed; not admitted.
- purpose: A:4/7; B:6/5; C:3/8 mục cho Đọc/Dựng.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-combo — Cột và đường cùng trục
Status: proposed; not admitted.
- purpose: Số tiếp nhận 4/7/9; số hoàn tất 3/5/8 mục.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-slope — Độ dốc giữa hai kỳ
Status: proposed; not admitted.
- purpose: A 4→7; B 8→6; C 2→5 mục.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-dumbbell — Hai đầu theo nhóm
Status: proposed; not admitted.
- purpose: A 3→7; B 5→8; C 2→6 mục.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-bullet — Thực tế và mục tiêu
Status: proposed; not admitted.
- purpose: Thực tế 7; mục tiêu 9; thang 0–12 mục.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-lollipop — Chấm có trục so sánh
Status: proposed; not admitted.
- purpose: A 4; B 7; C 9 mục; trục 0–10.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-sparklines — Đường nhỏ theo nhóm
Status: proposed; not admitted.
- purpose: A 2/4/3/6; B 5/3/4/7 mục; cùng thang 0–10.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-calendar-density — Lịch có giá trị
Status: proposed; not admitted.
- purpose: Ba tuần minh họa, mỗi ngày 0–4 mục.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-state-timeline — Dải trạng thái theo thời gian
Status: proposed; not admitted.
- purpose: Ngày 1–2 Chờ;3–5 Làm;6–8 Kiểm.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-cohort — Giữ lại theo nhóm bắt đầu
Status: proposed; not admitted.
- purpose: Ba nhóm; tỷ lệ ở kỳ 0 luôn 100%.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-dependency-network — Quan hệ phụ thuộc
Status: proposed; not admitted.
- purpose: A→B; A→C; B→D; C→D.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-sankey — Luồng có lượng
Status: proposed; not admitted.
- purpose: A 10 mục chia thành B 6 và C 4.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-parallel — Nhiều tiêu chí song song
Status: proposed; not admitted.
- purpose: Ba tiêu chí đều thang 0–10 điểm; hai nhóm A/B.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-candlestick — Nến khoảng và hai thời điểm
Status: proposed; not admitted.
- purpose: Ba kỳ; mở/cao/thấp/đóng trên thang 0–10 điểm minh họa.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-regional-map — Bản đồ vùng sơ đồ
Status: proposed; not admitted.
- purpose: Ba vùng A 4; B 7; C 2 mục. Hình không theo địa lý thật.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-kpi-table — Chỉ số và bảng chi tiết
Status: proposed; not admitted.
- purpose: Tổng 15 mục = Đọc 6 + Dựng 5 + Kiểm 4.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-monitored-series — Chuỗi có ngưỡng theo dõi
Status: proposed; not admitted.
- purpose: Bốn kỳ 2/5/4/8; ngưỡng 6 mục.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-decision-tree — Cây lựa chọn
Status: proposed; not admitted.
- purpose: Hai điều kiện: có nguồn và cần duyệt; ba hướng đi.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### chart-journey-comparison — Hành trình theo bước
Status: proposed; not admitted.
- purpose: Ba bước; đối chiếu hành động, điểm khó và cách cải thiện.
- family: charts
- anatomy: Tiêu đề, hình mã hóa dữ liệu, nhãn, đơn vị và bảng số liệu đối chiếu.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: Mẫu MELAB RUN43; dữ liệu ví dụ cũ được giữ, hình học và bảng số từ cùng dữ liệu. Không phải số liệu kinh doanh.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/charts/chart-data.json, assets/charts/chart-runtime.css, assets/charts/chart-runtime.js, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/fonts/OFL.txt, assets/native-layout.css, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-five-actions — Năm bước thực hành
Status: proposed; not admitted.
- purpose: Mẫu hiển thị trực tiếp; giữ nội dung, dữ liệu và nguồn.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-moodboard — Bảng hình tham chiếu
Status: proposed; not admitted.
- purpose: Mẫu hiển thị trực tiếp; giữ nội dung, dữ liệu và nguồn.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-comparison-table — Bảng so sánh
Status: proposed; not admitted.
- purpose: Mẫu hiển thị trực tiếp; giữ nội dung, dữ liệu và nguồn.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-quantitative-chart — Biểu đồ có ngữ cảnh
Status: proposed; not admitted.
- purpose: Mẫu hiển thị trực tiếp; giữ nội dung, dữ liệu và nguồn.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-attributed-quote — Lời trích có nguồn
Status: proposed; not admitted.
- purpose: Mẫu hiển thị trực tiếp; giữ nội dung, dữ liệu và nguồn.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/imagery/melab-image-master-original.png, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-literal-command — Nội dung sao chép
Status: proposed; not admitted.
- purpose: Mẫu hiển thị trực tiếp; giữ nội dung, dữ liệu và nguồn.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-connectors — Đường nối và quan hệ
Status: proposed; not admitted.
- purpose: Bốn biến thể: nhánh vuông, mũi tên, nét đứt và đường cong; giữ ý nghĩa, điểm neo và nhãn.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/connectors.js, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-listing-status — Đối chiếu có và chưa có
Status: proposed; not admitted.
- purpose: Tách khả năng đã có khỏi phần còn thiếu và cách xử lý.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-listing-sections — Danh sách chia mục có số
Status: proposed; not admitted.
- purpose: Nhóm nhiều mục theo chủ đề; số giúp tìm lại từng mục.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-listing-shapes — Danh sách với dấu hình
Status: proposed; not admitted.
- purpose: Tách các ý ngang hàng mà không thêm nghĩa về trạng thái hay trình tự.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-listing-icons — Danh sách với cụm icon mô tả
Status: proposed; not admitted.
- purpose: Cho thấy các cách làm khác nhau bằng một cụm hình có nghĩa và phần giải thích.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-task-brief — Phiếu mục tiêu
Status: proposed; not admitted.
- purpose: Chốt người đọc, việc cần làm, đầu vào và kết quả trước khi bắt đầu.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-rule-check-fix — Quy tắc · kiểm · sửa
Status: proposed; not admitted.
- purpose: Nối một nguyên tắc với cách phát hiện sai lệch và cách sửa.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-readiness-levels — Các mức sẵn sàng
Status: proposed; not admitted.
- purpose: Phân biệt các mức năng lực bằng điều kiện đầu vào và tiêu chí đạt.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-worked-example — Ví dụ có giải thích
Status: proposed; not admitted.
- purpose: Cho thấy một đầu vào được chuyển thành kết quả như thế nào và vì sao.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### reading-reference-card — Thẻ nguồn tham khảo
Status: proposed; not admitted.
- purpose: Giúp chọn nguồn theo phần hữu ích, tình huống dùng và giới hạn.
- family: reading
- anatomy: Tiêu đề, khối nội dung theo công việc đọc, điều kiện áp dụng và giới hạn.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/native-layout.css, assets/fonts/OFL.txt, assets/fonts/BeVietnamPro-200.ttf, assets/fonts/BeVietnamPro-300.ttf, assets/fonts/BeVietnamPro-400.ttf, assets/fonts/BeVietnamPro-500.ttf, assets/fonts/BeVietnamPro-600.ttf, assets/fonts/BeVietnamPro-700.ttf, assets/fonts/BeVietnamPro-800.ttf, assets/melab-rules.md, assets/sample-viewer-bridge.js
- ruleGroups: imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-background-squiggle — Nét nối ý tưởng
Status: proposed; not admitted.
- purpose: Nền hình học dùng ở vùng mở đầu; giữ vùng trái cho chữ và điều chỉnh nhận màu trước khi dùng.
- family: backgrounds
- anatomy: Các vùng nội dung, hình minh họa, nguồn và khoảng trống theo chức năng.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/squiggle.svg
- ruleGroups: surfaces-elevation, imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### melab-background-geometric — Mảng hình khám phá
Status: proposed; not admitted.
- purpose: Nền hình học dùng ở vùng mở đầu; giữ vùng trái cho chữ và điều chỉnh nhận màu trước khi dùng.
- family: backgrounds
- anatomy: Các vùng nội dung, hình minh họa, nguồn và khoảng trống theo chức năng.
- variants: Not specified; inspect source model.
- states: nghỉ, mở chi tiết, tái sử dụng
- source: MELAB guideline gốc: màu, chữ và ngữ pháp hình. Giá trị giao diện bổ sung là đề xuất; bố cục theo phiên bản tham chiếu đã chọn.
- rights: Dùng cục bộ cho công việc MELAB hiện tại; logo nguyên bản, chữ kèm giấy phép OFL. Chưa chứng nhận phát hành công khai.
- dependencies: assets/squiggle.svg
- ruleGroups: surfaces-elevation, imagery-icons
- reuse: Đọc mục đích, cấu tạo và giới hạn; dùng đúng tệp và phụ thuộc, giữ nguyên nội dung dữ liệu hoặc ghi rõ dữ liệu mới.
### map-us — Bản đồ Hoa Kỳ
Status: admitted by prior explicit named local approval; default component retained with unchanged native source and material binding.
- purpose: 50 tiểu bang và DC, Alaska và Hawaii ở ô phụ; chọn vùng để đọc tên.
- family: charts
- anatomy: Tiêu đề, bản đồ tương tác, điều khiển, chú giải, nội dung đối chiếu và nguồn.
- variants: Not specified; inspect source model.
- states: nghỉ, chọn vùng, phóng to, thu nhỏ, bàn phím, nền sáng, nền tối, giảm chuyển động
- source: Dữ liệu địa lý có nguồn, phạm vi và giấy phép tại trang Nguồn đi kèm.
- rights: Giữ thông báo ISC cho us-atlas/world-atlas, dữ liệu Natural Earth phạm vi công cộng và giấy phép OFL của phông đi kèm. Nguồn chính thức Việt Nam ghi ngay trong mẫu.
- dependencies: assets/maps/index.html, assets/maps/vietnam.html, assets/maps/world.html, assets/maps/sources.html
- ruleGroups: imagery-icons
- reuse: Giữ đường bao, nguồn, giấy phép và giới hạn; thay dữ liệu minh họa theo công việc.
### map-vietnam — Bản đồ Việt Nam
Status: admitted by prior explicit named local approval; default component retained with unchanged native source and material binding.
- purpose: Đất liền, lớp đảo nhỏ và bảy vị trí đại diện có nguồn; hai ô Hoàng Sa và Trường Sa.
- family: charts
- anatomy: Tiêu đề, bản đồ tương tác, điều khiển, chú giải, nội dung đối chiếu và nguồn.
- variants: Not specified; inspect source model.
- states: nghỉ, chọn vùng, phóng to, thu nhỏ, bàn phím, nền sáng, nền tối, giảm chuyển động
- source: Dữ liệu địa lý có nguồn, phạm vi và giấy phép tại trang Nguồn đi kèm.
- rights: Giữ thông báo ISC cho us-atlas/world-atlas, dữ liệu Natural Earth phạm vi công cộng và giấy phép OFL của phông đi kèm. Nguồn chính thức Việt Nam ghi ngay trong mẫu.
- dependencies: assets/maps/index.html, assets/maps/united-states.html, assets/maps/world.html, assets/maps/sources.html
- ruleGroups: imagery-icons
- reuse: Giữ đường bao, nguồn, giấy phép và giới hạn; thay dữ liệu minh họa theo công việc.
### map-world-3d — Địa cầu 3D
Status: admitted by prior explicit named local approval; default component retained with unchanged native source and material binding.
- purpose: Khối cầu xoay có kéo, phím, đổi góc nhìn và bản đồ phẳng dự phòng.
- family: charts
- anatomy: Tiêu đề, bản đồ tương tác, điều khiển, chú giải, nội dung đối chiếu và nguồn.
- variants: Not specified; inspect source model.
- states: nghỉ, chọn vùng, phóng to, thu nhỏ, bàn phím, nền sáng, nền tối, giảm chuyển động
- source: Dữ liệu địa lý có nguồn, phạm vi và giấy phép tại trang Nguồn đi kèm.
- rights: Giữ thông báo ISC cho us-atlas/world-atlas, dữ liệu Natural Earth phạm vi công cộng và giấy phép OFL của phông đi kèm. Nguồn chính thức Việt Nam ghi ngay trong mẫu.
- dependencies: assets/maps/index.html, assets/maps/united-states.html, assets/maps/vietnam.html, assets/maps/sources.html
- ruleGroups: imagery-icons
- reuse: Giữ đường bao, nguồn, giấy phép và giới hạn; thay dữ liệu minh họa theo công việc.
## Authoring contract
Overview owns these rule references; Library and Applications consume them.
```json
{
  "formats": {
    "app": {
      "ruleIds": [
        "rule-layout-rules",
        "rule-adapt"
      ]
    },
    "design": {
      "ruleIds": [
        "rule-layout-rules",
        "rule-adapt"
      ]
    },
    "edit": {
      "ruleIds": [
        "rule-layout-rules",
        "rule-adapt"
      ]
    },
    "html": {
      "ruleIds": [
        "rule-layout-rules",
        "rule-adapt"
      ]
    },
    "knowledge-pdf": {
      "ruleIds": [
        "rule-layout-rules",
        "rule-adapt"
      ]
    },
    "png": {
      "ruleIds": [
        "rule-layout-rules",
        "rule-adapt"
      ]
    },
    "slide": {
      "ruleIds": [
        "rule-layout-rules",
        "rule-adapt"
      ]
    },
    "svg": {
      "ruleIds": [
        "rule-layout-rules",
        "rule-adapt"
      ]
    },
    "website": {
      "ruleIds": [
        "rule-layout-rules",
        "rule-adapt"
      ]
    }
  },
  "roles": {
    "apps": {
      "formatIds": [
        "app"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "template"
      ]
    },
    "backgrounds": {
      "formatIds": [
        "svg"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "background"
      ]
    },
    "charts": {
      "formatIds": [
        "html"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "chart"
      ]
    },
    "design": {
      "formatIds": [
        "design"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "template"
      ]
    },
    "edit": {
      "formatIds": [
        "edit"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "template"
      ]
    },
    "icons-motion": {
      "formatIds": [
        "svg"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "icon"
      ]
    },
    "icons-static": {
      "formatIds": [
        "svg"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "icon"
      ]
    },
    "identity": {
      "formatIds": [
        "png"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "identity"
      ]
    },
    "models": {
      "formatIds": [
        "html"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "model"
      ]
    },
    "reading": {
      "formatIds": [
        "html"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "reading"
      ]
    },
    "slides": {
      "formatIds": [
        "slide"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "template"
      ]
    },
    "theory": {
      "formatIds": [
        "knowledge-pdf"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "template"
      ]
    },
    "ui": {
      "formatIds": [
        "html"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "ui"
      ]
    },
    "websites": {
      "formatIds": [
        "website"
      ],
      "ruleIds": [
        "rule-adapt"
      ],
      "stateIds": [
        "rest",
        "active",
        "disabled",
        "empty",
        "error",
        "detail",
        "focus",
        "reduced"
      ],
      "typeIds": [
        "template"
      ]
    }
  },
  "schemaVersion": "overview-authoring/v1",
  "states": {
    "active": {
      "ruleIds": [
        "rule-component-rules",
        "rule-guidelines"
      ]
    },
    "detail": {
      "ruleIds": [
        "rule-component-rules",
        "rule-guidelines"
      ]
    },
    "disabled": {
      "ruleIds": [
        "rule-component-rules",
        "rule-guidelines"
      ]
    },
    "empty": {
      "ruleIds": [
        "rule-component-rules",
        "rule-guidelines"
      ]
    },
    "error": {
      "ruleIds": [
        "rule-component-rules",
        "rule-guidelines"
      ]
    },
    "focus": {
      "ruleIds": [
        "rule-component-rules",
        "rule-guidelines"
      ]
    },
    "reduced": {
      "ruleIds": [
        "rule-component-rules",
        "rule-motion-rules"
      ]
    },
    "rest": {
      "ruleIds": [
        "rule-component-rules",
        "rule-guidelines"
      ]
    }
  },
  "types": {
    "background": {
      "ruleIds": [
        "rule-layout-rules"
      ]
    },
    "chart": {
      "ruleIds": [
        "rule-relation-rules"
      ]
    },
    "icon": {
      "ruleIds": [
        "rule-icon-geometry"
      ]
    },
    "identity": {
      "ruleIds": [
        "rule-identity"
      ]
    },
    "model": {
      "ruleIds": [
        "rule-motion-rules"
      ]
    },
    "reading": {
      "ruleIds": [
        "rule-body-rules"
      ]
    },
    "template": {
      "ruleIds": [
        "rule-layout-rules"
      ]
    },
    "ui": {
      "ruleIds": [
        "rule-component-rules"
      ]
    }
  }
}
```
Rule hash: deb0677fca30cb411456621dae45849648eb73b8a392e5dc25deee50b7e2497f
## Evidence
No independent visual release or external license certification implied.
No designer/developer kit is required.

## Application examples
These are declared examples, not verified executable outputs.
### melab-slide283-default-cover — Mở đầu báo cáo
slide · proposed · Tiêu đề, thông tin báo cáo và một dải ảnh toàn cảnh.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-default-agenda — Mục lục
slide · proposed · Mục lục toàn báo cáo: chỉ liệt kê các phần lớn theo thứ tự.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-default-divider — Mở phần
slide · proposed · Mở phần 01: tên phần, ba mục bên trong và cụm ảnh định hướng.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-default-close — Kết thúc
slide · proposed · Lời cảm ơn, chủ đề báo cáo, dải năm ảnh và người trình bày.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-hero — Hình lớn · lời giải thích
slide · proposed · Một hình ngang lớn và một cột giải thích ngắn.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-strip — Dải hình · chuỗi cùng chủ đề
slide · proposed · Ba hình bằng nhau theo một chuỗi; mỗi hình một nhãn.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-grid — Bảng hình · bốn lựa chọn
slide · proposed · Bốn hình đồng cấp trong lưới hai hàng.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-story — Hai hàng · hình và ngữ cảnh
slide · proposed · Hai hàng hình nhỏ đi cùng lời giải thích; đọc từ trên xuống.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-detail — Hình chính · hai chi tiết
slide · proposed · Một hình dọc lớn; hai cận cảnh ở cột bên.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-collage — Toàn cảnh · hai góc nhìn
slide · proposed · Một hình ngang chiếm phần lớn; hai hình phụ xếp dọc.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-pair — Hai hình · đối chiếu ngữ cảnh
slide · proposed · Hai hình ngang đối xứng; một tiêu chí chung để đối chiếu.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-mosaic — Bộ hình · sáu chi tiết
slide · proposed · Sáu hình nhỏ theo lưới; nhãn nằm trong từng khung.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-background — Hình làm nền toàn slide
slide · proposed · Ảnh phủ toàn nền; chữ đặt trên mặt phẳng MELAB có nền kín.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-image-split — Dải ảnh dọc · thông điệp lớn
slide · proposed · Dải ảnh sát cạnh bên trái; thông điệp ở vùng nền riêng.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-matrix — Bảng đối chiếu · nhận định
slide · proposed · Bảng chiếm vùng chính; nhận định có cột riêng.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-tables — Hai bảng · hai nhóm dữ kiện
slide · proposed · Hai bảng theo chiều đọc; mỗi bảng có tên nhóm.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-columns — Ba nhóm · nhiều trường nội dung
slide · proposed · Ba cột có việc làm và đầu ra; cùng nhịp chữ.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-evidence — Biểu đồ · chỉ số · giới hạn
slide · proposed · Một biểu đồ lớn; chỉ số và diễn giải ở cột bên.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-plan — Kế hoạch · bốn điểm kiểm
slide · proposed · Bốn bước có thứ tự và bảng trách nhiệm.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-dashboard — Nhiều nhóm nhỏ · biểu đồ và hình
slide · proposed · Tín hiệu tiêu dùng, biểu đồ theo kỳ và ba nhóm sản phẩm minh họa.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-overview — Tổng quan · biểu đồ và bảng
slide · proposed · Khung phạm vi, biểu đồ tỷ trọng, ba chỉ số và bảng nhóm thị trường.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-mixed — Hai nhóm · bảng kèm hình
slide · proposed · Hai hàng độc lập; mỗi hàng có bảng và một khung ảnh.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-sections — Các mục nhỏ · hình dọc
slide · proposed · Bốn nhóm giải thích và một ảnh dọc liên hệ chủ đề.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-journey — Ma trận · hành trình theo bước
slide · proposed · Các bước là cột; hành động, điểm khó và cải thiện là hàng.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-sales-mix — Cơ cấu bán hàng · sản lượng và doanh thu
slide · proposed · Biểu đồ tỷ trọng và hình sản phẩm; bảng số liệu và nhận định thương mại.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-competitors — Đối thủ · so sánh và khoảng trống
slide · proposed · Bảng so sánh nhiều tiêu chí; bốn câu hỏi kết luận ở cột riêng.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-slide283-text-ranking — Xếp hạng sản phẩm · bằng chứng và kết luận
slide · proposed · Bảng có hạng, chỉ số, đơn vị và ghi chú; kết luận theo nhiều hàng.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-pdf-cover — Mở đầu và cách dùng
knowledge-pdf · proposed · Chọn mẫu theo việc người đọc cần làm.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-pdf-task-brief — Phiếu mục tiêu
knowledge-pdf · proposed · Chốt người đọc, việc cần làm, đầu vào và kết quả trước khi bắt đầu.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-pdf-rule-check-fix — Quy tắc · kiểm · sửa
knowledge-pdf · proposed · Nối một nguyên tắc với cách phát hiện sai lệch và cách sửa.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-pdf-readiness-levels — Các mức sẵn sàng
knowledge-pdf · proposed · Phân biệt các mức năng lực bằng điều kiện đầu vào và tiêu chí đạt.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-pdf-worked-example — Ví dụ có giải thích
knowledge-pdf · proposed · Cho thấy một đầu vào được chuyển thành kết quả như thế nào và vì sao.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-pdf-reference-card — Thẻ nguồn tham khảo
knowledge-pdf · proposed · Giúp chọn nguồn theo phần hữu ích, tình huống dùng và giới hạn.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-pdf-source-index — Nguồn và giới hạn
knowledge-pdf · proposed · Bốn mục nguồn và giới hạn: tài liệu MELAB, bản cấu trúc đã khóa và giấy phép chữ.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-service — Website · giới thiệu dịch vụ
website · proposed · Mẫu MELAB có điều hướng, trạng thái và nội dung minh họa.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-article — Website · bài hướng dẫn
website · proposed · Mẫu MELAB có điều hướng, trạng thái và nội dung minh họa.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-dashboard — App · theo dõi công việc
app · proposed · Mẫu MELAB có điều hướng, trạng thái và nội dung minh họa.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-editor — App · soạn và xem trước
app · proposed · Mẫu MELAB có điều hướng, trạng thái và nội dung minh họa.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-poster-moodboard — Poster moodboard
design · proposed · Hai hướng hình học và chuyển động: mỗi hướng có tham khảo đã xem và hình thích nghi MELAB riêng.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-thumbnail-guideline — Thumbnail
design · proposed · Tiêu đề, hình chính và logo ở hai tỷ lệ; giữ trọn ảnh và kiểm ở kích thước nhỏ.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-image-style — Image style
design · proposed · Một ảnh gốc phong cách MELAB; ba tiêu chí đọc ảnh và các cách nhận cho trình chiếu, website rộng/hẹp.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
### melab-edit-guideline — Edit guideline
edit · proposed · Ba dạng khung nội dung video; ảnh ví dụ riêng cho trang phục và bối cảnh, giữ trọn người trong khung.
- Mục đích
- Bố cục
- Mẫu nội dung
- Giới hạn và cách dùng
Element references: none
## Complete voice guideline
# melab-editorial-proposal — Voice guideline

Generated; DO NOT EDIT. Source: voice model.
System: melab-brand-core | Version: 0.5.0 | Status: proposed
Field coverage is not evidence of native quality or authentic brand fit.

## context

- audience: Đề xuất cho người đọc hướng dẫn MELAB, người học và đội ngũ thực hiện; mức kiến thức và quan hệ khách hàng cần xác nhận theo từng nội dung. Proposed for guideline readers, learners and implementation teams; confirm expertise and relationship for each task.
- job: Giúp người đọc hiểu một ý, nhận biết điều đã biết hoặc chưa biết, rồi chọn hành động phù hợp. Help readers understand one idea, distinguish known from unknown, and choose a supported next action.
- channels: Hướng dẫn, nội dung giới thiệu, tài liệu, bài trình bày, giao diện mẫu và lời giải thích trực tiếp. Guidelines, introductions, documents, presentations, illustrative interfaces and spoken explanations.
- owner: MELAB owns brand approval; this task model supplies an unapproved editorial proposal. Content owners retain facts and offers; visual-system packaging does not approve voice authenticity.
- languages: vi and en; use the requested language naturally. Two language profiles express one proposed character, not two brand identities.
- facts: Original brandkit shows the name MELAB and the display lines CREATE and Learn. Build. Transform. Those lines are identity evidence only; they do not establish a service offer, guarantee, audience age or writing personality.
- writing: Lead with the reader's useful point; use headings for scanning, concrete verbs and one main idea per paragraph. Labels name the actual object or action. Keep necessary conditions beside the claim.
- speaking: State the useful point first, explain one idea per beat, pause between dependent steps and name the next check. Use complete, natural sentences; wording guidance grants no audio-production authority.

## niche

- domain: Proposed learning-and-making orientation for this guideline, suggested by the original display line only. MELAB's actual products, services and commercial category remain unspecified.
- readerKnowledge: Assume no prior knowledge of internal design or technology terms. For specialists, retain the exact term needed for work and explain its role once.
- readerDecision: Understand the example, choose a supported action or identify the fact that must be confirmed; never imply a real purchase or enrollment exists.
- risks: Overstated learning outcomes, invented features or saved-data claims, assumed reader age, inaccessible labels, and instructions whose action differs from the interface.
- evidenceNeeded: Current owner-confirmed task facts, actual interface state and approved offer terms before making operational or commercial claims; approved writing samples before claiming authentic voice.
- termPolicy: Keep MELAB unchanged. Prefer familiar words; explain necessary specialist terms by their concrete role. Do not use English in Vietnamese for prestige.
- emotionalContext: Proposed stance: respectful encouragement in ordinary learning; calm directness during errors, uncertainty, payment or security concerns. Do not assume excitement or familiarity.
- excludedPromises: No guaranteed progress, transformation, free access, scarce places, fastest results, security assurance or payment confirmation without specific current evidence.

## traits

- Item 1:
  - id: MELAB-V01
  - status: proposed
  - instruction: Cụ thể để dễ hiểu: gọi tên việc làm và đối tượng trước lời khen. Concrete and useful: name the action and object before praise. Is: an identifiable action. Is not: a vague promise.
  - appliesWhen: Headings, explanations, labels and calls to action across written and spoken material.
  - exception: Preserve approved official names and exact quoted source lines; do not rewrite them as operational claims.
  - sourceRefs:
    - proposal-neutral
  - confidence: Limited brand-fit confidence; editorial proposal, not extracted behavior.
  - positiveExample: VI: Chọn một chủ đề để xem ví dụ. EN: Choose a topic to see an example.
  - negativeExample: VI: Mở khóa tiềm năng vô hạn ngay hôm nay. EN: Unlock limitless potential today.
- Item 2:
  - id: MELAB-V02
  - status: proposed
  - instruction: Khuyến khích bằng bước vừa sức: nêu việc có thể làm tiếp mà không đánh giá người đọc. Encourage through a manageable next step without judging the reader. Is: an invitation with a clear task. Is not: pressure or assumed ability.
  - appliesWhen: First visits, learning introductions, onboarding and empty states when a real next action exists.
  - exception: For safety, payment, security and irreversible actions, state the facts and consequences before encouragement; omit humor.
  - sourceRefs:
    - proposal-neutral
  - confidence: Limited; proposed direction awaiting approved MELAB samples.
  - positiveExample: VI: Bắt đầu với ví dụ này, rồi thử cách của bạn. EN: Start with this example, then try your own approach.
  - negativeExample: VI: Ai cũng làm được, bạn còn chờ gì? EN: Anyone can do this. What are you waiting for?
- Item 3:
  - id: MELAB-V03
  - status: proposed
  - instruction: Giữ mức chắc chắn đúng với bằng chứng: nói rõ giới hạn, trạng thái và điều kiện. Match certainty to evidence: name the limit, state and condition. Is: an honest, useful boundary. Is not: confidence used to hide missing facts.
  - appliesWhen: Claims, reports, examples, errors, unknown states and success messages.
  - exception: A verified fact may be stated directly; do not add artificial doubt. Omit a recovery step when none is supported.
  - sourceRefs:
    - proposal-neutral
  - confidence: High editorial need; limited evidence of distinctive MELAB behavior.
  - positiveExample: VI: Chưa có thông tin xác nhận ngày bắt đầu. EN: The start date has not been confirmed.
  - negativeExample: VI: Chắc chắn bắt đầu sớm. EN: It will definitely start soon.
- Item 4:
  - id: MELAB-V04
  - status: proposed
  - instruction: Giải thích theo mạch làm việc: ý chính, ví dụ cụ thể, rồi bước tiếp theo khi cần. Explain in a usable order: main point, concrete example, then the next step when needed. Is: a sequence with purpose. Is not: a compulsory formula for every short label.
  - appliesWhen: Full explanations, learning passages and implementation-team walkthroughs.
  - exception: A warning starts with the risk; a short label contains only the action. Preserve the order required for safe execution.
  - sourceRefs:
    - proposal-neutral
  - confidence: Limited; an original teaching proposal, not evidence of MELAB's established method.
  - positiveExample: VI: Chọn màu chữ. Sau đó kiểm tra chữ trên nền sáng và nền tối để bảo đảm dễ đọc. EN: Choose the text color. Then check it on light and dark backgrounds for readability.
  - negativeExample: VI: Hãy khám phá hành trình màu sắc đầy cảm hứng. EN: Explore an inspiring color journey.

## tones

- Item 1:
  - scenario: normal
  - readerState: Looking for a useful starting point.
  - informationOrder: Useful point, concrete example, supported next action.
  - personalityLimit: Respectful, clear and lightly encouraging; medium warmth, low formality, no forced joke, direct action.
  - action: Name the object to view or choose; do not invent a feature.
- Item 2:
  - scenario: first-visit
  - readerState: Unfamiliar with MELAB or this material.
  - informationOrder: What this material contains, who it helps if confirmed, where to begin.
  - personalityLimit: Welcoming without assumed age, intimacy or excitement.
  - action: Offer a concrete first step supported by the page.
- Item 3:
  - scenario: onboarding
  - readerState: Ready to begin but may need guidance.
  - informationOrder: Required step, reason, next check; distinguish optional steps.
  - personalityLimit: Patient, direct and free of blame; no claim that the task is easy.
  - action: Explain each requested input and its actual use.
- Item 4:
  - scenario: success
  - readerState: Needs confirmation of an action.
  - informationOrder: Verified result, relevant scope, next action only if useful.
  - personalityLimit: Brief and measured; no celebration that obscures state.
  - action: Say saved, sent or paid only when that exact result is confirmed.
- Item 5:
  - scenario: empty-state
  - readerState: Has no item or no matching result.
  - informationOrder: What is absent, why only if known, available action.
  - personalityLimit: Neutral and helpful; do not suggest the reader failed.
  - action: Distinguish no existing items from no search matches.
- Item 6:
  - scenario: error
  - readerState: An action failed; may be worried about work.
  - informationOrder: Failed action, known cause if any, supported recovery; state data preservation only when verified.
  - personalityLimit: Calm, direct and respectful; no joke, blame or false reassurance.
  - action: Use a safe documented recovery action; otherwise state the failure without inventing a retry.
- Item 7:
  - scenario: uncertain
  - readerState: Needs a fact that has not been confirmed.
  - informationOrder: Unknown fact, consequence, actual way to verify if one exists.
  - personalityLimit: Plain uncertainty; do not fill the gap with optimistic wording.
  - action: Name the missing confirmation. Do not fabricate an owner, response time or contact channel.
- Item 8:
  - scenario: destructive
  - readerState: Considering a change that may remove work.
  - informationOrder: Object and scope, actual consequence, recovery availability, explicit action.
  - personalityLimit: Sober and precise; no humor or persuasive urgency.
  - action: Apply only to a real destructive control. Use a specific verb and a clear cancellation choice; never claim undo exists without proof.
- Item 9:
  - scenario: billing-security
  - readerState: Concerned about payment, access or personal information.
  - informationOrder: Verified state, immediate protective action if supported, verified support route.
  - personalityLimit: Formal enough for clarity, low warmth, no minimization or certainty about unknown safety.
  - action: No live billing or security service is established by this guideline; adapt only after the actual service and approved procedure are confirmed.
- Item 10:
  - scenario: support
  - readerState: Needs help or clarification.
  - informationOrder: Acknowledge the specific issue, provide a supported explanation, name the available next step.
  - personalityLimit: Patient without patronizing or promising a resolution time.
  - action: Use actual contact details and approved support policy only; otherwise keep the contact field unresolved.

## locales

- vi:
  - address: Dùng 'bạn' cho hướng dẫn chung; có thể lược đại từ khi chủ thể vẫn rõ. Dùng 'MELAB' khi thương hiệu chịu trách nhiệm. Không tự suy đoán tuổi, giới tính, quan hệ thân mật hoặc dùng 'anh/chị'. Với thư chính thức, xác nhận cách xưng hô theo người nhận.
  - syntax: Viết từ ý nghĩa bằng trật tự tự nhiên của tiếng Việt. Ưu tiên động từ và chủ thể cụ thể; giữ nguyên ai làm gì, đối tượng, phủ định, điều kiện, quyền hạn và mức chắc chắn. Mỗi câu hoàn chỉnh mở đầu bằng chữ hoa; giữ dấu tiếng Việt.
  - rhythm: Mỗi đoạn một ý chính; phối hợp câu ngắn và câu giải thích khi cần. Đọc thành tiếng một lượt để sửa câu cứng hoặc giống bản dịch. Không áp giới hạn số từ tiếng Anh cho tiếng Việt, không bỏ điều kiện để rút câu.
  - terminology: Giữ MELAB đúng chữ hoa. Dùng 'hướng dẫn', 'ví dụ', 'chủ đề', 'bản nháp' khi đúng nghĩa. Chỉ giữ thuật ngữ tiếng Anh nếu cần thao tác hoặc tra cứu; giải thích vai trò ngay lần đầu trong mỗi phần độc lập, ưu tiên tối đa năm và không quá chín từ cách nhau bằng khoảng trắng. Giữ nguyên nhãn sản phẩm chính thức, mã, đường dẫn và số liệu. Với tài liệu vi-VN, dùng 1.234,5 khi cần số thập phân và ngày dạng '15 tháng 10 năm 2026' để tránh nhập nhằng; giữ đơn vị và tiền tệ của dữ liệu gốc. Ví dụ này không công bố ngày hay giá của MELAB.
  - opening: Mở bằng điều người đọc cần hiểu hoặc làm. Với cảnh báo, đưa hậu quả lên trước. Không mở đầu bằng lời tự khen hay lịch sử biên soạn nội bộ.
  - closing: Kết bằng bước tiếp theo có thật khi cần; nếu không có hành động, dừng ở thông tin hữu ích. Không thúc giục hoặc hứa hẹn phản hồi khi chưa có chính sách.
  - do: Đặt tên đúng hành động, giải thích từ khó, giữ điều kiện cạnh lời khẳng định; dùng dấu câu tiết chế. Giao diện và cảnh báo không dùng biểu tượng cảm xúc thay nghĩa. Nội dung giới thiệu chỉ dùng biểu tượng khi có mục đích và không che mất thông tin.
  - dont: Không dùng 'đột phá', 'vô hạn', 'bảo đảm thành công', 'chỉ cần', 'ai cũng làm được' như lời hứa mặc định. Không mượn từ tiếng Anh để làm câu có vẻ chuyên nghiệp; không dùng câu máy móc hoặc ẩn người chịu trách nhiệm.
  - normalExample: Chọn một chủ đề để xem ví dụ.
  - errorExample: Không mở được tài liệu này.
  - uncertainExample: Chưa có thông tin xác nhận ngày bắt đầu.
  - writtenExample: Chọn màu chữ, rồi kiểm tra trên nền sáng và nền tối để bảo đảm dễ đọc.
  - spokenExample: Trước hết, chọn màu chữ. Tiếp theo, đặt chữ trên nền sáng và nền tối. Kiểm tra xem ở cả hai nền, chữ có dễ đọc không.
  - review: So từng câu với dữ kiện gốc: chủ thể, hành động, đối tượng, số lượng, đơn vị, ngày, điều kiện, quan hệ nguyên nhân, quyền hạn và điều chưa chắc chắn. Sau đó đọc riêng bản tiếng Việt để kiểm tra tự nhiên, cụ thể và đúng cách xưng hô. Sửa câu không được làm đổi sự thật. Mẫu tự biên soạn không chứng minh độ phù hợp với giọng MELAB đã được duyệt.
- en:
  - address: Use 'you' in general guidance and 'MELAB' when the brand is responsible. Do not assume age, gender, familiarity or a customer relationship. Use the requested English variety; this neutral proposal avoids region-dependent idioms.
  - syntax: Name concrete subjects, actions and objects. Prefer active voice when responsibility matters; passive voice is useful when the actor is unknown or irrelevant. Preserve negation, conditions, permissions, ownership and uncertainty. Use parallel list structures.
  - rhythm: Use one main idea per paragraph and vary sentence length with purpose. Keep labels brief and explanations complete. Read aloud for repetition and abrupt transitions; no universal sentence-length limit.
  - terminology: Keep MELAB in uppercase. Use consistent terms such as guide, example, topic and draft when accurate. Expand unfamiliar abbreviations and explain specialist terms by their role. Preserve exact product names, source labels, units and machine values. Spell out months for ambiguous dates, such as 15 October 2026; use 1,234.5 for an English-locale decimal example. Never convert currency or invent a price.
  - opening: Lead with the information or action the reader needs. Start warnings with the consequence. Omit self-praise and production-history narration unless it changes the reader's decision.
  - closing: End with a real next step when useful. End with the answer when no action is needed; do not invent contact details or response commitments.
  - do: Use familiar precise words and measured punctuation. Explain a necessary term once per independent section. Keep valid uncertainty and approved wording. Interface or warning text uses words rather than emoji as the only signal.
  - dont: Avoid unsupported superlatives, vague promotional abstractions, patronizing 'just' or 'easy', forced excitement and formulaic contrast. Do not remove a factual limit merely to make copy sound confident.
  - normalExample: Choose a topic to see an example.
  - errorExample: This document could not be opened.
  - uncertainExample: The start date has not been confirmed.
  - writtenExample: Choose the text color, then check it on light and dark backgrounds for readability.
  - spokenExample: First, choose the text color. Next, place the text on a light background and a dark background. Check that it is readable on both.
  - review: Compare every statement with frozen facts: actor, action, object, quantities, units, dates, conditions, causality, certainty, rights and obligations. Review repetition, inflated claims, vague abstractions and unnecessary jargon separately. Fluency cannot waive a changed fact; self-authored examples do not establish authentic MELAB voice.

## claims

- immutable: MELAB spelling and supplied source facts remain exact. Preserve quantities, dates, units, negation, conditions, rights, ownership and uncertainty. Original brandkit display lines remain identity examples rather than evidence of a promised result.
- allowed: Describe what a verified artifact contains or what a confirmed control does. In examples, state the assumed behavior explicitly. Identity evidence permits naming MELAB; it does not prove a service, audience or performance claim.
- forbidden: No invented price, free trial, offer, schedule, customer, testimonial, certification, learning result, urgency, saved data, safe retry, undo, payment confirmation or security guarantee. Do not treat competitor language, colors or synthetic examples as MELAB voice evidence.
- unknownHandling: Name the exact unknown and retain it. Use a neutral proposal when the missing fact affects only tone; block the affected factual claim when it changes an action, right, safety, payment or promise. Ask only if the missing fact changes the required output; do not fill it with plausible copy.

## components

- Item 1:
  - type: heading
  - behavior: Introduces the actual subject or result.
  - copyRule: Use a concrete useful point; no invented outcome.
  - budget: Aim for one or two lines at the designed width; revise wording or layout rather than reduce essential type.
  - notApplicable: Do not force an action heading on an identity-only title.
- Item 2:
  - type: cta
  - behavior: Names the action the real control performs.
  - copyRule: Verb plus object where useful: Xem ví dụ / View example. Avoid generic Continue when destination is unclear.
  - budget: One short phrase; retain a clear accessible name and inspect wrapping.
  - notApplicable: No action label where no control or destination exists.
- Item 3:
  - type: field
  - behavior: Labels an actual input and any required format.
  - copyRule: Keep persistent labels; put conditions in helper text and errors beside the affected input. Never use placeholder text as the only label.
  - budget: Short label, one useful helper sentence; use more space for necessary conditions.
  - notApplicable: No invented registration or personal-data field.
- Item 4:
  - type: empty-loading
  - behavior: Separates no items, no search matches and an operation in progress.
  - copyRule: Name the state and a supported action. Loading text does not imply completion or a known remaining time.
  - budget: One state line and one optional action line; no arbitrary countdown.
  - notApplicable: Do not add a loader to static content.
- Item 5:
  - type: error
  - behavior: Reports the actual failure.
  - copyRule: State failed action, cause only if known, recovery only if supported. Do not claim data is safe or retry is harmless without proof.
  - budget: A clear state sentence; add necessary recovery detail without hiding it in a tooltip.
  - notApplicable: If no recovery is known, state the failure only.
- Item 6:
  - type: confirmation
  - behavior: Precedes a consequential action or confirms a verified result.
  - copyRule: Name object, scope and consequence before action; success text follows observed success. Destructive actions have an explicit cancellation choice.
  - budget: Heading plus enough body text for consequences; controls keep distinct verbs.
  - notApplicable: No payment, deletion or undo behavior is established by the illustrative system.
- Item 7:
  - type: notification
  - behavior: Communicates a relevant change without replacing the task.
  - copyRule: State the verified change and the action if needed; retain accessible text and avoid unnecessary interruption.
  - budget: One main message with an optional action; persistent detail for critical information.
  - notApplicable: No invented subscription, send channel or response deadline.
- Item 8:
  - type: chart-label-tooltip
  - behavior: Explains a value, measure or comparison.
  - copyRule: Include measure, unit, period and source context when available; distinguish illustration from operational data. Tooltips supplement visible labels.
  - budget: Labels remain readable at intended width; tooltip supports full precision rather than replacing the axis meaning.
  - notApplicable: Do not invent a measurement method or operational result for sample charts.

## examples

- Item 1:
  - scenario: normal
  - language: vi
  - facts: Illustration only: a page offers topic choices and selecting one reveals an example. No real enrollment or outcome assumed.
  - before: Mở khóa tiềm năng vô hạn ngay hôm nay.
  - after: Chọn một chủ đề để xem ví dụ.
  - reason: Names the available action and object without inventing a benefit.
  - ruleIds:
    - MELAB-V01
    - MELAB-V02
- Item 2:
  - scenario: normal
  - language: en
  - facts: Same illustrative topic-selection facts as the Vietnamese example.
  - before: Unlock limitless potential today.
  - after: Choose a topic to see an example.
  - reason: Keeps the same action and meaning in natural English.
  - ruleIds:
    - MELAB-V01
    - MELAB-V02
- Item 3:
  - scenario: error
  - language: vi
  - facts: Illustration only: opening a document failed; cause, retry safety and data preservation are unknown.
  - before: Có lỗi nhỏ thôi, thử lại là được nhé!
  - after: Không mở được tài liệu này.
  - reason: Names the failure without minimizing it or promising safe recovery.
  - ruleIds:
    - MELAB-V01
    - MELAB-V03
- Item 4:
  - scenario: error
  - language: en
  - facts: Same failed-open facts; no known cause or supported recovery.
  - before: Just a tiny hiccup. Try again and you are all set!
  - after: This document could not be opened.
  - reason: Preserves the actual failure and omits unverified reassurance.
  - ruleIds:
    - MELAB-V01
    - MELAB-V03
- Item 5:
  - scenario: uncertain
  - language: vi
  - facts: Illustration only: a start date has not been confirmed; no contact route or announcement time is supplied.
  - before: Chắc chắn bắt đầu sớm, hãy sẵn sàng!
  - after: Chưa có thông tin xác nhận ngày bắt đầu.
  - reason: Keeps the unknown visible and does not invent a schedule.
  - ruleIds:
    - MELAB-V03
- Item 6:
  - scenario: uncertain
  - language: en
  - facts: Same unconfirmed start-date facts as the Vietnamese example.
  - before: It will definitely start soon. Get ready!
  - after: The start date has not been confirmed.
  - reason: Matches the Vietnamese certainty level without literal translation.
  - ruleIds:
    - MELAB-V03
- Item 7:
  - scenario: implementation-written
  - language: vi
  - facts: Illustration only: choose a text color and check its readability against light and dark backgrounds. No measured contrast score is supplied.
  - before: Khám phá hành trình màu sắc đầy cảm hứng.
  - after: Chọn màu chữ, rồi kiểm tra trên nền sáng và nền tối để bảo đảm dễ đọc.
  - reason: Gives a concrete sequence and purpose without inventing a measured result.
  - ruleIds:
    - MELAB-V01
    - MELAB-V04
- Item 8:
  - scenario: implementation-spoken
  - language: vi
  - facts: Same text-color and two-background check as the written example.
  - before: Chọn và kiểm tra màu chữ trên các nền khác nhau để bảo đảm tính khả dụng.
  - after: Trước hết, chọn màu chữ. Tiếp theo, đặt chữ trên nền sáng và nền tối. Kiểm tra xem ở cả hai nền, chữ có dễ đọc không.
  - reason: One action per spoken beat; keeps the two backgrounds and the actual check.
  - ruleIds:
    - MELAB-V01
    - MELAB-V04
- Item 9:
  - scenario: implementation-written
  - language: en
  - facts: Same text-color and light/dark readability check; no measured contrast score.
  - before: Explore an inspiring color journey.
  - after: Choose the text color, then check it on light and dark backgrounds for readability.
  - reason: Replaces abstraction with the actual action and check.
  - ruleIds:
    - MELAB-V01
    - MELAB-V04
- Item 10:
  - scenario: implementation-spoken
  - language: en
  - facts: Same text-color and two-background check as the written example.
  - before: Select and validate the text color across different contexts.
  - after: First, choose the text color. Next, place the text on a light background and a dark background. Check that it is readable on both.
  - reason: Provides a speakable sequence without changing the facts.
  - ruleIds:
    - MELAB-V01
    - MELAB-V04

## governance

- versionReason: 0.5.0 adds a complete task-local proposed editorial model to the MELAB package, with EN/VI realization and explicitly hypothetical examples. It does not activate or modify a shared skill.
- approvalRef: pending; authorization to build the design-system draft is not approval of authentic MELAB personality.
- authenticity: proposed; no authentic writing corpus supplied or inferred. Original brandkit identity and display lines are not a corpus.
- gaps: Approved MELAB writing samples and anti-samples, actual audience/offer facts, English regional preference, human language review, held-out corpus test and final rendered copy readback remain absent or belong to later package verification.
- updatePolicy: Keep this task model as the single proposed source; compile projections from it. Record any approved rule-level change, increment version and invalidate affected bindings and copy evidence. No automatic promotion, instruction mutation, publication or sample upload.
- confidence: Limited brand-fit confidence for both languages. Structural completeness and reviewed synthetic examples prove only their stated local checks.
- blockMap: Eight framework blocks: context; traits; tones; locales as language mechanics; claims; components; examples; governance. Niche and portable procedure are additional explicit coverage.
- reviewLimits: Same-author meaning and wording review is not independent native-language certification, reader comprehension evidence or fresh-context adoption. Final HTML, DESIGN.md and VOICE.md parity/rendering must be checked by the package owner.

## procedure

- Read the supplied task facts and requested language. Freeze names, actors, actions, objects, quantities, units, dates, conditions, rights and uncertainty before drafting.
- Select the actual channel and situation. Apply the proposed traits only where relevant; approved facts and safety-critical order take priority.
- For written material, lead with the useful point and keep labels tied to real behavior. For spoken explanation, use one idea per beat and name each step's purpose and check.
- Draft in natural Vietnamese or English using its actual locale rules above. Do not use English as an intermediate skeleton for Vietnamese.
- Compare every claim and action with the frozen facts. Reject invented services, guarantees, schedules, saved data, safe retries or recovery routes. Preserve unknowns.
- Review naturalness separately: read aloud, remove vague abstractions and repetition, check address and terminology, and keep necessary conditions. A fluent sentence cannot waive changed meaning.
- For mixed languages, review each unit in its language and compare shared facts and certainty across both. Preserve exact product labels and machine-only values.
- Read the actual final output after assembly. For visual or interactive material, inspect all relevant rendered states and accessible labels at intended widths; source text and schema checks alone do not prove fit.
- Return the artifact with unresolved facts and evidence limits. Keep the voice proposed until actual brand approval; later copy, rule or data edits require renewed review of affected units.

## sources

- Item 1:
  - id: melab-original-brandkit
  - kind: approved-rule
  - locator: Brand asset/MELAB/Brandkit/assets/guidelines/Brandkit Melab.png; original image inspected: MELAB name, CREATE and Learn. Build. Transform. display lines; SHA256 538d1798b4a2092e69e3ef1934d9d65f160e1b9c94f19d6873dbcbc354d67c39.
  - rights: User-provided local brand material; scoped identity inspection. No permission inferred for redistribution of the original.
  - scope: Identity/display evidence only. None of the proposed voice traits is extracted from colors, typography or these isolated lines.
- Item 2:
  - id: melab-original-pdf
  - kind: approved-rule
  - locator: Brand asset/MELAB/Brandkit/assets/guidelines/MELAB Brand Guidelines Presentation.pdf; SHA256 ff255225d7a222fcbc43b6f1cb89c49f9ef7f19ad8104f4be9a1219aaca402f2; existence/hash recorded, not used for a text-derived voice inference.
  - rights: User-provided local brand material. Original not reproduced in this model.
  - scope: Companion identity source; no PDF text extraction or writing-corpus claim in this task model.
- Item 3:
  - id: proposal-neutral
  - kind: proposal
  - locator: Original editorial proposal authored for MELAB package 0.5.0; neutral EN/VI mechanics and explicitly hypothetical examples.
  - rights: Task-authored proposal for the user's local design-system draft; not an authentic MELAB writing sample.
  - scope: Source for every proposed trait, audience interpretation, tone and example; subject to actual brand review.


## Chart family review RUN43
182 main catalogue entries; 200 addressable source records. The 40 chart specimens are grouped into22 model-owned families; all old IDs remain aliases and runnable variants. New shared skill/KAI/HAHA rollout awaits user approval.

### So sánh bằng chiều dài
Use when: So sánh một lượng giữa các nhóm; chọn hướng, nhóm con, giá trị có dấu hoặc mục tiêu trong phần chi tiết.
Do not use when: Không dùng thay phân bố theo khoảng, tổng cộng dồn, thời lượng hay hai lần đo theo cặp.
Variants: chart-bar, chart-column, chart-grouped, chart-diverging, chart-lollipop, chart-bullet
### Chuỗi theo thứ tự
Use when: Theo dõi một hoặc nhiều lượng cùng đơn vị qua các mốc có thứ tự; chọn phần tô, nhiều ô nhỏ hoặc ngưỡng khi cần.
Do not use when: Không nối các nhóm không có thứ tự, coi các tiêu chí độc lập là thời gian hoặc tự thêm trục đơn vị thứ hai.
Variants: chart-line, chart-area, chart-sparklines, chart-monitored-series, chart-combo
### Tỷ phần hình tròn
Use when: Đọc tỷ phần của một tổng đã biết; dùng vòng tiến độ khi có số hoàn tất và mục tiêu.
Do not use when: Không dùng cho phần âm, nhiều tổng không liên quan hoặc tiến độ chưa có mẫu số.
Variants: chart-donut, chart-pie, chart-progress-ring
### Các phần xếp chồng
Use when: So sánh các phần cộng thành tổng; chọn rõ số tuyệt đối hoặc tỷ lệ100%.
Do not use when: Không đổi chế độ mà bỏ tổng, mẫu số hay đơn vị; không xếp chồng các đại lượng không cộng được.
Variants: chart-stack, chart-stacked-absolute
### Quan hệ hai đại lượng
Use when: Xem quan hệ giữa hai lượng đo trên từng quan sát.
Do not use when: Không suy nhân quả, nối theo thời gian khi chưa có thứ tự hoặc coi tọa độ là địa lý.
Variants: chart-scatter
### Phân bố theo khoảng
Use when: Xem phân bố quan sát số theo các khoảng có ranh giới rõ.
Do not use when: Không coi nhãn nhóm là khoảng số hoặc dùng tần số làm giá trị đo ban đầu.
Variants: chart-histogram
### Tóm tắt phân bố bằng hộp
Use when: Đọc trung vị, tứ phân vị và khoảng nhỏ nhất/lớn nhất của mẫu.
Do not use when: Không thay tứ phân vị bằng mở/đóng hoặc tự đổi râu thành quy tắc ngoại lệ.
Variants: chart-box
### Biến động tạo thành tổng
Use when: Giải thích tổng cuối bằng tổng đầu và các khoản tăng/giảm theo thứ tự.
Do not use when: Không dùng các thanh có dấu độc lập mà không tính mốc cộng dồn.
Variants: chart-waterfall
### Ma trận ô có giá trị
Use when: Đối chiếu giá trị trong lưới; chọn tọa độ nhóm/kỳ, ngày/tuần hoặc nhóm bắt đầu/tuổi nhóm.
Do not use when: Không bỏ kiểu tọa độ, mẫu số, ô chưa quan sát hoặc dùng màu chú ý như thang đo liên tục.
Variants: chart-heatmap, chart-calendar-density, chart-cohort
### Hao hụt qua các bước
Use when: Theo dõi số còn lại của cùng một nhóm qua các bước nối tiếp.
Do not use when: Không gọi số lượng các nhóm độc lập là tỷ lệ chuyển bước.
Variants: chart-funnel
### Cơ cấu bằng diện tích
Use when: Đọc các phần của một tổng theo diện tích ô chữ nhật.
Do not use when: Không đọc giá trị bằng riêng chiều rộng hoặc tuyên bố mẫu hiện có nhiều tầng phân cấp.
Variants: chart-treemap
### Khoảng trên trục thời gian
Use when: Đọc thời điểm bắt đầu, kết thúc, chồng lấn hoặc trạng thái trên một trục thời gian.
Do not use when: Không coi độ dài là lượng trạng thái hay tỷ lệ; phải giữ quy ước tính ngày đầu/cuối.
Variants: chart-gantt, chart-state-timeline
### So sánh hai lần đo
Use when: So sánh hai lần đo cùng đơn vị cho từng đối tượng; chọn bố cục dốc hoặc hai đầu theo hàng.
Do not use when: Không ghép khác đối tượng hoặc ngụ ý đã đo đường đi liên tục giữa hai đầu.
Variants: chart-slope, chart-dumbbell
### Quan hệ phụ thuộc
Use when: Đọc các quan hệ cần hoàn thành trước hoặc đầu vào phụ thuộc.
Do not use when: Không suy lượng luồng hay điều kiện lựa chọn từ cạnh phụ thuộc.
Variants: chart-dependency-network
### Luồng có lượng
Use when: Đọc lượng đi từ nguồn đến đích theo độ rộng luồng.
Do not use when: Không thay lượng bằng mũi tên bằng nhau hoặc bỏ quy tắc bảo toàn/thất thoát.
Variants: chart-sankey
### Đối chiếu nhiều tiêu chí
Use when: Đối chiếu một đối tượng trên nhiều tiêu chí độc lập.
Do not use when: Không coi trục tiêu chí là các kỳ thời gian hoặc quên đơn vị/thang từng trục.
Variants: chart-parallel
### Mở, cao, thấp và đóng
Use when: Đọc mở, cao, thấp và đóng trong từng kỳ.
Do not use when: Không dùng thay hộp phân bố hoặc để mở/đóng nằm ngoài thấp/cao.
Variants: chart-candlestick
### Sơ đồ vùng minh họa
Use when: Minh họa giá trị của các vùng tự tạo có nhãn rõ.
Do not use when: Không nhận là địa giới thật, bản đồ số liệu địa lý hoặc diện tích tỷ lệ.
Variants: chart-regional-map
### Chỉ số kèm bảng số
Use when: Đọc một chỉ số tổng và các dòng số chi tiết cần đối chiếu.
Do not use when: Không tính thẻ số là một kiểu mã hóa thống kê mới hoặc bỏ phép cộng đối chiếu.
Variants: chart-kpi-table
### Cây điều kiện
Use when: Chọn hướng xử lý dựa trên các điều kiện có nhánh được ghi rõ.
Do not use when: Không dùng cạnh phụ thuộc thay cho điều kiện hoặc bỏ tên nhánh có/không.
Variants: chart-decision-tree
### Hành trình và điểm cần cải thiện
Use when: Đọc hành động, điểm khó và cách cải thiện theo từng bước.
Do not use when: Không coi văn bản định tính là mức nhiệt hay số đo trên ma trận.
Variants: chart-journey-comparison
### Bản đồ địa lý
Use when: Xem vị trí địa lý; chọn Hoa Kỳ, Việt Nam hoặc địa cầu xoay trong chi tiết và từ liên kết cũ.
Do not use when: Không coi màu hình dạng là số liệu, ô phụ là cùng tỷ lệ hoặc địa cầu là công cụ phân loại chủ quyền.
Variants: map-us, map-vietnam, map-world-3d
## RUN44 structural frame review
CurrentKAI geometry/positions are the explicit source; MELAB22families/40oldIDs/137rows are the chartdataauthority. Slides1280x720 and graphic-only chart720x405 are uniformly contained; data/notes live outside. Documentskeepcontentheight; A4isprintprofileonly. Websites/apps use650pxdesktop/720pxnarrowverticalviewports. Nativebrandtypography/palette/media/sidebar remainMELAB. Sharedskill/KAI/HAHAactivationrequiresuserreviewandproperseparategate.


## Current inactive shadow proposal

Read [SHADOW47.md](SHADOW47.md) and [shadow47.model.json](shadow47.model.json) for this user-directed candidate. This proposal supersedes earlier flat carrier and zero pressed/disabled shadow guidance only in this draft. All data geometry and official brand facts remain pinned to the original sources.


Current candidate authoring binding: c9039203383fd160d02ab3ec7de5fc0c0d1a789c58048df2841fc4e82fe39bd7. Source policy includes mandatory-shadow/v1 and depthPolicy; historical bindings remain provenance only.

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
