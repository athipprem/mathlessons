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
  updated:        '20 May 2026',
  coachStartDate: '2026-05-14',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: {
    n:           9,
    status:      'Lessons Ready',
    testPending: true
  },
  lastUnit: {
    n: 8, score: 9, outOf: 15, pct: 60, delta: -1, prevScore: 10,

    // ── Overview pattern insight ──────────────────────────────────────
    patternLabel:   'Unit 8 pattern &mdash; 9/15 (60%)',
    patternInsight: '<strong>Prime fact 0/5 &mdash; trigger still not firing, 4th consecutive unit.</strong> Q1/Q2/Q3 blank. Factor enumeration FIXED: Q4/Q5 both correct (pair method landed). Double-constraint perms 4/5 &mdash; Q7 wrong (both-endpoints logic + 6! not applied). Algebra 3/5 &mdash; Q13 fraction reversal (gave &frac13; away &rarr; &times;3 instead of &divide;&frac23;), Q14 blank (ratio not yet taught).',

    // ── Results panel analysis insight ───────────────────────────────
    analysisLabel:   'Unit 8 analysis',
    analysisInsight: '<strong>Prime factorisation: 0/5 for the fourth consecutive unit.</strong> Q1/Q2/Q3 blank &mdash; the trigger simply is not firing when he sees a blank factorisation problem. U9 must escalate to a physical pre-scan protocol. Factor enumeration is now solid (Q4/Q5 both correct &mdash; pair method works). Double-constraint perms largely fixed &mdash; Q7 reveals a new gap: both-endpoints problems where fixing the two ends creates a different counting structure (2&times;(n&minus;2)!). Algebra dropped to 3/5 due to two new gaps: fraction direction inversion and ratio (not yet taught). Both addressed in U9.',

    // ── Q breakdown summary bar ───────────────────────────────────────
    qSummary: '<strong>Sec A (Prime Fact &amp; Factor Enum) 2/5 &middot; Sec B (Double-Constraint Perms) 4/5 &middot; Sec C (Algebra) 3/5.</strong> Prime fact trigger still not firing &mdash; Q1/Q2/Q3 blank (4th unit). Factor enumeration FIXED (Q4/Q5 both correct). Perms largely done (Q7 wrong: both-endpoints logic missed). Algebra: fraction reversal (Q13) and ratio blank (Q14 &mdash; not taught).',

    // ── Q-by-Q breakdown (lvl: w=Warm  m=Med  h=Hard) ────────────────
    qBreakdown: [
      { q:'Q1',          topic:'Prime Fact &mdash; factorise 56',                                    lvl:'w', pass:false, note:'Blank &mdash; trigger not firing, 4th consecutive unit' },
      { q:'Q2',          topic:'Prime Fact &mdash; factorise 108',                                   lvl:'w', pass:false, note:'Blank &mdash; trigger not firing' },
      { q:'Q3',          topic:'Prime Fact &mdash; factorise 225',                                   lvl:'m', pass:false, note:'Blank &mdash; trigger not firing' },
      { q:'Q4',          topic:'Factor Enum &mdash; how many factors does 48 have?',                 lvl:'m', pass:true,  note:'10 factors &#10003; &mdash; pair method shown correctly' },
      { q:'Q5',          topic:'Factor Enum &mdash; N = 2&sup2;&times;3&times;5, count all factors', lvl:'h', pass:true,  note:'12 factors &#10003; &mdash; formula method correct' },
      { q:'Q6',          topic:'Double-Constraint &mdash; 6 books, fix first slot',                  lvl:'w', pass:true,  note:'5! = 120 &#10003;' },
      { q:'Q7 &#11088;', topic:'Double-Constraint &mdash; 7 students, two fixed at both ends',       lvl:'h', pass:false, note:'Wrote 120 (5!) &mdash; missed both-ends = 2&times;6! = 1440. New gap.' },
      { q:'Q8',          topic:'Double-Constraint &mdash; 5-digit code, fix 2nd &amp; 4th slots',    lvl:'m', pass:true,  note:'5&times;4&times;3 = 60 &#10003;' },
      { q:'Q9',          topic:'Double-Constraint &mdash; arrange Maya &amp; Leo from 7',            lvl:'m', pass:true,  note:'5! = 120 &#10003;' },
      { q:'Q10',         topic:'Double-Constraint &mdash; 6-digit from 1&ndash;8, fix 5 &amp; 8',   lvl:'h', pass:true,  note:'6&times;5&times;4&times;3 = 360 &#10003;' },
      { q:'Q11',         topic:'Algebra &mdash; work backwards: &divide;3+8=14',                     lvl:'w', pass:true,  note:'18 &#10003;' },
      { q:'Q12',         topic:'Algebra &mdash; 4 consecutive numbers, sum = 54',                    lvl:'w', pass:true,  note:'15 &#10003;' },
      { q:'Q13',         topic:'Algebra &mdash; Tom gives &frac13; away, how many left?',            lvl:'m', pass:false, note:'Wrote 72 (&times;3 wrong) &mdash; correct 36 (&divide;&frac23;). Fraction reversal gap.' },
      { q:'Q14',         topic:'Algebra &mdash; ratio 2:5, difference = 21',                         lvl:'m', pass:false, note:'Blank &mdash; wrote &ldquo;I HAVE NOT LEARNED RATIO&rdquo;. Not yet taught.' },
      { q:'Q15 &#11088;',topic:'Algebra &mdash; tickets $8 &amp; $5, word problem',                  lvl:'h', pass:true,  note:'40 &#10003; &mdash; trial &amp; error method (correct)' }
    ]
  },

  // ── Skills ───────────────────────────────────────────────────────
  // Display order used for skill-bar tables in both pages.
  // achievement % = sum(c) / sum(t) × 100  →  560 / 677 = 83%
  skills: [
    { name: 'Logic & Reasoning', c: 87, t: 90 },
    { name: 'Number Sense',      c: 88, t: 90 },
    { name: 'Algebra',           c: 91, t: 85 },
    { name: 'Arithmetic',        c: 80, t: 85 },
    { name: 'Geometry',          c: 72, t: 80 },
    { name: 'Counting',          c: 70, t: 85 },
    { name: 'Number Theory',     c: 50, t: 82 },
    { name: 'Applied Problems',  c: 22, t: 80 }
  ],

  // Radar chart axes order: Logic, Geometry, NumSense, Algebra, Counting, Arith, NumTheory, Applied
  radarCurrent:  [87, 72, 88, 91, 70, 80, 50, 22],
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
    { n:8, score:9,  delta:-1,   color:'linear-gradient(135deg,#f6993f,#fdcb6e)', star:false }
  ],

  // ── Unit log (newest first — renders Dashboard session log) ───────
  unitLog: [
    {
      n: 9,
      badge: 'linear-gradient(135deg,#9B59B6,#6C3483)',
      title: 'Pre-Scan Protocol &middot; Ratio Basics &middot; Fraction Direction &amp; Both-Ends',
      tags: [
        { t:'Lessons Ready', c:'tpurple' },
        { t:'Test Pending &#128203;', s:'background:#fff5f5;color:#c53030' },
        { t:'Pre-Scan &#128683;', c:'torange' },
        { t:'Ratio (new)', c:'tgreen' }
      ],
      note: 'Three lessons delivered: (1) Pre-Scan Protocol &mdash; 5-step ritual to fix 4-unit trigger gap. (2) Ratio Basics &mdash; Type A (total) &amp; Type B (difference). (3) Fraction Direction + Both-Ends Perms. Test: U9_Test_PreScanProtocol_RatioBasics_FractionDir.',
      status: 'lessons'
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
      label:     'Prime Fact trigger &mdash; pre-scan protocol',
      pill:      'p1', pillText: 'Priority 1 &#128683;',
      score:     'U5/U6/U7/U8: Q1&ndash;Q3 blank for <strong>4 consecutive units</strong>. 0/5 in U8. Knowledge present &mdash; trigger not firing cold. U9 escalation: pre-scan ritual before starting test.',
      fillClass: 'g1', fillPct: 10
    },
    {
      label:     'Both-endpoints permutation (n&minus;2 middle)',
      pill:      'p1', pillText: 'Priority 2 &#128308;',
      score:     'U8 Q7: wrote 120 (5!), correct 1440 (2&times;6! &mdash; fix both ends first, then 6 middle slots). New gap identified in U8.',
      fillClass: 'g1', fillPct: 30
    },
    {
      label:     'Fraction reversal &mdash; &ldquo;give away&rdquo; problems',
      pill:      'p2', pillText: 'Priority 3',
      score:     'U8 Q13: &ldquo;gave &frac13; away&rdquo; &rarr; he did &times;3 (wrong). Correct: kept &frac23;, so work-backwards means &divide;&frac23;. New gap, fraction direction inverted.',
      fillClass: 'g2', fillPct: 35
    },
    {
      label:     'Ratio basics',
      pill:      'ph', pillText: 'Not taught',
      score:     'U8 Q14: blank &mdash; wrote &ldquo;I HAVE NOT LEARNED RATIO.&rdquo; Not yet introduced. U9 will teach ratio from scratch.',
      fillClass: 'g2', fillPct: 0
    },
    {
      label:     'Factor enumeration',
      pill:      'ps', pillText: 'Fixed &#11014; U8',
      score:     'U7 Q5 miss (missed 40) &rarr; U8 Q4/Q5 both correct. Pair method fully landed.',
      fillClass: 'gs', fillPct: 90
    },
    {
      label:     'Double-constraint permutations',
      pill:      'ps', pillText: 'Largely fixed &#11014;',
      score:     'U7 Q10 blank &rarr; U8 Q8/Q9/Q10 all correct. Q7 wrong (different gap: both-endpoints, not double-constraint).',
      fillClass: 'gs', fillPct: 75
    }
  ],

  // ── Radar legend unit label ───────────────────────────────────────
  radarLegendUnit: 'U8'

};

// ── Computed helpers ──────────────────────────────────────────────────
PREM_DATA.skillSum    = function() { return this.skills.reduce(function(s,k){ return s+k.c; }, 0); };
PREM_DATA.targetSum   = function() { return this.skills.reduce(function(s,k){ return s+k.t; }, 0); };
PREM_DATA.achievement = function() { return Math.round(this.skillSum() / this.targetSum() * 100); };
PREM_DATA.skillColor  = function(c, t) {
  var r = c / t;
  return r >= 1 ? '#43e97b' : r >= 0.85 ? '#f6993f' : '#fc4e4e';
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
    html += '<div class="bc-lbl">U' + s.n + '</div>';
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
