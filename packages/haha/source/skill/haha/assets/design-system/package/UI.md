> Current candidate depth override: [SHADOW47.md](SHADOW47.md) and [shadow47.model.json](shadow47.model.json) supersede all earlier flat-carrier, zero pressed/disabled, print-removal and filled-data-shadow prescriptions in this retained source document. Preserve original facts and data geometry; only the responsible outer carrier receives depth.

# HAHA — Giao diện và điều khiển

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

## componentRecipes

```json
{
  "data-reading": {
    "wide": {
      "headline": 40,
      "body": 20,
      "utility": 16
    },
    "narrow": {
      "headline": 32,
      "body": 16,
      "utility": 16
    }
  },
  "quote-reading": {
    "wide": {
      "headline": 40,
      "quote": 20,
      "body": 20,
      "utility": 16
    },
    "narrow": {
      "headline": 32,
      "quote": 16,
      "body": 16,
      "utility": 16
    }
  },
  "technical-reading": {
    "wide": {
      "headline": 48,
      "subheadline": 24,
      "body": 20,
      "prompt": 18,
      "utility": 16
    },
    "narrow": {
      "headline": 32,
      "subheadline": 16,
      "body": 16,
      "prompt": 16,
      "utility": 16
    }
  }
}
```

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


## Bóng đổ theo chức năng

Đọc [SHADOW.md](SHADOW.md) trước khi dựng. Khối đọc và dữ liệu phẳng; nút hành động 2px, hộp nổi 4px. Màu bóng theo nền nhận bóng, kiểm lại ở trạng thái và kích thước đầu ra thật.
