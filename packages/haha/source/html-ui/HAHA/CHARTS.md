# HAHA — Biểu đồ và dữ liệu

| Need | Path | Rule |
|---|---|---|
| Bóng đổ và lớp hiển thị | [SHADOW.md](SHADOW.md) | Chọn vai trò, nền nhận bóng và trạng thái. |
| Quy tắc | [semantic241.json](semantic241.json) | Mô hình hiện tại. |
| Mẫu | [REUSE.md](REUSE.md) | Đọc đúng mã và phụ thuộc. |

Đen–trắng/trung tính, Be Vietnam Pro; khung phẳng, bóng0.

## chartPresentation

```json
{
  "title": "Biểu đồ: nhãn rõ, dữ liệu đúng.",
  "rules": [
    {
      "role": "Nhãn và số",
      "rule": "Giữ ít nhất 8px giữa mép chữ và đường hoặc điểm không thuộc nhãn. Nếu không đủ chỗ, đưa nhãn ra một hàng hoặc bảng ngoài vùng vẽ; không dùng ô trắng che dữ liệu."
    },
    {
      "role": "Số và đơn vị",
      "rule": "Tách số với đơn vị bằng khoảng trắng, ví dụ 15 mục; giữ nguyên dấu âm, phần trăm, thang đo và dữ liệu."
    },
    {
      "role": "Chữ trong khối",
      "rule": "Khối có một nhãn, một từ hoặc các dòng ngang cấp không chia tiêu đề–nội dung: dùng chữ đậm 700 cho toàn bộ nhãn trong khối. Khối có phân cấp thật giữ vai trò tiêu đề và nội dung riêng; không tự làm đậm toàn bộ đoạn giải thích. Nhãn trục, chú thích ngoài hình và đường nối giữ trọng lượng theo vai trò. Sau khi đổi độ đậm, kiểm lại độ rộng chữ và khoảng hở; không thu nhỏ chữ để vừa khung."
    },
    {
      "role": "Nhóm chữ cùng cấp",
      "rule": "Các hàng chữ cùng cấp trong một nhóm dùng cùng nhịp hàng; các cột lặp dùng chung vị trí hàng và khoảng đệm. Đo khoảng trống giữa vùng chữ đã hiển thị, kiểm dấu tiếng Việt và nội dung xuống dòng. Nếu chữ dài, tăng hàng hoặc đổi bố cục cho cả nhóm liên quan; không thu nhỏ chữ hay chèn dòng trống. Tiêu đề và nội dung khác vai trò có thể dùng khoảng cách riêng đã khai báo. Không làm đều tọa độ nhãn vốn phụ thuộc giá trị dữ liệu."
    },
    {
      "role": "Bề mặt chứa nội dung",
      "rule": "Hộp chỉ số và nút sơ đồ dùng viền trung tính, chữ theo nền, khung phẳng và không bóng cứng. Giữ khoảng cách đủ đọc."
    },
    {
      "role": "Dấu biểu diễn dữ liệu",
      "rule": "Hình dữ liệu phẳng, bóng0. Các phần liền nhau dùng một đường bao chung và vạch chia cần thiết. Không đổi tọa độ, diện tích, nhãn hay thang đo."
    },
    {
      "role": "Màu và kiểm lại",
      "rule": "Dùng vai trò màu đơn sắc HAHA; chọn chữ đen hoặc trắng theo tương phản thực tế. Giữ nhãn, nguồn, đơn vị và khoảng trống trong sáng/tối, rộng/hẹp và bản tái dùng."
    },
    {
      "role": "Hình chia nhiều phần",
      "rule": "Các phần liền nhau dùng một đường bao ngoài, góc trong vuông, không có bóng; giữ vạch chia có nghĩa. Không thay hình dữ liệu hoặc nhãn."
    },
    {
      "role": "Viền và bóng của biểu đồ ghép",
      "rule": "Viền ngoài và vạch chia màu đen ở nền sáng, trắng ở nền tối. HAHA dùng bóng0; không tạo bóng ở mối nối."
    }
  ],
  "depth": {
    "contentOffset": 0,
    "largeShapeOffset": 0,
    "blur": 0,
    "colorToken": "--shadow",
    "minimumShapeExtent": 24,
    "flatFamilies": [
      "line",
      "area",
      "scatter",
      "slope",
      "dumbbell",
      "lollipop",
      "sparklines",
      "monitored-series",
      "progress-ring",
      "sankey",
      "dependency-network",
      "decision-tree",
      "journey-comparison",
      "kpi-table"
    ],
    "rule": "Tất cả dấu dữ liệu và khối nội dung phẳng, bóng0; kiểm nhãn và đường bao trong hai chế độ.",
    "joinedShapeRule": "Joined parts share one silhouette, square internal seams and no shadow; preserve all data bounds and meaningful dividers."
  }
}
```

## joinedShapes

```json
{
  "rule": "Các phần ghép liền dùng một đường bao ngoài, góc trong vuông, giữ vạch chia có nghĩa và bóng0. Không đổi tọa độ, diện tích hoặc nhãn.",
  "scope": "Thanh chia phần, thanh chồng, ô diện tích, vùng liền nhau và khung nội dung chia phần.",
  "geometry": "Không đổi giá trị, thang đo, diện tích phân phần, thứ tự hoặc tọa độ nhãn. Không gộp chỉ vì màu giống nhau, chỉ chạm một góc hoặc có khoảng cách.",
  "radiusRole": "dataRadius for data silhouettes; radius for content carriers",
  "shadowRole": "dataShadow for data silhouettes; existing content shadow for content carriers",
  "proof": "Quét từng họ, kiểm mối nối và đường bao ở cả hai chế độ và cỡ rộng/hẹp; kiểm bản dùng lại.",
  "edgeColor": {
    "light": "#000000",
    "dark": "#FFFFFF",
    "rule": "Đường bao và vạch chia đen ở nền sáng, trắng ở nền tối; HAHA dùng bóng0.",
    "scope": "Current joined and shadowed chart carriers; brand-specific HAHA rule, not a default for other systems."
  }
}
```


## Bóng đổ theo chức năng

Đọc [SHADOW.md](SHADOW.md) trước khi dựng. Khối đọc và dữ liệu phẳng; nút hành động 2px, hộp nổi 4px. Màu bóng theo nền nhận bóng, kiểm lại ở trạng thái và kích thước đầu ra thật.
