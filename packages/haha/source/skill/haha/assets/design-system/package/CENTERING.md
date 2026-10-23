# HAHA — Căn chữ và khoảng trống

| Need | Path | Rule |
|---|---|---|
| Bóng đổ và lớp hiển thị | [SHADOW.md](SHADOW.md) | Chọn vai trò, nền nhận bóng và trạng thái. |
| Quy tắc chính xác | [semantic241.json](semantic241.json) | Chỉ mô hình0.10-trial hiện tại; không kế thừa lời phê duyệt KAI. |
| Mẫu và chức năng | [REUSE.md](REUSE.md) | Đọc đúng mã, phụ thuộc và biến thể. |
| Kiểm hình và thao tác | [HTML](design-system.html) | Kiểm sáng/tối, rộng/hẹp và trạng thái thật. |

Be Vietnam Pro; đen–trắng/trung tính; khối đọc phẳng, nút hành động bóng2px và hộp nổi4px theo SHADOW.md. Các quy tắc chức năng dưới đây là mô hình hiện tại. Bản thử để phản hồi, productionAllowed=false.

## singleLabelAlignment

```json
{
  "scope": "Khung chỉ có một nhóm nội dung độc lập — một hộp chữ, một từ, một số hoặc một icon — phải căn giữa cả ngang và dọc. Hộp chữ đơn có nhiều dòng được căn giữa như một nhóm. Hai khoảng bên trái/phải và trên/dưới cân bằng trong sai số 1 px tại kích thước đọc; giữ inset đã khai báo. Tâm khung không bao gồm bóng đổ bên ngoài.",
  "exceptions": "Khối có tiêu đề, thân bài, nguồn, danh sách hoặc nhiều nhóm nội dung giữ cấu trúc đọc đã khai báo. Quy tắc này căn nội dung bên trong khung đơn; không đổi vị trí của toàn thẻ trong bố cục. Nếu không đủ chỗ, tăng khung hoặc đổi bố cục; không giảm chữ.",
  "verification": "Đo riêng khung và nhóm nội dung sau tải font; kiểm hai trục, phần chữ/icon nhìn thấy, inset và hình thật. Quét cùng họ ở Thư viện, Ứng dụng, trang đọc và slide. Không suy ra căn giữa toàn bộ thẻ có nhiều vai trò nội dung."
}
```

## fiveActionsAlignment

```json
"Center header, icon, step index, title and body for five-actions only."
```

## spacingRelationships

```json
{
  "shape-caption": {
    "relatedBaseline": 16,
    "increasePercent": 50,
    "minimumPaintedGap": 24,
    "shadowOutset": 0,
    "boxGap": 24,
    "scope": "External note immediately after a flat short information shape; other receiving roles calculate their own painted outsets",
    "rule": "Khung thông tin có bóng 4px và chú thích bên ngoài giữ tối thiểu 24 px khoảng trống sau phần đã vẽ. Mốc liên quan 16 px tăng 50% thành 24 px. Khoảng hộp = 24 px + phần bóng nhô ra về phía chú thích: phẳng 24, nút thường 26, hover 27, lớp nổi 28 px. Tính viền và vòng focus riêng nếu chúng vượt mép; dấu dữ liệu bên trong không bóng vẫn giữ 24 px. Chỉ áp dụng cho chú thích gắn với hình phía trên, không cho khoảng dòng hoặc icon–chữ.",
    "shadowRole": "flat",
    "roleOutsets": {
      "flat": 0,
      "control": 2,
      "hover": 3,
      "floating": 4
    },
    "roleBoxGaps": {
      "flat": 24,
      "control": 26,
      "hover": 27,
      "floating": 28
    }
  }
}
```

## iconPeerSizing

```json
{
  "family": "HAHA functional utility icons; not identity marks",
  "viewBox": 32,
  "sizes": [
    16,
    24,
    32,
    64,
    220
  ],
  "extentPolicy": "Record each master painted bounds including stroke; compare peers in the same information role. Preserve intentional aspect ratios.",
  "rule": "Icon chức năng dùng khung 32×32 và nét theo mẫu gốc của từng họ. So vùng đã vẽ, tâm và độ nặng thị giác giữa các icon cùng vai trò; giữ khoảng thở với viền. Hình dài hoặc hẹp giữ tỷ lệ và vùng riêng có lý do, không kéo giãn để ép mọi hình vào một vùng 24×24. Logo HAHA không thuộc họ icon chức năng.",
  "verification": "Đo vùng đã vẽ kể cả nét và góc nối của từng mẫu; so các icon cùng vai trò ở cùng cỡ. Đọc hình thật ở 16/24/32 px, hai chế độ và các cực chuyển động. Giữ khoảng hở bên trong theo iconClearance; kiểm mép ngoài theo vùng đã vẽ của mẫu. Không ép mọi icon vào một vùng hình vuông hoặc cùng tỷ lệ."
}
```


## Bóng đổ theo chức năng

Đọc [SHADOW.md](SHADOW.md) trước khi dựng. Khối đọc và dữ liệu phẳng; nút hành động 2px, hộp nổi 4px. Màu bóng theo nền nhận bóng, kiểm lại ở trạng thái và kích thước đầu ra thật.
