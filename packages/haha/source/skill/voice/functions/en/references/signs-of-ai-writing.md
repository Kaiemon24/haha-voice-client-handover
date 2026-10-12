> NON-CANONICAL DELIVERY SNAPSHOT — 2026.10.12-v1. Portable adaptation; not the source OS authority.

# Signs Of Ai Writing — reference guide

| Need | Path | Rule |
|---|---|---|
| 1 · Vocabulary | [1 · Vocabulary](#1--vocabulary) | Read when you need 1 · vocabulary; retain the prerequisites and limits stated in that section. |
| 2 · Constructions (the shapes) | [2 · Constructions (the shapes)](#2--constructions-the-shapes) | Read when you need 2 · constructions (the shapes); retain the prerequisites and limits stated in that section. |
| 3 · Punctuation cadence | [3 · Punctuation cadence](#3--punctuation-cadence) | Read when you need 3 · punctuation cadence; retain the prerequisites and limits stated in that section. |
| 4 · Rhythm | [4 · Rhythm](#4--rhythm) | Read when you need 4 · rhythm; retain the prerequisites and limits stated in that section. |
| 5 · Invented proof | [5 · Invented proof](#5--invented-proof) | Read when you need 5 · invented proof; retain the prerequisites and limits stated in that section. |
| After the tells are gone | [After the tells are gone](#after-the-tells-are-gone) | Read when you need after the tells are gone; retain the prerequisites and limits stated in that section. |

Applicability: review signals, not automatic deletions, authorship detection or authority to remove hedges/limits. The shared selected approved voice contract and factual truth win. Research-strength and numerical claims below are upstream assertions, not independently verified OS evidence.

# Signs of AI writing — the catalogue

Slop is the sound of an unwritten rule. A model asked to "write good copy" writes the
average of everything it has read, and that average has a very recognisable accent.

The canonical source is **Wikipedia's "Signs of AI writing"**, maintained by WikiProject
AI Cleanup (`en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing`) — a community-maintained source of editorial review signals, not a peer-reviewed
authorship test or an independently validated naturalness measure. Everything below is organised into five groups, because the fix differs per
group. These five groups are exactly what `../scripts/deslop.py` scores.

---

## 1 · Vocabulary

Words a model reaches for because they are the safest available token. Humans mostly do not.

**Tier 1, review for unnecessary/inflated wording:**
`delve` · `tapestry` · `testament to` · `underscores` · `seamless(ly)` · `robust` ·
`navigate the landscape` · `in today's fast-paced world` · `it's important to note` ·
`it's worth noting` · `that being said` · `at the end of the day` · `unlock` ·
`supercharge` · `elevate` · `game-changing` · `revolutionise` · `harness the power of` ·
`dive deep` · `myriad` · `plethora` · `realm` · `ever-evolving` · `cutting-edge` ·
`transformative` · `paradigm shift` · `synergy` · `holistic` · `embark`

**Tier 2, fine once and damning in every section:**
`leverage` · `foster` · `crucial` · `pivotal` · `streamline` · `empower` · `showcase` ·
`curated` · `meticulous` · `compelling` · `innovative` · `comprehensive` · `journey` ·
`solution` · `effortless` · `intuitive` · `world-class` · `best-in-class` · `unleash` · `boost`

On a marketing site the second tier does more damage than the first, because `streamline
your workflow` is the exact sentence every competitor also shipped.

The fix is a **plainer word, not a synonym**. `leverage` does not become `utilise`.
It becomes `use`.

## 2 · Constructions (the shapes)

Louder than any single word, because they are shapes rather than vocabulary:

| Shape | Example | Fix |
|---|---|---|
| `not just X, but Y` | `It's not just a course, it's a journey` | Cut the first clause, keep the claim |
| `more than just` | `More than just another app` | Same |
| `whether you're X or Y` | `Whether you're a beginner or a pro…` | Name the one reader you mean |
| `that's where X comes in` | `That's where Acme comes in` | State what X does |
| `say goodbye to` | `Say goodbye to guesswork` | Name what replaces it |
| `imagine a…` | `Imagine a world where…` | Show it instead |
| hedged benefit | `helps you to`, `can help you` | Use a precise verb; retain factual uncertainty |
| stacked hedging | `may potentially`, `could possibly` | Remove redundant hedges only; retain required uncertainty |
| self-answering question | `The result? Faster shipping.` | A sentence |

**`It's not just X, it's Y` is the single loudest tell in English right now.** If you
fix one thing, fix that.

Also in this group: the closing summary nobody asked for (`In conclusion…`), process
bleed (`I've analysed your requirements and structured the following…`), bold-lead
bullets on every item, and symmetrical paragraphs — every paragraph three sentences,
every sentence fifteen words. Humans write a nine-word paragraph and then a forty-word one.

## 3 · Punctuation cadence

- Two or more em-dashes inside one sentence. This is a review heuristic; the package makes no independently
  verified numerical claim about writer populations. The clause after a dash must add
  new information, or it is two sentences pretending to be one.
- Semicolons in web copy. Almost always the wrong register.
- A caveat appended to every claim.

## 4 · Rhythm

The rule-of-three reflex: `faster, smarter, and better`. One tricolon is rhetoric.
Three on a page is a machine. Real writers use two items, or four, or one.

## 5 · Invented proof

Numbers, users, testimonials or ratings the product has not earned. The one group with a
real cost attached: it is the single unrecoverable mistake, and the lift it buys is
smaller than the specificity you could have written instead. If the product has not
launched, the copy says so. "Five minutes of real problems, marked the second you answer"
beats any fabricated number, and it has the advantage of being true.

---

## After the tells are gone

Removing tells leaves clean, dead copy. Put a person back in:

- **Use a specific number, name or date when actually supplied and useful.** "Faster" is nothing. "Four minutes
  instead of forty" is a sentence a human wrote because they timed it.
- **Vary sentence length hard.** Land a three-word sentence after a long one. Rhythm is
  the fastest human signal there is.
- **Use a source-supported point when appropriate for the selected voice.** An opinion, a preference, a thing that
  failed. Safety is the texture of AI writing.
- **Use the reader's actual words.** Mine reviews, tickets, comments. Nobody says
  `streamline your workflow` out loud.
- **Keep one rough edge.** A contraction, a fragment, a sentence starting with "And".
  One rough edge is texture. Five is sloppy.
