> NON-CANONICAL DELIVERY SNAPSHOT — 2026.10.12-v1. Portable adaptation; not the source OS authority.

# Final output voice handoff

| Need | Path | Rule |
|---|---|---|
| Trigger and accountable roles | [Trigger and accountable roles](#trigger-and-accountable-roles) | Read when you need trigger and accountable roles; retain the prerequisites and limits stated in that section. |
| Selection and review | [Selection and review](#selection-and-review) | Read when you need selection and review; retain the prerequisites and limits stated in that section. |
| Receipt and invalidation | [Receipt and invalidation](#receipt-and-invalidation) | Read when you need receipt and invalidation; retain the prerequisites and limits stated in that section. |
| Scope and failure | [Scope and failure](#scope-and-failure) | Read when you need scope and failure; retain the prerequisites and limits stated in that section. |

## Trigger and accountable roles

Required for EN/VI reader copy in web/apps, documents, sheets, reports, slides,
static designs, captions and accessibility text, even when Voice is unnamed.
The outcome/content/format owner calls Voice before draft, after final merge,
and before handoff/export readiness. Voice-only work can be primary; artifact
work keeps its existing primary owner. Code, formulas, IDs, raw data and audio
timing alone do not trigger it. Other locales retain declared extension limits.

## Selection and review

Use actual approved applicable selected-profile rules; otherwise use the neutral
language baseline. Task-scoped user overrides remain bounded and subject to
facts and higher instructions. Partial locale rules preserve valid brand traits
and fill missing mechanics only; stale selected rules cannot be reported applied.
Do not silently select a newest profile or restart an apply-only interview.

Pass selected rule text/version/hash and locked facts to the writer. Review the
complete final merged reader layer by language, including labels, field answers,
error/empty states, charts, notes, headings and accessibility copy. Internal VI
rules and EN catalogue remain conditional specialties of one owner. Style flags
are adjudicated against the chosen voice; critical meaning/unsupported proof
never receives a style exception. Preserve exact machine values and locked quotes.

## Receipt and invalidation

Before handoff, keep a task-owned `voice-output-review/v1` JSON receipt:

- `phase`: `final-merge`; `owner`: caller; `voiceOwner`: `voice`.
- `rules`: nonempty file refs `{path, sha256}`, plus identity/version and selected
  source type in task evidence; use actual rule files, not only a binding label.
- `source`: file ref for frozen source claims, limits and protected values.
- `copy`: file ref to JSON `{units: [{id, language, state, text}]}` containing
  the exact final reader text; unit IDs must be unique and cover all surfaces.
- `coverage`: file ref to a consumer-extracted native/rendered readback JSON
  with the same units and states. For text-only deliverables, actual output
  readback is sufficient; visual/interactive outputs also need rendered evidence.
- `artifact`: file ref to the exact delivered output or local native-revision
  readback envelope; envelope must identify the real destination/revision.
- `states`: exhaustive required state IDs from the actual artifact inventory.
- `reviews`: one row per unit, `{unitId, textSha256, verdict, reviewer, evidence}`.
  `verdict` is PASS only after actual source/meaning, selected-voice and language
  comparison. Evidence is a hash-bound written comparison of source/output spans
  and voice traits, not a self-declared boolean. EN/VI lint results stay attached.
- `renderEvidence`: hash-bound observations/screenshots for visual states, each
  `{state, evidence}`; `requiresRender` is true for visual/interactive output.
- `openBlockers`: empty only when no critical/major unresolved issue remains.

Run `scripts/verify_output_receipt.py RECEIPT`. Missing, duplicated, changed or
unreviewed units/rules/states/evidence fail. Native/rendered extraction and review
must be real and inspected: this script verifies identity/coverage, not whether a
human review is truthful, a sentence means the same thing or an inventory is
exhaustive. It never calls a model, writes production output or grants export.

Changing copy/data, applicable rules, selected voice, source facts, locale,
state coverage or artifact revision invalidates affected receipts. Re-extract,
review and render affected content before handoff; never reuse a prior PASS from
another revision. The caller keeps its format/export/source verification gates.

## Scope and failure

If required rules/dependencies are absent, retain an explicitly neutral draft
only where permitted; selected-voice readiness remains blocked. Missing native
or render proof blocks release for that artifact, not unrelated draft work.
No instruction/check guarantees all future OS tasks or fresh-session adoption.
Portable delivery includes actual rules and selected review dependencies rather
than an invisible call to the originating workspace. Never send private samples or use the optional
external cleanse without separate applicable authority.
