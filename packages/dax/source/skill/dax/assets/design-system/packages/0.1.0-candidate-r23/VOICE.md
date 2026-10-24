# dax-voice-proposed — Voice guideline

Generated; DO NOT EDIT. Source: voice model.
System: dax-movement-core | Version: 0.1.0 | Status: proposed
Field coverage is not evidence of native quality or authentic brand fit.

## context

- audience: Readers choosing outdoor/everyday products and creators producing DAX material
- job: Understand exact product, action and conditions
- channels: Product guide, social, UI, slides and support
- owner: DAX proposed brand voice; approval pending

## niche

- domain: Outdoor coolers and everyday product use
- readerKnowledge: Assume no knowledge of product geometry or test conditions
- readerDecision: Choose an exact variant and understand the next action
- risks: Unconditional cooling promises, wrong variant, fake stock/price/backend
- evidenceNeeded: Dated product source, exact variant, image and full conditions
- termPolicy: Explain technical terms at first use; keep source units
- emotionalContext: Calm, capable and welcoming; never pressure or invented intimacy
- excludedPromises: No unconditional performance, certification, urgency or saved-to-server claims

## traits

- Item 1:
  - id: dax-voice-concrete
  - status: proposed
  - instruction: Name the product, actor and action explicitly.
  - appliesWhen: All reader-facing product/UI copy
  - exception: Preserve locked official quotation exactly with source
  - sourceRefs:
    - dax-corpus
  - positiveExample: Đối chiếu ảnh26QT trước khi dùng thông số.
  - negativeExample: Sản phẩm tuyệt vời cho mọi việc.
  - confidence: medium for factual restraint; low for authentic brand personality
- Item 2:
  - id: dax-voice-bounded
  - status: proposed
  - instruction: Keep conditions next to every performance claim.
  - appliesWhen: All reader-facing product/UI copy
  - exception: Preserve locked official quotation exactly with source
  - sourceRefs:
    - dax-corpus
  - positiveExample: Nguồn nêu đến5ngày trong điều kiện lý tưởng; chưa kiểm nghiệm độc lập.
  - negativeExample: Giữ lạnh5ngày mọi lúc.
  - confidence: medium for factual restraint; low for authentic brand personality
- Item 3:
  - id: dax-voice-calm
  - status: proposed
  - instruction: Give a clear recovery step without blame, pressure or invented intimacy.
  - appliesWhen: All reader-facing product/UI copy
  - exception: Preserve locked official quotation exactly with source
  - sourceRefs:
    - dax-corpus
  - positiveExample: Chưa lưu: nhập tên chuyến đi để tiếp tục.
  - negativeExample: Bạn làm sai rồi!
  - confidence: medium for factual restraint; low for authentic brand personality

## tones

- Item 1:
  - scenario: normal
  - readerState: Exploring
  - informationOrder: Object then fact then next step
  - personalityLimit: Calm, concrete, no pressure or unsupported humor
  - action: Offer a useful next action
- Item 2:
  - scenario: onboarding
  - readerState: New reader
  - informationOrder: Purpose then short steps
  - personalityLimit: Calm, concrete, no pressure or unsupported humor
  - action: Explain source and local-demo boundary
- Item 3:
  - scenario: success
  - readerState: Completed local action
  - informationOrder: Exact achieved scope then next step
  - personalityLimit: Calm, concrete, no pressure or unsupported humor
  - action: Say saved in demo only when true
- Item 4:
  - scenario: empty
  - readerState: No matching content
  - informationOrder: What is empty then recovery
  - personalityLimit: Calm, concrete, no pressure or unsupported humor
  - action: Change query or reset filters
- Item 5:
  - scenario: error
  - readerState: Recoverable failure
  - informationOrder: What failed then how to recover
  - personalityLimit: Calm, concrete, no pressure or unsupported humor
  - action: Ask for missing input or reload exact source
- Item 6:
  - scenario: destructive
  - readerState: Potential loss
  - informationOrder: Scope and consequence before confirmation
  - personalityLimit: Calm, concrete, no pressure or unsupported humor
  - action: Never execute deletion from illustrative control
- Item 7:
  - scenario: uncertain
  - readerState: Missing evidence
  - informationOrder: Known source then unknown then evidence needed
  - personalityLimit: Calm, concrete, no pressure or unsupported humor
  - action: Label unverified claim clearly
- Item 8:
  - scenario: billing-security
  - readerState: Sensitive request
  - informationOrder: Exact state and safe supported action
  - personalityLimit: Calm, concrete, no pressure or unsupported humor
  - action: No payment/security promise; not implemented in local demo
- Item 9:
  - scenario: support
  - readerState: Reader needs help
  - informationOrder: Acknowledge task then concrete next step
  - personalityLimit: Calm, concrete, no pressure or unsupported humor
  - action: Use neutral address and no blame

## locales

- vi:
  - address: Không đoán tuổi, giới hoặc quan hệ; dùng câu trực tiếp.
  - syntax: Câu Việt tự nhiên; giữ chủ thể, phủ định và điều kiện.
  - rhythm: Đan câu ngắn và câu giải thích khi cần.
  - terminology: Giữ tên sản phẩm và đơn vị nguồn; giải nghĩa thuật ngữ lần đầu.
  - opening: Nêu vật hoặc việc người đọc cần.
  - closing: Kết bằng hành động thực tế, không ép mua.
  - do: Giữ đúng thông số và nói rõ giới hạn.
  - dont: Không viết câu quảng cáo vô điều kiện.
  - normalExample: Chọn phiên bản để xem ảnh nguồn.
  - errorExample: Chưa lưu: hãy nhập tên chuyến đi.
  - uncertainExample: Thông số do nguồn công bố; chưa kiểm nghiệm độc lập.
- en:
  - address: Use neutral direct address; do not infer age, gender or relationship.
  - syntax: Use clear English with explicit actors, negation and conditions.
  - rhythm: Mix concise statements with necessary explanation.
  - terminology: Keep product names and source units; explain technical terms.
  - opening: Lead with the object or reader task.
  - closing: End with a real available next action.
  - do: Keep exact facts and visible limits.
  - dont: Avoid unconditional claims and artificial urgency.
  - normalExample: Choose a variant to view the source images.
  - errorExample: Not saved: enter a trip name first.
  - uncertainExample: Source-listed specification; not independently tested.

## claims

- immutable: Exact variant, product geometry, source units, dates, negations and conditions
- allowed: Source-dated product claims with their limits; explicit illustrative examples
- forbidden: Unconditional72-hour/5-day promise; invented certifications/price/stock; false server persistence
- unknownHandling: Say what is unverified and what source or test would establish it

## components

- Item 1:
  - type: vi-heading
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 2:
  - type: vi-button
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 3:
  - type: vi-field
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 4:
  - type: vi-helper
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 5:
  - type: vi-error
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 6:
  - type: vi-empty
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 7:
  - type: vi-loading
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 8:
  - type: vi-confirmation
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 9:
  - type: vi-notification
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 10:
  - type: vi-chart-label
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible vi copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 11:
  - type: en-heading
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 12:
  - type: en-button
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 13:
  - type: en-field
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 14:
  - type: en-helper
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 15:
  - type: en-error
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 16:
  - type: en-empty
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 17:
  - type: en-loading
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 18:
  - type: en-confirmation
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 19:
  - type: en-notification
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent
- Item 20:
  - type: en-chart-label
  - behavior: Copy follows actual current state; no fake action
  - copyRule: Concrete, bounded, accessible en copy
  - budget: Fit the semantic slot at readable type; reflow instead of arbitrary shrink
  - notApplicable: Applicable when the component exists; billing/backend remain absent

## examples

- Item 1:
  - scenario: Recoverable local form error
  - language: vi
  - facts: Name is required; data remains local demo
  - before: Error!
  - after: Chưa lưu: hãy nhập tên chuyến đi.
  - reason: Names the missing input and recovery without blame
  - ruleIds:
    - dax-voice-concrete
    - dax-voice-calm
- Item 2:
  - scenario: Recoverable local form error
  - language: en
  - facts: Name is required; data remains local demo
  - before: Error!
  - after: Not saved: enter a trip name first.
  - reason: Names the missing input and recovery without blame
  - ruleIds:
    - dax-voice-concrete
    - dax-voice-calm

## governance

- versionReason: First proposed local target guideline grounded in dated DAX source
- approvalRef: pending
- authenticity: proposed-baseline
- gaps: No five diverse approved writing samples; no final brand approval
- updatePolicy: Change source model, recompile all projections and invalidate affected copy proof

## procedure

- Identify reader job and exact product variant.
- Read approved/current source facts, dates and limits.
- Write one concrete action or point per unit; preserve conditions.
- Review EN/VI naturalness, claims and actual component states.
- Recheck final merged HTML/Markdown/PDF and retain exact output hashes.

## sources

- Item 1:
  - id: dax-corpus
  - kind: proposal
  - locator: DAX canonical source audit/source-asset-bindings.json
  - rights: Task-local review only; no claim of approved voice corpus

