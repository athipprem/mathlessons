/*
  prem_data.js — Single source of truth for Prem's Math Coach
  ============================================================
  Edit ONLY this file to update scores, skills, and sessions.
  Both index.html and Prems_Math_Coach_Dashboard.html read from it.

  After each unit test:
    1. Update lastUnit + currentUnit
    2. Push a new entry into scores[]
    3. Prepend a new entry into unitLog[]
    4. Adjust skills[] if needed
  That's it — both pages update automatically.
*/

var PREM_DATA = {

  // ── Meta ─────────────────────────────────────────────────────────
  updated:        '12 Aug 2026',
  coachStartDate: '2026-05-14',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: { n:57, topic:'Art of Counting — Total Minus Bad: Multi-Case &amp; Zero-Edge (Brick 2 Retest)', status:'Brick 2 Redesigned (Gaming Style), Test Ready (Attempt Pending)' },
  lastUnit: {
    n:56, score:10, outOf:15, pct:67, delta:-4, prevScore:14, prevOutOf:15, prevLabel:'U55',
    patternLabel: 'U56 — Choose 3 &amp; Total Minus Bad, 3rd attempt (post Brick 1), NOT PASSED but a big jump — Brick 1 validated',
    patternInsight: '10/15 (67%) <strong>NOT PASSED</strong>, but a big jump &mdash; Sec A 4/5, Sec B 4/5, Sec C 2/5. Trajectory across three attempts: <strong>7 &rarr; 6 &rarr; 10.</strong> This is Prem&rsquo;s third attempt, taken after Lesson 2 was rebuilt as Brick 1 of 3 (single bad-case only, one context, every worked-example number given its own inline reason). Total Minus Bad went from 0/8 correct (every question left blank on the 2nd attempt) to 4/8 correct this time &mdash; and the split is exactly clean: <strong>every single-bad-case, people-context question Brick 1 taught was answered correctly</strong> (Q7, Q8, Q9, and Q11 &mdash; a bigger-pool version of the same shape), 4 for 4. Every question needing content Brick 1 never taught was left <strong>blank, not guessed at</strong>: Q10 &amp; Q12 need the points-on-a-circle framing (Brick 3), Q13 needs multi-case bad with more than one way to break the rule (Brick 2), and Q15 needs the reverse-capstone structure (Brick 3). Prem correctly recognised unfamiliar territory and left it blank rather than misapplying the method &mdash; the disciplined behaviour the programme has been building since the Confidence Session. New, isolated miss: Q4 (11 hikers, choose 3) wrote 115 instead of 165, no working shown &mdash; given every other Lesson-1-style question (Q1,2,3,5,6, and the hardest, reverse-solved Q14) was correct, this reads as an isolated arithmetic slip, not a method regression.',
    analysisLabel: 'Next: Unit 57 &mdash; Bricks 2 &amp; 3 built (20 Aug 2026), test rebuilt, remediation continues under the next sequential unit number',
    analysisInsight: 'This is about as clean a validation as a lesson redesign can get. Following project precedent (remediation always takes the next sequential unit number &mdash; U40&rarr;U41, U49&rarr;U50, U47&rarr;U48, U44&rarr;U45), the remaining Total-Minus-Bad remediation is tracked as <strong>Unit 57</strong> rather than a 4th U56 attempt. Brick 2 (multi-case bad + the "fewer than needed = write 0" edge case) targets Q13. Brick 3 (points/triangles context + reverse-solve/capstone) targets Q10, Q12, and Q15. Both bricks are built and the U57 test is ready, covering only Brick 2/3 content with entirely fresh numbers (none reusing Q4/Q10/Q12/Q13/Q15&rsquo;s seen values) plus 2 spiral-maintenance warm-ups. No further work needed on Lesson 1 or Brick 1 &mdash; both are holding up under real test conditions; Q4&rsquo;s slip is a "show your working, even on easy ones" reminder, not a re-teach trigger.',
    qSummary: '<strong>Sec A 4/5 | Sec B 4/5 | Sec C 2/5</strong> — 10/15 (67%) NOT PASSED (3rd attempt, up from 6/15)',
    qBreakdown: [
      { q:'Q1', topic:'Choose 3 (Lesson 1)', lvl:'w', pass:true,  note:'&#10003; 20.' },
      { q:'Q2', topic:'Choose 3 (Lesson 1)', lvl:'w', pass:true,  note:'&#10003; 56 (crossed out an earlier attempt first, then correct).' },
      { q:'Q3', topic:'Choose 3 (Lesson 1)', lvl:'w', pass:true,  note:'&#10003; 120.' },
      { q:'Q4', topic:'Choose 3 (Lesson 1)', lvl:'w', pass:false, note:'&#10007; wrote 115; correct 165 (11 hikers, choose 3). No working shown &mdash; isolated arithmetic slip, not a method regression given every other Lesson-1 question on the paper was correct.' },
      { q:'Q5', topic:'Choose 3 (Lesson 1, subset)', lvl:'w', pass:true,  note:'&#10003; 35.' },
      { q:'Q6', topic:'Choose 3 (Lesson 1)', lvl:'m', pass:true,  note:'&#10003; 84 (self-corrected en route).' },
      { q:'Q7', topic:'Total Minus Bad, single case (Brick 1)', lvl:'m', pass:true, note:'&#10003; 64.' },
      { q:'Q8', topic:'Total Minus Bad, single case (Brick 1)  &#9733;', lvl:'m', pass:true, note:'&#10003; 25.' },
      { q:'Q9', topic:'Total Minus Bad, single case (Brick 1)  &#9733;', lvl:'m', pass:true, note:'&#10003; 49.' },
      { q:'Q10',topic:'Total Minus Bad, points-on-circle (Brick 3, not yet taught)  &#9733;', lvl:'m', pass:false, note:'&#10007; blank; correct 164. Left blank, not guessed &mdash; content not yet taught.' },
      { q:'Q11',topic:'Total Minus Bad, single case, bigger pool (Brick 1)  &#9733;&#9733;', lvl:'h', pass:true, note:'&#10003; 185.' },
      { q:'Q12',topic:'Total Minus Bad, points-on-circle, 2 bad (Brick 3, not yet taught)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct 284. Left blank, not guessed &mdash; content not yet taught.' },
      { q:'Q13',topic:'Total Minus Bad, multi-case colours (Brick 2, not yet taught)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct 261. Left blank, not guessed &mdash; content not yet taught.' },
      { q:'Q14',topic:'Reverse Choose 3 (Lesson 1)  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; 8 (reverse-solved C(n,3)=56 &rarr; n=8).' },
      { q:'Q15',topic:'Capstone — Reverse Total Minus Bad (Brick 3, not yet taught)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct (a) 20 (b) 6. Left blank, not guessed &mdash; content not yet taught.' }
    ]
  },
  _U56archived_2ndAttempt: {
    n:56, score:6, outOf:15, pct:40, delta:-8, prevScore:14, prevOutOf:15, prevLabel:'U55',
    patternLabel: 'U56 — Choose 3 &amp; Total Minus Bad, 2nd attempt, NOT PASSED — a lesson-design failure, not a content gap',
    patternInsight: '6/15 (40%) <strong>NOT PASSED</strong> &mdash; Sec A 4/5, Sec B 1/5, Sec C 1/5. This is Prem&rsquo;s SECOND attempt at U56 &mdash; the first scored 7/15, and a separate model ("Opus") then rewrote both lessons for "more detail" in between, expecting that to help. <strong>It made things measurably worse: 7 &rarr; 6.</strong> The cleanest lesson-vs-lesson split seen yet: every question drawing on Lesson 1 (Choose 3) was attempted and correct or a transcription slip (Q1,2,3,5,6,14 all correct; Q4&rsquo;s working shows 504&divide;6=84 correctly worked, then 86 written on the answer line &mdash; a copying slip, not a method failure). Every question drawing on Lesson 2 (Total Minus Bad, in any form) was left <strong>completely blank</strong> &mdash; Q7&ndash;Q13 and Q15, seven questions in a row, zero attempts, zero scratch working. Root cause: the "Opus" revision, meant to fix 7 real lesson-review findings, added 2 interactive labs + an SVG + a 2nd worked example + a multi-bad-case extension, growing the lesson from 9 to 13 screens &mdash; while its worked examples broke arithmetic into bare, unlabeled lines (e.g. "7&times;6=42, 42&times;5=210, 210&divide;6=35") without explaining WHY each number is there, beyond the very first example. Prem: "too many steps to understand and remember." Lui, reading it cold: couldn&rsquo;t follow it either.',
    analysisLabel: 'Next: U56 Lesson 2 rebuilt as Brick 1 of 3 (built 17 Aug 2026); retest once all bricks land',
    analysisInsight: 'Not a retest-as-is situation &mdash; a third cold attempt at the same over-long lesson would just confirm what&rsquo;s already known. Lesson 2 (Total Minus Bad) is being split into 3 short "brick" lessons instead of one long file: Brick 1 (built 17 Aug 2026) covers single bad-case only, one context throughout (boys/girls), re-derives Lesson 1&rsquo;s Choose-3 rule explicitly rather than assuming recall, and gives every number in every worked example its own inline reason, every time. Brick 2 (multi-case bad + the "fewer than needed = write 0" edge case) and Brick 3 (new contexts + reverse/capstone) follow once Brick 1 is confirmed landing. The U56 test itself was also fully rebuilt with 15 entirely new questions + 2 new warm-ups (fresh numbers throughout, since Prem has now seen and been graded on the previous set) &mdash; ready once all 3 bricks are taught. Lesson 1 (Choose 3) does not need to be retaught; it is secure as-is. Q4&rsquo;s transcription slip is a Finish-Line-Check precision note, not a content gap.',
    qSummary: '<strong>Sec A 4/5 | Sec B 1/5 | Sec C 1/5</strong> — 6/15 (40%) NOT PASSED (2nd attempt)',
    qBreakdown: [
      { q:'Q1', topic:'Choose 3 (Lesson 1)', lvl:'w', pass:true,  note:'&#10003; 10 (choose 3 from 5).' },
      { q:'Q2', topic:'Choose 3 (Lesson 1)', lvl:'w', pass:true,  note:'&#10003; 20 (choose 3 from 6).' },
      { q:'Q3', topic:'Choose 3 (Lesson 1)', lvl:'w', pass:true,  note:'&#10003; 35 (choose 3 from 7).' },
      { q:'Q4', topic:'Choose 3 (Lesson 1)', lvl:'w', pass:false, note:'&#10007; wrote 86; correct 84 (choose 3 from 9). Working shows 9&times;8&times;7=504 and a correct long division 504&divide;6=84 right on the page &mdash; then 86 written on the answer line. Pure transcription slip, not a method failure.' },
      { q:'Q5', topic:'Choose 3 (Lesson 1, subset)', lvl:'w', pass:true,  note:'&#10003; 10 (choose 3 from a 5-person subset).' },
      { q:'Q6', topic:'Choose 3 (Lesson 1)', lvl:'m', pass:true,  note:'&#10003; 120 (choose 3 from 10).' },
      { q:'Q7', topic:'Total Minus Bad (Lesson 2)', lvl:'m', pass:false, note:'&#10007; blank; correct 100. No attempt.' },
      { q:'Q8', topic:'Total Minus Bad (Lesson 2)  &#9733;', lvl:'m', pass:false, note:'&#10007; blank; correct 36. No attempt.' },
      { q:'Q9', topic:'Total Minus Bad (Lesson 2)  &#9733;', lvl:'m', pass:false, note:'&#10007; blank; correct 74. No attempt.' },
      { q:'Q10',topic:'Total Minus Bad (Lesson 2)  &#9733;', lvl:'m', pass:false, note:'&#10007; blank; correct 219. No attempt.' },
      { q:'Q11',topic:'Total Minus Bad (Lesson 2)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct 145. No attempt.' },
      { q:'Q12',topic:'Total Minus Bad (Lesson 2)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct 118. No attempt.' },
      { q:'Q13',topic:'Total Minus Bad, multi-case (Lesson 2)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct 205. No attempt.' },
      { q:'Q14',topic:'Reverse Choose 3 (Lesson 1)  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; 7 (reverse-solved C(n,3)=35 &rarr; n=7) &mdash; the hardest Lesson-1-style question on the paper, correct.' },
      { q:'Q15',topic:'Capstone — Reverse Total Minus Bad (Lesson 2)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct (a) 10 (b) 5. No attempt.' }
    ]
  },
  _U55archived: {
    n:55, score:14, outOf:15, pct:93, delta:+3, prevScore:11, prevOutOf:15, prevLabel:'U54',
    patternLabel: 'U55 — Statistics &amp; Probability I, Chance As A Fraction (Basic), PASSED — strongest score of the U54–U60 arc',
    patternInsight: '14/15 (93%) <strong>PASSED</strong> &mdash; Sec A 5/5 PERFECT, Sec B 5/5 PERFECT, Sec C 4/5. A clean debut for Statistics &amp; Probability, launched from absolute zero just two days earlier: favourable&divide;total, equally-likely outcomes, simplifying, and the "NOT" complement rule were all applied correctly across 13 of 15 questions on the very first probability test Prem has ever sat, including every intermediate-tier question and 4 of 5 hard/capstone questions. The single miss, Q12, is a precise mirror of U54&rsquo;s own Q12 finish-the-question slip &mdash; but in the OPPOSITE direction: U54&rsquo;s Q12 computed a correct count (34) but never converted it to the fraction asked for; U55&rsquo;s Q12 computed a correct fraction (3/10) when the question asked for a whole-number COUNT (3). Two data points now confirm this is a specific, nameable pattern (probability-fraction vs. count confusion), not a one-off. The warm-up split as expected under the spiral-maintenance protocol: W1 (Vertically Opposite Angles, closed U20, ~10 weeks stale) was wrong &mdash; wrote 122&deg; instead of 58&deg;, confusing the vertically-opposite angle with the adjacent/supplementary one &mdash; a clean, low-stakes confirmation that untouched skills decay exactly as predicted, caught on an ungraded warm-up rather than costing real marks. W2 (HCF, closed U15, ~11 weeks stale) was correct.',
    analysisLabel: 'Next: Unit 56 — Art of Counting, Harder Tier: Choose 3 &amp; Multi-Constraint Counting (built 14 Aug 2026)',
    analysisInsight: 'No retest needed &mdash; U55 comfortably passed. Two actions taken directly off this result: (1) the standing finish-the-question infrastructure now names a specific "probability (fraction) vs. count (whole number) — which did the question ask for?" check from U56 onward, since U54 Q12 and U55 Q12 form a confirmed 2-for-2 pattern rather than two unrelated slips; (2) Statistics &amp; Probability is added as the 9th radar skill (skills[], radarCurrent/radarTarget/radarBaseline), seeded from this 14/15 result &mdash; a strong opening baseline, kept conservative below the raw 93% since only 1 of the 3 planned S&amp;P units (U55/U57/U59) is done. Vertically Opposite Angles returns to the spiral-maintenance rotation for a future warm-up &mdash; not urgent (ungraded, caught early), but now confirmed live-decayed rather than merely old. U56 proceeds as planned per the roadmap: Art of Counting at harder tier (Choose-3 combinations extending the mastered choose-2 method, plus Total-Minus-Bad multi-constraint counting bridging directly to U55&rsquo;s freshly-taught P(NOT) rule).',
    qSummary: '<strong>Sec A 5/5 PERFECT | Sec B 5/5 PERFECT | Sec C 4/5</strong> — 14/15 (93%) PASSED',
    qBreakdown: [
      { q:'Q1', topic:'Probability — Fraction', lvl:'w', pass:true,  note:'&#10003; 2/5 (5 marbles, 3 red/2 blue, P(blue)).' },
      { q:'Q2', topic:'Probability — Fraction', lvl:'w', pass:true,  note:'&#10003; 1/6 (6-section spinner, P(land on 4)).' },
      { q:'Q3', topic:'Probability — Simplifying', lvl:'w', pass:true,  note:'&#10003; 2/5 (10 sweets, 4 yellow/6 green, P(yellow) in simplest form).' },
      { q:'Q4', topic:'Probability — Fraction', lvl:'w', pass:true,  note:'&#10003; 1/2 (die, P(even)).' },
      { q:'Q5', topic:'Probability — NOT Complement', lvl:'w', pass:true,  note:'&#10003; 3/8 (8 balls, 5 blue, P(not blue)).' },
      { q:'Q6', topic:'Probability — Simplifying', lvl:'m', pass:true,  note:'&#10003; 5/12 (12 candies, P(orange) in simplest form).' },
      { q:'Q7', topic:'Probability — Fraction', lvl:'m', pass:true,  note:'&#10003; 3/10 (10 cards, P(greater than 7)).' },
      { q:'Q8', topic:'Probability — Comparing', lvl:'m', pass:true,  note:'&#10003; 1/5 (20 marbles, P(blue) minus P(red)).' },
      { q:'Q9', topic:'Probability — NOT Complement', lvl:'m', pass:true,  note:'&#10003; 14/15 (15 tickets, P(not winning)).' },
      { q:'Q10',topic:'Probability — Fraction', lvl:'m', pass:true,  note:'&#10003; 1/3 (die, P(multiple of 3)).' },
      { q:'Q11',topic:'Probability — Reverse (find count)  &#9733;', lvl:'h', pass:true,  note:'&#10003; 8 (24 marbles, P(red)=1/3, find the red count).' },
      { q:'Q12',topic:'Probability — Reverse (find count)  &#9733;', lvl:'h', pass:false, note:'&#10007; wrote 3/10; correct 3 (10 pens, P(black)=2/5, P(blue)=3/10, find the red COUNT). Computed a correct fraction when the question asked for a whole-number count &mdash; the exact mirror of U54 Q12 (which gave a count when a fraction was asked). Confirms a specific, nameable "fraction vs. count" precision pattern, now 2-for-2.' },
      { q:'Q13',topic:'Probability — Reverse (find count)  &#9733;', lvl:'h', pass:true,  note:'&#10003; 8 (18 sweets, P(lemon)=5/9, find the strawberry count).' },
      { q:'Q14',topic:'Probability — Combined Events  &#9733;', lvl:'h', pass:true,  note:'&#10003; 2/5 (numbers 1&ndash;20, P(multiple of 4 OR 5) in simplest form).' },
      { q:'Q15',topic:'Probability — Capstone (Reverse)  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; (a) 12 (b) 2/5 (30 marbles, find green count then P(green)) &mdash; exact match on both parts.' }
    ]
  },
  _U54archived: {
    n:54, score:11, outOf:15, pct:73, delta:0, prevScore:11, prevOutOf:15, prevLabel:'U53',
    patternLabel: 'U54 — 3D Spatial Reasoning, Floor by Floor (new method), NOT PASSED — but the method itself is WORKING',
    patternInsight: '11/15 (73%) <strong>NOT PASSED</strong> &mdash; Sec A 4/5, Sec B 4/5, Sec C 3/5. The genuinely new floor-by-floor method (reframing a painted box as a stack of 2D grids, counted via Prem&rsquo;s already-proven grid-counting skill) held up well: <strong>11 of the 12 questions testing pure floor-by-floor mechanics were correct</strong>, including both hardest capstones (Q11&rsquo;s four-way count 8/12/6/1, Q15&rsquo;s reverse problem) &mdash; a real turnaround from U49/U50&rsquo;s across-the-board formula failures. The 4 misses split into two different types. Q5 (4&times;4&times;4) is a coverage gap, not a method failure: the first-ever box in the unit with TWO middle floors, never demonstrated in the lesson &mdash; Prem applied the "+0 for middle floor" rule correctly to only one of the two. Q6, Q12, and Q14 are three separate instances of the exact "finish the exact question" pattern the 10 Aug coaching review flagged as the root cause behind ASMOPSS 2026&rsquo;s Intermediate-tier collapse &mdash; already recurring one test later, even with the new standing infrastructure in place: Q6 abandoned blank despite solving a near-identical companion question (Q9) correctly minutes later (confidence dip); Q12 computed the correct raw count (34) but never converted it to the simplified fraction the question explicitly asked for; Q14 derived both correct intermediate values in the working (16, 48) then multiplied instead of added them in the final step.',
    analysisLabel: 'Next: Unit 55 — Statistics &amp; Probability I, Basic (brand-new topic, launches the 9th radar skill, built 12 Aug 2026)',
    analysisInsight: 'This was the first test built under the new post-ASMOPSS coaching protocol (spiral maintenance warm-up + standing finish-the-question grading + tier-awareness). The warm-up (Remainders, closed since U34, untouched 6+ weeks) was answered correctly &mdash; no decay. The finish-the-question infrastructure did NOT yet close the precision gap it was built for; watch whether repetition across U55&ndash;U57 brings it down. No re-teach or retest recommended for the spatial method itself &mdash; it is working. A single 1-question top-up on a 2+-middle-floor box (e.g. 5&times;5&times;5) before spatial content resurfaces (U57+) would close the Q5 coverage gap cheaply. Per the roadmap, U55 proceeds as planned: Statistics &amp; Probability was entirely missing from the original 8-skill rotation and confirmed the weakest ASMOPSS strand both years &mdash; U55 covers chance/likelihood, probability as a favourable&divide;total fraction, equally-likely outcomes, simplifying, and the "NOT" complement rule, plus 2 spiral-maintenance warm-ups (Vertically Opposite Angles, closed U20/~10 weeks stale; HCF, closed U15/~11 weeks stale).',
    qSummary: '<strong>Sec A 4/5 | Sec B 4/5 | Sec C 3/5</strong> — 11/15 (73%) NOT PASSED',
    qBreakdown: [
      { q:'Q1', topic:'Spatial — Painted Cubes', lvl:'w', pass:true,  note:'&#10003; 8 (corners, 3&times;3&times;3).' },
      { q:'Q2', topic:'Spatial — Painted Cubes', lvl:'w', pass:true,  note:'&#10003; 0 (fully hidden, 3&times;3&times;2 — no middle floor).' },
      { q:'Q3', topic:'Spatial — Painted Cubes', lvl:'w', pass:true,  note:'&#10003; 4 (1-face, 4&times;3&times;2).' },
      { q:'Q4', topic:'Spatial — Painted Cubes', lvl:'w', pass:true,  note:'&#10003; 20 (2-face/edges, 5&times;3&times;3).' },
      { q:'Q5', topic:'Spatial — Painted Cubes', lvl:'w', pass:false, note:'&#10007; wrote 4; correct 8 (fully hidden, 4&times;4&times;4). First-ever box with TWO middle floors &mdash; never demonstrated in the lesson. Applied the "+0 for middle floor" rule to only one of the two middle floors, not both. Coverage gap, not a method failure.' },
      { q:'Q6', topic:'Spatial — Painted Cubes', lvl:'m', pass:false, note:'&#10007; blank; correct 2 (1-face minus 2-face, 7&times;4&times;3). Abandoned mid-question &mdash; but Q9, a near-identical difference-of-two-counts question, was solved correctly minutes later. Confidence dip, not a skill gap.' },
      { q:'Q7', topic:'Spatial — Painted Cubes', lvl:'m', pass:true,  note:'&#10003; 28 (at-least-2-faces, 5&times;4&times;2).' },
      { q:'Q8', topic:'Spatial — Painted Cubes  &#9733;', lvl:'m', pass:true,  note:'&#10003; 8 (at-most-1-face, 6&times;3&times;2).' },
      { q:'Q9', topic:'Spatial — Painted Cubes  &#9733;', lvl:'m', pass:true,  note:'&#10003; 19, working shown "28&minus;9=19" (2-face minus hidden, 5&times;5&times;3).' },
      { q:'Q10',topic:'Spatial — Painted Cubes  &#9733;', lvl:'m', pass:true,  note:'&#10003; 1/5, written as a properly-formatted stacked fraction (hidden fraction, 6&times;5&times;4).' },
      { q:'Q11',topic:'Spatial — Painted Cubes  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; all four counts 8, 12, 6, 1 &mdash; correctly sum to 27 (3&times;3&times;3 capstone).' },
      { q:'Q12',topic:'Spatial — Painted Cubes  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; wrote 34; correct 17/42 (1-face fraction, 7&times;4&times;3). The raw count (34) was correct but never converted into the SIMPLEST-FORM FRACTION the question explicitly asked for &mdash; a finish-the-exact-question precision miss, not a content gap.' },
      { q:'Q13',topic:'Spatial — Painted Cubes  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; 36 (2-face/edges, 8&times;4&times;3).' },
      { q:'Q14',topic:'Spatial — Painted Cubes  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; wrote 768; correct 64 (hidden+1-face sum, 6&times;6&times;3). Both intermediate values (16, 48) correctly derived in the working, then multiplied instead of added in the final step.' },
      { q:'Q15',topic:'Spatial — Painted Cubes (Capstone)  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; (a) 60 (b) 4 &mdash; reverse capstone, exact match.' }
    ]
  },
  _U53archived: {
    n:53, score:11, outOf:15, pct:73, delta:+2, prevScore:9, prevOutOf:15, prevLabel:'U52',
    patternLabel: 'U53 — Quick-Win Add-Ons: Both Groups Every Time &amp; Double the Total First, NOT PASSED (best since U49)',
    patternInsight: '11/15 (73%) <strong>NOT PASSED</strong>, but the best score since U49 and a clear upward trend (8&rarr;7&rarr;9&rarr;11). Sec A (Circular Double-Repeat) 4/5 &middot; Sec B (Combinations Backward) 5/5 PERFECT &middot; Sec C (Harder &amp; Capstone) 2/5. <strong>Combinations Backward is fully secure &mdash; 7/7 correct everywhere it appeared, including at the &#9733;&#9733; tier.</strong> The circular double/triple-repeat rule is more interesting than the raw score suggests: most misses trace to arithmetic-scale slips or abandoned big-number attempts on a correctly-identified method, not confusion about the rule itself &mdash; including Q13, where Prem correctly extended the 2-group rule to a never-taught 3-group variant, only losing the final answer to one arithmetic slip.',
    analysisLabel: 'Next: Real ASMOPSS 2026 exam (sat 9 Aug 2026, scored 50/100) — see Competitions/ASMOPSS/ for full breakdown, answer key &amp; tier/strand dashboard',
    analysisInsight: 'U53 was the final ASMOPSS-prep unit before the real exam. The real exam confirmed almost question-for-question the gap map this programme had been tracking: every miss traced to harder-tier combinatorics, painted-cube/3D spatial reasoning, or "finish the full question," while every hit landed in the areas called strengths. A full coaching-process review (10 Aug 2026) followed, comparing unit-test vs. real-exam performance &mdash; see coaching-rules memory for the standing rules now in effect (spiral maintenance, standing finish-the-question grading, tier-density practice, Statistics &amp; Probability added to rotation). Programme resumes standard ISA 2027 cadence from U54, targeting 3D spatial reasoning with a genuinely new method (floor-by-floor grid counting, building on Prem&rsquo;s already-proven 2D grid-counting skill instead of the corner/edge/face/inside formulas that failed twice at U49&ndash;U50).',
    qSummary: '<strong>Sec A 4/5 | Sec B 5/5 PERFECT | Sec C 2/5</strong> — 11/15 (73%) NOT PASSED',
    qBreakdown: [
      { q:'Q1', topic:'Circular Double-Repeat', lvl:'w', pass:false, note:'&#10007; wrote 360; correct 180. Divided by only ONE repeat group (720&divide;2) instead of both (720&divide;2&divide;2) &mdash; the exact mistake the lesson warned about. First question on the paper.' },
      { q:'Q2', topic:'Circular Double-Repeat', lvl:'w', pass:true,  note:'&#10003; 10080.' },
      { q:'Q3', topic:'Circular Double-Repeat', lvl:'w', pass:true,  note:'&#10003; 7560, full long division shown.' },
      { q:'Q4', topic:'Circular Double-Repeat', lvl:'w', pass:true,  note:'&#10003; 100800.' },
      { q:'Q5', topic:'Circular Double-Repeat', lvl:'w', pass:true,  note:'&#10003; 105 &mdash; recovers immediately after Q1.' },
      { q:'Q6', topic:'Combinations Backward', lvl:'m', pass:true,  note:'&#10003; 5.' },
      { q:'Q7', topic:'Combinations Backward', lvl:'m', pass:true,  note:'&#10003; 6.' },
      { q:'Q8', topic:'Combinations Backward  &#9733;', lvl:'m', pass:true,  note:'&#10003; 13, working shown 78&times;2=156.' },
      { q:'Q9', topic:'Combinations Backward  &#9733;', lvl:'m', pass:true,  note:'&#10003; 14, working shown 91&times;2=182.' },
      { q:'Q10',topic:'Combinations Backward  &#9733;', lvl:'m', pass:true,  note:'&#10003; 15 &mdash; Section B PERFECT, 5/5.' },
      { q:'Q11',topic:'Circular Double-Repeat  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank, self-marked "?"; correct 277200. Attempted 11! by hand, got tangled in the arithmetic, abandoned before dividing.' },
      { q:'Q12',topic:'Combinations Backward  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; 16, working shown 120&times;2=240 then 15&times;16=240.' },
      { q:'Q13',topic:'Circular Triple-Repeat  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; wrote 30360; correct 45360. Conceptually correct and genuinely novel &mdash; never taught a 3-group case, correctly extended the rule (9!, &divide;2 three times), lost only to one arithmetic slip mid-division.' },
      { q:'Q14',topic:'Combinations Backward  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; 17, working shown 136&times;2=272 then verified 16&times;17=272.' },
      { q:'Q15',topic:'Capstone (Backward + Circular)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank, self-marked "?"; correct 3326400. The "double the total" half was completed correctly (n=12, right there in the working); the circular half broke down into abandoned scratch multiplication.' }
    ]
  },
  _U52archived: {
    n:52, score:9, outOf:15, pct:60, delta:+2, prevScore:7, prevOutOf:15, prevLabel:'U51',
    patternLabel: 'U52 — Two-Skill Capstones, Chain What You Already Know, NOT PASSED (improved)',
    patternInsight: '9/15 (60%) <strong>NOT PASSED</strong> &mdash; Sec A (Warm-Up Pairs) 5/5 PERFECT, Sec B (Medium Pairs) 3/5, Sec C (Harder Pairs &amp; Capstone) 1/5. Section A is the headline: a clean sweep across all four baton-pass pairings (circular+repeats, averages+removal, counting+remainder, handshake+algebra) plus an averages-addition variant &mdash; the meta-skill landed on first real exposure. Section B held near the pass line with one diagnosable slip: Q7 reused Q3&rsquo;s stale digit-count (20) instead of recomputing fresh for three digits (wrote 7, correct 8), and Q10 (a brand-new "distributing+remainder" pairing) was left blank. Section C is where it broke down: Q11 and Q12 were both left with a self-marked "?" and an ambiguous final answer (reconciled as both wrong against the score-box total of 9); Q13 wrote 13 instead of 3, likely a copied question-number slip; Q14 wrote 33 instead of 12 &mdash; looks like 66&divide;2 was computed directly instead of solving n(n&minus;1)=132 for n. Q15, the hardest question on the paper (a true 3-skill capstone), was fully correct with clean long-division working shown &mdash; proof the baton-pass method itself still works under maximum pressure, just not consistently yet at the &#9733;&#9733; tier.',
    analysisLabel: 'Next: Unit 53 — Quick-Win Add-Ons: Both Groups, Every Time &amp; Double the Total First (final exam-prep unit, built 7 Aug 2026)',
    analysisInsight: 'Flagged to Lui, who then surfaced two critical pieces of context: Prem had the lesson pages open during both U51 and U52 (open-book), and separately told Lui the U51&ndash;U52 procedures felt "too long." Together these reframe Section A&rsquo;s clean sweep &mdash; it shows he can follow a reference under pressure, not necessarily that the method is fully internalized, and length itself was a real barrier regardless. With 1&ndash;2 days left before the 9 Aug exam, U53 is built around both signals: two short, single-rule "quick win" add-ons (not full multi-step procedures) bolted onto skills Prem already has fast and cold &mdash; circular arrangements (add: divide by EACH repeat group, not just one) and combinations (add: double the total first, then find two consecutive factors) &mdash; chosen directly from U52&rsquo;s diagnosable Section C misses (Q11 only-one-repeat-group, Q14 wrong-shortcut-applied). Recommended: run U53&rsquo;s test closed-book for a truer final signal before Sunday.',
    qSummary: '<strong>Sec A 5/5 PERFECT | Sec B 3/5 | Sec C 1/5</strong> — 9/15 (60%) NOT PASSED',
    qBreakdown: [
      { q:'Q1', topic:'Circular + Repeats', lvl:'w', pass:true,  note:'&#10003; 60.' },
      { q:'Q2', topic:'Averages + Removal', lvl:'w', pass:true,  note:'&#10003; 23.' },
      { q:'Q3', topic:'Counting + Remainder', lvl:'w', pass:true,  note:'&#10003; 9.' },
      { q:'Q4', topic:'Handshake + Algebra', lvl:'w', pass:true,  note:'&#10003; 7.' },
      { q:'Q5', topic:'Averages + Addition', lvl:'w', pass:true,  note:'&#10003; 28.' },
      { q:'Q6', topic:'Circular + Repeats  &#9733;', lvl:'m', pass:true,  note:'&#10003; 420.' },
      { q:'Q7', topic:'Counting + Remainder  &#9733;', lvl:'m', pass:false, note:'&#10007; wrote 7; correct 8. Reused Q3&rsquo;s stale 2-digit count (20) instead of recomputing fresh for 3 digits.' },
      { q:'Q8', topic:'Averages + Removal  &#9733;', lvl:'m', pass:true,  note:'&#10003; 34.' },
      { q:'Q9', topic:'Handshake + Algebra  &#9733;', lvl:'m', pass:true,  note:'&#10003; 10.' },
      { q:'Q10',topic:'Distributing + Remainder  &#9733;', lvl:'m', pass:false, note:'&#10007; blank; correct 4. No attempt on this brand-new pairing.' },
      { q:'Q11',topic:'Circular + Repeats  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; self-marked "?", ambiguous; correct 840. Divided by 24 instead of 48 (only one repeat group, not both).' },
      { q:'Q12',topic:'Averages 2-Step  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; self-marked "?", ambiguous; correct 2. Illegible working, reconciled as wrong via the score-box total.' },
      { q:'Q13',topic:'Counting + Remainder  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; wrote 13; correct 3. Likely copied the question number instead of computing the remainder.' },
      { q:'Q14',topic:'Combinations + Algebra  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; wrote 33; correct 12. Looks like 66&divide;2 computed directly instead of solving n(n&minus;1)=132.' },
      { q:'Q15',topic:'Capstone (3-Skill Chain)  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; 80 &mdash; full correct long-division working shown. The hardest question on the paper, done cleanly.' }
    ]
  },
  _U51archived: {
    n:51, score:7, outOf:15, pct:47, delta:0, prevScore:7, prevOutOf:15, prevLabel:'M5 (normalized)',
    patternLabel: 'U51 — Pictogram/Table Clue-Puzzles & Digit/Symbol Puzzles, NOT PASSED',
    patternInsight: '7/15 (47%) <strong>NOT PASSED</strong> &mdash; Sec A (Pictogram) 3/5, Sec B (Digit Puzzles) 3/5, Sec C (Harder + Capstones) 1/5. Pictogram clue-puzzles landed reasonably for a first exposure (Q3, Q5 both correct, including a 3-clue chain). Digit puzzles split cleanly: "one symbol" and "sum & difference" (Q6, Q7, Q10) solid; column-addition and repeated-digit codes (Q8, Q9) not landing. <strong>Two direct, unprompted notes from Prem:</strong> Q8 &mdash; "Btw, I don&rsquo;t understand UR solution for this" (calm, specific method feedback); Q9 &mdash; "don&rsquo;t use stars looks like this!!!" written across the page margin next to a nonsensical answer and heavy, pressed-hard scribbling &mdash; a visible frustration reaction to the &#9733;&#9733; notation itself. Section C then collapsed: Q11 clean and correct, Q12 solved to the second-to-last step then answered the wrong variable (wrote P=44 instead of finishing to Q=132), and Q13&ndash;Q15 all abandoned completely blank under heavy scratch marks. Reads as a frustration cascade triggered at Q9, distinct from U50&rsquo;s quiet self-doubt (no erased-correct-answers here) and distinct from M5&rsquo;s healthy "IDK" pattern.',
    analysisLabel: 'Next: Unit 52 — Two-Skill Capstones (Reasoning) — built 7 Aug 2026 at Lui\'s request',
    analysisInsight: 'Flagged to Lui rather than auto-retested (see U51 write-up) &mdash; every section fell below the pass bar, which would normally mean a full re-teach, but 2 days remained and there was a live frustration signal to weigh first. Lui chose to proceed with U52 anyway: a single lesson targeting the hardest-tier "capstone" pattern that has been the consistent miss across M4 Round 3 (1/5) and M5 Round 3 (0/5) &mdash; questions that chain two already-mastered skills in one problem (circular+repeats, averages+removal, counting+remainder, handshake formula solved backward via algebra). The lesson teaches ONE new meta-skill (\"solve Skill 1 to a clean number, pass it into Skill 2\") using only content Prem has already passed a real test on, deliberately avoiding both the star-symbol notation (U51\'s trigger) and painted-cube edges/faces (the still-open content gap).',
    qSummary: '<strong>Sec A 3/5 | Sec B 3/5 | Sec C 1/5</strong> — 7/15 (47%) NOT PASSED',
    qBreakdown: [
      { q:'Q1', topic:'Total Minus Known', lvl:'w', pass:false, note:'&#10007; wrote 5; correct 15. No working shown.' },
      { q:'Q2', topic:'Difference Clue', lvl:'w', pass:true,  note:'&#10003; 24.' },
      { q:'Q3', topic:'Ratio + Total', lvl:'w', pass:true,  note:'&#10003; 6.' },
      { q:'Q4', topic:'Chained Clues', lvl:'w', pass:false, note:'&#10007; wrote 7; correct 26. No working shown.' },
      { q:'Q5', topic:'Chained Clues', lvl:'w', pass:true,  note:'&#10003; 49.' },
      { q:'Q6', topic:'One Symbol', lvl:'m', pass:true,  note:'&#10003; 7.' },
      { q:'Q7', topic:'Sum & Difference', lvl:'m', pass:true,  note:'&#10003; 9.' },
      { q:'Q8', topic:'Column Addition  &#9733;', lvl:'m', pass:false, note:'&#10007; blank, "Btw &mdash; I don\'t understand UR solution for this"; correct 4. Direct, calm feedback that the method didn\'t land.' },
      { q:'Q9', topic:'Repeated Digit  &#9733;', lvl:'m', pass:false, note:'&#10007; "ANSWER 33" amid heavy scribbling; correct 3. Margin note "don\'t use stars looks like this!!!" &mdash; a visible frustration reaction to the notation.' },
      { q:'Q10',topic:'Two Unknowns  &#9733;', lvl:'m', pass:true,  note:'&#10003; 5.' },
      { q:'Q11',topic:'5-Category Chain  &#9733;&#9733;', lvl:'h', pass:true,  note:'&#10003; 42 &mdash; the one clean, confident answer in Section C.' },
      { q:'Q12',topic:'Ratio + Difference  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; wrote 44; correct 132. Solved to the second-to-last step (P=44) then answered the wrong variable instead of finishing to Q=3&times;44=132.' },
      { q:'Q13',topic:'2-Digit &times;3 Pattern  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct 150. No attempt, heavy scribble over the line.' },
      { q:'Q14',topic:'Subtraction  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct 2. No attempt, heavy scribble over the line.' },
      { q:'Q15',topic:'Capstone (4-Chain)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct 30. No attempt, heavy scribble over the line.' }
    ]
  },
  _M5archived: {
    n:'M5', score:47, outOf:100, pct:47, delta:-10.5, prevScore:57.5, prevOutOf:100, prevLabel:'M4',
    patternLabel: 'Milestone M5 — ASMOPSS-Style Cumulative Review (Units 42–50), Diagnostic Benchmark',
    patternInsight: '<strong>47/100</strong> (Round 1 8/10 &rarr; 20/25 marks &middot; Round 2 6/10 &rarr; 27/45 marks &middot; Round 3 0/5 &rarr; 0/30 marks). Built at Lui&rsquo;s request as a final cumulative check, 3 days before the real exam. <strong>The headline is genuinely good news: the U50 problem did not repeat</strong> &mdash; nowhere on this 25-question paper is there a crossed-out CORRECT answer replaced with a wrong one. Q17 (painted-cube corners) was answered "ALWAYS 8" with a confident drawing, no hesitation. On questions he couldn&rsquo;t solve, Prem wrote an honest "IDK" (Q12, Q18, Q19, Q21) instead of guessing or erasing &mdash; a real, visible behaviour change in exactly the direction the confidence session aimed for. Underneath that good news: a genuine <strong>regression in circular arrangements</strong> (the "subtract 1 first" rule, previously resolved at U43, slipped twice &mdash; Q9, Q22), and honest blanks on previously-resolved reverse-average content (Q18, Q19) that read as fatigue on a long, new-format paper rather than a re-opened gap.',
    analysisLabel: 'Next: Unit 51 — Pictogram/Table Clue-Puzzles &amp; Digit/Symbol Puzzles (final exam-prep unit, built 6 Aug 2026)',
    analysisInsight: 'With 3 days left before the 9 Aug exam, no new lesson or scored retest was recommended off M5 itself (see write-up: protect Prem&rsquo;s state over closing any one remaining gap). Lui approved building U51 to cover the two highest-leverage untaught patterns identified from the real 2023&ndash;2025 ASMOPSS papers: pictogram/table clue-puzzles (100% appearance rate at Q20, always the 6-mark tier, every year) and digit/symbol puzzles &mdash; cryptarithms (2&ndash;3 times every year). Both were on the original U49&ndash;U53 prediction plan (previously slated as U51/U52) and are combined into one unit here given the timeline. Two lessons built from zero (Data Detective method for clue-puzzles; Code-Breaker method for digit puzzles), each with a decision tree, worked examples building basic&rarr;chained/harder, and guided practice. Test: 15Q split Sec A (Pictogram, Q1&ndash;5) / Sec B (Digit Puzzles, Q6&ndash;10) / Sec C (harder + capstones, Q11&ndash;15). Standing watch-items carried forward, not re-taught this unit given the time constraint: circular arrangements&rsquo; (n&minus;1)! rule needs a 30-second verbal reminder before Sunday, not a new lesson (see priorityGaps); painted-cube edges/faces remains the one open content gap, deliberately not touched again so close to the exam.',
    qSummary: '<strong>Round 1 (2.5pt) 8/10 | Round 2 (4.5pt) 6/10 | Round 3 (6pt) 0/5</strong> — 47/100',
    qBreakdown: [
      { q:'Q1', topic:'Arithmetic', lvl:'w', pass:true,  note:'&#10003; 151.' },
      { q:'Q2', topic:'Number Theory — Factorial', lvl:'w', pass:true,  note:'&#10003; 42.' },
      { q:'Q3', topic:'Number Theory — Remainder', lvl:'w', pass:true,  note:'&#10003; 6.' },
      { q:'Q4', topic:'Number Theory — Divisibility', lvl:'w', pass:true,  note:'&#10003; 4.' },
      { q:'Q5', topic:'Sequences', lvl:'w', pass:true,  note:'&#10003; 96 &mdash; wrote "forgot how to do this so imma just list," then hand-listed all 14 terms and landed on the right answer.' },
      { q:'Q6', topic:'Spatial — Solid Block', lvl:'w', pass:true,  note:'&#10003; 90.' },
      { q:'Q7', topic:'Spatial — Filling', lvl:'w', pass:false, note:'&#10007; wrote 5; correct 16. Both the full-cube total and the current-fill sum were miscounted.' },
      { q:'Q8', topic:'Word Problem — Table Reading', lvl:'w', pass:true,  note:'&#10003; 45.' },
      { q:'Q9', topic:'Art of Counting — Circular', lvl:'w', pass:false, note:'&#10007; wrote 720; correct 120. Used 6! instead of (6&minus;1)!=5! &mdash; the "subtract 1 first" rule, resolved at U43, slipping under mixed-review pressure.' },
      { q:'Q10',topic:'Art of Counting — Divisibility Arrangement', lvl:'w', pass:true,  note:'&#10003; 24.' },
      { q:'Q11',topic:'Geometry — Fencepost', lvl:'m', pass:true,  note:'&#10003; 15.' },
      { q:'Q12',topic:'Art of Counting — Repeats (r=4)', lvl:'m', pass:false, note:'&#10007; blank, "also forgot how 2 do"; correct 35. Honest non-attempt, not a guess.' },
      { q:'Q13',topic:'Arithmetic — Average Changes', lvl:'m', pass:true,  note:'&#10003; 22.' },
      { q:'Q14',topic:'Word Problem — Multi-Step Profit', lvl:'m', pass:true,  note:'&#10003; 663 &mdash; full correct chain shown (600&times;1.30=780, 780&times;0.85=663).' },
      { q:'Q15',topic:'Art of Counting — Constrained Listing', lvl:'m', pass:true,  note:'&#10003; 3.' },
      { q:'Q16',topic:'Spatial — Filling', lvl:'m', pass:true,  note:'&#10003; 21.' },
      { q:'Q17',topic:'Spatial — Painted (Corners)', lvl:'m', pass:true,  note:'&#10003; 8 &mdash; wrote "ALWAYS 8" with a confident drawing. No hesitation, no crossing-out.' },
      { q:'Q18',topic:'Arithmetic — Reverse Average', lvl:'m', pass:false, note:'&#10007; "IDK"; correct 13. Previously-resolved (U47 Sec A); reads as fatigue partway through a new, longer paper format, not a re-opened gap.' },
      { q:'Q19',topic:'Arithmetic — Missing Value', lvl:'m', pass:false, note:'&#10007; "IDK"; correct 23. Same family as Q18, same likely cause.' },
      { q:'Q20',topic:'Word Problem — Multi-Step Profit', lvl:'m', pass:false, note:'&#10007; wrote 1450; correct 775. One leg computed correctly (15&times;55=825) but the other used 25&times;25 instead of 25&times;70 &mdash; a misread number, not a wrong method.' },
      { q:'Q21',topic:'Capstone — Averages  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; "idk"; correct 80. Honest non-attempt on the hardest tier\'s first question.' },
      { q:'Q22',topic:'Art of Counting — Circular+Repeats  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; wrote 302400; correct 30240. Same root error as Q9 &mdash; used 10! instead of (10&minus;1)!=9! before dividing by repeats. Confirms this is a real, reproducible regression.' },
      { q:'Q23',topic:'Spatial — Painted (Edges)  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; "IDK"; correct 44. Expected at this tier &mdash; edges/faces is still the live, known gap from U50.' },
      { q:'Q24',topic:'Capstone — Listing + Divisibility  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; blank; correct 48. No attempt.' },
      { q:'Q25',topic:'Capstone — Counting + Algebra  &#9733;&#9733;', lvl:'h', pass:false, note:'&#10007; incomplete ("3S=1L" miswritten); correct 1512. Misread the balance relationship; no final answer reached.' }
    ]
  },
  _M4archived: {
    n:'M4', score:57.5, outOf:100, pct:58, delta:null, prevScore:13, prevOutOf:15, prevLabel:'U41',
    patternLabel: 'Milestone M4 — ASMOPSS-Style Cumulative Review (Units 31–41)',
    patternInsight: '<strong>57.5 / 100</strong> (Round 1 8/10 &rarr; 20/25 marks &middot; Round 2 7/10 &rarr; 31.5/45 marks &middot; Round 3 1/5 &rarr; 6/30 marks). First milestone in the new ASMOPSS-style format &mdash; reported as a diagnostic benchmark, not pass/fail. Rounds 1&ndash;2 held up well (15/20) across 11 units of cumulative review with zero re-teaching. Round 3 (hardest tier) is where the signal is: <strong>NEW finding</strong> &mdash; Q7 &amp; Q13 both used n! instead of (n&minus;1)! for circular arrangements, the "subtract 1 first" rule slipping for the first time (U40&rsquo;s plain-circular Qs were both correct). And the r=4 divisor gap flagged at U41 is confirmed still open: Q22 was a direct stress-test and Prem abandoned it after an arithmetic slip rather than guess. <em>Note on Q21:</em> the page shows a circled "0" for Round 3, but Q21&rsquo;s working and final answer independently check out against the key &mdash; counted correct here (51.5/100 if it should count wrong; diagnosis unaffected either way).',
    analysisLabel: 'Next: Unit 42 — Boundary & Edge-Case Adjustment (first unit of cycle 5)',
    analysisInsight: 'M4&rsquo;s findings were cross-checked against the ASMOPSS 2023 past paper (12/25, analysed the same day): Q17 (a "fencepost" spacing problem, left blank) turned out to be the SAME root habit as M4&rsquo;s circular (n&minus;1)! slip &mdash; a general "boundary adjustment" blind spot, not a circular-arrangements quirk specifically. U42 addresses both together (circular order + fencepost spacing) plus finishes the r=4 divisor gap with a dedicated worked example. Full U42&ndash;U50 gap-closing plan (covering both M4 and ASMOPSS 2023 findings: word-problem clue extraction, reverse averages, irregular 3D visualisation, algebra substitution fluency, composite area, multi-step arithmetic precision) is in the Executive Summary &mdash; the whole sequence stays in ASMOPSS-prep mode until the real 9 Aug 2026 test date passes.',
    qSummary: '<strong>Round 1 (2.5pt) 8/10 | Round 2 (4.5pt) 7/10 | Round 3 (6pt) 1/5</strong> &mdash; 57.5/100',
    qBreakdown: [
      { q:'Q1', topic:'Arithmetic (order of ops)',            lvl:'w', pass:false, note:'&#10007; 184; correct 192. Sum (288) right, then 288&minus;96 subtracted wrong.' },
      { q:'Q2', topic:'Factorial ratio',                      lvl:'w', pass:true,  note:'&#10003; 30.' },
      { q:'Q3', topic:'Remainder',                            lvl:'w', pass:true,  note:'&#10003; 7.' },
      { q:'Q4', topic:'Divisibility',                         lvl:'w', pass:true,  note:'&#10003; 9.' },
      { q:'Q5', topic:'Sequences',                            lvl:'w', pass:true,  note:'&#10003; 107.' },
      { q:'Q6', topic:'Repeats (single pair)',                lvl:'w', pass:true,  note:'&#10003; 60.' },
      { q:'Q7', topic:'Circular (plain)',                     lvl:'w', pass:false, note:'&#10007; 720; correct 120. Used 6! instead of (6&minus;1)!=5! &mdash; NEW gap.' },
      { q:'Q8', topic:'Equation both sides',                  lvl:'w', pass:true,  note:'&#10003; 7 &mdash; annotated "forgot the method, guess &amp; check"; recovered via testing n=5,6,7.' },
      { q:'Q9', topic:'Chaining (ratio only)',                lvl:'w', pass:true,  note:'&#10003; 2.' },
      { q:'Q10',topic:'Perimeter',                            lvl:'w', pass:true,  note:'&#10003; 58.' },
      { q:'Q11',topic:'Chaining (ratio only)',                lvl:'m', pass:true,  note:'&#10003; 3.' },
      { q:'Q12',topic:'Repeats (2 groups)',                   lvl:'m', pass:true,  note:'&#10003; 180.' },
      { q:'Q13',topic:'Circular + repeats',                   lvl:'m', pass:false, note:'&#10007; 2520; correct 360. Same error as Q7 &mdash; used 7! instead of (7&minus;1)!=6!.' },
      { q:'Q14',topic:'Factorial multi-term',                 lvl:'m', pass:true,  note:'&#10003; 816.' },
      { q:'Q15',topic:'Logic — transitivity',                 lvl:'m', pass:true,  note:'&#10003; 43.' },
      { q:'Q16',topic:'Path &amp; frame + cost',               lvl:'m', pass:false, note:'&#10007; ~8500 (scribbled); correct 7200. Inner-rectangle setup + arithmetic both broke down.' },
      { q:'Q17',topic:'Divisibility',                         lvl:'m', pass:true,  note:'&#10003; 9.' },
      { q:'Q18',topic:'Sequences — two-term (backward)',      lvl:'m', pass:false, note:'&#10007; blank; correct 26.' },
      { q:'Q19',topic:'Distributing identical items',         lvl:'m', pass:true,  note:'&#10003; 15.' },
      { q:'Q20',topic:'Listing (3 coins)',                    lvl:'m', pass:true,  note:'&#10003; 11 &mdash; clean case-by-case working (5=0/1/2 &rarr; 6+4+1=11).' },
      { q:'Q21',topic:'Full chain (derive+substitute) ★★',    lvl:'h', pass:true,  note:'&#10003; 12g &mdash; full correct chain shown; page shows a circled "0" for this round, but the working matches the key exactly. See marking note above.' },
      { q:'Q22',topic:'Repeats r=4 (stress-test) ★★',         lvl:'h', pass:false, note:'&#10007; blank; correct 420. Attempted 8!, arithmetic slipped, abandoned &mdash; r=4 gap still open.' },
      { q:'Q23',topic:'Circular + 3 repeat groups ★★',        lvl:'h', pass:false, note:'&#10007; 15425; correct 1680. Working tangled with Q22, no clean (n&minus;1)! start.' },
      { q:'Q24',topic:'Compound remainder puzzle ★★',         lvl:'h', pass:false, note:'&#10007; 367; correct 147. Extensive trial division, didn&rsquo;t converge (367 isn&rsquo;t even &divide;7).' },
      { q:'Q25',topic:'Capstone (counting + algebra) ★★',     lvl:'h', pass:false, note:'&#10007; blank; correct 180. No attempt beyond restating the two given equations.' }
    ]
  },
  _M3archived: {
    n:'M3', score:10, outOf:15, pct:67, delta:-1, prevScore:11,
    patternLabel: 'Milestone M3 (Units 21–30)',
    patternInsight: '<strong>14/20 — ISA 10/15, Kangaroo 4/5.</strong> The headline is the <strong>Kangaroo 4/5 → Applied-Problems strength confirmed</strong>: reverse handshakes (the old M2 gap), units-digit cycles, snail/rate and counting-squares all correct. ISA 10/15 dipped on careless + retention slips under a long mixed paper &mdash; not new concept failure. Two "answer-exactly-what&rsquo;s-asked" errors (Q12 gave 3 not smallest 0; Q19 gave 33 not smallest 13).',
    analysisLabel: 'Next: U31 — Art of Counting II (ASMOPSS prep); pivot to ASMOPSS 2026 (9 Aug)',
    analysisInsight: 'Cycle 3 done. Programme now in ASMOPSS-prep mode (ASMOPSS 2025 diagnostic = 13/25; aim Gold). U31 = on-topic Art of Counting II (close the U30 ÷2-in-disguise gap + figure counting), ASMOPSS-style. From U32: mixed ASMOPSS papers (on-topic rule relaxed for ASMOPSS units). M3 misses to carry as habits: which-piece (Q5 gave border), finish two-term (Q4 blank), ÷6 both checks (Q11), and the "read the EXACT ask" precision (Q12, Q19).',
    qSummary: '<strong>ISA 10/15</strong> | <strong>Kangaroo 4/5 ✦ (Applied strength)</strong> &mdash; Total 14/20 (70%)',
    qBreakdown: [
      { q:'Q1',  topic:'Equation both-sides (U21)',                    lvl:'w', pass:true,  note:'&#10003; n=11.' },
      { q:'Q2',  topic:'Sequence — find term (U22)',                  lvl:'w', pass:true,  note:'&#10003; 69.' },
      { q:'Q3',  topic:'Sequence — find n (U25)',                     lvl:'w', pass:true,  note:'&#10003; 13.' },
      { q:'Q4',  topic:'Sequence — two-term (U30)',                   lvl:'w', pass:false, note:'&#10007; BLANK. Derived coeffs in working but didn&rsquo;t finish &mdash; retention wobble under pressure.' },
      { q:'Q5',  topic:'Path & Frame — carpet inside (U27)',          lvl:'w', pass:false, note:'&#10007; 324 = the BORDER (864&minus;540). Gave wrong piece &mdash; which-piece error resurfaced.' },
      { q:'Q6',  topic:'Path & Frame — path + cost (U28)',            lvl:'m', pass:false, note:'&#10007; ~45,360 (correct ฿25,920). Cost-multiply slip.' },
      { q:'Q7',  topic:'SimEq (U26)',                                 lvl:'m', pass:true,  note:'&#10003; pen $4, book $11.' },
      { q:'Q8',  topic:'Ratio — sharing (U26)',                       lvl:'m', pass:true,  note:'&#10003; 45 & 27.' },
      { q:'Q9',  topic:'Consecutive — middle (U27)',                  lvl:'m', pass:true,  note:'&#10003; 27.' },
      { q:'Q10', topic:'Consecutive — even count (U28)',              lvl:'m', pass:true,  note:'&#10003; 20.' },
      { q:'Q11', topic:'Divisibility by 6 (U29)',                     lvl:'h', pass:false, note:'&#10007; said No (4,932 IS ÷6: even + digit sum 18). Careless.' },
      { q:'Q12', topic:'Divisibility — smallest digit (U29)',         lvl:'h', pass:false, note:'&#10007; gave 3, not the SMALLEST (0). Read-the-exact-ask.' },
      { q:'Q13', topic:'Counting — multiply (U30)',                   lvl:'h', pass:true,  note:'&#10003; 12.' },
      { q:'Q14', topic:'Counting — handshakes (U30)',                 lvl:'h', pass:true,  note:'&#10003; 21. Halved correctly this time.' },
      { q:'Q15', topic:'Ratio — transfer (U26)',                      lvl:'h', pass:true,  note:'&#10003; $63.' },
      { q:'Q16', topic:'Kangaroo — snail climb',                      lvl:'k', pass:true,  note:'&#10003; Day 3.' },
      { q:'Q17', topic:'Kangaroo — reverse handshakes',              lvl:'k', pass:true,  note:'&#10003; 8. <strong>The M2 gap — now solved.</strong>' },
      { q:'Q18', topic:'Kangaroo — units-digit cycle (7⁶)',          lvl:'k', pass:true,  note:'&#10003; 9.' },
      { q:'Q19', topic:'Kangaroo — remainders (smallest)',           lvl:'k', pass:false, note:'&#10007; 33 is valid but not the SMALLEST (13). Read-the-exact-ask.' },
      { q:'Q20', topic:'Kangaroo — counting squares',                lvl:'k', pass:true,  note:'&#10003; 14. <strong>Kangaroo 4/5 → Applied strength.</strong>' }
    ]
  },
    // ── Skills ───────────────────────────────────────────────────────
  // Display order used for skill-bar tables in both pages.
  // achievement % = sum(c) / sum(t) × 100  →  764 / 762 ≈ 100%
  // Statistics & Probability added 14 Aug 2026 (building U56) — 9th skill,
  // was missing from the original rotation. Seeded from U55's real result
  // (14/15, 93%, Basic tier only) but current set conservatively below the
  // raw test % since only 1 of 3 planned units (U55/U57/U59) is done —
  // baseline/current/target will be refined as Applied-tier data (U57,
  // U59) comes in. See coaching-rules memory.
  skills: [
    { name: 'Logic & Reasoning', c: 88, t: 90 },
    { name: 'Number Sense',      c: 88, t: 90 },
    { name: 'Algebra',           c: 99, t: 85 },
    { name: 'Arithmetic',        c: 83, t: 85 },
    { name: 'Geometry',          c: 74, t: 80 },
    { name: 'Counting',          c: 87, t: 85 },
    { name: 'Number Theory',     c: 89, t: 82 },
    { name: 'Applied Problems',  c: 76, t: 80 },
    { name: 'Statistics & Probability', c: 80, t: 85 }
  ],

  // Radar chart axes order: Logic, Geometry, NumSense, Algebra, Counting, Arith, NumTheory, Applied, Statistics & Probability
  // NOTE: dashboard's buildRadar() has its own hardcoded `labels` array that must stay in sync with this order — see Prems_Math_Coach_Dashboard.html.
  radarCurrent:  [88, 74, 88, 99, 87, 83, 89, 76, 80],
  radarTarget:   [90, 85, 90, 85, 80, 85, 82, 80, 85],
  radarBaseline: [80, 68, 85, 75, 20, 45, 35, 15, 20],

  // ── Score history ─────────────────────────────────────────────────
  outOf: 15,
  scores: [
    { n:1, score:6,  delta:null, color:'#a0aec0',                               star:false },
    { n:2, score:12, delta:+6,   color:'#43e97b',                               star:false },
    { n:3, score:9,  delta:-3,   color:'#f6993f',                               star:false },
    { n:4, score:14, delta:+5,   color:'#667eea',                               star:true  },
    { n:5, score:9,  delta:-5,   color:'#f6993f',                               star:false },
    { n:6, score:12, delta:+3,   color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:false },
    { n:7, score:10, delta:-2,   color:'linear-gradient(135deg,#667eea,#764ba2)', star:false },
    { n:8, score:9,  delta:-1,   color:'linear-gradient(135deg,#f6993f,#fdcb6e)', star:false },
    { n:9,  score:8,  delta:-1,   color:'linear-gradient(135deg,#f6993f,#fdcb6e)', star:false },
    { n:10, score:15, delta:+7,   color:'linear-gradient(135deg,#43e97b,#667eea)', star:true  },
    { n:'M1', label:'M1', score:14, delta:-1,   color:'linear-gradient(135deg,#4527A0,#7C3AED)', star:false },
    { n:11, score:13, delta:-1,   color:'linear-gradient(135deg,#00838F,#006064)', star:false },
    { n:12, score:10, delta:-3,   color:'linear-gradient(135deg,#1565C0,#0D47A1)', star:false },
    { n:13, score:9,  delta:-1,   color:'linear-gradient(135deg,#006064,#00838F)', star:false },
    { n:14, score:13, delta:+4,   color:'linear-gradient(135deg,#004D40,#00695C)', star:false },
    { n:15, score:15, delta:+2,   color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:true  },
    { n:16, score:15, delta:0,    color:'linear-gradient(135deg,#FFD700,#FFA500)',  star:true  },
    { n:17, score:10, delta:-5,   color:'linear-gradient(135deg,#1565C0,#0D47A1)',  star:false },
    { n:18, score:11, delta:+1,   color:'linear-gradient(135deg,#E65100,#F57C00)',  star:false },
    { n:19, score:11, delta:0,    color:'linear-gradient(135deg,#E65100,#F57C00)',  star:false },
    { n:20, score:11, delta:0,    color:'linear-gradient(135deg,#1565C0,#0D47A1)',  star:false },
    { n:'M2', label:'M2', score:12, delta:+1, color:'linear-gradient(135deg,#311B92,#512DA8)', star:false },
    { n:21, score:15, delta:+3,  color:'linear-gradient(135deg,#FFD700,#FFA500)',  star:true  },
    { n:22, score:7,  delta:-8,  color:'linear-gradient(135deg,#EF5350,#B71C1C)',  star:false },
    { n:23, score:8,  delta:+1,  color:'linear-gradient(135deg,#EF5350,#C62828)',  star:false },
    { n:24, score:9,  delta:+1,  color:'linear-gradient(135deg,#EF5350,#C62828)',  star:false },
    { n:25, score:12, delta:+3,  color:'linear-gradient(135deg,#43e97b,#38f9d7)',  star:false },
    { n:26, score:11, delta:-1,  color:'linear-gradient(135deg,#EF5350,#C62828)',  star:false },
    { n:27, score:11, delta:0,   color:'linear-gradient(135deg,#EF5350,#C62828)',  star:false },
    { n:28, score:13, delta:+2,  color:'linear-gradient(135deg,#43e97b,#38f9d7)',  star:false },
    { n:29, score:12, delta:-1,  color:'linear-gradient(135deg,#43e97b,#38f9d7)',  star:false },
    { n:30, score:11, delta:-1,  color:'linear-gradient(135deg,#EF5350,#C62828)',  star:false },
    { n:'M3', label:'M3', score:10, delta:-1, color:'linear-gradient(135deg,#4527A0,#7C3AED)', star:false },
    { n:31, score:13, delta:+3, color:'linear-gradient(135deg,#FBC02D,#F9A825)', star:false },
    { n:32, score:14, delta:+1, color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:false },
    { n:33, score:15, delta:+1, color:'linear-gradient(135deg,#FFD700,#FFA500)', star:true },
    { n:34, score:14, delta:-1, color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:false },
    { n:35, score:13, delta:-1, color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:false },
    { n:36, score:10, delta:-3, color:'linear-gradient(135deg,#EF5350,#C62828)', star:false },
    { n:37, score:12, delta:+2, color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:false },
    { n:38, score:14, delta:+2, color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:false },
    { n:39, score:12, delta:-2, color:'linear-gradient(135deg,#7E57C2,#4527A0)', star:false },
    { n:40, score:8,  delta:-4, color:'linear-gradient(135deg,#EF5350,#B71C1C)', star:false },
    { n:41, score:13, delta:+5, color:'linear-gradient(135deg,#00796B,#004D40)', star:false },
    { n:'M4', label:'M4', score:9, delta:-4, color:'linear-gradient(135deg,#0D47A1,#4A148C)', star:false },
    { n:42, score:7, delta:-2, color:'linear-gradient(135deg,#EF5350,#B71C1C)', star:false },
    { n:43, score:15, delta:+8, color:'linear-gradient(135deg,#FFD700,#FFA500)', star:true },
    { n:44, score:9.5, delta:-5.5, color:'linear-gradient(135deg,#EF5350,#B71C1C)', star:false },
    { n:45, score:13, delta:+3.5, color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:false },
    { n:46, score:13, delta:0,    color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:false },
    { n:47, score:11, delta:-2,   color:'linear-gradient(135deg,#EF5350,#C62828)', star:false },
    { n:48, score:14, delta:+3,   color:'linear-gradient(135deg,#43e97b,#38f9d7)', star:false },
    { n:49, score:11, delta:-3,   color:'linear-gradient(135deg,#0277BD,#01579B)', star:false },
    { n:50, score:8,  delta:-3,   color:'linear-gradient(135deg,#EF5350,#B71C1C)', star:false },
    { n:'M5', label:'M5', score:7, delta:-1, color:'linear-gradient(135deg,#0D47A1,#4A148C)', star:false },
    { n:51, score:7,  delta:0,    color:'linear-gradient(135deg,#EF5350,#B71C1C)', star:false },
    { n:52, score:9,  delta:+2,   color:'linear-gradient(135deg,#AD1457,#880E4F)', star:false },
    { n:53, score:11, delta:+2,   color:'linear-gradient(135deg,#F9A825,#F57F17)', star:false },
    { n:54, score:11, delta:0,    color:'linear-gradient(135deg,#EF5350,#C62828)', star:false },
    { n:55, score:14, delta:+3,   color:'linear-gradient(135deg,#6A1B9A,#4A148C)', star:false },
    { n:56, score:10, delta:-4,   color:'linear-gradient(135deg,#EF5350,#C62828)', star:false }
  ],

  // ── Unit log (newest first — renders Dashboard session log) ───────
  unitLog: [
    {
      n: 57,
      badge: 'linear-gradient(135deg,#4A148C,#38096B)',
      title: 'Art of Counting — Total Minus Bad: Multi-Case &amp; Zero-Edge (Brick 2 Retest)',
      tags: [
        { t:'Brick 2 redesigned as an interactive game, test ready', s:'background:#F3E8FF;color:#4A148C;font-weight:700' },
        { t:'Scope narrowed to Brick 2 only — targets U56 Q13', c:'torange' },
        { t:'Brick 3 deferred as an optional bonus (not tested)', c:'torange' },
        { t:'15 fresh Brick-2-only Qs, none reusing lesson/prior numbers', c:'tgreen' }
      ],
      note: 'Remediation unit, numbered U57 rather than a 4th U56 attempt, following project precedent (U40&rarr;U41, U49&rarr;U50, U47&rarr;U48, U44&rarr;U45). Brick 2 (multi-case bad &mdash; sum several bad cases together + the "fewer than needed = write 0" edge case, Counting_Lesson_MultiConstraint_Brick2.html) targets U56 3rd-attempt Q13 (marbles, not-all-same-colour). First built 20 Aug 2026 in the same worked-example format as Brick 1, but Lui reported it "too hard &amp; confusing" &mdash; hard enough that even an adult reading it cold couldn&rsquo;t follow it, a more serious signal than any prior lesson-difficulty note. Rebuilt 24 Aug 2026 from scratch as an interactive game ("Bag Sorting Challenge"): Prem sorts all 10 real handfuls of a small 5-counter jar by hand first (discovering the zero-edge case himself, since he never finds an all-blue card when only 2 blues exist), THEN meets the Choose-3 shortcut and sees it match what he just found, THEN plays through a bigger jar as 5 click-to-reveal scored rounds instead of one dense block, THEN predicts-before-reveals the zero-trap and the "not all same vs at least 1" discrimination, with a running &#11088; star score throughout. U57&rsquo;s scope is narrowed to Brick 2 only for this unit &mdash; Brick 3 (points-on-a-circle context + reverse-solving) is fully built and verified but deferred, linked from Brick 2&rsquo;s recap as an optional, not-tested bonus rather than folded into this unit. The test was rebuilt to match: 15 entirely fresh Brick-2-only questions (not-all-same-colour, zero-edge, double zero-edge, at-least-1 discrimination, a four-colour capstone generalisation, and a "read carefully" precision trap asking for BAD instead of GOOD), none reusing the lesson&rsquo;s or any prior test&rsquo;s numbers, plus the same 2 spiral-maintenance warm-ups (Balance Scales/Ratio Substitution; Rectangle Counting Any Grid). Awaiting Prem&rsquo;s attempt.',
      status: 'pending'
    },
    {
      n: 56,
      badge: 'linear-gradient(135deg,#EF5350,#C62828)',
      title: 'Art of Counting — Choose 3 &amp; Multi-Constraint Counting (Harder Tier)',
      tags: [
        { t:'10/15 (67%) &#10007; NOT PASSED (3rd attempt, up from 6/15)', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Brick 1 VALIDATED — 4/4 correct on content it taught', c:'tgreen' },
        { t:'Untaught content (Q10,12,13,15) left blank, not guessed', c:'tgreen' },
        { t:'Trajectory: 7 &rarr; 6 &rarr; 10', c:'torange' },
        { t:'&rarr; Bricks 2 &amp; 3 built as Unit 57', c:'torange' }
      ],
      note: '10/15 (67%) &#10007; <strong>NOT PASSED</strong>, but a big jump &mdash; Sec A 4/5, Sec B 4/5, Sec C 2/5. Prem&rsquo;s 3rd attempt at U56, taken after Lesson 2 was rebuilt as Brick 1 of 3. Trajectory across three attempts: 7&rarr;6&rarr;10. Total Minus Bad went from 0/8 (every question blank on the 2nd attempt) to 4/8 correct &mdash; and the split is exactly clean: every single-bad-case, people-context question Brick 1 taught (Q7, Q8, Q9, Q11 &mdash; a bigger-pool version of the same shape) was answered correctly, 4/4. Every question needing content Brick 1 never taught (Q10 &amp; Q12 need points-on-a-circle, Q13 needs multi-case bad, Q15 needs the reverse-capstone) was left blank, not guessed at &mdash; Prem correctly recognised unfamiliar territory rather than misapplying the method. New isolated miss: Q4 (11 hikers, choose 3) wrote 115 not 165, no working shown &mdash; reads as an arithmetic slip given every other Lesson-1 question was correct. &rarr; Following project precedent, the remaining remediation (Bricks 2 &amp; 3, targeting Q10/Q12/Q13/Q15) is built and numbered Unit 57 rather than a 4th U56 attempt.',
      status: 'done'
    },
    {
      n: 55,
      badge: 'linear-gradient(135deg,#2E7D32,#1B5E20)',
      title: 'Statistics &amp; Probability I — Chance As A Fraction (Basic)',
      tags: [
        { t:'14/15 (93%) &#10003; PASSED', s:'background:#f0fff4;color:#2f855a;font-weight:700' },
        { t:'Sec A 5/5 PERFECT &middot; Sec B 5/5 PERFECT &middot; Sec C 4/5', c:'tgreen' },
        { t:'1 miss: fraction-vs-count precision (mirrors U54 Q12)', c:'torange' },
        { t:'&rarr; U56 Art of Counting, harder tier', c:'torange' }
      ],
      note: '14/15 &#10003; <strong>PASSED</strong> &mdash; Sec A 5/5 PERFECT, Sec B 5/5 PERFECT, Sec C 4/5. Strongest score of the entire U54&ndash;U60 arc so far, and a clean debut for Statistics &amp; Probability &mdash; a topic launched from absolute zero just two days earlier. Favourable&divide;total, equally-likely outcomes, simplifying, and the "NOT" complement rule were all applied correctly across 13 of 15 questions on the very first probability test Prem has ever sat, including every intermediate-tier question and 4 of 5 hard/capstone questions. The single miss (Q12) is a precise mirror of U54&rsquo;s own Q12 slip, but in the opposite direction: U54 gave a count when a fraction was asked; U55 gave a fraction (3/10) when a whole-number count (3) was asked &mdash; now a confirmed 2-for-2 "fraction vs. count" precision pattern, not a one-off. The warm-up split as predicted: W1 (Vertically Opposite Angles, ~10 weeks stale) was wrong (122&deg; instead of 58&deg;, confusing vertically-opposite with adjacent/supplementary) &mdash; a clean, low-stakes confirmation the spiral-maintenance protocol is surfacing real decay before it costs real marks. W2 (HCF, ~11 weeks stale) was correct. No retest needed. Full breakdown in the Executive Summary.',
      status: 'done'
    },
    {
      n: 54,
      badge: 'linear-gradient(135deg,#EF5350,#C62828)',
      title: '3D Spatial Reasoning — Painted Cubes, Floor by Floor (new method)',
      tags: [
        { t:'11/15 (73%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Method WORKS — 11/12 pure-mechanics Qs correct', c:'tgreen' },
        { t:'4 misses: 1 coverage gap + 3 precision slips', c:'torange' },
        { t:'&rarr; U55 Statistics &amp; Probability I (new radar skill)', c:'torange' }
      ],
      note: '11/15 &#10007; <strong>NOT PASSED</strong> &mdash; Sec A 4/5, Sec B 4/5, Sec C 3/5. The genuinely new floor-by-floor method held up well: 11 of the 12 questions testing pure floor-by-floor mechanics were correct, including both hardest capstones (Q11&rsquo;s four-way count, Q15&rsquo;s reverse problem) &mdash; a real turnaround from U49/U50&rsquo;s across-the-board formula failures. Q5 (4&times;4&times;4, the first-ever two-middle-floor box, never demonstrated in the lesson) is a narrow coverage gap, not a method failure. Q6, Q12, and Q14 are three separate instances of the "finish the exact question" pattern the 10 Aug coaching review flagged as the root cause behind ASMOPSS 2026&rsquo;s Intermediate-tier collapse &mdash; recurring one test later even with the new standing infrastructure in place: Q6 abandoned blank despite solving a near-identical companion question (Q9) correctly minutes later; Q12 computed the correct raw count (34) but never converted it to the simplified fraction asked for; Q14 derived both correct intermediate values then multiplied instead of added them. The spiral-maintenance warm-up (Remainders, 6+ weeks stale) was answered correctly — no decay. Full breakdown in the Executive Summary.',
      status: 'done'
    },
    {
      n: 53,
      badge: 'linear-gradient(135deg,#F9A825,#F57F17)',
      title: 'Quick-Win Add-Ons — Circular Double-Repeats & Backward Combinations (Art of Counting)',
      tags: [
        { t:'11/15 (73%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Best score since U49 — clear upward trend', c:'tgreen' },
        { t:'Sec B 5/5 PERFECT — Combinations Backward locked', c:'tgreen' },
        { t:'&rarr; Real ASMOPSS 2026 exam, sat 9 Aug (50/100)', c:'torange' }
      ],
      note: '11/15 &#10007; <strong>NOT PASSED</strong>, but the best score since U49 (8&rarr;7&rarr;9&rarr;11 trend) &mdash; Sec A 4/5, Sec B 5/5 PERFECT, Sec C 2/5. Combinations Backward is fully secure: every appearance on the paper (7 questions across all 3 tiers) was correct, doubling step shown every time. Circular Double/Triple-Repeat is more solid than the score suggests &mdash; most misses were arithmetic-scale slips or abandoned big-number attempts on a correctly-identified method, not rule confusion, including Q13 where Prem correctly extended the 2-group rule to a never-taught 3-group case and only lost the answer to one mid-division slip. This was the final ASMOPSS-prep unit; the real exam followed the next day (9 Aug), scoring 50/100 &mdash; see Competitions/ASMOPSS/ for the full breakdown, answer key, and tier/strand dashboard. A full coaching-process review followed (10 Aug 2026); see coaching-rules memory and the U54 entry above.',
      status: 'done'
    },
    {
      n: 52,
      badge: 'linear-gradient(135deg,#AD1457,#880E4F)',
      title: 'Two-Skill Capstones — Chain What You Already Know (Reasoning)',
      tags: [
        { t:'9/15 (60%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 5/5 PERFECT — baton-pass method landed', c:'tgreen' },
        { t:'Sec C 1/5 — hardest tier still breaking down', c:'tred' },
        { t:'&rarr; U53 short quick-win add-ons (open-book caveat)', c:'torange' }
      ],
      note: '9/15 &#10007; <strong>NOT PASSED</strong> (improved from U51\'s 7/15) &mdash; Sec A 5/5 PERFECT, Sec B 3/5, Sec C 1/5. Section A was a clean sweep across all four baton-pass pairings plus an averages-addition variant. Section B held near the pass line, with one diagnosable slip (Q7 reused a stale digit-count) and one blank on a brand-new pairing (Q10). Section C broke down: Q11/Q12 ambiguous "?" marks (both reconciled as wrong), Q13 likely a copied question-number, Q14 used the wrong shortcut (66&divide;2 instead of solving n(n&minus;1)=132) &mdash; but Q15, the hardest question on the paper, was fully correct with clean working. Lui then revealed the test was open-book (lessons open during testing) and that Prem found the procedures too long &mdash; reframing Section A\'s sweep as reference-following under pressure, not necessarily full internalization. &rarr; U53, redesigned as short single-rule add-ons, recommended closed-book.',
      status: 'done'
    },
    {
      n: 51,
      badge: 'linear-gradient(135deg,#6A1B9A,#4A148C)',
      title: 'Pictogram/Table Clue-Puzzles &amp; Digit/Symbol Puzzles (Problem Solving &middot; Number Theory)',
      tags: [
        { t:'7/15 (47%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 3/5 — pictogram landed OK first exposure', c:'tgreen' },
        { t:'NEW: frustration reaction to ★★ notation (Q9)', c:'tred' },
        { t:'&rarr; U52 Two-Skill Capstones (no retest built)', c:'torange' }
      ],
      note: '7/15 &#10007; <strong>NOT PASSED</strong> &mdash; Sec A 3/5, Sec B 3/5, Sec C 1/5. Pictogram clue-puzzles landed reasonably on first exposure. Digit puzzles split: symbol/sum-difference solid, column-addition/repeated-digit not landing, with direct written feedback ("I don\'t understand UR solution for this," Q8). Q9 shows a visible frustration reaction to the &#9733;&#9733; notation ("don\'t use stars looks like this!!!", heavy scribbling) &mdash; distinct from U50\'s quiet self-doubt and M5\'s healthy "IDK" pattern. Section C then collapsed: Q11 clean, Q12 solved to the wrong final variable, Q13&ndash;15 all abandoned blank. Flagged to Lui rather than auto-retested (every section failed the bar, but 2 days remained and a frustration signal needed weighing first). Lui chose to proceed to U52 anyway.',
      status: 'done'
    },
    {
      n: 'M5',
      badge: 'linear-gradient(135deg,#0D47A1,#4A148C)',
      title: 'ASMOPSS-Style Cumulative Review (Units 42–50) — Diagnostic Benchmark',
      tags: [
        { t:'47/100 &mdash; Diagnostic benchmark', s:'background:#fff8e1;color:#8d6e00;font-weight:700' },
        { t:'Confidence session VALIDATED — zero overwrites', c:'tgreen' },
        { t:'Honest "IDK" over guessing/erasing', c:'tgreen' },
        { t:'Circular (n−1)! regressed again — light fix only', c:'torange' }
      ],
      note: '47/100 (Round 1 8/10 &middot; Round 2 6/10 &middot; Round 3 0/5) &mdash; built at Lui\'s request as a final cumulative check, 3 days before the real exam. The headline is genuinely good news: the U50 overwriting problem did NOT repeat anywhere across 25 questions &mdash; Q17 (painted-cube corners) was answered "ALWAYS 8" with a confident drawing, no hesitation. When Prem didn\'t know something, he wrote an honest "IDK" (Q12, Q18, Q19, Q21) instead of guessing or erasing &mdash; exactly the behaviour change the confidence session aimed for. Underneath: circular arrangements\' "subtract 1 first" rule (resolved at U43) slipped twice more (Q9, Q22), confirming a real, reproducible regression specific to long mixed-topic papers, not a re-opened content gap &mdash; needs a 30-second verbal reminder before Sunday, not a new lesson. Q18/Q19\'s blanks on previously-resolved content read as fatigue on a new, longer paper format. &rarr; U51, built directly off this result.',
      status: 'done'
    },
    {
      n: 50,
      badge: 'linear-gradient(135deg,#EF5350,#B71C1C)',
      title: 'Targeted Retest — Painted Cube Puzzles (Spatial Reasoning)',
      tags: [
        { t:'8/15 (53%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 5/5 — basics held', c:'tgreen' },
        { t:'NEW: overwriting correct answers (Q6, Q8)', c:'tred' },
        { t:'&rarr; Confidence Session (non-scored), then M5', c:'torange' }
      ],
      note: '8/15 &#10007; <strong>NOT PASSED</strong> &mdash; Sec A 5/5, Sec B 2/5, Sec C 1/5 (worse than U49\'s 2/5). Two separate problems: the edges/faces content gap is still not landing despite the new unifying-model re-teach (Prem wrote "confusing method" on Q7), and &mdash; more concerning &mdash; on Q6 and Q8 the working shows the FULLY CORRECT calculation, then Prem crossed it out and wrote something else. A self-doubt pattern, not a knowledge gap, and new this cycle. Flagged to Lui rather than auto-retested given 3 days to the exam and two different problems at play; Lui chose a non-scored Confidence Session over a third retest attempt. Confidence_Session_TrustYourFirstAnswer.html built and later validated at M5 (zero recurrence across 25 questions).',
      status: 'done'
    },
    {
      n: 49,
      badge: 'linear-gradient(135deg,#0277BD,#01579B)',
      title: '3D Visualization — Cube Counting, Filling &amp; Painting (Spatial Reasoning)',
      tags: [
        { t:'11/15 (73%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec B 5/5 PERFECT — footprints &amp; filling', c:'tgreen' },
        { t:'Sec C 2/5 — "too many methods to remember"', c:'tred' },
        { t:'&rarr; U50 targeted retest, Sec C only', c:'torange' }
      ],
      note: '11/15 &#10007; <strong>NOT PASSED</strong> &mdash; Sec A 4/5, Sec B 5/5 PERFECT, Sec C 2/5. Solid blocks and footprint/filling reasoning landed well, including the harder Sec B capstone. Sec A\'s lone miss (Q4) was a "forgot to double the second layer" slip inside otherwise correct working. Sec C is the real gap: corners (Q11) and hidden/0-faces (Q14) were both correct, but Q12 (edges), Q13 (faces), and the capstone Q15 were all left "forgot how 2 do." Prem told Lui directly why: too many separate solving methods to remember for the edge/face counts. &rarr; U50, a targeted retest of Section C re-taught with ONE unifying model instead of 4 separate formulas.',
      status: 'done'
    },
    {
      n: 48,
      badge: 'linear-gradient(135deg,#EF6C00,#E65100)',
      title: 'Targeted Retest — When The Average Changes (Arithmetic)',
      tags: [
        { t:'14/15 (93%) &#10003; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Sec A 5/5 + Sec B 5/5 — both perfect', c:'tgreen' },
        { t:'Sec C 4/5 — one multiplication slip', c:'torange' },
        { t:'Average-changes arc CLOSED', c:'tgreen' }
      ],
      note: '14/15 &#10003; <strong>PASSED</strong> &mdash; Sec A 5/5, Sec B 5/5, Sec C 4/5. Both top-up habits fully transferred: every question shows labelled BEFORE/AFTER totals before subtracting, and U47\'s exact failure modes (Q12 subtraction slip, Q13 tangled AFTER total) do not recur anywhere. The lone miss (Q11) is new and narrower: totals were labelled correctly, but 48&times;7 was hand-multiplied as 326 instead of 336 &mdash; a one-off multiplication slip, not a tracking-habit failure. &rarr; U49, resuming the original rotation with a prediction-driven final stretch (U49&ndash;U53 + 1 mock test) before the 9 Aug exam.',
      status: 'done'
    },
    {
      n: 47,
      badge: 'linear-gradient(135deg,#EF6C00,#E65100)',
      title: 'Reverse Averages &amp; Missing-Value Arithmetic (Arithmetic)',
      tags: [
        { t:'11/15 (73%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 4/5 + Sec B 4/5 — both pass', c:'tgreen' },
        { t:'Sec C 3/5 — before/after totals gap', c:'tred' },
        { t:'&rarr; U48 targeted retest, Sec C only', c:'torange' }
      ],
      note: '11/15 &#10007; <strong>NOT PASSED</strong> &mdash; Sec A 4/5, Sec B 4/5, Sec C 3/5. Sections A and B both individually clear the pass bar, and every miss in them is a clean arithmetic slip inside correctly-applied working (Q4: wrote 235, correct 225; Q9: wrote 82, correct 102). Section C is the real gap: Q12 computed both BEFORE and AFTER totals correctly but subtracted them wrong (wrote 14, correct 16) &mdash; a setup/labelling slip; Q13 went wrong a step earlier, computing the AFTER total itself incorrectly (wrote 13, correct 27) &mdash; a procedural error. The capstone Q15, mirroring the exact ASMOPSS 2023 Q12 pattern, was correct. &rarr; U48, a targeted retest of Section C only.',
      status: 'done'
    },
    {
      n: 46,
      badge: 'linear-gradient(135deg,#00796B,#004D40)',
      title: 'Constrained Listing &amp; Divisibility Arrangements (Art of Counting)',
      tags: [
        { t:'13/15 (87%) &#10003; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Sec B 8/8 PERFECT', c:'tgreen' },
        { t:'Sec A 5/7 — 2 untested variants', c:'torange' },
        { t:'Both ASMOPSS 2023 gaps closed', c:'tgreen' }
      ],
      note: '13/15 &#10003; <strong>PASSED</strong> &mdash; Sec A 5/7, Sec B 8/8 PERFECT. Divisibility Arrangements (Sec B) is fully mastered on first real exposure, including the trick capstone (Q15, correctly reasoned to 0). Constrained Listing (Sec A) held at 5/7 &mdash; both misses were untested variants, not a method breakdown: Q6 was the first 3-coin-type listing question (lesson only taught 2 coin types), Q4 was the first upper-bound-only rule with no "at least one of each" anchor (left blank). &rarr; Both Art of Counting gaps from the ASMOPSS 2023 diagnostic (Q19, Q25) now closed or substantially improved &mdash; no retest needed. &rarr; U47, resuming the original rotation.',
      status: 'done'
    },
    {
      n: 45,
      badge: 'linear-gradient(135deg,#3949AB,#1A237E)',
      title: 'Targeted Retest — Table Reading &amp; Discount/Profit (Word Problem Decoding)',
      tags: [
        { t:'13/15 (87%) &#10003; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Sec B 8/8 PERFECT', c:'tgreen' },
        { t:'Sec A 5/7 — 2 arithmetic slips', c:'torange' },
        { t:'Word-problem cluster CLOSED', c:'tgreen' }
      ],
      note: '13/15 &#10003; <strong>PASSED</strong> &mdash; Sec A 5/7, Sec B 8/8. Both new habits show real progress: "Finish Line Check" fixed the exact U44 Q15 failure (both multi-item capstones this time, Q14 &times;5 and Q15 &times;4, were correctly carried through to the final total); "Compare Before You Choose" also landed clean (both pack-optimization questions used the best per-unit rate). A narrower piece stayed partial: on three "state X, and by how much" questions (Q9, Q12, Q15), the right number was computed &mdash; visible in the working, sometimes circled &mdash; but not always carried onto the Answer line; only Q13 gave the complete two-part answer. Section A\'s two misses (Q1, Q6) were computation slips inside a correctly-applied method, not comparison failures. &rarr; The word-problem decoding cluster from the ASMOPSS 2023 diagnostic is now fully closed. &rarr; U46, resuming the original rotation.',
      status: 'done'
    },
    {
      n: 44,
      badge: 'linear-gradient(135deg,#EF5350,#B71C1C)',
      title: 'Word Problem Decoding — Clue Extraction, Tables &amp; Multi-Step Profit',
      tags: [
        { t:'9.5/15 (63%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 4/5 — clue identification landing', c:'tgreen' },
        { t:'Sec B 3.5/5 + Sec C 2/5 — chains not finished', c:'tred' },
        { t:'&rarr; U45 targeted retest, Sec B+C', c:'torange' }
      ],
      note: '9.5/15 &#10007; <strong>NOT PASSED</strong> &mdash; Sec A 4/5, Sec B 3.5/5, Sec C 2/5. The Clue Board\'s fact/option-identification half is landing well: Section A held at 4/5 (Q3\'s miss honestly flagged as unsolved, not guessed), and Section B\'s Q7 &amp; Q9 both name the CORRECT cheaper option even when the final number is off. The real signal is Q15: working shows the exact two-step markup-then-discount chain executed perfectly for one book (180&times;1.4=252, 252&times;0.75=189, matching the expected sub-calculation exactly), then simply stops &mdash; no &times;3 for the three books, no profit-check answer. A finishing/completeness gap, not a formula gap. Q8 is a narrower, separate miss: didn\'t compare combinations before picking one in a table-optimization question. Working was mostly skipped in Sections B/C, which likely compounded both. &rarr; U45, targeted retest of Sec B+C with two new habits built in.',
      status: 'done'
    },
    {
      n: 43,
      badge: 'linear-gradient(135deg,#FFD700,#FFA500)',
      title: 'Circular + Repeats — Targeted Retest (Efficient Factorial Building)',
      tags: [
        { t:'15/15 &#127775; PERFECT (verified)', s:'background:#fffde7;color:#F57F17;font-weight:700' },
        { t:'Sec B 5/5 — U42 collapse CLOSED', c:'tgreen' },
        { t:'Sec C 5/5 — full staircase to 8! solid', c:'tgreen' },
        { t:'Marked 14/15 — Q5 tick likely missed', c:'torange' }
      ],
      note: 'Marked 14/15 (93%), <strong>independently verified 15/15 &#127775; PERFECT</strong> — Q5 (answer 20, correct per the key) is missing its checkmark on the marked sheet, reading as a grading oversight rather than a Prem error. Both of U42\'s findings are fully closed: Section B (which collapsed to 1/5 with three literal "?" marks) came back flawless, including the two hardest questions (Q7=360, Q8=120) computed cleanly with no abandonment. Section C (the full staircase to 8!=40,320) also 5/5 — Q15\'s capstone shows a complete, correct staircase reusing values already built for Q12&ndash;14, plus a self-caught correction on Q10 (crossed out an initial attempt before writing the final answer). The staircase technique fully transferred and even generalised beyond what was explicitly drilled. &rarr; U44, resuming the original rotation.',
      status: 'done'
    },
    {
      n: 42,
      badge: 'linear-gradient(135deg,#EF5350,#B71C1C)',
      title: 'Circular Order &amp; High Repeats · Fencepost Spacing (Boundary Adjustment)',
      tags: [
        { t:'7/15 (47%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec C (new topic) BEST: 3/5', c:'tgreen' },
        { t:'Sec B collapsed: 1/5 — big numbers, not concept', c:'tred' },
        { t:'&rarr; U43 targeted retest, Sec B only', c:'torange' }
      ],
      note: '7/15 &#10007; <strong>NOT PASSED</strong> &mdash; Sec A 3/5, Sec B 1/5, Sec C 3/5. The real story: Section C, a brand-new topic taught from zero this unit, actually did BEST — the boundary-adjustment habit U42 was built to instil is genuinely landing (Q15 shows Prem drawing 9 dots around a loop to correctly work out a statue count before attempting the harder arrangement math). Section B is what collapsed, and it\'s a computation-scale problem, not a conceptual one: three of its five questions (Q7, Q8, Q10) needed 8!=40,320 computed by hand and were abandoned outright with a literal "?" on the page, while the one question with a smaller base (n=7&rarr;6!=720) was solved cleanly. Q4 is a separate, narrower slip: fully correct long division shown, but the wrong digit was transcribed onto the answer line. &rarr; U43 fixes the arithmetic-execution gap directly, then retests Section B only.',
      status: 'done'
    },
    {
      n: 'M4',
      badge: 'linear-gradient(135deg,#0D47A1,#4A148C)',
      title: 'ASMOPSS-Style Cumulative Review (Units 31–41)',
      tags: [
        { t:'57.5/100 &mdash; Diagnostic benchmark', s:'background:#fff8e1;color:#8d6e00;font-weight:700' },
        { t:'Rounds 1&ndash;2: 15/20 solid', c:'tgreen' },
        { t:'NEW: circular (n−1)! slipping', c:'tred' },
        { t:'r=4 divisor gap CONFIRMED still open', c:'torange' }
      ],
      note: '57.5/100 (Round 1 8/10 &middot; Round 2 7/10 &middot; Round 3 1/5) &mdash; first milestone in the new ASMOPSS-style format. Rounds 1&ndash;2 held up well across 11 units of cumulative review with zero re-teaching. Round 3 is where the signal is: NEW finding &mdash; Q7 &amp; Q13 both used n! instead of (n&minus;1)! for circular arrangements (U40&rsquo;s plain-circular Qs were both correct three days earlier). The r=4 divisor gap from U41 is confirmed still open: Q22 directly stress-tested it and Prem abandoned it after an arithmetic slip. Q21&rsquo;s marking is flagged as ambiguous (page shows a circled "0" but the working matches the key exactly — counted correct here; 51.5/100 either way doesn&rsquo;t change the diagnosis). Cross-checked the same day against the ASMOPSS 2023 past paper (12/25) &mdash; the circular gap and the paper&rsquo;s Q17 fencepost miss turned out to be the same root "boundary adjustment" habit. &rarr; U42.',
      status: 'done'
    },
    {
      n: 41,
      badge: 'linear-gradient(135deg,#00796B,#004D40)',
      title: 'Permutations with Repeats — Targeted Retest (Art of Counting)',
      tags: [
        { t:'13/15 (87%) &#10003; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Sec A 5/5 + Sec B 5/5 ✦ PERFECT', c:'tgreen' },
        { t:'Sec C 3/5 — new r=4 divisor gap', c:'torange' },
        { t:'One-question-behind pattern CLOSED', c:'tgreen' }
      ],
      note: '13/15 &#10003; <strong>PASSED</strong>. Sec B (the exact skill that scored 0/5 on U40) came back a perfect 5/5 &mdash; the precision top-up lesson (arrangements &ne; unique letters, check-before-you-write habit) fully resolved the one-question-behind answer-shifting pattern. Sec C 3/5: Q14 (TENNESSEE, E&times;4) and Q15 (3-group beads) both missed for the same new reason &mdash; divided by the repeat COUNT instead of its FACTORIAL (r=4 had never been drilled in either lesson). Method and structure were correct throughout; only one substituted value was wrong. &rarr; Milestone M4, with a light stress-test of the r=4 gap folded in.',
      status: 'done'
    },
    {
      n: 40,
      badge: 'linear-gradient(135deg,#4527A0,#00796B)',
      title: 'Chaining Two Clues (Algebra) &amp; Arrangements: Repeats &amp; Circles (Art of Counting)',
      tags: [
        { t:'8/15 (53%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 4/5 + Sec C 4/5 — both pass', c:'tgreen' },
        { t:'Sec B 0/5 — one-question-behind pattern', c:'tred' },
        { t:'&rarr; U41 targeted retest, Sec B only', c:'torange' }
      ],
      note: '8/15 &#10007; <strong>NOT PASSED</strong> &mdash; the rebuilt Chaining lesson (Unit 21 equation method) worked: Sec A 4/5, with the lone miss (Q3) a "wrong variable reported" precision slip, not a chaining failure. Circular arrangements landed well first-exposure at 4/5. Section B (Repeats) is the story: Q7&ndash;Q9 each show the PRECEDING question&rsquo;s correct answer with matching correct working &mdash; the formula was applied right, just recorded one question late, three times running. Q6 (unique-letter count instead of arrangements) may be what triggered it. Drove U41: a targeted Section-B-only retest with a precision-focused top-up lesson, not a full re-teach.',
      status: 'done'
    },
    {
      n: 39,
      badge: 'linear-gradient(135deg,#4527A0,#7E57C2)',
      title: 'Balance Scales: Ratios &amp; Substitution Chains (Algebraic Thinking)',
      tags: [
        { t:'12/15 (80%) &#10003; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Sec A 5/5 + Sec B 5/5', c:'tgreen' },
        { t:'Sec C 2/5 — chain breaks under pressure', c:'tred' },
        { t:'Q13-15: illegible/incomplete working', c:'torange' }
      ],
      note: '12/15 &#10003; <strong>PASSED</strong> &mdash; Sections A and B a clean 10/10 (cancelling to a ratio, then ratio&rarr;real weight, across ten fruit pairs). Section C splits in two: Q11 &amp; Q12 (Clue 1 given outright, just substitute) both correct, incl. genuine multi-line algebra on Q12. Q13&ndash;Q15 (derive Clue 1 by cancelling FIRST, then chain into a second clue) all came back illegible or incomplete &mdash; the first real test of combining two mastered skills in one question, and it broke down under the old fixed 2-row working space. Directly drove two new standing rules: the U40 chain warm-up, and the 3-empty-row spacing rule.',
      status: 'done'
    },
    {
      n: 38,
      badge: 'linear-gradient(135deg,#43e97b,#38f9d7)',
      title: 'Distributing Identical Items (Stars and Bars) &amp; Listing: Three Coins',
      tags: [
        { t:'14/15 (93%) &#10003; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Both NEW topics — near-perfect first try', c:'tgreen' },
        { t:'Distribute 6/7 + Listing 7/7', c:'tgreen' },
        { t:'Q12: 2-vs-3-group mix-up', c:'torange' }
      ],
      note: '14/15 &#10003; <strong>PASSED</strong> &mdash; strongest score of the current run, and BOTH topics were brand new (not a retest). Every distributing question (Q1, Q3, Q4, Q5, Q11, Q15) and every 3-variable listing question (Q6&ndash;Q10, Q13, Q14) came back correct, including a coin-set never seen in the lessons (2¢/3¢/5¢, Q14) and the hardest Section C numbers (n=20&rarr;171). Second confirming case for the interactive-visual blueprint (first for a retest at U37, now for genuinely new material). Lone miss Q12: applied the 3-group "choose 2 gaps" formula to a plain 2-group problem (15 sweets, 2 jars), getting 91 instead of 14 &mdash; a "count the groups first" formula-discrimination slip, not a gap in either method.',
      status: 'done'
    },
    {
      n: 37,
      badge: 'linear-gradient(135deg,#43e97b,#38f9d7)',
      title: 'Rectangle Counting Retest &amp; Listing: Answer Extraction',
      tags: [
        { t:'12/15 (80%) &#10003; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Interactive-visual redesign WORKED', c:'tgreen' },
        { t:'Listing Sec B 5/5 &#10003;', c:'tgreen' },
        { t:'New: 3-coin listing + squares tally', c:'torange' }
      ],
      note: '12/15 &#10003; <strong>PASSED</strong> &mdash; targeted retest cleared after U36\'s 10/15 fail. Both lessons were rebuilt with click-to-explore interactive visuals (tap a rectangle size to see every spot it fits; live-rebuilding listing tables; toggle grids for order-matters vs not) &mdash; this is the direct before/after evidence for the new coaching rule (see Interactive-Visual Blueprint). Rectangle-counting solid across 4 grid shapes (Q1, Q3, Q4, Q5, Q11); Listing Section B came back a perfect 5/5. Two new, narrower slips: Q2 correct working (3×10=30) but wrote 19 on the line (transcription only); Q13 (first-ever 3-coin listing, he asked to be taught the method) and Q15 (squares-tally miscounted by one category) are both a step harder than anything U36 tested, not repeats of the old gap.',
      status: 'done'
    },
    {
      n: 36,
      badge: 'linear-gradient(135deg,#EF5350,#C62828)',
      title: 'Figure Counting &amp; Systematic Listing',
      tags: [
        { t:'10/15 (67%) &#10007; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Squares SOLID (Q1, Q3 ✓)', c:'tgreen' },
        { t:'Rectangles — asymmetric grids ✗', c:'tred' },
        { t:'Listing — answer-extraction slips ✗', c:'tred' }
      ],
      note: '10/15 &#10007; <strong>NOT PASSED</strong> — first fail since U31, steepest drop of the ASMOPSS arc (15&rarr;14&rarr;13&rarr;10). Squares are solid (Q1, Q3 both correct) but rectangles broke down on asymmetric/composite grids: Q4 (2×3 grid, gave 19 not 18), Q5 (1×5 strip, gave 13 not 15), Q15 ("NOT squares", gave 48 not 70) — every Section A working column was left BLANK. Two Section B misses were answer-extraction slips, not listing failures: Q6 listed the digit-sum-5 numbers perfectly then wrote the LAST value (50) instead of the COUNT (5); Q9 used a full arrangement (5!=120) instead of the choose-2 pairs method (10) — a skill already locked at U32. Section C (hardest ★★ mix) was his best section, 4/5. → U37 targeted retest: rectangle-counting generalisation + listing answer-extraction, no full unit repeat.',
      status: 'done'
    },
    {
      n: 35,
      badge: 'linear-gradient(135deg,#4527A0,#7E57C2)',
      title: 'Logic &amp; Deduction — Grids &amp; Balance Scales',
      tags: [
        { t:'13/15 (87%) &#10003; PASSED — CLOSED-BOOK', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'"IDK" freeze CLOSED — 0 freezes', c:'tgreen' },
        { t:'Balance scales 5/5 ✦ strength', c:'tgreen' },
        { t:'Q1 careless · Q15 wording', c:'torange' }
      ],
      note: '13/15 &#10003; <strong>PASSED CLOSED-BOOK</strong> — the 2025-paper "IDK" freeze is CLOSED. Built for the two questions Prem froze on (Mastermind grid Q13, balance-scale Q18); on U35 he made a <strong>structured first move on every question</strong> (grids, order columns, balance chains, trade diagrams, see-saw sketches) and wrote <strong>zero "IDK"s</strong>. Balance scales a strength: Sec B 5/5 ✦ + Q13 (transitivity, multi-step trades, see-saw compare). The hard double-negative grid Q11 solved cleanly. Two misses, both old habits not logic: Q1 (easiest grid — gave Yo-Yo not Ball, a rushed first-question slip) and Q15 (5 balls — right concept "the unweighed ball is heavier" but answered "the middle" instead of "the one left off the scale"). → U36 figure counting + systematic listing.',
      status: 'done'
    },
    {
      n: 34,
      badge: 'linear-gradient(135deg,#00695C,#00897B)',
      title: 'Number Theory — Remainders &amp; Digit Problems',
      tags: [
        { t:'14/15 (93%) &#10003; PASSED — CLOSED-BOOK', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Remainders 7/7 across the test', c:'tgreen' },
        { t:'NT cluster CLOSED (U33+U34)', c:'tgreen' },
        { t:'Q13: range/completeness slip', c:'torange' }
      ],
      note: '14/15 &#10003; <strong>PASSED CLOSED-BOOK</strong> — number-theory cluster now closed across two units (U33 15/15 + U34 14/15). <strong>Remainders 7/7 across the whole test</strong> (Sec A 5/5 + Q11 + Q15), every two-clue puzzle by systematic listing — the exact 2025 Q21 gap (he had 64, answer 16) closed. Digit sums 5/5. Only miss Q13 "how many from 1–50 have digit sum 7?": gave 4 (16,25,34,43), <strong>missed the single-digit 7</strong> — a range/completeness slip (method was perfect for the 2-digit ones; he started at the tens). Same family as U29 Q13 "list ALL" and the M3 precision misses. One-line habit: "check the FULL range — count single-digit numbers when it starts below 10."',
      status: 'done'
    },
    {
      n: 33,
      badge: 'linear-gradient(135deg,#FFD700,#FFA500)',
      title: 'Number Theory — Factorials &amp; The Last Digit Trick',
      tags: [
        { t:'15/15 (100%) &#127775; PERFECT — CLOSED-BOOK', s:'background:#fffde7;color:#F57F17;font-weight:700' },
        { t:'Sec A 5/5 + B 5/5 + C 5/5', c:'tgreen' },
        { t:'7! &amp; 8! never taught — method mastered', c:'tgreen' },
        { t:'Highest-return ASMOPSS gap CLOSED', c:'tgreen' }
      ],
      note: '15/15 &#127775; <strong>PERFECT, CLOSED-BOOK</strong> — first perfect of the ASMOPSS arc, and the biggest 2025-paper gap (factorials Q22, last-digits Q11) is now CLOSED. <strong>Sec A used 7! and 8!, never taught</strong> (lessons stopped at 6!) — he computed them from the rule (8!=8×5040=40320), proving METHOD not memorisation. Sec B 5/5 incl. the ×0→0 trap and 9³; Sec C 5/5 incl. power-cycles (2,4,8,6 / 4,6) and the three-term 6!+5!−4!. Watch-point (light): self-corrected 3 +/− wobbles in multi-term factorials (Q5, Q12, Q14) — finals all right, but reading the exact operation under time is the standing habit to drill.',
      status: 'done'
    },
    {
      n: 32,
      badge: 'linear-gradient(135deg,#43e97b,#38f9d7)',
      title: 'Counting — The Two Moves (Multiply &amp; Pairs) · simplified re-do',
      tags: [
        { t:'14/15 (93%) &#10003; PASSED — CLOSED-BOOK', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Sec A 5/5 + Sec B 5/5', c:'tgreen' },
        { t:'Overload fixed', c:'tgreen' }
      ],
      note: '14/15 &#10003; <strong>PASSED CLOSED-BOOK</strong> — big jump from the open-book U31. The simplified "one decision (does order matter?) + 2 moves" approach fixed the overload, validating the fresh/one-idea-at-a-time ground rule. Sec A 5/5 (incl. Q4 1st&2nd=12, the over-multiply type), Sec B 5/5 (pairs halved right). Only miss: Q11 (1st&2nd of 6 — worked out 30, then wrongly halved to 15). One tiny reminder fixes it. Counting core = his.',
      status: 'done'
    },
    {
      n: 31,
      badge: 'linear-gradient(135deg,#FBC02D,#F9A825)',
      title: 'Art of Counting II &middot; Pairs, Disguises &amp; Figures (ASMOPSS prep)',
      tags: [
        { t:'13/15 — OPEN-BOOK (2nd round)', s:'background:#fff8e1;color:#8d6e00;font-weight:700' },
        { t:'1st round: confused A&amp;B', c:'torange' },
        { t:'"too many concepts"', c:'torange' }
      ],
      note: '13/15 but <strong>2nd attempt with lessons OPEN</strong> — not a clean measure. 1st (closed-book) round: confused on Sec A &amp; B; Prem said "too many concepts to remember." The 2 lessons carried ~8 moves at once → overload. Even open-book, 2 misses were wrong-move (Q4 60≠30 over-multiplied; Q14 36≠32 over-applied ÷2). Good news within it: lines/games/diagonals ÷2 came right (incl. self-correcting "I forgot ÷2"). Fix: U32 re-does counting with ONE decision + 2 moves only, from zero.',
      status: 'done'
    },
    {
      n: 'M3',
      badge: 'linear-gradient(135deg,#4527A0,#7C3AED)',
      title: 'Milestone 03 &middot; Units 21–30 (ISA + Kangaroo)',
      tags: [
        { t:'14/20 (70%)', s:'background:#f3e9ff;color:#4527A0;font-weight:700' },
        { t:'ISA 10/15', c:'torange' },
        { t:'<strong>Kangaroo 4/5 ✦ Applied strength</strong>', s:'background:#f0fff4;color:#276749;font-weight:700' }
      ],
      note: 'M3 = 14/20. <strong>Kangaroo 4/5 — applied reasoning is now a confirmed strength</strong>: reverse handshakes (old M2 gap solved), units-digit cycle, snail/rate, counting squares all ✓; only Q19 ✗ (gave 33, not the smallest 13). ISA 10/15 dipped on careless + retention slips under a long mixed paper: Q4 two-term blank, Q5 which-piece (gave border), Q6 cost arithmetic, Q11 ÷6 (said No), Q12 not-smallest. Concepts hold in units; precision/retention slip under mixed pressure — exactly what ASMOPSS timed practice hardens.',
      status: 'done'
    },
    {
      n: 30,
      badge: 'linear-gradient(135deg,#6A1B9A,#1565C0)',
      title: 'Art of Counting &middot; Sequences: Two-Term Novel Pairs',
      tags: [
        { t:'11/15 (73%) &#10145; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'<strong>Sec C 5/5 &mdash; Sequences CLOSED</strong>', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Art of Counting 6/10', c:'torange' }
      ],
      note: '11/15 &mdash; below bar, but <strong>Section C closes the last arc gap: sequences two-term NOVEL pairs 5/5</strong> (was 0/3 at U25), each coefficient derived fresh with T<sub>p</sub>=a+(p&minus;1)d. Art of Counting (new) 6/10: the &divide;2-for-pairs is unstable in disguise &mdash; halved for "handshakes"/"pair" (Q6, Q10 &#10003;) but not "lines"/"games" (Q7, Q8 &#10007;); diagonals (Q9) and repeats-multiply (Q2) slipped. Lui: proceed to M3, develop Art of Counting in cycle 4 (U31+).',
      status: 'done'
    },
    {
      n: 29,
      badge: 'linear-gradient(135deg,#43e97b,#38f9d7)',
      title: 'Divisibility Rules &middot; Divisibility in Problems',
      tags: [
        { t:'12/15 (80%) &#10003; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'<strong>Sec A 5/5 + Sec B 5/5</strong>', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Divisibility 12/13 &#10003;', c:'tgreen' },
        { t:'Sec C: 2 blank maintenance Qs', c:'torange' }
      ],
      note: '12/15 (80%) &#10003; PASSED. <strong>Divisibility mastered in one unit</strong> &mdash; A 5/5, B 5/5, plus Q11 &amp; Q12 = 12/13 on pure divisibility. Both lessons worked. The Sec C drop is the two off-topic maintenance Qs (Q14 Path &amp; Frame, Q15 even-count): Prem left both BLANK and wrote "is this the right topic?" &mdash; he can do them, he just didn&rsquo;t think they belonged. <strong>Rule set (Lui): unit tests now 100% on their own lessons, no maintenance/review &mdash; retention only at milestones.</strong> Lone real gap: Q13 "list ALL" completeness (gave 0,4,8; missed 2,6).',
      status: 'done'
    },
    {
      n: 28,
      badge: 'linear-gradient(135deg,#43e97b,#38f9d7)',
      title: 'Path &amp; Frame Final Re-test &middot; Consecutive Even Counts',
      tags: [
        { t:'13/15 (87%) &#11014; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Sec A 4/5 &#10003; GATE CLEARED', c:'tgreen' },
        { t:'<strong>Sec B 5/5 even-count</strong>', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Path &amp; Frame CLOSED &#10003;', c:'tgreen' }
      ],
      note: '13/15 (87%) &#10003; PASSED &mdash; first pass since U25. <strong>Path &amp; Frame CLOSED</strong>: Sec A 4/5, gate cleared on the 3rd attempt. Which-piece fixed (Q3 ring correct; Q2 took the middle). <strong>Even-count n-method MASTERED 6/6</strong> (Sec B 5/5 + Q12) &mdash; from 0/2 at U27 in one lesson. The two misses are careless only: Q2 subtracted 6 not 4 (2&times;width slip), Q14 cost &times;price multiply slipped. &rarr; U29 new topic (Divisibility) with light maintenance + desk checklist.',
      status: 'done'
    },
    {
      n: 27,
      badge: 'linear-gradient(135deg,#EF5350,#C62828)',
      title: 'Path &amp; Frame Re-test &middot; Consecutive Integers',
      tags: [
        { t:'11/15 (73%) &#10145; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 3/5 &#10007; (which-piece + cost)', c:'torange' },
        { t:'Direction FIXED &#10003;', c:'tgreen' },
        { t:'Odd-count middle trick 7/7 &#10003;', c:'tgreen' }
      ],
      note: 'U27: 11/15. Sec A Path &amp; Frame 3/5 &mdash; gate still open, BUT direction concept now fixed (every shrink correct; Q5 inside+cost perfect). The two A-misses changed: Q3 gave the border when asked for the carpet (right maths, wrong piece), Q4 cost arithmetic (204&times;180 not 276&times;150). Consecutive: odd-count middle trick LOCKED 7/7 incl. all compounds; both misses (Q8 "I still don&rsquo;t know", Q13 listing) are the even-count four-number method. &rarr; U28 closes which-piece + even-count.',
      status: 'done'
    },
    {
      n: 26,
      badge: 'linear-gradient(135deg,#EF5350,#C62828)',
      title: 'Consolidation &middot; Path &amp; Frame &middot; SimEq &middot; Ratio Transfer',
      tags: [
        { t:'11/15 (73%) &#10145; NOT PASSED', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 3/5 &#10007; (below 4/5)', c:'torange' },
        { t:'Sec B 4/5 &#10003;', c:'tgreen' },
        { t:'Sec C 4/5 &#10003;', c:'tgreen' }
      ],
      note: 'U26: 11/15 &mdash; Section A (Path &amp; Frame) 3/5 fails the 4/5 per-section bar; B (SimEq) and C (Ratio Transfer) both 4/5 &#10003;. Every standard-form Q correct; the 4 misses are all extra-step / direction-flip variants: Q4 border INSIDE (subtract), Q5 cost extension, Q10 multiply-first SimEq (apple blank), Q14 addition ratio (blank). Big win: SimEq (M2 Q7 blank) &amp; Ratio Transfer (M2 Q12 blank) both closed &mdash; 4/5 each in fresh contexts. Path &amp; Frame direction is the lone holdout &rarr; U27 Section A re-test.',
      status: 'done'
    },
    {
      n: 25,
      badge: 'linear-gradient(135deg,#43e97b,#38f9d7)',
      title: 'Sequences &middot; +1 Rule Lock &middot; Two-Term Harder',
      tags: [
        { t:'12/15 (80%) &#11014; PASSED', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'<strong>Sec B 5/5 PERFECT</strong>', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Find n 3/3 &#10003;', c:'tgreen' },
        { t:'Back-calc fixed &#10003;', c:'tgreen' },
        { t:'Q12 Q13 novel pairs &#10007;', c:'torange' }
      ],
      note: '12/15 (80%) &#127775; PASSED &mdash; sequences arc closed (7&rarr;8&rarr;9&rarr;12). Sec B 5/5: Find n 3/3 with +1 rule, Q9 trap avoided, Q10 &#10003;. Back-calc T&#8321; fixed (Q3+Q14). Zero listing &mdash; first time ever. Misses: Q5 (no working), Q12/Q13 (novel two-term pairs T&#8323;+T&#8326;, T&#8324;+T&#8327;; trained T&#8323;+T&#8325; 2/2 &#10003;). Pocket Map credited. Daily coefficient drills + M3 re-check.',
      status: 'done'
    },
    {
      n: 24,
      badge: 'linear-gradient(135deg,#EF5350,#C62828)',
      title: 'Sequences &middot; Gap-Thinking Method &middot; Two-Term',
      tags: [
        { t:'9/15 (60%) &#10145;', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 4/5', c:'torange' },
        { t:'<strong>Q10 Find n &#10003; BREAKTHROUGH</strong>', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Q11 off-by-1 &#10007;', c:'torange' },
        { t:'Q13 Q14 Q15 &#10007;', c:'torange' }
      ],
      note: '9/15 (60%) &mdash; Sec A 4/5 (Q3 decreasing slip). <strong>Q10 &#10003; BREAKTHROUGH</strong>: first correct Find n in 3 attempts &mdash; Gap Method (75&minus;3)&divide;6+1=13 &#10003;. Q11 &#10007; forgot +1 (got T&#8321;&#8326; not T&#8321;&#8327;). Q9 &#10007; inequality off-by-one. Q12 &#10003; simple two-term (a=15). Q13 &#10007; T&#8323;+T&#8326; wrong coefficient. Q14 &#10007; used a+4d not a+3d. Q15 &#10007; &ldquo;Idk a??? why&rdquo;. Formula still not written. U25 continues sequences.',
      status: 'done'
    },
    {
      n: 23,
      badge: 'linear-gradient(135deg,#EF5350,#C62828)',
      title: 'Sequences Formula &middot; All Question Types',
      tags: [
        { t:'8/15 (53%) &#10145;', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 4/5', c:'tgreen' },
        { t:'Q10 Q11 blank &#10007;', c:'torange' },
        { t:'Gap method &#10003;', c:'tgreen' }
      ],
      note: '8/15 (53%) &mdash; Sec A 4/5: Q4 counting error (123 not 113). Sec B: Q6 Q7 Q8 Q9 &#10003; (gap method types solid). Q10 Q11 blank (find n: &ldquo;don&rsquo;t understand formula!!!&rdquo; self-note). Q12 &#10007; wrong setup. Q13 Q14 Q15 blank. U24 uses gap-thinking approach (Distance&divide;d+1) bridging from Prem&rsquo;s strength.',
      status: 'done'
    },
    {
      n: 22,
      badge: 'linear-gradient(135deg,#EF5350,#B71C1C)',
      title: 'Sequences Formula &middot; Deep Drill',
      tags: [
        { t:'7/15 (47%) &#10007;', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'Sec A 5/5 &#10003;', c:'tgreen' },
        { t:'Find n blank &#10007;', c:'torange' },
        { t:'Two-term listing &#10007;', c:'torange' }
      ],
      note: '7/15 (47%) — Sec A 5/5 direct formula solid. Sec B: Q8 Q9 inequality &#10003;. Q6 Q7 Q13 T&#8321; miscalc (jump-count error). Q10 Q11 blank — find n concept never seen. Q12 Q15 listing fallback — two-term algebra not known. Q14 inequality from given term wrong. U23 targets all gaps.',
      status: 'done'
    },
    {
      n: 21,
      badge: 'linear-gradient(135deg,#FFD700,#FFA500)',
      title: 'Equation Solving &middot; Variables on Both Sides',
      tags: [
        { t:'15/15 &#127775; PERFECT', s:'background:#fffde7;color:#F57F17;font-weight:700' },
        { t:'Sec A 5/5 &#10003;', c:'tgreen' },
        { t:'Sec B 10/10 &#10003;', c:'tgreen' },
        { t:'Full method shown &#10003;', c:'tgreen' }
      ],
      note: '15/15 &#127775; PERFECT &mdash; first perfect on a fundamental gap unit. Sec A 5/5: bracket expansion correct (Q4 2n+12=26 &#10003;, Q5 5(n&minus;1)=20 &#10003;). Sec B 10/10: all variables-on-both-sides solved with full working &mdash; n-terms left, numbers right, divide. Q15 &#9733;&#9733; (bracket+both-sides): 5n&minus;15=3n+13 &rarr; 2n=28 &#10003;. Genuine method, not guessing. Mastery standard: PASSED.',
      status: 'done'
    },
    {
      n: 'M2',
      badge: 'linear-gradient(135deg,#311B92,#512DA8)',
      title: 'Milestone 02 &mdash; Cumulative Review Units 11&ndash;20',
      tags: [
        { t:'12/15 ISA &#127775;', c:'tgreen' },
        { t:'Kangaroo 4/5 &#127775; BREAKTHROUGH', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Q2 Frame &#10007;', c:'torange' },
        { t:'Q7 SimEq blank &#10007;', c:'torange' },
        { t:'Q12 Ratio Transfer blank &#10007;', c:'torange' }
      ],
      note: 'Milestone 02 &mdash; Units 11&ndash;20. ISA 12/15 (80%): strengths HCF/LCM, Sequences, Bar Model, Angles. Gaps: Path&amp;Frame direction re-emerged (Q2), SimEq skipped (Q7), Ratio Transfer blank (Q12). Kangaroo 4/5 &#127775; &mdash; Applied Problems radar breakthrough: bumped to 72. Q17 handshakes &#10007; used factorials not C(n,2). Applied Problems: 4/5 threshold crossed. U21: equation solving both sides.',
      status: 'done'
    },
    {
      n: 20,
      badge: 'linear-gradient(135deg,#1565C0,#0D47A1)',
      title: 'Vertically Opposite Angles &middot; Advanced Angle Algebra',
      tags: [
        { t:'11/15 &#10145;', c:'torange' },
        { t:'Basic Angles 10/10 &#10003;', c:'tgreen' },
        { t:'Q13 Q14 Q15 blank &#10007;', s:'background:#fff5f5;color:#c53030' }
      ],
      note: 'Sec A 5/5: vert-opp rule firing (Q2 &#10003; 63/117 both pairs). Sec B: Q6&ndash;Q8 &#10003; Q10&ndash;Q11 &#10003;. Q9 &#10007; supplementary pair wrong (42&#176; not 132&#176;). Q12 &#10007; arithmetic slip (118&#176; not 108&#176;, working correct). Q13 Q14 Q15 blank &mdash; all require variables on both sides of equation. Core algebraic gap confirmed. U21: equation solving fundamentals.',
      status: 'done'
    },
    {
      n: 19,
      badge: 'linear-gradient(135deg,#E65100,#F57C00)',
      title: 'Sequences Final &middot; Angles',
      tags: [
        { t:'11/15 &#10145;', c:'torange' },
        { t:'Sequences 5/5 &#127775;', c:'tgreen' },
        { t:'Angles 6/10', c:'torange' },
        { t:'Q9 Q13 Q14 Q15 blank &#10007;', s:'background:#fff5f5;color:#c53030' }
      ],
      note: 'Sec A Sequences 5/5 &#127775; PERFECT &mdash; all 3 U18 gaps closed (inequality rounding &#10003;, two-conditions &#10003;, jump-count &#10003;). Sec B Angles debut: Q6&ndash;Q8 &#10003;, Q10&ndash;Q12 &#10003;. Q9 blank (vert-opp basic &mdash; rule not firing). Q13 blank (vert-opp + algebra). Q14 started but abandoned (quad algebra, setup visible). Q15 blank (isosceles + algebra). U20: vert-opp drill + advanced angle algebra.',
      status: 'done'
    },
    {
      n: 18,
      badge: 'linear-gradient(135deg,#E65100,#F57C00)',
      title: 'Sequences Jump Drill &middot; Ratio Advanced (Before &amp; After)',
      tags: [
        { t:'11/15 &#11014;', c:'torange' },
        { t:'Sequences 3/5', c:'torange' },
        { t:'Seq Challenge 3/5', c:'torange' },
        { t:'Ratio Advanced 5/5 &#127775;', c:'tgreen' }
      ],
      note: 'Sec A 3/5: Q4 jump-count error (divided by 5 pos instead of 4 gaps). Q5 off-by-one on inequality rounding (n&gt;8.5 &rarr; rounded to 8 not 9). Sec B 3/5: Q6 arithmetic slip on T&#8322;&#8320; (method correct, d correct). Q10 blank &mdash; two-conditions 2a+36=54 type not attempted. Sec C Ratio Advanced 5/5 &#127775; PERFECT &mdash; complete turnaround from U17 Q15 blank: ages &#10003;, transfer &#10003; (Q15). Ratio fully mastered. U19: inequality rounding + two-conditions + Angles debut.',
      status: 'done'
    },
    {
      n: 17,
      badge: 'linear-gradient(135deg,#1565C0,#0D47A1)',
      title: 'Sequences Formula &middot; Ratio &amp; Proportion',
      tags: [
        { t:'10/15 &#11015;', c:'torange' },
        { t:'Sequences 4/5', c:'torange' },
        { t:'Mixed 3/5', c:'torange' },
        { t:'Ratio 3/5', c:'torange' }
      ],
      note: 'New topic dip (expected). Sequences: formula still not used under pressure; Q5 &#10007; jump-count error (&#247;2 not &#247;3); Q6 &#10007; listed 16 steps and got 99 (correct 105) &mdash; exactly why formula matters. Ratio debut solid: Q9&ndash;Q14 all correct including Type C give-and-equal and remove-items. Q15&#9733;&#9733; ages ratio-change left blank. U18: jump-drill + ratio-change ages.',
      status: 'done'
    },
    {
      n: 16,
      badge: 'linear-gradient(135deg,#FFD700,#FFA500)',
      title: 'Bar Model Algebra &middot; SimEq Two-Variable &middot; Sequences',
      tags: [
        { t:'15/15 &#127775;', c:'tgreen' },
        { t:'Bar Model 5/5 &#127775;', c:'tgreen' },
        { t:'SimEq 5/5 &#127775;', c:'tpurple' },
        { t:'Sequences 5/5 &#9888;', c:'torange' }
      ],
      note: '3rd perfect score in programme. Sec A: bar model word problems 5/5, multi-condition algebra &#10003;. Sec B: SimEq equation method confirmed solid &mdash; all 5 by bracket expansion, no guessing. Sec C: 5/5 &#10003; BUT all solved by listing terms manually, not using formula. Prem left note to coach: &ldquo;Don&rsquo;t understand the formula, so I just list it down.&rdquo; U17 Lesson 1 = formula rebuild.',
      status: 'done'
    },
    {
      n: 15,
      badge: 'linear-gradient(135deg,#43e97b,#38f9d7)',
      title: 'Geometry: Frame Trap &middot; Art of Counting: Kangaroo Count &middot; Number Theory: HCF Three-Item',
      tags: [
        { t:'15/15 &#127775; PERFECT', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Frame Trap 5/5 &#10003;', c:'tgreen' },
        { t:'Kangaroo 5/5 &#10003;', c:'tgreen' },
        { t:'HCF Three-Item 5/5 &#10003;', c:'tgreen' }
      ],
      note: '2nd perfect score &mdash; first since U10. Sec A Frame Trap 5/5: 4-consecutive-miss streak broken. Frame-given-outer variant locked after dedicated visual lesson. Q5&#9733;&#9733; correct (832 cm&sup2;; minor slip 836 self-corrected). Sec B Kangaroo Count 5/5: units digit period-4 cycle &#10003;. Staircase Fibonacci &#10003; (M1 Q19 6! error resolved). Consecutive integers &#10003;. Sec C HCF Three-Item 5/5: Q11&ndash;Q14 &#10003;. Q15&#9733;&#9733; &#10003; &mdash; U14 Q9&#9733; abandoned blank fully resolved.',
      status: 'done'
    },
    {
      n: 14,
      badge: 'linear-gradient(135deg,#004D40,#00695C)',
      title: 'Geometry: Path &amp; Frame Visual Method &middot; HCF Applied &middot; SimEq Extended',
      tags: [
        { t:'13/15 &#11014;', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Path&amp;Frame 4/5 &#10003;', c:'tgreen' },
        { t:'Q3 frame &#10007; (3rd)', c:'torange' },
        { t:'HCF 4/5 &#10003;', c:'tgreen' },
        { t:'SimEq 5/5 &#127775;', c:'tgreen' }
      ],
      note: 'Visual draw-first method: PathFrame jumped 1/5&#8594;4/5. Q3 frame still wrong &mdash; outer/inner trap persists for 3rd unit: given outer 40&times;28 cm, 4 cm border, student added outward (correct: outer 1120, inner 640, frame=480). Q6 HCF rope blank (36 m+48 m, HCF=12 m) &mdash; likely attention skip, all other HCF correct. SimEq Extended 5/5 PERFECT including Q15&#9733;&#9733; three-person problem (Ben=40).',
      status: 'done'
    },
    {
      n: 13,
      badge: 'linear-gradient(135deg,#006064,#00838F)',
      title: 'Geometry: Path &amp; Frame Intensive &middot; LCM Scheduling &middot; Simultaneous Equations Intro',
      tags: [
        { t:'9/15 &#11015;', s:'background:#fff3cd;color:#856404;font-weight:700' },
        { t:'Path&amp;Frame 1/5 &#10007;', s:'background:#fff5f5;color:#c53030;font-weight:700' },
        { t:'LCM 4/5 &#10003;', c:'tgreen' },
        { t:'SimEq 4/5 &#10003;', c:'tgreen' }
      ],
      note: 'Path &amp; Frame still 1/5 despite intensive drill: Q1 inner path wrong formula chain (got 372, correct 153). Q3 reversed outer/inner &mdash; treated given outer dims 26&times;20 as inner, added border to get 312 (correct 240). Q4 used &times;3 not &times;2 &mdash; subtracted 3m three times instead of twice, got (20&minus;9)&sup2;=121 (correct path=204). Q5 blank. Only Q2 outer concrete correct. LCM scheduling solid 4/5 &mdash; Q7 only miss: three-bus LCM gave 1400 (2 PM) instead of 8:00 AM. SimEq debut strong 4/5 &mdash; Q13 only miss: gave notebook price $2.60 instead of book $6.60.',
      status: 'done'
    },
    {
      n: 12,
      badge: 'linear-gradient(135deg,#1565C0,#0D47A1)',
      title: 'HCF &amp; LCM &middot; Path &amp; Frame Problems &middot; Multi-Step Word Problems',
      tags: [
        { t:'10/15', s:'background:#fff3cd;color:#856404;font-weight:700' },
        { t:'HCF&amp;LCM 4/5', c:'tgreen' },
        { t:'Path formula 2/5 &#10007;', c:'torange' },
        { t:'Q4 blank &#10007;', c:'torange' },
        { t:'Q15 blank &#10007;', c:'torange' }
      ],
      note: 'Path formula still misfiring: Q6 inner area &#10007; (subtracted width once per side &rarr; 21 instead of 72), Q7 inside path &#10007; (used outside formula &rarr; 46 instead of 68), Q9 outside path &#10007; (added width once &rarr; 126 instead of 270). Q10&#9733; outside path &#10003; (750 &#10003;). Two blanks: Q4 HCF word problem and Q15&#9733;&#9733; ratio+cost. HCF&amp;LCM pure computation solid (Q1&ndash;Q3 &#10003;, Q5 LCM buses &#10003;). Sec C structured multi-step strong: Q11&ndash;Q14 all &#10003; including Q14&#9733; fraction remaining.',
      status: 'done'
    },
    {
      n: 11,
      badge: 'linear-gradient(135deg,#00838F,#006064)',
      title: 'Geometry: Perimeter &amp; Area &middot; Both-Ends All Types &middot; Patterns &amp; Sequences',
      tags: [
        { t:'13/15', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Both-Ends 5/5 &#10003;', c:'tgreen' },
        { t:'Patterns 4/5', c:'tgreen' },
        { t:'Q14 find-1st-term &#10007;', c:'torange' },
        { t:'Q5 outside path &#10007;', c:'torange' }
      ],
      note: 'Both-Ends all types locked: Q7 either-end &#10003; (was M1 miss &mdash; now automatic). Q10 2&times;7!=10&thinsp;080 &#10003; (full 7! computed). Patterns 4/5: Q11&ndash;Q13 &#10003;, Q15&#9733; &#10003;. Q14&#10007; find 1st term: wrote 2 &mdash; T&#8321;=41&minus;5&times;8=1 (subtracted from 42 not 41). Geometry 4/5: Q1&ndash;Q4 all clean. Q5&#9733; outside path &#10007; &mdash; used 32&times;22=704 instead of 34&times;24=816 (added path width once per side only). Rule to cement: outside path &rarr; each dimension gets +2&times;path width.',
      status: 'done'
    },
    {
      n: 'M1',
      badge: 'linear-gradient(135deg,#4527A0,#7C3AED)',
      title: 'Milestone Test 1 &middot; Units 1&ndash;10 Comprehensive Review',
      tags: [
        { t:'14/15 ISA &#9733;', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Q7 slip (Both-Ends &times;2)', c:'torange' },
        { t:'2/5 Kangaroo', s:'background:#EDE7F6;color:#4527A0' },
        { t:'Applied: developing', s:'background:#EDE7F6;color:#4527A0' }
      ],
      note: 'ISA 14/15: Sec A 5/5 &#10003; (prime fact solid, trigger firing every Q), Sec C 5/5 &#10003; (Q15&#9733; $280 &#10003;). Sec B 4/5 &mdash; Q7 &#10007; Both-Ends 1-person: wrote 4!=24, forgot &times;2 (same regression from U8; got it right 3&times; in U10). Kangaroo 2/5: Q16 &#10003; (digit puzzle, verified 74&minus;47=27), Q17 &#10003; (grid squares, drew and counted). Q18 &#10007; blank (tried listing 16&ndash;20=90, no algebraic shortcut). Q19 &#10007; used 6! (staircase paths &#8800; permutation). Q20 &#10007; blank (units digit cycle not known).',
      status: 'done'
    },
    {
      n: 10,
      badge: 'linear-gradient(135deg,#43e97b,#667eea)',
      title: 'Prime Fact Recipe &middot; Both-Ends Fixed &middot; Fraction Direction Two-Step',
      tags: [
        { t:'15/15 &#127775; PERFECT', s:'background:#f0fff4;color:#276749;font-weight:700' },
        { t:'Prime Fact 5/5 &#10003;', c:'tgreen' },
        { t:'Both-Ends 5/5 &#10003;', c:'tgreen' },
        { t:'Fraction Dir 5/5 &#10003;', c:'tgreen' }
      ],
      note: 'First perfect score. Sec A: 5/5 &mdash; prime fact trigger finally fired after 5 blank units; factor trees drawn on every Q. Sec B: 5/5 &mdash; &times;2 swap rule applied on all both-ends formats including fixed ends (Q8, Q9, Q10). Sec C: 5/5 &mdash; Q12 two-step fraction correct (was wrong in U9). Q15 &#9733; hard two-step correct (kept 1/2, 112&times;2=224).',
      status: 'done'
    },
    {
      n: 9,
      badge: 'linear-gradient(135deg,#9B59B6,#6C3483)',
      title: 'Pre-Scan Protocol &middot; Ratio Basics &middot; Fraction Direction &amp; Both-Ends',
      tags: [
        { t:'8/15 &#11015;', c:'torange' },
        { t:'Prime Fact 1/5 &#128683;', s:'background:#fff5f5;color:#c53030' },
        { t:'Ratio 4/5 &#11014;', c:'tgreen' },
        { t:'Mixed 3/5', c:'torange' }
      ],
      note: 'Sec A: 1/5 &mdash; Q1/Q2/Q4/Q5 blank (trigger still not firing, 5th unit, pre-scan box on page &mdash; ignored). Q3 &#10003; (factor count 16). Sec B: 4/5 &mdash; Ratio first exposure strong. Q8 wrong = slip (halved 1-part twice). Sec C: 3/5 &mdash; Q11 &#10003; fraction dir. Q12 &#10007; two-step fraction (96 wrong, correct 56). Q13 &#10003; both-ends either. Q14 &#10007; both-ends fixed (forgot &times;2). Q15 &#10003; work-backwards.',
      status: 'done'
    },
    {
      n: 8,
      badge: 'linear-gradient(135deg,#f6993f,#f59e0b)',
      title: 'Prime Fact Reflex &middot; Factor Enumeration &middot; Double-Constraint Perms',
      tags: [
        { t:'9/15 &#11015;', c:'torange' },
        { t:'Prime Fact 0/5 &#128683;', s:'background:#fff5f5;color:#c53030' },
        { t:'Perms 4/5', c:'tpurple' },
        { t:'Algebra 3/5', c:'torange' }
      ],
      note: 'Sec A: 2/5 &mdash; Q1 blank (trigger still not firing, 4th unit). Q2/Q3 blank. Q4/Q5 correct (factor pairs + enumeration FIXED). Sec B: 4/5 &mdash; Q7 wrong (both-ends logic + 6! missed). Sec C: 3/5 &mdash; Q13 fraction reversal (&frac23; gap), Q14 blank (ratio not taught).',
      status: 'done'
    },
    {
      n: 7,
      badge: 'linear-gradient(135deg,#667eea,#764ba2)',
      title: 'Prime Factorisation Standalone &middot; Fix &amp; Remove &middot; Algebra',
      tags: [
        { t:'10/15 &#11015;', c:'torange' },
        { t:'Prime Fact 1/5', s:'background:#fff0f0;color:#c53030' },
        { t:'Fix&amp;Remove 4/5', c:'tpurple' },
        { t:'Algebra 5/5 &#127775;', c:'tpurple' }
      ],
      note: 'Q1/Q2/Q3 blank (trigger not firing). Q4 correct (84 &#10003;). Q5 incomplete (missed factor 40). Fix &amp; Remove 4/5. Algebra 5/5 perfect.',
      status: 'done'
    },
    {
      n: 6,
      badge: 'linear-gradient(135deg,#43e97b,#38f9d7)',
      title: 'Partial Permutations &middot; Prime Factorisation &middot; Algebra',
      tags: [
        { t:'12/15 &#11014;', c:'tgreen' },
        { t:'Partial Perms 4/5', c:'tpurple' },
        { t:'Prime Fact 3/5', c:'torange' },
        { t:'Algebra 5/5 &#127775;', c:'tpurple' }
      ],
      note: 'Partial perms fixed (2/5&#8594;4/5). Factor tree trigger gap persists (Q6/Q7 blank, Q8&ndash;Q10 correct). All 3 challenge Qs correct.',
      status: 'done'
    },
    {
      n: 5,
      badge: 'linear-gradient(135deg,#f6993f,#fdcb6e)',
      title: 'Factorials &amp; Permutations &middot; LCM &middot; Algebraic Thinking',
      tags: [
        { t:'9/15', c:'torange' },
        { t:'Factorial 2/5', s:'background:#fff5f5;color:#c53030' },
        { t:'LCM 3/5', c:'torange' },
        { t:'Algebra 4/5', c:'tgreen' }
      ],
      note: 'Partial permutations not grasped &mdash; full n! on all Qs. Q7 &amp; Q8 blank.',
      status: 'done'
    },
    {
      n: 4,
      badge: '#667eea',
      title: 'Counting (positions fix) &middot; Algebra (work backwards) &middot; Fractions',
      tags: [
        { t:'14/15 &#127775;', c:'tpurple' },
        { t:'Algebra 5/5', c:'tpurple' },
        { t:'Arith 5/5', c:'tgreen' }
      ],
      note: 'Q5 miss = direct bridge to factorial (3&times;2&times;1)',
      status: 'done'
    },
    {
      n: 3,
      badge: '#f6993f',
      title: 'Algebra &middot; Arithmetic &middot; Counting (deeper)',
      tags: [
        { t:'9/15', c:'torange' },
        { t:'Arith: 0 slips', c:'tgreen' },
        { t:'Counting: 1/5', s:'background:#fff5f5;color:#c53030' }
      ],
      note: 'Counting drop = positions vs options misconception (fixed in U4)',
      status: 'done'
    },
    {
      n: 2,
      badge: '#43e97b',
      title: 'Algebra &middot; Arithmetic &middot; Counting',
      tags: [
        { t:'12/15 &#11014;', c:'tgreen' },
        { t:'Algebra 5/5 &#127775;', c:'tpurple' }
      ],
      note: 'Keyword underlining habit adopted &mdash; Q7 &amp; Q9 both correct',
      status: 'done'
    },
    {
      n: 1,
      badge: '#a0aec0',
      title: 'Counting &middot; Arithmetic &middot; Number Theory',
      tags: [
        { t:'6/15', c:'tgreen' },
        { t:'Both challenges &#10003;', c:'tpurple' }
      ],
      note: 'LCM blank. Factorial not yet known. Strong on challenge logic.',
      status: 'done'
    }
  ],

  // ── Priority gaps (rendered in Overview + Results) ────────────────
  priorityGaps: [
    {
      label:     'Path & Frame — RESOLVED in U28 (CLOSED after 3-test slump)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U28 Sec A 4/5 &mdash; gate cleared. Direction fixed, which-piece fixed (Q3 ring &#10003;; Q2 took the middle), cost shown correct (Q4, Q5). The lone Sec A miss (Q2 384 vs 468) was a 2&times;width slip (subtracted 6 not 4), not conceptual. The three-test Path &amp; Frame wall (M2&rarr;U26&rarr;U27) is down.',
      fillClass: 'gs', fillPct: 90
    },
    {
      label:     'Consecutive Integers — RESOLVED (odd + even both locked)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'Odd-count middle trick LOCKED 7/7 (U27, all compounds). Even-count n-method MASTERED 6/6 (U28 Sec B 5/5 + Q12) &mdash; from 0/2 to perfect in one lesson. Whole topic closed.',
      fillClass: 'gs', fillPct: 92
    },
    {
      label:     'Cost-multiply / arithmetic care — MONITOR (careless, not conceptual)',
      pill:      'p2', pillText: 'Monitor &#128992;',
      score:     'Two U28 misses were careless steps inside correct methods: Q14 the &times;price multiply slipped (฿24,500 vs ฿39,600), Q2 the 2&times;width subtraction (&minus;6 not &minus;4). No concept gap. Fix = 60-second desk checklist (area &times; exact price; border width w &rarr; subtract 2w) + 1&ndash;2 maintenance Qs per test, not a lesson.',
      fillClass: 'g2', fillPct: 75
    },
    {
      label:     'Number Theory: Divisibility — STRONG (U29); tidy "list ALL" completeness',
      pill:      'ps', pillText: 'Strong &#10003;',
      score:     'U29: A 5/5, B 5/5, plus Q11 &amp; Q12 = 12/13 on pure divisibility. Rules (2,3,4,5,6,9,10), missing-digit, largest/smallest, "by both" all landed. Only tidy-up: Q13 "list ALL digits" &mdash; gave 0,4,8, missed 2,6 (enumerate every candidate systematically). 5-min drill, not a lesson.',
      fillClass: 'gs', fillPct: 90
    },
    {
      label:     'Sequences: Two-Term NOVEL Pairs — RESOLVED at U30 (last arc gap closed)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U30 Section C 5/5 across five all-novel pairs (T&#8322;+T&#8325;, T&#8323;+T&#8327;, T&#8322;+T&#8326;, T&#8324;+T&#8328;, T&#8323;+T&#8326;). Each coefficient derived fresh with T<sub>p</sub>=a+(p&minus;1)d &mdash; no memorised-chunk errors. The gap that opened the sequences arc (0/3 at U25) is closed. M3 confirms.',
      fillClass: 'gs', fillPct: 92
    },
    {
      label:     'Counting core (multiply + pairs ÷2) — RESOLVED at U32 (closed-book)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U32 14/15 PASSED closed-book after the simplified 2-move re-do (was open-book/overloaded at U31). Multiply 5/5, pairs ÷2 5/5. Lone miss Q11: "1st & 2nd of 6" — worked out 30 then wrongly halved to 15. Tiny standing reminder: "1st & 2nd / a row → multiply, never halve". Deferred (later simple unit): diagonals, figure-counting, repeats.',
      fillClass: 'gs', fillPct: 88
    },
    {
      label:     'Number Theory: factorials + last-digits — RESOLVED at U33 (PERFECT, method mastered)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U33 15/15 closed-book — the biggest 2025-paper gap (factorials Q22, last-digits Q11) is closed. <strong>Sec A used 7! &amp; 8!, never taught</strong>, computed from the rule (8!=8×5040=40320) — method, not memorisation. Last-digit trick solid across products, the ×0→0 trap, and power-cycles (2,4,8,6 / 4,6). Watch lightly: reading the exact +/− in multi-term factorials (3 self-corrected wobbles, all finals right).',
      fillClass: 'gs', fillPct: 92
    },
    {
      label:     'Number Theory: remainders + digit problems — RESOLVED at U34',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U34 14/15 closed-book. <strong>Remainders 7/7 across the test</strong> (the 2025 Q21 gap — he had 64, answer 16 — closed) by the systematic-list method; digit sums 5/5. The number-theory cluster is now closed across two units (U33 15/15 + U34 14/15). Lone slip Q13 (1–50 digit sum 7 → gave 4, missed the single-digit 7): a range/completeness habit, not a method gap.',
      fillClass: 'gs', fillPct: 90
    },
    {
      label:     'Logic &amp; Deduction (grids, balance scales) — RESOLVED at U35 (the "IDK" freeze is CLOSED)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U35 13/15 closed-book. The two 2025 freezes (Mastermind grid Q13, balance-scale Q18) are gone: Prem made a <strong>structured first move on every question</strong> and wrote <strong>zero "IDK"s</strong>. Balance scales a strength (Sec B 5/5 ✦ + Q13). Hard double-negative grid Q11 solved cleanly. The 2 misses were old habits, not logic: Q1 rushed-first-question slip, Q15 wording ("the middle" vs "the one off the scale").',
      fillClass: 'gs', fillPct: 88
    },
    {
      label:     'Rectangle-counting (any grid) + Listing answer-extraction — RESOLVED at U37',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U37 12/15 PASSED — the U36 fail is closed. Rectangle-counting solid across 4 different grid shapes (Q1, Q3, Q4, Q5, Q11); listing Section B came back a perfect 5/5. Interactive-visual lessons (tap-to-explore widgets) are credited for the jump — now the standing blueprint for teaching any brand-new concept. Lone repeat-family slip: Q2 had correct working but the wrong number was copied to the answer line (transcription only).',
      fillClass: 'gs', fillPct: 90
    },
    {
      label:     'Three-value listing (e.g. 3 coin denominations) — RESOLVED at U38 (7/7)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U38 Section B + the two Section C listing Qs: 7/7 on 3-variable coin-ways listing, including a coin-set (2¢/3¢/5¢, Q14) never shown in the lessons. The block-by-block table method (sweep the biggest value, solve the leftover with the familiar 2-value method, add every block) fully generalised on first real exposure — the U37 Q13 gap is closed.',
      fillClass: 'gs', fillPct: 92
    },
    {
      label:     'Counting multiple sizes precisely (e.g. squares-by-size tally) — MONITOR',
      pill:      'p2', pillText: 'Monitor &#128992;',
      score:     'U37 Q15: correctly reused the "total &minus; squares" strategy but under-counted the squares tally by one category (39 instead of 40) on a bigger grid with more sizes to track. Not a method gap — a precision habit (tally each size in its own row before adding). Light watch-point, not a full lesson.',
      fillClass: 'g2', fillPct: 65
    },
    {
      label:     'Distributing identical items ("stars and bars") — RESOLVED at U38 (6/7)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'Flagged independently by the ASMOPSS 2024 past-paper diagnostic (Q25: 8 sweets to 6 friends, scored 224 vs correct 21 — a completely different method, consistent with never having seen the topic). U38 L1\'s "stars and gaps" picture (restricted to 2&ndash;3 groups, reusing the choose-2 move) landed 6/7 on first real exposure — Q1, Q2, Q3, Q4, Q5, Q11, Q15 all correct. The one miss (Q12) was a formula-discrimination slip, not a gap in the method — see the new "count the groups first" entry below.',
      fillClass: 'gs', fillPct: 88
    },
    {
      label:     'Chaining two mastered skills in ONE question — RESOLVED at U40 (Sec A 4/5)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U39 Section C had scored 0/3 on deriving-then-chaining. U40 rebuilt the skill as a full standalone lesson around the Unit 21 equation method (sort matching letters to one side, substitute, multiply back) &mdash; Sec A came back 4/5, with Q1, Q2, Q4 (multiply-back), Q5 (hardest chain) all clean. The lone miss (Q3) was a "wrong variable reported" precision slip with fully correct working, not a chaining breakdown. The equation-method rebuild is credited and the chaining gap is closed.',
      fillClass: 'gs', fillPct: 85
    },
    {
      label:     'Permutations with Repeats — "one question behind" tracking slip — RESOLVED at U41 (Sec B 5/5 ✦)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U40 Section B scored 0/5 with a clear pattern: Q7, Q8, Q9 each showed the PRECEDING question&rsquo;s correct value, with working that computed the previous word&rsquo;s factorial correctly, just recorded one question late. A precision top-up lesson (Counting_Lesson_RepeatsPrecisionRetest.html) targeted exactly this via a matching-game habit drill and an interactive "arrangements &ne; unique letters" contrast widget. U41 Section B came back a PERFECT 5/5 &mdash; zero instances of the shift pattern, zero unique-letter confusion. Fully closed.',
      fillClass: 'gs', fillPct: 92
    },
    {
      label:     'Permutations with Repeats — dividing by r instead of r! at r=4 — ACTIVE (confirmed still open at M4; U42 targets it)',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'First flagged at U41 (Q14 TENNESSEE, Q15 9-beads) &mdash; both missed by dividing by the raw repeat COUNT instead of its FACTORIAL (4 instead of 4!=24). M4 Q22 directly stress-tested it again: Prem abandoned the question after an arithmetic slip rather than guess, confirming the gap has NOT closed through informal exposure alone. Every repeat group handled before U41 was r=2 or r=3 (both drilled and memorised); r=4 has never had a dedicated worked example. U42 Lesson 1 fixes this directly with a full r=4 deep-dive (building 4!=24 explicitly next to 2!=2, 3!=6) plus a combined circular+r=4 capstone.',
      fillClass: 'g2', fillPct: 60
    },
    {
      label:     'Hand-computing large factorials (8!, 9!) under pressure — RESOLVED at U43',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U42 Section B collapsed to 1/5 on this exact issue (Q7, Q8, Q10 all literal "?" marks, needing 8!=40,320 by hand). U43\'s staircase lesson ("build UP from the last factorial, never restart from scratch") plus a paced retest (only 1 of 15 questions at n=9/8!-scale) fixed it completely: Sec B and Sec C both came back 5/5, including every 7!/8!-scale question (Q7, Q12, Q13, Q14, Q15). Prem even reused his own staircase values across questions (Q12&rsquo;s 5,040 reused in Q13, Q14, Q15) &mdash; the technique generalised beyond what was explicitly drilled.',
      fillClass: 'gs', fillPct: 92
    },
    {
      label:     '"Trust your own working" — answer line doesn\'t match own correct working — RESOLVED at U43',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U42 Q4: the long division for 5040÷6 is completely correct on the page (48, remainder 24, 24÷6=4, remainder 0) but the final answer written was 860, not 840 &mdash; a transcription slip, not a division error. U43 folded in an explicit "copy your last working line onto the answer line" checklist step. Q10\'s working shows the habit taking hold and then some &mdash; a self-caught correction (crossed out an initial attempt before writing the final, correct answer) rather than just a passive copy-check.',
      fillClass: 'gs', fillPct: 90
    },
    {
      label:     'Circular arrangements — "subtract 1 first" slipping — RESOLVED at U43',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'M4 Q7 &amp; Q13 both used n! instead of (n&minus;1)! for circular arrangements under mixed-review pressure, and the ASMOPSS 2023 paper showed the same root "boundary adjustment" habit in a different topic (Q17, fencepost). U42\'s Lesson 1 addressed it directly, and U43\'s full 15/15 (independently verified) confirms it held under a dedicated retest &mdash; every one of the 15 questions correctly applied (n&minus;1)! before dividing by repeats, with zero n!-instead-of-(n&minus;1)! slips anywhere.',
      fillClass: 'gs', fillPct: 92
    },
    {
      label:     'ASMOPSS 2023 diagnostic (12/25) — word-problem clue extraction &amp; systematic listing RESOLVED (U44/U45, U46); reverse averages RESOLVED (U47+U48); 3D visualization IN PROGRESS (U49 NOT PASSED &rarr; U50 targeted retest)',
      pill:      'p2', pillText: 'In Progress &#9654;',
      score:     'Analysed 14 Jul 2026 alongside M4. Weakest cluster: word-problem clue extraction (Q6, Q9, Q10 &mdash; table-reading, age-chain, discount/profit, 2/6 correct) &rarr; U44 (9.5/15, 63%, NOT PASSED) &rarr; U45 targeted retest of Sec B+C (13/15, 87%, PASSED) &mdash; cluster CLOSED. Systematic listing &amp; constrained counting (ASMOPSS Q19, Q25) &rarr; U46 (13/15, 87%, PASSED) &mdash; CLOSED. Clean untaught content gap: reverse-engineering an average (Q12, blank) &rarr; U47 (11/15, 73%, NOT PASSED, Sec C only) &rarr; U48 targeted retest of Sec C (14/15, 93%, PASSED) &mdash; arc CLOSED. Spatial reasoning is inconsistent in a useful way: cube-filling/footprints are fine but painted-cube classification (edges/faces) broke down &rarr; U49 (11/15, 73%, NOT PASSED: Sec A 4/5, Sec B 5/5 PERFECT, Sec C 2/5) &mdash; Prem directly flagged the cause: "too many solving methods to remember" for the edge/face counts &rarr; U50 targeted retest of Section C only, re-taught with ONE unifying model (corner/edge/face/inside as the 4 physical parts of a box) instead of 4 separate formulas.',
      fillClass: 'g2', fillPct: 74
    },
    {
      label:     '2026 exam prediction — final-week plan built from 2023–2025 real ASMOPSS papers; revised four times as results came in, now U53 with 1–2 days left',
      pill:      'p2', pillText: 'In Progress &#9654;',
      score:     'Analysed 31 Jul 2026. Read all three real ASMOPSS G4 Set-B papers (2023, 2024, 2025) and catalogued all 75 questions by topic. Original plan: U49 3D Visualization, U50 Digit &amp; Symbol Puzzles, U51 Pictogram Clue-Puzzles, U52 Composite Area, U53 Precision Drill, +1 mock test. <strong>Revised 2 Aug</strong> after U49 Sec C NOT PASSED: U50 became a targeted Painted Cube retest. <strong>Revised 6 Aug</strong> after U50\'s retest also NOT PASSED (plus a confidence issue) and Lui requested diagnostic Milestone M5: U51 combined both remaining puzzle topics into one final exam-prep unit, with nothing planned after it. <strong>Revised again 7 Aug</strong> after U51 also came back NOT PASSED (7/15, plus a new frustration signal at Q9): Lui chose to proceed with U52 anyway, a meta-skill lesson (two-skill capstones) built off M4/M5\'s Round-3 finding. <strong>Revised a fourth time, still 7 Aug</strong>, after U52 (9/15, improved but NOT PASSED) and after Lui revealed U51&ndash;U52 were both open-book and that Prem found the procedures too long: U53 abandons the "full new procedure" format entirely in favour of two short single-rule add-ons bolted onto already-fast skills, targeting U52\'s two diagnosable Section C misses, recommended closed-book.',
      fillClass: 'g2', fillPct: 88
    },
    {
      label:     'Painted-cube 3D spatial reasoning — floor-by-floor method WORKS (U54 11/12 pure-mechanics Qs correct); remaining gap is precision, not method',
      pill:      'p2', pillText: 'In Progress &#9654;',
      score:     'U49 Sec C 2/5 &rarr; U50 retest WORSE (Sec C 1/5, "confusing method") &rarr; real exam Q23 also wrong &mdash; two same-framing formula attempts had failed. U54\'s genuinely different method (Spatial_Lesson_FloorByFloorGridCount.html, reframing a box as a stack of 2D grids counted via Prem\'s already-proven grid-counting skill) landed: 11 of 12 pure floor-by-floor mechanics questions correct, including both hardest capstones (Q11 all-four-counts, Q15 reverse problem). U54 scored 11/15 (73%) NOT PASSED, but the 4 misses are a different, better profile &mdash; see the "finish the exact question" entry below for 3 of them (Q6, Q12, Q14); Q5 (4&times;4&times;4, the first-ever TWO-middle-floor box) is a narrow lesson-coverage gap, not a method failure &mdash; a single top-up question before U57\'s spatial-adjacent content should close it.',
      fillClass: 'g2', fillPct: 68
    },
    {
      label:     '"Finish the exact question" — recurring precision gap, now confirmed a 3rd+ time (U54 Q6/Q12/Q14) — standing scored infrastructure since 10 Aug coaching review',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'U54, the first test built under the new standing "finish the question" protocol, still produced 3 precision misses out of 4 total: Q6 abandoned blank on a two-count-then-subtract question despite solving a near-identical companion question (Q9) correctly minutes later (confidence dip, not a skill gap); Q12 computed the correct raw count (34) but never converted it into the SIMPLEST-FORM FRACTION the question explicitly asked for; Q14 derived both correct intermediate values (16, 48) in the working, then combined them with &times; instead of + in the final step. Confirms the 10 Aug coaching-process review\'s root-cause finding is still live even with the new infrastructure in place from unit one &mdash; the instruction line alone isn\'t sufficient, watch closely whether repetition across U55&ndash;U57 closes it.',
      fillClass: 'g2', fillPct: 55
    },
    {
      label:     'Two-skill "capstone" questions — hardest-tier miss (M4 Round 3 1/5, M5 Round 3 0/5) — IMPROVED at U52 (Sec A 5/5 PERFECT) but Sec C still 1/5; open-book caveat applies',
      pill:      'p2', pillText: 'In Progress &#9654;',
      score:     'Every Round-3 miss on both milestones was a question chaining two already-mastered skills in one problem. U52 (Reasoning_Lesson_TwoSkillCapstones.html) taught the "baton-pass" meta-skill and Section A came back a PERFECT 5/5 across all four pairings &mdash; genuine first-exposure progress. But the &#9733;&#9733; tier (Sec C) still scored only 1/5, and Lui subsequently revealed the test was open-book, which tempers how much of Section A\'s sweep to credit as independent recall versus successful reference-following. Not re-taught at U53 (painted-cube-style third attempt risk); instead carried forward as a verbal-reminder watch-item for exam day.',
      fillClass: 'g2', fillPct: 55
    },
    {
      label:     'Circular double-repeat (dividing by only ONE group) &amp; combinations solve-backward (wrong shortcut) — ACTIVE, U53 targets both directly',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'Both drawn directly from U52\'s two clearest diagnosable Section C misses: Q11 divided by only one repeat group\'s factorial instead of both (840 vs the correct answer after dividing by both), and Q14 applied a direct shortcut (66&divide;2=33) instead of solving n(n&minus;1)=132 for n (correct 12). U53 fixes each with a single bolted-on rule to an already-fast skill rather than a new procedure: "count every repeat group, divide by EACH one\'s factorial" and "double the total first, then find two consecutive factors." Built short (5 screens each) per Prem\'s direct "too long" feedback on U51&ndash;U52.',
      fillClass: 'g2', fillPct: 45
    },
    {
      label:     'Open-book testing on U51–U52 — coaching-process note, not a Prem gap',
      pill:      'p2', pillText: 'Monitor &#128992;',
      score:     'Lui allowed Prem to have the lesson pages open during both the U51 and U52 unit tests. This is not how the real ASMOPSS exam works (closed-book), so U51/U52 results &mdash; especially U52\'s Section A 5/5 sweep &mdash; likely overstate independent, unaided recall to some degree. U53\'s test is recommended closed-book for a truer final read before Sunday. Flagged here so this context isn\'t lost when comparing U51&ndash;U52 scores against earlier closed-book units.',
      fillClass: 'g2', fillPct: 50
    },
    {
      label:     'Visible frustration reaction to notation/symbols under test pressure — NEW (U51, Q9) — distinct from U50\'s self-doubt and M5\'s healthy "IDK"',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'U51 Q9: margin note "don\'t use stars looks like this!!!" written across the page, next to a nonsensical "ANSWER 33" and heavy, pressed-hard scribbling &mdash; the &#9733;&#9733; symbol notation itself appears to have triggered real in-the-moment distress. Section C (Q13&ndash;15) was then abandoned completely, blank under scratch marks, immediately after this question &mdash; reads as a frustration cascade, not a confidence/self-doubt pattern (no correct answers were erased, unlike U50) and not a healthy non-attempt (unlike M5\'s calm "IDK"s). U52 deliberately avoids reusing the &#9733;&#9733; notation. Needs a direct, gentle conversation with Prem (the star complaint was fair — notation, not maths) rather than a lesson fix.',
      fillClass: 'g2', fillPct: 30
    },
    {
      label:     'Digit-puzzle column-addition & repeated-digit codes — ACTIVE (new content, U51 Sec B split: symbol/sum-difference solid, this half not landing)',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'U51 Q6, Q7, Q10 (single symbol; sum & difference; two unknowns) all correct on first exposure. Q8 (column addition, expand-as-10&times;tens+units) left blank with direct feedback: "Btw, I don\'t understand UR solution for this." Q9 (repeated-digit codes) triggered the notation-frustration reaction above. Genuinely narrower than the whole digit-puzzle topic &mdash; the algebraic "solve for the unknown" half of the skill works; the "decode a 2-digit template" half doesn\'t yet. Not touched again before the exam given time constraints; a candidate for a very short, calm re-explanation after Sunday if it resurfaces.',
      fillClass: 'g2', fillPct: 35
    },
    {
      label:     'Overwriting correct answers under test pressure — NEW (U50), RESOLVED (validated at M5)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U50 Q6 &amp; Q8: working showed the fully correct calculation (8+8+4=20; 12+0+0=12), then Prem crossed out his own correct answer and wrote something else &mdash; a self-doubt pattern under test pressure, distinct from any content gap and new this cycle. Lui chose a non-scored Confidence Session (Confidence_Session_TrustYourFirstAnswer.html) over a third content retest: showed Prem his own Q6/Q8 evidence, had him redo those exact questions, taught "only change an answer for a wrong NUMBER, never a feeling," then built quick wins on mastered content. <strong>Validated at Milestone M5</strong> (25 questions, 3 days later): zero instances of the overwriting pattern anywhere. When unsure, Prem wrote honest "IDK" instead of guessing or erasing (Q12, Q18, Q19, Q21) &mdash; the target behaviour change fully held.',
      fillClass: 'gs', fillPct: 90
    },
    {
      label:     'Circular arrangements (n−1)! rule — regresses specifically under milestone/mixed-topic conditions (M4 6 Jul, M5 6 Aug); holds fine on isolated unit tests (U43 15/15)',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'M4 Q7/Q13 and M5 Q9/Q22 all used plain n! instead of (n&minus;1)! for circular arrangements &mdash; the identical slip, twice, a month apart, both times on a long mixed-topic milestone. U43\'s dedicated retest (isolated to this one topic) came back independently-verified 15/15 with zero such slips, and that held again as recently as U43 itself. The pattern is now clear and specific: the rule is solid when it\'s the ONLY thing being tested, and slips only under long, mixed-topic conditions. Fix is a 30-second verbal "circle &rarr; subtract 1 FIRST" reminder before any mixed paper (including the real ASMOPSS exam), not another dedicated lesson.',
      fillClass: 'g2', fillPct: 65
    },
    {
      label:     'Averages & missing-value arithmetic — Sec A/B core methods RESOLVED at U47 (4/5 + 4/5)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U47 Sec A (averages, reversing to a total) and Sec B (finding one missing value) both individually cleared the 4/5 pass bar on genuinely new content. Every miss in either section (Q4, Q9) was a clean arithmetic slip inside correctly-applied working, not a method gap. Core reverse-averages skill is landing on first real exposure.',
      fillClass: 'gs', fillPct: 85
    },
    {
      label:     'Labelling BEFORE/AFTER totals — RESOLVED at U48',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U47 Q12: both the BEFORE total and the AFTER total were computed correctly in the working, but the final subtraction between them was wrong — the two totals were never clearly separated/labelled before subtracting. U48\'s top-up lesson drilled writing BEFORE and AFTER as two explicit labelled lines before any subtraction, and it fully transferred: U48 Sec C 4/5, with every question showing clearly labelled BEFORE/AFTER lines and zero recurrence of this habit.',
      fillClass: 'gs', fillPct: 88
    },
    {
      label:     'Computing the AFTER total when the average changes — RESOLVED at U48',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U47 Q13: the AFTER total itself was computed incorrectly (wrote 13, correct 27) — one step earlier than the Q12 labelling slip, and a procedural error rather than a simple subtraction mistake. U48\'s top-up lesson rebuilt the new-average × new-count step explicitly, plus a check-by-adding-back habit — U48\'s lone miss (Q11) was a one-off 48×7 multiplication slip, not a recurrence of this AFTER-total procedure. Arc CLOSED.',
      fillClass: 'gs', fillPct: 90
    },
    {
      label:     '"Finish the chain, answer every part" — multi-step completion & multi-part questions — RESOLVED at U45 (multiply-through fixed); narrower sub-issue carries forward as monitor',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U44 Q15 showed the exact two-step markup-then-discount chain executed perfectly for one book, then simply stopping &mdash; no &times;3, no profit-check. U45\'s "Finish Line Check" habit fixed exactly this: both multi-item capstones (Q14 &times;5, Q15 &times;4) were correctly carried through to the final total. The core "keep computing until the chain is finished" gap is closed &mdash; see the narrower "assemble every part onto the Answer line" entry below for what\'s still open.',
      fillClass: 'gs', fillPct: 85
    },
    {
      label:     'Assemble EVERY required part onto the Answer line (not just in the working) — MONITOR (new, U45)',
      pill:      'p2', pillText: 'Monitor &#128992;',
      score:     'U45 Q9, Q12, Q15: the correct number was computed &mdash; visible in the working, sometimes even circled &mdash; but the Answer line itself only carried PART of what was asked (e.g. Q9 wrote just "20%", missing the &#3647;70 profit figure also computed correctly in the working). Only Q13 assembled the full two-part answer. Narrower than the U44 chain-finishing gap: the math is done correctly, it just doesn\'t all make it onto the answer line. Light habit reminder before the next multi-part question set, not a dedicated lesson.',
      fillClass: 'g2', fillPct: 60
    },
    {
      label:     'Table optimization — compare combinations before choosing — RESOLVED at U45',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U44 Q8 used the first valid combination (4&times;10-packs) instead of checking the better per-unit rate (2&times;20-packs). U45\'s "Compare Before You Choose" habit fixed it directly: both pack-optimization questions (Q4 marker packs, Q5 pencil packs) used the best-per-unit-rate approach correctly, including on Q5\'s harder 3-pack-size numbers. Fully closed.',
      fillClass: 'gs', fillPct: 88
    },
    {
      label:     'Arithmetic care on larger 3-digit additions/comparisons — MONITOR (new, U45)',
      pill:      'p2', pillText: 'Monitor &#128992;',
      score:     'U45 Q6: correctly set up and compared two service totals, but a large addition error (Service B totalled as 1614 instead of 1014) flipped which option looked cheaper &mdash; the COMPARE method itself ("pick the smaller total") was followed correctly on his own (wrong) numbers. Q1 (no working shown) may be the same family. Not a method gap; a 1&ndash;2 maintenance question next time this shape appears, not a dedicated lesson.',
      fillClass: 'g2', fillPct: 65
    },
    {
      label:     '"Count the groups first" — 2-group vs 3-group formula mix-up — MONITOR (new, U38)',
      pill:      'p2', pillText: 'Monitor &#128992;',
      score:     'U38 Q12: a plain 2-group distribute (15 sweets, 2 jars &rarr; answer is just gaps=14) got the fancier 3-group "choose 2 of the gaps" formula applied instead ((14&times;13)&divide;2=91) &mdash; the same move he correctly used one question earlier on the harder-flagged Q11. Both easier 2-group Qs (Q1, Q2) were fine, suggesting the ★★ "harder" framing pulled him toward the more complex-looking tool without re-checking the group count. Quick habit fix, not a re-teach: state "2 groups → gaps. 3 groups → choose 2 of the gaps" before computing.',
      fillClass: 'g2', fillPct: 55
    },
    {
      label:     'Precision: answer EXACTLY &amp; clearly what is asked (smallest / which / name it right)',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'M3 Q12 (gave 3, not the SMALLEST 0) and Q19 (gave 33, not smallest 13); U35 Q15 (had the right ball but wrote "the middle" instead of "the one off the scale", not accepted); and U40 Q3 (fully correct chain derivation, but reported the SHELL&rsquo;s weight when the question asked for the PEBBLE&rsquo;s). Same family: finds the right idea but returns the wrong specific one, or names it vaguely. Cheap lost marks; critical for competition. Fix: standing "re-read the exact ask, then name the answer by what makes it special" habit, baked into every ASMOPSS unit.',
      fillClass: 'g2', fillPct: 62
    },
    {
      label:     'Applied Problems / Kangaroo reasoning — STRENGTH (M2 4/5, M3 4/5)',
      pill:      'ps', pillText: 'Strength &#10003;',
      score:     'M3 Kangaroo 4/5: reverse handshakes (old M2 gap), units-digit cycles, snail/rate, counting squares all correct. Applied reasoning is now reliable &mdash; a real asset going into ASMOPSS. Keep feeding harder applied/contest problems.',
      fillClass: 'gs', fillPct: 80
    },
    {
      label:     'Sequences: Find n (+1 Rule) — RESOLVED in U25',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U25 Find n 3/3 &#10003; (Q6 Q7 Q8) with Distance&divide;d+1 chain written every time. Q9 boundary trap avoided (T&#8321;&#8324;=100 excluded). Q10 last-above-zero &#10003;. From &ldquo;WHAT IS N TH?&rdquo; (U22/U23) to perfect in two weeks. Pocket Map credited.',
      fillClass: 'gs', fillPct: 95
    },
    {
      label:     'Sequences: Back-calc T₁ ((n−1)d) — RESOLVED in U25',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'The n&times;d error that survived U22, U23 and U24: U25 Q3 &#10003; (a=19&minus;3&times;4=7) and Q14 &#9733;&#9733; &#10003; (T&#8321;=19, T&#8321;&#8322;=63). Both back-calcs correct with (n&minus;1) coefficient. Zero term-listing anywhere on the U25 paper &mdash; first time ever.',
      fillClass: 'gs', fillPct: 95
    },
    {
      label:     'Geometry: Angles (Vert-Opp, Quad Algebra) — RESOLVED in U20',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U19 gaps (Q9 Q13 vert-opp blank, Q14 Q15 quad/isosceles algebra blank) all targeted in U20. Angles scored well in U20/U21. Vert-opp rule and quad algebra now firing.',
      fillClass: 'gs', fillPct: 90
    },
    {
      label:     'Ratio Changes (before/after, ages) — RESOLVED in U18',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U18 Sec C 5/5 &#127775; PERFECT. All k-method types correct: add &#10003;, remove &#10003;, ages &#10003; (Q12), transfer &#10003; (Q15). Complete turnaround from U17 Q15 blank.',
      fillClass: 'gs', fillPct: 97
    },
    {
      label:     'SimEq Two-Variable / Ratio Transfer — RESOLVED in U26 (M2 blanks closed)',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'The two M2 blank gaps, both closed at U26. SimEq (M2 Q7 blank) &rarr; 4/5 across four fresh contexts (pencils, burgers, books, stickers); only the multiply-first type (Q10) left incomplete &mdash; scaled correctly, didn&rsquo;t back-substitute. Ratio Transfer (M2 Q12 blank) &rarr; 4/5 incl. the hardest conserved-total transfer (Q15 &#10003;); only the addition type (Q14) blank. Recognition now fires in unfamiliar contexts.',
      fillClass: 'gs', fillPct: 88
    },
    {
      label:     'Geometry: frame outer/inner trap — RESOLVED in U15',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U15 Frame Trap 5/5 &#10003;: all five frame problems correct including Q5&#9733;&#9733; hardest variant. The frame-given-outer trap that caused 4 consecutive misses in U11–U14 is now fully resolved.',
      fillClass: 'gs', fillPct: 97
    },
    {
      label:     'Applied Problems — Kangaroo instinct developing',
      pill:      'p2', pillText: 'Improving &#128992;',
      score:     'U15 Kangaroo Count 5/5 &#10003;: units digit cycles (period-4 rule), staircase paths (Fibonacci), consecutive integers all correct. M1 Kangaroo gaps Q18/Q19/Q20 directly addressed. Applied instinct is growing.',
      fillClass: 'g2', fillPct: 62
    },
    {
      label:     'Both-Ends &times;2 rule — RESOLVED in U11',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'U11 Both-Ends 5/5 &#10003;: Q7 either-end 2&times;5!=240 &#10003; (exact M1 miss type — now locked). All three both-ends types are fully automatic.',
      fillClass: 'gs', fillPct: 98
    },
    {
      label:     'Prime Fact trigger — RESOLVED &amp; holding',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'M1 Sec A 5/5 &#10003;. Factor trees on every question. U10 5/5. U15 HCF 5/5 &#10003;. Trigger fully automatic across 5+ units.',
      fillClass: 'gs', fillPct: 97
    },
    {
      label:     'Fraction direction two-step — RESOLVED &amp; holding',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'M1 Q9 &#10003;, Q13 &#10003;, Q15&#9733; &#10003;. All fraction direction types solid. Bar model method consistent.',
      fillClass: 'gs', fillPct: 97
    }
  ],
  radarLegendUnit: 'U39'

};

// ── Computed helpers ──────────────────────────────────────────────────
PREM_DATA.skillSum    = function() { return this.skills.reduce(function(s,k){ return s+k.c; }, 0); };
PREM_DATA.targetSum   = function() { return this.skills.reduce(function(s,k){ return s+k.t; }, 0); };
PREM_DATA.achievement = function() { return Math.round(this.skillSum() / this.targetSum() * 100); };
PREM_DATA.skillColor  = function(c, t) {
  var r = c / t;
  return r >= 1 ? '#43e97b' : r >= 0.85 ? '#f6993f' : '#fc4e4e';
};

// ── Render: unit status badge (topbar) ───────────────────────────────
PREM_DATA.renderUnitBadge = function(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var cu = this.currentUnit;
  el.textContent = 'Unit ' + cu.n + ' — ' + cu.status;
  el.className = el.className.replace(/\btb-orange\b|\btb-green\b/g, '').trim();
  el.className += (cu.status === 'Test Pending') ? ' tb-orange' : ' tb-green';
};

// ── Render: skill bars ────────────────────────────────────────────────
// showGap=true: dashboard style (adds gap column); false: index style
PREM_DATA.renderSkillBars = function(containerId, showGap) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var html = '';
  this.skills.forEach(function(s) {
    var col = PREM_DATA.skillColor(s.c, s.t);
    var w   = Math.min(100, Math.round(s.c / s.t * 100));
    var gap = s.t - s.c;
    var gapStyle = gap > 0
      ? (gap > 15 ? 'color:#c53030' : 'color:#f6993f')
      : 'color:#43e97b';
    html += '<div class="skill-row">';
    html += '<div class="skill-name">' + s.name + '</div>';
    html += '<div class="skill-track"><div class="skill-fill" style="width:' + w + '%;background:' + col + '"></div></div>';
    if (showGap) {
      html += '<div class="skill-pct">' + s.c + '</div>';
      html += '<div class="skill-gap" style="' + gapStyle + '">' + (gap > 0 ? '+' + gap : '&#10003;') + '</div>';
    } else {
      html += '<span class="skill-pct">' + s.c + '</span>';
    }
    html += '</div>';
  });
  el.innerHTML = html;
};

// ── Render: achievement % bar (3 element ids) ─────────────────────────
PREM_DATA.renderAchievement = function(pctId, barId, labelId) {
  var pct = this.achievement();
  var p = document.getElementById(pctId);
  var b = document.getElementById(barId);
  var l = document.getElementById(labelId);
  if (p) p.textContent = pct + '%';
  if (b) b.style.width  = pct + '%';
  if (l) l.textContent  = 'vs Top 5% target · ' + pct + '% achieved';
};

// ── Render: score line chart (SVG) ───────────────────────────────────
PREM_DATA.renderScoreChart = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var scores = this.scores;
  var outOf  = this.outOf;
  var n = scores.length;

  // ── Layout ──────────────────────────────────────────────────────────
  var W=600, H=190, ml=26, mr=36, mt=16, mb=32;
  var cw = W-ml-mr, ch = H-mt-mb;

  function px(i)     { return ml + (i/(n-1))*cw; }
  function py(score) { return mt + ch - (score/outOf)*ch; }

  // ── Rolling 3-unit average ──────────────────────────────────────────
  var avg = scores.map(function(_,i) {
    var s2=Math.max(0,i-2), sum=0, cnt=0;
    for(var j=s2;j<=i;j++){ sum+=scores[j].score; cnt++; }
    return sum/cnt;
  });

  // ── SVG open ────────────────────────────────────────────────────────
  var s = '<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;display:block;overflow:visible" xmlns="http://www.w3.org/2000/svg">';

  // ── Grid lines + Y labels ───────────────────────────────────────────
  [0,3,6,9,12,15].forEach(function(v) {
    var y=py(v), isKey=(v===12||v===14);
    s += '<line x1="'+ml+'" y1="'+y+'" x2="'+(W-mr)+'" y2="'+y+'" stroke="'+(isKey?'transparent':'#f0f0f0')+'" stroke-width="1"/>';
    s += '<text x="'+(ml-4)+'" y="'+(y+3)+'" text-anchor="end" font-size="8" fill="#bbb">'+v+'</text>';
  });

  // ── Reference lines ─────────────────────────────────────────────────
  // 80% mastery = 12/15 (revised 12 Jun 2026, was 87% = 13/15)
  var y80=py(12);
  s += '<line x1="'+ml+'" y1="'+y80+'" x2="'+(W-mr)+'" y2="'+y80+'" stroke="#f6993f" stroke-width="1.2" stroke-dasharray="5,3" opacity="0.9"/>';
  s += '<text x="'+(W-mr+3)+'" y="'+(y80+4)+'" font-size="8.5" fill="#f6993f" font-weight="700">80%</text>';
  // 93% top-5% = ~14/15
  var y93=py(14);
  s += '<line x1="'+ml+'" y1="'+y93+'" x2="'+(W-mr)+'" y2="'+y93+'" stroke="#43e97b" stroke-width="1.2" stroke-dasharray="5,3" opacity="0.9"/>';
  s += '<text x="'+(W-mr+3)+'" y="'+(y93+4)+'" font-size="8.5" fill="#43e97b" font-weight="700">93%</text>';

  // ── Fill under main line ─────────────────────────────────────────────
  var fp = 'M'+px(0)+','+py(scores[0].score);
  scores.forEach(function(sc,i){ fp += ' L'+px(i)+','+py(sc.score); });
  fp += ' L'+px(n-1)+','+(mt+ch)+' L'+px(0)+','+(mt+ch)+' Z';
  s += '<path d="'+fp+'" fill="rgba(102,126,234,0.07)"/>';

  // ── Rolling average line ─────────────────────────────────────────────
  var ap = avg.map(function(v,i){ return px(i)+','+py(v); }).join(' ');
  s += '<polyline points="'+ap+'" fill="none" stroke="#c4b5fd" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.55"/>';

  // ── Main line ────────────────────────────────────────────────────────
  var lp = scores.map(function(sc,i){ return px(i)+','+py(sc.score); }).join(' ');
  s += '<polyline points="'+lp+'" fill="none" stroke="#667eea" stroke-width="2.2"/>';

  // ── Data points ──────────────────────────────────────────────────────
  scores.forEach(function(sc, i) {
    var x=px(i), y=py(sc.score);
    var isM = sc.label && /^M/.test(sc.label);
    var isP = sc.score === outOf;
    var lbl = sc.label || ('U'+sc.n);
    var dlTxt = sc.delta===null ? '—' : (sc.delta>0?'+'+sc.delta:String(sc.delta));
    var tip   = lbl+'|'+sc.score+'/'+outOf+' ('+Math.round(sc.score/outOf*100)+'%)|'+dlTxt;

    // Marker
    if (isM) {
      var d=5.5;
      s += '<polygon points="'+x+','+(y-d)+' '+(x+d)+','+y+' '+x+','+(y+d)+' '+(x-d)+','+y+'" fill="#4527A0" stroke="white" stroke-width="1.5"/>';
    } else if (isP) {
      s += '<circle cx="'+x+'" cy="'+y+'" r="5.5" fill="#FFD700" stroke="white" stroke-width="1.5"/>';
      s += '<text x="'+x+'" y="'+(y-9)+'" text-anchor="middle" font-size="9" fill="#c8a000">&#9733;</text>';
    } else {
      var fill = sc.score>=13 ? '#43e97b' : (sc.score>=11 ? '#667eea' : (sc.score>=9 ? '#f6993f' : '#fc4e4e'));
      s += '<circle cx="'+x+'" cy="'+y+'" r="4" fill="'+fill+'" stroke="white" stroke-width="1.5"/>';
    }

    // X-axis label: show every 2nd, always milestones + perfect
    if (isM || isP || i===0 || i===n-1 || i%3===0) {
      s += '<text x="'+x+'" y="'+(mt+ch+13)+'" text-anchor="middle" font-size="7.5" fill="'+(isM?'#4527A0':'#718096')+'" font-weight="'+(isM||isP?'700':'400')+'">'+lbl+'</text>';
    }

    // Invisible hover target
    s += '<circle cx="'+x+'" cy="'+y+'" r="11" fill="transparent" class="sc-pt" data-tip="'+tip+'" style="cursor:pointer"/>';
  });

  // ── Legend ───────────────────────────────────────────────────────────
  var ly = H-4;
  s += '<circle cx="'+(ml)+'" cy="'+ly+'" r="3.5" fill="#667eea"/>';
  s += '<text x="'+(ml+7)+'" y="'+(ly+3)+'" font-size="7.5" fill="#718096">Unit</text>';
  s += '<polygon points="'+(ml+42)+','+(ly-4)+' '+(ml+46)+','+ly+' '+(ml+42)+','+(ly+4)+' '+(ml+38)+','+ly+'" fill="#4527A0"/>';
  s += '<text x="'+(ml+50)+'" y="'+(ly+3)+'" font-size="7.5" fill="#718096">Milestone</text>';
  s += '<circle cx="'+(ml+100)+'" cy="'+ly+'" r="3.5" fill="#FFD700"/>';
  s += '<text x="'+(ml+107)+'" y="'+(ly+3)+'" font-size="7.5" fill="#718096">Perfect</text>';
  s += '<line x1="'+(ml+148)+'" y1="'+ly+'" x2="'+(ml+163)+'" y2="'+ly+'" stroke="#c4b5fd" stroke-width="1.5" stroke-dasharray="4,2"/>';
  s += '<text x="'+(ml+167)+'" y="'+(ly+3)+'" font-size="7.5" fill="#718096">3-unit avg</text>';

  s += '</svg>';

  // ── Tooltip ──────────────────────────────────────────────────────────
  s += '<div id="sc-tip" style="display:none;position:absolute;background:#1a1a2e;color:#fff;padding:6px 11px;border-radius:8px;font-size:11px;pointer-events:none;z-index:99;white-space:nowrap;box-shadow:0 3px 12px rgba(0,0,0,0.25);line-height:1.6"></div>';

  el.style.position = 'relative';
  el.innerHTML = s;

  // ── Hover events ─────────────────────────────────────────────────────
  var tip = document.getElementById('sc-tip');
  el.querySelectorAll('.sc-pt').forEach(function(dot) {
    dot.addEventListener('mouseenter', function(e) {
      var p = this.dataset.tip.split('|');
      var dl = p[2];
      var dlHtml = dl==='—' ? '' : ('&nbsp;&nbsp;<span style="color:'+(dl.charAt(0)==='+' ? '#43e97b':'#f6993f')+'">'+dl+'</span>');
      tip.innerHTML = '<strong>'+p[0]+'</strong>&nbsp;&nbsp;'+p[1]+dlHtml;
      var r = el.getBoundingClientRect();
      var ex = e.clientX-r.left, ey = e.clientY-r.top;
      var tw = 160;
      tip.style.left = Math.min(Math.max(0,ex-tw/2), el.offsetWidth-tw-4)+'px';
      tip.style.top  = Math.max(0, ey-42)+'px';
      tip.style.display='block';
    });
    dot.addEventListener('mouseleave', function(){ tip.style.display='none'; });
  });
};

// ── Render: session log ───────────────────────────────────────────────
PREM_DATA.renderSessionLog = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var html = '';
  this.unitLog.forEach(function(u) {
    var pad = u.n < 10 ? '0' + u.n : '' + u.n;
    var statusHtml = u.status === 'pending'
      ? '<span class="sstatus" style="background:#fff5e6;color:#c05621;border:1px solid #fbd38d">&#9201; Pending</span>'
      : '<span class="sstatus sdone">&#10003; Done</span>';
    var tagsHtml = '';
    u.tags.forEach(function(tg) {
      var cls = tg.c ? ' class="tag ' + tg.c + '"' : ' class="tag"';
      var sty = tg.s ? ' style="' + tg.s + '"' : '';
      tagsHtml += '<span' + cls + sty + '>' + tg.t + '</span>';
    });
    html += '<div class="session-item">';
    html += '<div class="ut-badge" style="background:' + u.badge + '"><div class="ut">UT</div>' + pad + '</div>';
    html += '<div class="session-body">';
    html += '<strong>' + u.title + '</strong>';
    html += '<div class="tags">' + tagsHtml + '</div>';
    html += '<div class="snote">' + u.note + '</div>';
    html += '</div>';
    html += statusHtml;
    html += '</div>';
  });
  el.innerHTML = html;
};

// ── Render: skill summary footer text ─────────────────────────────────
PREM_DATA.renderSkillSummary = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var cs = this.skillSum();
  var ts = this.targetSum();
  var pct = this.achievement();
  el.innerHTML = 'Current sum ' + cs + ' &nbsp;|&nbsp; Target sum ' + ts + ' &nbsp;|&nbsp; <strong>' + pct + '% to top 5%</strong>';
};

// ── Render: hero stat boxes 1–3 ───────────────────────────────────────
// Updates the dynamic sub-text (box 1) and full content of boxes 2 & 3.
PREM_DATA.renderHero = function() {
  var u = this.lastUnit;
  var c = this.currentUnit;
  var pct = this.achievement();
  var hasDelta = (u.delta !== null && u.delta !== undefined);
  var deltaColor = (hasDelta && u.delta <= 0) ? '#f6993f' : '#43e97b';
  var deltaSign  = (hasDelta && u.delta < 0)  ? '−'  : '+';
  var deltaArr   = (hasDelta && u.delta < 0)  ? '⬇'  : '⬆';
  var unitWord   = (typeof u.n === 'string' && u.n.charAt(0) === 'M') ? 'Milestone ' : 'Unit ';
  var prevLbl    = u.prevLabel || ('Unit ' + (u.n - 1));

  // Box 1 — skill % sub text
  var b1s = document.getElementById('dash-hero-skill-sub');
  if (b1s) b1s.textContent = 'Stable after ' + unitWord + u.n + ' — ' + pct + '%';

  // Box 2 — last unit score
  var b2v = document.getElementById('dash-hero-score-val');
  var b2l = document.getElementById('dash-hero-score-lbl');
  var b2s = document.getElementById('dash-hero-score-sub');
  if (b2v) { b2v.textContent = u.score + ' / ' + u.outOf; b2v.style.color = deltaColor; }
  if (b2l) b2l.textContent = 'Last ' + unitWord.toLowerCase() + 'score (' + unitWord + u.n + ')';
  if (b2s) {
    if (hasDelta) {
      b2s.textContent = deltaArr + ' ' + deltaSign + Math.abs(u.delta) + ' from ' + prevLbl + ' (' + u.prevScore + '/' + (u.prevOutOf || 15) + ')';
      b2s.style.color = deltaColor;
    } else {
      b2s.textContent = 'vs ' + prevLbl + ': ' + u.prevScore + '/' + (u.prevOutOf || 15) + ' (different scale — not directly comparable)';
      b2s.style.color = '#a0aec0';
    }
  }

  // Box 3 — units completed
  var b3v = document.getElementById('dash-hero-units-val');
  var b3s = document.getElementById('dash-hero-units-sub');
  if (b3v) b3v.textContent = u.n;
  if (b3s) { b3s.textContent = 'U' + c.n + ' — ' + c.status.toLowerCase(); b3s.style.color = '#a0aec0'; }

  // Radar legend unit label
  var rlu = document.getElementById('dash-radar-legend-unit');
  if (rlu) rlu.textContent = 'Now (' + this.radarLegendUnit + ')';
};

// ── Render: overview pattern insight box ──────────────────────────────
PREM_DATA.renderPatternInsight = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var u = this.lastUnit;
  el.innerHTML = '<div class="insight-lbl il-orange">&#128269; ' + u.patternLabel + '</div><p>' + u.patternInsight + '</p>';
};

// ── Render: priority gaps card ────────────────────────────────────────
PREM_DATA.renderPriorityGaps = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var gaps = this.priorityGaps;
  var html = '';
  gaps.forEach(function(g, i) {
    var mb = (i === gaps.length - 1) ? 'margin-bottom:0' : '';
    html += '<div class="gap-item" style="' + mb + '">';
    html += '<div class="gap-header"><span class="gap-label">' + g.label + '</span><span class="gpill ' + g.pill + '">' + g.pillText + '</span></div>';
    html += '<div class="gap-score">' + g.score + '</div>';
    html += '<div class="gap-bar"><div class="gap-fill ' + g.fillClass + '" style="width:' + g.fillPct + '%"></div></div>';
    html += '</div>';
  });
  el.innerHTML = html;
};

// ── Render: Q breakdown table + summary bar ───────────────────────────
PREM_DATA.renderQBreakdown = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var u = this.lastUnit;
  if (!u.qBreakdown || !u.qBreakdown.length) return;
  var lvlClass = { w:'lw', m:'lm', h:'lh' };
  var lvlText  = { w:'Warm', m:'Med', h:'Hard' };
  var html = '';
  // Card header
  var unitWord = (typeof u.n === 'string' && u.n.charAt(0) === 'M') ? 'Milestone ' : 'Unit ';
  html += '<div class="card-hd"><span class="dot" style="background:#f6993f"></span>' + unitWord + u.n + ' &mdash; Question Breakdown (' + u.score + '/' + u.outOf + ' &middot; ' + u.pct + '%)</div>';
  // Summary bar
  if (u.qSummary) {
    html += '<div style="background:#fff8e1;border:1px solid #fbd38d;border-radius:8px;padding:9px 12px;margin-bottom:12px;font-size:11px;color:#744210">' + u.qSummary + '</div>';
  }
  // Table
  html += '<table class="q-table"><tr><th>Q</th><th>Topic</th><th>Lvl</th><th>Result</th><th>Note</th></tr>';
  u.qBreakdown.forEach(function(q) {
    var lc  = lvlClass[q.lvl] || 'lm';
    var lt  = lvlText[q.lvl]  || q.lvl;
    var res = q.pass ? '<td class="q-pass">&#10003;</td>' : '<td class="q-fail">&#10007;</td>';
    html += '<tr><td>' + q.q + '</td><td>' + q.topic + '</td><td><span class="' + lc + '">' + lt + '</span></td>' + res + '<td>' + q.note + '</td></tr>';
  });
  html += '</table>';
  el.innerHTML = html;
};

// ── Render: results analysis insight box ──────────────────────────────
PREM_DATA.renderAnalysisInsight = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var u = this.lastUnit;
  el.innerHTML = '<div class="insight-lbl il-orange">&#128269; ' + u.analysisLabel + '</div><p>' + u.analysisInsight + '</p>';
};
