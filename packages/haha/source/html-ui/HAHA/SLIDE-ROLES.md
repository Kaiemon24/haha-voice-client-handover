# HAHA — Chức năng của slide

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

## roles

```json
{
  "headline": [
    "Tiêu đề chính",
    "display",
    "Một ý chính; một cấp lớn nhất trong nhóm."
  ],
  "subheadline": [
    "Tiêu đề phụ",
    "display",
    "Tên nhóm hoặc phần; chỉ dùng khi thực sự có phần phụ."
  ],
  "body": [
    "Thân bài",
    "reading",
    "Giải thích, định nghĩa, nội dung cần đọc."
  ],
  "quote": [
    "Lời trích",
    "display",
    "Lời trích có nguồn; dấu quote không đi cùng line dọc."
  ],
  "utility": [
    "Nhãn và chú thích",
    "reading",
    "Nguồn, chú thích, chỉ mục bước, nhãn điều khiển; chọn biến thể theo chức năng."
  ],
  "link": [
    "Liên kết",
    "reading",
    "Đích có thể mở; có gạch chân, không chỉ dựa vào màu."
  ],
  "prompt": [
    "Prompt và mã",
    "technical",
    "Lệnh hoặc mã cần chép; không dùng cho đoạn giải thích thường."
  ]
}
```

## recipes

```json
{
  "slide-group": [
    64,
    32,
    24,
    20
  ],
  "reading-group": [
    48,
    24,
    20,
    16
  ],
  "narrow-group": [
    32,
    16,
    16,
    16
  ]
}
```
