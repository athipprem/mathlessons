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
  updated:        '22 May 2026',
  coachStartDate: '2026-05-14',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: {
    n:           11,
    status:      'Lessons In Progress',
    testPending: false
  },
  lastUnit: {
    n: 'M1', score: 14, outOf: 15, pct: 93, delta: -1, prevScore: 15,

    // ── Overview pattern insight ──────────────────────────────────────
    patternLabel:   'Milestone 1 &mdash; 14/15 (93%) ISA &middot; 2/5 Kangaroo',
    patternInsight: '<strong>Comprehensive review across U1&ndash;U10. ISA 14/15 &mdash; one slip.</strong> Q7 ❌ Both-Ends &ldquo;either end&rdquo; format: wrote 4!=24, forgot &times;2 (correct 48). This type fires less automatically than &ldquo;fixed ends&rdquo; under timed pressure. Everything else clean &mdash; prime fact trigger solid, fraction two-step solid, work-backwards solid, Q15&#9733; $280 correct. Kangaroo 2/5: Q16 digit puzzle &#10003; Q17 grid squares &#10003; Q18 consecutive &#10007; (no algebraic shortcut) Q19 staircase &#10007; (applied 6!, not Fibonacci) Q20 units digit &#10007; (cycle period not known). Applied Problems radar raised 38&rarr;42.',

    // ── Results panel analysis insight ───────────────────────────────
    analysisLabel:   'Milestone 1 analysis &mdash; Units 1&ndash;10',
    analysisInsight: '<strong>ISA section: 14/15 &mdash; single miss at Q7.</strong> Sec A 5/5: prime factorisation trigger firing reliably on all formats, factor trees on every question. Sec B 4/5: Q7 &#10007; wrote 4!=24 for &ldquo;6 people, one person at either end&rdquo; &mdash; forgot &times;2=48. The &times;2 fires for fixed-ends (two named people) but slipped on the one-person-either-end format under timed pressure. Sec C 5/5: fraction two-step, both-ends-fixed (Q12), work-backwards, Q15&#9733; $280 all perfect. Kangaroo 2/5 (diagnostic, not scored): Q16 2-digit puzzle &#10003; (verified 74&minus;47=27). Q17 grid squares &#10003; (1&times;1+2&times;2+3&times;3=14, drew it). Q18 consecutive &#10007; (tried listing, middle=sum&divide;count shortcut not in toolkit). Q19 staircase 6 steps &#10007; (applied 6! &mdash; path-counting Fibonacci-type not recognised). Q20 units digit 7&sup1;&sup5; &#10007; (drew some 7s but period-4 cycle not extracted).',

    // ── Q breakdown summary bar ───────────────────────────────────────
    qSummary: '<strong>ISA: Sec A 5/5 &#9733; &middot; Sec B 4/5 (Q7 &#10007; &times;2 slip) &middot; Sec C 5/5 &#9733; Q15&#9733; &#10003;.</strong> Kangaroo 2/5: Q16 &#10003; digit puzzle &middot; Q17 &#10003; grid squares &middot; Q18 &#10007; consecutive &middot; Q19 &#10007; staircase paths &middot; Q20 &#10007; units digit cycle.',

    // ── Q-by-Q breakdown (lvl: w=Warm  m=Med  h=Hard) ────────────────
    // ISA Q1-Q15 + Kangaroo Q16-Q20 (diagnostic, marked kangaroo:true)
    qBreakdown: [
      { q:'Q1',  topic:'Prime Fact &mdash; factorise 36',                                    lvl:'w', pass:true,  note:'2&sup2;&times;3&sup2; &#10003; &mdash; factor tree drawn. Trigger firing reliably.' },
      { q:'Q2',  topic:'Factor Count &mdash; how many factors does 24 have?',                lvl:'w', pass:true,  note:'8 &#10003; &mdash; factor pairs listed correctly: 1,2,3,4,6,8,12,24.' },
      { q:'Q3',  topic:'LCM &mdash; LCM(15, 20)',                                           lvl:'m', pass:true,  note:'60 &#10003; &mdash; listed multiples of 20: 20,40,60. LCM method solid.' },
      { q:'Q4',  topic:'Factorials &mdash; 6 t-shirt colours, 1 worn each day for 6 days',  lvl:'m', pass:true,  note:'720 &#10003; &mdash; 6!=720. Factorial trigger correct.' },
      { q:'Q5',  topic:'Prime Fact &mdash; factors of 90 (prime+composite count)',           lvl:'m', pass:true,  note:'12 &#10003; &mdash; 90=2&times;3&sup2;&times;5, factor count (1+1)(2+1)(1+1)=12.' },
      { q:'Q6',  topic:'Ratio &mdash; 3:5, 24 stamps total',                                lvl:'w', pass:true,  note:'A=9, B=15 &#10003; &mdash; 1 part=24&divide;8=3, ratio applied correctly.' },
      { q:'Q7',  topic:'Both-Ends &mdash; 6 people, one person at either end',              lvl:'m', pass:false, note:'&#10007; Wrote 4!=24. Correct: 2&times;5!=48. &times;2 forgotten &mdash; &ldquo;either end&rdquo; format under timed pressure. Sec A fixed-ends fine; this type needs one more drill.' },
      { q:'Q8',  topic:'Ratio Type B &mdash; difference given',                             lvl:'m', pass:true,  note:'&#10003; Ratio difference problem solved correctly.' },
      { q:'Q9',  topic:'Fraction Two-Step &mdash; multi-operation',                         lvl:'m', pass:true,  note:'&#10003; Kept-fraction chain method applied correctly.' },
      { q:'Q10', topic:'3-Way Ratio &mdash; three quantities',                              lvl:'m', pass:true,  note:'&#10003; 3-way ratio handled correctly.' },
      { q:'Q11', topic:'Work-Backwards &mdash; &times;3 then &minus;5',                    lvl:'w', pass:true,  note:'&#10003; Reversed steps correctly.' },
      { q:'Q12', topic:'Both-Ends Fixed &mdash; 7 people, two named at ends',              lvl:'m', pass:true,  note:'&#10003; 2&times;5!=240. Fixed-ends swap rule applied. Solid.' },
      { q:'Q13', topic:'Fraction Two-Step &mdash; two kept fractions chained',              lvl:'m', pass:true,  note:'&#10003; Kept-fraction chain correct.' },
      { q:'Q14', topic:'Work-Backwards &mdash; &times;2 +10 &divide;3',                    lvl:'m', pass:true,  note:'&#10003; Multi-step reverse correct.' },
      { q:'Q15', topic:'Multi-Step Word Problem &#9733; &mdash; fundraising $280',          lvl:'h', pass:true,  note:'$280 &#10003; &mdash; hardest question, full working shown. Applied Problems instinct strong.' },
      { q:'Q16', topic:'[Kangaroo] 2-digit puzzle &mdash; sum 11, reversed +27',           lvl:'m', pass:true,  note:'47 &#10003; &mdash; tried 47, verified 74&minus;47=27. Smart checking.' },
      { q:'Q17', topic:'[Kangaroo] Count all squares in 3&times;3 grid',                   lvl:'m', pass:true,  note:'14 &#10003; &mdash; drew grid, counted 1&times;1 (9) + 2&times;2 (4) + 3&times;3 (1) systematically.' },
      { q:'Q18', topic:'[Kangaroo] Sum of 5 consecutive = 100, find largest',              lvl:'h', pass:false, note:'&#10007; Blank. Tried listing 16&ndash;20=90. Shortcut not known: middle=100&divide;5=20, so 18,19,20,21,22, largest=22. U11 lesson targets this.' },
      { q:'Q19', topic:'[Kangaroo] Frog staircase 6 steps (1 or 2 at a time)',             lvl:'h', pass:false, note:'&#10007; Applied 6!=720. Correct=13 (path-counting, Fibonacci type). Not ISA curriculum &mdash; diagnostic gap noted.' },
      { q:'Q20', topic:'[Kangaroo] Units digit of 7&sup1;&sup5;',                          lvl:'h', pass:false, note:'&#10007; Blank after drawing some 7s. Period-4 cycle (7,9,3,1) not extracted. 7&sup1;&sup5;: 15 mod 4=3 &rarr; units digit=3. Not ISA curriculum &mdash; diagnostic gap noted.' }
    ]
  },

  // ── Skills ───────────────────────────────────────────────────────
  // Display order used for skill-bar tables in both pages.
  // achievement % = sum(c) / sum(t) × 100  →  560 / 677 = 83%
  skills: [
    { name: 'Logic & Reasoning', c: 87, t: 90 },
    { name: 'Number Sense',      c: 88, t: 90 },
    { name: 'Algebra',           c: 91, t: 85 },
    { name: 'Arithmetic',        c: 82, t: 85 },
    { name: 'Geometry',          c: 72, t: 80 },
    { name: 'Counting',          c: 78, t: 85 },
    { name: 'Number Theory',     c: 68, t: 82 },
    { name: 'Applied Problems',  c: 42, t: 80 }
  ],

  // Radar chart axes order: Logic, Geometry, NumSense, Algebra, Counting, Arith, NumTheory, Applied
  radarCurrent:  [87, 72, 88, 91, 78, 82, 68, 42],
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
    { n:'M1', label:'M1', score:14, delta:-1,   color:'linear-gradient(135deg,#4527A0,#7C3AED)', star:false }
  ],

  // ── Unit log (newest first — renders Dashboard session log) ───────
  unitLog: [
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
      label:     'Both-Ends &times;2 rule &mdash; <strong>slipped in M1 Q7</strong>',
      pill:      'p2', pillText: 'Monitor &#128992;',
      score:     'M1 Q7: both-ends one-person &mdash; wrote 4!=24, forgot &times;2=48. Got ALL 5 both-ends Qs correct in U10, then slipped here. The &times;2 fires reliably on &ldquo;fixed ends&rdquo; format but is not yet automatic on &ldquo;one person at one end&rdquo; under pressure. Needs one more reinforcement drill.',
      fillClass: 'g2', fillPct: 60
    },
    {
      label:     'Consecutive number sequences &mdash; algebraic approach',
      pill:      'p2', pillText: 'New gap',
      score:     'M1 Q18: sum of 5 consecutive = 100 &mdash; tried listing (16&ndash;20=90) but no algebraic shortcut. Key insight not yet seen: middle term = sum&divide;count = 100&divide;5 = 20, so numbers are 18,19,20,21,22. This pattern also appears in ISA word problems.',
      fillClass: 'g2', fillPct: 20
    },
    {
      label:     'Geometry &amp; Spatial Reasoning &mdash; rotate into U12+ more frequently',
      pill:      'p2', pillText: 'Flagged &#128992;',
      score:     'Lowest skill score (72/80 target) &mdash; not yet tested as a unit focus. FMC confirmed cross-competition weakness: Q4 rectangle definition (chose rhombus as rectangle), Q6 paper folding (wrong unfolded pattern), Q8 3D hidden cubes (missed weight-per-cube method), Q17 rectangle perimeter balls (forgot &minus;4 corner correction). U11 introduced Perimeter &amp; Area &mdash; good start. Action: rotate Geometry into U12+ more frequently rather than leaving it last in the cycle.',
      fillClass: 'g2', fillPct: 28
    },
    {
      label:     'Applied Problems &mdash; Kangaroo instinct developing',
      pill:      'p2', pillText: '2/5 Kangaroo',
      score:     'Q16 &#10003; digit puzzle, Q17 &#10003; grid squares. Q18 &#10007; (consecutive = listing not algebra). Q19 &#10007; (staircase paths &mdash; used 6! instead of recognising path-counting type). Q20 &#10007; (units digit cycle unknown). Applied instinct developing but limited to familiar problem types. Introduce harder ISA multi-step in upcoming units.',
      fillClass: 'g2', fillPct: 38
    },
    {
      label:     'Prime Fact trigger &mdash; RESOLVED &amp; holding',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'M1 Sec A 5/5 &#10003;. Factor trees on every question. U10 5/5. Drought over &mdash; trigger fully automatic now.',
      fillClass: 'gs', fillPct: 97
    },
    {
      label:     'Both-Ends fixed ends (&times;2 swap) &mdash; RESOLVED',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'U10 Q8/Q9/Q10 all correct. M1 Q12 (7 students, fixed ends) correct &#10003;. Fixed-ends format fully solid. Issue is now only the &ldquo;one person at end&rdquo; format under pressure.',
      fillClass: 'gs', fillPct: 95
    },
    {
      label:     'Fraction direction two-step &mdash; RESOLVED &amp; holding',
      pill:      'ps', pillText: 'Solid &#10003;',
      score:     'M1 Q9 &#10003;, Q13 &#10003;, Q15&#9733; &#10003;. All fraction direction types solid. Bar model method consistent.',
      fillClass: 'gs', fillPct: 97
    }
  ],

  // ── Radar legend unit label ───────────────────────────────────────
  radarLegendUnit: 'U10'

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
