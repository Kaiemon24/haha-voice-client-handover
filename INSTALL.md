# Thiết lập bốn bộ thiết kế và Voice

## Chọn đúng gói và workspace

Tải đúng bản phát hành v2026.10.24-design-systems và archive được bàn giao; đối chiếu SHA-256 trước khi giải nén/chạy. Không dùng nhánh main trôi nổi để thay một bản đã ghim. Đọc manifest, checksums.sha256 và hướng dẫn; từ chối thiếu tệp, hash sai, đường dẫn thoát, liên kết, tên trùng hoặc tài sản không rõ quyền.

WORKSPACE là thư mục người dùng thực sự đang mở hoặc chỉ định trong Codex. Không suy ra từ shell tình cờ. Chỉ hỏi nơi lưu nếu chưa xác định được. Kiểm host, quy tắc, Python3.10+thư viện chuẩn hiện có, cơ chế skill và trùng tên; không tự cài Python, đổi quyền, khởi động lại hay cài toàn máy.

## Xem trước và cài mới cộng thêm

Trong thư mục gói đã kiểm, agent chạy installer/install_design_systems.py với --target-root là đường dẫn workspace tuyệt đối và --preview. Bản xem trước liệt kê toàn bộ .agents/skills/haha,melab,dax,long-thanh và Voice đi kèm HAHA; không thay router hoặc file khách. Xung đột khác mã dừng trước mọi ghi. Chỉ sau khi đúng quyền, chạy --apply --confirm. Cờ kỹ thuật không thay cổng duyệt riêng của máy đích.

Nếu cài lại đúng bản, giữ tệp giống mã; không tạo cây lồng nhau. Nếu có tệp khác nội dung, giữ nguyên và chuẩn bị phạm vi nâng cấp/bản cũ/khôi phục riêng trước khi thay. Sau gián đoạn, đọc trạng thái và biên nhận trước khi thử lại; khôi phục chỉ file mới do giao dịch tạo và vẫn đúng mã. Không dọn dữ liệu khách để chữa lỗi.

## Nguồn và dữ liệu làm việc

Mỗi skill có SKILL.md, quy tắc thực, nguồn HTML/PDF và script kiểm ngay trong thư mục của nó. Giải quyết đường dẫn theo SKILL.md, không theo cwd. Voice chung đi cùng HAHA được giữ nguyên; giọng thương hiệu theo VOICE.md riêng. Không cần OS, skill Design mẹ hoặc đường dẫn máy dựng. Phông, ảnh, biểu tượng và luật chỉ dùng trong quyền kèm gói; Arial lấy từ máy xem/sans-serif dự phòng, không phân phối font gốc.

Tạo mới HAHA-Voice-work/input,output,library/custom cho HAHA; ba thương hiệu còn lại dùng BRAND-Design-work/input,output,library/custom trong workspace khi cần; giữ mẫu nguồn bất biến và dữ liệu khách đang có. Thành phần mới có nguồn sửa được, bản xem, mục đích, quy tắc, phụ thuộc, quyền, phiên bản, kiểm và duyệt trước khi thêm chỉ mục. Không tự sửa baseline hoặc học lại giọng đã duyệt.

## Bốn lớp kiểm bắt buộc

1. Kiểm hash tất cả tệp đã cài và chạy scripts/inspect_BRAND.py của từng skill từ workspace lẫn thư mục con khác. Đọc kết quả, mở đúng HTML, kiểm tài nguyên và thử Tái sử dụng thật. Kiểm mã không thay bằng chứng hình thức.
2. Dùng cơ chế host được hỗ trợ để xác nhận skill được nhận. Không hứa slash-command chung cho mọi ứng dụng; CLI/IDE có $name hoặc /skills, host khác dùng mục thực quan sát được. Khi menu chưa nhận, có thể đọc trực tiếp SKILL.md đã cài và báo đây là đường gọi qua file. Nếu cần chat mới hoặc restart, để người dùng thực hiện; không tự restart.
3. Thử một tác vụ nhỏ có nội dung thật cho từng thương hiệu, giữ dữ kiện và chọn thành phần theo DESIGN.md/VOICE.md. Xem bản xuất ở kích thước đọc và trạng thái liên quan. Voice chung thử viết lại mẫu đã kèm, giữ nguyên ngày/giờ/điều kiện; không gửi ra ngoài trong phép thử.
4. Ghi nghiệm thu người nhận riêng. Phép thử cơ học bên giao không chứng minh menu, tác vụ và ký nhận trên máy khách. Thiếu công cụ, quyền hoặc phụ thuộc chỉ chặn nhánh tương ứng. Sau hai thử cùng chẩn đoán, xét lại nguyên nhân; không vượt từ chối hoặc lặp vô hạn.

Sau kiểm đạt, hướng dẫn ngắn: nơi làm việc, cách gọi đã thử, một ví dụ, nơi đặt đầu vào/đầu ra và điểm còn chờ. Chi tiết theo từng packages/BRAND/SETUP.md. Kho công khai không cấp giấy phép mở cho thương hiệu; không tự xuất bản, mua hoặc gửi thay khách.


Bản ZIP kết hợp chọn nguồn Voice thực thi tại packages/haha/source/skill/voice, đúng 30 tệp nguyên bản. Kho Git giữ packages/voice và bản phát hành riêng nguyên byte; thư mục lịch sử của gói riêng không được nhân thêm vào ZIP mới.
