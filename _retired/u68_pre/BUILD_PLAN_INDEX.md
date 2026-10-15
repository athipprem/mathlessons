# Build Plan Index — Math Workspace

The executor (`create-new-test-pack`) reads this FIRST to find the right plan.
The planner (`create-build-plan`) updates it in the same session any plan is written.

**Naming going forward:** `BUILD_PLAN_MATH_<scope>.md`. The three older plans keep their
legacy names — rename each on its next substantive touch.

| Plan file | Covers | Status |
|---|---|---|
| `BUILD_PLAN_MATH_U61_Fractions.md` | **Unit 61 — Fraction of a Set + Fraction as Division** (5A Ch.3). Test built, Q6 swapped, re-verified correct 19 Sep. **REVISION 2 (§11) complete — both lessons fixed in place, gate passed.** | **Done — U61 fully shipped 19 Sep. Next: U62** |
| `BUILD_PLAN_MATH_U62_MixedNumbers_BarModel.md` | **Unit 62 — Mixed Numbers + The Bar Model** (5A Ch.3). Replaces the old U62 (Fractions <-> Decimals), which moves to U63. Closes the one measured Part-1 gap (improper fraction -> mixed number) and installs the bar model as the standing representation. All 60+ pinned numbers verified programmatically at plan time; 3 answer collisions caught and fixed. | **Done — shipped 21 Sep 2026. Result in 24 Sep: Part 1 10/12 · Recall 3/4 · independent (Lui confirmed) · +0. Next: U63** |
| `BUILD_PLAN_MATH_U63_FractionTimesFraction.md` | **Unit 63 — Fraction × Fraction** (5A Ch.3, +0). Prem's own request, Lui agreed 24 Sep. Area-grid model; cancel-first; mixed × mixed with the add-vs-multiply discrimination screen; size sense. Replaces the old U63 (decimals), which moves to U64 — **cycle renumber #2, cycle 7 now U61–U72**. Gate: `verify_u63_plan.py` PASS at plan time (55 answers, 0 collisions, 0 leaks, 0 prior reuse across 197 files) and again post-build after a self-exclusion tooling fix. | **Done — shipped 24 Sep 2026. Both lessons + Stuck Card + Self-Check + test built and delivery-gate verified (`verify_lesson_pack.py` PASS incl. new H-AREAGRID check; `verify_u63_plan.py` PASS). Next: sit U63, then U64** |
| `BUILD_PLAN_MATH_U64_FractionWordProblems.md` | **Unit 64 — Fraction word problems: which operation, and of what?** (5A Ch.3, +0). U63's one revision (strike 1 on operation choice). Replaces the old U64 (decimals → cycle 8). Gate `verify_u64_plan.py` PASS on device (56 answers, 0 collisions, 0 leaks, 0 prior reuse / 202 files). | **Done — shipped 28 Sep 2026.** Both lessons + Stuck Card + compulsory Self-Check + test built and delivery-gate verified (`verify_lesson_pack.py` PASS; `verify_u64_plan.py` PASS pre- and post-build). Test header now carries `Self-Check score: ___/5` (new standing line). **Next: sit U64, then U65** |
| `BUILD_PLAN_MATH_U65_CountThePieces.md` | **Unit 65 — Fraction of an amount: count the pieces.** Third and FINAL version of operation choice (U63, U64 = two strikes; see `U64_ReviewNote_FractionOperationChoice.md`). New root cause: the ±/common-denominator routine fires before reading. Device: amount → equal pieces → fraction of a set. Answer frame on every item; neutral headers (gate-checked); the Self-Check saves a JSON results file to Google Drive (`Lessons\SelfCheck Results\`, English's `saveResults()` pattern; plan v1.1, 3 Oct, superseding v1.0's claude.ai artifact). Replaces the Ch.3 Stretch unit (dropped). Gate `verify_u65_plan.py` PASS on device. | **Done — shipped 3 Oct 2026.** Two lessons + Stuck Card + saving Self-Check + test built; `verify_u65_plan.py`, new `verify_u65_build.py` and `verify_lesson_pack.py` (new I-PIECES block) PASS on device. **Next: sit U65, then U66** |
| `BUILD_PLAN_MATH_U66v2_TakenAndLeftOver.md` | **Unit 66 v2.1 — Taken piece & Left-over piece** (v2.0 built 12 Oct; **v2.1 revised 12 Oct and BUILT 12 Oct (executor): lessons + Star Path only, test unchanged and not yet sat**). v2.1: every calculation one micro-step per line from `u66v21_worklines.json` (gate J-ONESTEP); a First-Step Map (decision tree) in both lessons + printable `U66_FirstStep_Map.html`; Lesson 2 bridge (2/3 of 33 L) + split worked example; Star Path turned from a mastery gate into practice (Set A after Lesson 1, Set B after Lesson 2, no Boss; finishing earns `PIECE-66`). Gate `verify_u66v2_plan.py` PASS on device (113 answers, 379 worked lines, 4/4 planted bad lines caught). | **DONE — sat 13 Oct: Part 1 7/12 strict (final; Lui: Q4 swap is wrong), Applied 0/4, Recall 2/4.** Then Prem's Set A/B JSONs and the paper with `PIECE-66`. Pass = Part 1 ≥10/12 AND Q12(a) explained. Not a strike (no v2 test sat). |
| `BUILD_PLAN_MATH_U67_NewWhole.md` | **Unit 67 v2.1 — Two-round stories: the left-over piece becomes the NEW whole** (5A Ch.3, +0). v1.0 (13 Oct: 2 lessons + Star Path A/B + area/3-rounds/explain) **split 14 Oct per Lui** (overload: 'three tests per unit'; Set B too tough). v2.0 = **ONE lesson `Fractions_Lesson_NewWhole.html` (6 screens, Your turn ×5 built in, saves per item, resumes)** + docx; no Star Path/code. v1.0 lessons/drill/docx → `_retired\`. Gate `verify_u67_plan.py` PASS on device (72 answers, 791 lines, T-PRACTISED). v1.0 kept as appendix in the same file. | **v2.1 lesson BUILT 15 Oct 2026** (one lesson with the Formula Card; Stuck Card and Map retired; docx unchanged from v2.0 build; gates pass). **NEXT: Prem does the lesson, then the paper; stop for the lesson JSON and result.** Pass = Part 1 ≥10/12; key Q9. || **DONE — sat 15 Oct: Part 1 9/12 (Basic 1/3, Int 5/5, Applied 3/4; key Q9 ✓), Recall 2/4. Independent. Not passed (Lui 80%); misses = subtraction with different bottoms (Q1b, R4, lesson B3) + answered other part (Q12) + one slip (Q3).** |
| `BUILD_PLAN_MATH_U68_LeftPartDoneRight.md` | **Unit 68 — The left part, done right: taking away with different bottoms** (+ 'how much more?' and the ④ last check). One lesson (6 screens) with the Formula Card (+ count-up rule for −1, + ④), Your turn ×5 with an answer-check nudge, Memory Boost (sequences, remainders); 16Q docx with no scaffold boxes. All content in `u68_items.json` / `u68_worklines.json`. Gate `verify_u68_plan.py` PASS on device (40 answers, 298 lines, × and − prior scan over 243 files). | **ACTIVE — NEXT for the executor.** Pass = Part 1 ≥10/12; key Q1. |
| `BUILD_PLAN_MATH_U69_BiggerStories.md` | **Unit 69 (renumbered from U68 on 16 Oct) — Bigger stories: area as round 0, three rounds, say why.** Outline; items reserved in `u67_items.json` (tag unit 68). | **OUTLINE — DO NOT BUILD.** Completed after U68's result. |
| `BUILD_PLAN_MATH_U66_PartFirst.md` | **Unit 66 — Part First: a fraction OF an amount, and what is LEFT.** U65 came back 5/12: a removal verb plus a fraction gets subtracted (0/6), a static verb gets multiplied (4/4), and the WHOLE/pieces frame was blank 17/17. Coaching fixes: tap-gated decisions, a 32-item mastery drill (**v1.1, 7 Oct: Star Path** — 12 stars that never go down, 3 badges, a 3-item Boss Round, 12-item sittings; replaces '10 in a row'), the test valid only with the drill code, one target only, Decisions scored, and an explain item (Q12). **Lui 5 Oct: don't move on until 80% + understanding** (supersedes 'no 4th version' for this skill). Gate `verify_u66_plan.py` PASS on device. | **Superseded 12 Oct by v2** (drill not finished: 14 items, 0 first-try; language and loop design faults). Kept as the record |
| `U64_ReviewNote_FractionOperationChoice.md` | Two strikes on fraction-of-an-amount operation choice; Lui's 3 Oct request treated as the review authorising U65. | Open — no 4th version |
| `Review_Note_CircularArrangements.md` | Circular arrangements retired from the Recall rotation after a third (n-1)! regression at U61 Q15. Decision handed to Lui. | Open — awaiting Lui |
| `U61_Lesson_Error_Report.md` | The 18 Sep lesson audit: all six defects, root cause, fixes. Background for §11. | Reference — resolved 19 Sep |
| `verify_lesson_pack.py` | **Delivery gate.** Recomputes every lesson answer from its printed question; checks option coverage, fraction notation, SVG arcs, lesson-vs-test reuse. Extended 21 Sep 2026 with F-BARMODEL (bar-diagram pixel-vs-caption) and G-MIXEDFORM (mixed-number top<bottom) for U62 — both validated against a deliberate known-bad input before being trusted. Block-scoping bug fixed 19 Sep (splits were unbounded past the next `<div class="navrow">`, causing 2 false B-SELFCONSISTENCY fails on genuinely-correct fixed content — see script comment). | **Must print `RESULT: PASS` before any lesson pack ships — confirmed PASS on U61 19 Sep, on U62 21 Sep** |
| `Cycle_07_Build_Plan_U61-U71.md` | **Units 61–71 + M7.** Chapter Blocks over 5A Ch.3–6 plus U70(old)/U71(new) Statistics. Holds the standing cycle-7 rule overrides that every unit plan inherits. **Renamed from `..._U61-U70.md` 21 Sep 2026** per the §12 renumbering; carries a supersession notice at the top mapping its old in-body unit numbers (U62 onward) to the current ones — the body itself has not been rewritten number-by-number yet. | Active — the umbrella plan, in-body renumber still outstanding |
| `M6_Build_Plan.md` | Milestone 6 (Units 51–60). | **Done — sat, graded 12/20 verified (marked 11/20).** Analysis folded into the U61 plan |
| `Extra_Test_Plan_PEMDAS_WordProblems.md` | Ch.2 PEMDAS school-test prep, 20Q two-part. Not a numbered unit. | **Done — 20/20** (Ops 8/8, Words 12/12) |
| `Y5_ActivityBook_Calibration_Standard.md` | **Standing difficulty-calibration reference for ALL future units, all subjects.** Built from the one chapter (5A Unit 3, Fractions) Lui could supply; translates its difficulty-escalation shape — not its numbers — to whatever topic is current. Basic/Intermediate = book level, Applied = harder than the book's own hardest section. Source scan backed up at `Calibration Reference\Y5_ActivityBook_Fractions_Unit3_REFERENCE.pdf`. | **Active — consult before building any unit's Applied tier** |

## Order of work
1. ~~**U62**~~ — **DONE, shipped 21 Sep 2026, result in 24 Sep 2026** (Part 1 10/12 · Recall 3/4 · independent
   · +0). All three §8 build-blocking gates resolved or carried forward.
2. ~~**U63 — Fraction × Fraction**~~ — **DONE, shipped 24 Sep 2026** per `BUILD_PLAN_MATH_U63_FractionTimesFraction.md`.
   Both delivery gates (`verify_u63_plan.py`, `verify_lesson_pack.py` + new H-AREAGRID) PASS. **Awaiting Prem's
   real sitting before the next unit is planned** — per the standing session-boundary rule, U64's Recall row
   and U65's opening screen both depend on U63's Q11/R4 results, which don't exist yet.
   **U63 RESULT (28 Sep): Part 1 6/12 · Recall 2/4 · independent · +0 · Self-Check skipped.** Mechanics 7/7; operation
   choice in stories 0/5. Strike 1 on "fraction word problems: choosing ×".
3. ~~**U64 — Fraction word problems: which operation, and OF WHAT?**~~ — **DONE, shipped 28 Sep 2026** per
   `BUILD_PLAN_MATH_U64_FractionWordProblems.md`. Both delivery gates PASS. **Awaiting Prem's real sitting** —
   if Basic Q1–Q3 is not 3/3 → Review Note, no v2 (standing two-strike rule).
4. ~~Fractions <-> Decimals~~ — **dropped from cycle 7 (28 Sep)**, taught with 5B decimals in cycle 8. No renumber.
   **U64 RESULT (3 Oct): Part 1 4/12 · Recall 1/4 · Self-Check blank · header leak.** Strike 2 → `U64_ReviewNote_FractionOperationChoice.md`.
5. ~~**U65 — Count the Pieces**~~ — **DONE, shipped 3 Oct 2026** per `BUILD_PLAN_MATH_U65_CountThePieces.md`. **Awaiting Prem's real sitting**; this is the third and final version on operation choice. The Ch.3 Stretch unit is dropped from cycle 7.
   **U65 RESULT (5 Oct): Part 1 5/12 · Recall 2/4 · Self-Check 3/5 (ready:false, 1.8 min).** Removal verbs → subtract 0/6; static → × 4/4; frame blank 17/17.
6. ~~**U66 — Part First**~~ — v1 built 5 Oct (v1.1 7 Oct); **superseded 12 Oct by v2** (`BUILD_PLAN_MATH_U66v2_TakenAndLeftOver.md`): the v1 drill was not finished (14 items, 0 first-try, 2 stars; language + loop design faults) — not a strike. v1 files are in `_retired\`.
6b. **U66 v2.1 — Taken piece & Left-over piece** — v2.0 built 12 Oct; **v2.1 plan 12 Oct (lessons + Star Path only; test unchanged).** **v2.1 BUILT 12 Oct.** NEXT: Prem: Lesson 1 (jump to the map) → Set A → Lesson 2 → Set B → paper with `PIECE-66`. Pass = Part 1 ≥10/12 AND Q12(a) explained. Then 'as far as / as many as'; then Area of Triangles.
6c. **U67 v2.1** — DONE 15 Oct: 9/12 (Q9 ✓). 6d. **U68 — Left Part Done Right** — plan 16 Oct, **NEXT: build.** Then U69 Bigger Stories (outline); then 'as far as / as many as'; then Area of Triangles.

**STANDING (3 Oct 2026):** (a) Part-1 headers are exactly `Q<n> · Word Problem`; never print an operation or method.
(b) The Self-Check saves `MATH_U0NN_SelfCheck_<date>_a<n>.json` to `Lessons\SelfCheck Results\` on Google Drive; analyse
reads it; no file means not done. (c) Stop probing decayed skills without a re-teach (sequences find-n and largest common multiple
are retired from Recall pending Lui).

**STANDING (Lui, 28 Sep 2026):** (a) Prem always sits papers alone. Never ask about provenance again; Lui helps
only on a 2nd/3rd revision and will say so. (b) The Self-Check is compulsory before every test; every test header
carries `Self-Check score: __ / 5`.

**CYCLE 7 RENUMBERED AGAIN 24 Sep 2026 (#2): everything from the old U63 onward shifts +1 once more. Cycle 7 now
runs U61–U72; M7 fires after U72 and covers U61–U72.** Mapping in the U63 plan §11. Schedule slide (~1 week)
flagged to Lui with three options; default is to accept it.

**CYCLE 7 RENUMBERED 20 Sep, applied 21 Sep — everything from the old U63 onward shifts +1. Cycle 7 now runs
U61-U71; M7 fires after U71 and covers U61-U71.** Full mapping in the U62 plan §12. `Cycle_07_Build_Plan_U61-U70.md`
has been renamed to `Cycle_07_Build_Plan_U61-U71.md` and carries a supersession notice mapping its stale in-body
unit numbers (U62 onward) to the current ones; the body itself has not been rewritten number-by-number — do that
on its next substantive touch, or before U66/Block C if it hasn't happened by then.

**Provenance note:** U61 was UNCONFIRMED independent when this index was last touched before 21 Sep — **now
CONFIRMED independent, per Lui's direct answer this session.**

## Live findings the next plan must carry
- **Self-Check is now COMPULSORY before every test, standing from U64 (Lui, 28 Sep 2026).** Every test header
  carries a new `Self-Check score: ___ / 5` line, printed on the header alongside Part 1 Score and Recall
  Score. U63 shipped without Prem taking the Self-Check first, and Self-Check item 2 would have caught exactly
  the gap the real paper then exposed. On the index page, the Self-Check card sits directly before the test
  link, labelled "Step 3 of 4 — compulsory".
- **Two-part qRow answers (Answer (a) / Answer (b)) now get one blank paragraph row between them, standing
  from 25 Sep 2026 (Lui).** Baked into `build_unit_test_TEMPLATE.js`'s `qRow(..., twoAnswers, extraContent)`
  signature — pass `twoAnswers:true` rather than hand-rolling the two-answer paragraphs per unit. See
  `docx_template.md` §5.
- **Difficulty calibration standard, all future units (Lui, 21 Sep 2026): Basic/Intermediate = the school
  activity book's own level; Applied must be HARDER than the book's own hardest regular material, not merely
  avoid duplicating it.** Lui supplied one chapter (5A Unit 3, Fractions) as the standing structural reference
  for every future unit, since he can't supply book pages for every chapter — use
  `Y5_ActivityBook_Calibration_Standard.md`'s 4-point checklist (chain 2–3 ops / reverse-solve 2+ layers /
  withhold a value to derive / cross-link strands) to build every future Applied tier, translating the book's
  difficulty SHAPE to whatever topic is current when no chapter-specific book exists. **Retroactive check: U61
  and U62's Applied tiers both fall short of this sharper bar** (they use at most one of the four moves; the
  book's own hardest items routinely use two or three) — apply the corrected standard from U63 onward, not
  retroactively.
- **ASMOPSS 2026 OFFICIAL result announced 21 Sep 2026: 60.50/100** (was self-graded 50/100 same-day,
  now corrected — T-score 66.11, percentile 92.08, rank 303/3,941 nationally). **Official strand split names
  Statistics & Probability the weakest curriculum area (44.74%)** — despite its own unit test (U55) scoring
  93% — the clearest evidence yet that it needs spiral-maintenance treatment, not just its one U55 exposure.
  Measurement & Geometry is the strongest strand (81.63%). Full reconciliation, including two self-grading
  corrections (Q20, Q23 both flip to correct), in `ASMOPSS_Prep_Executive_Summary.md`. **Weigh this against
  U70/U71's existing Statistics re-tier slot in `Cycle_07_Build_Plan_U61-U71.md` when that unit is next planned
  — the case for it just got stronger, and it may be worth moving earlier rather than waiting for its
  scheduled slot.**
- **M6 Q9 correct, clean, uncoached — the derivation-depth standard is VALIDATED.** U64 Lesson 2
  builds the algebraic route as planned.
- **Applied is not the weak tier.** Applied on current content 12/12 (PEMDAS); on mixed cumulative
  content 3/6 (M6). Intermediate came in at 83%, not the 40% ASMOPSS predicted. The real gap is
  **retention of old material on mixed papers** — which is what the scored Recall Round exists for.
- **The U57 counting probe came back blank.** Brick 1 did not survive; that track resets fully
  whenever it reopens.
- **Kangaroo fell 4/5 (M3) → 1/5 (M6)** and nothing in cycle 7 currently rebuilds it. Flagged to
  Lui for a decision — see §10 of the U61 plan.
- **Second marking discrepancy on record** (M6: 12 ticks, 11 written; U60 Q15 was the first).
  Re-add the printed marks on every paper rather than trusting the total.
- **Kangaroo settled 12 Sep (Lui): the 5-question milestone block stays**, but from M7 its items are written on
  the cycle's own content (fractions, ratio, volume, statistics) rather than unrelated puzzle topics. No Recall
  slots are spent on it and no separate warm-up sheet is built.
- **Working rows corrected 18 Sep 2026 (Lui caught it): every qRow uses 7 ruled lines, effective U56 onward —
  standing rule, not 2–3.** `Cycle_07_Build_Plan_U61-U70.md` §3.3 briefly said 2 rows for the new 16Q format;
  that was a slip, now fixed. U61 shipped at 2 rows and stays as-built (one-off, not reprinted). U62 onward:
  build at 7 rows and expect the page count to run longer than 3+1 — verify the actual render, don't force it
  back down.
- **A docx question row containing a nested diagram table must set `cantSplit: true` on the row, and the
  diagram must live INSIDE the question cell, not as a trailing table after it (found and fixed 24 Sep 2026,
  U63 Q3).** Built first as a separate table below the qRow: LibreOffice split the row across the page break,
  squeezing the question column to a sliver and separating the diagram from its own Answer line. Fixed by
  passing the diagram content into `qRow`'s new `extraContent` parameter (rendered inside column 2, after the
  question body, before the Answer lines) and adding `cantSplit: true` to every qRow's `TableRow`. Always
  render-check any test with an in-question diagram, not just the answer key page.
- **`verify_u63_plan.py`-style prior-reuse scripts must self-exclude the artefact they are currently building
  (found and fixed 24 Sep 2026, U63).** The docx corpus glob had no exclusion for the just-built test file
  (the .html glob already excluded the U63 lesson files, but the .docx glob was missed) — once
  `Unit_063_Test_FractionTimesFraction.docx` existed on disk, the script flagged all 17 of its own operand
  pairs as "prior reuse" against itself. Any future per-unit verify script copied from this one should carry
  the same self-exclusion pattern for whatever file it is about to produce.

## Workflow — three steps, changed 12 Sep 2026
1. Test comes back → **`analyze-done-unit-test` (Sonnet)** writes `TEST_RECORD_<test-id>.md` here: one row per
   question with what he wrote, what was correct, marked-vs-verified, and **what the working physically shows**.
   Observations only — no recommendations, no next-unit suggestions.
2. **`create-build-plan` (Opus)** diagnoses from that record and writes the plan. It opens the raw paper only for
   a milestone, a surprising result, an ambiguous record, or a missing one.
3. **`create-new-test-pack` (Sonnet)** builds exactly what the plan pins.

*Why:* both models were diagnosing the same paper and one copy was always discarded. The cheap model now reads
the paper once and transcribes it; the expensive model reasons from the transcript.

## U61 RESULT — 20 Sep — Part 1 9/12 clean (10/12 at face value) · Recall 0/4

Tier split **Basic 3/3 · Intermediate 3/5 · Applied 3/4**. Provenance **CONFIRMED independent** (Lui, 21 Sep
2026 — was the U62 build-blocking gate, now resolved). Chapter distance +0.

**The Part-1 gap is one sub-skill, not the chapter.** Q5 (11 m ribbon / 4) and Q10 (18 m rope / 4) are the
only two questions requiring improper -> mixed number, and **both were abandoned with a "?" and no working** —
not wrong answers. Q8 (6 cakes / 8 children -> 3/4) was correct, so fraction-as-division is intact.

**Fraction of a set is NOT the gap. Applied came back 3/4 with working shown** — Q9 (three-step), Q11 (the
NOT inversion, 9 -> 12 -> 3) and **Q12, the reverse-then-forward capstone (42/3 = 14 -> 28)**, all cold, all
correct, all from lessons that were defective. Re-teaching this content would be the wrong move.

**Reverse fraction-of-a-set is VALIDATED** (U61 Q12). Per the U61 decision table, U64 (old U63) goes straight
to remainder chains and does not open on reverse problems.

**Recall Round 0/4 is the real collapse — and it is old content, not U61 content.** Three of the four carry
no working at all; Q16 found a valid common multiple (936) but not the largest (972), which is a
finish-the-question failure, not a divisibility one. The Round sat LAST on the paper, after 12 questions of
new work. **U62 moves it to the FRONT** so the next sitting separates decay from fatigue.

**Q15 circular arrangements — third regression. RETIRED from the Recall rotation** per the decision table;
its U65 slot is released. See `Review_Note_CircularArrangements.md`.

**DELIVERY FAILURE — Prem sat the PRE-revision paper.** Printed Q6 reads "5/6 of a number is 25" — the
version REVISION 2 §11.5 ordered swapped on 19 Sep because it duplicated the defective Lesson 1 worked
example verbatim. He wrote 30, the number the broken lesson printed. The swap reached the source file; the
print that reached him was the old one. **Q6 is unusable.** New standing rule (U62 §10.3): *a revision has
not shipped until the artefact Prem receives is the revised one.*

**`TEST_RECORD_U61.md` anomaly #1 is WRONG and has been struck.** `Done - Unit_060_Test_AreaOfTriangles.pdf`
is correctly named — it is the U60 Retest, 13/15 (COACHED), header verified. The U61 paper is correctly filed
as `Done - Unit_061_Test_Fractions_SetAndDivision.pdf`. No rename needed. The record's per-question data was
independently re-verified page by page and is accurate.

## Standing notes for the executor
- The plan is the specification. Build what it pins; **flag anything that looks wrong to Lui
  rather than silently changing it.**
- A plan's exclusions are as binding as its inclusions.
- One unit per session — a later unit's Recall questions depend on misses that do not exist yet.
- Record with every score: whether it was **coached**, open-book or independent, and the unit's
  distance from Prem's live school chapter.
- **Lesson content is pinned and verified like test content, and `verify_lesson_pack.py` must print
  `RESULT: PASS` before delivery — paste its output, don't claim it.** U61 v1 is why: the test half was pinned
  and came back flawless; the lesson half was described in prose and came back with six defects.
- **Diagrams that assert a quantity are checked mechanically, not by eye.** Three consecutive units have now
  shipped a diagram whose pixels contradicted its label (U60's 5x5 grid, U61's "half" cake wedge). U62 adds
  `F-BARMODEL` to `verify_lesson_pack.py`: count drawn segments and shaded segments, compare against the
  fraction in that bar's own label.
- **An abandoned question is recorded as abandoned, never as wrong.** U61 Q5, Q10 and Q14 were blanks with
  question marks; reading them as errors points the diagnosis at entirely the wrong skill.
- **A revision has not shipped until the artefact Prem receives is the revised one** (U61 Q6 — see above).


**STANDING (Lui, 5 Oct 2026):** don't move on from a topic until Prem passes 80% AND shows he understands (an explain item). This overrides the 'no fourth version' cap; the two-strike discipline still governs HOW the design changes (one named variable per pass, fresh numbers otherwise). New standard pack shape from U66: tap-gated decisions + a mastery drill (10 in a row, with a code word) instead of an advisory Self-Check; no code on the paper means the paper isn't a measurement.

**STANDING (Lui, 7 Oct 2026): coaching must be motivating.** Progress never resets; start every sitting on a win; praise the move he made; say 'not yet', never 'wrong'; short sittings that end on a success; celebrate mastery. U66 plan §3.6 holds the rules. U66 v1.1 needs the executor to rebuild `U66_Drill_PartOrLeft.html` (Star Path), the index label and the test's Recall order before Prem starts.

**12 Oct 2026 (Lui):** child-facing language must be plain kid words tied to a picture (taken piece / left-over piece / told / work it out). No grammar-style labels or abstract checklists. When a skill keeps failing, offer a lower-tier foundation step (e.g. whole numbers before fractions).


**STANDING (Lui, 12 Oct 2026): first step + line by line + practice ≠ test.** (1) Every lesson that teaches a calculation method gives Prem a **First-Step Map** (a yes/no decision tree from the story's words to the first written line), on screen and as a printable card — the bar shows *what* the story is, the map shows *what to write first*. (2) 'One micro-step per line' (coaching_rules.md) is now **gate-enforced**: the planner pins every worked line with its reason in a JSON, the gate checks one '=' + one operation sign + a reason + true arithmetic per line and must catch planted bad lines; the executor copies lines verbatim. (3) Practice tools support the lessons; they are never a second test. No all-right gates, no Boss rounds; a miss shows the working and moves on; finishing (not perfection) unlocks the test code. The docx paper is the only measurement.

**STANDING (Lui + planner, 13 Oct 2026):** (1) Nothing goes on a test that the lessons/practice did not practise — gate T-PRACTISED (each test item kind ≥2 exposures). (2) Practice answer lines use the question's own words, and swapped answers are 'not yet' with a named message; on papers a swap scores 0 (Lui: wrong is wrong). (3) Map taps that the data shows are busywork get dropped. (4) Decayed Recall items get a one-screen Memory Boost before the next probe, never a bare third probe.

**STANDING (Lui, 14 Oct 2026) — unit shape from U67 v2.0 on:** ONE lesson per unit (≤6 screens, ONE idea) with 'Your turn' ×5 built into the last screen (not-yet → line-by-line working → he types the answer → ✨), saving after every item and resuming where he stopped; then the docx test, which is the only measurement. No separate Star Path, no unlock code, no second practice file. Bigger topics split into more units rather than more lessons. Last plans under the old two-lesson + Star Path convention: U66 v2.1 and U67 v1.0.

**STANDING (Lui, 15 Oct 2026) — the Fraction Formula Card:** ① taken part = fraction × whole (told? no ×) · ② left part = whole − taken part · ③ 'of what was LEFT' → new whole; HOW TO × (×0 improper, ×1 top×top/bottom×bottom, ×2 simplify) · HOW TO − (−0 improper, −1 same bottoms, −2 top−top, −3 simplify). Helpers live INSIDE the lesson as an always-available panel (never separate pages); every worked line carries its card-step tag. Card code is reusable between FORMULA-CARD START/END markers.
