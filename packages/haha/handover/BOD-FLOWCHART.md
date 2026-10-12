# Quy trình sử dụng

```mermaid
flowchart TD
A[Nhận đề bài] --> B[Kiểm gói và chọn hướng dẫn]
B --> C[Ghép thành phần thật và viết bản nháp]
C --> D[Kiểm lời, nghĩa và bản xuất]
D --> E{Đủ bằng chứng và quyền gửi?}
E -->|Có| F[Bàn giao và ghi phiên bản]
E -->|Chưa| C
```

## GitHub + integration update

Release GitHub pinned/hash verified → inspect client OS/target → preview → client confirmation → apply → actual discovery and task check. See INSTALL.md. Source UI baseline unchanged; custom elements follow separate versioned library.
