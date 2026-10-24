# HAHA — Hình và mật độ trên slide

| Need | Path | Rule |
|---|---|---|
| Quy tắc chính xác | [semantic241.json](semantic241.json) | Chỉ mô hình0.10-trial hiện tại; không kế thừa lời phê duyệt KAI. |
| Mẫu và chức năng | [REUSE.md](REUSE.md) | Đọc đúng mã, phụ thuộc và biến thể. |
| Kiểm hình và thao tác | [HTML](design-system.html) | Kiểm sáng/tối, rộng/hẹp và trạng thái thật. |

Be Vietnam Pro; đen–trắng/trung tính; khối đọc phẳng, nút hành động bóng2px và hộp nổi4px theo SHADOW.md. Các quy tắc chức năng dưới đây là mô hình hiện tại. Bản thử để phản hồi, productionAllowed=false.

## applicationCoverage

```json
{
  "slides": 27,
  "pdf": 7,
  "websites": 2,
  "apps": 2,
  "trialDesign": 2,
  "trialEdit": 1,
  "inheritance": "one-to-one functions, brand-adapted identity",
  "sharedDefault": false
}
```

## groupingSpacing

```json
{
  "withinGroup": 16,
  "betweenGroups": 32,
  "summaryToContent": 24,
  "rule": "Mỗi mục có một nhóm riêng: tiêu đề và nội dung cách16px; hai nhóm khác nhau cách32px. Dùng wrapper và gap theo quan hệ, không dựa vào margin mặc định. Kiểm khi đóng/mở, xuống dòng và đổi màn hình; không đổi cỡ chữ để bù khoảng cách."
}
```

## shapes

```json
{
  "radius": 4,
  "surfaceShadow": 0,
  "controlShadow": 0,
  "dataRadius": 2,
  "dataShadow": 0,
  "scope": "Flat monochrome surfaces; joined data parts retain one outer contour and square internal joins; no decorative shadows."
}
```
