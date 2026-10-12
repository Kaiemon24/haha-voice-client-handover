# Local script usage

NON-CANONICAL DELIVERY SNAPSHOT — 2026.10.12-v1. This adapter documents the
included Python programs; it adds no model, installation or release authority.

All programs require Python 3.10 or newer and only its standard library. Run
commands from the installed `voice` folder; keep test inputs/results in a
separate task-owned folder. The paths below are illustrative relative inputs.

## Vietnamese reader text

```sh
python functions/vi/scripts/check_vietnamese_release.py final-vi.txt --source-claims claims.json --output lint-vi.json
```

`claims.json` is a list of exact supported quantitative claim strings, or an
object with `claims` containing that list. Use `--allow-term` only for a verified
official label or necessary technical term. Exclude code/formulas/keys from
reader input. Exit 0 means no heuristic findings, 1 means WARNING and 2 means
BLOCKED. The checker does not understand all meaning: exact substring support
does not prove actor, certainty, time period or permission was preserved. Human
or competent agent source comparison remains required. Warning signals can be
false positives; record context and justified dispositions rather than erase
brand wording blindly.

## English reader text

```sh
python functions/en/scripts/deslop.py final-en.txt
```

Use `.md` or `--markdown` for Markdown input; `--text` accepts supplied prose.
For HTML the program strips static markup/scripts/styles; it does not extract
dynamic or hidden application states. Supply actual reader readback separately.
Exit 0 and score 5/5 only mean no catalogue hits. Exit 1 opens source-preserving
review. `--allow-proof` changes proof hits to advisory only after the actual
claim has independent source support; it does not manufacture that support.
The upstream output phrase “needs a cleanse” means revise locally; no external
service is installed or needed. The Markdown parser strips image alternative
text and inline code, so separately review any reader-facing content there.

## Final copy identity and coverage

```sh
python scripts/verify_output_receipt.py task/voice-review.json
```

Use the exact JSON contract in `output-handoff.md`. References are relative to
the receipt's folder, or explicit existing file paths. Each digest is
`sha256:` followed by the SHA-256 of the file bytes. Review rows bind the UTF-8
text hash, an actual comparison file, reviewer identity and PASS verdict.
For text-only delivery, read back the emitted output. Visual/interactive output
needs real rendered state evidence. Exit 0 means supplied identities/coverage
match, not semantic truth, render authenticity, exhaustive inventory or release
permission. A changed copy/rule/source/artifact requires a new receipt.

## Optional structured brand profile

```sh
python scripts/voice_contract.py --model task/brand-model.json --output task/VOICE.md
```

The output must not already exist or be inside an active `.codex` instruction
folder. Ordinary writing and manual eight-block guideline creation do not need
this compiler. A structured model has schemaVersion `brand-voice/v1`; nonempty
`id`, `version`, `systemId` (a brand/profile-container identity, no Design skill
needed), and `status` of `proposed` or `approved`.

Its fields are:

- `context`: audience, job, channels, owner; each is a nonempty string.
- `niche`: domain, readerKnowledge, readerDecision, risks, evidenceNeeded,
  termPolicy, emotionalContext, excludedPromises; each a nonempty string.
- `sources`: list with unique id, kind, locator, rights. kind is approved-rule,
  authentic-sample, inspiration, fixture-assumption or proposal.
- `traits`: three to five rules with id, status, instruction, appliesWhen,
  exception, positiveExample, negativeExample, confidence and sourceRefs.
- `tones`: scenario, readerState, informationOrder, personalityLimit, action;
  include normal, error and uncertain, with actual applicability explained.
- `locales`: en and vi by default, each with address, syntax, rhythm,
  terminology, opening, closing, do, dont, normalExample, errorExample and
  uncertainExample. An explicit languageException has userDirection and the
  exact languages list when the user requested narrower coverage. Additional
  locales need conventions and reviewLimit.
- `claims`: immutable, allowed, forbidden, unknownHandling; nonempty strings.
- `components`: type, behavior, copyRule, budget, notApplicable per component.
- `examples`: scenario, language, facts, before, after, reason, ruleIds; at
  least one example for each declared language.
- `governance`: versionReason, approvalRef, authenticity, gaps, updatePolicy.
  An approved profile needs an actual approvalRef. `learned` authenticity needs
  an authentic-sample source and further substantive evidence, never just a tag.
- `procedure`: at least four actual portable writing steps.

These fields encode the eight conceptual blocks plus explicit domain/procedure
details. Mechanical validation does not show that supplied rules are good or
complete for their actual situations. Compile the complete selected review
instructions into a per-brand guideline when it will be used without this skill.

The optional Python function `resolve_voice(root, expected, language)` reads
local `VoiceBinding.json` and `VOICE.md`. Its binding has systemId, version and
voice containing id, version, systemId, path `VOICE.md`, sha256 and languages;
expected contains systemId, systemVersion, id, version and sha256. Hashes here
are bare hexadecimal values. This is an optional host-neutral binding adapter,
not a Design requirement or an additional public skill.

## Capability boundary

If a required local script cannot run, do not report its check PASS. Keep the
affected export/readiness check pending and still prepare authorized drafts and
manual source comparisons. A generic agent may use COMPILED-VOICE.md for writing
without persistent installation; it must explicitly state unavailable script,
native or rendered checks. No account, paid model, external upload or API key is
required for local writing/review.
