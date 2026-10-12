# SlopMonster

| Need | Path | Rule |
|---|---|---|
| Scope | [Scope](#scope) | Read when you need scope; retain the prerequisites and limits stated in that section. |
| Required loop | [Required loop](#required-loop) | Read when you need required loop; retain the prerequisites and limits stated in that section. |
| Hard boundaries | [Hard boundaries](#hard-boundaries) | Read when you need hard boundaries; retain the prerequisites and limits stated in that section. |
| Controlling voice and catalogue limits | [Controlling voice and catalogue limits](#controlling-voice-and-catalogue-limits) | Read when you need controlling voice and catalogue limits; retain the prerequisites and limits stated in that section. |

Internal English review function of Voice. Resolve this module's `scripts/`,
`references/` and `prompts/` relative to `functions/en/`, not the Voice root.

Use this function as an English copy release gate. It adapts the open-source
SlopMonster method: lint the visible reader text, rewrite without changing the
argument, optionally cleanse with a different model family, then lint again.
It is a style gate, not an authorship detector or a guarantee that prose was
written by a person.

## Scope

- Use for English report or slide reader copy, README, email, landing-page,
  script, and similar prose.
- Extract only reader-visible text. Exclude XML, code, URLs, source data,
  internal notes, and machine keys.
- For Vietnamese units, use the internal Vietnamese function (`../vi/README.md`).
  Mixed-language outputs use both functions on their respective reader units;
  do not apply the English catalogue to Vietnamese units.

## Required loop

1. **Lint:** run `scripts/deslop.py` and record findings.
2. **Rewrite:** remove vocabulary and constructions from
   `references/signs-of-ai-writing.md` while preserving facts, limits,
   placeholders, links, and structure.
3. **Independent cleanse:** use `scripts/cleanse.sh` only when the user has
   authorized the external model call and the data boundary permits it. The
   cleanser must be a different model family from the drafting model.
4. **Re-lint:** run the linter on the final reader text. Keep the receipt with
   score, findings, changes, model/provider, and limitations.

## Hard boundaries

- Never invent numbers, users, testimonials, ratings, certifications, or
  other proof. If a fact is not sourced, mark it for the source owner.
- Preserve meaning, certainty, causality, names, links, placeholders, and
  document structure. A style pass may not change a report's slide job or
  layout.
- Do not send private client text to a model or network through `cleanse.sh`
  without the applicable authorization. If no approved external model is
  available, record the optional cleanse as skipped and complete local review.
  If the user explicitly requires independent external review, keep that named
  dependent requirement pending and return a prompt for authorized execution.
- A 5/5 result is a linter result, not a naturalness certification. Human
  review and source-bound checks remain separate.

Read the detailed catalogue, principles, and source notes only when the current
English copy needs that category of review.

## Controlling voice and catalogue limits

The shared Design-derived voice rules control personality, address and register.
Catalogue hits open review; they do not authorize dropping uncertainty, an
approved brand line, valid hedges, source quotes or an intentional technical term.
Record any justified style exception with its selected rule and source span.
Proof/meaning failures cannot be waived. Apply principles only by genre: no
forced pain-first, arbitrary CTA quota, fabricated opinion or unapproved copy.
An optional cleanse prompt must carry the selected profile and protected facts.
