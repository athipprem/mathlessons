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
  updated:        '31 May 2026',
  coachStartDate: '2026-05-14',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: {
    n:           20,
    status:      'Lessons In Progress',
    testPending: false
  },
  lastUnit: {
    n: 'M2', score: 12, outOf: 15, pct: 80, delta: +1, prevScore: 11,

    // ── Overview pattern insight ──────────────────────────────────────
    patternLabel:   'Milestone 02 &mdash; 12/15 ISA (80%) &middot; Kangaroo 4/5',
    patternInsight: '<strong>12/15 ISA (80%) &mdash; Sec A 3/5, Sec B 9/10. Kangaroo 4/5 &#127775; BREAKTHROUGH.</strong> Q2 &#10007; Path &amp; Frame direction error (added border instead of subtracting). Q7 &#10007; SimEq blank (skipped). Q12 &#10007; Ratio Transfer blank. Sec B strong: Bar Model &#10003;, Sequences all 3 &#10003;, Angles Q13&ndash;Q15 &#10003;. Kangaroo 4/5: Applied Problems radar bumped to 72. U21: Equation Solving &mdash; Variables on Both Sides.',

    // ── Results panel analysis insight ───────────────────────────────
    analysisLabel:   'Milestone 02 &mdash; Cumulative Review Units 11&ndash;20',
    analysisInsight: '<strong>12/15 ISA (80%) | Kangaroo 4/5.</strong> Strengths confirmed: HCF/LCM &#10003;, Sequences all formats &#10003;, Bar Model &#10003;, Angles basic/algebra &#10003;. Gaps: Path &amp; Frame direction (Q2 &#10007; re-emerged under test pressure), SimEq (Q7 blank &mdash; skipped), Ratio Transfer (Q12 blank &mdash; trigger not firing in removal-format). Kangaroo breakthrough: snail &#10003;, digit &#10003;, remainder &#10003;, triangles &#10003;. Q17 &#10007; handshakes used factorials not C(n,2). Applied Problems radar bumped significantly. U21: equation solving, variables both sides.',

    // ── Q breakdown summary bar ───────────────────────────────────────
    qSummary: '<strong>ISA 12/15 (80%) &#127775; &middot; Q2 &#10007; Path&amp;Frame direction &middot; Q7 &#10007; SimEq blank &middot; Q12 &#10007; Ratio Transfer blank. Kangaroo 4/5 &mdash; Q17 &#10007; handshakes (used factorials).</strong>',

    // ── Q-by-Q breakdown ─────────────────────────────────────────────
    qBreakdown: [
      { q:'Q1',  topic:'Geometry &mdash; Rectangle (P+A)',               lvl:'w', pass:true,  note:'&#10003; P=50 cm, A=144 cm&sup2;. Both parts correct.' },
      { q:'Q2',  topic:'Geometry &mdash; Path &amp; Frame',              lvl:'m', pass:false, note:'&#10007; 396 cm&sup2; (correct 324). Added border instead of subtracting &mdash; outer/inner direction reversed. Same error from U11&ndash;U14, resolved U15, re-emerged under test pressure.' },
      { q:'Q3',  topic:'Number Theory &mdash; HCF Three-Item',           lvl:'m', pass:true,  note:'&#10003; HCF(48,72,96)=24 cm. Fully consolidated.' },
      { q:'Q4',  topic:'Number Theory &mdash; LCM Scheduling',           lvl:'w', pass:true,  note:'&#10003; LCM(12,8)=24 min &rarr; 9:24 am.' },
      { q:'Q5',  topic:'Patterns &mdash; Find T&#8328; (a=3, d=5)',      lvl:'w', pass:true,  note:'&#10003; 38. Listed all terms (3,8,13&hellip;38) &mdash; correct but formula not used.' },
      { q:'Q6',  topic:'Algebra &mdash; Bar Model (Sophie/Mia/Tom)',     lvl:'w', pass:true,  note:'&#10003; Mia=16, Sophie=32, Tom=24. Clean bar diagram drawn.' },
      { q:'Q7',  topic:'Algebra &#9733; &mdash; SimEq (apples/oranges)', lvl:'m', pass:false, note:'&#10007; Blank &mdash; likely skipped during pre-scan time budget. Not a conceptual regression (U16 = 5/5).' },
      { q:'Q8',  topic:'Sequences &mdash; Find T&#8321;&#8321; (a=5,d=8)',lvl:'w', pass:true,  note:'&#10003; T&#8321;&#8321;=85.' },
      { q:'Q9',  topic:'Sequences &#9733; &mdash; Find d and T&#8321;',  lvl:'m', pass:true,  note:'&#10003; d=4, T&#8321;=11. Listed T3&rarr;T7, back-tracked correctly.' },
      { q:'Q10', topic:'Sequences &#9733; &mdash; First term exceeding 70', lvl:'m', pass:true, note:'&#10003; T&#8321;&#8323;.' },
      { q:'Q11', topic:'Ratio &mdash; Sharing (2:3)',                    lvl:'w', pass:true,  note:'&#10003; Jake=36, Lily=54.' },
      { q:'Q12', topic:'Ratio &#9733; &mdash; Transfer (5:3 &rarr; 1:1)', lvl:'m', pass:false, note:'&#10007; Blank. Trigger did not fire &mdash; no working in box. Solved perfectly in U18; removal-format not recognised here.' },
      { q:'Q13', topic:'Geometry &mdash; Angles Triangle (65&#176;,48&#176;)', lvl:'w', pass:true, note:'&#10003; 67&#176;.' },
      { q:'Q14', topic:'Geometry &#9733; &mdash; Quad Algebra (n+20, 2n&minus;10, n+30, 80)', lvl:'m', pass:true, note:'&#10003; n=60, angles 80,110,90,80. Set up 4n+120=360 correctly.' },
      { q:'Q15', topic:'Geometry &#9733;&#9733; &mdash; Triangle Algebra (2n+10, n+5, n&minus;15)', lvl:'h', pass:true, note:'&#10003; n=45, angles 100,50,30. 4n=180 &rarr; n=45. All terms already one side &mdash; confident.' },
      { q:'Q16', topic:'Kangaroo &mdash; Snail Climb (diagnostic)',      lvl:'m', pass:true,  note:'&#10003; Day 5. Listed day-by-day 1,2,3,4,5 cleanly.' },
      { q:'Q17', topic:'Kangaroo &#9733; &mdash; Handshakes (diagnostic)',lvl:'h', pass:false, note:'&#10007; Blank. Working shows 4!=24, 5!=120 &mdash; used permutations. C(n,2) concept not yet in toolkit.' },
      { q:'Q18', topic:'Kangaroo &mdash; Missing Digit div by 9 (diagnostic)', lvl:'m', pass:true, note:'&#10003; digit=6. Systematic trial: 9|3072, 9|3172, 9|3672 &rarr; found 6.' },
      { q:'Q19', topic:'Kangaroo &#9733; &mdash; Remainder Puzzle (diagnostic)', lvl:'h', pass:true, note:'&#10003; 16. &#247;6=r4 &#10003;, &#247;7=r2 &#10003;.' },
      { q:'Q20', topic:'Kangaroo &mdash; Triangle Counting (diagnostic)', lvl:'m', pass:true, note:'&#10003; 5 triangles. Drew figure and counted correctly.' }
    ]
  },
    // ── Skills ───────────────────────────────────────────────────────
  // Display order used for skill-bar tables in both pages.
  // achievement % = sum(c) / sum(t) × 100  →  560 / 677 = 83%
  skills: [
    { name: 'Logic & Reasoning', c: 87, t: 90 },
    { name: 'Number Sense',      c: 88, t: 90 },
    { name: 'Algebra',           c: 96, t: 85 },
    { name: 'Arithmetic',        c: 83, t: 85 },
    { name: 'Geometry',          c: 70, t: 80 },
    { name: 'Counting',          c: 83, t: 85 },
    { name: 'Number Theory',     c: 83, t: 82 },
    { name: 'Applied Problems',  c: 72, t: 80 }
  ],

  // Radar chart axes order: Logic, Geometry, NumSense, Algebra, Counting, Arith, NumTheory, Applied
  radarCurrent:  [87, 70, 88, 96, 83, 83, 83, 72],
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
    { n:'M2', label:'M2', score:12, delta:+1, color:'linear-gradient(135deg,#311B92,#512DA8)', star:false }
  ],

  // ── Unit log (newest first — renders Dashboard session log) ───────
  unitLog: [
    {
      n: 21,
      badge: 'linear-gradient(135deg,#311B92,#512DA8)',
      title: 'Equation Solving &middot; Variables on Both Sides',
      tags: [
        { t:'Upcoming &#128197;', c:'tpurple' },
        { t:'L1: Balance Method', c:'tblue' },
        { t:'L2: Both Sides', c:'tblue' }
      ],
      note: 'Core algebraic unlock: variables on both sides (e.g. 3n+12=5n&minus;4). Prerequisite for advanced angle algebra, SimEq extension, and ratio-change problems. Use n throughout (not x). Visual-first: balance scale concept in Lesson 1.',
      status: 'pending'
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
      label:     'Vertically Opposite Angles &mdash; ACTIVE &mdash; basic rule not firing',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'U19 Q9 &#10007; blank (most basic vert-opp: one angle=48&#176;, find all four). Q13 &#10007; blank (vert-opp + algebra). Rule completely missing &mdash; never attempted either question. U20 Lesson 1 targets this with visual drill.',
      fillClass: 'g1', fillPct: 0
    },
    {
      label:     'Advanced Angle Algebra &mdash; ACTIVE &mdash; Q14 started/Q15 blank',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'U19 Q14 &#10007; (quad algebra: wrote 4x+80=360 in working but did not finish). Q15 &#10007; (isosceles+algebra: drew triangle correctly, no algebra attempted). Can solve triangle (Q11 &#10003;) and straight-line algebra (Q12 &#10003;) &mdash; needs to extend to quad and isosceles forms. U20 Lesson 2 targets both.',
      fillClass: 'g1', fillPct: 20
    },
    {
      label:     'Geometry: Angles &mdash; ACTIVE &mdash; debut strong but 4 blanks',
      pill:      'p2', pillText: 'ACTIVE &#128308;',
      score:     'U19 Angles debut 6/10. Basic rules solid: triangle &#10003; Q6, quad &#10003; Q7, straight line &#10003; Q8, isosceles &#10003; Q10, algebra triangle &#10003; Q11, algebra line &#10003; Q12. Gaps: Q9 vert-opp blank, Q13 vert-opp algebra blank, Q14 quad algebra started/blank, Q15 isosceles algebra blank. U20 closes all 4.',
      fillClass: 'g1', fillPct: 40
    },
    {
      label:     'Sequences: All gaps &mdash; RESOLVED in U19',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U19 Sec A 5/5 &#127775; PERFECT. Inequality rounding &#10003; (Q3 T14, Q4 T18). Two-conditions &#10003; (Q5 T1=5 T15=75). Jump-count &#10003; (Q2 d=4). All 3 U18 sequence gaps fully closed.',
      fillClass: 'gs', fillPct: 97
    },
    {
      label:     'Ratio Changes (before/after, ages) &mdash; RESOLVED in U18',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U18 Sec C 5/5 &#127775; PERFECT. All k-method types correct: add &#10003;, remove &#10003;, ages &#10003; (Q12), transfer &#10003; (Q15). Complete turnaround from U17 Q15 blank.',
      fillClass: 'gs', fillPct: 97
    },
    {
      label:     'SimEq Two-Variable Totals &mdash; RESOLVING &mdash; equation method solid',
      pill:      'p2', pillText: 'Resolving &#128992;',
      label:     'SimEq Two-Variable Totals &mdash; RESOLVING &mdash; equation method now solid',
      pill:      'p2', pillText: 'Resolving &#128992;',
      score:     'U16 SimEq Two-Variable 5/5 &#10003;: equation method with bracket expansion applied independently across all 5 problems including Q10&#9733;&#9733;. Significant improvement from U13/U14 where Assume &amp; Adjust was used. Goal achieved: equation fluency confirmed.',
      fillClass: 'g2', fillPct: 80
    },
    {
      label:     'Geometry: frame outer/inner trap &mdash; RESOLVED in U15',
      pill:      'ps', pillText: 'Resolved &#10003;',
      score:     'U15 Frame Trap 5/5 &#10003;: all five frame problems correct including Q5&#9733;&#9733; hardest variant. The frame-given-outer trap (added border outward instead of subtracting inward) that caused 4 consecutive misses in U11&ndash;U14 is now fully resolved. Visual lesson with CSS nested-div diagram + step-card worked examples locked the method.',
      fillClass: 'gs', fillPct: 97
    },
    {
      label:     'Applied Problems &mdash; Kangaroo instinct developing',
      pill:      'p2', pillText: 'Improving &#128992;',
      score:     'U15 Kangaroo Count 5/5 &#10003;: units digit cycles (period-4 rule for all 6 bases), staircase paths (Fibonacci), consecutive integers all correct. M1 Kangaroo gaps Q18/Q19/Q20 directly addressed &mdash; Q19-type staircase now solid. Applied instinct is growing. Next: raise radar target from 62&rarr;65 as harder applied problems are introduced.',
      fillClass: 'g2', fillPct: 62
    },
    {
      label:     'Both-Ends &times;2 rule &mdash; RESOLVED in U11',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'U11 Both-Ends 5/5 &#10003;: Q7 either-end 2&times;5!=240 &#10003; (exact M1 miss type &mdash; now locked). All three both-ends types are fully automatic.',
      fillClass: 'gs', fillPct: 98
    },
    {
      label:     'Prime Fact trigger &mdash; RESOLVED &amp; holding',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'M1 Sec A 5/5 &#10003;. Factor trees on every question. U10 5/5. U15 HCF 5/5 &#10003;. Trigger fully automatic across 5+ units.',
      fillClass: 'gs', fillPct: 97
    },
    {
      label:     'Fraction direction two-step &mdash; RESOLVED &amp; holding',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'M1 Q9 &#10003;, Q13 &#10003;, Q15&#9733; &#10003;. All fraction direction types solid. Bar model method consistent.',
      fillClass: 'gs', fillPct: 97
    }
  ],
  radarLegendUnit: 'U19'

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

// ── Render: score bar chart ───────────────────────────────────────────
PREM_DATA.renderScoreChart = function(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  var outOf = this.outOf;
  var html = '';
  this.scores.forEach(function(s) {
    var h  = Math.round(s.score / outOf * 100);
    var dl = s.delta === null ? '' :
             (s.delta > 0 ? '+' + s.delta + '&#11014;' : '&minus;' + Math.abs(s.delta) + '&#11015;');
    var dlColor = s.delta === null ? '' :
                  (s.delta > 0 ? 'color:#43e97b' : 'color:#f6993f');
    html += '<div class="bc-unit">';
    html += '<div class="bc-bar-wrap"><div class="bc-bar" style="height:' + h + '%;background:' + s.color + '"></div></div>';
    html += '<div class="bc-score">' + s.score + (s.star ? '&#127775;' : '') + '</div>';
    if (dl) html += '<div class="bc-delta" style="' + dlColor + '">' + dl + '</div>';
    html += '<div class="bc-lbl">' + (s.label || ('U' + s.n)) + '</div>';
    html += '</div>';
  });
  el.innerHTML = html;
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
