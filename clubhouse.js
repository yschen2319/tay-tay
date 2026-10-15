(function () {
  "use strict";

  const DAILY_KEY = "tt_club_daily";
  const QUIZ_KEY = "tt_eras_quiz";
  const quizModes = { quick: { label: "Quick", count: 5 }, full: { label: "Full", count: 15 } };

  const quizBank = [
  {
    "q": "Which album was written entirely by Taylor?",
    "options": [
      "Speak Now",
      "Red",
      "Fearless",
      "folklore"
    ],
    "answer": 0,
    "note": "She wrote every standard-edition track on Speak Now."
  },
  {
    "q": "Which records are the sister albums?",
    "options": [
      "folklore / evermore",
      "Red / 1989",
      "Fearless / Speak Now",
      "Lover / Midnights"
    ],
    "answer": 0,
    "note": "Both arrived in 2020, less than five months apart."
  },
  {
    "q": "Which era reclaimed the snake?",
    "options": [
      "reputation",
      "1989",
      "Midnights",
      "TTPD"
    ],
    "answer": 0,
    "note": "reputation made the image its own."
  },
  {
    "q": "Which was her first fully pop album?",
    "options": [
      "1989",
      "Red",
      "Lover",
      "Midnights"
    ],
    "answer": 0,
    "note": "1989 marked her deliberate turn to pop."
  },
  {
    "q": "Which album takes its name from her birth year?",
    "options": [
      "1989",
      "Red",
      "Fearless",
      "evermore"
    ],
    "answer": 0,
    "note": "1989 names both a beginning and a reinvention."
  },
  {
    "q": "What is at the heart of Taylor's Version?",
    "options": [
      "Ownership of new recordings",
      "Rewriting every lyric",
      "A new stage name",
      "Live recordings only"
    ],
    "answer": 0,
    "note": "The rerecordings gave her control of those new masters."
  },
  {
    "q": "Which album arrived by surprise during lockdown?",
    "options": [
      "folklore",
      "Lover",
      "reputation",
      "Red"
    ],
    "answer": 0,
    "note": "folklore arrived in July 2020."
  },
  {
    "q": "Which album began with thirteen sleepless nights?",
    "options": [
      "Midnights",
      "evermore",
      "TTPD",
      "1989"
    ],
    "answer": 0,
    "note": "Thirteen nights form the concept of Midnights."
  },
  {
    "q": "Which song returned in a ten-minute version?",
    "options": [
      "All Too Well",
      "Enchanted",
      "Dear John",
      "cardigan"
    ],
    "answer": 0,
    "note": "The extended version appears on Red (Taylor's Version)."
  },
  {
    "q": "Which era wears newspaper print and snakes?",
    "options": [
      "reputation",
      "folklore",
      "TTPD",
      "1989"
    ],
    "answer": 0,
    "note": "The imagery belongs to reputation."
  },
  {
    "q": "Which record won her first Album of the Year?",
    "options": [
      "Fearless",
      "Red",
      "1989",
      "folklore"
    ],
    "answer": 0,
    "note": "Fearless won at the 2010 Grammys."
  },
  {
    "q": "Which era steps into pink and daylight?",
    "options": [
      "Lover",
      "Red",
      "evermore",
      "reputation"
    ],
    "answer": 0,
    "note": "Lover holds devotion and uncertainty in brighter colours."
  },
  {
    "q": "Which album follows characters into the woods?",
    "options": [
      "folklore",
      "Speak Now",
      "1989",
      "Fearless"
    ],
    "answer": 0,
    "note": "folklore opens a world of interwoven stories."
  }
];


  const quizQuestions = [
    ...quizBank.map((question, index) => ({ ...question, id: `era-${index}`, category: "Eras" })),
    ...albums.map((album, index) => {
      const track = completeTracklists[album.id].core[0];
      return { id: `track-${album.id}`, category: "Tracks", q: `Which album opens with “${track}”?`,
        options: [album.title, ...[1, 4, 7].map(offset => albums[(index + offset) % albums.length].title)],
        answer: 0, note: `“${track}” is track one on ${album.title}.` };
    }),
    ...albums.map((album) => ({ id: `year-${album.id}`, category: "Years", q: `When was ${album.title} first released?`,
      options: [String(album.year), ...[...new Set(albums.map(item => String(item.year)))].filter(year => year !== String(album.year)).slice(0, 3)],
      answer: 0, note: `${album.title} arrived in ${album.year}.` }))
  ];

  function loadQuiz() {
    const run = load(QUIZ_KEY, null);
    if (!run || !quizModes[run.mode] || !Array.isArray(run.ids) || run.ids.length !== quizModes[run.mode].count ||
        new Set(run.ids).size !== run.ids.length || !run.ids.every(id => quizQuestions.some(q => q.id === id)) ||
        !Array.isArray(run.answers) || !Number.isInteger(run.index) || run.index < 0 || run.index > run.ids.length) return null;
    return run;
  }

  function shuffled(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function renderQuiz() {
    const run = loadQuiz();
    if (!run) return `
      <div class="club-card__top"><span>Music quiz</span></div>
      <h3>Know your eras?</h3>
      <p class="quiz-intro">Albums, tracks &amp; the years between.</p>
      <div class="quiz-modes">${Object.entries(quizModes).map(([mode, config]) => `
        <button type="button" data-action="start-quiz" data-mode="${mode}"><strong>${config.label}</strong><small>${config.count} questions · ${mode === "quick" ? "2" : "6"} min</small></button>`).join("")}</div>`;
    const questions = run.ids.map(id => quizQuestions.find(question => question.id === id));
    if (run.index === questions.length) {
      const score = questions.filter((question, index) => run.answers[index] === question.options[question.answer]).length;
      const missed = questions.map((question, index) => ({ question, answer: run.answers[index] })).filter(item => item.answer !== item.question.options[item.question.answer]);
      return `<div class="club-card__top"><span>${quizModes[run.mode].label} quiz complete</span></div>
        <h3 class="quiz-score" tabindex="-1">${score}<small> / ${questions.length}</small></h3>
        <p class="quiz-intro">${score === questions.length ? "Every era, remembered." : "Another reason to listen again."}</p>
        <div class="quiz-breakdown">${["Eras", "Tracks", "Years"].map(category => {
          const group = questions.map((q, i) => ({ q, i })).filter(item => item.q.category === category);
          return `<span>${category}<strong>${group.filter(item => run.answers[item.i] === item.q.options[item.q.answer]).length} / ${group.length}</strong></span>`;
        }).join("")}</div>
        ${missed.length ? `<details class="quiz-review"><summary>Review ${missed.length} missed ${missed.length === 1 ? "answer" : "answers"}</summary><ol>${missed.map(({ question, answer }) => `<li><strong>${escapeText(question.q)}</strong><p>Your answer: ${escapeText(answer)}</p><p>Correct: ${escapeText(question.options[question.answer])}</p><small>${escapeText(question.note)}</small></li>`).join("")}</ol></details>` : ""}
        <div class="quiz-actions"><button class="club-primary" data-action="start-quiz" data-mode="${run.mode}" type="button">Play again</button><button class="quiz-text-button" data-action="quiz-reset" type="button">Change mode</button></div>`;
    }
    const question = questions[run.index];
    const shift = (run.seed + run.index) % question.options.length;
    const options = [...question.options.slice(shift), ...question.options.slice(0, shift)];
    const selected = run.answers[run.index];
    const correct = question.options[question.answer];
    return `<div class="club-card__top"><span>${quizModes[run.mode].label} quiz · ${question.category}</span><span>${run.index + 1} / ${questions.length}</span></div>
      <progress class="quiz-progress" value="${run.index}" max="${questions.length}" aria-label="Questions completed">${run.index} / ${questions.length}</progress>
      <h3 class="quiz-question" tabindex="-1">${escapeText(question.q)}</h3>
      <div class="club-options">${options.map((option, index) => `<button type="button" data-action="quiz-answer" data-index="${index}" ${selected !== undefined ? "disabled" : ""} class="${selected !== undefined && option === correct ? "is-correct" : selected === option ? "is-wrong" : ""}">${escapeText(option)}${selected !== undefined && option === correct ? '<span class="quiz-option-status">Correct answer</span>' : selected === option ? '<span class="quiz-option-status">Your answer</span>' : ""}</button>`).join("")}</div>
      ${selected !== undefined ? `<div class="club-answer" role="status" tabindex="-1"><strong>${selected === correct ? "Correct." : "Not quite."}</strong><p>${escapeText(question.note)}</p></div>` : ""}
      <div class="quiz-actions">${selected !== undefined ? `<button type="button" class="club-primary" data-action="quiz-next">${run.index === questions.length - 1 ? "See results" : "Next question"}</button>` : '<span class="quiz-save-hint">Progress saved here</span>'}<button type="button" class="quiz-text-button" data-action="quiz-reset">Change mode</button></div>`;
  }

  function startQuiz(mode) {
    if (!quizModes[mode]) return;
    const counts = mode === "quick" ? [2, 2, 1] : [5, 5, 5];
    const ids = ["Eras", "Tracks", "Years"].flatMap((category, index) => shuffled(quizQuestions.filter(question => question.category === category)).slice(0, counts[index]).map(question => question.id));
    save(QUIZ_KEY, { mode, ids: shuffled(ids), answers: [], index: 0, seed: Math.floor(Math.random() * 10000) });
    render();
    document.querySelector(".quiz-question")?.focus({ preventScroll: true });
  }

  function answerQuiz(index) {
    const run = loadQuiz();
    if (!run || run.index >= run.ids.length || run.answers[run.index] !== undefined) return;
    const question = quizQuestions.find(item => item.id === run.ids[run.index]);
    if (!Number.isInteger(index) || index < 0 || index >= question.options.length) return;
    const shift = (run.seed + run.index) % question.options.length;
    run.answers[run.index] = question.options[(index + shift) % question.options.length];
    save(QUIZ_KEY, run);
    render();
    document.querySelector(".club-answer")?.focus({ preventScroll: true });
  }

  const moods = [
    { label: "Defiant", albums: ["reputation", "speak-now"] },
    { label: "Heartbroken", albums: ["red", "ttpd"] },
    { label: "In love", albums: ["lover", "fearless"] },
    { label: "Dreaming", albums: ["folklore", "evermore"] },
    { label: "Radiant", albums: ["1989", "midnights"] },
    { label: "Nostalgic", albums: ["taylor-swift", "red"] }
  ];

  function load(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // 浏览器不允许存储时，当前体验仍可继续。
    }
  }

  function dayNumber() {
    return Math.floor((Date.now() + 8 * 3600 * 1000) / 86400000);
  }

  function todayLabel() {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Shanghai",
      month: "long",
      day: "numeric",
      weekday: "short"
    }).format(new Date());
  }

  function escapeText(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function allSongs() {
    return albums.flatMap((album) => {
      const list = completeTracklists[album.id] || { core: [], expanded: [] };
      return [...list.core, ...list.expanded].map((title) => ({ title, album }));
    });
  }

  function songOfDay(offset = 0) {
    const songs = allSongs();
    return songs[(dayNumber() + offset) % songs.length];
  }

  function dailyState() {
    const state = load(DAILY_KEY, {});
    if (state.day !== dayNumber()) {
      return { day: dayNumber(), missions: [], moodIndex: null, vaultRevealed: false };
    }
    state.missions = Array.isArray(state.missions) ? state.missions : [];
    return state;
  }

  function updateDaily(change) {
    const state = { ...dailyState(), ...change };
    save(DAILY_KEY, state);
    return state;
  }

  function completeMission(name, extra = {}) {
    const state = dailyState();
    const missions = state.missions.includes(name) ? state.missions : [...state.missions, name];
    updateDaily({ ...extra, missions });
  }

  function moodSong(index) {
    const mood = moods[index];
    const candidates = albums.filter((album) => mood.albums.includes(album.id));
    const album = candidates[(dayNumber() + index) % candidates.length];
    const list = completeTracklists[album.id] || { core: [], expanded: [] };
    const tracks = [...list.core, ...list.expanded];
    return { title: tracks[(dayNumber() * 3 + index * 7) % tracks.length], album };
  }

  function vaultSong() {
    const pool = albums.flatMap((album) => album.deeps.map((song) => ({ ...song, album })));
    return pool[(dayNumber() * 13) % pool.length];
  }

  function openSong(song) {
    const index = albums.findIndex((album) => album.id === song.album.id);
    if (index < 0) return;
    currentAlbumIndex = index;
    openSongModal(song.title);
    render();
  }

  function render() {
    const root = document.getElementById("clubApp");
    if (!root) return;
    const focused = root.contains(document.activeElement) ? document.activeElement : null;
    const focusAction = focused?.dataset.action;
    const focusIndex = focused?.dataset.index;
    const state = dailyState();
    const today = songOfDay();
    const selection = state.moodIndex === null ? null : moodSong(state.moodIndex);
    const vault = vaultSong();
    root.innerHTML = `
      <header class="club-head">
        <div><h2>Discover</h2><p class="club-intro">Find a song. Make a memory.</p></div>
        <nav class="club-shortcuts" aria-label="Your collection">
          <button type="button" data-action="ritual">Daily ritual ↗</button>
          <button type="button" data-action="passport">Listening passport ↗</button>
          <button type="button" data-action="trail">My notes ↗</button>
        </nav>
      </header>
      <div class="club-dashboard">
        <article class="club-card club-daily" style="--era:${today.album.color}">
          <div class="club-card__top"><span>Today’s song</span><small>${todayLabel()}</small></div>
          <img class="club-cover" src="${albumCovers[today.album.id]}" alt="" loading="lazy" decoding="async" />
          <h3>${escapeText(today.title)}</h3>
          <button class="club-primary" type="button" data-action="today-song">Read & listen ↗</button>
        </article>
        <article class="club-card club-mood" id="clubMood">
          <h3>Find a song</h3><p class="quiz-intro">Choose your mood.</p>
          <div class="club-moods">${moods.map((mood,index) => `<button type="button" aria-pressed="${state.moodIndex === index}" class="${state.moodIndex === index ? "active" : ""}" data-action="pick-mood" data-index="${index}">${mood.label}</button>`).join("")}</div>
          <div class="club-mood-result" aria-live="polite">${selection ? `<strong>${escapeText(selection.title)}</strong><button type="button" data-action="mood-song">Read & listen ↗</button>` : ""}</div>
        </article>
      </div>
      <div class="club-play-grid">
        <article class="club-card club-quiz" id="clubQuiz" aria-label="Music quiz">${renderQuiz()}</article>
        <article class="club-card club-vault ${state.vaultRevealed ? "open" : ""}">
          <h3>${state.vaultRevealed ? escapeText(vault.title) : "Hidden gems"}</h3>${state.vaultRevealed ? "" : '<p class="quiz-intro">A less-played song, worth your time.</p>'}
          <button type="button" data-action="${state.vaultRevealed ? "vault-song" : "reveal-vault"}">${state.vaultRevealed ? "Read & listen ↗" : "Find a deep cut ↗"}</button>
        </article>
      </div>
    `;
    if (focusAction) {
      const replacement = [...root.querySelectorAll("[data-action]")].find((button) => button.dataset.action === focusAction && button.dataset.index === focusIndex);
      (replacement || root.querySelector(".club-answer, [data-action='quiz-answer'], [data-action='vault-song']"))?.focus({ preventScroll: true });
    }
  }

  function handleAction(target) {
    const action = target.dataset.action;
    if (action === "ritual") {
      completeMission("ritual");
      render();
      window.SwiftieCompanion?.openRitual();
    } else if (action === "passport") {
      window.SwiftieCompanion?.openPassport();
    } else if (action === "trail") {
      window.SwiftieCompanion?.openTrajectory();
    } else if (action === "today-song") {
      openSong(songOfDay());
    } else if (action === "start-quiz") {
      startQuiz(target.dataset.mode);
      document.getElementById("clubQuiz")?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    } else if (action === "quiz-answer") {
      answerQuiz(Number(target.dataset.index));
    } else if (action === "quiz-next") {
      const run = loadQuiz();
      if (!run || run.index >= run.ids.length || run.answers[run.index] === undefined) return;
      run.index += 1;
      save(QUIZ_KEY, run);
      if (run.index === run.ids.length) completeMission("quiz");
      render();
      document.querySelector(".quiz-question, .quiz-score")?.focus({ preventScroll: true });
    } else if (action === "quiz-reset") {
      save(QUIZ_KEY, null);
      render();
      document.querySelector('[data-action="start-quiz"]')?.focus({ preventScroll: true });
    } else if (action === "mood-focus") {
      document.getElementById("clubMood")?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    } else if (action === "pick-mood") {
      const moodIndex = Number(target.dataset.index);
      completeMission("mood", { moodIndex });
      render();
    } else if (action === "mood-song") {
      const state = dailyState();
      if (state.moodIndex !== null) openSong(moodSong(state.moodIndex));
    } else if (action === "reveal-vault") {
      updateDaily({ vaultRevealed: true });
      render();
    } else if (action === "vault-song") {
      openSong(vaultSong());
    } else if (action === "open-era") {
      selectAlbum(Number(target.dataset.index));
    }
  }

  function init() {
    const root = document.getElementById("clubApp");
    if (!root) return;
    root.addEventListener("click", (event) => {
      const target = event.target.closest("[data-action]");
      if (target) handleAction(target);
    });
    document.querySelectorAll("[data-open-collection]").forEach(button => button.addEventListener("click", () => window.SwiftieCompanion?.openTrajectory()));
    render();
    window.addEventListener("storage", render);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) render();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
