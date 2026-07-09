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
  updated:        '9 Jul 2026',
  coachStartDate: '2026-05-14',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: { n:40, topic:'Permutations with Repeats & Circular Arrangements (Art of Counting)', status:'In Progress' },
  lastUnit: {
    n:39, score:12, outOf:15, pct:80, delta:-2, prevScore:14,
    patternLabel: 'U39 — Balance Scales: Ratios & Substitution Chains, PASSED',
    patternInsight: '12/15 (80%) <strong>PASSED</strong> &mdash; Sections A and B are a clean 10/10 across ten different fruit/item pairs: cancelling a mixed-pan balance down to a ratio (Sec A), then turning that ratio into a real weight (Sec B). Section C splits cleanly in two: Q11 &amp; Q12, where Clue 1 is handed to him outright and he only has to substitute, are both correct &mdash; Q12&rsquo;s scratch work shows genuine multi-line algebra (1 ring=5 chips &rarr; 6 chips=42g &rarr; 1 chip=7g). Q13&ndash;Q15, which require DERIVING Clue 1 by cancelling first and THEN substituting it into a second mixed clue, all came back illegible or incomplete (correct answers 15g, 16g, 18g) &mdash; not a wrong method, but the two-step CHAIN breaking down under the old fixed 2-row working space. This is the first real test of combining two separately-mastered skills in one question, and it didn&rsquo;t hold. Light watch-point: Q1 was solved with raw algebra (4a+1m=3a+4m) instead of the taught pan-by-pan cancel &mdash; correct and a healthy sign of abstraction, but worth confirming he can still explain the physical cancel logic in words, since it&rsquo;s exactly what Q13&ndash;15&rsquo;s derivation step rests on.',
    analysisLabel: 'Next: U40 — Permutations with Repeats & Circular Arrangements (Art of Counting)',
    analysisInsight: 'U39 passed comfortably (12/15 &ge; 12), so no retest is needed. U40 folds in a short "chain it in one question" warm-up (2&ndash;3 worked examples doing cancel&rarr;substitute back to back, same micro-step granularity as Lesson 2 Example 2) before its main new content, continuing the competition-weighted rotation into Art of Counting: permutations of items with repeats (n!&divide;r&#8321;!r&#8322;!...) and circular arrangements ((n&minus;1)!), capped with a lesson capstone that combines both BEFORE the test asks it &mdash; directly applying the U39 lesson learned about testing combined skills cold. U40 is also the FIRST test to use the new 3-empty-rows spacing rule, a direct response to U39&rsquo;s illegible Section C working. Milestone M4 lands after U40 &mdash; all 10 units since M3 (U31&ndash;U40) will then be complete.',
    qSummary: '<strong>Sec A 5/5 | Sec B 5/5 | Sec C 2/5</strong> — 12/15 PASSED',
    qBreakdown: [
      { q:'Q1', topic:'Cancel & Ratio — apples/mangoes',        lvl:'w', pass:true,  note:'&#10003; 3. Solved via raw algebra (4a+1m=3a+4m) instead of the taught pan-cancel &mdash; valid alternate route, worth a light verbal check.' },
      { q:'Q2', topic:'Cancel & Ratio — pears/plums',           lvl:'w', pass:true,  note:'&#10003; 2.' },
      { q:'Q3', topic:'Cancel & Ratio — melons/kiwis',          lvl:'w', pass:true,  note:'&#10003; 4.' },
      { q:'Q4', topic:'Cancel & Ratio — papayas/limes',         lvl:'w', pass:true,  note:'&#10003; 2.' },
      { q:'Q5', topic:'Cancel & Ratio — guavas/figs',           lvl:'w', pass:true,  note:'&#10003; 4.' },
      { q:'Q6', topic:'Ratio → Weight — coconuts/lemons',       lvl:'m', pass:true,  note:'&#10003; 8g.' },
      { q:'Q7', topic:'Ratio → Weight — pumpkins/onions',       lvl:'m', pass:true,  note:'&#10003; 9g.' },
      { q:'Q8', topic:'Ratio → Weight — watermelons/tomatoes',  lvl:'m', pass:true,  note:'&#10003; 15g.' },
      { q:'Q9', topic:'Ratio → Weight — durians/rambutans',     lvl:'m', pass:true,  note:'&#10003; 24g.' },
      { q:'Q10',topic:'Ratio → Weight — pineapples/strawberries', lvl:'m', pass:true, note:'&#10003; 10g.' },
      { q:'Q11',topic:'Substitution ★★ — Clue 1 given (gems/coins)', lvl:'h', pass:true, note:'&#10003; 10g.' },
      { q:'Q12',topic:'Substitution ★★ — Clue 1 given (rings/chips)', lvl:'h', pass:true, note:'&#10003; 7g &mdash; clean multi-line algebra shown (1 ring=5 chips &rarr; 6 chips=42g &rarr; chip=7g).' },
      { q:'Q13',topic:'Substitution ★★ — derive Clue 1 THEN chain (cubes/blocks)', lvl:'h', pass:false, note:'&#10007; correct 15g; working shows drawn boxes, no completed numeric chain.' },
      { q:'Q14',topic:'Substitution ★★ — derive Clue 1 THEN chain (tiles/discs)',  lvl:'h', pass:false, note:'&#10007; correct 16g; question text annotated/underlined but answer area just scribbles.' },
      { q:'Q15',topic:'Substitution ★★ — derive Clue 1 THEN chain (counters/weights)', lvl:'h', pass:false, note:'&#10007; correct 18g; no organised working visible.' }
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
  // achievement % = sum(c) / sum(t) × 100  →  560 / 677 = 83%
  skills: [
    { name: 'Logic & Reasoning', c: 88, t: 90 },
    { name: 'Number Sense',      c: 88, t: 90 },
    { name: 'Algebra',           c: 99, t: 85 },
    { name: 'Arithmetic',        c: 83, t: 85 },
    { name: 'Geometry',          c: 74, t: 80 },
    { name: 'Counting',          c: 87, t: 85 },
    { name: 'Number Theory',     c: 89, t: 82 },
    { name: 'Applied Problems',  c: 76, t: 80 }
  ],

  // Radar chart axes order: Logic, Geometry, NumSense, Algebra, Counting, Arith, NumTheory, Applied
  radarCurrent:  [88, 74, 88, 99, 87, 83, 89, 76],
  radarTarget:   [90, 85, 90, 85, 80, 85, 82, 80],
  radarBaseline: [80, 68, 85, 75, 20, 45, 35, 15],

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
    { n:39, score:12, delta:-2, color:'linear-gradient(135deg,#7E57C2,#4527A0)', star:false }
  ],

  // ── Unit log (newest first — renders Dashboard session log) ───────
  unitLog: [
    {
      n: 40,
      badge: 'linear-gradient(135deg,#00796B,#00695C)',
      title: 'Permutations with Repeats &amp; Circular Arrangements (Art of Counting)',
      tags: [
        { t:'Pending &#128197;', c:'tpurple' },
        { t:'L1: Repeats + chain warm-up', c:'tblue' },
        { t:'L2: Circular + combined capstone', c:'tblue' },
        { t:'Last unit before Milestone M4', c:'torange' }
      ],
      note: 'U40: continues the competition-weighted rotation into Art of Counting. L1 opens with a short "chain it in one question" warm-up (cancel&rarr;substitute back to back, addressing U39\'s Section C gap) before its main content: arranging letters/items with repeats (n! &divide; r&#8321;!r&#8322;!...). L2 teaches circular arrangements ((n&minus;1)!) then a CAPSTONE worked example combining circle + repeats together BEFORE the test asks it &mdash; applying the lesson learned from U39 (never test a combined skill cold). Sec A repeats-only, Sec B circular-only, Sec C ★★ combined. First test to use the new 3-empty-row spacing rule. Last unit before Milestone M4.',
      status: 'pending'
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
      label:     'Chaining two mastered skills in ONE question — ACTIVE (new, U39)',
      pill:      'p2', pillText: 'Monitor &#128992;',
      score:     'U39 Section C: when Clue 1 is handed over outright (Q11, Q12), substitution is solid, incl. real multi-line algebra. But when Clue 1 must first be DERIVED by cancelling, then chained into a second mixed clue (Q13, Q14, Q15), all three came back illegible or incomplete &mdash; 0/3. Both component skills (U39 L1 cancel, U39 L2 substitute) are individually mastered; it&rsquo;s the FIRST time they were combined in one question, and it broke down under the old fixed 2-row working space, not a concept gap. U40 responds with a short chain warm-up plus the new 3-empty-row spacing rule, and models any new combined-skill question with a lesson capstone before testing it cold.',
      fillClass: 'g2', fillPct: 58
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
      score:     'M3 Q12 (gave 3, not the SMALLEST 0) and Q19 (gave 33, not smallest 13); and U35 Q15 (had the right ball but wrote "the middle" instead of "the one off the scale", not accepted). Same family: finds the right idea but returns the wrong specific one, or names it vaguely. Cheap lost marks; critical for competition. Fix: standing "re-read the exact ask, then name the answer by what makes it special" habit, baked into every ASMOPSS unit.',
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
  var deltaColor = (u.delta <= 0) ? '#f6993f' : '#43e97b';
  var deltaSign  = (u.delta < 0)  ? '−'  : '+';
  var deltaArr   = (u.delta < 0)  ? '⬇'  : '⬆';

  // Box 1 — skill % sub text
  var b1s = document.getElementById('dash-hero-skill-sub');
  if (b1s) b1s.textContent = 'Stable after U' + u.n + ' — ' + pct + '%';

  // Box 2 — last unit score
  var b2v = document.getElementById('dash-hero-score-val');
  var b2l = document.getElementById('dash-hero-score-lbl');
  var b2s = document.getElementById('dash-hero-score-sub');
  if (b2v) { b2v.textContent = u.score + ' / ' + u.outOf; b2v.style.color = deltaColor; }
  if (b2l) b2l.textContent = 'Last unit score (Unit ' + u.n + ')';
  if (b2s) { b2s.textContent = deltaArr + ' ' + deltaSign + Math.abs(u.delta) + ' from Unit ' + (u.n - 1) + ' (' + u.prevScore + '/15)'; b2s.style.color = deltaColor; }

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
  html += '<div class="card-hd"><span class="dot" style="background:#f6993f"></span>Unit ' + u.n + ' &mdash; Question Breakdown (' + u.score + '/' + u.outOf + ' &middot; ' + u.pct + '%)</div>';
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
