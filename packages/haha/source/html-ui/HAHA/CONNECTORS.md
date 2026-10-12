# HAHA — Nối các ý theo quan hệ

| Need | Path | Rule |
|---|---|---|
| Quy tắc chính xác | [semantic241.json](semantic241.json) | Chỉ mô hình0.10-trial hiện tại; không kế thừa lời phê duyệt KAI. |
| Mẫu và chức năng | [REUSE.md](REUSE.md) | Đọc đúng mã, phụ thuộc và biến thể. |
| Kiểm hình và thao tác | [HTML](design-system.html) | Kiểm sáng/tối, rộng/hẹp và trạng thái thật. |

Be Vietnam Pro; đen–trắng/trung tính; khối đọc phẳng, nút hành động bóng2px và hộp nổi4px theo SHADOW.md. Các quy tắc chức năng dưới đây là mô hình hiện tại. Bản thử để phản hồi, productionAllowed=false.

## semanticRelations

```json
{
  "scope": "Hai nhóm khuyến nghị đối ứng dùng chữ rõ và hình đối ứng; không suy trạng thái thành công hoặc lỗi từ ví dụ nên/tránh.",
  "do": {
    "label": "Nên làm",
    "icon": "check",
    "foreground": "support",
    "background": "muted"
  },
  "avoid": {
    "label": "Tránh làm",
    "icon": "cross",
    "foreground": "#FFFFFF",
    "background": "fire"
  },
  "icons": "Icon bổ trợ nghĩa, không thay nhãn. Cặp nên/tránh dùng ✓ / × ở mỗi mục để giữ quan hệ khi tách mục. Các danh sách khác chọn icon theo chức năng hoặc giữ bullet thường. Dùng khung24px, nét2px, vùng trống4px; ẩn icon lặp nghĩa chữ khỏi trình đọc màn hình.",
  "colors": "Khuyến nghị và điều cần tránh phân biệt bằng icon, nhãn và bố cục, không chỉ bằng màu. Đen–trắng/trung tính là các vai trò HAHA; kiểm tương phản theo nền.",
  "review": "Che màu vẫn phân biệt được nhờ nhãn và dấu ✓ / ×; kiểm tương phản, khoảng thở và thứ tự đọc trong cả hai chế độ."
}
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
    "rule": "Khung thông tin phẳng và chú thích bên ngoài giữ tối thiểu 24 px khoảng trống sau phần đã vẽ. Mốc liên quan 16 px tăng 50% thành 24 px. Khoảng hộp = 24 px + phần bóng nhô ra về phía chú thích: phẳng 24, nút thường 26, hover 27, lớp nổi 28 px. Tính viền và vòng focus riêng nếu chúng vượt mép; trạng thái không bóng dùng 24 px. Chỉ áp dụng cho chú thích gắn với hình phía trên, không cho khoảng dòng hoặc icon–chữ.",
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
