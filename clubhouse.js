(function () {
  "use strict";

  const DAILY_KEY = "tt_club_daily";
  let quizTimer = null;
  let quizSeconds = 13;
  let quizLive = false;

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

  function songKey(title) {
    return String(title).toLowerCase().trim();
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
      return { day: dayNumber(), missions: [], quizChoice: null, moodIndex: null, vaultRevealed: false };
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

  function eraStats(read) {
    return albums.map((album, index) => {
      const list = completeTracklists[album.id] || { core: [], expanded: [] };
      const tracks = [...list.core, ...list.expanded];
      const done = tracks.filter((title) => read.has(songKey(title))).length;
      return { album, index, done, total: tracks.length, lit: done >= Math.min(13, tracks.length) };
    });
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
    const eras = eraStats(new Set(load("taylorSwiftReadSongs", [])));
    const litCount = eras.filter((era) => era.lit).length;
    const quiz = quizBank[dayNumber() % quizBank.length];
    const shift = dayNumber() % quiz.options.length;
    const options = [...quiz.options.slice(shift), ...quiz.options.slice(0, shift)];
    const answer = (quiz.answer - shift + quiz.options.length) % quiz.options.length;
    const answered = state.quizChoice !== null;
    const correct = Number(state.quizChoice) === answer;
    const selection = state.moodIndex === null ? null : moodSong(state.moodIndex);
    const vault = vaultSong();
    root.innerHTML = `
      <header class="club-head">
        <div><h2>A little daily <em>ritual.</em></h2><p class="club-intro">A song, a feeling, a reason to return.</p></div>
        <nav class="club-shortcuts" aria-label="Your collection">
          <button type="button" data-action="ritual">Daily ritual ↗</button>
          <button type="button" data-action="passport">Passport ↗</button>
          <button type="button" data-action="trail">Collection ↗</button>
        </nav>
      </header>
      <div class="club-dashboard">
        <article class="club-card club-daily" style="--era:${today.album.color}">
          <div class="club-card__top"><span>01 / ON REPEAT</span><small>${todayLabel()}</small></div>
          <p class="club-daily__era">${escapeText(today.album.title)} · ${today.album.year}</p>
          <h3>${escapeText(today.title)}</h3>
          <p>${escapeText(today.album.thesis)}</p>
          <button class="club-primary" type="button" data-action="today-song">Open song ↗</button>
        </article>
        <article class="club-card club-mood" id="clubMood">
          <div class="club-card__top"><span>02 / IN THE MOOD</span></div>
          <h3>How does<br>today feel?</h3>
          <div class="club-moods">${moods.map((mood,index) => `<button type="button" aria-pressed="${state.moodIndex === index}" class="${state.moodIndex === index ? "active" : ""}" data-action="pick-mood" data-index="${index}">${mood.label}</button>`).join("")}</div>
          <div class="club-mood-result" aria-live="polite">${selection ? `<span>${escapeText(selection.album.title)}</span><strong>${escapeText(selection.title)}</strong><button type="button" data-action="mood-song">Open song ↗</button>` : ""}</div>
        </article>
      </div>
      <div class="club-play-grid">
        <article class="club-card club-quiz" id="clubQuiz">
          <div class="club-card__top"><span>03 / THIRTEEN SECONDS</span><strong class="club-clock">${answered ? "DONE" : quizLive ? `${quizSeconds}s` : "13s"}</strong></div>
          <h3>${escapeText(quiz.q)}</h3>
          ${!quizLive && !answered ? `<button class="club-primary" type="button" data-action="start-quiz">Take the challenge ↗</button>` : ""}
          ${quizLive && !answered ? `<div class="club-quiz__timer"><i style="animation-duration:${quizSeconds}s"></i></div><div class="club-options">${options.map((option,index) => `<button type="button" data-action="quiz-answer" data-index="${index}">${escapeText(option)}</button>`).join("")}</div>` : ""}
          ${answered ? `<div class="club-answer ${correct ? "correct" : ""}" role="status" tabindex="-1"><strong>${correct ? "You know it." : state.quizChoice === "timeout" ? "Time's up." : "Almost."}</strong><p>${escapeText(quiz.note)}</p></div>` : ""}
        </article>
        <article class="club-card club-vault ${state.vaultRevealed ? "open" : ""}">
          <div class="club-card__top"><span>04 / FROM THE VAULT</span></div>
          <h3>${state.vaultRevealed ? escapeText(vault.title) : "A little less<br>discovered."}</h3>
          <p>${state.vaultRevealed ? escapeText(vault.analysis) : "One deep cut. Yours to uncover."}</p>
          <button type="button" data-action="${state.vaultRevealed ? "vault-song" : "reveal-vault"}">${state.vaultRevealed ? "Open song ↗" : "Uncover a song ↗"}</button>
        </article>
      </div>
      <footer class="club-section-title"><p>Your eras, at your pace.</p><button type="button" data-action="passport">${litCount} / 12 stamps · View passport ↗</button></footer>
    `;
    if (focusAction) {
      const replacement = [...root.querySelectorAll("[data-action]")].find((button) => button.dataset.action === focusAction && button.dataset.index === focusIndex);
      (replacement || root.querySelector(".club-answer, [data-action='quiz-answer'], [data-action='vault-song']"))?.focus({ preventScroll: true });
    }
  }

  function startQuiz() {
    const state = dailyState();
    if (state.quizChoice !== null || quizLive) return;
    quizLive = true;
    quizSeconds = 13;
    render();
    clearInterval(quizTimer);
    quizTimer = setInterval(() => {
      quizSeconds -= 1;
      const clock = document.querySelector(".club-clock");
      if (clock) clock.textContent = `${quizSeconds}s`;
      if (quizSeconds <= 0) {
        clearInterval(quizTimer);
        quizLive = false;
        completeMission("quiz", { quizChoice: "timeout" });
        render();
      }
    }, 1000);
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
      startQuiz();
      document.getElementById("clubQuiz")?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    } else if (action === "quiz-answer") {
      clearInterval(quizTimer);
      quizLive = false;
      completeMission("quiz", { quizChoice: Number(target.dataset.index) });
      render();
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
    render();
    window.addEventListener("storage", render);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) render();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
