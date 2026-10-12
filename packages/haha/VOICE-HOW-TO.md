# Cài và dùng Voice độc lập

Đây là bản giao độc lập `2026.10.12-v1`, không phải bản nguồn đang hoạt động của
hệ thống gốc. Voice hỗ trợ viết và soát tiếng Việt/tiếng Anh; không tạo âm thanh.
Gói có quy tắc nền và phương pháp xây hồ sơ giọng, chưa chứa giọng thương hiệu
đã học từ mẫu thật của khách hàng.

## Cài vào không gian làm việc Codex

Giải nén gói vào một thư mục riêng. Từ thư mục gốc đã giải nén, xem trước đúng
thư mục khách hàng:

```sh
python installer/install_client_package.py --target-root "<client-workspace>" --preview
```

Thay `<client-workspace>` bằng đường dẫn thật. Đọc báo cáo xem trước, xác nhận
đúng đích và xử lý xung đột trước khi áp dụng. Bộ cài đặt Voice vào
`.codex/skills/Content/voice`. Lệnh sau chỉ dùng khi khách hàng đã đồng ý đích và
nội dung thay đổi:

```sh
python installer/install_client_package.py --target-root "<client-workspace>" --apply --confirm
```

Đọc lại SKILL.md và các mã kiểm tra tệp sau khi cài. Gói không tự sửa hướng dẫn
chung, quyền truy cập, bộ định tuyến hoặc dữ liệu khách hàng. Hai gói HAHA/Voice
có thể cùng dùng một bộ Voice: tệp giống hệt được giữ; tệp khác phải dừng để xem
xung đột, không ghi đè âm thầm.

Nếu dùng thư mục kỹ năng cá nhân của một máy khác, đặt toàn bộ thư mục
`source/skill/voice` vào `CODEX_HOME/skills/voice`, hoặc `~/.codex/skills/voice`
khi không đặt CODEX_HOME. Chỉ dùng một vị trí được máy đó hỗ trợ. Không sao chép
`provenance/originals` vào nơi phát hiện kỹ năng. Cài tệp chưa chứng minh phiên
đang mở đã nạp nó: mở phiên phù hợp, gọi `$voice`, đọc lại và chạy ví dụ ngắn.

## Dùng với một trợ lý khác

Nếu trợ lý đọc được tệp, cung cấp COMPILED-VOICE.md và dữ kiện nhiệm vụ. Tệp này
chứa toàn bộ phần quy tắc đã chọn cùng mã các chương trình kiểm tra, không cần
ổ đĩa nguồn, Design hay hệ thống gốc. Các tên đường dẫn trong bản biên soạn là
nhãn phần nội dung đã nhúng, không phải yêu cầu tải tệp từ máy tác giả.

Nếu trợ lý chỉ nhận văn bản, dán toàn bộ bản biên soạn vào một bề mặt hướng dẫn
được hỗ trợ; không chỉ dán SKILL.md rồi bỏ các quy tắc tham chiếu. Nếu giới hạn
ngữ cảnh không đủ, dùng tệp đính kèm hoặc chọn phần đóng kín cho tác vụ cụ thể,
ghi rõ phần chưa nạp. Chỉ dùng trong cuộc trò chuyện thì không được gọi là đã
cài lâu dài. Sửa hướng dẫn chung hoặc thay kỹ năng hiện có cần quyền tương ứng.

## Chọn giọng đúng thứ tự

Dữ kiện, quyền hạn và phạm vi người dùng luôn ưu tiên. Khi có hồ sơ giọng đã
duyệt và phù hợp, đọc quy tắc thật cùng phiên bản/mã tệp; giữ tính cách, xưng hô
và từ ngữ đó. Lựa chọn riêng của nhiệm vụ chỉ tác động phạm vi được yêu cầu.
Thiếu một phần quy tắc ngôn ngữ thì bổ sung đúng phần thiếu từ nền tiếng Việt
hoặc tiếng Anh. Không có hồ sơ thì dùng nền trung tính, không tự nhận đã học
giọng thật từ tên thương hiệu, màu sắc hay vài ví dụ giả lập.

Viết một ngôn ngữ theo yêu cầu; không bắt mọi sản phẩm có hai bản. Khi tạo hoặc
cập nhật hồ sơ đa ngôn ngữ, có tiếng Việt và tiếng Anh mặc định, trừ giới hạn rõ
của người dùng. Hồ sơ gồm tám phần: bối cảnh, nét giọng có thể quan sát, sắc thái
theo tình huống, quy tắc ngôn ngữ, giới hạn khẳng định, chữ cho từng thành phần,
ví dụ và bằng chứng/quản trị. Mẫu thật được dùng chỉ trong phạm vi được phép.

## Công cụ và giới hạn

Một trợ lý có khả năng xử lý ngôn ngữ có thể áp dụng quy tắc. Các chương trình
kiểm tra cần Python 3.10 trở lên, không cần thư viện cài thêm. Đọc
`source/skill/voice/references/script-usage.md` để biết lệnh và cấu trúc đầu vào.
Không có tên mô hình bắt buộc, tài khoản, khóa API, công cụ trả phí hay kết nối
mạng bắt buộc. Lượt rà soát bằng mô hình bên ngoài là tùy chọn, không được kèm
trong gói và cần cho phép rõ về mô hình/dữ liệu trước khi sử dụng.

Chương trình tìm dấu hiệu và đối chiếu mã tệp; nó không hiểu mọi sai nghĩa và
không chứng nhận văn tự nhiên hay giọng đã học. Sau lần ráp cuối phải đối chiếu
chủ thể, số liệu, phủ định, điều kiện, mức chắc chắn và quyền hạn với nguồn.
Sản phẩm có giao diện, trang, slide hoặc tài liệu trực quan cần đọc lại trạng
thái thật và kiểm hình đã kết xuất. Thiếu công cụ bắt buộc thì ghi chưa kiểm,
giữ bản nháp và dừng phần tuyên bố sẵn sàng phụ thuộc kiểm tra đó.

## Ví dụ để bắt đầu

**Soát tiếng Việt, giữ điều kiện**

```text
Dùng Voice để sửa câu này cho rõ: "Việc gửi báo cáo được thực hiện sau khi khách hàng duyệt." Giữ nguyên điều kiện: chỉ gửi sau khi khách hàng duyệt. Không thêm số liệu hay lời hứa.
```

Một cách viết hợp lệ: “Chỉ gửi báo cáo sau khi khách hàng duyệt.” Câu “Gửi báo
cáo cho khách hàng ngay” sai vì bỏ điều kiện, dù nghe trôi chảy.

**Soát tiếng Anh, giữ sự chưa chắc chắn**

```text
Use Voice to review: "The pilot may reduce processing time; the result is not confirmed." Keep the uncertainty and do not invent a percentage or guarantee.
```

**Tạo hồ sơ giọng khi chưa có mẫu**

```text
Dùng Voice để đề xuất hồ sơ tiếng Việt và tiếng Anh cho dịch vụ này từ các dữ kiện tôi cung cấp. Chưa có mẫu được duyệt, nên ghi rõ là đề xuất, không phải giọng đã học. Trình bày đủ tám phần và ví dụ bình thường, lỗi, thông tin chưa rõ khi phù hợp.
```

Hãy cung cấp dữ kiện thật của dịch vụ trước khi chạy ví dụ cuối. Không suy ra
giá, ưu đãi, độ an toàn hay kết quả từ một tên dịch vụ.
