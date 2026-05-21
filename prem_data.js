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
  updated:        '21 May 2026',
  coachStartDate: '2026-05-14',
  isaDate:        '2027-02-26',

  // ── Current state ────────────────────────────────────────────────
  currentUnit: {
    n:           10,
    status:      'Lessons In Progress',
    testPending: false
  },
  lastUnit: {
    n: 9, score: 8, outOf: 15, pct: 53, delta: -1, prevScore: 9,

    // ── Overview pattern insight ──────────────────────────────────────
    patternLabel:   'Unit 9 pattern &mdash; 8/15 (53%)',
    patternInsight: '<strong>Prime fact 1/5 &mdash; trigger still not firing, 5th consecutive unit. Pre-scan box printed on the paper and still ignored.</strong> Q1/Q2/Q4/Q5 blank. Q3 partial &#10003; (got factor count 16, showed 120 in working). Ratio FIRST EXPOSURE 4/5 &mdash; strong. Q8 wrong = slip only (found 1 part correctly then halved it again). Fraction direction: Q11 &#10003;, Q12 &#10007; (lost thread at step 2, got 96). Both-ends: Q13 &#10003; (either end = 2&times;4!), Q14 &#10007; (fixed ends &mdash; forgot &times;2 for swapping tall/short). Algebra: Q15 &#10003;.',

    // ── Results panel analysis insight ───────────────────────────────
    analysisLabel:   'Unit 9 analysis',
    analysisInsight: '<strong>Prime factorisation trigger: 5th consecutive unit, still blank on Q1/Q2/Q4/Q5.</strong> The pre-scan reminder box was printed directly on the test &mdash; he still did not use it. A printed reminder is clearly not enough. U10 must introduce a physical ritual: pencil underlines trigger words BEFORE writing anything. Ratio new topic 4/5 is genuinely impressive &mdash; both Type A and Type B landed. Q8 wrong was a slip (correct setup: 48&divide;2=24, then mistakenly halved to 12 before &times;5). Fraction direction: Q11 one-step worked; Q12 two-step lost at second step (calculated 96, likely treated 1/4 as the remaining fraction). Both-ends perms: Q13 &#10003; (either end = 2&times;(n&minus;1)!), Q14 &#10007; &mdash; he knew to do 4! for middles but forgot to multiply by 2 for swapping tall and short between ends.',

    // ── Q breakdown summary bar ───────────────────────────────────────
    qSummary: '<strong>Sec A (Prime Fact &amp; Factor Enum) 1/5 &middot; Sec B (Ratio Basics) 4/5 &middot; Sec C (Fraction Dir + Both-Ends + Algebra) 3/5.</strong> Prime fact: Q1/Q2/Q4/Q5 blank &mdash; 5th unit, pre-scan ignored. Ratio first exposure 4/5 &#11014;. Q8 slip (halved part twice). Fraction dir Q12 wrong (two-step). Both-ends Q14 wrong (forgot &times;2). Q15 work-backwards &#10003;.',

    // ── Q-by-Q breakdown (lvl: w=Warm  m=Med  h=Hard) ────────────────
    qBreakdown: [
      { q:'Q1',  topic:'Prime Fact &mdash; factorise 72',                            lvl:'w', pass:false, note:'Blank &mdash; trigger not firing, 5th consecutive unit. Pre-scan box on test, still ignored.' },
      { q:'Q2',  topic:'Factor Enum &mdash; how many factors does 48 have?',         lvl:'w', pass:false, note:'Blank &mdash; trigger not firing' },
      { q:'Q3',  topic:'Prime Fact + Factor Count &mdash; 2&sup3;&times;3&times;5', lvl:'m', pass:true,  note:'Wrote 16 (factor count) &#10003;. Working shows 120 correctly. Full credit given.' },
      { q:'Q4',  topic:'LCM &mdash; 2&sup2;&times;3 and 2&times;3&sup2;',           lvl:'m', pass:false, note:'Blank &mdash; trigger not firing' },
      { q:'Q5',  topic:'Factor Enum &mdash; how many factors does 180 have?',        lvl:'h', pass:false, note:'Blank &mdash; trigger not firing' },
      { q:'Q6',  topic:'Ratio Type A &mdash; 3:5 total 64, find Ali',               lvl:'w', pass:true,  note:'24 &#10003; &mdash; 1 part = 8, Ali = 24' },
      { q:'Q7',  topic:'Ratio Type A &mdash; 4:7 total 33, find blue',              lvl:'w', pass:true,  note:'21 &#10003; &mdash; 1 part = 3, blue = 21' },
      { q:'Q8',  topic:'Ratio Type B &mdash; 5:3 diff = $48, find Jake',            lvl:'m', pass:false, note:'Wrote 60. Working: 48&divide;2=24 &#10003; then used 12&times;5=60 &#10007;. Halved again by mistake. Correct: 24&times;5=120.' },
      { q:'Q9',  topic:'Ratio 3-way &mdash; 2:3:5 total 120, largest share',        lvl:'m', pass:true,  note:'60 &#10003; &mdash; 1 part = 12, largest = 5&times;12' },
      { q:'Q10', topic:'Ratio Type B &mdash; 3:8 diff = 20kg, find cat food',       lvl:'m', pass:true,  note:'12 kg &#10003; &mdash; 1 part = 4, cat = 3&times;4' },
      { q:'Q11', topic:'Fraction Direction &mdash; gave &frac25;, lost &frac13;, left 16', lvl:'m', pass:true,  note:'40 &#10003; &mdash; fraction lesson landed. Correct two-step.' },
      { q:'Q12', topic:'Fraction Direction &mdash; sold &frac37; morn, &frac14; of rest, left 24', lvl:'h', pass:false, note:'Working shows 96 (answer blank). Likely took &frac14; as remaining fraction. Correct: kept &frac37; of start; 24&divide;(&frac37;)=56.' },
      { q:'Q13', topic:'Both-Ends &mdash; 5 people, A at either end',               lvl:'m', pass:true,  note:'48 &#10003; &mdash; 2&times;4!=48. Both-ends either end formula correct.' },
      { q:'Q14', topic:'Both-Ends &mdash; 6 students, tall &amp; short at fixed ends', lvl:'m', pass:false, note:'Wrote 24 (4! only). Forgot &times;2 for swapping tall &amp; short between ends. Correct: 2&times;4!=48.' },
      { q:'Q15', topic:'Work-Backwards Algebra &mdash; &times;3&minus;7&divide;2=10', lvl:'w', pass:true,  note:'9 &#10003; &mdash; reverse steps correct.' }
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
    { name: 'Counting',          c: 70, t: 85 },
    { name: 'Number Theory',     c: 50, t: 82 },
    { name: 'Applied Problems',  c: 22, t: 80 }
  ],

  // Radar chart axes order: Logic, Geometry, NumSense, Algebra, Counting, Arith, NumTheory, Applied
  radarCurrent:  [87, 72, 88, 91, 70, 82, 50, 22],
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
    { n:9, score:8,  delta:-1,   color:'linear-gradient(135deg,#f6993f,#fdcb6e)', star:false }
  ],

  // ── Unit log (newest first — renders Dashboard session log) ───────
  unitLog: [
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
      label:     'Prime Fact trigger &mdash; <strong>5 units blank</strong>',
      pill:      'p1', pillText: 'Priority 1 &#128683;',
      score:     'U5&ndash;U9: Q1/Q2/Q4/Q5 blank in U9 despite pre-scan box printed on test. <strong>Written reminder failed.</strong> U10 escalation: physical ritual &mdash; pencil underlines every trigger word before writing anything.',
      fillClass: 'g1', fillPct: 8
    },
    {
      label:     'Both-ends fixed ends &mdash; missing &times;2',
      pill:      'p1', pillText: 'Priority 2 &#128308;',
      score:     'U9 Q14: wrote 24 (4! correct for middles) but forgot &times;2 for swapping tall &amp; short between ends. Correct: 2&times;4!=48. Got Q13 (either end) right. One targeted drill needed.',
      fillClass: 'g1', fillPct: 30
    },
    {
      label:     'Fraction direction &mdash; two-step sequence',
      pill:      'p2', pillText: 'Priority 3',
      score:     'U9 Q12: one-step fraction (Q11) now solid &#10003;. Two-step lost at step 2 &mdash; calculated 96 (likely took &frac14; as remaining). Correct: track kept fractions through each step. One more drill.',
      fillClass: 'g2', fillPct: 40
    },
    {
      label:     'Ratio Type B &mdash; calculation slip watch',
      pill:      'p2', pillText: 'Watch',
      score:     'U9 Q8: correct setup (48&divide;2=24) then halved again to 12 before &times;5. Not a conceptual gap &mdash; slip. Monitor in U10. No lesson needed.',
      fillClass: 'g2', fillPct: 70
    },
    {
      label:     'Ratio basics',
      pill:      'ps', pillText: 'Taught &#11014; U9',
      score:     'U9 first exposure 4/5 &mdash; both Type A (total) and Type B (difference) landed. Q8 wrong = slip only. Strong start.',
      fillClass: 'gs', fillPct: 80
    },
    {
      label:     'Factor enumeration',
      pill:      'ps', pillText: 'Fixed &#11014; U8',
      score:     'U8 Q4/Q5 both correct. U9 Q3 correct (factor count 16 &amp; number 120). Pair method fully solid.',
      fillClass: 'gs', fillPct: 90
    }
  ],

  // ── Radar legend unit label ───────────────────────────────────────
  radarLegendUnit: 'U9'

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
