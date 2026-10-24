# HAHA — Nhóm nội dung

| Need | Path | Rule |
|---|---|---|
| Quy tắc chính xác | [semantic241.json](semantic241.json) | Chỉ mô hình0.10-trial hiện tại; không kế thừa lời phê duyệt KAI. |
| Mẫu và chức năng | [REUSE.md](REUSE.md) | Đọc đúng mã, phụ thuộc và biến thể. |
| Kiểm hình và thao tác | [HTML](design-system.html) | Kiểm sáng/tối, rộng/hẹp và trạng thái thật. |

Be Vietnam Pro; đen–trắng/trung tính; khối đọc phẳng, nút hành động bóng2px và hộp nổi4px theo SHADOW.md. Các quy tắc chức năng dưới đây là mô hình hiện tại. Bản thử để phản hồi, productionAllowed=false.

## contentFamilies282

```json
[
  {
    "id": "task-brief",
    "title": "Phiếu mục tiêu",
    "purpose": "Chốt người đọc, việc cần làm, đầu vào và kết quả trước khi bắt đầu.",
    "use": "Tài liệu giao việc, hướng dẫn sử dụng, đề bài hoặc mở đầu một phần.",
    "avoid": "Không biến thành danh sách bước; kết quả phải có điểm kiểm cụ thể.",
    "capacity": "Một mục tiêu; ba đến năm trường; mỗi giá trị một hoặc hai câu.",
    "sources": "Sonnet 5.5 Video Editing Guide, trang 2; Design System Guide, trang 2."
  },
  {
    "id": "rule-check-fix",
    "title": "Quy tắc · kiểm · sửa",
    "purpose": "Nối một nguyên tắc với cách phát hiện sai lệch và cách sửa.",
    "use": "Hướng dẫn chất lượng, rà soát tài liệu, giải thích lỗi thường gặp.",
    "avoid": "Không dùng khẩu hiệu chung; cách sửa phải xử lý đúng điều vừa kiểm.",
    "capacity": "Một quy tắc; một lý do; một cặp kiểm và sửa, tối đa ba ý mỗi phần.",
    "sources": "The 10 SKILL Rules, trang 4, 6 và 7."
  },
  {
    "id": "readiness-levels",
    "title": "Các mức sẵn sàng",
    "purpose": "Phân biệt các mức năng lực bằng điều kiện đầu vào và tiêu chí đạt.",
    "use": "Lộ trình học, đánh giá mức trưởng thành, lựa chọn mức triển khai.",
    "avoid": "Không coi số thứ tự là thời gian; nêu rõ điều kiện để đạt từng mức.",
    "capacity": "Hai đến bốn mức; mỗi mức một năng lực, một điều kiện và một điểm kiểm.",
    "sources": "ARMS Agentic OS Guide, trang 3, 6 và 10."
  },
  {
    "id": "worked-example",
    "title": "Ví dụ có giải thích",
    "purpose": "Cho thấy một đầu vào được chuyển thành kết quả như thế nào và vì sao.",
    "use": "Giải thích lý thuyết, dạy cách viết, hướng dẫn sửa một đầu ra.",
    "avoid": "Không đổi dữ kiện để làm ví dụ đẹp hơn; giải thích đúng phần đã thay đổi.",
    "capacity": "Một cặp đầu vào và kết quả; một đoạn giải thích ngắn.",
    "sources": "The 10 SKILL Rules, trang 4 và 8; Sonnet 5.5 Video Editing Guide, trang 5."
  },
  {
    "id": "reference-card",
    "title": "Thẻ nguồn tham khảo",
    "purpose": "Giúp chọn nguồn theo phần hữu ích, tình huống dùng và giới hạn.",
    "use": "Danh mục đọc, hướng dẫn tài liệu, tổng hợp nguồn cho một chủ đề.",
    "avoid": "Không xem nguồn tham khảo là bằng chứng cho mọi kết luận; giữ đường đọc và thông tin nhận diện.",
    "capacity": "Một nguồn mỗi thẻ; ba trường giải thích và một liên kết có thật.",
    "sources": "Design System Guide, trang 9; ARMS Agentic OS Guide, trang 12."
  }
]
```

## quoteContexts

```json
{
  "standalone": [
    "hero",
    "paired"
  ],
  "embedded": "compact",
  "rule": "Two independent standalone variants remain; compact marks12x10px sit inline at text top before first word/after last word, each stays with its word; source below prefixed with hyphen. No left bar; preserve quote/source, grow/reflow for long text.",
  "pairedClosingGap": "Half the measured visible gap in281; responsive pixel measurement retained in282 proof. Compact inline marks unchanged."
}
```

## quoteModes

```json
{
  "single-top-left": {
    "opening": "pixel SVG,48px, tail above block",
    "closing": false
  },
  "paired": {
    "opening": "pixel SVG,32px",
    "closing": "pixel SVG,32px, zero extra gap below fitted words"
  }
}
```

## tableSelection

```json
{
  "wide": "Continuous gold outline around entire selected column, four outer edges; interior row separators stay neutral.",
  "narrow": "Each labeled selected value gets four-sided gold outline."
}
```
