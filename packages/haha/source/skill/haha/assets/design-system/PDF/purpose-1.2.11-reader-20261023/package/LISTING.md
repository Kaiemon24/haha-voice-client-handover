# HAHA — Cách liệt kê nội dung

| Need | Path | Rule |
|---|---|---|
| Quy tắc chính xác | [semantic241.json](semantic241.json) | Chỉ mô hình0.10-trial hiện tại; không kế thừa lời phê duyệt KAI. |
| Mẫu và chức năng | [REUSE.md](REUSE.md) | Đọc đúng mã, phụ thuộc và biến thể. |
| Kiểm hình và thao tác | [HTML](design-system.html) | Kiểm sáng/tối, rộng/hẹp và trạng thái thật. |

Be Vietnam Pro; đen–trắng/trung tính; khối đọc phẳng, nút hành động bóng2px và hộp nổi4px theo SHADOW.md. Các quy tắc chức năng dưới đây là mô hình hiện tại. Bản thử để phản hồi, productionAllowed=false.

## listingFramework

```json
{
  "source": "listing287-data.js",
  "guide": "LISTING.md",
  "entry": "listing287.html",
  "gallery": "reading-listing",
  "variants": {
    "status": "availability comparison with explicit status words and local HAHA success/empty-square marks; static, not interactive",
    "sections": "category index with continuous highlighted identifiers; no implied execution order",
    "shapes": "unordered equal-role items; one small gold shape, no status encoding",
    "icons": "parallel concepts,2–3 existing semantic icon masters per composition; no invented progression"
  },
  "selection": "Choose by relationship/reader job first, then icon/number/shape; use existing process/readiness/comparison-table for those jobs.",
  "color": "Existing fire gold highlights indices or small simple bullets; green structural headings and supportive keywords; no per-item rainbow",
  "alignment": "Independent icon/number centered inside its carrier in both axes; repeated marker aligns with first text line; long prose left-aligned",
  "spacing": "Between peer groups at least16px painted clearance; within-list rows use16px rhythm. Flat frames, no shadow.",
  "staticSemantics": "Static marks are aria-hidden, retain meaningful header/item words; use true UI checkbox when interactive.",
  "density": "Flow height grows; wrap/reflow not text shrink; keep heading24, body20 wide/16 constrained, utility16.",
  "deduplication": "Four distinct reader jobs in one family, four reusable variants; framework is not an extra counted asset."
}
```
