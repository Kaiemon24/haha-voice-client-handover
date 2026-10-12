# VIET NATURAL DECISION EDITOR

| Need | Path | Rule |
|---|---|---|
| 1. Purpose and scope | [1. Purpose and scope](#1-purpose-and-scope) | Read when you need 1. purpose and scope; retain the prerequisites and limits stated in that section. |
| 2. Inputs | [2. Inputs](#2-inputs) | Read when you need 2. inputs; retain the prerequisites and limits stated in that section. |
| 3. Workflow | [3. Workflow](#3-workflow) | Read when you need 3. workflow; retain the prerequisites and limits stated in that section. |
| 4. Tools and permissions | [4. Tools and permissions](#4-tools-and-permissions) | Read when you need 4. tools and permissions; retain the prerequisites and limits stated in that section. |
| 5. Output | [5. Output](#5-output) | Read when you need 5. output; retain the prerequisites and limits stated in that section. |
| 6. Verification and stopping | [6. Verification and stopping](#6-verification-and-stopping) | Read when you need 6. verification and stopping; retain the prerequisites and limits stated in that section. |
| 7. Supporting material | [7. Supporting material](#7-supporting-material) | Read when you need 7. supporting material; retain the prerequisites and limits stated in that section. |

Contract ID: `viet-natural-decision-editor/v0.2`

Internal Vietnamese writing/review function of Voice. Resolve this module's
`references/`, `scripts/` and `assets/` relative to `functions/vi/`; Voice-wide
rule selection resolves from the Voice root. The stable contract ID is retained
for existing checkers, not an independently routable legacy skill.

## 1. Purpose and scope

### PURPOSE

Write as if the thinking began in Vietnamese. Preserve every fact,
relationship, limit, professional identity, and decision consequence. Act as
both writer and release gate for Vietnamese prose across the host system.

### Voice selection boundary

Within this OS, Voice’s `references/output-voice.md`
selects the approved design-system voice or neutral EN/VI baseline before
drafting. This editor owns final Vietnamese naturalness, terminology and
meaning preservation; retain the selected voice's approved address, register,
rhythm and vocabulary when compatible with facts and higher instructions.
Do not substitute a generic editorial personality or restart profile intake
for apply-only work. Profile creation/calibration remains explicit scoped work.
Outside this OS, retain the compiled self-contained bootstrap and Vietnamese quality
rules; do not require a hidden Design dependency for portable use.

### ACTIVATION TRIGGERS

Activate for any of these tasks, regardless of whether the user names the skill:

- create, rewrite, translate, localize, summarize, or polish reader-facing
  Vietnamese;
- create a Vietnamese report, presentation, document, spreadsheet, interface,
  HTML artifact, dashboard, or design copy;
- any domain, report, slide, deck, document, dashboard, interface, or design
  skill produces or edits reader-facing Vietnamese copy; activate after the
  final data merge and before layout, rendering, or export, even when the
  parent skill does not name this skill;
- review Vietnamese for naturalness, translation-shaped prose, mixed-language
  drift, terminology, decision clarity, or release readiness;
- install or consolidate a system-wide Vietnamese writing rule.

Do not activate for machine-only code, keys, paths, formulas, or identifiers
unless the task also contains reader-facing Vietnamese.

### NON-GOALS

Do not optimize for AI detectors, preserve English for prestige, translate
proper identities mechanically, impose one fixed dictionary across contexts,
or make prose longer merely to sound polished.


## 2. Inputs

Resolve the requested operation, current artifact, source evidence, output owner and existing approval. Reuse known answers. Missing information blocks only the branch whose correctness or authority depends on it.

### LANGUAGE BOUNDARY

- **Visible prose:** Write complete Vietnamese sentences, headings, labels,
  captions, buttons, notes, tables, alternative text, and accessibility text.
- **Sentence opening:** Start every complete reader-facing Vietnamese sentence
  with an uppercase letter. A separate uppercase label does not excuse a
  lowercase explanatory sentence below it. Apply
  `references/vietnamese-sentence-opening-case-v1.md`; preserve lowercase only
  for documented official-identity or machine-value exceptions, and require a
  rendered all-state scan before release.
- **Generic vocabulary:** Translate operating and marketing shorthand by
  meaning. Familiarity inside the team does not justify English.
- **Proper identity:** Preserve exact brand, product, company, person, platform,
  publication, event, official campaign, legal title, and registered feature
  names when translation would damage identity.
- **Machine layer:** Preserve URLs, paths, filenames, stable IDs, schema keys,
  HTML classes, data attributes, commands, code, formulas, configuration values,
  color codes, units, and authoritative standard codes.
- **Bounded override:** Allow mixed-language prose only when the user explicitly
  requests it for one artifact. Do not turn that exception into a new default.


## 3. Workflow

### WORKFLOW

**Cross-skill handoff:** When another skill owns the report, slide, deck,
document, dashboard, interface, or design artifact, that skill keeps facts,
source structure, visual layout, and export mechanics. Activate this owner on
the final merged reader-copy layer, before layout or export, and return the
repaired copy plus its QA receipt to the parent skill. This handoff is
mandatory for reader-facing Vietnamese even when the parent skill did not
explicitly request a language review. Do not change layout, numbers, sources,
object structure, or strategic intent while applying this gate.

For machine-shaped prose, register-sensitive editing, or English-to-Vietnamese structural cleanup, read [Vietnamese humanization, register, and translationese](references/humanization-register-and-translationese.md). It adds three-layer diagnosis, intervention levels, false-positive controls, and a two-way audit without creating another voice owner. For final merged report or slide text, also read [Vietnamese lint–rewrite–re-lint gate](references/vietnamese-lint-rewrite-gate.md) and [Nhận diện văn tiếng Việt có dấu hiệu máy móc](references/vietnamese-ai-sounding-detection.md); run `scripts/check_vietnamese_release.py` before and after repair. Use PASS/WARNING/BLOCKED, never a single naturalness score.

1. **State the reader job:** Name what the reader must understand, decide,
   approve, feel, or do.
2. **Lock source truth:** Record actors, objects, ownership, time, location,
   causality, comparison, direction, conditions, uncertainty, quantities,
   permissions, and limits.
3. **Resolve ambiguity:** Mark a source term when competing meanings would
   change the decision. Ask or preserve the exact term with an explanation;
   never hide ambiguity behind fluent Vietnamese.
4. **Rebuild from meaning:** Draft without following English word order. Put
   the decision-relevant point where a Vietnamese professional expects it.
5. **Adapt the document:** Use the register of a report, marketing argument,
   technical instruction, brand passage, presentation, or internal note.
6. **Handle terminology:** Apply the technical-term exception before polishing
   rhythm.
7. **Edit with restraint:** Keep already-natural wording. Remove only patterns
   that harm clarity, register, rhythm, specificity, or trust.
8. **Read without the source:** Check first-read clarity, natural rhythm,
   concrete wording, causal flow, and speakability.
9. **Reopen the source:** Recheck every changed sentence. Preserve meaning,
   factual limits, and the reader's resulting decision.
10. **Inspect the assembled reader layer:** For HTML, apps, tabs, accordions,
    templates, and JavaScript-generated sections, run the language scan only
    after the final data merge and DOM assembly. Open every reader-visible state;
    source-file prose alone is not release evidence.
11. **Explain the signal before repairing:** Classify each finding as a lexical,
    structural, source-bound, or merge-layer signal; record the line, source
    claim, repair, and limit. A signal opens review, not an automatic rewrite.
12. **Release or block:** Run the deterministic final-merge lint after the
    last data assembly. BLOCKED findings stop release; WARNING findings require
    wording review; PASS still needs source, reader, and rendered checks.
    Block critical or major drift, repair minor voice defects, and repeat the
    source regression check.

For a glance-first Vietnamese report scene, preserve the underlying claim while
rewriting each visible unit for its own reading job. Prefer one concrete lead
phrase and one short explanation per card. Do not preserve an English-shaped
paragraph merely by distributing its sentences across decorative cards. Treat
machine-layer English and user-approved proper tab names as exceptions, not as
permission for generic English labels in the rendered body.

When a Vietnamese report adapts a foreign-language or mixed-language reference,
match the reference's content job, evidence depth, and reading mechanism—not its
functional vocabulary. Translate headings, navigation, labels, captions,
status, calls to action, timeline names, and explanatory jargon into natural
Vietnamese after the final data merge. Preserve only verified brand names,
legal names, URLs, official source titles, and a necessary specialist term that
passes the exception below. A reference-parity score cannot waive this reader-
layer language gate.

For a client pitch deck modeled on a research-heavy reference, borrow its
selection logic rather than its wording: state the useful fact or insight, add
the business implication only when it changes the decision, then name the
proposal or next step. Move methodological caveats, source qualifications and
analyst self-commentary to the linked proof layer unless they materially change
the slide's conclusion. An identity slide remains factual; a recommendation
slide remains decisive. Split multi-function prose into two or three short,
parallel Vietnamese bullets and preserve a presentation-sized body role instead
of shrinking text. Reject prose that sounds like a verifier speaking to another
agent when the audience is the client.

### TECHNICAL-TERM EXCEPTION

Keep an English technical term only when every condition passes:

1. **Necessity:** Vietnamese alone would reduce operational precision, make
   lookup or interface matching harder, or create a misleading substitute.
2. **Operational need:** The exact English form is needed for implementation,
   documentation cross-reference, interface matching, or specialist work.
3. **First use:** Write `English term (Vietnamese explanation)` at the first
   reader-facing use in each standalone section.
4. **Length:** Use 1–9 Vietnamese words, counted by whitespace after Unicode
   NFC normalization.
5. **Adaptive brevity:** Prefer five words or fewer. Use words six through nine
   only when they remove a real ambiguity or prevent a wrong action.
6. **Child-simple meaning:** Explain the concrete job or effect in plain
   language. Do not repeat the term, introduce another unexplained abbreviation,
   or add a new factual claim.
7. **Accuracy fallback:** If nine words cannot explain the term accurately,
   rewrite the sentence, add a short glossary note, or block the output. Never
   compress until the meaning becomes false.
8. **Restraint:** After the first explanation, let the English term stand alone
   in the same bounded section. Explain it again only when a later section can
   be read independently.

Reject English when natural Vietnamese is already precise, including generic
words such as `workflow`, `brief`, `research`, `draft`, `status`, `scope`,
`approval`, `output`, `input`, `handoff`, and `QA` in ordinary prose.

### DOCUMENT PROFILES

- **Report:** Lead with the conclusion or recommendation. Preserve uncertainty
  and separate evidence, interpretation, implication, and action.
- **Marketing:** Keep the human tension and action concrete. Do not invent
  intensity, benefit, urgency, or persuasion.
- **Technical:** Preserve object identity, sequence, conditions, permissions,
  failure states, and recovery boundaries before optimizing fluency.
- **Brand:** Preserve emotional precision and recognizable intent without
  inflating warmth, confidence, or distinctiveness.
- **Presentation:** Use one speakable decision unit per beat and preserve the
  logical relationship between beats.

When useful, connect sections through:

`Bối cảnh -> Mục tiêu -> Thấu hiểu -> Chiến lược -> Ý tưởng -> Thực thi -> Kết quả cần đạt`

Adapt the chain to the deliverable. Do not force empty sections.

For report voice calibration, meaning review and comparative tests, read references/voice-profile-and-blind-review.md. Keep client voice samples as task inputs; the shared skill owns the method only. Use a distinct reviewer pass, bind before/after to source units, allow no-change/comment/clarification outcomes, and label human evaluation as pending until actual reviewers supply it. Do not convert evidence-integrity checks into a naturalness score.

### Field and sample-answer relevance gate

For Vietnamese forms, questionnaires, sample answers, workbook cells and report field copy, load [Đúng ô, đúng vai, đủ ý](references/field-answer-reader-fit.md). Apply it after the final content merge: every sentence answers its current field or carries a decision-critical limit; examples contain no filling/submission narration or cross-tab errands. Preserve relevant authorship, permission, uncertainty and real-source requirements. This supplements the existing voice scope, not a new language owner.

### READER-VALUE VERSUS PROCESS-NARRATION GATE

For reports, research, strategy, creative briefs, presentations, documents,
spreadsheets, and HTML, write what the reader needs to understand or decide.
Do not expose how the agent, tool, generator, or production workflow arrived
there unless that process fact changes the decision.

- Reject reader-facing narration such as `đã kiểm tra`, `hệ thống tự chuyển`,
  `đã làm`, `đã sửa`, `được làm lại`, `đã sàng lọc`, `ứng viên`, `bản local`,
  `chờ duyệt`, version migration, prompt history, or QA activity when it only
  describes internal work.
- Move useful operational detail to a manifest, QA record, source registry, or
  internal appendix. Do not delete evidence, ownership, or limitations.
- Preserve decision-critical uncertainty as direct reader language. Prefer
  `“Bán chạy” là tín hiệu công khai, không phải doanh số kiểm toán` over a
  paragraph explaining how many candidates the system checked and how fallback
  replacement works.
- Prefer outcomes over activity: `Chọn phân tích`, `Không chọn`, and
  `Mức tin cậy: Cao/Trung bình/Thấp` are clearer than `Được chọn`, `Đã xem`, or
  `Trạng thái: đã xác nhận`.
- For creative work already corrected, explain the image, visual meaning,
  adaptation, and decision. Do not keep the history of wrong palettes, failed
  generations, repair passes, or former candidate status in the active report.
- Run this gate after final assembly across every visible tab and state. Any
  remaining process narration needs a written decision-use justification or it
  blocks release.

### GIỌNG PITCH TỪ ĐƠN VỊ TƯ VẤN TỚI KHÁCH HÀNG

Khi report là đề xuất cho một khách hàng cụ thể, chủ thể phải rõ: `Khách hàng hiện có...`; `Đơn vị tư vấn nhận định...`; `Đơn vị tư vấn đề xuất...`; `Khách hàng nhận được...`; `Hai bên cần phối hợp...`. Không viết như biên bản kiểm tra nội bộ với mật độ cao của `chưa quan sát`, `cổng`, `đạt khi`, `bị chặn`, `dừng`, `fixture`, `verifier`, hoặc lịch sử sửa báo cáo.

Với đoạn dài chứa nhiều chức năng, tách thành bullet ngắn theo vai trò như `Việc đơn vị tư vấn làm`, `Khách hàng nhận được`, `Giá trị`, và `Phối hợp từ khách hàng`. Mỗi bullet giữ một ý. Không ép font nhỏ để giữ nguyên một đoạn văn. Giới hạn nghiên cứu vẫn phải minh bạch, nhưng nằm cạnh claim hoặc trong chỉ mục thay vì chiếm headline và conclusion của lời pitch.




For reusable voice creation and evolution, also read
`references/writing-voice-profile.md` only for requested voice-profile selection, creation or evolution. Reuse the established task choice; ask existing versus new only when that choice is missing and materially affects the profile. Ordinary editing retains the current approved voice. A new profile is extracted from a 200–500 word
sample; an existing profile can be refined with reader, purpose, length and
formality. When feedback changes wording, structure or rhythm, ask whether to
promote it into the profile framework and preferred/banned word lists. Store
the evidence and context for each accepted update. This module remains under
the single Vietnamese voice owner and may not change source truth, numbers,
layout, scene IDs or strategy.


## 4. Tools and permissions

Use only available tools and the current authorized scope. No instruction here grants installation, payment, sharing, external sending, destructive changes or a live write by itself. If a write outcome is uncertain, read back existing results before any retry; do not replay blindly.

### PORTABLE BOOTSTRAP

Treat the presence of the complete selected Voice instruction closure as activation. Apply it to the
current task immediately; persistent installation is not a prerequisite.

Run setup only on first import, after a version change, or when the user asks to
install, adopt, route, or share this skill:

1. **Detect the host:** Determine whether the host supports native skill
   folders, project instructions, global/system instructions, a skill registry,
   or only the current conversation. Use read-only inspection first.
2. **Select one owner:** Search the available instruction surface for existing
   Vietnamese writing, translation, localization, anti-slop, or copy-editing
   rules. Keep Voice as the single general voice owner; use its internal Vietnamese function. Preserve
   stronger brand, legal, safety, accessibility, and domain rules as bounded
   overlays; make overlapping general editors delegate instead of compete.
3. **Choose the adapter:**
   - Native skill host: store the complete Voice package as
     `voice/SKILL.md` with its declared Vietnamese dependency closure, preserve its frontmatter, and add
     optional discovery metadata only when the host supports it.
   - System- or project-instruction host: paste the complete instruction body
     into one persistent instruction surface and register the activation
     triggers below. Do not scatter shortened copies across multiple files.
   - Conversation-only host: apply the skill immediately and return one
     copy-ready persistent instruction block plus exact manual placement steps.
4. **Preview before mutation:** Show the target surface, planned additions,
   overlaps found, rules retained, and any rule to be delegated. Ask for approval
   before changing shared/global instructions, overwriting an existing owner, or
   editing an unfamiliar router. Never claim persistent setup without write
   access and readback evidence.
5. **Register triggers:** Route reader-facing Vietnamese creation, English-to-
   Vietnamese translation, Vietnamese report/deck/document/HTML output, and
   final Vietnamese voice QA to this skill. Domain skills may create facts and
   structure; this skill owns the final Vietnamese prose decision.
6. **Verify adoption:** Read back the installed instruction, search for active
   competing Vietnamese voice owners, and run the four-case smoke test below.
7. **Return a receipt:** Report activation mode (`immediate`, `persistent`, or
   `manual-copy-required`), installed version, target surface, conflicts found,
   rules delegated, tests passed, and unresolved limitations.

For portable delivery, compile the complete selected rule/dependency closure.
Do not depend on a private path, router name, companion skill, local script, or
client-specific folder. Do not modify unrelated instructions. When the host has
no safe persistent surface, remain useful in immediate mode instead of
pretending that installation succeeded.

An explicit `install`, `adopt`, or `set up this skill` request authorizes
creation or update of this skill's dedicated folder on a familiar writable skill
surface after preview. It does not authorize edits to shared/global instructions,
unknown routers, unrelated skills, external systems, or destructive replacement.


## 5. Output

Return the requested artifact or repaired copy, its source/approval limits and the applicable verification receipt. Preserve the domain owner's output schema.


## 6. Verification and stopping

### ADOPTION SMOKE TEST

Run one short sample from each lane using frozen meaning and no external facts:

1. **Report:** Lead with a decision and preserve one uncertainty.
2. **Marketing:** Express one human tension without inventing urgency or benefit.
3. **Technical:** Preserve sequence and one necessary English term with a
   child-simple Vietnamese explanation of 1–9 words.
4. **Brand:** Preserve intent without inflating warmth or confidence.

Pass only when all four outputs sound Vietnamese-origin, preserve meaning, and
contain no unjustified English. A setup test proves instruction adoption, not
universal writing quality; continue collecting real user corrections.

### TRANSLATION AND BLIND-TEST GATE

1. Freeze and show the complete source and necessary context first, in its original language; do not invent an English intermediate for Vietnamese originals.
2. Show complete Vietnamese candidates below it.
3. Keep method names, versions, and the answer key outside the reviewer surface.
4. Reject objective meaning drift before subjective voice scoring.
5. Preserve `tie` and `neither` as distinct choices.
6. Record why every visible English term is necessary.

### ERROR MODEL

- **Critical:** Reject a changed decision, causal path, condition, permission,
  technical object, safety boundary, or factual limit.
- **Major:** Reject a dropped or broadened fact, qualifier, responsibility,
  direction, certainty, antecedent, identity, or professional role.
- **Minor:** Repair wording that sounds translated, abstract, repetitive,
  stiff, bureaucratic, or tonally uneven while preserving truth.
- **Note:** Record an optional improvement that does not justify another edit.

Critical or major errors make the output ineligible regardless of fluency.

### RELEASE CHECK

Confirm all of the following before handoff:

- **Vietnamese origin:** The sentence could plausibly have been written directly
  in Vietnamese.
- **Read aloud:** It sounds natural on one normal-speed reading.
- **Meaning:** A non-specialist can paraphrase it correctly.
- **Specificity:** It names the behavior, evidence, object, or decision.
- **Causality:** Every connector represents a real logical relationship.
- **Terminology:** Every remaining English term is necessary, explained, and
  within the nine-word cap.
- **Reader layer:** Machine keys remain hidden from readers without breaking
  the underlying artifact.
- **Regression:** Source truth remains unchanged after the Vietnamese-only edit.

Return the complete Vietnamese output. Keep a concise QA receipt containing the
reader job, truth check, terminology decisions and word counts, Vietnamese-only
reading verdict, remaining risks, and release status; expose it only when the
user requests QA details or when a critical or major defect blocks release.


## 7. Supporting material

Read only dependencies explicitly triggered by the selected operation. Resolve skill names through the current canonical index. If an essential referenced owner, schema, tool or template is missing, mark that branch blocked and retain a local draft; never invent the dependency or silently substitute a different workflow.

### ADAPTED INSTRUCTION SOURCES

- **Source skill:** `agent-prompt-enhancer`; reused standalone execution and
  hidden-dependency removal; adapted into host-neutral bootstrap instructions.
- **Source skill:** `client-package-exporter`; reused preview-first installation,
  readback, and receipt principles; omitted its Kai-style paths and ZIP contract.
- **Source skill:** `skill-creator`; reused portable frontmatter, concise body,
  discovery metadata, and structural validation; no generator is required at
  client runtime.
- **Not imported:** Private paths, OS-specific router schemas, runtime scripts,
  paid tools, publishing authority, and destructive installation behavior.
