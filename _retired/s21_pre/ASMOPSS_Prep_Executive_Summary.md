# ASMOPSS 2026 — Gold Push Executive Summary

**Chusaki Math Coaching | Started: 23 Jun 2026**

## The Goal
- **Competition:** ASMOPSS 2026 (Asian Science & Maths Olympiad, Primary) — Mathematics, Grade 4.
- **Test date:** Sunday **9 Aug 2026** (registered 22 Jun). **≈ 7 weeks away.**
- **Last year:** Bronze medal. **This year's aim: GOLD.**
- **Prep track:** From U31 onward, units shift to ASMOPSS focus. Prem also works 6 past ASMOPSS papers (2022–2025) for ongoing gap analysis.

---

## School-Curriculum Pivot — U57 HELD, U58–U62 Redirected (27 Aug 2026)

**Context.** Prem started Year 5 at school. Lui shared his first real school assessment of the year — `Test 1 – Whole Numbers` (St. Marks Australian International School, sat 21 Aug 2026) — plus the textbook driving his school maths, `Shaping Maths Activity Book 5A` (Marshall Cavendish, 3rd edition). This triggered two decisions.

**1. U57 (Art of Counting Brick 2/3 remediation) is HELD.** Brick 2 had already been rebuilt once into a fully interactive "pick 3 counters" game — a jar/pool click mechanic across 4 rounds plus a combine round, with the ÷6 step shown via a live-generated 6-permutation display of the student's own picks rather than generic dots or text — directly responding to Lui's feedback that the previous version was "he does nothing, just clicks play each round and then gets points." The redesign is built and fully verified (headless simulation across every screen/round). But Lui's judgment, seeing the topic across two redesigns now, is that it's still too hard for Prem at this time. Rather than force a third redesign immediately, **the whole Brick 2/3 track is paused and shelved for a later return** — nothing is deleted, and it resumes (renumbered) whenever Lui says so.

**2. U58–U62 are redirected to Prem's real school curriculum, replacing the previously-planned Statistics & Probability II / Finish-The-Question Checkpoint / Statistics & Probability III / Cumulative Consolidation sequence** (that sequence is deferred, not cancelled — it resumes after this sprint). The new plan:

- **U58 = Fractions** (Shaping Maths Ch.3 — mixed-number addition/subtraction, fraction of a set, product of proper/improper fractions, mixed number × whole number, fraction as division, fractions ↔ decimals, word problems). First, since whole numbers was just freshly tested at school. **Result (29 Aug 2026): 15/15 (100%), PERFECT — see full write-up below.**
- **U59 = Order of Operations (PEMDAS)** (Ch.2 sub-topic — Parentheses → Exponents → Multiply/Divide → Add/Subtract) — **refined 27 Aug 2026**: originally planned as a broader "Whole Numbers Recap (Ch.1-2)," changed after Prem reported he's currently studying PEMDAS specifically at school right now. U59 now targets that live material directly. See the school-exam analysis directly below for the precision/finish-the-question emphasis this unit should still carry. **Result (29 Aug 2026): 14/15 (93%), PASSED — one isolated nested-bracket-scoping miss, see full write-up below.**
- **U60 = Area of Triangles** (Ch.4 — base & height, finding area). Two lessons (Half-Rectangle Rule; Missing Piece & Composite Figures) plus a 15Q test weighted Intermediate/Applied. **1st attempt (3 Sep 2026): 8/15 verified, NOT PASSED — Lesson 2's algebra-rearrangement screen was too compressed, causing a total non-attempt on all 4 reverse-formula questions.** Lesson 2 is being revamped and the test rebuilt from scratch for a retest before M6. **M6 still fires directly after U60 clears**, exactly as already planned.
- **U61 = Ratio** (Ch.5 — finding ratio, equivalent ratios, comparing three quantities).
- **U62 = Volume** (Ch.6 — cubic units, isometric drawing, volume of a cuboid, litres/mL/cm³, word problems).

All five units are weighted toward **Intermediate and Applied** ISA difficulty tiers rather than Basic-tier drilling — Prem doesn't need remedial basics on material his school is actively and successfully teaching him — and none of them reuse a question or number set from an earlier unit.

### School Exam Analysis — Test 1: Whole Numbers, Year 5 (sat 21 Aug 2026)

**Score: 47 / 50 (94%).** A strong, near-mastery result covering Shaping Maths Chapters 1–2 (place value, the four operations, order of operations, word problems on whole numbers). This is the baseline U59 should be built against.

Independently re-verified (manual arithmetic re-check across the paper, plus one Python brute-force permutation check on a min/max digit-arrangement question) rather than taken at face value. The ~3 lost marks do not point to a conceptual gap anywhere in Chapters 1–2 — they trace to **precision/transcription slips**: correct method and correct working, with the final written answer incomplete, miscarried, or not fully matching what the question actually asked. This is the exact same failure shape already tracked as standing infrastructure in the coaching rules (the "finish the question" checkpoint, active since U54) — not a new problem, just a fresh, real-world confirmation of the existing one.

**Implication for U59:** this exam confirms Prem doesn't need a basic re-teach of Chapter 1-2 whole-number computation — so with U59 now refined to PEMDAS specifically (Prem's actual live school material, not a general recap), the unit should still be built at Intermediate/Applied density with explicit emphasis on finishing the exact question asked (multi-step PEMDAS expressions are exactly where a dropped final step costs marks), rather than basic single-operation drilling.

---

## Post-ASMOPSS Roadmap — U54–U61 (Cycle 6+7 boundary) & Milestone 6 (added 10 Aug 2026; renumbered 20 Aug 2026; milestone boundary reset 20 Aug 2026; superseded from U58 onward by the 27 Aug 2026 school-curriculum pivot above — U54–U57 history below stays accurate, U58–U61 bullets below are historical/superseded)

**Context.** ASMOPSS 2026 was sat 9 Aug 2026 (scored 50/100 — see the real-exam write-up below). The programme now reverts from ASMOPSS-prep mode to standard ISA 2027 cadence: the mixed-paper on-topic exception ends with U53, and milestones return to the pre-ASMOPSS 20-question format (15 ISA-style + Q16–20 Kangaroo) starting at M6. Cycle 6 began at U51 (post-M5); U51–53 were the ASMOPSS final stretch, so **U54–U60 complete cycle 6, with M6 landing after U60 as originally planned** (see milestone-boundary note directly below). U61 opens cycle 7 and will be cross-checked at M7 instead.

**Renumbering note (20 Aug 2026).** U56's Multi-Constraint Counting lesson needed to be split into 2-3 shorter "brick" lessons after its 2nd-attempt result (6/15) showed the single-file revision was unlearnable (see U56 write-ups below). Following project precedent (remediation always takes the next sequential unit number — U40→U41, U49→U50, U47→U48, U44→U45), Brick 2, Brick 3, and the resulting retest are numbered **U57** rather than reusing U56. Everything originally slated from U57 onward shifts back by one unit: S&P II → U58, Finish-The-Question Checkpoint → U59, S&P III → U60, Cumulative Consolidation → U61.

**Milestone-boundary note (20 Aug 2026, supersedes the "M6 after U61" line above).** M6 reverts to firing right after **U60** as originally planned — Lui's call: M6 should test whatever's actually been covered across U51–U60, not wait on U61. U61 (Cumulative Mixed Consolidation) still exists as a unit, but its cross-check role shifts to **M7** instead of gating M6.

**Coaching-process review (10 Aug 2026, Lui's request).** Comparing unit-test performance against real-exam performance surfaced one root cause behind most of ASMOPSS 2026's losses: skills marked "resolved" got zero further exposure and quietly decayed under real, mixed-paper conditions — confirmed independently on circular arrangements (closed U43 → regressed M4 → regressed again M5), remainders (closed U34, untouched 6 weeks → failed real-exam Q10), and "Finish Line Check" (taught U44, validated U45 → never reinforced → identical failure resurfaced on real-exam Q2/Q10/Q20). A second finding: "orange" (below-target) skills like Logic, Geometry, and Applied Problems held up fine on the real exam because they're the vehicle skill inside nearly every unit's word problems (free spiral repetition); "green" skills like Number Theory and Art of Counting broke down because each got one intensive unit, went green, then went quiet. Standing rules adopted from U54 onward (also written into the `create-new-test-pack` skill's new Math-Specific Coaching Protocol, 10 Aug 2026): spiral maintenance warm-ups every unit test, "finish the exact question" as permanent scored infrastructure (not a one-off lesson), density-upgraded practice once a skill goes green, and tier-level (Basic/Intermediate/Applied) tracking from M6 onward. Full detail in the coaching-rules project memory.

**New 9th radar skill: Statistics & Probability.** Missing from the original 8-skill rotation entirely — and confirmed the weakest ASMOPSS strand on both the 2025 report (13.16%) and the real 2026 exam (9%, own classification). Coached basic → applied across U55/U58/U60 below (renumbered 20 Aug 2026 — U57 now hosts Art of Counting remediation instead), then folds into the spiral maintenance rotation once it first passes, so it doesn't repeat the Number Theory/Counting decay pattern.

**The plan:**

- **U54 — 3D Spatial Reasoning, New Method (built 10 Aug 2026).** The single highest-leverage open gap — failed at U49, worse at U50, missed again on the real exam (Q23). Two same-framing re-teaches (corner/edge/face/inside formulas) already failed, so this uses a genuinely different method: `Spatial_Lesson_FloorByFloorGridCount.html` reframes a painted box as a stack of flat 2D grids and counts painted faces via Prem's already-proven grid/rectangle-counting skill, instead of any algebraic formula set. Test includes a 1-question ungraded spiral-maintenance warm-up on Remainders (closed since U34, untouched 6+ weeks) and the new standing finish-the-question instruction line. Result pending.
- **U55 — Statistics & Probability I (Basic).** Ground-zero intro: chance/likelihood, probability as a fraction, equally-likely outcomes. Launches the new radar skill.
- **U56 — Art of Counting, Harder Tier.** C(n,3)-style "any 3 points" combinations + multi-constraint counting (the real-exam Q19 pattern) — the natural next step after U53's circular/combinations-backward work, deliberately built at real-exam density rather than eased in, since that's specifically where this skill broke down before (M4/M5 Round 3, real-exam Q13/Q15/Q19). **Status: remediation in progress** — Lesson 2 (Multi-Constraint Counting / Total-Minus-Bad) is being rebuilt as 2-3 shorter "brick" lessons after the 2nd-attempt result exposed a teach/test failure (see write-ups below). Brick 1 shipped 17 Aug 2026 and validated on the 3rd attempt (10/15). Bricks 2-3 and the retest are tracked under **U57** (see renumbering note above).
- **U57 — Art of Counting Remediation: Bricks 2-3 + Retest (added 20 Aug 2026, takes the next sequential unit number per project precedent).** Brick 2: multi-case bad + the "fewer than needed = write 0" edge case (targets 3rd-attempt Q13, marbles/not-all-same). Brick 3: new points/triangles context + reverse-solve/capstone questions (targets 3rd-attempt Q10, Q12, Q15). Once both bricks ship, a retest with entirely fresh numbers (not reusing Q10/Q12/Q13/Q15's seen numbers).
- **U58 — Statistics & Probability II (Applied: Data).** Bar charts/pictograms through to compound, multi-clue questions, plus mean/median/mode. Built at intermediate-tier density since that's exactly where real-exam data questions (Q20) broke down — right numbers, unfinished final step.
- **U59 — Finish-The-Question Checkpoint.** Scored diagnostic on whether the standing finish-the-question instruction (running since U54) has actually closed the gap that's recurred since U44–45 and hit three tiers on the real exam (Q2, Q10, Q20). If it has, this slot converts to extra Statistics & Probability practice instead of a new lesson.
- **U60 — Statistics & Probability III (Applied: Probability + Counting).** Compound events, systematic outcome-listing — pushes the new strand to applied level and ties it back into Art of Counting, tested at intermediate/hard density from the start.
- **Milestone 6 (after U60).** Reverts to the standard 20-question ISA + Kangaroo format, covering whatever's been taught across U51–U60. First milestone to report results by difficulty tier (Basic/Intermediate/Applied) as well as by topic, per the new standing rule.
- **U61 — Cumulative Mixed Consolidation (opens Cycle 7, cross-checked at M7 instead of M6).** ISA-style mixed paper, deliberately weighted toward intermediate-difficulty (two-step) questions across all skills — the real exam's tier collapse was concentrated at Intermediate (45/100 marks, scored 40%) — plus a full maintenance sweep across every green skill before M7.

---

## Unit 54 — Real Result & Analysis (graded 12 Aug 2026)

**Score: 11 / 15 (73%) — NOT PASSED.** First test under the new floor-by-floor grid-count method for 3D painted-cube problems, and the first test run under the new post-ASMOPSS coaching protocol (spiral warm-up + finish-the-question infrastructure).

**Warm-Up (ungraded, spiral maintenance — Remainders, closed since U34, untouched 6+ weeks):** 59 ✓ — no decay on this skill.

| Q | Section | Question | Answer key | Prem wrote | Result |
|---|---------|----------|-----------|-------------|--------|
| Q1 | A — Basic | 3×3×3, corners | 8 | 8 | ✓ |
| Q2 | A — Basic | 3×3×2, inside | 0 | 0 | ✓ |
| Q3 | A — Basic | 4×3×2, faces | 4 | 4 | ✓ |
| Q4 | A — Basic | 5×3×3, edges | 20 | 20 | ✓ |
| Q5 | A — Basic | 4×4×4, inside | 8 | 4 | ✗ |
| Q6 | B — Intermediate | 7×4×3, (1-face − 2-face) | 2 | *(blank)* | ✗ |
| Q7 | B — Intermediate | 5×4×2, at-least-2 | 28 | 28 | ✓ |
| Q8 | B — Intermediate | 6×3×2, at-most-1 | 8 | 8 | ✓ |
| Q9 | B — Intermediate | 5×5×3, (edges − inside) | 19 | 19 (shown as "28−9=19") | ✓ |
| Q10 | B — Intermediate | 6×5×4, fraction hidden | 1/5 | 1/5 | ✓ |
| Q11 | C — Hard/Capstone | 3×3×3, all four counts | 8, 12, 6, 1 (sum 27) | 8, 12, 6, 1 | ✓ |
| Q12 | C — Hard/Capstone | 7×4×3, fraction 1-face | 17/42 | 34 | ✗ |
| Q13 | C — Hard/Capstone | 8×4×3, edges | 36 | 36 | ✓ |
| Q14 | C — Hard/Capstone | 6×6×3, (inside + 1-face) | 64 | 768 | ✗ |
| Q15 | C — Hard/Capstone | Reverse capstone, total & height | 60, 4 | 60, 4 | ✓ |

**What this tells us — two distinct failure types, not one.**

The floor-by-floor method itself is working: 11 of the 12 questions that tested pure floor-by-floor mechanics were correct, including the two hardest capstone questions (Q11's four-way count, Q15's reverse problem). The four misses split cleanly into a one-off conceptual gap and a cluster of precision slips — a genuinely different, more encouraging profile than U49/U50's across-the-board method failures.

Q5 is a coverage gap, not a method failure. 4×4×4 is the first box in the whole unit with *two* middle floors, and every worked example in the lesson only ever showed one. Prem's answer of 4 is exactly what you get by giving the "+0 for middle floor" treatment to just one floor instead of both — he applied the rule correctly, just to an edge case the lesson never demonstrated.

Q6, Q12, and Q14 are three separate instances of the same "finish the exact question" gap the 10 Aug coaching review flagged as the root cause behind ASMOPSS 2026's Intermediate-tier collapse — already showing up again one test later, right on schedule. Q6 was abandoned blank on a two-count-then-subtract question, despite Q9 — a near-identical same-section question — being answered correctly minutes later, which points to a confidence dip on that specific question rather than a skill gap. Q12 shows the raw count was computed correctly (34) but never converted into the simplified fraction the question explicitly asked for in capital letters ("FRACTION (simplest form)"). Q14 shows both intermediate values (16, 48) correctly derived in the working column, then combined with × instead of + in the final step.

**Recommended next steps:**
- Before U55, a single top-up question (not a full lesson) on a box with 2+ middle floors (e.g. 5×5×5) to close the Q5 edge case — the method is sound, it just needs that one case demonstrated once.
- Keep finish-the-question as scored infrastructure through U55, with specific emphasis on "does my answer's *form* match what was asked" (count vs. simplified fraction), given Q12.
- No separate fix needed for Q6 — treat as a confidence dip (Q9 proves the underlying skill is there); a quick informal check-in is enough, not a scored remediation.
- Proceed to **U55 (Statistics & Probability I — Basic)** as already planned in the U54–U60 roadmap above. No milestone due — only 4 of 10 units into cycle 6.

---

## Unit 55 — Real Result & Analysis (graded 14 Aug 2026)

**Score: 14 / 15 (93%) — PASSED.** The strongest score of the entire U54–U60 arc so far, and a clean debut for Statistics & Probability — a topic launched from absolute zero just two days earlier.

**Warm-Up (ungraded, spiral maintenance):** W1 (Vertically Opposite Angles, closed since U20, ~10 weeks untouched) — wrote **122° instead of 58°**, confusing the vertically-opposite angle (equal, 58°) with the adjacent/supplementary angle (180−58=122°). W2 (HCF, closed since U15, ~11 weeks untouched) — **6, correct.**

| Q | Section | Question | Answer key | Prem wrote | Result |
|---|---------|----------|-----------|-------------|--------|
| Q1 | A — Basic | 5 marbles (3 red/2 blue), P(blue) | 2/5 | 2/5 | ✓ |
| Q2 | A — Basic | 6-section spinner, P(4) | 1/6 | 1/6 | ✓ |
| Q3 | A — Basic | 10 sweets (4y/6g), P(yellow) simplest | 2/5 | 2/5 | ✓ |
| Q4 | A — Basic | Die, P(even) | 1/2 | 1/2 | ✓ |
| Q5 | A — Basic | 8 balls (5 blue), P(not blue) | 3/8 | 3/8 | ✓ |
| Q6 | B — Intermediate | 12 candies, P(orange) simplest | 5/12 | 5/12 | ✓ |
| Q7 | B — Intermediate | 10 cards, P(>7) | 3/10 | 3/10 | ✓ |
| Q8 | B — Intermediate | 20 marbles, P(blue)−P(red) | 1/5 | 1/5 | ✓ |
| Q9 | B — Intermediate | 15 tickets, P(not winning) | 14/15 | 14/15 | ✓ |
| Q10 | B — Intermediate | Die, P(multiple of 3) | 1/3 | 1/3 | ✓ |
| Q11 | C — Hard/Capstone | 24 marbles, P(red)=1/3, red count | 8 | 8 | ✓ |
| Q12 | C — Hard/Capstone | 10 pens, P(black)=2/5, P(blue)=3/10, red **count** | 3 | 3/10 | ✗ |
| Q13 | C — Hard/Capstone | 18 sweets, P(lemon)=5/9, strawberry count | 8 | 8 | ✓ |
| Q14 | C — Hard/Capstone | 1–20, P(mult of 4 OR 5) simplest | 2/5 | 2/5 | ✓ |
| Q15 | C — Hard/Capstone | 30 marbles, green count & P(green) | (a) 12 (b) 2/5 | (a) 12 (b) 2/5 | ✓ |

**Sec A 5/5 PERFECT · Sec B 5/5 PERFECT · Sec C 4/5 — 14/15 (93%) PASSED.**

**What this tells us.**

The new topic landed cleanly on first real exposure — favourable÷total, equally-likely outcomes, simplifying, and the "NOT" complement rule were all applied correctly across 13 of 15 questions on the very first probability test Prem has ever sat, including every intermediate-tier question and 4 of 5 hard/capstone questions.

Q12 is the one miss, and it's a striking, precise mirror of U54's Q12 — the exact same question number, the exact same failure family, in the opposite direction. U54 Q12 asked for a FRACTION and Prem gave the raw COUNT; U55 Q12 asked for a COUNT ("How many pens are RED?") and Prem gave the FRACTION (3/10) instead of converting it to the count (3). The method was entirely correct — he correctly worked out black=4, blue=3, and therefore red is 3/10 of the pens — he simply never took the last step of multiplying that fraction back into a whole-number count of pens. Two tests running, the same "finish the exact question" gap has now surfaced on both sides of the same fraction/count distinction — this reads less like a one-off precision slip and more like a genuine discrimination gap between "the probability of X" and "the number of X," which is worth naming explicitly rather than folding into a generic precision reminder.

The warm-up miss (W1, vertically opposite angles) is a clean, low-stakes confirmation that the spiral-maintenance protocol is doing its job: a skill untouched for ~10 weeks decayed exactly as the 10 Aug coaching review predicted, and it surfaced on an ungraded warm-up instead of costing marks on a real assessment. No urgency here — it did exactly what it was designed to do.

**Recommended next steps:**
- Proceed to **U56 (Art of Counting, harder tier)** as planned — no retest needed, comfortably passed.
- Add an explicit "is the question asking for a PROBABILITY (fraction) or a COUNT (whole number)?" check to the standing finish-the-question infrastructure from U56 onward — this is now a 2-for-2 pattern (U54 Q12, U55 Q12) worth naming directly rather than leaving as a generic reminder.
- Per the standing plan, **add Statistics & Probability as the 9th radar skill when building U56** (skills[], radarCurrent/radarTarget/radarBaseline in prem_data.js), seeded from this 14/15 result — a strong opening baseline for the new skill.
- Vertically Opposite Angles goes back into the spiral-maintenance queue for a future warm-up — not urgent (ungraded, caught early), but now confirmed live-decayed rather than just "old."

---

## Unit 56 — Real Result & Analysis (graded 17 Aug 2026) — 2nd attempt, post lesson-revision

**Score: 6 / 15 (40%) — NOT PASSED.** This is Prem's **second** attempt at U56. The first attempt (before this test existed in its current form) scored 7/15. Between attempts, Lui had a separate model ("Opus") rewrite both lessons for "more detail," expecting that to make Lesson 2 easier. **It made things measurably worse: 7 → 6.** Root cause identified below — this is not a content gap, it's a lesson-design failure, and the fix is lesson-side, not more testing.

**Warm-Ups (ungraded, spiral maintenance):** W1 (Ratio, closed U18, ~11 weeks stale) — 36 ✓ correct. W2 (Path & Frame, closed U28, ~8 weeks stale) — 30 m² ✓ correct. Both fine, no decay.

| Q | Section | Skill | Answer key | Prem wrote | Result |
|---|---------|-------|-----------|-------------|--------|
| Q1 | A — Basic | Choose 3 (Lesson 1) | 10 | 10 | ✓ |
| Q2 | A — Basic | Choose 3 (Lesson 1) | 20 | 20 | ✓ |
| Q3 | A — Basic | Choose 3 (Lesson 1) | 35 | 35 | ✓ |
| Q4 | A — Basic | Choose 3 (Lesson 1) | 84 | 86 | ✗ |
| Q5 | A — Basic | Choose 3 (Lesson 1) | 10 | 10 | ✓ |
| Q6 | B — Intermediate | Choose 3 (Lesson 1) | 120 | 120 | ✓ |
| Q7 | B — Intermediate | Total Minus Bad (Lesson 2) | 100 | *(blank)* | ✗ |
| Q8 | B — Intermediate ★ | Total Minus Bad (Lesson 2) | 36 | *(blank)* | ✗ |
| Q9 | B — Intermediate ★ | Total Minus Bad (Lesson 2) | 74 | *(blank)* | ✗ |
| Q10 | B — Intermediate ★ | Total Minus Bad (Lesson 2) | 219 | *(blank)* | ✗ |
| Q11 | C — Hard ★★ | Total Minus Bad (Lesson 2) | 145 | *(blank)* | ✗ |
| Q12 | C — Hard ★★ | Total Minus Bad (Lesson 2) | 118 | *(blank)* | ✗ |
| Q13 | C — Hard ★★ | Total Minus Bad, multi-case (Lesson 2) | 205 | *(blank)* | ✗ |
| Q14 | C — Hard ★★ | Reverse Choose 3 (Lesson 1) | 7 | 7 | ✓ |
| Q15 | C — Capstone ★★ | Reverse Total Minus Bad (Lesson 2) | (a) 10 (b) 5 | *(blank)* | ✗ |

**Sec A 4/5 · Sec B 1/5 · Sec C 1/5 — 6/15 (40%) NOT PASSED.**

**What this tells us — the cleanest split we've ever seen between two lessons in the same unit.**

Every single question that draws on Lesson 1's skill (plain Choose-3, forward or reverse) was attempted, and every one of them is either correct or a transcription slip: Q1, Q2, Q3, Q5, Q6 all correct; Q14 (reverse Choose-3, arguably the hardest Lesson-1-style question on the paper) also correct; Q4's working shows 9×8×7=504 and a fully correct long division (504÷6=84) sitting right there on the page — Prem then wrote **86** on the answer line, a pure copying slip, not a method failure. **Lesson 1 (Choose 3) is holding up well on its own.**

Every single question that draws on Lesson 2's skill (Total Minus Bad, in any form — single bad-case, multi-case, or reverse) was left **completely blank**. Not wrong — blank. Q7 through Q13 and Q15, seven questions in a row, all Total-Minus-Bad, zero attempts, zero scratch working, nothing. This is not "tried and got confused" — this is "had no retrievable method to reach for." That is a materially different and more serious signal than a normal miss.

This matches what Lui and Prem both reported directly: Prem said the lesson had "too many steps to understand and remember," and Lui — reading the lesson alongside him — flagged a concrete example: the worked example breaks `7 × 6 × 5 ÷ 6 = 35` into three separate unlabeled lines (`7×6=42`, `42×5=210`, `210÷6=35`) and never says, at the point each number appears, *why* that specific number is there. A 10-year-old (and, by Lui's own account, an adult reading it cold) is left asking "why 6? why 5? why divide by 6?" with no answer on the page. The "Opus" revision **added** worked examples, two full interactive labs, an edge-case digression, and a multi-bad-case extension — expanding the lesson from 9 screens to 13 — while making the core arithmetic *less* explained, not more. More content plus less explanation is the worst possible combination for a first exposure, and the blank Section B/C is the direct, measurable result.

**This is a lesson-design failure, not a Prem failure, and not a "needs more practice" situation** — you cannot practice a method you were never actually given a reason to believe in the first place.

**Recommended next steps (in progress as of this analysis):**
- **Do not retest as-is.** A third cold attempt at the same over-long, under-explained lesson would just produce a third data point confirming what we already know.
- **Break Lesson 2 into 3 shorter "brick" lessons**, each teaching one new piece, each explaining *every* number in *every* worked example inline (not just once at the top and then assumed) — Brick 1: single bad-case only, one context (boys/girls), re-deriving Lesson 1's Choose-3 rule explicitly rather than assuming instant recall. Brick 2: multi-case bad (add several bad counts) + the "fewer than 3 = write 0" edge case. Brick 3: new contexts (points/triangles) + reverse/capstone questions, matching the original test's Sections B/C spread. Building Brick 1 now; Bricks 2–3 follow once Brick 1 is confirmed landing.
- **Rebuild the U56 test with entirely new questions** (fresh numbers and scenarios throughout, not reused from this graded attempt) so the eventual retest is a clean read, not a memorization check.
- Q4's transcription slip (504÷6=84 correctly worked, 86 written) is a "Finish Line Check" precision issue, not a content gap — worth a light verbal reminder, not remediation.
- Section A (Choose 3) does not need to be retaught — it is secure. Keep it exactly as-is.

---

## Unit 56 — Real Result & Analysis (graded 18 Aug 2026) — 3rd attempt, post Brick 1 rebuild

**Data-integrity correction (added 11 Sep 2026, per cycle7_plan.md):** this attempt was **COACHED, not an independent measure** — Lui explained U56/U57 content twice each around this attempt and Prem retained almost nothing from those explanations (part of why Brick 3 was later held). This entry originally called Brick 1 "validated" on the strength of this result; that overstated it. The 4/4 on Brick-1 content below is real on the page but is not independent evidence Brick 1 is durably learned.

**Score: 10 / 15 (67%) — NOT PASSED, but a big jump.** This is Prem's **third** attempt at U56, taken after Lesson 2 was rebuilt as Brick 1 of 3 (single bad-case only, one context, every worked-example number given its own inline reason). Trajectory across all three attempts: **7 → 6 → 10.** The dip to 6 traced directly to an over-long, under-explained lesson revision; Brick 1 more than reversed it.

**Warm-Ups (ungraded):** W1 (Divisibility) — 104 ✓ correct. W2 (Sum & Difference) — 12 ✓ correct.

| Q | Section | Skill | Answer key | Prem wrote | Result |
|---|---------|-------|-----------|-------------|--------|
| Q1 | A — Basic | Choose 3 (Lesson 1) | 20 | 20 | ✓ |
| Q2 | A — Basic | Choose 3 (Lesson 1) | 56 | 56 (crossed out an earlier attempt first) | ✓ |
| Q3 | A — Basic | Choose 3 (Lesson 1) | 120 | 120 | ✓ |
| Q4 | A — Basic | Choose 3 (Lesson 1) | 165 | 115 | ✗ |
| Q5 | A — Basic | Choose 3 (Lesson 1, subset) | 35 | 35 | ✓ |
| Q6 | B — Intermediate | Choose 3 (Lesson 1) | 84 | 84 (self-corrected en route) | ✓ |
| Q7 | B — Intermediate | Total Minus Bad, single case (Brick 1) | 64 | 64 | ✓ |
| Q8 | B — Intermediate ★ | Total Minus Bad, single case (Brick 1) | 25 | 25 | ✓ |
| Q9 | B — Intermediate ★ | Total Minus Bad, single case (Brick 1) | 49 | 49 | ✓ |
| Q10 | B — Intermediate ★ | Total Minus Bad, points-on-circle (Brick 3, not yet taught) | 164 | *(blank)* | ✗ |
| Q11 | C — Hard ★★ | Total Minus Bad, single case, bigger pool (Brick 1) | 185 | 185 | ✓ |
| Q12 | C — Hard ★★ | Total Minus Bad, points-on-circle, 2 bad (Brick 3, not yet taught) | 284 | *(blank)* | ✗ |
| Q13 | C — Hard ★★ | Total Minus Bad, multi-case colours (Brick 2, not yet taught) | 261 | *(blank)* | ✗ |
| Q14 | C — Hard ★★ | Reverse Choose 3 (Lesson 1) | 8 | 8 | ✓ |
| Q15 | C — Capstone ★★ | Reverse Total Minus Bad (Brick 3, not yet taught) | (a) 20 (b) 6 | *(blank)* | ✗ |

**Sec A 4/5 · Sec B 4/5 · Sec C 2/5 — 10/15 (67%) NOT PASSED.**

**What this tells us — Brick 1 worked exactly as designed, and the remaining gaps are exactly where it stopped teaching.**

Total Minus Bad went from **0/8 correct (the 2nd attempt — every question blank)** to **4/8 correct** this attempt. Looked at by what Brick 1 actually covers, the split is even cleaner: **every single-bad-case, people-context question Brick 1 taught was answered correctly — Q7, Q8, Q9, and Q11 (a bigger-pool version of the same shape) — 4 for 4.** Every question that needed something Brick 1 never taught was left blank, not wrong: Q10 and Q12 need the points-on-a-circle framing (planned for Brick 3), Q13 needs multi-case bad with more than one way to break the rule (planned for Brick 2), and Q15 needs the reverse-capstone structure (planned for Brick 3). Prem didn't guess or misapply the method on unfamiliar territory — he correctly recognised he hadn't been taught it yet and left it blank, exactly the disciplined behaviour the programme has been trying to build since the Confidence Session (5 Aug 2026). That discipline is real and worth noting, but (per the correction above) this attempt was coached, so it is not independent proof that Brick 1's own content is durably learned.

Lesson 1 (Choose 3) picked up its first real miss since the rebuild: Q4 (11 hikers, choose 3) was answered 115 instead of 165, with no working shown. Given every other Lesson-1-style question on the paper (Q1, Q2, Q3, Q5, Q6, Q14 — including the hardest, reverse-solved Q14) was correct, this reads as an isolated arithmetic slip rather than a method regression — but the blank working column means it can't be diagnosed further. Worth a light reminder to show working even on questions that feel easy.

**Recommended next steps:**
- **Build Brick 2 (multi-case bad + the "fewer than needed = write 0" edge case).** Q13 is the direct target — same "Total Minus Bad" skeleton Prem now clearly owns, extended to summing more than one bad count.
- **Build Brick 3 (new contexts — points/triangles — + reverse/capstone questions)** to close Q10, Q12, and Q15. These three questions share two things Brick 1 never touched: the points-on-a-circle framing, and (for Q15) working backward from a given total.
- **No further work needed on Lesson 1 or Brick 1** — both are holding up under real test conditions. Q4's slip doesn't warrant a re-teach; a "show your working, even on easy ones" reminder is enough.
- Once Bricks 2 and 3 are built, retest U56 with a 4th, freshly-numbered attempt (do not reuse Q10/Q12/Q13/Q15's exact numbers, since Prem has now seen and been graded on them).

---

## Unit 57 — Real Result & Analysis (graded 27 Aug 2026) — Brick 2 Retest (interactive-game rebuild)

**Score: 4 / 15 (27%) — NOT PASSED.** This is the test built for Brick 2 of the Total Minus Bad remediation (multi-case bad + the zero-edge "fewer than needed = write 0" rule), taught via the fully interactive "Bag Sorting Challenge" rebuild. Prem sat the test before the 27 Aug HELD decision was made — this result is in fact the evidence that decision was built on, not a coincidence of timing. It is the **weakest score anywhere in the entire Total Minus Bad arc** (U56 attempts: 7 → 6 → 10; this Brick-2-specific test: 4).

**Warm-Ups (ungraded):** W1 (Ratio Substitution, ~6.5 weeks stale) — 30 g ✓ correct. W2 (Rectangle Counting, ~7 weeks stale) — left blank (no answer written, though a stray "7" appears in the margin) — first sign of possible decay on a skill closed since U37, but ungraded so not conclusive on its own.

| Q | Section | Skill | Answer key | Prem wrote | Result |
|---|---------|-------|-----------|-------------|--------|
| Q1 | A — Basic | Not-All-Same (2 colours) | 70 | 70 | ✓ |
| Q2 | A — Basic | Not-All-Same (3 colours) | 156 | 156 | ✓ |
| Q3 | A — Basic | At-Least-1 (single bad case) | 164 | *(blank)* | ✗ |
| Q4 | A — Basic | Not-All-Same (3 colours) | 333 | 283 | ✗ |
| Q5 | A — Basic | Not-All-Same (2 colours) | 84 | 84 | ✓ |
| Q6 | B — Intermediate | Not-All-Same + zero-edge | 319 | *(blank — margin note "zero edge?")* | ✗ |
| Q7 | B — Intermediate | At-Least-1 (single bad case) | 274 | *(blank)* | ✗ |
| Q8 | B — Intermediate ★ | Not-All-Same + zero-edge | 367 | *(blank — margin note "zero edge?")* | ✗ |
| Q9 | B — Intermediate ★ | Not-All-Same (3 colours) | 630 | 170 | ✗ |
| Q10 | B — Intermediate ★ | At-Least-1 (same tray as Q6) | 144 | *(blank — margin note "zero edge?")* | ✗ |
| Q11 | C — Hard ★★ | Not-All-Same (3 colours, no zero) | 894 | *(blank)* | ✗ |
| Q12 | C — Hard ★★ | Not-All-Same, DOUBLE zero-edge | 202 | *(blank — margin note "zero edge x2?")* | ✗ |
| Q13 | C — Hard ★★ | At-Least-1 (single bad case) | 770 | *(blank)* | ✗ |
| Q14 | C — Hard ★★ | Precision trap — asks for BAD, not GOOD | 89 | 89 | ✓ |
| Q15 | C — Capstone ★★ | Not-All-Same, FOUR colours | 722 | 372 | ✗ |

**Sec A 3/5 · Sec B 0/5 · Sec C 1/5 — 4/15 (27%) NOT PASSED.**

**What this tells us — two distinct, genuinely useful findings underneath a very low score.**

**1. The core ALL-minus-BAD framework survives at small scale, and the precision-trap discrimination is intact.** Every Section A question with a manageable ALL value (C(9,3)=84 down to C(10,3)=120) and a simple bad-case sum was answered correctly (Q1, Q2, Q5) — the subtract-the-bad-from-everything skeleton itself is not the problem. More tellingly, **Q14 — the one question purpose-built to test whether Prem reads the question exactly (it asks for BAD, not the usual GOOD) — was answered correctly, 89, with full supporting working.** The standing "finish the exact question" precision habit held even inside a unit that otherwise collapsed.

**2. Zero-edge is recognised but not completed, and multi-digit arithmetic under the combinatorics load is the other real ceiling.** Every single zero-edge question (Q6, Q8, Q10, Q12) carries the same margin note in Prem's own hand: **"zero edge?"** — he is correctly spotting the trigger (a group too small to pick 3 from) that the Bag Sorting Challenge taught, but stops there every time rather than writing C(2,3)=0, adding it into the bad-case sum, and finishing the subtraction. That is a narrower, more specific gap than "doesn't understand zero-edge" — it is "recognises it, doesn't yet trust or remember the next step." Separately, the three questions that WERE attempted with full working but landed on a wrong number (Q4, Q9, Q15) all show the same failure shape: a miscalculated multi-digit product or quotient early in the chain (e.g. Q9's first-step multiplication, needed as part of C(17,3), read 172 instead of 272) that then cascades through everything after it — the method is being followed correctly, but 2–3 digit multiplication/division at this combinatorics scale (ALL values from 220 up to 1330) is not yet reliable by hand. This is the same family of problem the U42 "staircase" fix solved for factorials — arithmetic-scale ceiling, not a conceptual gap.

**Recommended next steps (for whenever this track resumes — currently HELD, see roadmap above):**
- Before any further Brick 2 content, a short, dedicated "finish the zero-edge line" drill: given a group already flagged as too small, walk from "C(2,3) = 0" through to writing it into the bad-case sum and completing the subtraction — closing the gap between *recognising* the trigger and *using* it.
- A light arithmetic-scale support (worked reference table of C(n,3) for n=10–21, similar in spirit to U42's factorial staircase) before reintroducing 3-digit-scale ALL values, so the multiply/divide chain itself isn't competing for attention with the combinatorics reasoning.
- Q14's clean pass is worth protecting — keep at least one "read carefully, BAD not GOOD"-style question in any future retest, since it's evidence the precision infrastructure generalises even under pressure.
- This result is the concrete evidence behind the 27 Aug HELD decision — file alongside it. When Brick 2/3 resumes, don't treat 4/15 as the true ceiling on Prem's ability with this content; treat it as "concept partially landed, two specific finishing gaps (zero-edge completion, arithmetic scale) still open."

### Next Assessment (superseded — see U58/U59 results directly below)

~~Already in progress: Unit 58 (Fractions — school-curriculum pivot), built and awaiting Prem's attempt.~~ Both U58 and U59 are now done — see below.

---

## Unit 58 — Real Result & Analysis (graded 29 Aug 2026)

**Score: 15 / 15 (100%) — PASSED, PERFECT SCORE.** First attempt at the school-curriculum-pivot Fractions unit (Shaping Maths Ch.3 — mixed-number add/subtract, fraction of a set, fraction × fraction, mixed × whole, chained and reverse word problems), built at Intermediate/Applied density.

**Warm-Ups (ungraded, spiral maintenance):** W1 (Vertically Opposite Angles, closed since U20, ~14 weeks stale) — wrote **228° instead of 132°**. W2 (Path & Frame, closed since U28) — **176 m² ✓ correct.**

| Q | Section | Question | Answer key | Prem wrote | Result |
|---|---------|----------|-----------|-------------|--------|
| Q1 | A — Add/Subtract Mixed | 3¼ + 2½ | 5¾ | 5¾ | ✓ |
| Q2 | A — Add/Subtract Mixed | 6 2/9 − 3 5/9 | 2⅔ | 2⅔ | ✓ |
| Q3 | A — Add/Subtract Mixed | 4 3/5 + 1 4/5 | 6⅖ | 6⅖ | ✓ |
| Q4 | A — Add/Subtract Mixed ★ | 2 5/6 + 3¼ | 6 1/12 | 6 1/12 | ✓ |
| Q5 | A — Add/Subtract Mixed ★ | 7⅓ − 2¾ | 4 7/12 | 4 7/12 | ✓ |
| Q6 | B — Multiplying | 2/3 of 18 | 12 | 12 | ✓ |
| Q7 | B — Multiplying | 3/5 × 4/7 | 12/35 | 12/35 | ✓ |
| Q8 | B — Multiplying ★ | 4½ × 3 | 13½ | 13½ | ✓ |
| Q9 | B — Multiplying ★ | 5/8 × 2/3 (simplest) | 5/12 | 5/12 | ✓ |
| Q10 | B — Multiplying, Word Problem ★ | 3/4 L × 6 bottles | 4½ L | 4½ | ✓ |
| Q11 | C — Chained ★★ | 5/8 of 32, then 2/5 play football | 8 | 8 (noted "soccer") | ✓ |
| Q12 | C — Word Problem ★★ | 8⅙ m ribbon, cut 2½ + 3⅔ | 2 m | 2 m | ✓ |
| Q13 | C — Word Problem ★★ | 2⅗ kg × 7 shelves | 18⅕ kg | 18⅕ | ✓ |
| Q14 | C — Reverse ★★ | 3/4 of a number = 27 | 36 | 36 | ✓ |
| Q15 | C — Capstone ★★ | 1¾×3 cups vs 4½ cups on hand | ¾ cup short | "¾ cups more" | ✓ |

**Sec A 5/5 · Sec B 5/5 · Sec C 5/5 — 15/15 (100%) PERFECT.**

**What this tells us.**

A clean, first-attempt perfect score on entirely new content, at Intermediate/Applied density, is the strongest possible validation of the U58 lesson pack — including the digit-overlap fix and "(numerator×numerator)/(denominator×denominator)" practical-formula shortcut added mid-build after Lui flagged the original Case 2 example as confusing. The three hardest, most ASMOPSS-shaped questions on the paper — Q11 (chained fraction-of-a-set), Q14 (reverse fraction-of-a-set), and Q15 (capstone multiply-then-subtract with a "does she have enough?" precision check) — were all answered correctly with working shown throughout. Q11 also carries a small, encouraging tell: Prem annotated the question himself with "(soccer)" next to "football," suggesting careful, engaged reading rather than mechanical pattern-matching.

The one blemish is the ungraded W1 warm-up. 228° = 360° − 132°, i.e. Prem computed the *reflex* angle around the full point rather than either the correct vertically-opposite match (132°, equal) or the adjacent/supplementary trap (48°) he confused it with last time this skill was tested (U55: wrote 122° instead of 58°, taking supplementary instead of equal). Two different wrong answers across two exposures to the same closed skill (closed since U20) is a stronger decay signal than a single slip — worth a short, dedicated re-teach next time it resurfaces, not just another passive warm-up rep. It cost nothing this time since it's ungraded.

**Recommended next steps:**
- No remediation needed on Fractions — U58 content is closed at full Intermediate/Applied density.
- Vertically Opposite Angles: escalate from "spiral warm-up" to "needs a short re-teach" next time it's due, given the two-different-wrong-answers pattern across U55 and U58.
- Proceed to U59 result directly below.

---

## Unit 59 — Real Result & Analysis (graded 29 Aug 2026)

**Score: 14 / 15 (93%) — PASSED.** First attempt at the newly-added PEMDAS unit — added mid-cycle (27 Aug 2026) after Prem reported he's studying Order of Operations live at school right now, replacing the originally-planned broader Whole Numbers Recap.

**Warm-Ups (ungraded, spiral maintenance):** W1 (Balance Scale) — 16 g ✓ correct. W2 (Divisibility/LCM) — 12 ✓ correct.

| Q | Section | Question | Answer key | Prem wrote | Result |
|---|---------|----------|-----------|-------------|--------|
| Q1 | A — Basic | 9 + 3 × 5 | 24 | 24 | ✓ |
| Q2 | A — Basic | (9 + 3) × 5 | 60 | 60 | ✓ |
| Q3 | A — Basic | 24 ÷ 6 × 2 | 8 | 8 | ✓ |
| Q4 | A — Basic | 15 − 2 × 4 | 7 | 7 | ✓ |
| Q5 | A — Basic | 30 ÷ (2 + 3) | 6 | 6 | ✓ |
| Q6 | B — Exponents | 5 + 3² | 14 | 14 | ✓ |
| Q7 | B — Exponents ★ | 2 × 4² | 32 | 32 | ✓ |
| Q8 | B — Exponents ★ | (10 − 4)² ÷ 4 | 9 | 9 | ✓ |
| Q9 | B — Exponents ★ | 50 − 3 × 2³ | 26 | 26 | ✓ |
| Q10 | B — Two Brackets ★ | (2 + 3) × (6 − 2) | 20 | 20 | ✓ |
| Q11 | C — Nested + Exponents ★★ | 3 × (2 + (5 − 1)²) | 54 | 108 | ✗ |
| Q12 | C — Brackets + Exponents ★★ | (8 − 3)² − 2 × (4 + 1) | 15 | 15 | ✓ |
| Q13 | C — Applied Area ★★ | side = (6−2), area | 16 cm² | 16 cm² | ✓ |
| Q14 | C — Applied Word Problem ★★ | 3 × 2² + 5 | 17 | 17 | ✓ |
| Q15 | C — Capstone ★★ | (3+2)² − 4×(7−5)² | 9 | 9 | ✓ |

**Sec A 5/5 · Sec B 5/5 · Sec C 4/5 — 14/15 (93%) PASSED.**

**What this tells us.**

A near-perfect debut on brand-new content pulled forward specifically to match Prem's live school material — strong validation of the mid-cycle pivot decision. Every Basic and Intermediate question landed, including all four exponent questions and the two-separate-brackets Q10, and 4 of 5 Hard/Capstone questions landed too, including Q13's area-application transfer and Q15's four-operation capstone combining brackets, exponents, multiply, and subtract in one expression.

The single miss, Q11, has a precise, diagnosable cause. 108 = 3 × (2 + (5−1))² — Prem correctly resolved the innermost bracket (5−1=4), but then let the exponent's scope drift outward to cover the whole "(2 + (5−1))" group instead of applying it only to the sealed "(5−1)²" unit before adding the 2. This is a nested-bracket **scoping** error specifically: he knows exponents come before addition, and he can peel one bracket layer correctly, but hasn't yet reliably locked onto *which* bracket group an exponent is attached to once there are three nested levels. No working was shown on Q11 (blank working column, no red mark either way), so this diagnosis is inferred from the wrong-answer pattern rather than confirmed directly — worth a quick verbal check-in with Prem to confirm before treating it as settled.

This maps precisely onto Lesson 2's "peel the innermost bracket first" interactive widget (2×((5−2)+3)=12) — Q11 is functionally a harder, one-level-deeper version of that exact skill. This reads as "taught and mostly landed, hasn't yet generalized to slightly deeper nesting than what was practiced," not a fresh gap.

**Recommended next steps:**
- U59 content does not need a full re-teach — 14/15 with a single, isolated, diagnosable miss is a strong pass.
- Before or alongside U60, a short 2–3 question top-up drill (not a full lesson) on "which bracket does the exponent belong to?" using 3-level nested expressions similar to Q11 — confirm with Prem verbally first whether he can talk through Q11's correct steps, to distinguish a genuine gap from a one-off slip.
- Fold PEMDAS into the spiral maintenance rotation once the top-up drill confirms this is closed.
- Proceed to U60 (Area of Triangles) as already planned in the roadmap.

### Next Assessment (superseded — see U60 Retest result above)

~~Next up: Unit 60 (Area of Triangles), exactly as already planned.~~ U60's 1st attempt scored 8/15 (independently verified), NOT PASSED, driven entirely by Lesson 2's rearrangement gap. Lesson 2 was revamped and the test rebuilt from scratch; **U60's retest (graded 9 Sep 2026) scored 13/15 (87%), PASSED — Section B (the reverse-formula skill) went from 0/5 to a perfect 5/5.** U60 is now CLOSED. **Next: Milestone 6**, covering U51–U60 with the first tier-split (Basic/Intermediate/Applied) reporting, exactly as already planned. Per the `analyze-done-unit-test` skill's standing instruction, index.html / prem_data.js / Unit_Test_Log.md have not yet been updated with the retest result — that sync happens when the M6 pack is built.

---

## PEMDAS Extra Practice Test — Real Result & Analysis (graded 30 Aug 2026)

**Score: 13 / 15 (87%).** Standalone extra-practice test (docx only, no lesson), built at Lui's request the same day as the U58/U59 grading — 3 Basic / 6 Intermediate / 6 Applied-Capstone (12 of 15 at Intermediate+), matching ASMOPSS density. Not part of the U58–U62 roadmap sequence and does not change U60 as the next scheduled unit.

**Warm-Ups (ungraded):** W1 (Consecutive Odd Numbers) — wrote **16**, correct is 15 (three consecutive odds summing to 51 are 15, 17, 19 — he landed one off, likely tried 16+17+18 with even numbers instead of odd). W2 (Circular Arrangements, (n−1)!) — wrote **60**, correct is 24 (60 = 5×4×3, i.e. he used a straight-line permutation count of 5 people taken 3-ish, or simply forgot the circular (n−1)! adjustment and the −1 that circular seating requires — consistent with this skill's known history of regressing under mixed conditions, first flagged at M4/M5).

| Q | Section | Question | Answer key | Prem wrote | Result |
|---|---------|----------|-----------|-------------|--------|
| Q1 | A — Basic | 8 + 5 × 3 | 23 | 23 | ✓ |
| Q2 | A — Basic | (8 + 5) × 3 | 39 | 39 | ✓ |
| Q3 | A — Basic | 36 ÷ 4 × 3 | 27 | 27 | ✓ |
| Q4 | B — Exponents | 4 × 3² | 36 | 36 | ✓ |
| Q5 ★ | B — Exponents | (11 − 5)² ÷ 4 | 9 | 9 | ✓ |
| Q6 ★ | B — Exponents | 70 − 2 × 3³ | 16 | 52 | ✗ |
| Q7 ★ | B — Two Brackets | (4 + 3) × (8 − 3) | 35 | 35 | ✓ |
| Q8 ★ | B — Nested + Exponents | 48 ÷ (2 + 2)² | 3 | 3 | ✓ |
| Q9 ★ | B — Order of Operations | 6 + (9 − 4) × 2 | 16 | 16 | ✓ |
| Q10 ★★ | C — Nested + Exponents | 2 × (3 + (8 − 5)²) | 24 | 14 | ✗ |
| Q11 ★★ | C — Brackets + Exponents | (9 − 4)² − 3 × (5 + 1) | 7 | 7 | ✓ |
| Q12 ★★ | C — Applied Area | (10−4) by (2+1) cm | 18 cm² | 18 cm² | ✓ |
| Q13 ★★ | C — Applied Word Problem | 4 bags × 3² − 2 | 34 | 34 | ✓ |
| Q14 ★★ | C — Capstone | (6−2)² + 3×(10−7)² | 43 | 43 | ✓ |
| Q15 ★★ | C — Capstone | 5×(2+(9−6)²)−2×5 | 45 | 45 | ✓ |

**Sec A 3/3 · Sec B 5/6 · Sec C 5/6 — 13/15 (87%).**

**What this tells us — two distinct, precisely diagnosable misses, neither a repeat of U59's gap.**

Q6 (70 − 2×3³, wrote 52) traces to a specific exponent-value error: 70 − 2×3² = 52 exactly. He squared the base instead of cubing it, despite the "3" being clearly written as a superscript-3 exponent. This is a new, distinct finding from U59 — not a scoping error, but a **read-the-exponent-value** slip, most likely because every single exponent on both U59 and this test's earlier questions (Q4, Q5) was a ², and this is the *first* ³ he'd seen since the exponent concept was introduced — a "the exception looks like the rule" trap, worth deliberately weaving ³ (and mixed ²/³ on the same page) into future practice rather than defaulting to squares.

Q10 (2×(3+(8−5)²), wrote 14) traces cleanly to 2 + (3+(8−5)²) = 14 — he resolved the inner bracket and exponent correctly (3+9=12) but then added the leading "2 ×" as if it were "2 +" at the very last step. This is a straightforward operator-misread at the outer step, not the nested-bracket **scoping** error diagnosed on U59's Q11 (where the exponent's scope drifted to the wrong bracket group). Encouragingly, this means the top-up drill recommended after U59 — "which bracket does the exponent belong to" — wasn't actually re-tested here in its exact form; both of today's misses are different, narrower slips (one exponent-value, one final-operator misread), and Q11's own nested-bracket-plus-exponent question on this test was answered correctly, which is a good sign that the original U59 scoping gap may already be closing.

**Recommended next steps:**
- Fold two short top-up items into whatever comes next (a warm-up slot, not a full lesson): one question with a bare ³ (or ⁴) exponent isolated from any ², and one multi-step expression ending in "× (bracket)" specifically to drill reading the final operator carefully before writing an answer.
- W1's near-miss (16 vs 15) and W2's regression (60 vs 24, the known-fragile circular-arrangement skill) are both ungraded and low-stakes here, but Circular Arrangements has now regressed on three separate occasions (M4, M5, and this test) — it may be worth a dedicated short re-teach next time it resurfaces rather than another passive warm-up rep, similar to the call already made on Vertically Opposite Angles.
- No change to the roadmap: proceed to **Unit 60 (Area of Triangles)** as already planned — this was a supplementary practice test, not a gating assessment, and doesn't move the M6 milestone timing.

---

## Unit 60 — Real Result & Analysis (graded 3 Sep 2026)

**Score as marked on paper: 7 / 15 (47%) — NOT PASSED.** First attempt at Area of Triangles (Shaping Maths Ch.4). Prem's own report going in: *"understood nothing at all on Lesson 2."* **Independently re-verified against the actual printed question text (not the original build script) found a marking discrepancy on Q15 — corrected score is 8/15 (53%), still NOT PASSED.** Detail below.

**Warm-Ups (ungraded):** W1 (Sequences, 20th term of 5,9,13,17,…) — **81 ✓ correct.** W2 (Ratio, $60 in 2:3) — **$36 ✓ correct.**

| Q | Section | Question | Answer key | Prem wrote | Result |
|---|---------|----------|-----------|-------------|--------|
| Q1 | A — Direct Area | b=14cm, h=6cm | 42 cm² | 42 cm² | ✓ |
| Q2 | A — Direct Area | b=9m, h=10m | 45 m² | 45 (labelled cm², should be m²) | ✓ (marked correct — number right, unit label slip) |
| Q3 | A — Direct Area | b=16cm, h=5cm | 40 cm² | 40 cm² | ✓ |
| Q4 | A — Direct Area | b=11cm, h=8cm | 44 cm² | 44 cm² | ✓ |
| Q5 | A — Direct Area | b=20cm, h=9cm | 90 cm² | 90 cm² | ✓ |
| Q6 | B — Find The Height | area=42cm², base=7cm | 12 cm | "?" (no attempt) | ✗ |
| Q7 | B — Find The Base | area=52cm², height=8cm | 13 cm | "?" (no attempt) | ✗ |
| Q8 ★ | B — Find The Height | area=45cm², base=15cm | 6 cm | "?" (no attempt) | ✗ |
| Q9 ★ | B — Composite Add | rect 7×6 + tri(7,4) roof | 56 m² | "?" (no attempt) | ✗ |
| Q10 ★ | B — Composite Subtract | square 9×9 − tri(6,6) corner | 63 cm² | "?" (no attempt) | ✗ |
| Q11 ★★ | C — Reverse Word Problem | sail area=84m², height=12m | 14 m | "?" (no attempt) | ✗ |
| Q12 ★★ | C — Composite Add, Word Problem | tent rect 14×6 + tri(14,5) roof | 119 m² | "?" (no attempt) | ✗ |
| Q13 ★★ | C — Composite Subtract, Word Problem | garden 18×10 − tri(8,9) pond | 144 m² | 144 m² | ✓ |
| Q14 ★★ | C — Reasoning, Compare | triA(5,16) vs triB(8,10) | Equal, both 40 cm² | "Equal" | ✓ |
| Q15 ★★ | C — Composite Subtract, Capstone | banner 16×10 − 2×tri(6,5) flaps | **130 m²** (per the numbers actually printed) | 130 m² | ✓ (see discrepancy note) |

**Sec A 5/5 · Sec B 0/5 · Sec C (as marked on paper) 2/5 → 7/15. Sec C (independently re-verified) 3/5 → 8/15.**

**Marking discrepancy on Q15 — flagging for Lui rather than silently overriding.** The printed test states the two cut flaps are "base 6 m, height 5 m," which gives 16×10 − 2×(½×6×5) = 160 − 30 = **130 m²** — the exact number Prem wrote. The paper's own mark shows this as wrong, which only makes sense if it was graded against an earlier draft of the answer key that used different flap dimensions (base 5, height 4 → 140 m²) — likely a leftover from the duplicate-question fix pass during the original build, where Q15's numbers were changed late to avoid clashing with Lesson 1's worked example. I've re-verified this by hand (Python) against the words actually printed on the page, not memory of the build. Recommend treating Prem's Q15 as correct — real score **8/15**, not 7/15.

**What this tells us — Lui's diagnosis is confirmed, and the failure has a sharp, specific edge.**

Section A (pure direct-area, taught in Lesson 1) is a clean 5/5 — the half-rectangle-rule foundation is completely solid. Everything that depends on Lesson 2 (reverse the formula to find a missing base/height, or combine two shapes) is where the test collapsed — but not uniformly. **Every single "reverse the formula" question (Q6, Q7, Q8, Q11) — 4 for 4 — was left as a bare "?"**, no attempt at all, not even a wrong number. That is a complete non-engagement with the one new idea Lesson 2 was built to teach, not a shaky attempt or a near-miss. **Composite-shape questions were mixed**: Q9, Q10, Q12 were also left as "?", but Q13 and Q15 — both composite-subtract, both framed as concrete real-world scenes (a garden, a banner) — were answered correctly with the right method. That's a meaningful, narrower signal: the "two shapes, add or subtract their areas" idea partially landed when the scene was concrete and the shapes were easy to picture: the piece that didn't land *at all* is specifically the algebraic rearrangement (Area = ½bh → solve for b or h).

This lines up exactly with Lui's own diagnosis after reviewing the lesson: screen s1 ("Rearranging The Formula") compressed "multiply both sides by 2" and "divide both sides by the known side" into two bare lines, without showing the fraction-form derivation (Area = ½×b×h → ½×b/1×h/1 → bh/2) or explaining *why* moving a term to the other side flips its operation. This violates the project's standing step-by-step-granularity rule (coaching_rules.md) — under-applied on this one screen specifically, not a new problem to solve. Prem had nothing to hold onto for Q6/Q7/Q8/Q11 because the one screen that was supposed to give him a repeatable procedure never actually built one at the needed depth. Q13/Q15 working despite this is a good sign for the underlying composite-shape logic once the rearrangement piece is properly rebuilt.

**Recommended next steps (already in motion, per Lui's request):**
- Revamp Lesson 2 screen s1 using Lui's own worked breakdown — full fraction-form derivation, then explicit "moving a term across the equals sign flips its operation" logic, arriving separately at both b= and h= forms. Review the rest of Lesson 2 for the same too-fast pacing while in there.
- Rebuild the U60 test from scratch — entirely new numbers and scenarios across all 15 questions plus both warm-ups, zero reuse from either lesson or this test, so the retest is a genuine, unseen check rather than a remembered-numbers pass.
- Do not fold Area of Triangles into spiral maintenance yet — it's an open gap, not a closed skill with a passing score to protect.
- Q2's "cm²" instead of "m²" unit-label slip cost nothing this time (numeric answer was still graded correct) but is worth a light watch — pair with the standing "finish the exact question" precision habit next time units are in play.
- Once the revamped Lesson 2 and new test are verified, retest before Milestone 6 (which still fires after U60 clears).

---

## Unit 60 — Retest Result & Analysis (graded 9 Sep 2026)

**Data-integrity correction (added 11 Sep 2026, per cycle7_plan.md):** this retest was **COACHED, not an independent measure** — Lui walked Prem through it and had him fix mistakes on Lesson 2 rather than Prem completing it solo. This entry originally described the result below as a clean independent PASS; that framing was wrong. The numbers on the page are accurate and reported as-is, but they are not evidence that the Algebraic-rearrangement depth standard (coaching_rules.md) is validated — see the correction note at the end of this section.

**Score: 13 / 15 (87%) — COACHED, matching the paper's own marking (no discrepancy this time).** Second attempt, sat on the entirely-rebuilt retest (all-new 15Q + 2 new warm-ups) after Lesson 2's algebra-rearrangement screen was rebuilt into a two-screen fraction-derivation + side-switching-logic sequence (see the 1st-attempt write-up above for the full diagnosis).

**Warm-Ups (ungraded):** W1 (Divisibility, missing digit for 3_74÷9) — **4 ✓ correct**, full working shown (long division tried at several digit guesses before landing on 4). W2 (Simple Equations, 3n+7=34) — **9 ✓ correct.**

| Q | Section | Question | Answer key | Prem wrote | Result |
|---|---------|----------|-----------|-------------|--------|
| Q1 | A — Direct Area | b=18cm, h=4cm | 36 cm² | 72 crossed out → 36 cm² | ✓ |
| Q2 | A — Direct Area | b=13m, h=6m | 39 m² | 78 crossed out → 39 m² | ✓ |
| Q3 | A — Direct Area | b=22cm, h=3cm | 33 cm² | 66 crossed out → 33 cm² | ✓ |
| Q4 | A — Direct Area | b=17cm, h=6cm | 51 cm² | 102 crossed out → 51 cm² | ✓ |
| Q5 | A — Direct Area | b=24cm, h=5cm | 60 cm² | 120 crossed out → 60 cm² | ✓ |
| Q6 | B — Find The Height | area=36cm², base=9cm | 8 cm | 16cm crossed out → 8 cm (circled) | ✓ |
| Q7 | B — Find The Base | area=60cm², height=5cm | 24 cm | 48 crossed out → 24 cm | ✓ |
| Q8 ★ | B — Find The Height | area=98cm², base=14cm | 14 cm | 28 crossed out → 14 cm (circled) | ✓ |
| Q9 ★ | B — Composite Add | rect 9×5 + tri(9,6) | 72 m² | 72 m² | ✓ |
| Q10 ★ | B — Composite Subtract | sq 11×11 − tri(8,4) | 105 cm² | 105 cm² | ✓ |
| Q11 ★★ | C — Reverse Word Problem | sail area=99m², height=11m | 18 m | 36m crossed out → 18 m (circled) | ✓ |
| Q12 ★★ | C — Composite Add, Word Problem | tent rect12×7 + tri(12,4) | 108 m² | 98 m² | ✗ |
| Q13 ★★ | C — Composite Subtract, Word Problem | garden rect20×8 − tri(9,6) | 133 m² | 132 m | ✗ |
| Q14 ★★ | C — Reasoning, Compare | triA(6,14) vs triB(7,12) | Equal, both 42 cm² | "Equal, 42cm²" | ✓ |
| Q15 ★★ | C — Composite Subtract, Capstone | banner 18×9 − 2×tri(5,4) | 142 m² | 142 m² | ✓ |

**Sec A 5/5 · Sec B 5/5 · Sec C 3/5 — 13/15 (87%) PASSED.**

**What this tells us — the Lesson 2 revamp worked, completely, on exactly the skill that collapsed.**

This is about as clean a before/after as a lesson-design fix can produce. **Section B — the reverse-the-formula skill that was a total 0/5 non-attempt on the 1st attempt — is now a perfect 5/5.** Every single question needing "double the area, then divide by the known side" (Q6, Q7, Q8) was solved correctly, and both composite-shape questions (Q9, Q10) landed too. Prem's working also shows a genuinely good habit that wasn't there before: on Section A and several Section B/C questions, he wrote the *rectangle* value first (e.g. 18×4=72), crossed it out, and then wrote the correctly-halved *triangle* value as his final answer (36) — visible, deliberate self-correction rather than confusion. Q6 and Q8 show the same pattern with the reverse-formula answers circled after an initial wrong guess was crossed out. This is exactly the kind of check-your-own-work behavior the pre-scan protocol is meant to build.

Section C's two misses (Q12, Q13) are a completely different failure shape than the 1st attempt's blank non-attempts. Both are fully-worked, method-correct, single-arithmetic-slip errors at the harder applied tier: Q12 (108 correct) — Prem correctly multiplied rect 12×7=84 and triangle 12×4=48 in his working, but the final written answer (98) doesn't cleanly derive from either the correct method (84+24=108, having halved 48 first) or a consistent unhalved-sum error (84+48=132) — reads as a slip somewhere in the final addition step rather than a method problem, since both component multiplications were right. Q13 (133 correct) — clean, precisely diagnosable: rect 20×8=160 correct, but the triangle half was computed as 28 instead of 27 (½×9×6=27, he wrote 28), a one-off halving/division slip that then carried through a correct subtraction (160−28=132). Both questions demonstrate full command of the composite-shape method (rectangle area, triangle area, add or subtract) — the misses are precision slips on the final arithmetic step at Applied tier, not comprehension gaps.

**Recommended next steps:**
- **U60 is closed for the purpose of moving on to Milestone 6** — but, per the 11 Sep 2026 correction above, this is not the same as the Algebraic-rearrangement depth standard being validated. The specific gap this retest cycle targeted (reverse-the-formula) came back a clean 5/5 under coaching support, which is a genuinely good sign, but not independent proof the teaching approach works solo. **Milestone 6's Q9 (pinned: area=54cm², base=12cm, find height) is the first clean, uncoached test of this skill; U64 is the second.** Only mark the depth standard "validated" once one of those lands clean.
- Q12/Q13's shared failure shape (correct method, one slipped multiplication/halving step, at the hardest applied tier) is a "finish the exact calculation" precision note, not a re-teach trigger — fold a similar composite-shape question into a future spiral-maintenance warm-up once Area of Triangles is due for a maintenance check, rather than building a dedicated top-up lesson now.
- **Proceed directly to Milestone 6**, covering everything taught across U51–U60, with the first tier-split (Basic/Intermediate/Applied) reporting per the standing M6+ rule, and the first clean check on the coached skill above.

---

## PEMDAS School Test Prep — Words-to-Expression Extra Practice (graded 10 Sep 2026)

**Score: 20 / 20 (100%) — Ops 8/8 · Words 12/12.** Extra practice pack built 9–10 Sep 2026 ahead of Prem's real school Chapter 2 test (Fri 11 Sep 2026), targeting the one skill neither U59 nor the PEMDAS Extra Practice Test had ever tested: building an expression from a word problem himself (both earlier papers handed him the expression pre-assembled). **Not a numbered unit — no `currentUnit` change, no unit-test-cycle entry**, per the build plan.

| Q | Section | Target | Prem wrote | Result |
|---|---------|--------|-------------|--------|
| Q1 | Part 1 — Ops | Cube in a bracket | 60 crossed out → 40 | ✓ |
| Q2 | Part 1 — Ops | Two independent branches | 19 | ✓ |
| Q3 | Part 1 — Ops | Nested brackets, subtraction outside | 27 | ✓ |
| Q4 | Part 1 — Ops | Exponent inside a divisor bracket | crossed out → 6 | ✓ |
| Q5 | Part 1 — Ops | Two multiplies either side of a − | 8 | ✓ |
| Q6 | Part 1 — Ops | (a+b)² ≠ a²+b² trap | 40 | ✓ |
| Q7 | Part 1 — Ops | Three same-tier ops, left to right | 8 | ✓ |
| Q8 | Part 1 — Ops | Full-ladder capstone | 87 (messy but valid working) | ✓ |
| Q9 | Sec A — Basic | Words → expression, no brackets | $40 | ✓ |
| Q10 | Sec A — Basic | Words → expression, no brackets | $32 | ✓ |
| Q11 | Sec A — Basic | ×/÷ left to right | 15 | ✓ |
| Q12 | Sec A — Basic | Exponent hiding in words | 4 | ✓ |
| Q13 | Sec B — Intermediate | **Bracket required** | 8 | ✓ |
| Q14 | Sec B — Intermediate | Same-tier chain | $105 | ✓ |
| Q15 | Sec B — Intermediate | **Bracket required** | $100 | ✓ |
| Q16 | Sec B — Intermediate | Exponent then multiply | 88 | ✓ |
| Q17 | Sec C — Applied | Bracket + multi-step | $25 | ✓ |
| Q18(a)(b) | Sec C — Applied | Two-part answer | 200 / 40 | ✓ / ✓ |
| Q19 | Sec C — Applied | **"Subtract FROM" order trap** | 24 (see note) | ✓ |
| Q20 | Sec C — Applied | Full-ladder capstone, word form | 16 | ✓ |

**A clean sweep on exactly what this pack was built to test.** Zero translation errors (every word problem was correctly turned into an expression) and zero evaluation errors (every expression was then correctly solved) — the distinction this test's answer-key format was specifically designed to surface never had to be used, because nothing broke on either axis. Both bracket-required questions (Q13, Q15) were solved correctly, meaning the core "does an add/subtract have to happen before a ×/÷" discrimination from the lesson's Bracket Test screen transferred cleanly to unseen numbers. The exponent-in-words questions (Q12, Q16) and the (a+b)²≠a²+b² conceptual trap (Q6) all landed too.

**Q19 (the order trap) is worth a specific note.** Prem's working shows the fully correct method on the first pass (11×6=66, 90−66=24, matching the key exactly) — but the answer line itself shows visible hesitation: he wrote 24, crossed it out, tried something else, crossed that too, then the graded mark confirms 24 as final. This is the exact "subtract A from B means B−A" trap the lesson's Trap 1 screen was built around, and he got the *method* right immediately; the crossing-out looks like a confidence wobble on committing to the answer rather than a reasoning error — worth keeping an eye on but not a gap to re-teach.

**Self-correction pattern (Q1, Q4) is a good sign.** Both show an initial answer crossed out and replaced with the correct one, consistent with the pre-scan protocol's "check before you write the final answer" habit that's been standing infrastructure since U54 — he's catching his own slips before submitting, not after.

**Stuck Card usage:** not visible from the paper itself whether Prem opened `PEMDAS_StuckCard_BracketDecision.html` while working through Q13/Q15/Q19 — worth asking Lui directly, since the build plan's Section 6 treats this as a useful data point (opening it would be self-rescue, not a failure) but it isn't something the graded paper can show on its own.

**Recommended next steps:**
- No remediation needed — this pack closes clean. The words-to-expression translation skill this pack targeted is confirmed transferring to fresh numbers at all three difficulty tiers.
- **Feeds directly into U61** (Ch.3 fraction word problems) per the build plan — the same "read the story, decide what happens first, write one line" routine applies there.
- Proceed directly to **Milestone 6** as already planned — this result doesn't change that.

---

## Milestone 6 — Real Result & Analysis (graded 11 Sep 2026) — Units 51–60, first tier-split report

**Marked score: 11/20 (55%).** **Independently re-verified: 12/20 (60%)** — a one-point marking discrepancy found on re-check (see note below). This is the first milestone since M3 in the old 20Q ISA+Kangaroo format, and the first ever to report by difficulty tier (Basic/Intermediate/Applied) rather than by section alone, per the standing M6+ rule.

**Marking discrepancy:** the paper's own section subtotals (handwritten in red next to each tier banner) read Basic 3, Intermediate 5, Applied 3, Kangaroo 1 — which sum to **12**, not the 11 written in the total score box. Each individual question mark was independently re-checked against these subtotals and matches exactly; the discrepancy is a simple addition slip in the grader's own total, not a mismarked question. Treating Prem's real score as **12/20 (60%)**.

| Q | Tier | Skill (source unit) | Answer key | Prem wrote | Result |
|---|------|---------------------|-----------|-------------|--------|
| Q1 | Basic | Fraction of a Set (U58) | 10 | 10 | ✓ |
| Q2 | Basic | Order of Operations (U59) | 54 | 54 | ✓ |
| Q3 | Basic | Probability (U55) | 1/4 | 1/4 | ✓ |
| Q4 | Intermediate | Direct Area (U60) | 38 m² | 38 m² | ✓ |
| Q5 | Intermediate | Floor-by-Floor Volume (U54) | 140 | 140 | ✓ |
| Q6 | Intermediate | Table With A Scale Key (U51) | 10 | 10 | ✓ |
| Q7 | Intermediate | PEMDAS Word Problem (U59) | 32 | 32 | ✓ |
| Q8 | Intermediate | Combinations Backward (U53) | 18 | 17 | ✗ |
| Q9 ★ | Intermediate | **Reverse Triangle Formula (U60)** | 9 cm | 9 cm² | ✓ |
| Q10 ★ | Applied | Chained Fraction Word Problem (U58) | 6 | 6 | ✓ |
| Q11 ★ | Applied | Two-Skill Chain (U52) | 14 | *(blank — "?")* | ✗ |
| Q12 ★ | Applied | Reverse Probability (U55) | 25 | 25 | ✓ |
| Q13 ★ | Applied | Choose 3 / Total Minus Bad (U56) | 100 | *(blank — "?")* | ✗ |
| Q14 ★★ | Applied | Digit Puzzle (U51) | 36 | 36 | ✓ |
| Q15 ★★ | Applied | Choose 3 / Total Minus Bad (U57 probe) | 46 | *(blank — "?")* | ✗ |
| Q16 | Kangaroo | Clock angle | 7.5° | 0° or 360° | ✗ |
| Q17 | Kangaroo | Seat row (fencepost) | 13 | 15 | ✗ |
| Q18 | Kangaroo | Consecutive-number product | 11 and 12 | *(blank — "?")* | ✗ |
| Q19 | Kangaroo | Triangular-number pattern | 55 | 48 | ✗ |
| Q20 | Kangaroo | Logic/deduction (pets) | Mia | Mia | ✓ |

**Tier breakdown: Basic 3/3 (100%) · Intermediate 5/6 (83%) · Applied 3/6 (50%) · Kangaroo 1/5 (20%) — 12/20 (60%).**

**The headline finding: Q9 came back clean, and it's the most important result on this paper.** Q9 ("a triangle has an area of 54 cm² and a base of 12 cm — what is its height?") was pinned verbatim in the build plan as the first genuinely **uncoached** test of the Algebraic-rearrangement depth standard, after the U60 retest that originally validated this teaching approach turned out to have been coached (see the 11 Sep 2026 data-integrity correction elsewhere in this project). Prem answered it correctly, independently, under real mixed-paper pressure, with no Lui involvement. This is a real, if single-question, point of evidence that the fraction-derivation + side-switching-logic teaching pattern works on its own — worth noting in coaching_rules.md, though one clean question isn't yet enough to fully lift the UNVALIDATED flag (U64 is the second planned check).

**The tier cliff is the second finding, and it's a clean, textbook one.** Performance drops almost monotonically with difficulty: 100% → 83% → 50% → 20%. This is exactly the pattern the M6+ tier-split reporting rule was introduced to make visible early rather than discover later on a real exam (see the Science-protocol rationale for the same concern). Basic and Intermediate content — mostly single-step or lightly-chained recall of recently-taught material — is landing cleanly. Applied tier is where it breaks, and the failure *shape* there is distinctive: **all three Applied misses (Q11, Q13, Q15) are complete blanks — a bare "?" with no attempted working — not wrong attempts.** On a 20-question mixed paper, this could be pacing/fatigue (running low on time or stamina by Q11-15) rather than a pure content gap, especially since Q10, Q12, and Q14 (also Applied, also non-trivial) were all answered correctly with full working shown.

**Q13 is worth flagging specifically.** It targets the exact single-bad-case, people-context "Total Minus Bad" skill from U56's Brick 1 — the skill whose most recent result (10/15, 3rd attempt) was just corrected in memory to COACHED, not independent, leaving it formally UNVALIDATED. This M6 attempt was Brick 1's first genuinely independent, uncoached opportunity to show it's durably learned — and it came back blank. That's a real, if quiet, data point *against* treating Brick 1 as secure; it should stay out of spiral maintenance rotation until it gets a dedicated, low-stakes, independent recheck. Q15 (probing whether anything from the HELD U57 Brick 2/3 track survived) was also blank — expected and not concerning, since that track was deliberately paused.

**Q8 is a narrower miss worth a light note, not a re-teach.** "Combinations Backward" (reverse-solving n from C(n,2)=153) was flagged fully secure after U53 ("every appearance correct"). Wrote 17 instead of 18 (17×16/2=136, not 153) with no working shown at all — reads as an unsupported guess under time pressure on a mixed paper rather than a forgotten method, but worth a light spiral-maintenance rep to confirm.

**Kangaroo (1/5) is the weakest section, with four genuinely different failure causes — not one repeated gap.** Q16 (clock angle at 3:15, wrote "0° or 360°") suggests a literal misreading of "quarter past" as the hands roughly overlapping, rather than computing hour-hand drift. Q17 (seat row, wrote 15; working shows 14) is a **fencepost/boundary-adjustment miss** — forgetting to subtract 1 for Ann herself being counted in both "5th from left" and "9th from right" — notable because boundary-adjustment has been one of this programme's most heavily and successfully drilled skills (Path & Frame, U42 fencepost); this reads as a mixed-paper regression on a previously-secure skill, the same pattern seen historically with circular arrangements under milestone conditions. Q18 (consecutive-number product = 132) shows a genuine, newly-diagnosed misconception in the working: Prem divided 132÷2=66 and searched near 66, rather than searching near √132≈11.5 — he interpreted "product of two consecutive numbers" as "double a number" rather than "two numbers one apart multiplied together." Q19 (triangular-number pattern, 10 rows) shows a botched listing attempt — some row-counts repeated, others skipped, landing on 48 instead of 55 — the list was too long (10 items) to track reliably by ad hoc listing without a clean table or the pairing shortcut. **Q20 (logic/deduction) was the one clean win**, solved with a well-organized elimination grid (rows K/L/M × columns for each pet, crossing out impossible pairs) — a genuinely strong, transferable method.

**Recommended next steps:**
- **Mark Q9 as the first clean, uncoached data point for the Algebraic-rearrangement depth standard** in coaching_rules.md — still UNVALIDATED pending U64, but no longer zero independent evidence.
- **Do not promote U56 Brick 1 ("Total Minus Bad," single bad-case) to spiral maintenance.** Q13's blank result on this M6 paper is now a second data point (after the coached 3rd-attempt result) suggesting it isn't durably independent yet. Give it a dedicated, low-stakes, independent recheck before relying on it in future mixed papers.
- **Fold a light "reverse-solve C(n,2)" warm-up into an early Cycle 7 unit** — Q8's unsupported wrong guess is worth one confirming rep, not a re-teach.
- **New Kangaroo-specific gap to seed into Cycle 7 rotation:** "product of two consecutive numbers" (distinguish from halving/doubling) — genuinely new, first time this exact shape has been tested.
- **Light touch on clock-angle and long-listing skills** — both are classic Kangaroo/competition shapes that haven't had dedicated unit coverage; consider a short Kangaroo-specific drill later in Cycle 7 rather than a full unit now, since neither maps to a Chapter Block topic.
- **This is a diagnostic milestone, not a pass/fail gate** (same framing as M4/M5) — proceed directly to **Unit 61**, which opens **Cycle 7** (U61–U70) under `cycle7_plan.md`. Per that plan, Prem's live school pacing places him finishing Ch.2 (tested 11 Sep 2026) and starting Ch.3 next, so U61 should target Ch.3 content (fraction word problems, per the PEMDAS pack's own forward note) — confirm exact scope against cycle7_plan.md's chapter-distance diagnosis and SYNC RULE before building. Cycle 7 also introduces the new 16Q two-part test format (Part 1 on-topic + Part 2 Recall Round) starting at U61, a format change from the 15Q structure used through U60.
- index.html / prem_data.js / Unit_Test_Log.md are **not yet updated** with this result, per the standing `analyze-done-unit-test` workflow — deferred until the U61 build.

---

## Unit 61 — Real Result & Analysis (graded 20 Sep 2026) — Fraction of a Set + Fraction as Division

**Score boxes on the paper were left blank — no total was written in, and 6 of the 16 questions carry no tick or
cross at all.** Independently verified from scratch against each question's own printed answer: **Part 1 10/12
(or 9/12 excluding a tainted question — see below), Recall Round 0/4.** Full per-question forensic record:
`Memory Backup\TEST_RECORD_U61.md`.

| Q | Tier | Skill (source unit) | Answer key | Prem wrote | Result |
|---|------|---------------------|-----------|-------------|--------|
| Q1 | Basic | Fraction of a Set | 12 | 12 | ✓ |
| Q2 | Basic | Fraction of a Set (word problem) | 20 | 20 | ✓ |
| Q3 | Basic | Fraction as Division | 5/8 | 5/8 | ✓ |
| Q4 | Intermediate | Fraction of a Set — NOT | 27 | 27 | ✓ |
| Q5 | Intermediate | Fraction as Division (mixed number) | 2¾ m | *(illegible, "?")* | ✗ |
| Q6 | Intermediate | Fraction of a Set — Reverse | 30 *(pre-swap paper — see note)* | 30 | ✓* |
| Q7 | Intermediate | Fraction of a Set (chained) | 5 | 5 | ✓ |
| Q8 | Intermediate | Fraction as Division (simplify) | 3/4 | 3/4 | ✓ |
| Q9 | Applied | Fraction of a Set + Division | 7 | 7 | ✓ |
| Q10 | Applied | Fraction as Division, two-part | (a) 4½ m (b) 9 m | *(illegible)* | ✗ |
| Q11 | Applied | Fraction of a Set — chained with NOT | 3 | 3 | ✓ |
| Q12 | Applied | Reverse then forward (capstone) | 28 | 28 | ✓ |
| Q13 | Recall | Average Changes (U48) | 36 | 17 *(crossed out)* | ✗ |
| Q14 | Recall | Equations Both Sides (U21) | n = 6 | *("?", scribbled)* | ✗ |
| Q15 | Recall | Circular Arrangements (U43) | 120 | 720 | ✗ |
| Q16 | Recall | Divisibility (U29) | 972 | 936 | ✗ |

**Tier split: Basic 3/3 (100%) · Intermediate 4/5 or 3/5 (see Q6 note) · Applied 3/4 (75%) · Recall 0/4 (0%).**

**Q6 is tainted, not a clean data point.** This paper's Q6 ("5/6 of a number is 25 → 30") is the exact printed
form documented in `U61_Lesson_Error_Report.md` as duplicating Lesson 1's original, defective worked example
verbatim, including the final answer. Prem worked through that v1 lesson before sitting this test, so a correct
Q6 here may reflect a recalled number rather than an independently solved reverse-fraction problem. The other 15
questions are unaffected. The digital test has since been corrected (Q6 now reads "4/7 of a number is 20 → 35")
but that postdates this physical sitting.

**Q15 and Q16 each show a distinct, identifiable error, not a blank guess.** Q15: wrote 720 (=6!), the classic
circular-arrangement slip of using n! instead of (n−1)! — did not divide out the rotations. Q16: wrote 936,
which genuinely is divisible by both 4 and 9, but is not the *largest* 3-digit common multiple (972 is) —
stopped at the first valid multiple rather than checking for the maximum.

**Q5, Q10, and Q14 share one shape: illegible or "?"-marked non-attempts with no working reaching a final
answer** — no numbers to diagnose a specific misconception from, just no answer given.

**This is the first sitting of the new scored Recall Round** (introduced at U61 to replace the earlier ungraded
spiral warm-ups). 0/4 is recorded with no prior Recall-Round baseline for comparison.

**Provenance:** not stated on the paper (coached/independent/retest unconfirmed) — flagged for Lui to confirm
before this is treated as an independent measure.

- index.html / prem_data.js / Unit_Test_Log.md are **not yet updated** with this result, per the standing
  `analyze-done-unit-test` workflow — deferred until the next build.

---

## Unit 62 — Real Result & Analysis (graded 24 Sep 2026) — Mixed Numbers / Bar Model

**Marked on the paper: Part 1 Score 10/12, Recall Score 3/4. Independently re-added and confirmed to match
exactly — no discrepancy found this time** (contrast U60 Q15 and Milestone 6, both of which had a marked total
that did not match an independent recount). Full per-question forensic record: `Memory Backup\TEST_RECORD_U62.md`.

| Q | Tier | Skill | Answer key | Prem wrote | Result |
|---|------|-------|-----------|-------------|--------|
| R1 | Recall★★ | Average Changes (maintenance) | 20 | 20 (after a scratched-out first attempt) | ✓ |
| R2 | Recall★★ | Linear equation, solve for n (maintenance) | n = 8 | n = 8 | ✓ |
| R3 | Recall★★ | Divisibility — largest 3-digit multiple of 24 | 984 | 960 | ✗ |
| R4 | Recall★★ | Remainders, simultaneous congruence (maintenance) | 13 | 13 | ✓ |
| Q1 | Basic | Division → mixed number (word problem) | 8½ m | 8½ m | ✓ |
| Q2 | Basic | Improper → mixed number | 3½ | 3½ | ✓ |
| Q3 | Basic | Mixed → improper fraction | 11/5 | 11/5 | ✓ |
| Q4 | Intermediate★ | Division → mixed number (word problem) | 2⅗ m | 2⅗ m | ✓ |
| Q5 | Intermediate★ | Division → mixed number (word problem) | 2½ | 2½ | ✓ |
| Q6 | Intermediate★ | Compare two mixed/improper values | 3¼ | 3¼ | ✓ |
| Q7 | Intermediate★ | Ratio/bar-model, find the whole | 35 | 35 | ✓ |
| Q8 | Intermediate★ | Mixed → improper fraction (4⅔) | 14/3 | 15/3 | ✗ |
| Q9(a)(b) | Applied★★ | Division → mixed number + interpretation | 4⅚; 4 boxes, 5 left | 4⅚; 4, 5 | ✓ |
| Q10(a)(b) | Applied★★ | Division → mixed number, then ×3 | 5½ m; 16½ m | 5½ m; 16½ m | ✓ |
| Q11 | Applied★★ | Fraction of a set, chained with NOT | 4 | 3 | ✗ |
| Q12 | Applied★★ | Reverse-solve for the whole, then divide | 6¾ | 6¾ | ✓ |

**Tier split: Recall 3/4 (75%) · Basic 3/3 (100%) · Intermediate 4/5 (80%) · Applied 3/4 (75%) · Part 1 total
10/12 (83%).**

**R3 (divisibility) repeats the exact error shape of U61's R16/Q16 on the same topic** — working shows Prem
verified 960 is a genuine common multiple of 6 and 8 (long-division check to 8)960=120), but 960 is not the
*largest* 3-digit multiple of 24 (984 is); he stopped at a valid multiple rather than searching upward for the
largest.

**Q8 is an isolated slip, not a repeat of U61's conversion-abandonment pattern.** Wrote 15/3 for 4⅔ (correct
14/3), no working shown. The identical mixed→improper mechanic was answered correctly elsewhere on the same
paper: Q3, Q4, Q9(a), Q10(a).

**Q11 has no legible working** — only a faint mark in the margin, no visible computation reaching an answer.
New content (fraction of a set chained with "NOT") that tested clean at U61.

**The unit's core target skill — converting a division result from improper fraction to mixed number — appears
in some form across 9 of the 12 Part-1 questions (Q1, Q2, Q3, Q4, Q5, Q6, Q8, Q9a, Q10a), and 8 of those 9 are
correct**, with the lone miss (Q8) a bare, unworked answer rather than an abandoned conversion.

**Provenance: CONFIRMED independent** (Lui, direct answer, 24 Sep 2026). Was unconfirmed when this section was
first written, same gap as U61's record; now resolved.

**Distance from live school chapter: +0** — same chapter as U61 (Ch.3, Fractions).

**Paper defect:** Date field partially illegible (reads approximately "12026"), same class of minor defect as
U61's date field. No leaked answers, mis-keyed items, or other rendering defects found.

**Next assessment: Unit 63** (standard unit test; the next milestone falls after the 10th unit test in this
block, per the Cycle 7 roadmap).

- index.html / prem_data.js / Unit_Test_Log.md **updated** with this result (24 Sep 2026): Part 1 10/12,
  Recall 3/4, independent, +0. U62's lesson cards moved to Completed (both the by-topic and by-unit views).

---

## Unit 63 — Built (24 Sep 2026) — Fraction × Fraction

**Prem's own request.** He asked to focus on fraction × fraction himself; Lui agreed the same day. This
replaces the originally-scheduled Fractions↔Decimals unit, which moves to U64 — cycle 7's schedule is
renumbered a second time and now runs U61–U72, with M7 after U72.

**Why now, and why it's safe to push hard.** U58 gave fraction × fraction one screen and a static example;
the U58 test's two bare products were both correct (15/15, independent). What has never been taught is what
"a fraction OF a fraction" means as a fraction of the whole (not a count), cancelling before multiplying,
improper × improper, and mixed × mixed. So this is one known rule deepened — no new mathematics beyond
cancelling — which is why the Applied tier can be pushed to genuinely exceed the book from the start.

**The coaching design.** One picture carries the unit: an overlap grid (blue columns × yellow rows, green
where they meet) in Lesson 1, and a mixed-sided rectangle (count the small cells) in Lesson 2 — the same
grid, extended. Lesson 2's centrepiece is a discrimination screen: Prem's strongest mixed-number habit, from
adding (wholes with wholes, parts with parts), gives a WRONG answer when applied to multiplying, so the trap
gets its own sorter screen and the Stuck Card is built entirely around it. Size sense ("times less than 1
makes it smaller") closes the unit as a self-check Prem can run on any answer.

**Applied tier, explicitly checked against the Y5 activity-book calibration standard.** All four of the
standard's structural moves (chain 2–3 operations, reverse-solve 2+ layers, withhold a value to derive,
cross-link to a different strand) are used across the 4 Applied questions — the first unit built directly
against the sharpened standard from the start, rather than retrofitted. Q10 withholds the fraction of the
book Tuesday represents; Q11 re-checks U62 Q11's exact NOT-chain shape with the working explicitly enforced,
since U62's version had no legible working to diagnose; Q12 cross-links into Geometry (two mixed×mixed areas,
compared).

**Recall Round (front of paper, as at U62):** carries a third probe of the "stops at a valid multiple, not
the largest" divisibility habit (R4, fresh numbers 8 and 14 — LCM 56, target 952), and two skills U62
deferred (HCF, sequences find-n).

**Verification, both gates PASS:**
- `verify_u63_plan.py` — all 55 pinned answers recompute correctly; zero teach/test collisions; zero test
  leaks; zero reuse across 197 prior workspace files. (One tooling gap fixed during this build: the script's
  own docx-corpus scan didn't exclude the just-built U63 test from itself, producing 17 false "prior reuse"
  hits against its own content — fixed by adding the same self-exclusion already applied to the U63 HTML
  files.)
- `verify_lesson_pack.py`, extended with a new **H-AREAGRID** check (counts a hand-authored SVG grid's drawn
  cells against its own claimed fraction product; validated against a deliberately wrong grid before being
  trusted) — PASS across all four lesson-pack files.

**One real build defect caught and fixed before delivery:** the test's Q3 diagram (an overlap-grid question)
was first built as a table trailing the question row, and split across a page break in the rendered PDF —
squeezing the question column and separating the diagram from its own answer line. Fixed by embedding the
diagram inside the question cell directly and marking the row `cantSplit`, then re-rendered and visually
confirmed clean across all 5 pages.

**Files shipped:** `Fractions_Lesson_FractionOfAFraction.html`, `Fractions_Lesson_MultiplyMixedNumbers.html`,
`U63_StuckCard_MultiplyMixedNumbers.html`, `U63_SelfCheck_U063.html`, `Unit_063_Test_FractionTimesFraction.docx`.
index.html's "This Unit" panel now shows U63; U62's four cards moved to Completed with real results filled
in. `prem_data.js`'s `currentUnit` updated to U63 (`status` restored to a short value after being found
overloaded with a long paragraph that was breaking the topbar badge and hero card — the long build note now
lives in its own block, `buildNote`, rendered just above the lesson cards rather than stuffed into a tiny
label).

**Session boundary: one unit only.** Built U63 and stopped, per the plan's own instruction — U64's Recall row
and U65's opening screen both depend on Q11 and R4 results that don't exist yet.

---

## Unit 63 — Tested (28 Sep 2026) — Fraction × Fraction

**Part 1 Score: 6/12 verified independently. Recall Score: 2/4 verified** (matches the paper's own marked
Recall total; the paper's own Part 1 Score field was left blank by whoever marked it, so 6/12 is the first
total of record — see `Memory Backup\TEST_RECORD_U63.md` for the full per-question table). **Provenance and
distance from Prem's live school chapter are both unconfirmed** — need to be resolved with Lui, same open item
U61 and (initially) U62 both had.

**This is a sharp drop from U62's 10/12.** By tier: Basic 2/3 (was 3/3), Intermediate 4/5 (was 4/5, unchanged),
Applied 0/4 (was 3/4). The regression is concentrated entirely in the Applied tier.

**What the per-question record shows, factually:**
- Two questions (Q2, Q8) were missed by choosing the **wrong operation** for a "find a fraction OF an amount"
  word problem — Q2 subtracted the two fractions instead of multiplying; Q8 divided by the recipe fraction
  instead of multiplying by it. In both cases the arithmetic for the (wrong) operation chosen was itself
  executed correctly.
- Two questions (Q10, Q11a) involve the "reverse via the rest / as many pages as" chain shape and were missed —
  Q10 was left blank with an explicit "Me no understand???" annotation; Q11(a) copied a given sub-fraction
  directly as the final answer instead of multiplying it by the complement fraction of the whole.
- Q12 (cross-linked geometry/fractions) had **both areas correctly calculated** in the working (4 m² and 4⅕ m²)
  but the final written answer named the wrong rug as larger, gave the wrong difference, and dropped the area
  unit — a synthesis/"finish the question" slip on top of otherwise-correct computation, not a content gap.
- Q6's numeric answer was correct (6) but the unit was written "m" instead of "m²" for an area question — the
  same length/area unit-slip shape flagged as a monitor item after U62, now recurring a second time.
- Q7's final answer and working were correct, but the written justification for why a mixed-number answer must
  be wrong ("it ain't mixed) Ben") does not actually state that reasoning.

**Grading-process note:** unlike U61/U62, this paper only carries ticks on correct answers — incorrect answers
have no mark at all, and the Part 1 Score line was never totalled. Every un-ticked answer was checked
independently against the pinned build-plan answer key before being recorded as incorrect.

**No diagnosis or next-unit recommendation is recorded here** — that is `create-build-plan`'s output, to be run
before U64 is built.

---

## Unit 64 — Built (28 Sep 2026) — Fraction Word Problems: Which Operation, Of What?

**U63's one revision.** The planner (Opus, `create-build-plan`) opened the raw U63 paper directly rather than
working from the transcript alone, since the result was surprising — and found the mechanics were actually
perfect (7/7: cancelling, improper×improper, mixed×mixed, even Q12's operation choice), while every miss where
a fraction acted on a non-count amount failed at the same point, before any multiplying started (0/5: Q2, Q8,
Q9, Q10, Q11a). Two corrections to `TEST_RECORD_U63.md` came out of that read: Q9's working is fully legible
(a third subtraction-chain instance, not illegible as first recorded), and Q12 chose the right operation for
both rug areas but slipped one times-table fact (7×12 written as 72) — a computation slip, not an
operation-choice miss. Verified Part 1 stays 6/12.

**The coaching design.** One idea, stated directly: *a fraction OF anything means ×*. Lesson 1 builds on Prem's
own proven method (÷bottom, ×top) rather than replacing it — the same bar, the same cut, extended from a count
to a fraction to a mixed number (widget W8). Lesson 2 answers "of what?" — the one question every multi-step
story needs, via redrawing the bar for each new whole, then "of the rest" (find the rest first) and "as many
as" (means ×), the two exact shapes U63 Q10 and Q11 missed. The story's verb is named directly as the trap:
"pours out," "uses," "cuts off" tell you WHICH PART, not take-away. Size sense closes the loop — a fraction of
something must always come out smaller; Q8's ÷ error gave more flour than the whole recipe, which should have
been a red flag.

**All 12 Part-1 questions are word problems** — deliberately exceeding the ≥6 quota, since the unit's whole
point is operation choice, not mechanics. Arithmetic is kept friendly on purpose (small denominators, generous
cancelling) so a wrong answer points at the operation, not the fraction work.

**New standing rule (Lui, 28 Sep 2026): the Self-Check is now compulsory before every test**, with its score
printed on the header for the first time — `Self-Check score: ___/5` alongside Part 1 Score and Recall Score.
U63 shipped without Prem taking it, and Self-Check item 2 (an "of what was left" question) would have caught
this exact gap before the real paper did.

**Two-strike accounting.** U63's lessons gave story-translation one worked example against seven test
questions — logged as strike 1 on this skill, the planner's fault, not Prem's. Per the standing two-strike
rule (Lui, 9 Sep), U64 is the one revision: if Basic Q1–3 doesn't come back 3/3, this stops for a
`U64_ReviewNote_FractionOperationChoice.md` rather than a second rebuild.

**Verification, both gates PASS, pasted not just claimed:**
- `verify_u64_plan.py` — 56 pinned answers recompute; 0 teach/test collisions; 0 shared operand pairs; 0 test
  leaks; 0 prior reuse across 202 prior workspace files. Run both at plan time and again post-build on device.
- `verify_lesson_pack.py` (F-BARMODEL, G-MIXEDFORM) — PASS across all 4 lesson-pack files.

**Files shipped:** `Fractions_Lesson_OfMeansTimes.html`, `Fractions_Lesson_OfWhat.html`,
`U64_StuckCard_WhichOperation.html`, `U64_SelfCheck_U064.html`, `Unit_064_Test_FractionWordProblems.docx`.
index.html's "This Unit" panel shows U64 (with a "Step X of 4" ordering across lessons, Self-Check, and the
printed test); U63's four cards moved to Completed, flagged "Gap → U64". `prem_data.js`'s `currentUnit` updated
to U64; `lastUnit` now carries U63's verified 6/12 result; U62 archived to `_U62archived`.

**Session boundary: one unit only.** Built U64 and stopped, per the plan's own instruction — U65's opening
screen depends on U64's Q2, Q12 and Self-Check-line results, which don't exist yet.

---

## Unit 64 — Tested (3 Oct 2026) — Fraction Word Problems: Which Operation, Of What?

**Part 1 Score: 4/12 verified (marked 4/12 — no discrepancy). Recall Score: 1/4 verified** (paper's Recall field
blank). Pass bar 10/12 not met. **Provenance: independent** (standing rule). **Chapter distance: +0.** This was U63's
one planned revision. Full per-question table: `Memory Backup\TEST_RECORD_U64.md`.

By tier: Basic 2/3 (U63: 2/3), Intermediate 2/5 (U63: 4/5), Applied 0/4 (U63: 0/4). Part 1 trend: U62 10/12 → U63 6/12 → U64 4/12.

**What the per-question record shows, factually:**
- Right: Q1 (×), Q2 (− of an amount; no unit written), Q5 (× not ÷; full working, "cups"), Q6 (÷, answer only), Q9(b) (200, answer only), R4 (36).
- Wrong operation on "fraction of an amount" questions, arithmetic then executed correctly: Q4 subtracted 1/3 (3 9/12 − 4/12); Q7 added 5/6 (12/5 + 5/6 = 97/30); Q11 found the area correctly (12 m²) then subtracted 3/8 (12 − 3/8 = 81/8). Q3's working line was `3 5/15 − 9/15 = 2 11/15`, a scribbled-out line above it, and the written answer was 9/15 m.
- Q8: first step correct (16/3 × 3/4 = 4), then a scribbled-out block; written answer 3/8 m (the fraction from the question).
- Q9(a): 4/10 written, value equals 2/5, marked X (not simplest form).
- Q10: bar drawing, "30" braced under about 3 boxes, no calculation, answer 90 (key 120). Q12: two bars, no calculation, answer 1/4 l (key 1/2 L).
- Units: written on Q1, Q3, Q5, Q7, Q8, Q9(b), Q11 (m²); missing on Q2, Q4, Q10.
- Recall: R1 24 (key 25, three attempts visible), R2 and R3 each a bare "?", R4 correct. R3 is blank again.
- **Self-Check score line blank** (compulsory from U64).

**Paper flags:** Self-Check line blank; Q9(a) is a form miss, not a value miss; R1 red circle meaning unclear; date field partial. No leaked or mis-keyed items.

**No diagnosis or next-unit recommendation is recorded here** — that is `create-build-plan`'s output.

**Next assessment: Unit 65** (standard unit test; milestone after U70).

---

## Unit 65 — Tested (5 Oct 2026) — Fraction of an Amount: Count the Pieces

**Part 1 Score: 5/12 verified (marked 5/12 — no discrepancy). Recall Score: 2/4 verified.** Pass bar 10/12 not met. **Provenance: independent** (standing rule). **Chapter distance: +0.** Full per-question table: `Memory Backup\TEST_RECORD_U65.md`.

By tier: Basic 2/3 (U64: 2/3), Intermediate 2/5 (U64: 2/5), Applied 1/4 (U64: 0/4). Part 1 trend: U63 6/12 → U64 4/12 → U65 5/12.

**What the per-question record shows, factually:**
- Right: Q2, Q3, Q7 (fraction of an amount, ×), Q4 (a fraction with a unit, subtracted), Q9 (area, then 5/8 of it; unit "m" for m², counted on value), R1, R3.
- Fraction subtracted or added where the key needs ×: Q1 (− 1/3), Q5 (− 1/4), Q6 (+ 3/5), Q8 (− 3/7), Q11 (− 1/5 then − 2/3), Q12 (second step − 7/8; first step correct).
- Q10 unattempted; "X or +" circled in the working column. R2 and R4 each a bare "?".
- The printed WHOLE / pieces frame was blank on all 12 Part-1 questions.

**Self-Check (JSON, attempt 1, the score of record):** 3/5, `ready:false`, 1.8 minutes, L1 and L2 ticked, difficulty "ok", `whole` and `pieces` empty on all 5. Header score and "saved? Yes" match the file. The test was sat after a not-ready Self-Check. Self-Check Q1–Q3 right, Q4 (left) and Q5 (as far as) wrong; the paper's Left items Q5 and Q8 were wrong and Q4 was right.

**Paper flags:** partial date; Applied band mark a lone stroke; Q9 unit strictness differs from U64 Q9(a). No leaked or mis-keyed items.

**No diagnosis or next-unit recommendation is recorded here** — that is `create-build-plan`'s output.

---

## Unit 66 — Rebuilt as v2.0 (12 Oct 2026) — Taken piece & Left-over piece: a fraction OF an amount, and what is left

**v1 outcome (logged, not a strike against Prem):** the v1 Star Path drill was **not finished — 14 items, 0 first-try, 2 stars, 6.1 min; language + loop design faults; superseded by v2.** Lui's review: the labels 'OF something / AMOUNT / PART / LEFT' confused even him. v1 never reached a test, so the failure is attributed to the design. v1 files are in `Lessons\_retired\` and `Unit Tests\_retired\`.

Built from `BUILD_PLAN_MATH_U66v2_TakenAndLeftOver.md` (v2.0). One unit only; stopped for the real result, the drill JSON(s) and the code on the paper. Lui 5 Oct (standing): don't move on until Prem passes 80% AND shows he understands.

**Design:** kid words only (taken piece = blue, left-over piece = white); one bar, two boxes; one story-words question — does the story TELL you how much was taken (like 1/3 L) or must you work it out (like 1/3 of the juice)? Whole numbers first (Lesson 1), then fraction bottles (Lesson 2).

**Files:** `Fractions_Lesson_TakenAndLeftOver_EasyNumbers.html` and `..._SmallerBottles.html` (6 screens each), `U66_StuckCard_TakenAndLeftOver.html` (12 Lego bricks), `U66_Drill_TakenAndLeftOver.html` (34-item laddered Star Path: L1 3 stars, L2 4, L3 4, Boss taken/left/told; a miss shows the trick then steps down a level; two misses in a row open a 'do one together' walk-through; stars never go down; sittings ≤12 items ending on a success; code `PIECE-66`; saves `MATH_U066v2_Drill_[date]_a[n].json`), `Unit_066v2_Test_TakenAndLeftOver.docx` (16Q, 5 pages, no tick-boxes; Recall R1 Fraction of a Set, R2 Average Changes, R3 Remainders, R4 Words to Expression).

**Gates (device unless noted):** `verify_u66v2_plan.py` PASS (111 answers, 0 collisions, 0 leaks, 0 prior reuse across 212 files); `verify_u66v2_build.py` PASS (headers 12/12, key 16/16, 0 leaks on the rendered paper; the 34-bar DOM check runs in the container, 34/34); `verify_lesson_pack.py` PASS on all four pages; six Playwright drill runs PASS in the container.

**Pass rule:** Part 1 ≥ 10/12 AND Q12(a) explained. No Star Path code on the paper = not a measurement.

### Unit 66 — Lessons and Star Path revised as v2.1 (12 Oct 2026; non-strike; test unchanged, still not sat)

**Why (Lui, 12 Oct):** the v2.0 Lesson 2 compressed several steps onto one line and Prem went blank; the v2.0 Star Path needed 3 + 4 + 4 stars and a Boss round, so it behaved like a second test (he complained every round). v2.1 makes the Star Path practice that supports the lessons and the test, and makes every worked calculation one micro-step per line.

**What changed:** every calculation is one move per line with its reason beside it, shown one line at a time (lines pinned in `u66v21_worklines.json`, copied verbatim, gate J-ONESTEP). A **First-Step Map** (Q1 does the story TELL the taken piece? · Q2 whole number or fraction bottle? · Q3 which box?) is in both lessons (walk-throughs), as printable `U66_FirstStep_Map.html`, in the Stuck Card, and lit up in every not-yet card. Lesson 1 = 7 screens (jump-to-map button); Lesson 2 = 8 screens (bridge: 33 L, 2/3, line 2 glowing; the worked example is split — half shown, half his). **Star Path:** Set A (S01,S02,S07,S04,S05,S08) after Lesson 1, Set B (S10,S09,S17,S15,S12,S23,S27,S24) after Lesson 2, optional Extra (other 20); three map taps first; ⭐ first try, ✨ fixed after the lit path + line-by-line working; no repeat, step-down, Boss or walk-through loop; finishing Set B in any score shows TRAP SPOTTER ✓ + confetti + `PIECE-66`; "⭐ n first-try · ✨ n fixed" with no fraction or percentage; v2.0 stars show as "Earlier stars". Saves `MATH_U066v2_Drill_<date>_a<n>.json` (practice schema: set, firstTry, fixed, mapTaps, per-item mapPath / mapWrong / linesViewed — these show whether a blank is at the first step or inside the calculation).

**Gates:** `verify_u66v2_plan.py` (device): 113 answers, 0 collisions, 0 leaks, J-ONESTEP 52 blocks / 379 lines / 0 failures, planted 4/4, `--html` 0 bad lines on all five pages; its "compressed runs" counter reports hits on the pinned lines and on inline script/CSS, so it can never reach 0 for the specified DOM (flagged to Lui; amended counter in `verify_u66v2_build.py` = 0 runs outside `.wl` and `<script>`). `verify_u66v2_build.py` (device + container): worklines verbatim in all pages, 34/34 not-yet cards rendered with the right lit path and one line shown first, bars checked, test key 16/16, 0 leaks. `verify_lesson_pack.py` PASS. Container Playwright: Set A all right, Set B with 4 wrong (incl. wrong map taps recorded), reload resumes, blocked storage restarts cleanly, 34-block dump.

**Order for Prem:** Lesson 1 (or jump to the Map) → Star Path Set A → Lesson 2 → Star Path Set B → the paper. Pass rule unchanged: Part 1 ≥ 10/12 AND Q12(a) explained; no code on the paper = not a measurement.

### Unit 66 (v2 test; v2.1 lessons + Star Path) — sat, scanned 13 Oct 2026

**Provenance: independent. Distance from live chapter: +0 (Ch.3, Core).** Full forensic record: `Memory Backup\TEST_RECORD_U66.md`. Route taken: Lesson 1 → Star Path Set A → Lesson 2 → Star Path Set B → paper (Star Path code "Piece-66" written in the header, matching the Set B JSON).

**Scores:** **Part 1 — no total written on the paper (header blank).** Re-added under the paper's own rule (two-part questions need both parts): **7/12**; the marker's band marks ("4 or 5 ?", "0 or 1 ?") allow 7–9/12; pass bar 10/12 not met at any value. **Recall 2/4** (marked 2/4; R3 and R4 unattempted, bare "?"). Splits: **Basic 3/3 · Intermediate 4/5 (Q4 swapped) · Applied 0/4 (Q12(b) right, Q12(a) not credited; 1/4 if credited).** Earlier papers on this chapter: U63 6/12, U64 4/12, U65 5/12.

**Question-level observations:** Q1–Q3 all correct (whole-number bottle ×2, told ×1, no working on Q1/Q2). Intermediate: Q5, Q6 (told), Q7 (both parts), Q8 correct; Q4 has the two values in each other's boxes ((a) 3/5 L, (b) 1 L; key 1 L / 3/5 L). Q9 answer 2 1/3 L with a lone "3" as working (key 1 L). Q10 answer 1 3/4 L; working `2 8/12 − 3/12 = 2 5/12`, then `25/12 − 8/12 = 1 9/12` (key 1/2 L). Q11 answer 4 17/40, no unit; working shows 2 1/2 written as 3/2, `3/1 × 8/5 = 24/5`, then `4 4/5 − 3/8` (key 5 m²). Q12(a) written "He wrote "L" at the back of "2/5""; (b) 2 L correct, `10/3 × 2/5 = 4/3` circled red. The printed WHOLE / Taken / Left-over frame is blank on all 12 questions.

**Star Path JSONs (practice):** Set A 3.3 min, ⭐ 6 / ✨ 0, map taps wrong q1/q2/q3 = 1/4/2 (first Q2 tap "frac" on all four whole-number items). Set B 9.3 min, ⭐ 6 / ✨ 2, map taps wrong 2/2/9; fixed items S12 (left-over given 1 7/8, key 7/8) and S24 (gave the taken piece 1 1/5 as the left-over piece), each with 10 lines viewed; code PIECE-66.

**Open items / flags:** no Part 1 total or resolved band marks on the paper; Q4 swap marking ambiguous (tick at the (b) line plus swap arrows); Q12(a) marking ambiguity open since v2.0; Q11 unit missing; test scaffold frame unused. Self-Check: none for this unit (Star Path JSONs present and valid, distinct attempt numbers).


**Lui's ruling (13 Oct):** Q4's swapped answers are wrong; **U66 Part 1 = 7/12 final**, Applied 0/4, Recall 2/4. Planner note: Q9–Q11 were two-round stories no U66 lesson or practice item taught, a design fault, not a strike.

### Unit 67 — Two-Round Stories: the left-over piece becomes the NEW whole (built 14 Oct 2026; lesson rebuilt 15 Oct, v2.1; SAT 15 Oct)

Built from `BUILD_PLAN_MATH_U67_NewWhole.md` **v2.1**. v1.0 (two lessons, two Star Paths, code) was split on 14 Oct (three tests in one unit was too much; Star Path B too tough). On 15 Oct Lui named a likely root cause of Prem's fraction trouble: the map and Stuck Card lived on separate pages he could not open while learning, in confusing words. v2.1 puts one **Fraction Formula Card** inside the lesson. One unit only; stopped for the lesson JSON and the paper. Standing: no moving on below 80% plus understanding; Prem sits papers alone.

**Idea in kid words:** when the story says "of what was LEFT", the left-over piece is the NEW whole; draw a new bar under it and do the same steps again. **The card (an equation-like map):** ① taken part = fraction × whole (told? take it as given); ② left part = whole − taken part; ③ "of what was LEFT" → the left part is the new whole, back to ①. × steps ×0 (mixed → improper; whole number n = n/1), ×1 top × top and bottom × bottom, ×2 simplify; − steps −0 improper, −1 same bottoms, −2 top − top (bottom stays), −3 simplify. It docks beside the lesson on a wide screen, opens on screens 2–4, is one tap away on every screen, prints on one page, and every worked line shows the card step it uses and lights it up. Whole numbers use the same × route.

**Shape:** ONE lesson, `Fractions_Lesson_NewWhole.html`, 6 screens, then "Your turn" x5 on the last screen, saved after every item and resuming where he stopped. No Star Path, no code. The Stuck Card and First-Step Map are retired (`Lessons\_retired\u67_v2.0\`).

**Test (unchanged):** `Unit_067_Test_NewWhole.docx`, 16 questions (R1–R4 recall, Q1–Q12 Part 1). Pass = Part 1 ≥ 10/12. A swapped (a)/(b) pair scores 0. Key question is Q9.

**Gates:** `verify_u67_plan.py`: answers, collisions, leaks, prior reuse (222 files), unpractised, one-step (796 lines) and card tags all 0, planted lines caught; its compressed-runs counter still fires on the plan's own pinned lines (flagged; the amended counter in `verify_u67_build.py` is 0). `verify_u67_build.py` PASS, `verify_lesson_pack.py` PASS, Playwright lesson and card runs PASS.

**Result (15 Oct 2026, independent, +0 chapters):** Part 1 **9/12** (verified; header blank) — below the plan's 10/12 line. Basic 1/3 (Q2 only), Intermediate 5/5, Applied 3/4 (Q9, Q10, Q11). Recall 2/4 (R1, R2 right; R3 Sequences and R4 Mixed Numbers wrong). Key question Q9 **correct**. No swaps. Failures: Q1(b) 1 8/9 (key 1 1/9; two-part question scores 0), Q3 14 m (key 18 m; working shows 42 then 28), Q12 circled 1 11/24 L (key 7/8; 7/8 is written in the working, then 14/6 − 7/8 was continued). The `Left after round 1 =` scaffold was left blank on all 7 questions (Q2–Q8); its value appears in the working column on six of them. Lesson JSON `MATH_U067_Lesson_2026-10-15_a5.json`: finished, 4 first-try + 1 fixed (B3, 18 lines viewed), 0 swaps, 33.8 min, B4 took 13.5 min; first round-1 entry was wrong on A5, B3, B4; attempt number 5 with no a1–a4 files. Paper scan 10:12, about 33 minutes after the lesson's last save (plan said "tomorrow"). Full record: `TEST_RECORD_U67.md`. Next assessment: unit test (U68).

**What the result will tell us:** PASS → the card is reused unchanged in U68. Swaps or ①/② mix-ups on the paper with a clean lesson JSON → U68 opens with a 3-item "fill in the card from memory" warm-up. Wrong at ×0/−0 → U68 adds ×0/−0 drill items.

**Next:** Prem's lesson JSON and the paper; then the analysis. Then U68 (plan completed after the result), "as far as / as many as", Area of Triangles.

### Unit 68 — The Left Part, Done Right: taking away when the bottoms differ (BUILT 15 Oct 2026; SAT by 17 Oct)

Built from `BUILD_PLAN_MATH_U68_LeftPartDoneRight.md` **v1.0**, written from the U67 result: the new-whole idea landed (Intermediate 5/5, Applied 3/4, key Q9 right), but three of the four subtractions with different bottoms were wrong (Q1(b), R4, lesson B3), Q12 answered the wrong part of the story, the scaffold box was blank 7/7, and the paper was sat about 33 minutes after the lesson.

**Idea in kid words:** to take away, make everything improper, give it the same bottoms, then top − top. **Habit:** read the question again — does it ask for the TAKEN part, the LEFT part, or HOW MUCH MORE? ("How much more?" is also a take-away.)

**Shape:** ONE lesson, `Fractions_Lesson_LeftPartDoneRight.html`, 6 screens: (0) warm-up, two quick ones; (1) a picture of 3 1/4 − 5/6 (bars recut into twelfths) next to the improper-fraction route; (2) a count-up strip to find the same bottom, plus the trap card (do not split wholes and parts); (3) a three-part story with the ④ last check; (4) Your turn ×5 (saved after every item, resumes where he stopped, answer-check nudge: "That's a real number from this story — but it's the LEFT part. ④ What does the question ask for?"); (5) a 2-minute Memory Boost (Sequences, Remainders) and the finish card. The Formula Card gains step ④ and a new −1 line (count up in the BIGGER bottom). The "Left after round 1" box is now optional.

**Test:** `Unit_068_Test_LeftPartDoneRight.docx`, 16 questions: R1–R4 recall (Sequences → 209, Remainders → 26, Perimeter & Area → 96 cm², Fraction of a Set → 16), Q1 a bare calculation (3 2/5 − 1 3/4 → 1 13/20), Q2–Q12 stories (Basic 3, Intermediate 5, Applied 4). No scaffold boxes. Pass = Part 1 ≥ 10/12. Key question **Q1**. A swapped (a)/(b) pair scores 0; an answer that is a different part of the same story scores 0 (note "answered other part").

**Gates:** `verify_u68_plan.py` — answers, collisions, leaks, prior reuse (243 files), unpractised, one-step (298 lines) and card tags all 0; its compressed-runs counter fires 69 times on the plan's own pinned lines (known defect, flagged; the amended counter in `verify_u68_build.py` is 0). `verify_u68_build.py` PASS, `verify_lesson_pack.py` PASS, Playwright lesson runs PASS (all right = 5 stars; nudges; swap; resume; no-storage; narrow and wide card).

**Result (sat 17 Oct 2026, independent, +0 chapters):** Part 1 **7/12** (verified; the header says 5, the band marks written on the paper add to 7) — below the plan's 10/12 line. Basic 3/3, Intermediate 2/5 (Q5, Q8), Applied 2/4 (Q9, Q10). Recall **3/4** (R1, R2, R4 right; R3 Perimeter & Area wrong: "72 cm", key 96 cm²). **Key question Q1 correct** (3 2/5 − 1 3/4 = 1 13/20). No swaps. Failures: Q4 (2 9/28 circled; 63/28 is in the working, two improper → mixed conversions wrong), Q6 (circled 1 3/4, the left-over; the correct taken part 7/2 is in the working), Q7 (working stops after the first round), Q11(b) (2 1/6, the poured amount; Q11 scores 0), Q12 (a) 15/41 and (b) 1 33/72, both wrong; (b) subtracts B from the left-over and does not use A. Different-bottoms subtractions written in the working were carried out correctly in every line (Q1, Q2b, Q4, Q5, Q8, Q9, Q10 twice, Q11a, Q12 twice). "How much more" 1/3 (Q10 right; Q11b, Q12b wrong). Answer given was a different part of the story on Q6, Q11(b), Q12(b). **Lesson JSON (attempt 1, 13 min, finished): 2 stars + 3 fixed, 0 swaps** — Y1 and Y3 first try; Y2 (1 7/8), Y4 (a 1 3/7, b 6/7; 5.7 min, 18 lines) and Y5 (2/9; 14 lines) not; the answer-check nudge never fired; Boost bk1 65 (3 tries) and bk2 17 both right. The paper was scanned about 64 minutes after the lesson's last save, same day (plan: tomorrow). Full record in `TEST_RECORD_U68.md`.

**What the result will tell us:** Q1 right and Part 1 ≥ 10/12 → fractions arc moves to U69 (Bigger Stories: area as round 0, three rounds, say why). Q1 or the other different-bottom subtractions wrong with a clean lesson JSON → the count-up step needs a drill, not more stories. "Answered other part" on the paper → the ④ habit needs its own warm-up.

**Next:** the planner reads `TEST_RECORD_U68.md` and completes U69. U69 stays an outline until then.

### Unit 69 — School-test prep: all of Chapter 3 Fractions (BUILT 17 Oct 2026)

Built from `BUILD_PLAN_MATH_U69_SchoolTestPrep_Ch3.md` **v1.0** for the school fractions test on **Tue 20 Oct** (all of Chapter 3, Activity Book pp.39–71). It is a review, not new teaching. Route: **Sun 18 Oct the lesson, Mon 19 Oct the mock, Tue 20 Oct the school test** (the lesson and the mock are on different days).

**Lesson:** `Fractions_Lesson_ChapterReview.html`, 6 screens (recall of the card; add and subtract; multiply and 'of what was left'; the four-part story with the ④ check; division and decimals; working backwards), each with a worked example and a Your turn (8 in all). The **Chapter-3 Formula Card** adds HOW TO +, ÷ (a ÷ b = a/b), decimals and rounding, working backwards and a ⑤ CHECK TWICE step; it prints on one A4 page (link on the hub).

**Mock:** `Unit_069_Mock_Ch3Fractions.docx`, 16Q in three parts: A six calculations (about 10 min), B six word problems (about 20), C four challenge (about 15); 45 minutes, card put away; self-marked from a line-by-line key; key question C1. A6 scores only if both the mixed number and the decimal are right; an answer that is a different part of the story scores 0. **Monday-evening table (10 minutes):** 13/16 or more = ready; Part A under 5/6 = redo the missed A questions; A6, B4 or B5 wrong = redo lesson screen 4; C2 or C3 wrong = redo screen 5; 'answered other part' on C1 or C4 = say ④ aloud on every word problem.

**Why this shape (from U68, 7/12):** the subtraction step landed (key Q1 right, every subtraction line right), but three questions answered a different part of the same story, so the ④ check goes into every word problem. U68 was also sat about 64 minutes after its lesson, so the two U69 pieces are kept on separate days.

**Gates:** `verify_u69_build.py` PASS (amended compressed-runs counter 0), `verify_lesson_pack.py` PASS, Playwright lesson runs PASS, `verify_u69_plan.py` FAIL only on its compressed-runs counter (known defect: it fires on the plan's own pinned lines). Stopped for the lesson JSON, the mock and the school result. **Open for Lui:** the U68 header Part 1 '5' vs the verified 7, and Q7 read as 2/3 or 7/3.

**Next:** the planner reads the school result and the mock, then completes U70 (Bigger Stories, an outline until then).

**Next assessment: a standard unit test** (milestone after U72). Content to be set by `create-build-plan`.

### Milestone 7 — Units 61–69, Cycle 7 Fractions (BUILT 19 Oct 2026; SAT 19 Oct 2026)

Built from `BUILD_PLAN_MATH_M7_Cycle7.md` **v1.0**; `Milestone_07_Test_Units61to69.docx`, 20Q: Q1–15 ISA-style written, Q16–20 Kangaroo MCQ. Plan gate PASS (answers, leaks, headers, prior reuse, 151 key lines, card tags all 0). Planned sit 24–25 Oct; the scan is stamped 19 Oct 13:49 UTC, the day it was built and the day before the school Ch.3 test.

**Result (record `TEST_RECORD_M7.md`):** **12/20 verified** (12 ticks on the paper; the header score boxes are blank; a red "8" circled outside any box). Basic 2/3 · Intermediate 3/6 · Applied 3/6 · Kangaroo **4/5** (M6: 1/5) · Fractions block **7/12** · Recall 1/3 (Q8 right; Q9 and Q15 wrong). Provenance: no tick box on the paper; independence not recorded.

**Question-level observations:** right Q1, 3, 4, 7, 8, 12, 13, 14, 17, 18, 19, 20. Wrong: Q2 2 1/2 (key 2 7/18); Q5 3 1/4 (key 2 1/4; the sum written as 7 7/12); Q6 1 9/10 (key 1 1/2; first subtraction right, the "2/5 of what was left" step started from 3/2); Q9 18 cm (the missing length; area not written); Q10 96 (24 × 4); Q11 shoes, $90 (key $50 more); Q15 4 cm (key 8 cm; area 36 right, height line absent); Q16 A (key C). Two-part Q12 and Q14 right in both parts. Q9, Q10, Q11, Q15 carry no or partial working.

**Plan §5 rows hit (facts, not a plan):** Fractions block 7/12 is in the "≤7/12, flag to Lui" row; Q15 wrong is in the "half-rectangle refresher" row; Kangaroo 4/5 is in the "breakthrough" row.

**Paper defect:** the key page printed the answer value, not the letter, for Q16–Q20 ("10" for Q16, whose key is C); a red note "10 is A ?" is beside Q16. Corrected in the live docx; the printed copy is kept in `Unit Tests\_retired\`.

**Next assessment: a standard unit test** (U70, Chapter 4). The planner reads `TEST_RECORD_M7.md` and writes its plan.

---

## Diagnostic Paper — ASMOPSS 2024 (done 3 Jul 2026)

**Score: 10 / 25 questions correct.** (Grade-4, 25 questions; Q15 was a printed-error question reissued mid-paper as a replacement page.)

> **Read:** Lower than the 2025 paper (13/25), but this is an *earlier, unfamiliar* past paper picked up now for cross-validation, not a regression — don't read this as backsliding. What matters is the pattern, and it's a strong confirming signal: **systematic counting/enumeration precision is the single most consistent gap across BOTH diagnostics and U36** — three separate misses here (Q3, Q19, Q24) are all the same failure mode (miscounting or incompletely enumerating a range), the exact thing U37 is already being built to fix. There's also a real strength worth naming: he correctly solved a genuinely hard rescaled-clock proportional-reasoning question (Q13) that most Grade-4 students would freeze on.

### What he got RIGHT — confirmed strengths

| Q | Topic | Answer | Note |
|---|-------|--------|------|
| Q1 | Arithmetic (distributive shortcut, 4×(8924−8732)) | 768 ✓ | Order-of-operations |
| Q4 | Algebra substitution (□, △ symbols, two-step) | 110 ✓ | |
| Q6 | Arithmetic sequence, common difference | 337 ✓ | |
| Q7 | Algebra substitution (□, △ symbols) | 254 ✓ | |
| Q8 | Two-unknown word problem (adult/child tickets) | 2 ✓ | Simple system of equations |
| Q12 | Reverse-fraction word problem (work backward from remainder) | ฿972 ✓ | |
| Q13 | Rescaled-clock proportional reasoning | 45 min ✓ | **Standout** — genuinely hard, solved cleanly |
| Q18 | Composite area (square rooms + walkway) | 169 m² ✓ | |
| Q21 | Position counting (nth from both ends of a row) | 29 ✓ | |
| Q22 | Unit conversion + multi-item sum/subtraction | 938 g ✓ | |

**Pattern of strength:** algebraic substitution with placeholder symbols, multi-step arithmetic word problems, unit conversion, reverse word problems, composite-square area, and — notably — proportional/rate reasoning under an unfamiliar rescaled system (Q13). When he engages carefully with a well-defined multi-step problem, he's reliable.

### What he got WRONG — five gap clusters

| Q | Topic | His answer | Correct | Gap cluster |
|---|-------|-----------|---------|-------------|
| Q3 | Naturals < 12 divisible by 2 | 4 | 5 | **Systematic counting precision** |
| Q19 | Count 3-digit windows > 200 in a digit string | 17 | 16 | **Systematic counting precision** |
| Q24 | Count digit "1" written from 1–200 | 130 | 140 | **Systematic counting precision** |
| Q25 | Distribute 8 identical sweets to 6 friends, ≥1 each | 224 | 21 | **Combinatorics — untaught (stars and bars)** |
| Q10 | Balance-scale weight relationships (unlabeled figures) | 114 | — | **Figure / spatial algebra** |
| Q14 | Count quadrilaterals in a composite figure | *(blank — wrote "QUADRILATERALS?")* | — | **Figure / spatial — skipped** |
| Q15 | Composite perimeter (triangle+square+rectangle, shared perimeter) | *(blank)* | — | **Figure / spatial — skipped** |
| Q23 | 3D staircase cube counting (hidden cubes) | 22 | — | **Figure / spatial** |
| Q9 | Café bill with limited-use discount vouchers | 327 | ~367 | **Multi-constraint word problem** |
| Q5 | Calendar/date reconstruction | 160 | — | **Multi-constraint word problem** |
| Q20 | Pictogram + verbal-clue deduction | *(blank)* | — | **Multi-constraint word problem — skipped** |
| Q17 | Pencil-length overlapping-segments ratio | *(blank/unclear)* | — | Multi-constraint word problem — skipped |
| Q11 | Letter-substitution cipher (LIE + SEE) | *(blank)* | — | **Never-seen topic** — Prem wrote his own note: *"How do I get 'i' for LIE?"* |
| Q2 | Multi-part digit puzzle | 95 | — | Uncertain — flagged wrong by official score |
| Q16 | Linear pattern (block-height sequence) | 126 | 127 | Computational slip, not conceptual — right method (41×3), wrong final constant |

---

## Gap Analysis → Focus Areas (cross-validated against U36 + ASMOPSS 2025)

**1. Systematic counting & enumeration precision — HIGHEST RETURN, now confirmed 3x.** Q3, Q19, Q24 are all the *same* failure mode: an incomplete or off-by-one enumeration over a range or digit string. This is the identical gap already flagged at U36 (Q6, Q9, Q15 — listing/extraction slips) and it's now showing up on an unfamiliar past paper too, which means it's a real, generalized weak spot rather than one bad test day. **This is exactly what U37 (currently pending) is built to fix — good, keep that as-is.** After U37 clears, this cluster needs one more reinforcement pass with harder enumeration contexts (digit-frequency across a range, substring windows) before it can be called closed.

**2. Combinatorics — distribution with constraints (stars and bars) — likely untaught, high value.** Q25 (8 identical sweets, 6 friends, each ≥1) isn't a small slip — 224 vs. 21 shows a completely different (wrong) method was applied, consistent with never having seen this problem type. This is a common ASMOPSS/olympiad question family and worth a dedicated fresh lesson.

**3. Figure & spatial multi-step reasoning.** Balance-scale weight chains (Q10), quadrilateral counting in a composite figure (Q14, skipped), composite same-perimeter shapes (Q15, skipped), and 3D cube counting (Q23) — four separate figure questions, three of them abandoned rather than attempted. This is a step up from the flat-grid rectangle/square counting already in U36/U37 — the figures here require inferring relationships (weights, shared perimeters, hidden cubes) rather than just counting shapes directly.

**4. Multi-constraint word problems.** Q5 (calendar), Q9 (limited-use vouchers), Q20 (pictogram + verbal clues), Q17 (pencil segments) all require holding several given clues in mind at once and combining them — three were left blank entirely. This is a different skill from single-path word problems: it needs a "write down every clue as its own line first, then combine" habit.

**5. Never-blank habit hasn't generalized to harder papers.** On the 2025 paper he at least wrote "IDK" (an attempt). Here, Q11, Q14, Q15, Q17, and Q20 — five questions — were left with no answer at all, which is a step backward from the "always make a structured first move" habit trained at U35. Worth re-emphasizing specifically for *unfamiliar* problem types, not just hard ones within a familiar topic.

---

## Recommended Upcoming Lessons — prioritised

- **Systematic Counting Precision, Round 2 (priority 1):** after U37 clears, one reinforcement pass on harder enumeration — counting digit-frequency across a full range (careful with ranges that start below 10 or straddle a place-value boundary) and counting substrings/windows in a written digit string. Directly extends U37's fix.
- **Combinatorics — Distributing Identical Items (priority 1):** "stars and bars" via a visual bars-and-dividers method — distributing identical items among groups with a minimum-per-group rule. New topic, high competition frequency.
- **Figure & Spatial Reasoning II (priority 2):** balance-scale weight-relationship chains, composite same-perimeter shapes, and 3D cube-staircase counting (counting hidden/supporting cubes) — the next layer up from flat-grid counting.
- **Multi-Constraint Word Problems (priority 2):** teach the "list every clue on its own line before combining" method, using calendar/date puzzles and limited-use-discount/voucher problems as the training examples.
- **Standing habit drill (not a lesson):** "never leave it blank — write the given numbers down even if you don't see the full path" — re-drill specifically for *unfamiliar-looking* questions, since the habit held on the 2025 paper but slipped here.

**Coaching strategy — timeline note:** ASMOPSS 2026 is now **~5 weeks away (9 Aug)**. Recommend U37 finishes as planned, then U38 leads with the two priority-1 topics above (counting precision reinforcement + stars-and-bars), and remaining past papers (2022, 2023) get folded in as timed practice sooner rather than later given the tightening runway.

---

### Next Assessment

**No change to the immediate plan: U37 (targeted retest — Rectangle-Counting Generalisation + Listing Answer-Extraction) is already pending and stays the next assessment.** This diagnostic doesn't replace that — it confirms U37 is targeting the right thing. Once U37 clears, **U38 should lead with Combinatorics (stars and bars) and a systematic-counting-precision reinforcement pass**, ahead of whatever was next in the general rotation, given how consistently that cluster keeps surfacing. Milestone **M4** still lands after U40 (only U31–U36 done since M3, U37 pending) — not due yet.

---

## Diagnostic Paper — ASMOPSS 2025 (done 23 Jun 2026)

**Score: 13 / 25 questions correct.** (Grade-4 First Round, 25 questions, mixed 2.5 / 4.5 / 6-mark tiers.)

> **Read:** This is a *solid* base — better than a typical bronze profile. He cleanly wins the standard and early-tier questions, and his recently-trained topics (sequences/series) **directly earned marks**. The 12 he lost are not spread randomly — they cluster in four competition-specific areas we have not yet trained. Closing those is exactly the bronze→gold gap, and it's a trainable list.

### What he got RIGHT — confirmed strengths

| Q | Topic | Answer | Note |
|---|-------|--------|------|
| Q1 | Arithmetic series sum (22+30+…+102) | **682** ✓ | Sequence sum — trained strength paid off |
| Q3 | Fraction capacity (⅓ full + 234 mL) | 351 mL ✓ | Fraction reasoning |
| Q4 | 32nd term of 24, 35, 46, … | **365** ✓ | nth-term formula — just closed at U30 |
| Q6 | Mix 24 L + 12 L into 400 mL bottles | 90 ✓ | Unit conversion + division |
| Q7 | Postman shortest route (graph) | 19 km ✓ | Spatial / route reasoning |
| Q8 | Rope 265 cm, 12 pieces, 13 left | 21 cm ✓ | Multi-step arithmetic |
| Q15 | Pencil + eraser (two arrangements) | 40 cm ✓ | Bar-model / two-unknown |
| Q23 | Reading-time difference | 108 min ✓ | Time arithmetic |
| Q24 | Numbers 41–99 with digit sum ≥ 5 | 59 ✓ | Reasoned the boundary cleanly |
| Q25 | 3 gifts to 3 children, # ways | 6 ✓ | **Counted by listing — permutations** |

**Pattern of strength:** sequences/series, multi-step arithmetic word problems, fractions, time/unit conversion, bar-model, route reasoning, and *small-case* counting by enumeration. The unit-cycle training is clearly transferring to competition.

### What he got WRONG — the four gap clusters

| Q | Topic | His answer | Correct | Gap cluster |
|---|-------|-----------|---------|-------------|
| Q10 | Notebook distribution (1 each → 7 left; 2 each → 2 short) | "forgot to do the chart" | — | Number theory / algebra |
| Q11 | Last 3 digits of (2,677,644−784,352)×13×39 | "IDK" | **044** | Number theory (last-digits) |
| Q14 | How many more quadrilaterals than triangles | incomplete | — | Figure / spatial counting |
| Q16 | "Machine": odd→×3+1, even→÷2; steps for 14→1 | attempted | **17** | Hard multi-step / iteration |
| Q18 | Balance-scale weighing (find 3 heaviest bars) | "IDK" | — | Logic / deduction |
| Q21 | 2-digit: ÷8, rem 4 (÷6), rem 1 (÷5) | 64 | **16** | Number theory (remainders/CRT) |
| Q22 | 6★ − 4★ where n★ = n! | 120 | **696** | Number theory (factorials) |

(Plus partial/uncertain attempts on Q13 code-breaking, Q17 well-and-bucket rate, Q19 date-digit counting, Q20 pictograph — same clusters.)

---

## Gap Analysis → Focus Areas (prioritised for the gold push)

**1. Competition Number Theory — HIGHEST RETURN.** The single biggest cluster (Q11, Q21, Q22, Q10, Q19). He has the *foundations* from U29 divisibility, but ASMOPSS needs the next layer: **factorials (n!), remainder problems / "divisible by A, leaves remainder r by B" (CRT-style), last-digit & last-digits of big products, and digit-sum counting.** Several of these are 1-trick questions worth 2.5–6 marks each — fast points once trained.

**2. Logic & Deduction puzzles.** Q13 (code-breaking / Mastermind) and Q18 (balance-scale weighing) — he wrote "IDK" and froze. These are *signature* olympiad questions and very learnable with a method (make a table, test constraints, eliminate). High frequency on ASMOPSS.

**3. Art of Counting / Combinatorics (systematic, not just listing).** He can enumerate small cases (Q25 ✓) but needs organised counting for bigger ones — and this is exactly the U30 gap (the "÷2 for pairs in disguise", handshakes, arrangements, choosing). Directly doubles as ASMOPSS prep.

**4. Figure & spatial counting.** Q14 (count quadrilaterals vs triangles in a figure) — needs a systematic "count by size/type, don't eyeball" routine.

**5. Persistence on the hardest multi-step / iteration questions** (Q16 machine, Q17 rate). Method exists; he needs the stamina and an organised tracking layout to not abandon them. Train via worked "long-chain" examples + timed practice.

---

## Recommended Upcoming Lessons (U31+, ASMOPSS-focused) — prioritised

- **Number Theory for Competitions — Pack A (priority 1):** factorials (n! meaning + n! − m!), and last-digit / last-three-digits of big products (you only need the end). *Fast, high-frequency points.*
- **Number Theory for Competitions — Pack B (priority 1):** remainder problems — "divisible by A, remainder r when ÷ B" — by systematic listing of candidates; digit-sum counting (dates, ranges).
- **Logic & Deduction (priority 2):** code-breaking / Mastermind grids and balance-scale weighing — the "make a table, use each clue to eliminate" method.
- **Art of Counting II (priority 2):** systematic counting — arrangements, choosing, pairs/handshakes ÷2 (closes the U30 gap *and* serves ASMOPSS), with "spot the disguise" routing.
- **Figure Counting (priority 3):** count triangles / quadrilaterals / squares in a figure by size and position, methodically.
- Keep applying the lesson rules: a "why we learn this / real-life or contest use" opener, step-by-step one-line-per-step working, define variables, re-show the rule each screen.

**Coaching strategy for 7 weeks:**
- **U31** = transitional: Art of Counting (close the U30 gap) + a spread of M3-level review + ASMOPSS-2025-style problems, so the format feels familiar.
- **U32 onward** = 100% ASMOPSS — one focus cluster per unit (Number Theory → Logic → Counting → Figure-counting → mixed timed sets).
- **Past papers (2022–2025):** Prem works them under time; I analyse each with this same skill to refine the gap profile and confirm what's sticking. Track a per-topic "right/attempted/blank" trend across the four papers.
- **Exam habits:** the pre-scan + "attempt every question, never write IDK — write *something* structured" rule. Several lost marks (Q11, Q18) were freezes, not true unknowns. Teach a 30-second "first move" for each question type so he always starts.
- **Stamina:** build up to a full 25-question timed sitting in the final two weeks.

---

## Next Assessment

**Unit Test — U31 (ASMOPSS-transition):** Art of Counting (close the U30 ÷2/disguise gap) + selected M3-level review + ASMOPSS-2025-style problems. Then **U32+ = 100% ASMOPSS** focus units, one cluster each. Variable **n** throughout; on-topic-only rule still applies (these are the unit's own lessons).

*Note: the M3 milestone (Units 21–30) is already built and still available to sit as the cycle-3 benchmark — your call whether Prem takes it before the ASMOPSS pivot, or whether U31 folds the M3 review in. Either way, the competition track now leads.*

---

---

## Unit 37 — Retest: Rectangle Counting (Any Grid) + Listing Answer-Extraction (completed 3 Jul 2026)

**Score: 12 / 15 (80%) — PASSED.** Section A 4/5 · Section B 5/5 · Section C 3/5.

> **The U36 fail is resolved, and interactivity is the reason why.** This is a straight retest of U36's two failed clusters after the lessons were rebuilt with click-to-explore interactive visuals (tap a rectangle size to see every spot it fits; live-rebuilding listing tables; toggle grids for order-matters vs. not). Score went **10/15 → 12/15**, clearing the 80% bar. Section B (pure listing) came back a clean 5/5. The two sections that still lost a point each lost it to a genuinely NEW, narrower issue — not a repeat of the U36 gaps.

### Breakdown

| Q | Type | Prem | Result |
|---|------|------|--------|
| Q1 | Rectangles, 1×4 strip | 10 | ✅ |
| Q2 | Rectangles, 2×4 grid | **19** | ❌ working shows 3×10=30 correctly, but wrote **19** on the answer line — the U36-style extraction slip, still happens once |
| Q3 | Rectangles, 1×6 strip | 21 | ✅ |
| Q4 | Rectangles, 3×4 grid | 60 | ✅ |
| Q5 | Rectangles, 2×5 grid | 45 | ✅ (messy correction scratch, landed right) |
| Q6 | Listing — digit sum 7 | 7 | ✅ |
| Q7 | Listing — arrangements of 2,4,6 | 6 | ✅ |
| Q8 | Listing — coin ways (5c/1c) | 5 | ✅ |
| Q9 | Listing — choose 2 of 6 | 15 | ✅ |
| Q10 | Listing — digit sum 8, 1–40 | 4 | ✅ |
| Q11 | Rectangles, 3×5 grid ★★ | 90 | ✅ |
| Q12 | Listing — digit sum 9 AND odd ★★ | 4 | ✅ |
| Q13 | Listing — coin ways (1c/2c/5c) ★★ | **9** | ❌ correct **8**; wrote *"I'm gonna list but can u teach me method?"* — three-coin listing is a genuinely new difficulty, not a slip |
| Q14 | Listing — digit sum 6, 1–45 ★★ | 5 | ✅ |
| Q15 | Rectangles NOT squares, 4×5 grid ★★ | **111** | ❌ correct **110**; used the right method (total − squares) but miscounted the squares tally as 39 instead of 40 |

### What this tells us

**1. The interactive-visual redesign worked — this is now the go-to lesson method.** Both U36 topics were retested cold (fresh questions, closed-book) and both cleared: rectangle-counting is solid across four different grid shapes (Q1, Q3, Q4, Q5, Q11 all ✓), and listing went from a mixed U36 Section B to a **perfect 5/5** here. The tap-to-explore widgets (see where each rectangle size fits; watch the list rebuild live) converted "memorised formula" into "sees why it works." This prompted a new standing rule — see the Interactive-Visual Blueprint entry in coaching rules.

**2. Q2's slip is the same extraction habit from U36, but now isolated to one question instead of three.** Working was 100% correct (3×10=30); he wrote 19 on the answer line regardless — a pure transcription lapse, not a method gap. The "count the list, not the last item" drill clearly helped listing (Section B 5/5), but the rectangle-specific version of the same habit ("copy the WORKING answer onto the line, don't retype from memory") wasn't explicitly drilled — worth one line.

**3. Two genuinely NEW gaps surfaced, both a step harder than anything U36 tested:**
- **Three-denomination coin-ways listing (Q13):** with two coin values (5c/1c, Q8) he's flawless; adding a third value (1c/2c/5c) broke the method, and he explicitly asked to be taught it.
- **Counting squares across multiple sizes in a bigger grid (Q15):** he correctly reused the "total − squares" strategy from the lesson, but under-counted the squares tally by one category (39 instead of 40) — a precision slip on a harder, more-sizes-to-track version of the same "NOT squares" idea (also missed at U36).

**4. Prem's own margin notes are useful signal, not just venting.** Repeated *"working space is so small, why!?"* across Sections A, B, and C, plus a Q5 complaint about the answer box's position relative to the grid picture. This is layout friction, not math — worth a one-time template check.

### Recommended next — U38

- **Combinatorics: Distributing Identical Items ("stars and bars") — priority 1.** Independently flagged by the ASMOPSS 2024 past-paper diagnostic (done earlier the same day) as a likely-untaught topic — dovetails directly with the three-coin-ways gap surfacing here (Q13): both are "count the ways to split a total across several categories" problems. Teach with the interactive bars-and-dividers blueprint (per the new U37 rule).
- **Three+ variable listing (priority 1):** direct extension of Q13 — coin-ways and similar listing problems with 3 categories instead of 2, using an organised table (one column per denomination) so the count doesn't rely on memory.
- **Carry-over reminders (not lessons):** "copy the WORKING line's answer onto the answer line — don't retype from memory" (fixes Q2); "when counting squares by size, tally each size in its own row before adding — don't count in your head" (fixes Q15).
- **Test template check (not a lesson):** more working-space lines, and keep each answer box directly under its matching grid picture — Prem flagged the space issue three times on this paper.

### Next Assessment

**Unit Test — U38 (ASMOPSS: Combinatorics — Distributing Identical Items + 3-Variable Listing).** U37 passed (12/15 ≥ 12), so no retest is needed. This also matches the ASMOPSS 2024 diagnostic's top recommendation from earlier today, so U38 leads with stars-and-bars combinatorics rather than the next topic in the general rotation. Milestone **M4** still lands after U40 — 7 of 10 units since M3 are now done (U31–U37), 3 more before it's due.

---

## Unit 38 — Combinatorics: Distributing Identical Items ("Stars and Bars") + 3-Variable Listing (completed 5 Jul 2026)

**Score: 14 / 15 (93%) — PASSED.** Section A 5/5 · Section B 5/5 · Section C 4/5.

> **Both brand-new topics landed almost perfectly on first real exposure.** This wasn't a retest — stars-and-bars distributing and 3-coin listing were introduced for the very first time in the U38 lessons, and Prem walked in and scored the strongest result of the current run. The interactive-visual blueprint (established at U37) now has a second, stronger data point: it works not just for re-teaching a failed topic, but for landing a genuinely new one clean the first time. The single miss was a narrow rule-discrimination slip, not a gap in either new method.

### Breakdown

| Q | Type | Prem | Result |
|---|------|------|--------|
| Q1 | Distribute — 2 groups, n=5 | 4 | ✅ |
| Q2 | Distribute — 2 groups, n=7 | 6 | ✅ |
| Q3 | Distribute — 3 groups, n=6 | 10 | ✅ |
| Q4 | Distribute — 3 groups, n=8 | 21 | ✅ |
| Q5 | Distribute — 3 groups, n=10 | 36 | ✅ |
| Q6 | Listing — coin ways, 12¢ (1/2/5) | 13 | ✅ |
| Q7 | Listing — coin ways, 7¢ | 6 | ✅ |
| Q8 | Listing — coin ways, 15¢ | 18 | ✅ |
| Q9 | Listing — coin ways, 13¢ | 14 | ✅ |
| Q10 | Listing — coin ways, 4¢ | 3 | ✅ |
| Q11 | Distribute — 3 groups, n=9 ★★ | 28 | ✅ |
| Q12 | Distribute — 2 groups, n=15 ★★ | **91** | ❌ correct **14**; applied the 3-group "choose 2 gaps" formula ((14×13)÷2) to a **2-group** problem, which only needs gaps=14 directly |
| Q13 | Listing — coin ways, 10¢ (1/3/5) ★★ | 7 | ✅ |
| Q14 | Listing — coin ways, 12¢ (2/3/5) ★★ | 5 | ✅ |
| Q15 | Distribute — 3 groups, n=20 ★★ | 171 | ✅ |

### What this tells us

**1. The interactive-visual blueprint generalizes to brand-new concepts, not just retests.** Every single distributing question (Q1, Q3, Q4, Q5, Q11, Q15) and every single 3-variable listing question (Q6–Q10, Q13, Q14) came back correct — including harder, larger-number versions in Section C (n=20 → 171; a 2/3/5¢ coin-set never seen in the lesson examples). This is the strongest confirming case yet for the standing rule: teach any brand-new concept with click-to-explore interactive visuals first, and it transfers cleanly to fresh numbers.

**2. The one miss is a "which formula" discrimination slip, not a method gap.** Q12 was a plain 2-group distribute (15 sweets, 2 jars → answer is just gaps = 14), but Prem defaulted to the fancier 3-group "choose 2 of the gaps" combination formula anyway ((14×13)÷2 = 91), the same move he correctly used one line earlier on the harder-flagged Q11. Both Q1 and Q2 (also 2-group, earlier and easier) were fine — this suggests that under the ★★ "harder" framing, he over-reached for the more complex-looking tool without first re-checking the group count. This is a quick habit fix, not a re-teach: **"count the groups FIRST — 2 groups only ever needs gaps itself, never the choose-2 step."**

**3. Listing fully generalized to a new coin-set.** Q14 used 2¢/3¢/5¢ — a denomination combination that never appeared in either lesson's worked examples or practice set — and it was still solved correctly with the same "sweep the biggest, block by block" table method. That's a clean transfer test passed, not just memorized examples repeated back.

### Recommended next — U39

- **"Count the groups first" discrimination drill (quick, not a full lesson) — priority 1:** a short warm-up rule to fold into the next distribute-type question set: before computing anything, state out loud "2 groups → gaps. 3 groups → choose 2 of the gaps." — directly fixes the Q12 pattern.
- **Return to general topic rotation, competition-weighted.** With both U38 topics landing at 93% on first exposure (no retest needed) and ASMOPSS 2026 now **~5 weeks away (9 Aug)**, U39 should move to the next competition-heavy topic in rotation — Number Theory, Algebraic Thinking, or Art of Counting — per the standing rule to weight these more heavily as competition season approaches.
- **Carry-forward habit (not a lesson):** keep applying the interactive-visual blueprint to whatever new sub-topic U39 introduces — it now has two independent confirmations (U37 retest, U38 new-topic) of working.

### Next Assessment

**Unit Test — U39 (general rotation, competition-weighted — Number Theory / Algebraic Thinking / Art of Counting).** U38 passed comfortably (14/15, 93%), so no retest is needed. Milestone **M4** still lands after U40 — 8 of 10 units since M3 are now done (U31–U38), 2 more before it's due.

---

## Unit 39 — Algebraic Thinking: Balance Scales — Ratios & Substitution Chains (completed 9 Jul 2026)

**Score: 12 / 15 (80%) — PASSED.** Section A 5/5 · Section B 5/5 · Section C 2/5.

> **Both individual new skills are solid — the gap is chaining them together.** Cancelling (Lesson 1, tested standalone in Section A) is flawless across five different fruit pairs, and substitution when Clue 1 is handed to him directly (Q11, Q12) is also flawless, with genuine algebraic working shown. But the harder Section C questions (Q13–15) required BOTH skills chained in one question — derive Clue 1 by cancelling a raw balance, THEN substitute it into a second clue — and every one of those broke down. This reads as a "combine two already-mastered skills for the first time" overload, not a failure of either skill on its own.

### Breakdown

| Q | Type | Prem | Result |
|---|------|------|--------|
| Q1 | Cancel & Ratio — apples/mangoes | 3 | ✅ solved via direct algebra (4a+1m=3a+4m), not the pan-by-pan cancel — valid alternate route |
| Q2 | Cancel & Ratio — pears/plums | 2 | ✅ |
| Q3 | Cancel & Ratio — melons/kiwis | 4 | ✅ |
| Q4 | Cancel & Ratio — papayas/limes | 2 | ✅ |
| Q5 | Cancel & Ratio — guavas/figs | 4 | ✅ |
| Q6 | Ratio → Weight — coconuts/lemons | 8g | ✅ |
| Q7 | Ratio → Weight — pumpkins/onions | 9g | ✅ |
| Q8 | Ratio → Weight — watermelons/tomatoes | 15g | ✅ |
| Q9 | Ratio → Weight — durians/rambutans | 24g | ✅ |
| Q10 | Ratio → Weight — pineapples/strawberries | 10g | ✅ |
| Q11 | Substitution ★★ — clue 1 given directly (gems/coins) | 10g | ✅ |
| Q12 | Substitution ★★ — clue 1 given directly (rings/chips) | 7g | ✅ clean multi-line algebra shown (1r=5c → 6c=42 → c=7) |
| Q13 | Substitution ★★ — derive clue 1 THEN substitute (cubes/blocks) | illegible/incomplete | ❌ correct 15g; working shows drawn boxes, no completed numeric chain |
| Q14 | Substitution ★★ — derive clue 1 THEN substitute (tiles/discs) | illegible | ❌ correct 16g; question text itself annotated/underlined, answer area just scribbles |
| Q15 | Substitution ★★ — derive clue 1 THEN substitute (counters/weights) | illegible | ❌ correct 18g; no organised working visible |

### What this tells us

**1. Lesson 1 (cancelling) and Lesson 2 (substitution) are each individually solid.** Section A is a clean 5/5 across five different fruit pairs and both group-size patterns. Q11 and Q12 — substitution questions where Clue 1 is stated outright, no derivation needed — are both correct, and Q12's scratch work shows real algebraic manipulation (1 ring = 5 chips → 5c+1c=42 → 6c=42 → c=7), not a guess.

**2. The compound version — cancel first, THEN substitute, in one question — failed completely (0/3).** This is the one sub-skill that was only ever modelled once, in Lesson 2's Worked Example 2, rather than drilled repeatedly like the two component skills were. Asking Prem to chain two separately-mastered moves into a single novel problem for basically the first time is a genuine step up in cognitive load, consistent with the project's standing "one idea at a time" ground rule — even when both individual ideas are already locked in.

**3. Working space is visibly a factor here, independent of the concept gap.** Q12's working spills outside the ruled lines into the margin, and Q13–15 show comparatively sparse, disorganised working (drawn boxes with no completed numbers) compared to Q12's clean chain — consistent with running low on room and/or time on the hardest three questions of a 15-question test. This is direct supporting evidence for the working-space fix just agreed (3 empty rows between questions from U40 onward, checked against the 3-page total fit) — U39 was built before that change.

**4. Q1's alternate method is a good sign, worth a light watch.** He set up the raw algebra equation directly (4a+1m=3a+4m) instead of doing the taught pan-by-pan physical cancel, and still landed the right answer. That's healthy abstraction, but worth a quick check that he can still explain the physical cancel logic in words if asked — it's the concept the whole topic (and Q13–15's derivation step) rests on.

### Recommended next — U40

- **"Chain it in one question" top-up (priority 1, short — not a full new lesson) — REVISED 9 Jul 2026 to use the equation method, not the pan-cancel framing:** Lui's review of the first U40 draft flagged that recapping via "cancel items from the pan" introduced a framing Prem hadn't independently used (see point 4 above — his own Q1 workaround was raw algebra, not the taught physical cancel), which made the warm-up harder to follow than necessary. The warm-up was rebuilt to instead reuse the Unit 21 "variables on both sides" equation method (15/15 PERFECT, already mastered): write the balance as an equation (e.g. 2p+1e=1p+4e), sort matching letters to one side by subtracting the smaller group from both sides (same sign-flip rule as U21), then substitute the resulting ratio into a second clue. New standing rule: lessons should build on Prem's proven-mastered prior methods (test scores ≥80%) rather than introducing a new framing for a skill that can already be expressed via an existing one.
- **Working space:** U40 is the first test to use the new 3-empty-rows-first spacing rule — worth flagging as a direct response to what U39's Section C working shows.
- **U40 is the last unit before Milestone M4** (9 of 10 units since M3 now done: U31–U39). Since U39 passed (12/15 ≥ 12), no retest is required — proceed with U40 in the general rotation, with the short chaining top-up folded in rather than a dedicated new unit.

### Next Assessment

**Unit Test — U40 (general rotation, competition-weighted, with a short "chain two skills in one question" warm-up).** U39 passed (12/15, 80%), so no retest is needed. Milestone **M4** lands immediately after U40 — this is the last unit test of cycle 4 (U31–U40).

---

## Unit 40 — Chaining Two Clues (Algebra) & Arrangements: Repeats & Circles (Art of Counting) (completed 10 Jul 2026)

**Score: 8 / 15 (53%) — NOT PASSED.** Section A 4/5 · Section B **0/5 ❌** · Section C 4/5.

> **The rebuilt Chaining lesson and the new Circular Arrangements topic both worked. Permutations with Repeats — the one skill carried straight over from U39 with no changes — is where it fell apart, and the failure signature is unusual: it isn't really 0/5 on the concept.** Three of the five answers (Q7, Q8, Q9) are literally the PRECEDING question's correct value, with the shown working proving the formula was applied correctly each time — just to the wrong word. That's a mechanical tracking slip that cascaded through the section, not a hole in his understanding of "divide by the repeats." Section A validates the equation-method rebuild from Lui's review: four clean solves, and the one miss is the pre-existing "answer exactly what's asked" gap, not a chaining failure. Section C, brand new on first exposure, landed comfortably at 4/5.

### Breakdown

| Q | Type | Prem | Result |
|---|------|------|--------|
| Q1 | Chain — ratio only, marbles/buttons | 2 | ✅ |
| Q2 | Chain — ratio only, crayons/stickers | 2 | ✅ |
| Q3 | Chain — full chain, shells/pebbles | 15g | ❌ correct **5g**; equation-sort and substitution both correct (derived 1 shell = 3 pebbles, then 1 pebble = 5g) — but the question asked for 1 **pebble**, and he wrote the **shell's** weight (15g) instead. Right method, wrong variable reported. |
| Q4 | Chain — full chain + multiply back, ribbons/beads ★★ | 15g | ✅ clean multi-step working (1b=5g → 3b=15g → 1r=15g) |
| Q5 | Chain — hardest chain, magnets/clips ★★ | 9g | ✅ |
| Q6 | Repeats — FEET | 3 | ❌ correct **12**; no working shown — looks like he counted unique letters (F, E, T = 3) instead of computing arrangements |
| Q7 | Repeats — APPLE | 12 | ❌ correct **60**; no working — 12 is exactly Q6's (FEET) correct answer |
| Q8 | Repeats — SUMMER | 60 | ❌ correct **360**; working shown is 5!÷2=60 — that's APPLE's (Q7) computation, method correct, written one question late |
| Q9 | Repeats — TEACHER | 360 | ❌ correct **2520**; working shown is 6!÷2=360 — SUMMER's (Q8) computation, same one-behind pattern |
| Q10 | Repeats — GIGGLE | 20 | ❌ correct **120**; working confused/unclear, doesn't fit the shift pattern — looks like a rushed finish once things had gone off track |
| Q11 | Circular — plain, n=5 | 24 | ✅ |
| Q12 | Circular — plain, n=9 | 40320 | ✅ (8! shown correctly) |
| Q13 | Circular — combined, n=7 r3 ★★ | 120 | ✅ (6!=720 ÷ 6 = 120) |
| Q14 | Circular — combined, n=8 r2+2 ★★ | 1260 | ✅ 7!=5040, divided by 2 twice for the two repeat pairs — correct structure |
| Q15 | Circular — combined, n=10 r3+2 ★★ | 45360 | ❌ correct **30240**; the (n-1)! circular step was right (9!=362880), but he divided by 8 instead of 3!×2!=**12** — a divisor-setup slip, not a method break |

### What this tells us

**1. Section A confirms the equation-method rebuild worked.** Lui flagged the first U40 draft's "cancel trick" warm-up as confusing before Prem ever saw a real test — the lesson was rebuilt around the already-mastered Unit 21 "variables on both sides" method instead. Q1, Q2, Q4, and Q5 all came back clean, including the harder multiply-back and hardest-chain questions. The one miss, Q3, isn't a chaining failure at all — his working shows the full correct derivation, he just reported the wrong item's weight. That's the same pre-existing "answer exactly what's asked" gap already tracked from M3 and U35, not a new problem.

**2. Section B's 0/5 has a specific, unusual signature worth taking seriously before assuming a concept gap.** Q7, Q8, and Q9 each show the PRECEDING question's correct answer, with matching correct working (n! ÷ repeat-factorial) computed for the previous word each time. In other words: the repeats formula itself was applied correctly three times in a row — just recorded one question late, every time. Q6 breaks the pattern at the start (no working, "3" looks like a unique-letter count rather than an arrangement count — possibly what threw off the alignment to begin with), and Q10 breaks it at the end (confused, doesn't match any nearby answer — a rushed finish once something felt off). This reads much more like a mechanical labeling slip that cascaded through the section than a hole in understanding — but it's a pattern I'm inferring from the numbers, not confirmed by markings on the page (Section A and C both have visible red checkmarks; Section B doesn't), so worth a quick check-in with Prem on what actually happened.

**3. Circular arrangements — brand new topic, first exposure — landed well.** 4/5, matching the red "4" on the page. Q13 and Q14's long-division working is careful and correct, including dividing twice in Q14 for two separate repeat pairs. Q15's miss is a divisor-composition slip (used 8 instead of 3!×2!=12) on the hardest question in the set (three-way combined repeats), not a break in the (n-1)!-then-divide structure.

### Recommended next — U41 (targeted retest, Section B only)

- **Priority 1 — Permutations with Repeats retest, addressing two distinct issues.** (a) A quick "arrangements ≠ unique letters" check-in for the Q6-type slip. (b) A "write your answer directly under the question you just solved, then check the number against what you just computed before moving on" habit drill for the Q7–Q9 one-behind pattern — this may be as much a test-taking habit fix as a math fix, worth confirming with Prem directly what happened before building the retest.
- **Sections A and C do not need retesting** — both cleared the 4/5 per-section bar. Carry the Q3-type precision reminder forward as a light banner note only, not a new lesson.
- **Milestone M4 is deferred until the Section B retest passes.** U40 was meant to close the U31–U40 cycle, but per the multi-topic pass rule (only the failed section needs re-testing, not a full unit repeat), U40 doesn't count as a clean close — U41 (Repeats-only retest) comes first.

### Next Assessment

**Unit Test — U41 (targeted retest, Permutations with Repeats only).** Section A (4/5) and Section C (4/5) both passed; Section B (0/5) did not, so per the multi-topic retest rule this is a short, focused re-test on Repeats — not a full unit repeat and not Milestone M4 yet. M4 follows once U41 passes.

---

## Unit 41 — Permutations with Repeats, Targeted Retest (completed 12 Jul 2026)

**Score: 13 / 15 (87%) — PASSED.** Section A 5/5 · Section B **5/5 ✦** · Section C 3/5.

> **Both things this retest set out to fix are fixed, completely.** Section A (one repeated pair — BOOK, WHEEL, KITTEN, GIRAFFE, HAPPY) is a clean 5/5. Section B — the exact skill that scored 0/5 on U40, with the "one-question-behind" answer-shifting pattern — comes back a **perfect 5/5**, every answer on its own line, every one correct, no shifting, no unique-letter confusion anywhere. The precision top-up lesson (arrangements ≠ unique letters, check-before-you-write) did its job. Section C, the hardest tier, is where something new and narrow shows up: Q11–Q13 are all correct, including a genuinely messy but ultimately correct long-multiplication chain on Q13 (PASSPORT). Q14 and Q15 both miss — and both misses trace back to the exact same root cause: TENNESSEE (Q14) is the first word all session with a letter repeated **4 times** (E×4), and Prem divided by 4 instead of 4!=24. Q15's beads question repeats the identical mistake inside a 3-group combination. This is a brand-new, narrow, well-isolated gap — not a relapse of anything from U40.

### Breakdown

| Q | Word | Prem | Result |
|---|------|------|--------|
| Q1 | BOOK | 12 | ✅ |
| Q2 | WHEEL | 60 | ✅ |
| Q3 | KITTEN | 360 | ✅ (crossed out a false start first, corrected cleanly) |
| Q4 | GIRAFFE ★ working shown | 2520 | ✅ 7×6×5×4×3×2×1=5040, ÷2=2520 |
| Q5 | HAPPY | 60 | ✅ |
| Q6 | COFFEE ★ | 180 | ✅ |
| Q7 | CHEESE ★ | 120 | ✅ |
| Q8 | BANANA ★ | 60 | ✅ |
| Q9 | GARAGE ★ | 180 | ✅ |
| Q10 | ADDRESS ★ | 1260 | ✅ working shown: 7!=5040, ÷4=1260 |
| Q11 | BAGGAGE ★★ | 420 | ✅ working shown: 5040÷2=2520, ÷6=420 — both repeat groups (r=3, r=2) divided correctly |
| Q12 | CHICKEN ★★ | 2520 | ✅ |
| Q13 | PASSPORT ★★ | 10080 | ✅ messy long-multiplication working, but the final chain lands correctly |
| Q14 | TENNESSEE ★★ | 22680 | ❌ correct **3780**. 9!=362880 computed correctly, but divided by 4 (not 4!=24) for the E×4 group, then divided by 4 again instead of by 2!×2! for N and S — net ÷16 instead of ÷96. TENNESSEE is the first word this session with a letter repeated 4 times. |
| Q15 | 9 beads (4 red, 3 blue, 2 green) ★★ | 15120 | ❌ correct **1260**. 362880 computed correctly, then divided by 4×3×2=24 (the raw repeat counts multiplied together) instead of 4!×3!×2!=288 — same root cause as Q14, compounded across three groups at once. |

### What this tells us

**1. The retest's two specific targets are both fully resolved.** Zero instances of the "one-question-behind" answer-shifting anywhere in Section B — every answer sits under its own question, matching its own word. Zero instances of counting unique letters instead of arrangements. The interactive DEEP contrast widget and the "check before you write" matching-game habit from the top-up lesson are credited; this validates building precision-focused top-ups around the specific failure signature rather than re-teaching a formula that was already understood.

**2. A new, narrow gap: dividing by the repeat COUNT instead of its FACTORIAL, specifically at r=4.** Every prior repeat group Prem has ever divided by — r=2 (divide by 2, same as the count, no distinction needed) and r=3 (divide by 6, which he has drilled and locked, e.g. Q11's G×3 correctly divided by 6) — never exposed this gap, because r=2's factorial equals its count and r=3 has been practiced enough to memorize. TENNESSEE (E×4) is the first time all session — across both the U40 lesson and the U41 retest lesson — that he needed 4!=24 as a divisor, and neither lesson ever drilled a repeat-4 example. He substituted the raw count instead. Q15 shows the identical substitution, compounded with a 3-groups-at-once case that also hasn't been drilled before.

**3. This is a coverage gap, not a conceptual one.** The overall structure — compute n!, then divide by the factorial of each repeat group — is intact and correctly sequenced in every single Section C question, including the two misses (he divides once per group, in the right order, using the right total n!). The only broken piece is the specific value substituted for one group's r!. A single worked example with r=4 (and a reminder that r! means the full factorial, not r itself) should close this in one pass.

### Recommended next

- **Priority 1 (light, not a full lesson): one worked example with a letter repeated 4 times, explicitly re-deriving 4!=24 next to the shortcut 2!=2 and 3!=6 he already has memorized.** Fold this into the next Art of Counting unit's warm-up rather than a standalone retest — Section C's 3/5 is a narrow, single-cause gap, not a section failure requiring re-testing under the pass-standard rules.
- **No further retest of Repeats needed.** 13/15 clears the 80% bar comfortably, and the two Section A/B targets are fully closed. Carry the r! ≠ r reminder forward as a light watch-point, not an active gap requiring a dedicated unit.
- **Proceed to Milestone M4.** U31–U40 (10 units) plus the U41 targeted retest closes this cycle.

### Next Assessment

**Milestone M4.** U41 passed (13/15, 87%), closing the retest loop opened by U40. All 10 units since M3 (U31–U40) are complete, with U41 resolving the one section that didn't clear the bar. Per the ASMOPSS-prep milestone cadence, M4 should be paired with a previous-year ASMOPSS paper as a cross-check benchmark.

---

## Milestone M4 — ASMOPSS-Style Cumulative Review, Units 31–41 (completed 13 Jul 2026)

**Score: 57.5 / 100** (Round 1 8/10 → 20/25 marks · Round 2 7/10 → 31.5/45 marks · Round 3 1/5 → 6/30 marks). First milestone in the new ASMOPSS-style format — reported as a diagnostic benchmark, not a pass/fail result (milestones don't carry the 80% unit-test bar).

> **The first two-thirds of this test held up well; the hardest tier, and one specific carried-over skill, are where the real signal is.** Rounds 1 and 2 (2.5 and 4.5-mark questions) came back 8/10 and 7/10 — solid for a 25-question cumulative review spanning 11 units with zero new lessons. Round 3 (the six-mark, ★★ tier) is where it broke down: only Q21 landed clean. Two distinct, specific findings stand out. First, a genuinely NEW gap: Q7 and Q13 both used n! instead of (n−1)! for circular arrangements — the "subtract 1 first" rule slipping under mixed-review conditions, never flagged before now (U40's plain-circular questions, Q11/Q12, were both correct). Second, the r=4 divisor gap flagged after U41 has NOT closed yet — Q22 was a direct stress-test of it and Prem left it blank rather than guess, which is a mature test-taking call but confirms the underlying gap is still open.

### Breakdown

| Q | Marks | Topic | Prem | Result |
|---|-------|-------|------|--------|
| Q1 | 2.5 | Arithmetic | 184 | ❌ correct 192 — sum (288) right, then 288−96 subtracted wrong |
| Q2 | 2.5 | Factorial ratio | 30 | ✅ |
| Q3 | 2.5 | Remainder | 7 | ✅ |
| Q4 | 2.5 | Divisibility | 9 | ✅ |
| Q5 | 2.5 | Sequences | 107 | ✅ |
| Q6 | 2.5 | Repeats (single pair) | 60 | ✅ |
| Q7 | 2.5 | Circular (plain) | 720 | ❌ correct 120 — used 6! instead of (6−1)!=5! |
| Q8 | 2.5 | Equation both sides | 7 | ✅ — but annotated "I forgot the method so I'm doing guess & check"; recovered correctly by testing n=5,6,7 |
| Q9 | 2.5 | Chaining (ratio only) | 2 | ✅ |
| Q10 | 2.5 | Perimeter | 58 | ✅ |
| Q11 | 4.5 | Chaining (ratio only) | 3 | ✅ |
| Q12 | 4.5 | Repeats (2 groups) | 180 | ✅ |
| Q13 | 4.5 | Circular + repeats | 2520 | ❌ correct 360 — same error as Q7: used 7! instead of (7−1)!=6! |
| Q14 | 4.5 | Factorial multi-term | 816 | ✅ |
| Q15 | 4.5 | Logic — transitivity | 43 | ✅ |
| Q16 | 4.5 | Path & frame + cost | ~8500 (scribbled/unclear) | ❌ correct 7200 — inner-rectangle setup and arithmetic both broke down |
| Q17 | 4.5 | Divisibility | 9 | ✅ |
| Q18 | 4.5 | Sequences — two-term (work backward) | blank | ❌ correct 26 — no answer given |
| Q19 | 4.5 | Distributing identical items | 15 | ✅ |
| Q20 | 4.5 | Listing (3 coins) | 11 | ✅ — clean case-by-case working (5=0/1/2 → 6+4+1=11) |
| Q21 | 6 ★★ | Full chain (derive + substitute + multiply back) | 12g | ✅ — full correct chain shown (p=3q → 5q=20g → q=4g → p=12g); **see note below on marking** |
| Q22 | 6 ★★ | Repeats, r=4 (stress-test) | blank | ❌ correct 420 — attempted 8!, arithmetic slipped (5040×8=41200, should be 40320), abandoned before a final answer |
| Q23 | 6 ★★ | Circular + 3 repeat groups | 15425 | ❌ correct 1680 — working tangled with Q22's numbers, doesn't reach a clean (n−1)! start |
| Q24 | 6 ★★ | Compound remainder puzzle | 367 | ❌ correct 147 — extensive guess-and-check trial division, but 367 isn't even divisible by 7; search didn't converge |
| Q25 | 6 ★★ | Capstone (counting + algebra) | blank | ❌ correct 180 — no attempt beyond restating the two given equations |

**Note on Q21's marking:** the page shows a circled "0" for Round 3, suggesting all five were marked wrong — but Q21's working and final answer (12g) independently check out against the answer key exactly. Worth a quick eyeball check on the physical paper; this write-up counts Q21 as correct based on the verified maths. If it should count as wrong, the total becomes 51.5/100 — the diagnostic conclusions below are unaffected either way.

### What this tells us

**1. Rounds 1–2 show the cumulative-review format works — this wasn't a new-content unit, and 15/20 held up.** Every topic from the last 11 units got at least one question, with no dedicated re-teaching beforehand, and most of it landed: factorials, remainders, divisibility, sequences, single/double-group repeats, transitivity logic, distributing, and 3-coin listing were all clean.

**2. NEW finding: circular arrangements — "subtract 1 first" is slipping.** Q7 and Q13 both used the plain n! instead of (n−1)! before applying any repeat divisor. This is the first time this specific slip has shown up — U40's two plain-circular questions (Q11, Q12) were both correct just three days earlier. Likely cause: circular arrangements hasn't been directly practiced since U40/U41 (U41's retest was Repeats-only, not circular), so the "-1" step is the piece that faded fastest under mixed-topic pressure, while the repeats side (drilled twice, U40 and U41) held firm.

**3. The r=4 divisor gap from U41 is still open.** Q22 directly stress-tested it (4 identical red beads — the same r=4 case as U41's TENNESSEE). Prem didn't guess; he abandoned the question after an arithmetic slip mid-working. That's a reasonable test-taking choice, but it confirms the gap flagged after U41 needs the dedicated worked example that was deferred as a "light, not a full lesson" fix — it hasn't closed on its own through incidental exposure.

**4. Q8's self-annotation is worth taking at face value.** "I forgot the method so I'm doing guess & check" — for the Unit 21 equation-both-sides method, 15/15 PERFECT and the explicit foundation the Chaining lessons were rebuilt on. He still landed the right answer through systematic trial, which shows the underlying number sense is fine, but the algebraic method itself isn't fully automatic under cumulative-review conditions. Worth a very light refresher, given how much of the Algebra line (U40, U41's Q21-style capstones) leans on this method being instant.

**5. Q16 and Q18 are lower-priority, already-tracked patterns, not new gaps.** Q16 (path & frame + cost) matches the existing "cost-multiply arithmetic care" monitor item from U28 — not conceptual, just needs a light habit reminder. Q18 (blank) is likely a time/fatigue effect near the end of Round 2 on a previously-closed topic (U30 sequences two-term was 5/5), not a genuine regression.

### Recommended next — U42

- **Priority 1: a combined "Circular & Repeats Precision" lesson** addressing BOTH fresh Round-3 findings together, since they're in the same topic family: (a) explicit re-drill of "circle → (n−1)! FIRST, repeats SECOND" with a worked example that gets the order wrong on purpose and shows why it matters, and (b) the deferred r=4 worked example (re-deriving 4!=24 next to the memorised 2!=2, 3!=6).
- **Light warm-up fold-in, not a lesson:** a 2-minute Unit 21 equation-both-sides refresher, given Q8's self-reported method lapse — quick enough to restore instant recall without a full re-teach.
- **Carry forward as light monitors only:** cost-multiply arithmetic care (Q16) and sequences two-term work-backward framing (Q18) — both single-instance, both previously-mastered topics, not worth dedicated lesson time.
- **ASMOPSS-prep milestone cadence:** per the standing rule, pair M4 with one of the remaining past ASMOPSS papers (2022 or 2023) as the next benchmark cross-check, analysed with the `analyze-done-competition-test` skill when sat.

---

## Competition Paper — ASMOPSS 2023 (sat by Prem; analysed 14 Jul 2026)

**Score: 12 / 25**, verified via independent question-by-question regrade against the official 2023 answer key. *Note on scoring:* the paper's handwritten header reads "13/25" with a "(5+3+2+2)" breakdown that doesn't itself sum to 13, while the per-page circled subtotals (3+2+1+2+1+1+2+0) sum to exactly 12 and match the independent regrade question-by-question. This write-up uses **12/25** — same "flag transparently, don't silently pick" approach used for M4's Q21 marking note.

> **Read:** This paper is a strong complement to M4, not a repeat of it — it hits topics M4 barely touched (Problem Solving word problems, Spatial visualization, plain Arithmetic) and confirms two of M4's findings from a completely different angle. The standout cross-check: Q17 (max trees plantable with a minimum spacing rule) was left blank, and it's the exact same "boundary/edge adjustment" failure family as M4's circular-arrangement (n−1)! slip — different topic, same root habit missing. Also notable: Prem addressed two questions directly to "Claude" mid-paper (Q24 asking what "adjacent" means, Q25 asking how to approach listing) — useful signal that some misses are comprehension/strategy gaps, not number-sense gaps.

### What he got RIGHT

| Q | Topic | Answer | Note |
|---|-------|--------|------|
| Q2 | Number Theory (remainder/divisibility) | 108 ✓ | |
| Q3 | Algebraic Thinking (fraction equation, solve A+B) | 3 ✓ | |
| Q5 | Arithmetic (elapsed-time word problem) | 20 min ✓ | |
| Q7 | Number Theory (divisibility, range search) | 232 ✓ | |
| Q8 | Patterns (growing figure sequence) | 210 ✓ | |
| Q11 | Art of Counting (letter-pattern counting) | 85 ✓ | |
| Q13 | Problem Solving (combined work-rate) | 30 min ✓ | |
| Q15 | Geometric (overlapping-squares area) | 16 cm² ✓ | |
| Q18 | Geometric (fractional perimeter, longest side) | 102 ✓ | |
| Q20 | Problem Solving (pictogram + arithmetic) | 225 ✓ | |
| Q21 | Algebraic Thinking (cryptarithm, digit substitution) | 48 ✓ | Same skill family as M4's Q21 — solid both times |
| Q23 | Spatial Reasoning (3D cube-filling count) | 8 ✓ | |

### What he got WRONG — five gap clusters

| Q | Topic | His answer | Correct | Gap cluster |
|---|-------|-----------|---------|-------------|
| Q1 | Arithmetic (order of ops, multi-step) | 1036 | 555 | **Multi-step arithmetic precision** |
| Q4 | Patterns → expression plug-in | 289 | 115 | **Multi-step arithmetic precision** |
| Q9 | Problem Solving (age-chain word problem) | 36 | 49 | **Word-problem clue extraction** |
| Q6 | Problem Solving (table-reading + optimization) | abandoned | 253 | **Word-problem clue extraction** |
| Q10 | Problem Solving (discount/profit word problem) | 1650 | 850 | **Word-problem clue extraction** |
| Q12 | Arithmetic (reverse-engineer an average) | *(blank)* | 8 | **Untaught content — reverse averages** |
| Q14 | Spatial Reasoning (painted faces, irregular 3D solid) | *(blank, confused)* | 5 | **Spatial — irregular/stacked solids** |
| Q16 | Geometric (composite rectangle area) | 300 cm² | 450 | Figure-reading care |
| Q17 | Problem Solving/Spatial (max items with min spacing) | *(blank)* | 30 | **Boundary/edge-adjustment — same family as M4 circular gap** |
| Q19 | Art of Counting (constrained coin-combination listing) | 9 | 5 | **Art of Counting — systematic listing** |
| Q22 | Algebraic Thinking (symbol system of equations) | 23 | 9 | Substitution-method fluency |
| Q24 | Number Theory (adjacent-digit counting in a range) | *(blank — "what is adjacent?")* | 13 | **Comprehension of competition wording, not a math gap** |
| Q25 | Art of Counting (permutations w/ divisibility constraint) | *(blank — "how do I list this?")* | 12 | **Art of Counting — systematic listing** |

### Gap Analysis — combined read with Milestone M4

**1. NEW cross-topic pattern confirmed: "boundary/edge adjustment" is a real, general blind spot — not just a circular-arrangements quirk.** M4 showed Prem using n! instead of (n−1)! on circular arrangements (Q7, Q13). This paper's Q17 — a classic "fencepost" problem (spacing trees along a line needs a +1 that's easy to forget) — was abandoned rather than attempted. Two different topics, same missing habit: pause and ask "does this need a +1 or −1 adjustment at the boundary?" This elevates the M4 finding from a topic-specific slip to a general habit worth teaching explicitly and by name.

**2. Art of Counting is the clearest single priority, and it's a competition-weighted topic.** Three separate misses converge here: the still-open r=4 divisor gap (M4 Q22), overcounting a constrained coin-combination problem (Q19: 9 vs. 5 — didn't filter invalid combinations), and abandoning a permutations-with-a-divisibility-constraint problem outright (Q25). Per the standing coaching rule, Art of Counting gets weighted more heavily as competition season approaches — and at 26 days from ASMOPSS 2026, that season is now.

**3. Problem Solving & Word Problems is the weakest topic on this paper (2/6 correct)** — table-reading with an optimization twist (Q6), age-chain arithmetic (Q9), and a discount/profit word problem (Q10) were all missed. Unlike the counting gaps, these aren't one conceptual hole — they're a comprehension pattern: complex multi-clue word problems need every given number written down as its own line *before* combining them, rather than trying to hold it all in working memory. This is a different, broader skill from the single-path arithmetic word problems already mastered.

**4. One clean, untaught content gap: reverse-engineering an average.** Q12 (removing the youngest of four students raises the average by 1 year — find the removed age) was left blank. This specific technique — average × count = total, then work backward — hasn't been covered in any unit yet. Worth a dedicated slot rather than folding it into a general Arithmetic review.

**5. Spatial reasoning is inconsistent in a specific, useful way.** Q23 (filling a cube-staircase to match a solid block) was correct — the counting logic is fine. Q14 (counting cubes with 3 painted faces on an irregular stacked solid) was abandoned with the note "I can only see seven [cubes]" — the gap is specifically *visualizing hidden/occluded cubes in an irregular 2D drawing*, not cube-counting arithmetic itself.

**6. Algebraic Thinking is broadly solid but substitution fluency needs reinforcement.** The fraction-equation (Q3) and cryptarithm (Q21) both landed clean — consistent with M4's Q21. But the three-symbol system of equations (Q22) went wrong, which pairs naturally with M4's already-flagged Q8 finding ("I forgot the method so I'm doing guess & check" on equation-both-sides) — both point to the same underlying need: a fluency pass on systematic substitution, not a new concept.

**7. Multi-step arithmetic precision needs the same "circle your intermediate answers" habit that worked for U41.** Q1 (a three-operation expression with a multi-digit subtraction inside parentheses) and Q4 (extracting a pattern rule, then correctly plugging four values into A+B×C−D) were both wrong — not from a missing concept, but from a slip somewhere in a long chain. U41's orange precision banner ("say the question number before and after solving") lifted that unit from 8/15 to 13/15; the same technique is worth reusing here.

**8. Q24 is a comprehension gap, not a math gap — worth naming as its own category.** Prem's own note, "what is adjacent?", shows he didn't understand the question's wording, not that he couldn't do the underlying counting. Competition papers use terser, less-scaffolded language than Chusaki's lessons; it's worth normalizing a few common competition-specific terms (adjacent, at least, distinct, consecutive) explicitly rather than assuming they'll be inferred from context.

### Recommended Plan — U42 through U50 (closes all M4 + ASMOPSS 2023 gaps)

**Correction (14 Jul 2026, Lui): U42–U50 stays entirely inside ASMOPSS-prep mode — no pre/post-competition split.** The whole sequence runs under the standing ASMOPSS-prep rules (mixed-topic units allowed, competition-heavy topics weighted up) for as long as the real calendar hasn't yet passed 9 Aug 2026. Ordering below is priority-driven (highest-confirmed gaps first), not scheduled around the test date.

- **U42 — Boundary & Edge-Case Adjustment (Circular −1, Fencepost, r=4 divisor).** *Closes: M4 circular gap, M4/U41 r=4 divisor gap, ASMOPSS Q17.* Teaches the three as one general principle — "does this need a boundary adjustment?" — rather than three separate patches. Highest priority: it's the one finding confirmed from two completely different tests.
- **U43 — Word Problem Decoding: Clue Extraction, Tables & Multi-Step Profit.** *Closes: ASMOPSS Q6, Q9, Q10.* Teaches "write every given number on its own line before combining" as an explicit method, using table-reading and discount/profit word problems as training material. Single weakest topic on the ASMOPSS paper (2/6).
- **U44 — Systematic Listing & Constrained Counting.** *Closes: ASMOPSS Q19, Q25.* Art of Counting is competition-weighted per the standing rule and is now confirmed weak from two angles (M4's r=4 gap plus this paper's two misses).
- **U45 — Reverse Averages & Missing-Value Arithmetic.** *Closes: ASMOPSS Q12.* Clean untaught-content gap — average × count = total, then work backward.
- **U46 — 3D Visualization: Irregular & Stacked Solids.** *Closes: ASMOPSS Q14.* Distinguishes from the already-solid cube-filling skill (Q23); focuses specifically on reading occluded cubes from a 2D drawing.
- **U47 — Algebra: Symbol Systems & Substitution Fluency.** *Closes: ASMOPSS Q22 + M4's deferred U21 equation-method warm-up (Q8).* Both point at the same underlying need — folding them into one unit avoids two separate light-touch fixes.
- **U48 — Geometric Area: Composite & Subtracted Regions.** *Closes: ASMOPSS Q16 + carries forward the M4/U28 cost-arithmetic-care monitor* as a "check your figure reading" precision habit, same style as U41's banner.
- **U49 — Multi-Step Arithmetic Precision Under Pressure.** *Closes: ASMOPSS Q1, Q4.* Reuses the "circle your intermediate answers" technique that took U41 from 8/15 to 13/15, applied to order-of-operations and pattern-to-expression plug-in problems.
- **U50 — Cumulative Mixed Review + M5 Prep.** One question from each of U42–U49's focus areas, full-spectrum dress rehearsal before Milestone M5. If the calendar has passed 9 Aug 2026 by the time M5 is built, M5 reverts to the standard 20-question ISA+Kangaroo format per the standing rule; if not, M5 stays in ASMOPSS 25-question style.

**Running alongside all of this, not a dedicated unit:** normalize a handful of competition-specific vocabulary terms (adjacent, at least, distinct, consecutive) — a 5-minute addition to whichever unit lands next after this write-up, since it's a comprehension fix rather than a math topic.

### Next Assessment

**Unit Test — U42 (first unit of cycle 5), targeting Boundary & Edge-Case Adjustment.** This supersedes M4's standalone "Circular & Repeats Precision" recommendation — U42 now folds in the fencepost/fencepost-style ASMOPSS finding too, since it's the same root habit. No formal "retest" mechanic applies to milestones or competition papers; both M4's and this paper's findings feed directly into the U42–U50 plan above.

---

## Unit 42 — Circular Order & High Repeats · Fencepost Spacing (completed 16 Jul 2026)

**Score: 7 / 15 (47%) — NOT PASSED.** Section A 3/5 · Section B **1/5** · Section C 3/5.

> **The big problem is arithmetic scale, not concept.** Section C — a completely brand-new topic (fencepost spacing) built from zero this unit — actually landed the best of the three (3/5, two near-misses), and Section A's easier items were fine too. Section B is what collapsed, and looking at the raw pages, three of its five questions (Q7, Q8, Q10) aren't wrong answers — they're literal question marks. All three of those questions needed (n&minus;1)! for n=9, i.e. computing 8!=40,320 by hand, and the margin next to them shows a tangled, abandoned multi-line multiplication attempt. Q9, the one Section B question that used a smaller base (n=7 &rarr; 6!=720), was answered correctly and cleanly. This points at a specific, fixable cause: three back-to-back questions demanding a 40,320-scale hand computation, layered on top of a brand-new combined concept, overloaded him mid-section — not a failure to understand circles, repeats, or the order they go in.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Circular (no repeats), n=8 | 5040 | ✅ |
| Q2 | Repeats r=2 (SPOON) | 60 | ✅ |
| Q3 | Circular (no repeats), n=6 | 120 | ✅ |
| Q4 | Repeats r=3, n=7 | 860 | ❌ correct 840 — long division shown (5040÷6) is fully correct step by step (48, remainder 24, 24÷6=4, remainder 0) but the middle digit was transcribed as "6" instead of "4": working says 840, answer line says 860. Pure transcription slip, not a method error. |
| Q5 | Repeats r=4+r=3, n=7 | 5 | ❌ correct 35 — no working shown at all; likely where the arithmetic load first became too much (144 is a harder divisor than Q4's 6) and he wrote a rushed/guessed answer. |
| Q6 | Circular+Repeats r=2, n=5 | 2 | ❌ correct 12 — smallest base number in the section, no working shown; possibly a dropped digit (12&rarr;"2") or a genuine slip on the ÷2! step. |
| Q7 | Circular+Repeats r=3, n=9 | ? | ❌ correct 6720 — literal question mark. Margin shows a tangled multi-line attempt at 6!/7!/8!/9! that doesn't resolve. |
| Q8 | Circular+Repeats r=4, n=9 | ? | ❌ correct 1680 — literal question mark, same abandoned working as Q7. |
| Q9 | Circular+Repeats r=2, n=7 | 360 | ✅ — the one Section B question with a smaller base (6!=720), solved cleanly. |
| Q10 | Circular+Repeats, 2 groups, n=9 | ? | ❌ correct 3360 — literal question mark. |
| Q11 | Fencepost — straight line | 13 | ✅ |
| Q12 | Fencepost — circular loop | 16 | ❌ correct 15 — off by one in the OTHER direction: looks like he added +1 to a closed loop by mistake (the opposite slip from M4's circular gap, but same family — a boundary-rule mix-up, not a "never learned it" gap). |
| Q13 | Fencepost — maximum count | 11 | ✅ |
| Q14 | Fencepost — 2D grid | 48 | ✅ |
| Q15 | Capstone — fencepost + circular repeats | 20200 | ❌ correct 20160 — drew 9 dots around a loop to correctly work out the statue count first (excellent problem-solving move, shows the fencepost logic is genuinely internalised), but the final circular+repeats computation ((9&minus;1)!÷2!) came out 40 too high — an arithmetic slip in the last big multiplication/division, the same family of error as Section B. |

### What this tells us

**1. The brand-new topic (fencepost) is the strongest section — the new lesson worked.** 3/5 with two CLOSE near-misses (16 vs 15, 20200 vs 20160) on a topic taught for the very first time this unit is a solid first showing, in line with how U40's circular arrangements landed 4/5 on first exposure. Q15's dot-drawing to find n=9 shows the core "boundary adjustment" habit U42 was built to instil is taking hold.

**2. Section B's collapse is a computation-scale problem, not a conceptual one.** Every Section B question needing 8!=40,320 (Q7, Q8, Q10 — three of five) was abandoned outright with a literal "?". The one question with a smaller base (Q9, n=7) was solved correctly and cleanly. Section A's easier items (including Q1, which itself needed 7!=5040) were mostly fine. The pattern is specific: it's not "large numbers" in general that broke down, it's *repeated* large-scale hand multiplication, several questions in a row, stacked on top of holding a brand-new two-step rule in mind at the same time.

**3. Q4 is a "trust your own working" slip, not a division error.** The long division for 5040&divide;6 is completely correct on the page — he just wrote the wrong digit onto the answer line afterward. Distinct from Q6/Q7/Q8/Q10, which show no working at all (abandoned before or without a real attempt).

**4. Q12's near-miss is the inverse of M4's circular gap — same family, opposite direction.** M4 showed *forgetting* the boundary adjustment (using n! instead of (n&minus;1)! for circles). Here, Q12 shows *over-applying* it (adding +1 to a closed loop, which should get no adjustment at all). This confirms the "boundary adjustment" habit is active and being checked for — it's just not yet reliably landing on the right side of the rule every time.

### Recommended next — U43 (supersedes the original "Word Problem Decoding" plan for this slot)

This is a Section-B-scale retest, not a full unit repeat, per the standing rule (multi-topic test, only the collapsed section needs re-testing) — but it needs a computation-execution fix built in, not just more of the same content:

- **Priority 1 — Efficient Factorial Building, a short new warm-up/mini-lesson:** explicitly teach and drill "build UP from the last one, never restart from scratch" (6!=720 &rarr; 7!=7&times;720=5,040 &rarr; 8!=8&times;5,040=40,320 &rarr; 9!=9&times;40,320=362,880), writing down every intermediate value. This is the exact technique that worked at U33 (7!/8! never taught, computed from the rule, 15/15) — it needs to be re-surfaced and explicitly connected to circular+repeats questions, where it clearly didn't transfer under pressure.
- **Priority 1 — Section B retest, same shape but scaffolded:** re-test circular+repeats combined (r=2/3/4) with the SAME concept difficulty, but sequence the base numbers so no more than one question per test needs an 8!-or-larger computation, and explicitly prompt "write down 6!, 7!, 8! as you go" on the working band.
- **Light fold-in:** one repeats-only precision question (echoing Q4/Q5) with an explicit "check your answer line matches your last working line" prompt, addressing the Q4-style transcription slip.
- **Not retested, monitor only:** Section C (fencepost) and Q15's near-miss — strong first showing, feed forward into normal rotation rather than a dedicated retest.
- **Plan shift:** the original U43 topic (Word Problem Decoding: Clue Extraction, Tables & Profit) moves to U44, and the rest of the U42&ndash;U50 plan shifts down by one accordingly (through U51). Still entirely within ASMOPSS-prep mode per the standing rule.

### Next Assessment

**Unit Test — U43, a targeted retest of Section B (Circular + Repeats) with an Efficient Factorial Building fix folded in.** Section A and Section C are not retested — their misses are lower-priority monitors, not gate conditions.

---

## Unit 43 — Circular + Repeats, Targeted Retest with Efficient Factorial Building (completed 18 Jul 2026)

**Marked score: 14 / 15 (93%) — PASSED.** Section A 4/5 (marked) · Section B **5/5 PERFECT** · Section C **5/5 PERFECT**.

> **Both fixes worked completely — and independent regrade shows this was actually a perfect paper.** Section B, the exact section that collapsed to 1/5 on U42 with three literal "?" marks, comes back a flawless 5/5, including the two hardest questions in that section (Q7=360, Q8=120) computed cleanly with no abandonment anywhere. Section C, the hardest tier requiring the full staircase up to 8!=40,320, also lands 5/5 — Q15's capstone (n=9, two repeat groups) shows a complete, correct staircase (5!&rarr;...&rarr;8!=40,320) split into two clean &divide;2 steps rather than one &divide;4, which is if anything a *more* careful application of the rule than the lesson's own worked example. **One correction to flag:** the marked score sheet shows Q5 (answer "20") without a checkmark, while Q1&ndash;Q4 all carry one — but 20 is the mathematically correct answer (n=6, r=3 &rarr; 5!=120&divide;6=20), matching the answer key exactly. This reads as a missed tick during grading, not an actual Prem error (same category of discrepancy as the ASMOPSS 2023 header count) — independent regrade of all 15 questions against the answer key finds **15/15, a genuine perfect paper.**

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Circular+Repeats r=2, n=4 | 3 | ✅ |
| Q2 | Circular+Repeats r=3, n=5 | 4 | ✅ |
| Q3 | Circular+Repeats r=2, n=6 | 60 | ✅ |
| Q4 | Circular+Repeats r=2, n=5 | 12 | ✅ |
| Q5 | Circular+Repeats r=3, n=6 | 20 | ✅ correct — marked without a checkmark on the sheet; independently verified against the answer key as right. |
| Q6 | Circular+Repeats r=4, n=6 | 5 | ✅ |
| Q7 | Circular+Repeats r=2, n=7 | 360 | ✅ — this is one of the exact question types (staircase to 6!/7!) that produced a literal "?" on U42. Clean, correct working shown. |
| Q8 | Circular+Repeats r=3, n=7 | 120 | ✅ |
| Q9 | Circular+Repeats, 2 groups, n=6 | 30 | ✅ |
| Q10 | Circular+Repeats, 2 groups, n=6 | 10 | ✅ — working shows a self-caught correction (an initial attempt crossed out before writing the final 10), a good precision sign on its own. |
| Q11 | Circular+Repeats, 2 groups, n=7 | 180 | ✅ |
| Q12 | Circular+Repeats r=2, n=8 | 2520 | ✅ — staircase shown building 6!=720&rarr;7!=720&times;7=5,040, then &divide;2=2,520. |
| Q13 | Circular+Repeats r=4, n=8 | 210 | ✅ — full long division 5,040&divide;24=210 shown correctly. |
| Q14 | Circular+Repeats r=3, n=8 | 840 | ✅ — full long division 5,040&divide;6=840 shown correctly. |
| Q15 | Capstone — full staircase, n=9, 2 groups | 10080 | ✅ — complete staircase to 8!=40,320 (reusing the 5,040 already built for Q12&ndash;14), then two clean &divide;2 steps (40,320&rarr;20,160&rarr;10,080) instead of one &divide;4 — correct and well-organised. |

### What this tells us

**1. The staircase technique transferred completely.** Every question requiring 7! or 8! (Q7, Q12, Q13, Q14, Q15) shows the build-up written out step by step, and — notably — Prem started reusing his own earlier staircase values across questions (Q13/Q14 both reuse the 5,040 first computed for Q12; Q15 reuses it again to reach 40,320). That's exactly the "don't restart from scratch" habit the lesson targeted, applied even beyond what was explicitly drilled.

**2. The pacing fix (only 1 of 15 questions at full n=9 scale) meant the hardest computation never had to be repeated back-to-back.** Unlike U42, where three 8!-scale computations landed in the same five-question section, U43 spread the load — by the time Q15's n=9 capstone arrived, Prem had already successfully built 7!=5,040 three separate times (Q12, Q13, Q14), so the final step up to 8! was a single, well-rehearsed increment rather than a cold, unfamiliar leap.

**3. "Trust your working" is showing up as self-correction, a step further than the lesson asked for.** Q10's crossed-out-then-corrected answer suggests he's now checking his own work against what he wrote, rather than just copying the last line at the end — a stronger form of the habit than the lesson explicitly taught.

**4. The Q5 grading gap is worth a quick, low-stakes mention to whoever graded the paper** — not a coaching issue, just a bookkeeping one, so the marked 14/15 doesn't undersell what was actually a clean sweep.

### Recommended next — U44

Both U42's gaps (circular+repeats collapse) and the underlying computation-scale issue are now fully closed — Section B and Section C are perfect, and the staircase technique is generalising well. Per the U42&ndash;U50 plan (updated 16 Jul), the next unit resumes the original rotation:

- **Priority 1 — U44: Word Problem Decoding — Clue Extraction, Tables & Multi-Step Profit.** *Closes: ASMOPSS 2023 Q6, Q9, Q10 — the single weakest topic on that paper (2/6).* Teaches "write every given number on its own line before combining" as an explicit method, using table-reading and discount/profit word problems as training material. This was the original U43 slot, deferred one unit for the Section-B retest.
- **Monitor only, no dedicated lesson yet:** Section C's fencepost topic (U42, 3/5) and Q12's inverse-boundary near-miss — feed into normal rotation rather than a dedicated retest, per U42's original recommendation, which still stands.
- **Coaching note:** with U42's collapse fully resolved in one retest cycle, this is a good moment to name the win explicitly with Prem — the staircase technique is now proven twice (U33, U43) and can be referenced by name in future lessons as an established tool rather than something new.

### Next Assessment

**Unit Test — U44 (general rotation, ASMOPSS-weighted) — Word Problem Decoding: Clue Extraction, Tables & Multi-Step Profit.** U43's retest passed cleanly (independently verified 15/15), closing the U42 gap entirely — no further retest needed. Milestone M5 remains due after U50 (5 of 10 units into cycle 5: U42&ndash;U43 done, U44&ndash;U50 remain).

---

## Unit 44 — Word Problem Decoding: Clue Extraction, Tables & Multi-Step Profit (completed 20 Jul 2026)

**Score: 9.5 / 15 (63%) — NOT PASSED.** Section A 4/5 · Section B 3.5/5 · Section C **2/5**.

> **The Clue Board's first half — correctly identifying the right fact or option — is landing. The second half — carrying a multi-step chain all the way to the actual final answer, and answering every part of a multi-part question — is where the points were lost.** Section A (multi-clue problems) is solid at 4/5, the one miss a question he correctly recognised as too hard to finish rather than guessed at. Section B shows the identification skill working even when the final number doesn't: Q7 and Q9 both name the *correct* cheaper option (Train; Plan B) but either give no price or the wrong difference. Section C is the clearest signal — Q15's working shows he executed the FULL two-step markup-then-discount chain correctly to get a single book's sale price (&#3647;189, exactly matching the expected sub-calculation), then simply stopped: no &times;3 for the three books, no answer to "does the shop still make a profit per book." The discount/profit formulas themselves aren't the gap; finishing the chain and reading the whole question are.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Multi-Clue (Tom/Mia, sum22 diff4) | 13 | ✅ |
| Q2 | Multi-Clue (rope, 84 diff18) | 33 | ✅ |
| Q3 | Multi-Clue (fruit basket, 3-quantity) ★ | "?" | ❌ correct 9 — attempted algebra in the working column (wrote "AAAA", "BB", suggesting he tried to represent apples/bananas symbolically) but couldn't resolve it to a number. Honestly flagged as unsolved rather than guessed. |
| Q4 | Multi-Clue (Sarah/Ken, twice+6yr) ★ | 11 | ✅ |
| Q5 | Multi-Clue (pencils/erasers) ★ | 40 | ✅ |
| Q6 | Table Reading (cinema family pack) | 60 | ✅ |
| Q7 | Table Reading (transport filter+cheapest) ★ | "Train" | ✅ (marked correct) — named the right option (correctly filtered out Bus on time, correctly picked Train over Taxi on price) but didn't write the numeric price (฿45) the question also asked for. |
| Q8 | Table Reading (notebook packs, optimization) ★★ | 420 | ❌ correct 380 — used 4&times;10-packs (105&times;4=420) instead of checking the better per-unit rate on 20-packs (2&times;190=380). Didn't compare combinations before settling on one. |
| Q9 | Table Reading (phone plans) ★ | Plan B, 190 | &#189; partial (0.5/1) — correctly identified Plan B as cheaper (matches the key), but the difference amount is wrong (190 instead of 10) — a computation slip after the right comparison was made. |
| Q10 | Table Reading (parking, rounding+cap) ★★ | 200 | ✅ |
| Q11 | Discount & Profit (simple discount) | 360 | ✅ |
| Q12 | Discount & Profit (profit+percentage) | 25%, then illegible | ✅ (marked correct) — the percentage (25%) is right and legible; the profit-amount portion is obscured by heavy scribbling/rewriting and can't be independently verified from the page. |
| Q13 | Discount & Profit (discount then profit) ★ | 270 | ❌ correct 130 — no working shown, so the exact mix-up can't be confirmed, but 270 doesn't match any single obvious sub-step (not the discount amount, not sale&minus;cost) — likely combined the wrong two values. |
| Q14 | Discount & Profit (markup, &times;8) ★ | 200 | ❌ correct 120 — no working shown. |
| Q15 | Discount & Profit (capstone: markup+discount+&times;3+profit check) ★★ | 189 | ❌ correct 567 (profit &#3647;9/book) — working shown is fully correct for ONE book: 180&times;1.4=252, 252&times;0.25=63, 252&minus;63=189. He never multiplied by the 3 books the question asked for, and never answered the "does the shop still make a profit per book" part. The chain itself was executed perfectly; it just wasn't carried to the finish or fully read. |

### What this tells us

**1. Fact/option identification (the first half of the Clue Board method) is working.** Section A's clean 4/5, plus Q7 and Q9 in Section B both correctly naming the cheaper option even when the final number is off, shows the "figure out which fact or choice is actually correct" step is landing well. This is genuinely encouraging — it's the harder, more novel part of this unit's content.

**2. The gap is specifically in finishing multi-step chains and answering every part of a question — most clearly shown by Q15.** Q15's working is a clean, fully correct execution of the exact two-step chain the lesson taught (markup then discount), matching the expected intermediate answer exactly. But the question had two more things to do (multiply by 3, state whether there's still a profit) and neither was attempted. This isn't a concept gap — the concept was just demonstrated perfectly — it's a "keep going until you've answered everything that was asked" gap.

**3. Section B's Q8 is a distinct, narrower gap: checking multiple combinations before settling on one.** Optimization-style table questions (find the CHEAPEST combination) need at least a quick comparison of options, not just the first valid combination found. This wasn't explicitly drilled in the lesson beyond one worked example and one practice question — worth a dedicated pass.

**4. Working was mostly skipped in Sections B and C** (only Q15 shows real working) — this likely compounded both issues above. The Clue Board method asks for writing facts down before combining; when that step is skipped on the harder, multi-part questions, it becomes much easier to stop halfway or mix up which numbers to combine, which is consistent with what actually went wrong in Q8, Q13, Q14, and Q15.

### Recommended next — U45 (targeted retest, Sections B + C)

Section A passed clean (4/5) and is not retested. Sections B and C both fell below the 4/5 bar, so per the standing multi-topic rule this is a targeted retest of B and C only — but it needs two specific fixes folded in, not just more of the same content:

- **Priority 1 — "Finish the chain, answer the whole question" habit:** an explicit checklist step, reusing the proven precision-banner style from U41/U43 — after reaching an answer, re-read the question and check off every part it asked for (a number chained through every step; every sub-question answered) before writing the final line. Q15 is the clearest evidence this is a habit gap, not a method gap.
- **Priority 1 — Write the Clue Board for EVERY question, not just the easy ones:** Section A (where working/reasoning was attempted, even if incomplete on Q3) held up much better than B/C (where working was mostly skipped). Reinforce that the method applies especially on the harder, multi-part questions — that's exactly when it's needed most.
- **Priority 2 — Table optimization: check more than one combination:** a short top-up on "when a question asks for the cheapest/best combination, try at least 2–3 different combinations before deciding" — directly fixes the Q8-style gap.
- **Not retested:** Section A (passed 4/5; Q3's miss was an honest "couldn't solve it," not a concept failure — monitor only).

### Next Assessment

**Unit Test — U45, a targeted retest of Sections B (Table Reading) and C (Discount & Profit).** Section A is not retested. This bumps the original U45 topic (Systematic Listing & Constrained Counting) to U46, shifting the rest of the U42&ndash;U51 roadmap down one slot through U52.

---

## Unit 45 — Targeted Retest: Table Reading & Discount/Profit (completed 22 Jul 2026)

**Score: 13 / 15 (87%) — PASSED.** Section A (Table Reading, Q1&ndash;7) **5/7 (71%)** &middot; Section B (Discount & Profit, Q8&ndash;15) **8/8 (100%)**.

> **The retest passed clearly, and the two new habits show real, if uneven, progress.** "Finish Line Check" &mdash; the fix for U44's Q15 (chain executed perfectly, never carried to the final answer) &mdash; landed on the exact skill it targeted: both multi-item capstones this time (Q14 &times;5, Q15 &times;4) were correctly multiplied through to the final total, something that broke down completely at U44. "Compare Before You Choose" landed cleanly too &mdash; both pack-optimization questions (Q4, Q5) picked the best per-unit rate after implicitly comparing options, directly fixing U44's Q8 miss. The one place progress is real-but-partial: on three "state X, and by how much" questions (Q9, Q12, Q15), the correct number was computed &mdash; visible in the working, and in Q9's case even circled &mdash; but not always carried onto the actual Answer line (Q9 wrote just "20%", Q12 wrote "Yes, ฿54", Q15 wrote "฿1440, Yes" &mdash; each missing the profit-amount figure from the final answer). Only Q13 gave the fully-assembled two-part answer. Section A's two misses (Q1, Q6) are both computation slips inside a correctly-applied method, not comparison failures &mdash; see below.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Table Reading (sandwich combo savings) | ฿10 | ❌ correct ฿5 &mdash; no working shown, so the exact slip can't be confirmed, but 45+25&minus;65=5, not 10. |
| Q2 | Table Reading (parking, flat vs. tiered) ★ | Mall B, ฿10 | ✅ |
| Q3 | Table Reading (gym plans) ★ | Plan Y, ฿50 | ✅ |
| Q4 | Table Reading (marker packs, optimization) ★ | ฿128 | ✅ &mdash; correctly used the best per-unit rate (16-pack) rather than the first valid combination. |
| Q5 | Table Reading (pencil packs, optimization) ★★ | ฿90 | ✅ &mdash; same best-rate reasoning applied a second time, harder numbers. |
| Q6 | Table Reading (streaming services compare) ★ | ฿[unclear], Service A | ❌ correct Service B, ฿180 &mdash; working shows Service A totalled to ~1198 (correct 1194, a small slip) and Service B totalled to 1614 (correct 1014 &mdash; a larger addition error). The COMPARE step itself was followed correctly (he picked the smaller of his two totals); the error is purely computational, in finding Service B's total. |
| Q7 | Table Reading (bike rental, tiered+capped) ★★ | ฿140 | ✅ |
| Q8 | Discount & Profit (simple discount) | ฿510 | ✅ |
| Q9 | Discount & Profit (profit + percentage) | 20% | ✅ (marked correct) &mdash; working shows profit=฿70 correctly computed and circled, then 70&divide;350&times;100=20% via long division. The Answer line itself only reads "20%" &mdash; the profit amount is right but wasn't carried onto the final answer. |
| Q10 | Discount & Profit (discount + profit) ★ | ฿110 | ✅ |
| Q11 | Discount & Profit (markup &times;6) ★ | ฿324 | ✅ |
| Q12 | Discount & Profit (discount + profit-check) ★ | Yes, ฿54 | ✅ (marked correct) &mdash; ฿54 is the correct sale price and "Yes" the correct profit direction, but the profit AMOUNT (฿14) is missing from the answer line. |
| Q13 | Discount & Profit (markup + discount + profit-check) ★★ | Yes, ฿6 | ✅ &mdash; fully complete two-part answer, matching the key exactly. |
| Q14 | Discount & Profit (markup + discount &times;5) ★★ | ฿990 | ✅ &mdash; working shows the full chain (markup, discount, &times;5) carried through correctly. |
| Q15 | Discount & Profit (capstone: markup+discount+&times;4+profit-check) ★★ | ฿1440, Yes | ✅ (marked correct) &mdash; the &times;4 total (฿1440) is exactly right, fixing U44's Q15 miss where the multiply-through never happened. The profit-per-pair amount (฿40) is missing from the final answer line, same pattern as Q9/Q12. |

### What this tells us

**1. "Finish Line Check" fixed the exact failure it targeted &mdash; carrying a chain through every step, including the final multiply.** U44's Q15 stalled after computing one book's price correctly but never multiplying by 3. This time, both multi-item capstones (Q14 &times;5, Q15 &times;4) were carried all the way through to the correct final total. This is the single clearest piece of evidence the retest lesson worked.

**2. "Compare Before You Choose" also landed cleanly.** U44's Q8 (notebook packs) took the first valid combination instead of checking the best rate. This time, both optimization questions (Q4 marker packs, Q5 pencil packs) used the best-per-unit-rate approach correctly, including on Q5's harder numbers (3 different pack sizes). Fully resolved.

**3. A narrower, still-open piece of the same habit: assembling BOTH parts of a "how much" answer onto the actual Answer line.** Three questions (Q9, Q12, Q15) show the correct profit/percentage figure clearly worked out &mdash; sometimes even circled &mdash; but the final Answer line only carries part of it (a percentage, or a "Yes" + one number, but not both required figures). Only Q13 assembled the complete two-part answer. This is real, measurable progress from U44 (where the number was often never computed at all) but shows the habit isn't fully generalized yet: computing every part vs. writing every part on the answer line are still two separate steps for him.

**4. Section A's two misses (Q1, Q6) are computation slips, not comparison-method failures.** In both cases the underlying skill (add up the separate costs, compare two totals, state the difference) was applied; the arithmetic itself went wrong &mdash; most clearly in Q6, where a large addition error (Service B totalled as 1614 instead of 1014) flipped which service looked cheaper, even though the "pick the smaller total" logic was followed correctly on his own (wrong) numbers. Q1 has no working shown at all, which is consistent with a rushed first-question slip (matching a pattern seen in several earlier units, e.g. U35 Q1, U31). Neither miss suggests the Table Reading method itself is shaky.

**5. Working discipline held up much better in Section B than Section A this time** &mdash; almost every Section B question shows real working, a continued improvement from U44 (where B/C mostly skipped it). Section A's Q1 (blank working) is the one regression &mdash; worth a light "always show your numbers, even on the easy-looking Q1" reminder before the next test, not a lesson.

### Recommended next — U46 (resume rotation: Systematic Listing & Constrained Counting)

- **U45's retest passed (87%) &mdash; the word-problem decoding cluster (Q6/Q9/Q10 on the ASMOPSS 2023 paper) is now CLOSED.** No further retest needed; Section A's two misses are light monitor-only items, not a gate.
- **Monitor only (not a lesson):** "assemble every required part onto the Answer line, not just the working" &mdash; light habit reminder before the next multi-part question set, given Q9/Q12/Q15's pattern.
- **Monitor only (not a lesson):** arithmetic care on larger 3-digit additions/comparisons (Q6's 1614-vs-1014 slip) &mdash; a 1&ndash;2 maintenance question next time this shape appears, not a dedicated lesson.
- Resume the original rotation at **U46 &mdash; Systematic Listing & Constrained Counting** (Art of Counting), the topic bumped twice now by two consecutive retests (U43, U45).
- **Timeline note:** ASMOPSS 2026 is now **17 days away (9 Aug)**. Recommend U46 proceeds as planned (it closes a real, untested gap), but afterward shift the balance toward timed mixed past-paper practice rather than starting further brand-new lesson topics this close to the test &mdash; there isn't runway left for another multi-unit lesson-then-retest cycle before 9 Aug.

### Next Assessment

**Unit Test &mdash; U46 (Art of Counting: Systematic Listing & Constrained Counting).** U45 passed, closing the word-problem decoding cluster entirely. This is not a milestone slot &mdash; cycle 5 (post-M4) has only covered two new topics so far (U42, U44) plus two retests (U43, U45); M5 is still several units out. Given the 9 Aug test date, recommend keeping U46 focused and moving quickly into timed past-paper practice afterward.

---

## Unit 46 — Constrained Coin-Combination Listing & Divisibility Arrangements (completed 24 Jul 2026)

**Score: 13 / 15 (87%) — PASSED.** Section A (Constrained Coin-Combination Listing, Q1&ndash;7) **5/7 (71%)** &middot; Section B (Divisibility Arrangements, Q8&ndash;15) **8/8 (100%) PERFECT**.

> **This unit directly closes the two Art of Counting gaps flagged in the ASMOPSS 2023 diagnostic** (Q19, constrained coin listing &mdash; Prem overcounted 9 vs. correct 5; Q25, permutations with a divisibility constraint &mdash; left blank with "how do I list this?"). Section B is the headline result: a clean 8/8 on genuinely new material, including the hardest 6-digit ÷5 and ÷2 arrangements (Q13=120, Q14=360) and the capstone trick question (Q15, correctly reasoned to 0 &mdash; no valid last digit exists in the digit set {2,4,6,7,8,9}). The "fix the last digit first" method transferred completely on first real exposure. Section A held at 5/7, with both misses clustering around variants the lesson never explicitly drilled: a three-coin-type listing (Q6, the lesson's Part A only ever used 2 coin types) and an upper-bound-only constraint with no "at least one of each" anchor phrase (Q4, left blank).

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Constrained Listing (฿6/฿9 coins, ฿63, at least one each) | 3 | ✅ |
| Q2 | Constrained Listing (฿3/฿6 coins, ฿33, at least one each) | 5 | ✅ |
| Q3 ★ | Constrained Listing (฿3/฿12 coins, ฿78, at least two ฿3 + at least one ฿12) | 6 | ✅ &mdash; two different lower bounds on two coins, handled correctly. |
| Q4 ★ | Constrained Listing (฿3/฿11 coins, ฿51, no more than three ฿11 &mdash; no lower-bound clause at all) | *(blank)* | ❌ correct 2 &mdash; no answer or working attempted. First question in this skill with an upper-bound-only rule and no "at least one of each" framing; may not have realised zero ฿11 coins was a legal starting point to sweep from. |
| Q5 ★★ | Constrained Listing (฿4/฿12 coins, ฿112, at least one each) | 9 | ✅ &mdash; largest target in Section A, correct despite working showing only 8 of the 9 checks explicitly written out. |
| Q6 ★★ | Constrained Listing (฿2/฿6/฿12 coins &mdash; THREE coin types, ฿32, at least one each) | 2 | ❌ correct 4 &mdash; working doesn't resemble the systematic two-coin sweep used correctly on Q1&ndash;Q5; looks like a confused, abandoned attempt. First 3-coin-type question in this skill (lesson's Part A only ever taught/practised 2 coin types). |
| Q7 ★★ (capstone) | Constrained Listing (฿6/฿7 coins, ฿62, at least one ฿7 but no more than four ฿7 &mdash; combined lower+upper bound) | 1 | ✅ &mdash; correctly checked all four ฿7-counts (1&ndash;4) and crossed out the three that failed. |
| Q8 | Divisibility Arrangement (digits 2,6,8,9 ÷2) | 18 | ✅ |
| Q9 | Divisibility Arrangement (digits 5,6,7,8 ÷2) | 12 | ✅ |
| Q10 ★ | Divisibility Arrangement (digits 5,6,7,8,9 ÷5) | 24 | ✅ |
| Q11 ★ | Divisibility Arrangement (digits 6,6,7,8,9 &mdash; repeat ÷2) | 36 | ✅ |
| Q12 ★★ | Divisibility Arrangement (digits 5,6,7,8,9 ÷2) | 48 | ✅ |
| Q13 ★★ | Divisibility Arrangement (digits 4,5,6,7,8,9 ÷5) | 120 | ✅ |
| Q14 ★★ | Divisibility Arrangement (digits 4,5,6,7,8,9 ÷2) | 360 | ✅ |
| Q15 ★★ (capstone, trick) | Divisibility Arrangement (digits 2,4,6,7,8,9 ÷5 &mdash; no 0 or 5 in the set) | 0 | ✅ &mdash; correctly recognised no valid last digit exists rather than guessing or leaving it blank. |

*Independently regraded against the answer key: 13/15, exactly matching the marked score &mdash; no discrepancy.*

### What this tells us

**1. Divisibility Arrangements (Section B) is fully mastered on first real exposure &mdash; the ASMOPSS 2023 Q25 gap is CLOSED.** All 8 questions correct, including both harder 6-digit questions and the trick capstone where the honest answer is 0. "Find the last digit first" is now a reliable, generalised method, not just something that works on the exact lesson examples.

**2. Constrained Coin-Combination Listing (Section A) is largely landing (5/7) &mdash; the ASMOPSS 2023 Q19 gap has moved from "overcounts by guessing" to "systematic and mostly correct."** The core sweep-and-check method (sweep the bigger coin, check the leftover divides evenly, then check the extra rule) worked correctly on 5 of 7 questions, including the hardest combined-bound question (Q7, at least one AND no more than four).

**3. Both Section A misses are the same root cause: an untested variant, not a breakdown of the core method.** Q6 was the first-ever 3-coin-type listing question (lesson only taught/practised 2 coin types); Q4 was the first question with an upper-bound-only rule and no "at least one of each" language to anchor the sweep. Neither miss resembles a mechanical slip &mdash; Q6's working shows a genuinely different (confused) approach, and Q4 was left entirely blank, suggesting uncertainty about how to even start rather than a wrong calculation.

**4. This is a clean pass with no gate concerns.** 13/15 (87%) clears the 80% mastery bar comfortably, and the one weaker section (Sec A, 5/7) still clears the 4/5-per-section-style bar in spirit despite having 7 questions rather than 5. No retest needed.

### Recommended next — U47 (resume rotation: Reverse Averages)

- **U46 PASSED (87%) &mdash; both Art of Counting gaps from the ASMOPSS 2023 diagnostic (Q19, Q25) are now closed or substantially improved.** No retest required.
- **Monitor only (not a lesson):** if a future Art of Counting unit revisits constrained listing, fold in one 3-coin-type question and one upper-bound-only (no "at least one of each") question as a light check that Q6/Q4's narrow gaps have closed &mdash; not urgent enough to justify a dedicated lesson this close to ASMOPSS.
- Resume the original rotation at **U47 &mdash; Reverse Averages** (Number Theory/Arithmetic), the topic bumped by the U43 and U45 retests.
- **Timeline note:** ASMOPSS 2026 is now **16 days away (9 Aug)**. Recommend U47 stays focused and moves quickly into timed mixed past-paper practice afterward &mdash; per the U45 recommendation, there isn't runway left for many more full lesson-then-test cycles before the exam date.

### Next Assessment

**Unit Test &mdash; U47 (Reverse Averages).** U46 passed, closing both Art of Counting diagnostic gaps. This is not a milestone slot &mdash; cycle 5 (post-M4) has now covered U42, U44, U46 as new topics plus two retests (U43, U45), five numbered units total; M5 is still five units out (after U51). Given the 9 Aug test date, recommend keeping remaining units tight and shifting toward timed past-paper practice soon.

---

## Unit 47 — Reverse Averages & Missing-Value Arithmetic (completed 27 Jul 2026)

**Score: 11 / 15 (73%) — NOT PASSED.** Section A (Averages &amp; Reversing Them, Q1&ndash;5) **4/5 (80%)** &middot; Section B (Finding A Missing Value, Q6&ndash;10) **4/5 (80%)** &middot; Section C (When The Average Changes, Q11&ndash;15) **3/5 (60%)**.

> **The two foundational sections both cleared the 4/5 bar on brand-new content; the newest, hardest sub-skill (Section C, "when the average changes") is where it broke down.** Sections A and B show the core rule &mdash; Average = Total &divide; Count, used forwards and backwards &mdash; is genuinely understood: 8 of 10 questions correct across finding an average, reversing to a total, and finding one missing value in a list, with both misses (Q4, Q9) being pure arithmetic slips inside a correctly-applied method. Section C, which asks Prem to track a BEFORE total and an AFTER total and subtract them, is a step up in working-memory load &mdash; two numbers to compute and hold, not one &mdash; and it shows: 3/5, with one clean arithmetic slip (Q12) and one deeper setup error (Q13, the AFTER total itself was wrong). Independently regraded against the answer key: 11/15, exactly matching the marked score &mdash; no discrepancy.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Average (5 spelling quiz scores) | 18 | ✅ |
| Q2 | Average (4 basketball games) | 45 | ✅ |
| Q3 | Reverse: Find Total (18 avg &times; 6 days) | 108 | ✅ |
| Q4 | Reverse: Find Total (฿45 avg &times; 5 friends) | 235 | ❌ correct 225 &mdash; working shows only the answer line (no total shown); 45&times;5 miscalculated. Pure arithmetic slip, method (multiply average by count) was the right move. |
| Q5 | Reverse: Find Average (฿96 &divide; 8 days) | 12 | ✅ |
| Q6 ★ | Missing Value (dart game, 3 of 4 rounds known) | 26 | ✅ |
| Q7 ★ | Missing Value (runner, 4 of 5 sprints known) | 65 | ✅ |
| Q8 ★ | Missing Value (savings, 3 of 4 weeks known) | 155 | ✅ |
| Q9 ★ | Missing Value (swims, 5 of 6 known &mdash; largest known-set in Sec B) | 82 | ❌ correct 102 &mdash; working shows the TOTAL correctly found (90&times;6=540), then a crossed-out first attempt at the known sum (358) followed by a second working line, but the known five numbers (88+92+79+95+84=438) were summed as 458 &mdash; a 20-off addition error on the largest addition in the section (5 two-digit numbers), not a method failure. |
| Q10 ★ (Capstone) | Missing Value (parcels, 5 of 6 known) | 78 | ✅ &mdash; correct despite messy multiplication working. |
| Q11 ★★ | Average Changes — Remove (rice sacks, 22&rarr;24) | 14 kg | ✅ |
| Q12 ★★ | Average Changes — Remove (coding bugs, 24&rarr;26) | 14 | ❌ correct 16 &mdash; working shows BOTH totals correct (120, 104) and the right operation (120&minus;104), but the subtraction itself was computed wrong (got 14, not 16). A pure arithmetic slip on top of a fully correct setup. |
| Q13 ★★ | Average Changes — Add (reading minutes, 15&rarr;18) | 13 | ❌ correct 27 &mdash; working shows the BEFORE total correct (15&times;3=45) but the AFTER total wrong (32 instead of 18&times;4=72) &mdash; heavily scribbled/reworked on the page. This is a setup error, not just arithmetic: the AFTER total itself wasn't built from average&times;count correctly for the "someone joins" case. |
| Q14 ★★ | Average Changes — Add (mango picking, 32&rarr;35) | 47 | ✅ &mdash; correct despite messy, heavily corrected working. |
| Q15 ★★ (Capstone) | Average Changes — Remove (tournament, 48&rarr;45) | 63 | ✅ &mdash; full clean chain shown: 48&times;6=288, 45&times;5=225, 288&minus;225=63. |

### What this tells us

**1. The core rule (Average = Total &divide; Count, forwards and backwards) is genuinely understood.** Sections A and B together are 8/10, and every miss in these two sections (Q4, Q9) is a computational slip on top of a correctly-chosen method &mdash; not a conceptual gap. This directly closes the ASMOPSS 2023 Q12 untaught-content gap at the concept level: reverse-averages as an idea has landed.

**2. Section C (average changes when someone joins or leaves) is the real signal, and it's a working-memory load issue, not a missing idea.** Every other move in this unit needs ONE total; this one needs TWO (before and after) held and subtracted correctly. Q11 and Q15 (both "remove," both show full clean working) prove the method is known. Q12 and Q13 are where it broke down under that extra load.

**3. Q12 and Q13 are two DIFFERENT failure types worth separating.** Q12's working is fully correct right up to the last step &mdash; both totals right, right operation chosen, just a subtraction slip (120&minus;104 computed as 14, not 16). Q13 is a step earlier: the AFTER total itself (average&times;count for the "joins" case) was built wrong (32 instead of 72), and the page shows heavy scribbling/rework, suggesting Prem lost track of which numbers belonged to before vs. after mid-calculation. The first is a precision issue; the second is a tracking-two-totals issue &mdash; both point at the same root cause (extra working-memory load in Section C) but call for slightly different fixes.

**4. Q9 confirms a pattern already flagged as a monitor item from U45: arithmetic care drops on the largest additions in a section.** Q9 has five two-digit numbers to add (the most of any Missing Value question this test) and is the one addition that went wrong (438 summed as 458). Q6&ndash;Q8 (three known values each) were all clean.

**5. Per the standing multi-topic pass rule, only Section C needs a retest.** Sections A (4/5) and B (4/5) both clear the 4/5-per-section bar; Section C (3/5) does not. Overall 11/15 (73%) is below the 80% mastery bar, so the unit is NOT PASSED, but the gate is narrow and specific &mdash; the "extra load" step of Move 4, not the whole unit.

### Recommended next — U48 (targeted retest: When The Average Changes)

- **No full unit repeat.** Sections A and B are solid (8/10 combined, both misses computational) and are not retested.
- Build one targeted top-up lesson focused on Section C specifically: (a) a clearer "before total / after total" tracking habit for the ADD case (Q13's gap &mdash; write BOTH totals down, labelled, before subtracting), and (b) a precision check on the final subtraction step, especially with two multi-digit numbers (Q12's gap).
- Fresh 15-question test, Section C topic only (Average Changes — Add &amp; Remove), following the standing retest format.
- **Monitor only (not a lesson):** arithmetic care on additions with 4&ndash;5 terms (Q9) &mdash; carries forward from the same U45 monitor item; fold in 1&ndash;2 maintenance questions with larger known-sets next time Missing Value or similar addition-heavy questions appear.
- **Timeline note:** ASMOPSS 2026 is now **13 days away (9 Aug)**. A single-section retest (not a new topic) keeps this tight and on schedule.

### Next Assessment

**Unit Test &mdash; U48, targeted retest of Section C only (When The Average Changes — Add &amp; Remove).** U47's Sections A and B passed cleanly; only Section C fell below the 4/5 bar. This bumps the original U48 topic (3D Visualization: Irregular &amp; Stacked Solids) to U49, shifting the rest of the roadmap down one more slot through U53. Not a milestone slot.

---

## Unit 48 — Targeted Retest: When The Average Changes (completed 31 Jul 2026)

**Score: 14 / 15 (93%) — PASSED.** Section A (The Basics, Q1&ndash;5) **5/5 (100%)** &middot; Section B (Medium, Q6&ndash;10) **5/5 (100%)** &middot; Section C (Harder, Q11&ndash;15) **4/5 (80%)**.

> **The retest closes the gap cleanly.** Both habits the top-up lesson targeted &mdash; labelling BEFORE/AFTER totals as separate lines, and checking the subtraction by adding back &mdash; show up directly in the working on every single question: all 15 questions have a clearly labelled "before total" line and "after total" line before any subtraction is attempted, a visible change from U47 where Q13's totals ran together on the page. The result: zero labelling errors and zero subtraction errors anywhere on the paper &mdash; both of U47 Section C's exact failure modes (Q12's subtraction slip, Q13's tangled AFTER-total setup) are gone. Section C still lands at 4/5 rather than a clean sweep, but the one miss (Q11) is a new and different kind of error &mdash; see below. Independently regraded against the answer key: 14/15, exactly matching the marked score &mdash; no discrepancy.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Remove (delivery riders, 20&rarr;22) | 14 | ✅ |
| Q2 | Add (knitting club, 12&rarr;14) | 20 | ✅ &mdash; working shows a heavily scribbled first attempt crossed out before the correct labelled totals were written. |
| Q3 | Remove (school buses, 28&rarr;31) | 16 | ✅ |
| Q4 | Add (bakers, 25&rarr;27) | 35 | ✅ |
| Q5 | Remove (fish tanks, 18&rarr;20) | 8 | ✅ |
| Q6 ★ | Add (farmers, 40&rarr;44) | 56 | ✅ |
| Q7 ★ | Remove (chess tournament, 50&rarr;52) | 40 | ✅ &mdash; working column heavily scribbled/reworked, but both labelled totals (300, 260) and the final answer are correct. |
| Q8 ★ | Add (gardeners, 28&rarr;31) | 46 | ✅ |
| Q9 ★ | Remove (factory machines, 60&rarr;63) | 42 | ✅ |
| Q10 ★ (Capstone) | Add (choir, 35&rarr;38) | 50 | ✅ |
| Q11 ★★ | Remove (cargo ships, 45&rarr;48) | 34 | ❌ correct 24 &mdash; both totals were correctly LABELLED (before=360, after=326), but the AFTER total itself was miscalculated: the side-working shows 48&times;7 computed as 326 instead of 336, a multiplication slip on the hardest ★★ question in the section. The subtraction that followed (360&minus;326=34) was performed correctly on the wrong number. |
| Q12 ★★ | Add (swimmers, 52&rarr;55) | 70 | ✅ |
| Q13 ★★ | Remove (classrooms, 64&rarr;68) | 32 | ✅ &mdash; full clean chain: 64&times;9=576, 68&times;8=544, 576&minus;544=32. |
| Q14 ★★ | Add (photographers, 58&rarr;61) | 79 | ✅ |
| Q15 ★★ (Capstone) | Remove (warehouse shelves, "FEWEST" &mdash; 72&rarr;75) | 45 | ✅ &mdash; full clean chain: 72&times;10=720, 75&times;9=675, 720&minus;675=45. |

### What this tells us

**1. Both top-up habits fully transferred.** Every question on the paper shows the two labelled lines ("X total = ...") before any subtraction, and where working is visible, the subtraction step is clean throughout &mdash; including on questions with larger numbers than anything in U47 (e.g. Q13's 576&minus;544, Q15's 720&minus;675). U47's Q12 (subtraction slip on correct totals) and Q13 (AFTER total run together with BEFORE) do not recur anywhere on this paper.

**2. Q11 is a genuinely new, narrower failure mode: a multiplication slip inside a correctly-labelled AFTER total, not a tracking or subtraction error.** The labelling habit worked exactly as intended &mdash; "8=360" and "7=326" are cleanly separated on the page &mdash; but 48&times;7 was computed as 326 instead of 336. This is worth naming precisely: the "check by adding back" habit (326+34=360) would NOT have caught this, because it only verifies that the subtraction is internally consistent with the two totals as written &mdash; it can't detect that one of those totals was wrong to begin with. The check is doing its job (protecting the subtraction step); this slip happened one step earlier, in a single hand-multiplication of two 2-digit-ish numbers under the hardest (★★) tier.

**3. This reads as an isolated arithmetic slip, not a new systemic gap.** It's the only miss across all 15 questions, it comes on the single hardest-scaled multiplication in the paper (48&times;7), and the surrounding questions (Q12&ndash;Q15, all ★★) were all clean, including two capstones with comparable or larger numbers. One data point isn't enough to justify a dedicated lesson.

**4. Per the standing pass rule, this is a clear PASS &mdash; no further retest needed.** Section C reached exactly the 4/5 bar, Sections A and B were both perfect, and the overall 14/15 (93%) is comfortably above the 80% mastery threshold. The U47&rarr;U48 gap (labelling/subtraction under two-total working-memory load) is fully closed.

### Recommended next — U49 (3D Visualization: Irregular &amp; Stacked Solids)

- **No further work needed on reverse averages / average-changes.** The full four-move arithmetic skill (average, reverse to total, missing value, average changes) is now closed end-to-end across U47 and U48.
- **Monitor only (not a lesson):** multiplication accuracy on 2-digit &times; 1-digit products under time/difficulty pressure (Q11's 48&times;7 slip) &mdash; fold in 1&ndash;2 maintenance questions with similar-scale multiplication next time Arithmetic or a related topic appears; not frequent enough yet to warrant a dedicated fix.
- The programme resumes its original rotation at U49: 3D Visualization (Irregular &amp; Stacked Solids), closing the ASMOPSS 2023 diagnostic's Q14 finding (cube-filling is fine at Q23, but occluded/irregular stacked solids are not).
- **Timeline note:** ASMOPSS 2026 is now **9 days away (9 Aug)**. With the arithmetic retest cleared, the remaining runway shifts toward finishing the last gap-closing topics (U49 spatial reasoning, U50 algebra substitution) before pivoting to timed mixed past-paper practice in the final week.

### Next Assessment

**Unit Test &mdash; U49, new topic (3D Visualization: Irregular &amp; Stacked Solids).** U48 passed cleanly (14/15, 93%) with both Sections A and B perfect and Section C at the 4/5 pass bar &mdash; no retest needed. The programme resumes its original rotation. Not a milestone slot (cycle 5 milestone, M5, remains queued after U51).

---

## Unit 49 — 3D Visualization: Cube Counting, Filling &amp; Painting (completed 2 Aug 2026)

**Score: 11 / 15 (73%) — NOT PASSED.** Section A (Solid Blocks &amp; Uneven Stacks, Q1&ndash;5) **4/5 (80%)** &middot; Section B (Footprints &amp; Filling, Q6&ndash;10) **5/5 (100%)** &middot; Section C (Painted Cube Puzzles, Q11&ndash;15) **2/5 (40%)**.

> **This is not a "3D visualization" gap &mdash; it's a "too many formulas in one section" gap, and Prem said so himself.** Sections A and B (solid-block counting, footprint/uneven-stack counting, and "how many more to finish") landed almost perfectly &mdash; 9/10 between them, with the one miss a clean single-step slip (Q4). Section C is where it broke down, and the pattern is precise: Prem got the two painted-cube questions with a clean, single-formula answer right (Q11 corners=8 always; Q14 hidden=(l&minus;2)(w&minus;2)(h&minus;2)), but wrote **"forgot how 2 do"** on all three questions requiring an edge-count or face-count (Q12, Q13, Q15) &mdash; the three sub-skills the lesson taught via ad-hoc "check middle vs. end in each direction" reasoning rather than a clean, memorable formula. Lui reports Prem's own words: **"too many solving methods to remember."** Independently regraded against the answer key: 11/15, exactly matching the marked score &mdash; no discrepancy.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Solid Block (3&times;2&times;4) | 24 | &#10003; |
| Q2 | Solid Block (5&times;3&times;2) | 30 | &#10003; |
| Q3 | Uneven Stack (staircase 1,2,3,4) | 10 | &#10003; |
| Q4 | Solid Block (two 5&times;4 layers) | 20 | &#10007; correct 40 &mdash; computed ONE layer (5&times;4=20) but never multiplied by the 2 layers/height. A single missed multiplication step, not a method breakdown &mdash; every other solid-block question (Q1, Q2) used the full l&times;w&times;h correctly. |
| Q5 | Uneven Stack (staircase 2,4,6,3) | 15 | &#10003; |
| Q6 &#9733; | Uneven Stack (two-layer L-shape) | 16 | &#10003; |
| Q7 &#9733; | Uneven Stack (3&times;3 footprint grid) | 21 | &#10003; &mdash; grid correctly transcribed and added row by row. |
| Q8 &#9733; | Uneven Stack (stepped pyramid, 3 layers) | 35 | &#10003; &mdash; heavily reworked/scribbled but the final total is correct. |
| Q9 &#9733; | Filling (3&times;3&times;3, partial heights given) | 12 | &#10003; |
| Q10 &#9733; (Capstone) | Filling (3&times;4&times;5, partial heights given) | 23 | &#10003; |
| Q11 &#9733;&#9733; | Painted &mdash; exactly 3 faces (2&times;2&times;2 block) | 8 | &#10003; &mdash; the clean "every cube is a corner" case. |
| Q12 &#9733;&#9733; | Painted &mdash; exactly 2 faces (5&times;3&times;3 block) | "forgot how 2 do" | &#10007; correct 20. No attempt on either the question or the working column. |
| Q13 &#9733;&#9733; | Painted &mdash; exactly 1 face (6&times;3&times;3 block) | "forgot how 2 do" | &#10007; correct 18. No attempt. |
| Q14 &#9733;&#9733; | Painted &mdash; 0 faces / hidden (5&times;4&times;3 block) | 6 | &#10003; &mdash; working shows the clean formula applied directly: 3&times;2&times;1=6. |
| Q15 &#9733;&#9733; (Capstone) | Painted &mdash; at least 2 faces (6&times;4&times;3 block) | "forgot how 2 do" | &#10007; correct 36. No attempt. |

### What this tells us

**1. The core spatial-counting skill (Sections A+B) is genuinely solid.** 9/10 across solid blocks, uneven stacks, footprints, and filling &mdash; including the hardest ★ capstone (Q10, a 3&times;4&times;5 fill with 12 given column heights) done correctly. This is real evidence the underlying "count systematically, don't guess from a picture" habit transferred cleanly from Art of Counting into a brand-new 3D context.

**2. Section C's failure is precisely targeted, not general.** Of the 4 painted-cube sub-skills taught, the 2 with a clean one-line formula (corners always = 8; hidden = (l&minus;2)(w&minus;2)(h&minus;2)) were both answered correctly, including under the hardest ★★ tier. The 2 taught only through step-by-step "is this cube at an end or in the middle, in each of the 3 directions?" reasoning (edge count, face count) were both abandoned outright, and the capstone that needed one of them (Q15, corners+edges) was abandoned too.

**3. Prem named the actual problem himself: "too many solving methods to remember."** This matches a pattern already seen once before in this programme (U31, Art of Counting, 8 moves in one unit) &mdash; but this time it happened WITHIN a single section, not across a whole unit. Four distinct near-formulas for four cube categories is too much to hold onto by the ★★ tier of a brand-new topic, even when each individual piece of reasoning is sound.

**4. Per the standing multi-topic pass rule, only Section C needs a retest.** Sections A (4/5) and B (5/5) both clear the 4/5-per-section bar; Section C (2/5) does not, and badly. Overall 11/15 (73%) is below the 80% mastery bar.

### Recommended next — U50 (targeted retest: Painted Cube Puzzles, re-taught with ONE unifying model)

- **No full unit repeat.** Sections A and B are strong (9/10 combined, one clean single-step slip) and are not retested.
- Build one targeted top-up lesson for Section C that replaces the 4 separate formulas with a SINGLE mental model: every rectangular block has exactly 8 corners, 12 edges (grouped into 3 sets of 4 &mdash; one set per direction &mdash; each edge-cube count = that direction's size&minus;2), 6 faces (grouped into 3 opposite pairs &mdash; each face's middle count = the other two dimensions&minus;2, multiplied), and 1 inside region ((l&minus;2)(w&minus;2)(h&minus;2)). Same underlying maths, taught as ONE classification question ("which of the box's 4 physical parts does this cube belong to?") applied four times, not four unrelated recipes.
- Fresh 15-question test, Section C topic only (Painted Cube Puzzles: all 4 face-counts, mixed), following the standing retest format.
- **Monitor only (not a lesson):** the Q4 single-step multiplication slip (layers &times; height) &mdash; fold into a 1-question maintenance check next time solid blocks appear; not a pattern yet.
- **Scheduling note:** this retest inserts one extra assessment into the prediction-driven final-week plan. With 7 days left to the 9 Aug exam, the remaining topics (Digit &amp; Symbol Puzzles, Pictogram Clue-Puzzles, Composite/Overlapping Area) each shift down one slot, and the standalone Mixed Precision Drill unit is folded into the mock-test review day instead of getting its own dedicated unit, to keep the full ASMOPSS-style mock test and a rest day intact before the exam.

### Next Assessment

**Unit Test &mdash; U50, targeted retest of Section C only (Painted Cube Puzzles, re-taught with the corner/edge/face/inside unifying model).** U49's Sections A and B both passed cleanly; only Section C fell below the 4/5 bar, and specifically on the 2 of 4 sub-skills taught without a clean formula. This bumps Digit &amp; Symbol Puzzles to U51, Pictogram Clue-Puzzles to U52, and Composite/Overlapping Area to U53; the Mixed Precision Drill unit is absorbed into mock-test review rather than getting its own slot. Not a milestone slot.

---

## Unit 50 — Targeted Retest: Painted Cube Puzzles, One Unifying Model (completed 5 Aug 2026)

**Score: 8 / 15 (53%) — NOT PASSED.** Section A (Corners &amp; Inside, Q1&ndash;5) **5/5 (100%)** &middot; Section B (Edges &amp; Faces, Q6&ndash;10) **2/5 (40%)** &middot; Section C (Full Classification, Q11&ndash;15) **1/5 (20%)**.

> **&#9888;&#65039; Flagging a marking discrepancy up front:** the cover page shows a score of "4/15" written in the score box, then "7/15" written separately at the top corner. Neither matches the section subtotals actually marked on the paper (Section A "5", Section B "2", Section C "1" — all clearly legible in red), which sum to **8/15**. This write-up uses 8/15 as the reconciled score. Worth a quick check with whoever graded it — this may just be an adding slip like the one caught at U43, but flagging rather than silently picking a number.

> **This is a bigger problem than a content gap, and it has two separate causes.** First, the core issue U50 was built to fix &mdash; edges and faces &mdash; is still not landing: across the 10 edge/face questions in Sections B and C, only 3 are correct (Q6, Q8, Q11), and Section C actually got WORSE than U49 (1/5 here vs. 2/5 there), despite being a dedicated re-teach. Q12 and Q14 (both Faces questions) have the identical wrong answer "16" with no working shown at all &mdash; that pattern looks like a guess, not an applied method. Second, and more concerning: on at least two questions (Q6, Q8), **Prem's own working shows the fully correct calculation, and he then crossed out his own correct answer and wrote a different, wrong one in its place.** That is not a knowledge gap. He also wrote "confusing method" directly next to Q7 (Faces) &mdash; direct evidence the new corner/edge/face/inside framing has not resolved his confusion with the faces formula specifically, even though it was built for exactly that.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Corners (3&times;2&times;2) | 8 | &#10003; |
| Q2 | Inside (3&times;3&times;3) | 1 | &#10003; |
| Q3 | Inside (4&times;3&times;3) | 2 | &#10003; |
| Q4 | At Least 1 Face (3&times;3&times;2) | 18 | &#10003; |
| Q5 | At Least 1 Face (4&times;2&times;2) | 16 | &#10003; |
| Q6 &#9733; | Edges (4&times;4&times;3) | working shows 8+8+4=20 (fully correct), then crossed out and replaced with an illegible final answer | Marked &#10003; on the paper &mdash; credited for the correct working, but the final written answer doesn't clearly show 20 anymore. |
| Q7 &#9733; | Faces (4&times;4&times;4) | 12 | &#10007; correct 24. Margin note in Prem's own writing: **"confusing method."** |
| Q8 &#9733; | Edges (5&times;2&times;2) | working shows 12+0+0=12 (fully correct), then crossed out and replaced with an illegible final answer | Marked &#10003; on the paper &mdash; same pattern as Q6: correct math, then self-overwritten. |
| Q9 &#9733; | Faces (5&times;4&times;4) | 14 | &#10007; correct 32. No working shown. |
| Q10 &#9733; (Capstone) | At Least 2 Faces (5&times;5&times;3) | ~43 (messy) | &#10007; correct 36. Working shows edges miscalculated as 18 instead of 28 (75&minus;(8+18)), then a second, unrelated line of arithmetic. |
| Q11 &#9733;&#9733; | Edges (6&times;5&times;2) | 28 | &#10003; &mdash; the one clean, confident, correctly-worked answer in Sections B+C. |
| Q12 &#9733;&#9733; | Faces (5&times;5&times;4) | 16 | &#10007; correct 42. No working shown. |
| Q13 &#9733;&#9733; | At Most 1 Face (5&times;5&times;5) | 54 | &#10007; correct 81. Working shows 27+27=54 &mdash; added the inside count (27) to itself instead of faces (54) + inside (27). |
| Q14 &#9733;&#9733; | Faces (6&times;4&times;4) | 16 | &#10007; correct 40. No working shown &mdash; identical wrong answer to Q12, a possible sign of guessing rather than computing. |
| Q15 &#9733;&#9733; (Capstone) | At Least 2 Faces (6&times;5&times;4) | 78 | &#10007; correct 44. Working shows edges miscalculated as 18 instead of 36 (24+18=42), then an unrelated 120&minus;42=78 line. |

### What this tells us

**1. Section A (already-mastered review content) held perfectly.** Corners and inside are fully solid at 5/5 &mdash; this part of the retest design worked exactly as intended and isn't in question.

**2. The edges/faces skill itself is still not landing, and Section C got WORSE, not better.** 3/10 correct across the two sections built to fix exactly this (Sec B 2/5, Sec C 1/5 &mdash; down from 2/5 at U49). The unifying "4 parts of a box" model was meant to replace 4 separate formulas with one classification step; on this evidence it has not yet done that for the faces formula specifically, and Q12/Q14's identical blank-working wrong answers look like guessing under pressure rather than a partially-applied method.

**3. New finding, and probably the more important one: Prem is overwriting his own correct answers.** On Q6 and Q8, the working column shows the fully correct calculation (8+8+4=20; 12+0+0=12) &mdash; he had it right &mdash; and then crossed it out and wrote something else. This is a self-doubt / confidence pattern under test conditions, not a method failure, and it's a new pattern that hasn't shown up this clearly in any prior unit this cycle.

**4. Prem's own annotation ("confusing method," Q7) is direct, first-person evidence the redesign didn't land for him**, even though the retest was built specifically in response to his U49 feedback ("too many solving methods to remember").

**5. Timing is now the binding constraint.** The ASMOPSS exam is 5 Aug + 3 days = 9 Aug 2026 &mdash; three days away. A third lesson-and-retest cycle on the same content, following the standard retest rule, is very unlikely to both fit the remaining time and address what looks like a confidence problem as much as a content one.

### Recommended next — this needs Lui's judgment call, not an automatic retest

Given the standing rule ("retest only the failed section") would normally trigger a third pass at edges/faces, but the evidence here points to two different problems (a persisting faces-formula gap, and a new self-doubt pattern that a content lesson can't fix) with only 3 days left before the real exam, this is flagged back to Lui rather than auto-built. Options on the table: a short confidence-focused session (using problems Prem already solves correctly, reinforcing "trust your first correct working, don't erase it"); a light general review day instead of new content; or accepting the edges/faces gap for this cycle and shifting remaining time to strengths and exam-day strategy. Not building a new unit test until this is decided.

### Next Assessment

**Held pending Lui's decision (see above).** By the standing 10-unit-test + 1-milestone cycle count, U42&ndash;U50 is 9 unit-test slots since M4, so a Unit Test (not Milestone) would be next in sequence &mdash; but with 3 days to the real exam and two unresolved issues (content + confidence) surfaced by this result, the cycle-count logic is secondary to what Lui decides is the best use of the remaining time.

---

## Milestone M5 — ASMOPSS-Style Cumulative Review, Units 42–50 (completed 6 Aug 2026)

**Score: 47 / 100** (Round 1 8/10 &rarr; 20/25 marks &middot; Round 2 6/10 &rarr; 27/45 marks &middot; Round 3 0/5 &rarr; 0/30 marks). Diagnostic benchmark, not pass/fail — built at Lui's request, same ASMOPSS-style format as M4, as the final cumulative check before the real exam (9 Aug 2026, 3 days after this test).

> **&#9888;&#65039; Marking note:** the cover score box was left blank, and the handwritten round-tallies ("7&times;2.5" for Round 1, "5&times;4.5" for Round 2) undercount by one question each versus an independent check against the answer key — Round 1 is actually 8/10 (Q5's "96," reached by fully listing all 14 terms, has a check mark and is correct) and Round 2 is 6/10 (Q16 and Q17 both check out). This write-up uses the independently verified 47/100.

> **The headline is genuinely good news: the specific U50 problem did not repeat.** Nowhere on this 25-question paper is there a crossed-out CORRECT answer replaced with a wrong one — the exact self-doubt pattern that drove the confidence session. Q17 (painted-cube corners) was answered "ALWAYS 8" with a confident drawing, no hesitation, no second-guessing. Instead, on questions he couldn't solve, Prem wrote a plain, honest "IDK" (Q18, Q19, Q21) or a note explaining the block ("also forgot how 2 do," Q12) rather than guessing wildly or erasing correct work — a real, visible behaviour change in exactly the direction the confidence session aimed for. Two separate content findings sit underneath that good news: a genuine regression in circular arrangements (the "subtract 1 first" rule, previously resolved at U43, slipped twice), and several honest blanks on previously-resolved reverse-average content that look more like fatigue on a long mixed paper than a real regression.

### Breakdown

| Q | Marks | Topic | Prem | Result |
|---|-------|-------|------|--------|
| Q1 | 2.5 | Arithmetic | 151 | &#10003; |
| Q2 | 2.5 | Number Theory — Factorial | 42 | &#10003; |
| Q3 | 2.5 | Number Theory — Remainder | 6 | &#10003; |
| Q4 | 2.5 | Number Theory — Divisibility | 4 | &#10003; |
| Q5 | 2.5 | Sequences | 96 | &#10003; &mdash; wrote "forgot how to do this so imma just list," then listed all 14 terms by hand and landed on the right answer anyway. |
| Q6 | 2.5 | Spatial — Solid Block | 90 | &#10003; |
| Q7 | 2.5 | Spatial — Filling | 5 | &#10007; correct 16. Working shows "56&minus;51=5" &mdash; both the full-cube total and the current-fill sum were miscounted. |
| Q8 | 2.5 | Word Problem — Table Reading | 45 | &#10003; |
| Q9 | 2.5 | Art of Counting — Circular | 720 | &#10007; correct 120. Used 6! instead of (6&minus;1)!=5! &mdash; the exact "subtract 1 first" slip last seen at M4 (Q7, Q13), and marked RESOLVED after U43's 15/15. |
| Q10 | 2.5 | Art of Counting — Divisibility Arrangement | 24 | &#10003; |
| Q11 | 4.5 | Geometry — Fencepost | 15 | &#10003; |
| Q12 | 4.5 | Art of Counting — Repeats (r=4) | blank, "also forgot how 2 do" | &#10007; correct 35. Honest non-attempt, not a guess. |
| Q13 | 4.5 | Arithmetic — Average Changes | 22 | &#10003; |
| Q14 | 4.5 | Word Problem — Multi-Step Profit | 663 | &#10003; &mdash; full correct chain shown (600&times;1.30=780, 780&times;0.85=663). |
| Q15 | 4.5 | Art of Counting — Constrained Listing | 3 | &#10003; |
| Q16 | 4.5 | Spatial — Filling | 21 | &#10003; |
| Q17 | 4.5 | Spatial — Painted (Corners) | 8 | &#10003; &mdash; wrote "ALWAYS 8" with a confident drawing. No hesitation, no crossing-out. |
| Q18 | 4.5 | Arithmetic — Reverse Average | "IDK" | &#10007; correct 13. Previously-resolved content (U47 Sec A); reads as fatigue partway through a long mixed paper, not a re-opened gap. |
| Q19 | 4.5 | Arithmetic — Missing Value | "IDK" | &#10007; correct 23. Same family as Q18, same likely cause. |
| Q20 | 4.5 | Word Problem — Multi-Step Profit | 1450 | &#10007; correct 775. Partly right (15&times;55=825 computed correctly) but the other leg used 25&times;25 instead of 25&times;70 &mdash; a misread number, not a wrong method. |
| Q21 | 6 &#9733;&#9733; | Capstone — Averages | "idk" | &#10007; correct 80. Honest non-attempt on the hardest tier's first question. |
| Q22 | 6 &#9733;&#9733; | Art of Counting — Circular+Repeats | 302400 | &#10007; correct 30240. Same root error as Q9: used 10! instead of (10&minus;1)!=9! before dividing by the repeats &mdash; confirms this is a real, reproducible regression, not a one-off. |
| Q23 | 6 &#9733;&#9733; | Spatial — Painted (Edges) | "IDK" | &#10007; correct 44. Expected at this tier — edges/faces is still the live, known gap from U50. |
| Q24 | 6 &#9733;&#9733; | Capstone — Listing + Divisibility | blank | &#10007; correct 48. No attempt. |
| Q25 | 6 &#9733;&#9733; | Capstone — Counting + Algebra | incomplete ("3S=1L" miswritten) | &#10007; correct 1512. Misread the balance relationship; no final answer reached. |

### What this tells us

**1. The confidence session's specific goal was met — no correct answers were overwritten anywhere on this paper.** That was the single behaviour it targeted, and across 25 questions (roughly double the length of any unit test he's sat), it held. Q17's "ALWAYS 8," written with a confident little drawing, is the clearest single data point: exactly the kind of trust-your-first-answer response the session practised.

**2. When Prem didn't know something, he said so — a real and healthy change from guessing or panic-erasing.** Four honest "IDK"/blank responses (Q12, Q18, Q19, Q21) plus one explanatory note (Q12) beat both of the alternatives: a wild guess that wastes time, or erasing a correct answer out of doubt. This is worth naming and praising directly, separately from the content gaps it's covering for.

**3. Circular arrangements' "subtract 1 first" rule has regressed for the second time, and both times were on a milestone, not a unit test.** Q9 and Q22 both used the plain n! instead of (n&minus;1)! &mdash; identical to M4's Q7/Q13, which was itself "resolved" by U43's 15/15 dedicated retest. The pattern across the programme: this rule holds perfectly when it's the ONLY thing being tested (U43), but slips specifically under long, mixed-topic conditions (M4, now M5). That's a real, specific, and cheap-to-fix signal: it needs a periodic 30-second reminder before any mixed paper, not another full lesson.

**4. Q18/Q19's blanks are most likely fatigue, not a re-opened gap.** Both are previously-resolved reverse-average/missing-value content (U47 Sec A/B, each individually 4/5 on first exposure) and both sit at question 18-19 of a 25-question paper &mdash; a new length and format for him. One clean worked answer nearby (Q13, also an averages question, answered correctly earlier in Round 2) supports fatigue/position-in-paper over a content regression.

**5. Round 3 (hardest tier, first exposure to 2-skill capstones) is 0/5 &mdash; consistent with M4's Round 3 (1/5), not a new alarm.** These are the newest, least-practiced question shape in the whole programme (combine two mastered skills in one multi-step problem), and both milestones show the same pattern. Expected at this stage, not urgent given 3 days remain.

### Recommended next — this is Lui's call, with 3 days left

Given how close the real exam is, no new lesson or scored test is recommended before Sunday. Two very light, low-cost options worth considering: a 2-minute non-scored refresher card on "circle &rarr; subtract 1 FIRST, then handle repeats" (the one clear, cheap, high-leverage fix from this paper), and/or simply naming out loud to Prem what went right here &mdash; that writing "IDK" instead of guessing or erasing is exactly the right move, and Q17's confident "ALWAYS 8" is proof the trust-your-work habit is already working. Nothing here changes the recommendation from the U50 write-up: protect Prem's state going into Sunday over closing any specific remaining gap.

### Next Assessment

**None before the real exam (9 Aug 2026).** This was an out-of-cycle milestone built specifically as a final diagnostic benchmark, not a step in the standard 10-unit-test + 1-milestone cycle (U42&ndash;U50 is still only 9 unit-test slots since M4). Resume the standard cycle after the exam, informed by both this result and U50's.

---

## Unit 51 — Pictogram/Table Clue-Puzzles &amp; Digit/Symbol Puzzles (completed 7 Aug 2026)

**Score: 7 / 15 (47%) &mdash; NOT PASSED.** Section A (Pictogram Clue-Puzzles, Q1&ndash;5) **3/5** &middot; Section B (Digit &amp; Symbol Puzzles, Q6&ndash;10) **3/5** &middot; Section C (Harder + Capstones, Q11&ndash;15) **1/5**.

> **This result needs to be read alongside a clear emotional signal, not just the score.** The pictogram/clue-puzzle skill (Section A) landed reasonably on first exposure &mdash; the ratio, difference, and total-based clues are genuinely being applied, just with execution slips. Digit puzzles (Section B) started fine (Q6, Q7, Q10 all correct) but broke down on the column-addition and repeated-digit questions, and Prem left explicit, unprompted feedback: on Q8 he wrote **"Btw &mdash; I don't understand UR solution for this"**, and on Q9 he wrote **"don't use stars looks like this!!!"** across the top of the page, with heavy, pressed-hard scribbling around his (nonsensical) answer. Section C then collapsed to 1/5, with Q13, Q14, and Q15 all left completely blank under heavy scratch marks &mdash; not attempted, not worked, abandoned. Taken together, this reads as a **frustration/disengagement cascade**: the ★★ symbol notation specifically triggered a visible negative reaction at Q9, and everything after that point in the test was abandoned rather than attempted.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Total Minus Known | 5 | &#10007; correct 15. Working blank &mdash; likely added the 3 known values (12+9+14=35) but then subtracted incorrectly, or misread which number was the total. |
| Q2 | Difference Clue | 24 | &#10003; |
| Q3 | Ratio + Total | 6 | &#10003; |
| Q4 | Chained Clues | 7 | &#10007; correct 26. No working shown &mdash; likely only used one clue instead of chaining all three before subtracting from the total. |
| Q5 | Chained Clues | 49 | &#10003; |
| Q6 | One Symbol | 7 | &#10003; |
| Q7 | Sum &amp; Difference | 9 | &#10003; |
| Q8 &#9733; | Column Addition | blank, "Btw &mdash; I don't understand UR solution for this" | &#10007; correct 4. Honest, direct feedback that the expand-as-(10&times;tens+units) method didn't land &mdash; same pattern as U50's "confusing method" note, now on a brand-new topic's first real test. |
| Q9 &#9733; | Repeated Digit | "ANSWER 33" amid heavy scribbling; margin note "don't use stars looks like this!!!" | &#10007; correct 3. The &#9733;&#9733; notation itself appears to have caused real frustration &mdash; not just a wrong answer, a visibly distressed reaction (exclamation marks, pressed-hard scratch-outs). |
| Q10 &#9733; | Two Unknowns | 5 | &#10003; |
| Q11 &#9733;&#9733; | 5-Category Chain | 42 | &#10003; &mdash; the one clean, confident answer in Section C. |
| Q12 &#9733;&#9733; | Ratio + Difference | 44 | &#10007; correct 132. This is P (44), not Q (3&times;44=132) &mdash; the chain was solved correctly up to the second-to-last step and then not carried through to what was actually asked. A "finish the chain" gap, same family as U44/U45's multi-step completion issue. |
| Q13 &#9733;&#9733; | 2-Digit &times;3 Pattern | blank | &#10007; correct 150. No attempt, heavy scribble over the answer line. |
| Q14 &#9733;&#9733; | Subtraction | blank | &#10007; correct 2. No attempt, heavy scribble over the answer line. |
| Q15 &#9733;&#9733; | Capstone (4-Chain) | blank | &#10007; correct 30. No attempt, heavy scribble over the answer line &mdash; the hint referencing the chained-clues checklist wasn't engaged with. |

### What this tells us

**1. Pictogram clue-puzzles (Section A) are a workable skill on first exposure, with execution gaps rather than a concept failure.** 3/5 on a brand-new topic, with both misses (Q1, Q4) showing no working at all &mdash; consistent with rushing rather than not understanding the method, especially since the harder chained-clue Q5 was answered correctly.

**2. Digit puzzles split cleanly down the middle: the "solve one symbol" and "sum &amp; difference" moves (Q6, Q7, Q10) are solid; the 2-digit-code expansion move (Q8, Q9) is not landing, and Prem told us why in his own words.** Q8's note is calm and specific ("I don't understand UR solution for this") &mdash; useful, actionable feedback about the column-addition method itself, not a confidence issue.

**3. Q9 is a different kind of signal &mdash; a visible frustration reaction to the &#9733;&#9733; notation, not a content gap.** The margin note ("don't use stars looks like this!!!"), the nonsensical "ANSWER 33", and the heavy, pressed-hard scribbling together look like a moment of real frustration during the test, distinct from U50's quiet self-doubt (erasing correct answers) and distinct from M5's healthy "IDK" responses. This is a new pattern worth naming carefully to Prem rather than just re-teaching the method.

**4. Section C fully collapsed after Q9 &mdash; Q13, Q14, and Q15 were all abandoned outright, not attempted-and-wrong.** This is the strongest evidence for the frustration-cascade reading: three good-faith attempts (Q11 correct, Q12 nearly correct) sit right next to three complete blanks with heavy scratch marks, in a section that started reasonably (Q11 clean and confident).

**5. Timing is now extremely tight &mdash; the real exam is Sunday, 2 days away.** All three sections fell below the 4/5 pass bar, which under the standard retest rule would normally call for retesting everything. That is very unlikely to be either feasible or wise with 2 days left, especially given the visible frustration signal &mdash; a rushed re-teach right now risks compounding exactly the reaction this paper just showed.

### Recommended next &mdash; this needs Lui's judgment call, not an automatic retest

Given the standing rule would normally trigger a full retest (no section passed), but there are only 2 days left and clear signs of frustration/disengagement rather than a clean content gap, this is flagged back to Lui exactly as U50 was. Worth considering: acknowledging directly to Prem that the star symbols were a fair complaint (notation, not maths) and that stopping after Q9 was a reasonable call in the moment, not a failure; treating Section A's real partial success (3/5, first exposure) and Q6/Q7/Q10/Q11's clean answers as the headline, not the section-by-section fails; and, given exam-day proximity, weighing whether any further scored work happens before Sunday at all versus focusing the last 2 days on rest and confidence. Not building a new unit test or retest until this is decided.

### Next Assessment

**Held pending Lui's decision (see above).** With the real exam 2 days away, the cycle-count logic (U51 would be the 10th unit-test slot since M4, normally triggering a milestone next) is secondary to what Lui decides is the best use of the remaining time.

---

## Unit 52 — Two-Skill Capstones, Chain What You Already Know (completed 7 Aug 2026)

**Score: 9 / 15 (60%) &mdash; NOT PASSED**, but a real improvement over U51 (7/15). Section A (Warm-Up Pairs, Q1&ndash;5) **5/5** &middot; Section B (Medium Pairs, Q6&ndash;10) **3/5** &middot; Section C (Harder Pairs &amp; Capstone, Q11&ndash;15) **1/5**.

> **The core method landed &mdash; Section A is a clean sweep.** All four skill-pairings (circular+repeats, averages+removal, counting+remainder, handshake+algebra), plus the averages+addition variant, were correctly baton-passed on first real exposure at the easy tier. That's the headline: the "solve Skill 1 to one clean number, feed it into Skill 2" idea is genuinely his now, not just something demonstrated in the lesson. The score drops as the numbers get bigger and the questions get denser, and each drop has a specific, fixable cause rather than reflecting on the method itself.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Circular + Repeats | 60 | &#10003; |
| Q2 | Averages + Removal | 23 | &#10003; |
| Q3 | Counting + Remainder | 9 | &#10003; |
| Q4 | Handshake + Algebra | 7 | &#10003; |
| Q5 | Averages + Addition | 28 | &#10003; &mdash; Section A clean sweep, 5/5. |
| Q6 &#9733; | Circular + Repeats | 420 | &#10003; &mdash; correct despite heavy scratch-work; the repeats division (&divide;3!&divide;2!) was applied in full. |
| Q7 &#9733; | Counting + Remainder | 7 | &#10007; correct 8. Working shows "20&divide;13" &mdash; he reused Q3's 2-digit count (20) instead of recomputing Skill 1 fresh for a 3-digit count (60). A "didn't reset Skill 1 for the new question" error, not a remainder-method error. |
| Q8 &#9733; | Averages + Removal | 34 | &#10003; &mdash; full correct long division shown (210&minus;15&minus;25=170, 170&divide;5=34). |
| Q9 &#9733; | Handshake + Algebra | 10 | &#10003; &mdash; correctly found n(n&minus;1)=90 and solved to 10. |
| Q10 &#9733; | Distributing + Remainder | blank | &#10007; correct 4. No attempt, no working &mdash; the newest sub-skill (stars-and-gaps) combined with a second skill for the first time. |
| Q11 &#9733;&#9733; | Circular + Repeats | illegible, self-marked "?" | &#10007; correct 840. Working shows 8!=40320 correctly, then divided by 24 instead of 48 (3!&times;2!) &mdash; forgot to divide by BOTH repeat groups, only one. |
| Q12 &#9733;&#9733; | Averages 2-Step | illegible, self-marked "?" | &#10007; correct 2. No clean working shown; the "?" suggests he knew he wasn't confident, matching Q11. |
| Q13 &#9733;&#9733; | Counting + Remainder | 13 | &#10007; correct 3. No working shown &mdash; "13" matches the question number itself, suggesting a possible transcription slip rather than a calculation attempt. |
| Q14 &#9733;&#9733; | Combinations + Algebra | 33 | &#10007; correct 12. Likely computed 66&divide;2=33 &mdash; applied the handshake-style halving directly to the given total instead of solving n(n&minus;1)=132 first. The "solve backward" half of this skill needs another look. |
| Q15 &#9733;&#9733; | Capstone (3-Skill Chain) | 80 | &#10003; &mdash; the hardest single question on the paper, solved via full long division shown at every stage (362880&divide;6=60480, 60480&divide;100=604 r80). |

> **Marking note:** the score box shows "9," matching this independent tally exactly (5+3+1=9) &mdash; a clean reconciliation, no discrepancy to flag this time.

### What this tells us

**1. The baton-pass method itself is not the problem &mdash; Section A proves that.** Every easy-tier pairing was solved correctly and independently. This validates building U52 as a pure meta-skill lesson rather than new content.

**2. The Section B miss (Q7) is a specific, nameable habit: not refreshing Skill 1 for a new question.** He carried over the "20" from Q3 (2-digit count) instead of recalculating for Q7's 3-digit count. This is exactly the kind of error the checklist's Step 3 ("solve Skill 1 completely, as if it were its own question") was meant to prevent &mdash; worth a very short, targeted reminder, not a re-teach.

**3. Q11's error is a genuine content gap, not a method failure: dividing by only ONE repeat group instead of both.** 8!=40320 was computed correctly, but he divided by 24 (just one factorial) instead of 48 (3!&times;2!, both groups). This is worth a quick check-in given the real exam may include a double-repeat circular question.

**4. Q14 reveals the "solve backward" half of the combinations+algebra pairing isn't fully secure.** He applied the simpler handshake shortcut (halve the total) directly, skipping the n(n&minus;1)=132 step that the combinations version actually requires. The forward-direction pairs (Q1, Q6, Q11) are solid; the backward-solve pairs (Q4, Q9 correct; Q14 not) are shakier under harder numbers.

**5. Q15, the single hardest question on the entire test, was answered correctly with full working shown.** This is the strongest possible evidence that when Prem commits to writing out every step, he can chain three skills together successfully &mdash; directly relevant to the real exam's hardest tier.

**6. Q11 and Q12 both carry a self-written "?"** &mdash; a visible note of his own uncertainty, but notably NOT the U50/U51 pattern of crossing out a correct answer or visible frustration. This reads as honest uncertainty, closer to M5's healthy "IDK" than to U50's self-doubt or U51's distress &mdash; a good sign for how he's currently relating to not-knowing.

### Recommended next &mdash; the exam is tomorrow or the day after

With the real ASMOPSS exam this close, no new lesson or scored test is recommended. If anything happens before Sunday, it should be verbal and light: naming Section A's clean sweep as proof the method works, a 20-second reminder to "recompute Skill 1 fresh for every new question, even if a similar number showed up before," and a quick verbal check on dividing by BOTH repeat groups in a circular-arrangements-with-two-repeat-types question. Otherwise, this is a good note to end preparation on &mdash; real, visible progress from U51 (7/15) to U52 (9/15), a fully-landed new meta-skill, and the hardest question on the paper answered correctly.

### Next Assessment

**None before the real exam (9 Aug 2026).** Resume the standard programme cadence after the exam, informed by this result alongside U49&ndash;U51's.

---

## Unit 53 — Quick-Win Add-Ons: Both Groups Every Time &amp; Double the Total First (completed 8 Aug 2026)

**Score: 11 / 15 (73%) &mdash; NOT PASSED**, but the best score since U49 and a clear upward trend from U50's low (8&rarr;7&rarr;9&rarr;11). Section A (Circular Double-Repeat, Q1&ndash;5) **4/5** &middot; Section B (Combinations Backward, Q6&ndash;10) **5/5 PERFECT** &middot; Section C (Harder &amp; Capstone, Q11&ndash;15) **2/5**.

> **Combinations Backward (Lesson 2) is fully secure &mdash; 7/7 correct everywhere it appeared on the paper, including at the &#9733;&#9733; tier.** The circular double/triple-repeat rule (Lesson 1) is more interesting than the raw score suggests: most of the misses trace to arithmetic-scale slips or abandoned big-number attempts on a correctly-identified method, not confusion about the rule itself &mdash; including a standout moment where Prem correctly extended the 2-group rule to a 3-group variant he was never explicitly taught.

### Breakdown

| Q | Topic | Prem | Result |
|---|-------|------|--------|
| Q1 | Circular Double-Repeat | 360 | &#10007; correct 180. Divided by only ONE repeat group (720&divide;2=360) instead of both (720&divide;2&divide;2=180) &mdash; the exact mistake the lesson's "one mistake to avoid" section named directly. First question on the paper. |
| Q2 | Circular Double-Repeat | 10080 | &#10003; |
| Q3 | Circular Double-Repeat | 7560 | &#10003; &mdash; full long division shown. |
| Q4 | Circular Double-Repeat | 100800 | &#10003; |
| Q5 | Circular Double-Repeat | 105 | &#10003; &mdash; Section A recovers immediately after Q1, 4/5. |
| Q6 | Combinations Backward | 5 | &#10003; |
| Q7 | Combinations Backward | 6 | &#10003; |
| Q8 &#9733; | Combinations Backward | 13 | &#10003; &mdash; working shows 78&times;2=156 correctly. |
| Q9 &#9733; | Combinations Backward | 14 | &#10003; &mdash; working shows 91&times;2=182 correctly. |
| Q10 &#9733; | Combinations Backward | 15 | &#10003; &mdash; Section B PERFECT, 5/5. |
| Q11 &#9733;&#9733; | Circular Double-Repeat | blank, self-marked "?" | &#10007; correct 277200. Attempted 11!=39,916,800 by hand via long multiplication and addition, got tangled in the arithmetic, and abandoned before reaching the &divide;4!&divide;3! step. Never got far enough to apply (or misapply) the actual rule. |
| Q12 &#9733;&#9733; | Combinations Backward | 16 | &#10003; &mdash; working shows 120&times;2=240 correctly, then found 15&times;16=240. |
| Q13 &#9733;&#9733; | Circular Triple-Repeat | 30360 | &#10007; correct 45360. <strong>Conceptually correct and genuinely novel</strong> &mdash; the lesson only taught 2 repeat groups, and the test's hint ("the rule still applies — just one more group") pointed at the extension. Prem correctly computed 9!=362,880 and set up dividing by 2 three times in a row (recognizing all three hat-colour groups). The wrong final answer traces to a single arithmetic slip in the middle division step (181,440&divide;2 miscalculated), not a misunderstanding of the extended rule. |
| Q14 &#9733;&#9733; | Combinations Backward | 17 | &#10003; &mdash; working shows 136&times;2=272 correctly, then verified 16&times;17=272 by full multiplication. |
| Q15 &#9733;&#9733; | Capstone (Backward + Circular) | blank, self-marked "?" | &#10007; correct 3326400. <strong>The "double the total" half was completed correctly</strong> &mdash; 66&times;2=132, &divide;2=12, so n=12 is right there in the working. The second half (circular arrangement for 12 people with 3+2 repeats) then broke down into scratch multiplication attempts and was abandoned, heavily scribbled over. |

> **Marking note:** the score box shows "11," matching this independent section tally exactly (4+5+2=11) &mdash; clean reconciliation, no discrepancy. Section subtotals (4, 5, 2) are also independently marked in red at the top of each section on the paper itself, and match this tally question-for-question.

### What this tells us

**1. Combinations Backward (Lesson 2, "Double the Total First") is fully locked.** Every single appearance on the paper &mdash; Q6, Q7, Q8, Q9, Q10, Q12, Q14, seven questions across all three difficulty tiers &mdash; was answered correctly, with the doubling step shown explicitly in the working every time. This short, single-rule add-on worked exactly as designed.

**2. Q1's miss is the precise mistake the lesson warned about, but it didn't stick.** Dividing by only one repeat group is exactly the "mistake to avoid" the lesson called out by name &mdash; yet Q2&ndash;Q5, the same skill immediately afterward, were all correct. This reads as a rushed, not-yet-warmed-up first-question slip (a pattern seen before, e.g. U31 Q1) rather than the rule not landing.

**3. Q13 is the most encouraging single data point on this paper.** It's a 3-repeat-group circular arrangement &mdash; a variant never explicitly taught (the lesson only covered 2 groups). Prem correctly recognized the extension from the test's hint, set up the exact right structure (9!, then &divide;2 three times for three groups), and only lost the answer to an arithmetic slip partway through, not a conceptual gap. That's genuine transfer of the underlying idea beyond what was drilled, not pattern-matching.

**4. Q11 and Q15 share a common thread: both required hand-computing very large numbers under time pressure, and both were abandoned rather than attempted-and-wrong.** Notably, Q15's abandonment came AFTER correctly finishing the "double the total" half (n=12, right there in the working) &mdash; it's specifically the large-number circular-arrangement second half that broke down. This is the same arithmetic-scale pattern first seen at U42 (later resolved by U43's "efficient factorial building" lesson), resurfacing here on unfamiliar big numbers rather than reflecting a new gap.

**5. Every wrong answer on this paper has a specific, nameable, non-conceptual cause** &mdash; a rushed first question, one arithmetic slip inside an otherwise-correct method, and two abandonments under big-number pressure. None reflect confusion about either quick-win rule itself. Combined with Section A's immediate recovery after Q1 and Section B's clean sweep, this is a genuinely strong note to end preparation on.

### Recommended next — the real exam is tomorrow

No new lesson or scored test: the exam is 9 Aug 2026, tomorrow. If there's a moment tonight or tomorrow morning, keep it light and verbal, not another drill: remind Prem to double-check he's divided by every repeat group, not just the first one (Q1's slip), and to take his time and write out each step on big multiplications/divisions rather than rushing them in his head (Q11, Q13, Q15). Otherwise, this is a good place to stop: Combinations Backward is fully secure, and Circular Double/Triple-Repeat's rule is demonstrably understood even where the arithmetic broke down under pressure.

### Next Assessment

**None &mdash; this is the final data point before the real ASMOPSS exam (9 Aug 2026).** Resume the standard programme cadence after the exam, informed by the full U49&ndash;U53 run.

---

## ASMOPSS 2026 — Real Competition Result (sat by Prem 9 Aug 2026, analysed same day)

**Score: 50 / 100.** Round 1, Q1&ndash;8 (2.5pt each) **6/8 &rarr; 15/20** &middot; Round 2, Q9&ndash;15 (4.5pt each) **4/7 &rarr; 18/31.5** &middot; Round 3, Q16&ndash;20 (6pt each) **2/5 &rarr; 12/30** &middot; Q21&ndash;25 (mixed points) **2/5 &rarr; 5/18.5**. Independently re-solved all 25 questions from the scanned answer sheet; graded against my own working since no official key was available yet. A full answer key with method notes was generated as a separate PDF (`Competitions/ASMOPSS/ASMOPSS_2026_Answer_Key.pdf`).

> **The real exam confirms, almost question-for-question, the exact gap map this programme has been tracking for weeks.** Every miss traces to one of three already-documented risk areas &mdash; harder-tier combinatorics, painted-cube/3D spatial reasoning, or "stop before finishing the full question" &mdash; and every hit lands squarely in the areas the programme called strengths (multi-step word problems, systems of equations, fractions, patterns). Nothing here is a surprise; it's the predicted profile playing out on the real paper.

### Breakdown

| Q | Pts | Topic | Prem | Result |
|---|-----|-------|------|--------|
| Q1 | 2.5 | Arithmetic | 67 | &#10003; |
| Q2 | 2.5 | Arithmetic (decimals) | 8.96, incomplete | &#10007; correct 30. Solved the first bracket only, verified it by addition, then never computed the second bracket (27.55&minus;7.46) or added the two results together. |
| Q3 | 2.5 | Arithmetic (Sequences) | 230 | &#10007; correct 240. Started the correct pairing method (30+2, 28+4, &hellip; all =32) but abandoned it partway for a messier approach that lost a term. |
| Q4 | 2.5 | Word Problem | 144 | &#10003; |
| Q5 | 2.5 | Word Problem (Fractions) | 150 | &#10003; |
| Q6 | 2.5 | Patterns | 89 | &#10003; &mdash; correctly spotted that the gaps between terms grow by 1, 2, 3, 4. |
| Q7 | 2.5 | Measurement | 17 cm | &#10003; &mdash; all three pencil lengths read correctly off the ruler. |
| Q8 | 2.5 | Word Problem | 223 kg | &#10003; |
| Q9 | 4.5 | Algebra + Sum | 105 | &#10003; |
| Q10 | 4.5 | Number Theory (Remainder) | 84 | &#10007; correct 17. Computed 34&times;3=102 but never added the remainder 2 before subtracting 18, and never took the final step (dividing by 23) at all. |
| Q11 | 4.5 | Algebra (System) | 140 | &#10003; |
| Q12 | 4.5 | Fractions | 22 | &#10003; |
| Q13 | 4.5 | Art of Counting | 336 | &#10007; correct 208. Misidentified which balls were drawn vs. remaining &mdash; used balls that were actually part of the two recorded draws as "remaining," instead of the only valid disjoint pair-combination (draws were 4&times;12=48 and 8&times;9=72, leaving 6, 7, 16). |
| Q14 | 4.5 | Geometry | 24 cm | &#10003; &mdash; correctly used the pinwheel-square relationship (rectangle perimeter = 2 &times; large square's side) without needing the individual rectangle dimensions. A genuinely elegant catch. |
| Q15 | 4.5 | Art of Counting | 21 | &#10007; correct 35. This is C(7,3) &mdash; choosing any 3 of 7 points always forms a triangle. Working suggests he computed something closer to a pair-count (C(7,2)=21) than a 3-choice combination. |
| Q16 | 6 | Algebra (Grid Puzzle) | 13 | &#10007; correct value uncertain from the scan (see note in the answer key), but definitely wrong: D=4 is required by the unambiguous equation 3+D=7, and Prem wrote D=7 &mdash; almost certainly copied the right-hand side instead of solving. This alone invalidates the final computed value of 13. |
| Q17 | 6 | Logic (Positions) | 28 | &#10003; |
| Q18 | 6 | Algebra (System) | 14 kg | &#10003; |
| Q19 | 6 | Number Theory + Counting | 11 | &#10007; correct 22. Minimal working shown &mdash; a 3-condition constrained-counting problem (divisible by 5, not by 3, no repeated digits), the hardest counting question on the paper; reads as abandoned rather than a clean wrong method. |
| Q20 | 6 | Data + Arithmetic | 51, 37 shown, no final answer | &#10007; correct 14. <strong>The hard part &mdash; reconstructing all four smudged bar-chart totals from the "sum=88" clue &mdash; was done perfectly</strong> (male total 51, female total 37, both exactly right). The question asks for the *difference*; that last subtraction was never written down. |
| Q21 | 2.5 | Number Theory (Cryptarithm) | 10 | &#10003; &mdash; correctly solved AAA+333=1BB1 for A=8, B=2. |
| Q22 | 4.5 | Patterns (Cycles) | 6 | &#10007; correct 7. Divided 240&divide;36=6 remainder 24 and stopped at the quotient, without noticing the 24-second remainder still contains one more complete "change to Blue" (at the 12-second mark of the partial cycle). |
| Q23 | 4.5 | Spatial Reasoning | 72 (9 cubes) | &#10007; correct 40 (5 cubes), by my count of the figure. Directly in the still-open painted-cube/3D-visualization gap area. |
| Q24 | 2.5 | Art of Counting | 10 | &#10003; &mdash; C(5,2), the simplest combinatorics question on the paper, solved cleanly with a drawn diagram. |
| Q25 | 4.5 | Number Theory + Counting | 1 | &#10007; correct 4. Working ("15&times;2") doesn't match the problem's actual condition (tens digit = 2&times;units digit); likely misread or ran out of time this late in the paper. |

### What this tells us

**1. Every single miss lands in one of three areas this programme already had flagged as open or fragile &mdash; nothing here is a new discovery.**
&mdash; *Harder-tier Art of Counting* (Q13, Q15, Q19 all wrong) vs. the simple combinatorics question (Q24) answered cleanly &mdash; exactly the pattern from M4/M5's Round 3, where the underlying skills are fine individually but break down in denser, harder-framed questions.
&mdash; *3D spatial reasoning / cube counting* (Q23 wrong) &mdash; the painted-cube gap from U49&ndash;U50 that was deliberately left untouched before the exam (see U50/priorityGaps write-ups) surfaced exactly where predicted.
&mdash; *Stopping before the question is fully answered* (Q2, Q10, Q20) &mdash; three separate instances of doing the hard/correct work and then not taking the final step (adding the second bracket; adding the remainder before dividing; subtracting the two totals). This is the same family as the "Finish Line Check" gap first named at U44&ndash;U45, resurfacing under real exam pressure on three different questions.

**2. Where the programme called strengths, the real exam agrees.** Systems of equations (Q11, Q18) both fully correct with clean multi-step algebra. Multi-step word problems (Q4, Q5, Q8) all correct. Fractions (Q12) correct. A cryptarithm (Q21) and an elegant geometry shortcut (Q14, recognizing the pinwheel-perimeter relationship without needing to separate the two rectangle dimensions) both landed &mdash; genuine reasoning, not memorized procedure.

**3. Q16's D=7 (should be 4) and Q20's unfinished subtraction both look like end-of-paper fatigue or time pressure rather than conceptual gaps** &mdash; both are simple final steps on questions where the harder preceding work was done correctly or nearly so.

**4. No circular-arrangement or combinations-backward questions appeared on this paper**, so U53's two quick-win add-ons (built the day before) weren't directly tested here one way or the other.

### Recommended next

The exam is done; this is now retrospective diagnostic data for the next cycle rather than something to react to before a deadline. When the programme resumes:
- A dedicated 3D spatial-reasoning re-approach (cube counting/painted cubes) is the single highest-leverage open gap &mdash; it has now failed at U49, U50 (worse), and this real exam. The two previous re-teaches didn't help, so this warrants a genuinely different teaching method next time, not a third repeat of the same one.
- A short, explicit "finish the full question" checklist habit (re-read what's actually being asked after finishing the hard part) &mdash; this has now resurfaced across U44/U45 and three questions on this real exam (Q2, Q10, Q20).
- One more harder-tier Art of Counting pass (C(n,3)-style "any 3 points" combinations, and multi-constraint counting like Q19) to complement the circular/combinations-backward work already done in U53.

### Next Assessment

**Unit 54**, resuming the standard programme cadence now that the real exam has passed. Recommend targeting 3D spatial reasoning as the primary focus, informed by this result.

---

## ASMOPSS 2026 — OFFICIAL RESULT (announced, recorded 21 Sep 2026)

**Official score: 60.50 / 100** — 10.5 points higher than the 50/100 same-day self-grade above. **T-score 66.11 · Percentile 92.08 · Rank 303rd of 3,941 nationally (top ~7.7%), 154th of 1,841 regionally, 109th of 1,074 provincially.** Cohort stats: mean 28.53/100, S.D. 19.84, so Prem sits well over a standard deviation above the field. Source: `Prem - ASMOPSS 2026 - Official Results - Math.pptx` (workspace root), the official ASMOPSS Thailand 2026 evaluation report.

### The 10.5-point gap is fully explained — two re-gradings, not a scoring-scheme difference

Comparing the official per-item correct/incorrect table against the self-grade above, exactly two questions flip from wrong to correct, and their point values (6 + 4.5 = 10.5) account for the entire gap:

- **Q20 (Data + Arithmetic, 6pt, Applied tier) — self-graded WRONG, OFFICIALLY CORRECT.** The self-grade reasoned that the final subtraction (51 − 37 = 14) was never written down on the scanned working, so no answer was credited. The official mark says otherwise — his submitted answer was correct. **Retract this as an instance of the "stops before the final step" pattern.** Q2 and Q10 (the other two citations in that pattern, above) are unaffected — both are genuinely wrong on the official key too.
- **Q23 (Spatial Reasoning / painted-cube counting, 4.5pt, Intermediate tier) — self-graded WRONG, OFFICIALLY CORRECT.** The self-grade counted 5 cubes in the figure from the scan and marked 72 (9 cubes) wrong against that count. The official key disagrees — 72 was the correct answer. **Retract this specific data point as confirmation of the painted-cube/3D-spatial gap.** The gap itself is still real and independently evidenced at U49 and U50 (both internal unit tests, graded directly from Prem's own written work against a clean answer key, not a scanned re-solve) — this correction only removes one of the exam-day citations, it does not close the gap.

**Standing lesson:** the self-grade was built by re-solving from a scanned answer sheet with no official key available yet ("graded against my own working," as the original write-up said) — exactly the situation the project's "verify the artefact, not your own re-derivation" principle exists for. Once an official key is released, it supersedes any interim self-grade; this record now does that.

### NEW — official tier split (was estimated; now confirmed)

| Tier | Internal estimate | **Official** | Change |
|---|---|---|---|
| Basic | 20/25 (80%) | **20.00/25.00 (80.00%)** | exact match |
| Intermediate | 18/45 (40%) | **22.50/45.00 (50.00%)** | +10 pts (Q23's 4.5 pt reversal) |
| Applied | 12/30 (40%) | **18.00/30.00 (60.00%)** | +6 pts (Q20's reversal) |

Basic held exactly where the self-grade put it — full confidence there. Intermediate and Applied both land meaningfully higher officially than believed for the past six weeks. **The Applied-tier collapse this project spent Cycle 6–7 diagnosing was real in direction but overstated in size** — 60% Applied on a real national exam is a materially different starting point than 40%. This does not undo the tier-density coaching work (Milestone 6, U58–U61 all still show genuine Intermediate/Applied softness on mixed papers), but it does mean the ASMOPSS-2026 real-exam data point specifically should be cited at 60%, not 40%, in any future comparison.

### NEW — official curriculum-strand split (not available at self-grade time)

The official report scores by Thai national curriculum strand, which the self-grade had no way to reproduce (it used ad-hoc topic labels instead). This is new, standalone information:

| Strand | Full marks | Obtained | **% obtained** |
|---|---|---|---|
| N — จำนวนและพีชคณิต (Number & Algebra) | 56.50 | 32.00 | **56.64%** |
| G — การวัดและเรขาคณิต (Measurement & Geometry) | 24.50 | 20.00 | **81.63%** ← strongest |
| S — สถิติและความน่าจะเป็น (Statistics & Probability) | 19.00 | 8.50 | **44.74%** ← weakest |

**Statistics & Probability is the officially weakest strand on this real, mixed, competitive exam — despite scoring 14/15 (93%) on its own dedicated unit test (U55).** This is the same pattern already named in `coaching_rules.md`'s Coaching-Process Review (10 Aug 2026): a topic that lands cleanly on a clean, single-topic unit test can still be the softest area under real mixed-paper conditions, because it gets no incidental spiral repetition the way Arithmetic/Applied-Problems/Logic do as vehicle skills inside other units' word problems. Statistics & Probability has had exactly one internal unit (U55) in the whole programme — this official result is the strongest evidence yet that it needs the same spiral-maintenance treatment Number Theory and Counting eventually got, and it directly supports Cycle 7's U70/U71 Statistics re-tier unit already on the roadmap (`Cycle_07_Build_Plan_U61-U71.md`).

**Measurement & Geometry at 81.63% is the strongest strand** — notably stronger than the Geometry radar skill's internal tracking (74/80 in `prem_data.js`) would suggest. Flagging, not changing the radar value — a single exam's strand score shouldn't overwrite a skill average built from many unit tests, but it's worth weighing next time the radar targets are reviewed (the cycle-7 plan already schedules a radar re-baseline at M7).

### Recommended next (supersedes the "3D spatial reasoning is the single highest-leverage gap" framing above)

- **Statistics & Probability is now the higher-leverage open gap than 3D spatial reasoning**, per the strand breakdown above — the U70/U71 Statistics re-tier unit (Cycle 7 roadmap) should keep its priority position, and any future spiral-maintenance Recall slot rotation should weight Statistics at least as heavily as the topics already flagged.
- 3D spatial reasoning (painted cubes) remains a real, independently-evidenced gap from U49/U50 — but Q23 no longer belongs in its evidence list from this exam.
- The "finish the full question" habit keeps 2 of its 3 original real-exam citations (Q2, Q10) — still worth the standing instruction-band treatment, just not quite the 3-for-3 pattern originally logged.

---

## Unit 31 — Art of Counting II (completed 24 Jun 2026)

**Score: 13 / 15 (87%) — PASSED.** Section A 4/5 · Section B **5/5 ✦** · Section C 4/5.

> **The U30 counting gap is CLOSED.** Section B (pairs in disguise) — the exact U30 failures — came back **5/5**, including a live self-correction. Only refinement left: picking the *right* counting move when it isn't a pair.

### Breakdown

| Q | Type | Prem | Result |
|---|------|------|--------|
| Q1–Q3, Q5 | Multiply / arrange | ✓ | ✅ |
| Q4 | 1st & 2nd place (ordered pick) | **60** | ❌ did 6×5×**2**; correct 6×5=30 — over-multiplied |
| Q6 | Handshakes (9) | 36 | ✅ halved |
| Q7 | Lines through 11 points | 55 | ✅ **wrote "I forgot ÷2 here" then corrected to 55** |
| Q8 | League games (10) | 45 | ✅ halved — the exact U30 miss type, now right |
| Q9 | Diagonals (pentagon) | 5 | ✅ pairs − sides |
| Q10 | Choose a pair (12) | 66 | ✅ |
| Q11 | Squares in 4×4 grid ★★ | 30 | ✅ figure counting |
| Q12 | Played twice ★★ | 110 | ✅ correctly did NOT ÷2 |
| Q13 | Postcards (order matters) ★★ | 56 | ✅ correctly did NOT ÷2 |
| Q14 | 2-digit even, no repeat ★★ | **36** | ❌ used 9×8÷2 (pairs); correct 4×8=32 — over-applied ÷2 |
| Q15 | Shortest paths (2×2) ★★ | 6 | ✅ |

### What this tells us

**1. ÷2-in-disguise — CLOSED.** Lines, league games, diagonals (Q7, Q8, Q9) — the precise U30 breakdowns — are all correct, and on Q7 he *caught his own omission* ("I forgot ÷2 here") and fixed it. The lesson landed completely.

**2. "Don't halve when order matters" — mastered.** Q12 (played twice → ×2, no ÷2) and Q13 (postcards, A→B ≠ B→A) both correctly *not* halved. He now separates pairs from ordered counts.

**3. Figure counting works** — squares-in-grid (Q11) and lattice paths (Q15) both correct.

**4. The two misses are the same new, smaller refinement: choosing the RIGHT move.** Now that "choose 2 → ÷2" is strong, he slightly *over-applies* it:
- Q4 (ordered pick): multiplied by an extra 2 (6×5×2=60) instead of 6×5=30.
- Q14 (multiply with a constraint): used the pairs formula 9×8÷2=36 instead of 4×8=32.
Both are "wrong counting move chosen," not a method failure. A quick **"Which move is this? BUILD (multiply) / ARRANGE (count down) / CHOOSE-2 (÷2)"** routing card fixes both — a reference card, not a full lesson.

### Recommended next — U32 (first 100%-ASMOPSS unit)

- **Number Theory for Competitions (priority 1):** factorials (n!, n!−m!), last-digit / last-three-digits of big products, and remainder problems ("÷A, remainder r by B"). The biggest gap on the 2025 paper — fast, high-frequency points.
- **Carry-over reference card (not a lesson):** "Which counting move?" (BUILD / ARRANGE / CHOOSE-2) — fixes U31 Q4 & Q14.
- **Standing habits:** read the EXACT ask (smallest/largest/which); never write "IDK" — make a structured first move.
- U32 is the first **mixed ASMOPSS-style** unit (on-topic rule relaxed per the 23 Jun exception), built at contest difficulty and framing.

### Next Assessment

**Unit Test — U32 (ASMOPSS: Number Theory focus, mixed contest format).** Counting is now in good shape (handshakes/disguise closed, figure-counting working); the highest-return next cluster is competition number theory. Then U33+ continue the cluster rotation (logic/deduction → mixed timed papers) toward ASMOPSS on 9 Aug.

---

## Unit 36 — Figure & Spatial Counting: Squares, Rectangles & Systematic Listing (completed 1 Jul 2026)

**Score: 10 / 15 (67%) — NOT PASSED.** Section A 3/5 · Section B 3/5 · Section C 4/5.

> **First fail since U31, and the steepest drop of the whole ASMOPSS arc** (U33 15/15 → U34 14/15 → U35 13/15 → **U36 10/15**). But this is not a concept collapse — it's two narrow, specific gaps: (1) the **rectangle-counting formula breaks down on asymmetric or composite grids** (squares themselves are fine), and (2) a **"final answer extraction" slip** — on two Section B questions his listed working was correct (or nearly so) but he wrote down the wrong thing from it. Both are fixable in one targeted lesson each, not a topic he doesn't understand.

### Breakdown

| Q | Type | Prem | Result |
|---|------|------|--------|
| Q1 | Squares in 2×2 grid | 5 | ✅ |
| Q2 | Rectangles in 1×3 strip | 6 | ✅ |
| Q3 | Squares in 4×4 grid | 30 | ✅ |
| Q4 | Rectangles in 2×3 grid | **19** | ❌ correct **18** (C(3,2)×C(4,2)); no working shown |
| Q5 | Rectangles in 1×5 strip | **13** | ❌ correct **15** (1+2+3+4+5); no working shown |
| Q6 | 2-digit numbers, digit sum 5 | **50** | ❌ listed 14,23,32,41,50 correctly (5 numbers) then wrote the **last list value** instead of the **count**; correct **5** |
| Q7 | Permutations of digits 1,2,3 | 6 | ✅ |
| Q8 | Pay 10¢ with 5¢/1¢ coins | 3 | ✅ |
| Q9 | Choose 2 of 5 friends | **120** | ❌ computed 5×4×3×2×1 (full permutation); correct **10** = C(5,2) |
| Q10 | 1–30, digit sum 6 | 3 | ✅ |
| Q11 | Rectangles in 3×3 grid ★★ | 36 | ✅ |
| Q12 | 2-digit, digit sum 8 AND even ★★ | 4 | ✅ |
| Q13 | Pay 8¢ with 1¢/2¢/5¢ ★★ | 7 | ✅ |
| Q14 | 1–40, digit sum 5 ★★ | 4 | ✅ |
| Q15 | 4×4 grid, rectangles NOT squares ★★ | **48** | ❌ only tallied specific strip shapes (2×1, 1×4) and re-added a crossed-out line; correct **70** (100 total − 30 squares) |

### What this tells us

**1. Squares are solid; rectangles are not.** Q1 and Q3 (squares, both grid sizes) are clean. But rectangles are inconsistent by shape and size: right on a simple 1×3 strip (Q2) and a symmetric 3×3 grid (Q11), wrong on a 2×3 asymmetric grid (Q4), a longer 1×5 strip (Q5), and the composite "NOT squares" problem (Q15). **The tell is the blank working column on every Section A question** — he answered from memory/eyeballing rather than writing the row-lines × column-lines count, and that's exactly where the larger or less-familiar shapes went wrong. Q11 (3×3, right) most likely pattern-matched a memorised square-grid case rather than proving he can apply the general line-choosing method to *any* rectangle. Q15 confirms this: instead of reusing the total-rectangles-minus-squares approach he'd already demonstrated works (Q3, Q11), he fell back to manually tallying a few strip shapes and missed most of the 2×2, 2×3, 2×4, 3×3, 3×4 combinations entirely.

**2. Listing mechanics are fine — the extraction step is the gap.** Q6 is the clearest example: his list (14, 23, 32, 41, 50) is completely correct and complete, but he wrote the **last number he listed** as his answer instead of **how many numbers are in the list**. Q9 is a related but different slip: he treated "choose 2 from 5" as "arrange all 5" (5! = 120) instead of the choose-2 pair count (10) — the *exact* pairs/choose-2 skill he had already locked at U32 (Section B 5/5). Mixing several listing question-types in one section (digit-sum lists, permutations, coin-change, choose-2) seems to have blurred which final move each one needs.

**3. Section C (the harder ★★ mix) was his best section (4/5)** — Q11, Q12, Q13, Q14 all correct, including a rectangle-in-grid question (Q11) and two digit-sum listing questions (Q12, Q14) done well. This suggests focus and care were fine; the errors are localised to specific sub-skills, not fatigue or overload.

### Recommended next — targeted top-up (not a full new unit, per the not-passed rule)

- **Rectangle-counting generalisation (priority 1):** re-teach the row-lines × column-lines rule (choose 2 horizontal × choose 2 vertical) explicitly for **non-square grids** (2×3, 2×4, 3×4), and the **strip formula** n(n+1)/2 for longer strips (n=4, 5, 6) — with a hard rule: *always write the two chosen-line numbers before multiplying, never eyeball.* Then the **composite "NOT squares"** pattern: total rectangles (formula) − total squares (formula) = answer — reusing, not re-deriving, both formulas he already owns.
- **"Extract the answer correctly" habit (priority 1):** two one-line drills — (a) *after listing, count the list — the answer is HOW MANY, not the last item you wrote*; (b) *"choose 2" = unordered pair = multiply-then-halve (n×(n−1)÷2), never the full arrangement (n!)* — a quick routing check: "does order matter? No → choose-2/halve. Yes → multiply straight."
- **Mandatory shown working on every figure-counting question** — the blank Section A working column correlates directly with all three Section A misses.
- Per the not-passed rule: no full unit repeat. Build one short top-up lesson covering the two gaps above, then a fresh 15-question test on the same two topics only (rectangle-counting + listing-extraction), closed-book.

### Next Assessment

**Unit Test — U37, targeted retest (Rectangle-Counting Generalisation + Listing Answer-Extraction).** This is a top-up/retest unit per the not-passed rule, not a new topic — both Section A and Section B fell below the 4/5 multi-topic minimum, so both need re-testing; squares (already solid) don't need to be re-tested. Only 6 of the 10 units since M3 are done (U31–U36), so **Milestone M4 still lands after U40** — it is not due yet. After U37 clears, resume the ASMOPSS roadmap toward figure-counting depth and timed mixed papers ahead of 9 Aug.

---

## Unit 35 — Logic & Deduction: Grids & Balance Scales (completed 29 Jun 2026)

**Score: 13 / 15 (87%) — PASSED, and CLOSED-BOOK.** Section A 4/5 · Section B **5/5 ✦** · Section C 4/5.

> **The "IDK" freeze is CLOSED.** This was the unit built specifically for the two 2025-paper freezes — Mastermind/code-breaking (Q13) and balance-scale weighing (Q18), where Prem wrote "IDK" and stopped. On U35 he made a **structured first move on every single question** — drew a logic grid, an order column, a balance chain, a trade diagram, a see-saw sketch, a row of balls — and wrote **zero "IDK"s anywhere**. The exact thing that lost him marks in 2025 is gone. Both remaining misses are old, familiar refinements (a careless first-question slip and an articulation slip), not the logic itself.

### Breakdown

| Section | What it tested | Result |
|---------|----------------|--------|
| A (Q1–5) | Logic grids + ordering by elimination | **4/5** — Q2 (Tara), Q3 (Cup 2), Q4 (Red), Q5 (Max) all ✓; **Q1 ✗** |
| B (Q6–10) | Balance scales: heaviest/lightest, trades, see-saw compare | **5/5 ✦** — Q6 (Melon), Q7 (Pen), Q8 (12), Q9 (10), Q10 (Lily) all ✓ |
| C (Q11–15) | ★★ harder grids, ordering chains, multi-step trades, reasoning | **4/5** — Q11 (Coe), Q12 (Sam), Q13 (3), Q14 (2nd) all ✓; **Q15 ✗** |

**Miss 1 — Q1 (the easiest grid):** "Tim has the kite; Uma does not have the ball — what does Vic have?" He answered **Yo-Yo**; correct is **Ball** (Uma must take the yo-yo, leaving the ball for Vic). Note he solved the *much harder* Q11 — the double-negative grid "Ben owns neither the watch nor the ring" — correctly. So this is a **careless first-question slip, not a method gap** — the same pattern we keep seeing on easy/early questions (M3 Q4 blank, U32 Q11 halve-slip, U34 Q13).

**Miss 2 — Q15 (balance reasoning):** "5 identical-looking balls, one heavier; 2 on each side balances level — where is the heavy one?" He drew the 5 balls, noted "1 is heavier," and answered **"the middle"**; the accepted answer is **"the 5th / the one left off the scale."** He had the **right concept** — the unweighed ball is the heavy one — but worded it by position instead of by its defining property, so it wasn't accepted. This is the recurring **"answer exactly / clearly what's asked"** precision watch-point (cf. M3 Q12/Q19, U34 Q13 range).

### What this tells us

**1. Logic & deduction — the freeze is broken.** Grids (incl. the hard double-negative Q11), elimination, and ordering-by-chain are all working, each solved with a written table or column. The never-IDK / always-make-a-structured-first-move habit is now genuinely automatic — a major bronze→gold milestone.

**2. Balance scales = strength (Section B 5/5 ✦ + Q13).** Transitivity (heaviest/lightest chains), multi-step trades (1 box = 4 cans → 3 boxes = 12; 2 bricks = 1 bag = 10 cups; 1 melon = 12 plums = 4 apples → 1 apple = 3 plums), and see-saw comparison (Sam = Tom, Sam > Lily → Lily lighter) all solid. Balance/weighing reasoning was a 2025 gap and is now a clear strength.

**3. The two misses are not about logic** — they're the two cross-cutting habits we already track: (a) re-read the *first/easy* question before committing (Q1), and (b) name the answer by its defining property, not a vague position word (Q15, "the one NOT on the scale" beats "the middle"). Both are one-line habit drills, not lessons.

**4. Radar:** Reasoning / Logic & Deduction should bump on the next sync — this unit cleared the signature freeze. (Not updating prem_data.js yet, per workflow — that happens once the U36 pack is built.)

### Recommended next — U36 (Figure & Spatial Counting + Systematic Listing)

- **Figure counting (priority 1):** count triangles / squares / rectangles in a figure **by size and position, methodically** — never eyeball. This is the still-open 2025-paper gap (**Q14**, "how many more quadrilaterals than triangles") and the one counting bucket not yet closed. The U31 deferred figure-counting extras come home here, taught one idea at a time.
- **Systematic / organised listing (priority 2):** completeness when listing cases — directly targets Prem's recurring completeness slip (U34 Q13, U29 Q13) *and* serves ASMOPSS combinatorics.
- **Standing habit drills (not lessons):** (a) *"re-read the first/easy question — don't rush Q1"* (U35 Q1); (b) *"name the answer by what makes it special — 'the one NOT on the scale', not 'the middle'"* (U35 Q15); (c) keep the now-solid never-IDK habit; (d) read the EXACT ask.
- **Layout:** build U36 with the **one-section-per-page + 2 blank working rows between questions** rule (Section A → p1, B → p2, C → p3, key → p4; model the U34 docx). Method-only working bands, no answer leak. Teach one idea at a time, concrete-first, decision-map on screen 1.

### Next Assessment

**Unit Test — U36 (ASMOPSS: Figure & Spatial Counting + Systematic Listing).** Logic & deduction is now solid (freeze closed) and number theory is a strength (U33 15/15, U34 14/15), so the last open ASMOPSS cluster is figure/spatial counting (2025 Q14). **This is a UNIT test, not a milestone** — only 5 units since M3 (U31–U35); the cycle runs 10 units → milestone, so **M4 lands after U40** and will pair with a past-year ASMOPSS paper as the benchmark. After U36, move toward timed mixed past-papers as the 9 Aug exam (≈6 weeks out) approaches.

---

## Unit 34 — Number Theory: Remainders & Digit Problems (completed 27 Jun 2026)

**Score: 14 / 15 (93%) — PASSED, and CLOSED-BOOK.** Section A 5/5 · Section B 5/5 · Section C 4/5. (↓1 from the U33 perfect, but a clean strong pass.)

> **The number-theory cluster is now closed across two units (U33 15/15 + U34 14/15).** Remainders — the exact 2025-paper gap (Q21: he gave 64, answer 16) — came back **7/7 across the whole test** (Sec A 5/5 + Q11 + Q15), every two-clue puzzle solved by the systematic-list method. The single miss is a completeness edge, not a method failure.

### Breakdown

| Section | What it tested | Result |
|---------|----------------|--------|
| A (Q1–5) | Remainders: smallest-with-clue + two-clue listing | **5/5** — incl. all three two-clue puzzles (7, 9, 18) |
| B (Q6–10) | Digit sums + counting by digit sum | **5/5** — sums 13, 12, 15; counts 6 and 3 all right |
| C (Q11–15) | ★★ two-clue remainders + harder digit counting | **4/5** — Q11 (31) ✓, Q12 (8) ✓, Q14 (3) ✓, Q15 (32) ✓; **Q13 ✗** |

**The one miss (Q13):** *"How many whole numbers from 1 to 50 have a digit sum of 7?"* He listed **16, 25, 34, 43 → 4**, missing the single-digit **7** (whose digit sum is 7). His tens-by-tens method ran perfectly for the two-digit numbers, but the range "1 to 50" includes one-digit numbers, and he started counting at the tens. The answer is 5. **This is a range/completeness slip, not a concept gap.**

### What this tells us

**1. Remainders — fully his.** Single-clue ("smallest 2-digit…", "smallest above 20…") and two-clue puzzles all correct (7/7), each solved by writing the list and testing the second clue — no guessing. The biggest 2025-paper number-theory gap (remainders) is closed.

**2. Digit sums — solid.** Adding digits (incl. the 0 in 408) and counting 2-digit numbers by digit sum (tens-by-tens, in order) both landed. Q14 (sum ≥ 17 → 89, 98, 99) handled the "or more" correctly.

**3. The recurring watch-point is completeness / reading the exact range** — the same family as U29 Q13 ("list ALL" → gave 0,4,8, missed 2,6) and the M3 precision slips (Q12/Q19, "smallest"). When the range dips below 10, the single-digit number must be counted. One-line habit, not a lesson: *"check the FULL range — if it starts below 10, don't skip the single-digit numbers."*

### Recommended next — U35 (pivot to Logic & Deduction)

- **Code-breaking / Mastermind grids (priority 1):** ASMOPSS 2025 **Q13** — he wrote "IDK" and froze. Teach the "make a table, use each clue to eliminate, cross off what's impossible" method. Signature olympiad question, very learnable.
- **Balance-scale weighing (priority 1):** ASMOPSS 2025 **Q18** — also a freeze. Teach the "split into groups, compare, halve the suspects" reasoning. High-frequency on ASMOPSS.
- **Standing habit drills (not lessons):** (a) *"check the full range — count single-digit numbers when the range starts below 10"* (U34 Q13); (b) *"never write IDK — always make a structured first move"* (the 2025 freezes); (c) *"read the exact ask"* (smallest / how many / which).
- Teach U35 the same way: one idea at a time, from zero, concrete-first; decision-tree map on screen 1; method-only working bands on the test (no answer leak — standing build rule).

### Next Assessment

**Unit Test — U35 (ASMOPSS: Logic & Deduction).** Number theory is now a strength (U33 15/15, U34 14/15); the next-biggest 2025-paper gap is the two "IDK" freezes — code-breaking and balance-scale logic. After U35, figure-counting and then timed mixed past-papers toward ASMOPSS on 9 Aug. Milestone **M4** (when it lands) pairs with a past-year ASMOPSS paper as the benchmark.

---

## Unit 33 — Number Theory: Factorials & The Last-Digit Trick (completed 26 Jun 2026)

**Score: 15 / 15 (100%) — PERFECT, and CLOSED-BOOK.** Section A 5/5 · Section B 5/5 · Section C 5/5. (↑1 from U32; first perfect score of the ASMOPSS arc.)

> **The highest-return ASMOPSS gap is closed.** Factorials (Q22 on the 2025 paper — he scored 0) and last-digits (Q11 — "IDK") were the single biggest cluster of lost marks. One unit later, taught from zero one idea at a time, he answers all 15 closed-book — including factorials he was *never shown* (7!, 8!). This is the bronze→gold engine working exactly as intended.

> **Note on this test:** it was rebuilt twice — first to remove an answer-leak in the working-rule band, then to swap Section A onto 7!/8! (never-seen factorials) so the small ones he'd already glimpsed couldn't be recalled. So this 15/15 is a genuinely clean, fresh measure.

### Breakdown

| Section | What it tested | Result |
|---------|----------------|--------|
| A (Q1–5) | Factorials 7!, 8!, 7!+6!, 8!−7!, 7!+5! | **5/5** — method extends past the taught table (6!) to 7!, 8! |
| B (Q6–10) | Last digit of products + repeated (34×56, 27×83, 48×48, 215×640, 9×9×9) | **5/5** — incl. the ×0 → 0 trap (Q9) and 9³ (Q10) |
| C (Q11–15) | ★★ powers + big factorials (4⁵, 7!−6!, 2¹⁰, 6!+5!−4!, 3×5×7×9) | **5/5** — cycles (2,4,8,6 and 4,6), three-term factorial, all correct |

### What this tells us

**1. Factorial method — fully mastered, not memorised.** Section A used 7! and 8!, which never appeared in the lessons (taught only to 6!). He computed them correctly from the rule (8! = 8×5040 = 40320). That proves he learned the *method*, which is exactly what the rebuild was designed to test.

**2. Last-digit trick — solid across all three forms:** plain products, the ×0→0 trap, repeated multiplication (9³), and power-cycles (2→2,4,8,6 and 4→4,6). Q13 (2¹⁰) he tracked the 4-cycle and landed on the 10th term correctly — real understanding, not luck.

**3. The watch-point is operation-reading in multi-term expressions, and he self-corrected every time.** Three questions show crossed-out first attempts that he caught himself:
- Q5 (7!+5!): wrote **4920**, corrected to **5160**.
- Q12 (7!−6!): scratch showed an *addition* (5040+720), final answer correct **4320**.
- Q14 (6!+5!−4!): tried **1296** then **576** (subtracted both terms), corrected to **816**.
All three landed right — strong persistence and self-checking — but the wobble is the same one we keep seeing: **reading the exact +/− in a multi-step problem** (cf. M3 "read the exact ask"). Closed-book and untimed he catches it; under exam clock he might not. That's the one thing to drill, lightly.

### Recommended next — U34 (finish the Number Theory cluster)

- **Remainder problems (priority 1):** "a number leaves remainder r when ÷ A, remainder s when ÷ B — find it" by systematic listing. This is ASMOPSS 2025 **Q21** (he answered 64, correct was 16) — still open, high-frequency, fast points.
- **Digit problems (priority 1):** digit-sum counting over a range/dates (2025 Q19/Q24 style), and **last-THREE-digits** of a big product — a direct extension of the last-*one*-digit trick he just mastered (2025 Q11 wanted **044**; we've trained the last single digit, now stretch to the last few).
- **Tiny carry-over reminder (not a lesson):** "in a multi-term factorial, read each + and − before you combine — don't auto-add or auto-subtract everything." Fixes the Q5/Q12/Q14 wobbles in one line.
- Teach U34 the same way: one idea at a time, from zero, concrete-first; method-only working bands (no worked values on the question pages — the U33 leak lesson is now a standing build rule).

### Next Assessment

**Unit Test — U34 (ASMOPSS: Number Theory — Remainders & Digit Problems).** Factorials and last-digits are now a *strength* (15/15); U34 closes the rest of the number-theory cluster (remainders, digit-sum counting, last-three-digits) — the remaining fast points from the 2025 paper. Then U35+ pivot to **Logic & Deduction** (the other froze-and-"IDK" cluster), then figure-counting and timed mixed papers toward ASMOPSS on 9 Aug. Milestone **M4** (when it lands) pairs with a past-year ASMOPSS paper as the benchmark.

---

## Unit 32 — Counting, the simple two-move re-do (completed 25 Jun 2026)

**Score: 14 / 15 (93%) — PASSED, and CLOSED-BOOK.** Section A 5/5 · Section B 5/5 · Section C 4/5.

> **The simplified approach worked.** After the U31 overload (open-book, "too many concepts"), collapsing counting to ONE decision + two moves gave a clean, independent pass. The "fresh / one-idea-at-a-time" ground rule is validated.

### Breakdown

| Section | What it tested | Result |
|---------|----------------|--------|
| A (Q1–5) | BUILD / ARRANGE → multiply | **5/5** — incl. Q4 "1st & 2nd = 12" (the type he over-multiplied to 60 at U31) |
| B (Q6–10) | CHOOSE A PAIR → multiply ÷2 | **5/5** — every handshake / choose-2 halved correctly |
| C (Q11–15) | "Which move is it?" (decide) | **4/5** — Q12–Q15 ✓; **Q11 ✗** |

**The one miss (Q11):** "1st & 2nd from 6 runners." He worked out **30 correctly** (6×5), then **halved it to 15** on the answer line — treating an *ordered* pick as a pair. Note: Section A Q4 (same "1st & 2nd" type) he got right. So the decision is ~90% solid; it just wobbles on "1st & 2nd" because two people are involved.

### What this tells us

- **Counting core is now genuinely his** — multiply (5/5) and pairs ÷2 (5/5), passed **closed-book**, a real jump from the open-book U31. The two-move framing stuck.
- **The lone wrinkle is one specific edge:** "1st & 2nd / a row = order matters = MULTIPLY, never halve." A 2-minute reminder, not a lesson — e.g., "1st place and 2nd place are *different jobs*, so swapping them changes things → don't halve."
- The deferred extras (diagonals, figure-counting, repeats) can now be layered later, *simply, one at a time*, once we choose to return to them.

### Recommended next — U33

- **Number Theory for Competitions (priority 1):** factorials (n!, n!−m!), last-digit / last-three-digits of big products, and remainder problems ("÷A, leaves remainder r by B"). The **biggest gap on the 2025 paper** — highest-return marks. Teach it the same simple way: one idea at a time, from zero, concrete-first.
- **Tiny carry-over reminder (not a lesson):** "1st & 2nd / a row → multiply, never halve" (fixes U32 Q11).
- **Later simple unit:** figure-counting (squares-by-size, paths) re-done one-idea-at-a-time when we come back to it.
- **Standing habits:** "read the EXACT ask", and never write "IDK" — always make a structured first move.

### Next Assessment

**Unit Test — U33 (ASMOPSS: Number Theory focus).** Counting core is passed closed-book, so the highest-return next cluster is competition number theory (factorials, last-digits, remainders). Built simply (the ground rule), ASMOPSS difficulty. Then U34+ continue: logic/deduction → figure-counting → timed mixed papers, toward ASMOPSS on 9 Aug.

---

### Trend to watch across the 6 past papers
Build a simple per-paper tally in these buckets: **Sequences/Arithmetic (strength), Number Theory, Logic/Deduction, Counting/Combinatorics, Figure-counting, Hard multi-step.** Gold needs the four weak buckets to climb from ~0–1 each toward 3+ each. ASMOPSS 2025 baseline: strengths firing; weak buckets near zero — that's the whole gap, and it's trainable in 7 weeks.

**U62 provenance — confirmed 24 Sep 2026:** independent (Lui). Prem's class is still on Ch.3. At Prem's own request, U63 is re-scoped to **Fraction × Fraction** (Lui agreed); Fractions ↔ Decimals moves to U64 and cycle 7 now runs U61–U72, with M7 after U72. Plan: `Memory Backup\BUILD_PLAN_MATH_U63_FractionTimesFraction.md`.


## Unit 63 — planner diagnosis (28 Sep 2026)

**Part 1 6/12 verified · Recall 2/4 · independent · +0 · Self-Check skipped.** The mechanics are secure: 7/7 on bare and
area products (cancelling, improper × improper, mixed × mixed all landed first time). The gap is **operation choice in
fraction stories, 0/5.** Q2 subtracted ("pours out 2/5 of"), Q8 divided ("makes 2/3 of the recipe"), Q9 subtracted a
chain, Q11(a) never asked "of what", and Q10 was honestly left as "Me no understand" on "as many as". The U63 lessons
under-taught this: one worked story against seven on the test. That is strike 1 on this skill. **U64 is its one
revision:** "Fraction word problems — which operation, and of what?" (`BUILD_PLAN_MATH_U64_FractionWordProblems.md`).
Fractions ↔ Decimals is dropped to cycle 8, so there is no renumber, and M7 stays after U72. From U64 the Self-Check
is compulsory (Lui) and the test header records its score.


## Unit 65 — planner diagnosis (5 Oct 2026)
**Part 1 5/12 · Recall 2/4 · Self-Check 3/5 (ready:false, 1.8 min) · independent.** Static verbs multiplied 4/4; removal verbs (drinks/cuts off/pours out/uses) subtracted the fraction itself 0/6; "as far as/as many as" 0/3 (he wrote "X or +"). The answer frame was skipped every time (optional → skipped). **Lui (5 Oct): don't move on until 80% and real understanding.** U66 "Part First": one target; tap-gated decisions before any number; a 32-item mastery drill (v1.0 plan: 10 in a row; v1.1, 7 Oct: the Star Path; a code word on the test either way); Decisions scored; an explain-the-mistake item. Coaching-approach causes owned in the plan (§1.3).

### Unit 70 — BUILT 20 Oct 2026

Built from `BUILD_PLAN_MATH_U70_BaseAndHeight.md` **v1.0** (Chapter 4 opens: base and height of a triangle, including heights that fall outside). Lesson `Triangles_Lesson_BaseAndHeight.html` (6 screens, Triangle Card with the Fraction Card as a second tab, Your turn ×5, 2-minute fractions check-in; Save button alone at the end, ✕ the only exit). Test `Unit_070_Test_BaseAndHeight.docx`: 16 marks = 4 fraction Recall + Q1–Q12 (Basic 3, Intermediate 5, Applied 4); key question Q5 (leaning triangle, height outside). Gates: plan gate PASS (262 worked lines, 0 bad, 0 untagged), lesson pack PASS, 52 browser checks PASS. Lesson and test to be sat on different days. Not yet sat. Radar: Applied Problems 76 → 80 after M7 Kangaroo 4/5; `radarTarget` left unchanged.
