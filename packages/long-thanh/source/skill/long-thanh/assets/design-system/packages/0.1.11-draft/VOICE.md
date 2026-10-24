# long-thanh-clear-technical — Voice guideline

Generated; DO NOT EDIT. Source: voice model.
System: long-thanh-industrial | Version: 0.1.11-draft | Status: proposed
Field coverage is not evidence of native quality or authentic brand fit.

## context

- audience: Người mua và đội tư vấn sản phẩm nhựa
- job: Hiểu nhóm, điều kiện và bước đối chiếu tiếp theo
- channels: Website, app, slide, tài liệu, design, edit
- owner: LONG THÀNH; đề xuất trong công việc hiện tại

## niche

- domain: Sản phẩm nhựa công nghiệp và gia dụng
- readerKnowledge: Không mặc định biết ký hiệu kỹ thuật
- readerDecision: Chuẩn bị điều kiện để đối chiếu đúng sản phẩm
- risks: Nhầm minh họa thành thông số hoặc lời hứa
- evidenceNeeded: Mã, nguồn, đơn vị và điều kiện còn hiệu lực
- termPolicy: Giải thích thuật ngữ khi nó ảnh hưởng lựa chọn
- emotionalContext: Tôn trọng, bình tĩnh, rõ việc
- excludedPromises: Không tự hứa tải trọng, tuổi thọ, an toàn hay lợi ích môi trường

## traits

- Item 1:
  - id: voice-1
  - instruction: Nói rõ việc cần làm
  - appliesWhen: Mọi nội dung hướng dẫn và giao diện
  - exception: Giữ nguyên trích dẫn nguồn có nhãn
  - positiveExample: Ghi kích thước và đơn vị.
  - negativeExample: Hãy tối ưu hóa mọi thứ.
  - confidence: proposed
  - status: proposed
  - sourceRefs:
    - neutral-baseline
- Item 2:
  - id: voice-2
  - instruction: Giữ điều kiện cạnh thông số
  - appliesWhen: Mọi nội dung hướng dẫn và giao diện
  - exception: Giữ nguyên trích dẫn nguồn có nhãn
  - positiveExample: Cần nguồn xác nhận tải trọng theo cách dùng.
  - negativeExample: Chịu tải vượt trội trong mọi điều kiện.
  - confidence: proposed
  - status: proposed
  - sourceRefs:
    - neutral-baseline
- Item 3:
  - id: voice-3
  - instruction: Giữ đúng mức chắc chắn
  - appliesWhen: Mọi nội dung hướng dẫn và giao diện
  - exception: Giữ nguyên trích dẫn nguồn có nhãn
  - positiveExample: Chưa có thông số trong mẫu.
  - negativeExample: Thông số đã được bảo đảm.
  - confidence: proposed
  - status: proposed
  - sourceRefs:
    - neutral-baseline

## tones

- Item 1:
  - scenario: normal
  - readerState: Cần biết thông tin
  - informationOrder: Nhóm → điều kiện → bước tiếp
  - personalityLimit: Không thổi phồng, không đổ lỗi người đọc
  - action: Nêu một việc có thể làm
- Item 2:
  - scenario: error
  - readerState: Cần sửa đầu vào
  - informationOrder: Lỗi → cách sửa → dữ liệu được giữ
  - personalityLimit: Không thổi phồng, không đổ lỗi người đọc
  - action: Chỉ trường và cách sửa
- Item 3:
  - scenario: uncertain
  - readerState: Chưa có nguồn đủ
  - informationOrder: Điều biết → điều chưa xác nhận → cách đối chiếu
  - personalityLimit: Không thổi phồng, không đổ lỗi người đọc
  - action: Giữ giới hạn và yêu cầu đúng nguồn

## locales

- vi:
  - address: Dùng câu trực tiếp; quý khách khi quan hệ dịch vụ cần; không đoán tuổi/giới.
  - syntax: Viết từ ý bằng tiếng Việt, động từ cụ thể.
  - rhythm: Một ý rõ mỗi câu; thay độ dài theo công việc đọc.
  - terminology: Giữ mã/đơn vị; giải thích thuật ngữ lạ cạnh lần đầu.
  - opening: Nêu việc hoặc dữ kiện chính.
  - closing: Nêu bước tiếp theo và điều kiện cần.
  - do: Ghi kích thước, khối lượng và môi trường sử dụng.
  - dont: Không viết bảo đảm tuyệt đối khi thiếu nguồn.
  - normalExample: Chọn nhóm sản phẩm để xem thông tin cần đối chiếu.
  - errorExample: Nhập kích thước và đơn vị trước khi xem trước. Nội dung khác vẫn được giữ.
  - uncertainExample: Mẫu chưa có thông số sản phẩm được xác nhận.
- en:
  - address: Direct, respectful instructions; do not assume familiarity.
  - syntax: Use concrete actions and preserve conditions.
  - rhythm: Match sentence length to the reading task.
  - terminology: Keep exact codes and units; explain unfamiliar terms.
  - opening: Lead with the action or relevant fact.
  - closing: State the next step and its prerequisite.
  - do: Provide dimensions, weight and operating conditions.
  - dont: Do not promise verified performance without evidence.
  - normalExample: Choose a product group to review the information needed.
  - errorExample: Enter the dimensions and unit before previewing. Other entries are retained.
  - uncertainExample: This sample does not contain verified product specifications.

## claims

- immutable: Giữ mã, nguồn, đơn vị, điều kiện và mức chắc chắn
- allowed: Mô tả công việc và thông tin có nguồn
- forbidden: Không tự gắn chứng nhận, tải trọng, tốt nhất hoặc bền vững tuyệt đối
- unknownHandling: Nêu chưa xác nhận và cách đối chiếu

## components

- Item 1:
  - type: Nút và thông báo
  - behavior: Phản hồi đúng thao tác
  - copyRule: Động từ rõ, không báo đã gửi khi chưa gửi
  - budget: Đủ ý, kiểm trong khung thật
  - notApplicable: Không dùng thông báo mẫu làm chứng cứ tác vụ thật

## examples

- Item 1:
  - scenario: uncertain
  - language: vi
  - facts: No verified product specifications in the sample.
  - before: Thông số được bảo đảm.
  - after: Mẫu chưa có thông số sản phẩm được xác nhận.
  - reason: Preserve uncertainty; do not invent verification.
  - ruleIds:
    - voice-3
- Item 2:
  - scenario: uncertain
  - language: en
  - facts: No verified product specifications in the sample.
  - before: Guaranteed specifications.
  - after: This sample does not contain verified product specifications.
  - reason: Preserve uncertainty; do not invent verification.
  - ruleIds:
    - voice-3

## governance

- versionReason: Đề xuất hệ thống mới
- approvalRef: pending
- authenticity: proposed-neutral-baseline
- gaps: Chưa có tập mẫu EN/VI được duyệt để học giọng thương hiệu
- updatePolicy: Giữ bản, nguồn và bằng chứng; không tự kích hoạt

## procedure

- Chốt người đọc và công việc.
- Kiểm nguồn, dữ kiện và điều kiện.
- Viết trực tiếp theo ngôn ngữ, giữ nhãn nguồn.
- Đọc lại ý nghĩa và độ tự nhiên.
- Kiểm nội dung hợp nhất trong đầu ra hiện tại.

## sources

- Item 1:
  - id: neutral-baseline
  - kind: proposal
  - locator: Voice EN/VI neutral language baseline; not a brand corpus
  - rights: Method applied; no copied third-party prose

