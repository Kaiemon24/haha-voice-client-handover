# HAHA — Nút và trạng thái

| Need | Path | Rule |
|---|---|---|
| Bóng đổ và lớp hiển thị | [SHADOW.md](SHADOW.md) | Chọn vai trò, nền nhận bóng và trạng thái. |
| Quy tắc chính xác | [semantic241.json](semantic241.json) | Chỉ mô hình0.10-trial hiện tại; không kế thừa lời phê duyệt KAI. |
| Mẫu và chức năng | [REUSE.md](REUSE.md) | Đọc đúng mã, phụ thuộc và biến thể. |
| Kiểm hình và thao tác | [HTML](design-system.html) | Kiểm sáng/tối, rộng/hẹp và trạng thái thật. |

Be Vietnam Pro; đen–trắng/trung tính; khối đọc phẳng, nút hành động bóng2px và hộp nổi4px theo SHADOW.md. Các quy tắc chức năng dưới đây là mô hình hiện tại. Bản thử để phản hồi, productionAllowed=false.

## highlightAction

```json
{
  "fill": "#000000",
  "text": "#FFFFFF",
  "darkFill": "#FFFFFF",
  "darkText": "#000000"
}
```

## shapeTextRule

```json
"Khối có một nhãn, một từ hoặc các dòng ngang cấp không chia tiêu đề–nội dung: dùng chữ đậm 700 cho toàn bộ nhãn trong khối. Khối có phân cấp thật giữ vai trò tiêu đề và nội dung riêng; không tự làm đậm toàn bộ đoạn giải thích. Nhãn trục, chú thích ngoài hình và đường nối giữ trọng lượng theo vai trò. Sau khi đổi độ đậm, kiểm lại độ rộng chữ và khoảng hở; không thu nhỏ chữ để vừa khung."
```

## singleLabelAlignment

```json
{
  "scope": "Khung chỉ có một nhóm nội dung độc lập — một hộp chữ, một từ, một số hoặc một icon — phải căn giữa cả ngang và dọc. Hộp chữ đơn có nhiều dòng được căn giữa như một nhóm. Hai khoảng bên trái/phải và trên/dưới cân bằng trong sai số 1 px tại kích thước đọc; giữ inset đã khai báo. Tâm khung không bao gồm bóng đổ bên ngoài.",
  "exceptions": "Khối có tiêu đề, thân bài, nguồn, danh sách hoặc nhiều nhóm nội dung giữ cấu trúc đọc đã khai báo. Quy tắc này căn nội dung bên trong khung đơn; không đổi vị trí của toàn thẻ trong bố cục. Nếu không đủ chỗ, tăng khung hoặc đổi bố cục; không giảm chữ.",
  "verification": "Đo riêng khung và nhóm nội dung sau tải font; kiểm hai trục, phần chữ/icon nhìn thấy, inset và hình thật. Quét cùng họ ở Thư viện, Ứng dụng, trang đọc và slide. Không suy ra căn giữa toàn bộ thẻ có nhiều vai trò nội dung."
}
```


## Bóng đổ theo chức năng

Đọc [SHADOW.md](SHADOW.md) trước khi dựng. Khối đọc và dữ liệu phẳng; nút hành động 2px, hộp nổi 4px. Màu bóng theo nền nhận bóng, kiểm lại ở trạng thái và kích thước đầu ra thật.
