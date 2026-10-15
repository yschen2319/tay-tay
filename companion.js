/* ============================================================
   companion.js — Swiftie 私人阅读房间 · 陪伴模块
   ------------------------------------------------------------
   这个文件不修改 app.js 的任何原有逻辑，只在它之后加载，
   通过"包装函数 + 注入按钮"的方式增加 5 组功能：

   1. Daily ritual：Your song / The mood / Daily一句 / A thought to keep /
      明日预告 / This week / 连续打卡
   2. 私人便签：每首歌的"Your notes"，只存浏览器本地
   3. Favourites：每首歌可以点亮一颗心
   4. Your collection：停留最久的时代、主题偏好、
      隐藏曲偏好、记忆盒子
   5. Era passport：把 0/154 进度变成 12 枚时代徽章 + 完成寄语

   所有数据存 localStorage，不需要登录。
   想调整文案，直接改下面的常量区即可。
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 0. 本地存储工具 ---------- */

  const KEYS = {
    notes: "tt_notes",      // { songKey: { text, updated } }
    favs: "tt_favs",        // [songKey]
    stats: "tt_stats"       // { albumVisits, lastRitualDay, streak }
  };

  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* 隐私模式下静默失败 */
    }
  }

  function songKey(title) {
    return String(title).toLowerCase().trim();
  }

  /* ---------- 1. 文案与映射（想改文案改这里） ---------- */

  // 每张专辑的情绪主题（用于"Collection"里的主题统计与每周主题选歌）
  const albumThemes = {
    "taylor-swift": ["nostalgia", "growth"],
    fearless: ["love", "nostalgia"],
    "speak-now": ["growth", "revenge"],
    red: ["heartbreak", "nostalgia"],
    "1989": ["release", "growth"],
    reputation: ["revenge", "love"],
    lover: ["love", "release"],
    folklore: ["nostalgia", "heartbreak"],
    evermore: ["release", "nostalgia"],
    midnights: ["heartbreak", "growth"],
    ttpd: ["heartbreak", "revenge"],
    showgirl: ["love", "growth"]
  };

  const themeLabels = {
  "heartbreak": "Heartbreak",
  "revenge": "Defiance",
  "growth": "Growing up",
  "nostalgia": "Nostalgia",
  "love": "Love",
  "release": "Letting go"
};

  // 每个时代徽章点亮后的完成寄语
  const eraBlessings = {
  "taylor-swift": "The first chapter, yours to keep.",
  "fearless": "Still willing to believe.",
  "speak-now": "Every word, heard.",
  "red": "A little colour left in the memory.",
  "1989": "A new city, a new beginning.",
  "reputation": "You found the quiet heart.",
  "lover": "A little more daylight.",
  "folklore": "You know your way through the woods.",
  "evermore": "The stories stay with you.",
  "midnights": "You stayed until morning.",
  "ttpd": "The manuscript is yours to close.",
  "showgirl": "A moment after the curtain call."
};

  // The mood牌（13 张，向 13 致敬）
  const moods = [
  {
    "label": "Low",
    "line": "Let a song hold the feeling."
  },
  {
    "label": "Confident",
    "line": "Take up a little space."
  },
  {
    "label": "Nostalgic",
    "line": "Some memories deserve another listen."
  },
  {
    "label": "In love",
    "line": "Leave room for the butterflies."
  },
  {
    "label": "At ease",
    "line": "You can set it down for a while."
  },
  {
    "label": "Brave",
    "line": "A small step still counts."
  },
  {
    "label": "Missing someone",
    "line": "There is room for that feeling here."
  },
  {
    "label": "Tender",
    "line": "A little kindness, for yourself too."
  },
  {
    "label": "Defiant",
    "line": "Keep your own voice."
  },
  {
    "label": "Quiet",
    "line": "Nothing needs to happen right now."
  },
  {
    "label": "Enchanted",
    "line": "Stay with the possibility."
  },
  {
    "label": "Free",
    "line": "A few minutes of your own."
  },
  {
    "label": "Clear-eyed",
    "line": "You know a little more than before."
  }
];

  // A thought to keep（13 个，循环出现）
  const questions = [
  "Who does this song bring to mind?",
  "What would today sound like?",
  "Where did you first really listen to Taylor?",
  "Which song do you keep for yourself?",
  "Which era would you visit again?",
  "Which song met you at the right moment?",
  "Who would you send this song to?",
  "Has your favourite album changed?",
  "Which song took time to make sense?",
  "What track feels like your life right now?",
  "What colour is today?",
  "What would you tell your younger self?",
  "What will you take from this song?"
];

  // 每周主题（按周轮换，制造"下周回来有新东西"的期待）
  const weeklyThemes = [
  {
    "name": "Goodbyes",
    "desc": "Songs for the things we leave behind.",
    "themes": [
      "heartbreak"
    ]
  },
  {
    "name": "Begin again",
    "desc": "A little room for a new chapter.",
    "themes": [
      "release",
      "growth"
    ]
  },
  {
    "name": "Fairy tales",
    "desc": "Keep a little faith in the ending.",
    "themes": [
      "love"
    ]
  },
  {
    "name": "Defiance",
    "desc": "Songs that stand their ground.",
    "themes": [
      "revenge"
    ]
  },
  {
    "name": "Looking back",
    "desc": "Familiar places, heard again.",
    "themes": [
      "nostalgia"
    ]
  },
  {
    "name": "Growing up",
    "desc": "The person you are becoming.",
    "themes": [
      "growth"
    ]
  },
  {
    "name": "After hours",
    "desc": "Company for a sleepless night.",
    "themes": [
      "heartbreak",
      "release"
    ]
  },
  {
    "name": "Summer love",
    "desc": "The bright rush of it all.",
    "themes": [
      "love",
      "nostalgia"
    ]
  }
];

  /* ---------- 2. 日期与选歌（北京时间 UTC+8） ---------- */

  function dayNumber() {
    return Math.floor((Date.now() + 8 * 3600 * 1000) / 86400000);
  }

  function allSongsFlat() {
    return albums.flatMap((album) => {
      const list = completeTracklists[album.id] || { core: [], expanded: [] };
      return [...list.core, ...list.expanded].map((title) => ({ title, album }));
    });
  }

  function songOfDay(offset = 0) {
    const flat = allSongsFlat();
    if (!flat.length) return null;
    const index = (dayNumber() + offset) % flat.length;
    return flat[(index + flat.length) % flat.length];
  }

  function songKind(album, title) {
    const lower = songKey(title);
    if (album.hits.some((s) => songKey(s.title) === lower)) return "hit";
    if (album.deeps.some((s) => songKey(s.title) === lower)) return "deep";
    return "other";
  }

  // Daily一句：优先取这首歌的解读首句，否则用专辑论点
  function dailyLine(song) {
    const lower = songKey(song.title);
    const analyzed =
      song.album.hits.find((s) => songKey(s.title) === lower) ||
      song.album.deeps.find((s) => songKey(s.title) === lower);
    const source = analyzed ? analyzed.analysis : song.album.thesis;
    const first = String(source).split(/(?<=[.!?])\s/)[0].trim();
    if (!first) return source;
    return /[.!?]$/.test(first) ? first : first + ".";
  }

  function weeklyTheme() {
    const week = Math.floor(dayNumber() / 7);
    const theme = weeklyThemes[week % weeklyThemes.length];
    const pool = allSongsFlat().filter((song) =>
      (albumThemes[song.album.id] || []).some((t) => theme.themes.includes(t))
    );
    const picks = [];
    if (pool.length) {
      for (let i = 0; i < 3; i += 1) {
        const pick = pool[(week * 7 + i * 31) % pool.length];
        if (!picks.some((p) => songKey(p.title) === songKey(pick.title))) picks.push(pick);
      }
    }
    return { ...theme, picks };
  }

  /* ---------- 3. 打卡与统计 ---------- */

  function getStats() {
    return load(KEYS.stats, { albumVisits: {}, lastRitualDay: 0, streak: 0 });
  }

  function checkInToday() {
    const stats = getStats();
    const today = dayNumber();
    if (stats.lastRitualDay === today) return stats;
    stats.streak = stats.lastRitualDay === today - 1 ? (stats.streak || 0) + 1 : 1;
    stats.lastRitualDay = today;
    save(KEYS.stats, stats);
    return stats;
  }

  function recordAlbumVisit(albumId) {
    const stats = getStats();
    stats.albumVisits = stats.albumVisits || {};
    stats.albumVisits[albumId] = (stats.albumVisits[albumId] || 0) + 1;
    save(KEYS.stats, stats);
  }

  function readSongSet() {
    return new Set(load("taylorSwiftReadSongs", []));
  }

  /* ---------- 4. 通用弹窗 ---------- */

  function openOverlay(className, html) {
    const trigger = document.activeElement;
    const overlay = document.createElement("div");
    overlay.className = `tt-overlay ${className}`;
    overlay.innerHTML = `
      <div class="tt-overlay__backdrop"></div>
      <section class="tt-overlay__card" role="dialog" aria-modal="true">
        <button class="tt-overlay__close" type="button" aria-label="Close">×</button>
        <div class="tt-overlay__body">${html}</div>
      </section>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector("[role=dialog]").setAttribute("aria-label", overlay.querySelector("h2")?.textContent || "Daily ritual");
    overlay.querySelector(".tt-overlay__close").focus();
    document.body.classList.add("modal-open");
    const close = () => {
      overlay.remove();
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKey);
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
    const onKey = (event) => {
      if (event.key === "Escape") close();
    };
    overlay.querySelector(".tt-overlay__backdrop").addEventListener("click", close);
    overlay.querySelector(".tt-overlay__close").addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    return { overlay, close };
  }

  function jumpToSong(song, closeFn) {
    const index = albums.findIndex((a) => a.id === song.album.id);
    if (index < 0) return;
    if (closeFn) closeFn();
    selectAlbum(index, { skipScroll: false });
    openSongModal(song.title);
  }

  /* ---------- 5. Daily ritual弹窗 ---------- */

  function openRitual() {
    const stats = checkInToday();
    const today = songOfDay(0);
    const tomorrow = songOfDay(1);
    if (!today) return;
    const mood = moods[dayNumber() % moods.length];
    const question = questions[dayNumber() % questions.length];
    const theme = weeklyTheme();
    const dateText = new Date(Date.now() + 8 * 3600 * 1000)
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, " · ");

    const { overlay, close } = openOverlay("tt-ritual", `
      <p class="tt-eyebrow">${dateText} · Daily ritual</p>
      <div class="tt-ritual__mood" style="--era:${today.album.color}">
        <span>The mood</span>
        <strong>${escapeHtml(mood.label)}</strong>
        <p>${escapeHtml(mood.line)}</p>
      </div>
      <div class="tt-ritual__song" style="--era:${today.album.color}">
        <span>Your song</span>
        <h3>${escapeHtml(today.title)}</h3>
        <p>${escapeHtml(today.album.title)} · ${escapeHtml(today.album.year)} · ${escapeHtml(today.album.cn)}</p>
        <blockquote>${escapeHtml(dailyLine(today))}</blockquote>
        <button class="tt-btn primary" type="button" data-open-today>Open song ↗</button>
      </div>
      <div class="tt-ritual__question">
        <span>A thought to keep</span>
        <p>${escapeHtml(question)}</p>
        <small>Keep a private note with the song.</small>
      </div>
      <div class="tt-ritual__theme">
        <span>This week · ${escapeHtml(theme.name)}</span>
        <p>${escapeHtml(theme.desc)}</p>
        <div class="tt-ritual__picks">
          ${theme.picks
            .map(
              (pick, index) => `
                <button type="button" data-theme-pick="${index}" style="--era:${pick.album.color}">
                  <strong>${escapeHtml(pick.title)}</strong>
                  <small>${escapeHtml(pick.album.title)}</small>
                </button>`
            )
            .join("")}
        </div>
      </div>
      <footer class="tt-ritual__footer">
        <span><strong>${stats.streak}</strong> day streak</span>
        <span>Tomorrow: <strong>${escapeHtml(tomorrow.album.title)}</strong></span>
      </footer>
    `);

    overlay.querySelector("[data-open-today]").addEventListener("click", () => jumpToSong(today, close));
    overlay.querySelectorAll("[data-theme-pick]").forEach((button) => {
      button.addEventListener("click", () => {
        const pick = theme.picks[Number(button.dataset.themePick)];
        if (pick) jumpToSong(pick, close);
      });
    });
  }

  /* ---------- 6. 歌曲弹窗增强：Favourites + 私人便签 ---------- */

  function refreshFav(button) {
    const favs = load(KEYS.favs, []);
    const on = favs.includes(button.dataset.key);
    button.textContent = on ? "♥" : "♡";
    button.classList.toggle("on", on);
    button.setAttribute("aria-label", on ? "Remove favourite" : "Save song");
    button.title = on ? "Saved" : "Save song";
  }

  function enhanceSongModal(title) {
    const modal = document.querySelector("#songModal");
    if (!modal) return;
    const album = albums[currentAlbumIndex];
    const key = songKey(title);

    // Favourites按钮（固定在弹窗右上角、Close按钮旁，桌面与移动端都可见）
    const card = modal.querySelector(".song-modal__card");
    if (card) {
      let favBtn = card.querySelector(".tt-fav");
      if (!favBtn) {
        favBtn = document.createElement("button");
        favBtn.type = "button";
        favBtn.className = "tt-fav";
        favBtn.addEventListener("click", () => {
          const favs = load(KEYS.favs, []);
          const current = favBtn.dataset.key;
          const at = favs.indexOf(current);
          if (at >= 0) favs.splice(at, 1);
          else favs.push(current);
          save(KEYS.favs, favs);
          refreshFav(favBtn);
        });
        card.appendChild(favBtn);
      }
      favBtn.dataset.key = key;
      refreshFav(favBtn);
    }

    // 私人便签（追加在"读解读"一栏底部）
    const content = modal.querySelector(".song-modal__content");
    if (content && !content.querySelector(".tt-memory")) {
      const notes = load(KEYS.notes, {});
      const existing = notes[key]?.text || "";
      const box = document.createElement("section");
      box.className = "tt-memory";
      box.innerHTML = `
        <p class="tt-memory__title">Your notes</p>
        <textarea rows="3" placeholder="What does this song bring back?"></textarea>
        <div class="tt-memory__bar">
          <small class="tt-memory__state">${existing ? "Saved on this browser" : "Private to this browser"}</small>
          <button type="button" class="tt-btn">Save</button>
        </div>
      `;
      const textarea = box.querySelector("textarea");
      const state = box.querySelector(".tt-memory__state");
      textarea.value = existing;
      const persist = () => {
        const all = load(KEYS.notes, {});
        const text = textarea.value.trim();
        if (text) all[key] = { text, title, albumId: album?.id, updated: Date.now() };
        else delete all[key];
        save(KEYS.notes, all);
        state.textContent = text ? "Saved on this browser" : "Private to this browser";
      };
      box.querySelector("button").addEventListener("click", persist);
      textarea.addEventListener("blur", persist);
      content.appendChild(box);
    }
  }

  /* ---------- 7. Era passport（替换原进度弹窗） ---------- */

  function badgeThreshold(total) {
    return Math.min(13, total);
  }

  function openPassport() {
    const read = readSongSet();
    const eras = albums.map((album) => {
      const list = completeTracklists[album.id] || { core: [], expanded: [] };
      const tracks = [...list.core, ...list.expanded];
      const done = tracks.filter((t) => read.has(songKey(t))).length;
      return { album, tracks, done, total: tracks.length, lit: done >= badgeThreshold(tracks.length) && tracks.length > 0 };
    });
    const totalDone = eras.reduce((sum, e) => sum + e.done, 0);
    const totalAll = eras.reduce((sum, e) => sum + e.total, 0);
    const litCount = eras.filter((e) => e.lit).length;
    const journeyDone = litCount === eras.length;

    const { overlay, close } = openOverlay("tt-passport", `
      <p class="tt-eyebrow">Era passport</p>
      <h2>${journeyDone ? "Your twelve eras" : "Your era passport"}</h2>
      <p class="tt-passport__sub">
        ${totalDone} / ${totalAll} tracks · ${litCount} / ${eras.length} stamps
        ${journeyDone ? "" : "Explore 13 tracks per era to earn a stamp."}
      </p>
      ${journeyDone ? `<div class="tt-journey">Twelve eras. A journey of your own.</div>` : ""}
      <div class="tt-passport__grid">
        ${eras
          .map(
            (era, index) => `
              <article class="tt-era ${era.lit ? "lit" : ""}" style="--era:${era.album.color}">
                <header data-era-toggle="${index}">
                  <span class="tt-era__badge">${era.lit ? "✦" : "✧"}</span>
                  <div>
                    <strong>${escapeHtml(era.album.title)}</strong>
                    <small>${escapeHtml(era.album.year)} · ${era.done}/${era.total}</small>
                  </div>
                  <i class="tt-era__chev">⌄</i>
                </header>
                <div class="tt-era__bar"><span style="width:${era.total ? Math.round((era.done / era.total) * 100) : 0}%"></span></div>
                ${era.lit ? `<p class="tt-era__bless">${escapeHtml(eraBlessings[era.album.id] || "This chapter is yours.")}</p>` : ""}
                <div class="tt-era__tracks" hidden>
                  ${era.tracks
                    .map(
                      (track) => `
                        <button type="button" class="${read.has(songKey(track)) ? "read" : ""}" data-era="${index}" data-track="${escapeHtml(track)}">
                          ${escapeHtml(track)}
                        </button>`
                    )
                    .join("")}
                </div>
              </article>`
          )
          .join("")}
      </div>
    `);

    overlay.querySelectorAll("[data-era-toggle]").forEach((header) => {
      header.addEventListener("click", () => {
        const tracks = header.closest(".tt-era").querySelector(".tt-era__tracks");
        tracks.hidden = !tracks.hidden;
        header.closest(".tt-era").classList.toggle("open", !tracks.hidden);
      });
    });
    overlay.querySelectorAll("[data-track]").forEach((button) => {
      button.addEventListener("click", () => {
        const album = albums[Number(button.dataset.era)];
        if (album) jumpToSong({ title: button.dataset.track, album }, close);
      });
    });
  }

  /* ---------- 8. Your collection ---------- */

  function openTrajectory() {
    const read = readSongSet();
    const stats = getStats();
    const favs = load(KEYS.favs, []);
    const notes = load(KEYS.notes, {});
    const flat = allSongsFlat();
    const byKey = new Map(flat.map((song) => [songKey(song.title), song]));

    // 停留最久的时代：按专辑访问次数排序
    const visits = Object.entries(stats.albumVisits || {})
      .map(([id, count]) => ({ album: albums.find((a) => a.id === id), count }))
      .filter((item) => item.album)
      .sort((a, b) => b.count - a.count);

    // 主题统计：每首Explored为其专辑主题各 +1
    const themeCounts = {};
    let deepCount = 0;
    let hitCount = 0;
    read.forEach((key) => {
      const song = byKey.get(key);
      if (!song) return;
      (albumThemes[song.album.id] || []).forEach((theme) => {
        themeCounts[theme] = (themeCounts[theme] || 0) + 1;
      });
      const kind = songKind(song.album, song.title);
      if (kind === "deep") deepCount += 1;
      if (kind === "hit") hitCount += 1;
    });
    const themeRank = Object.entries(themeCounts).sort((a, b) => b[1] - a[1]);
    const themeMax = themeRank.length ? themeRank[0][1] : 0;

    const wander =
      visits.length >= 2
        ? `Your most visited eras: <strong>${escapeHtml(visits[0].album.title)}</strong> and <strong>${escapeHtml(visits[1].album.title)}</strong>.`
        : visits.length === 1
          ? `Lately, you return to <strong>${escapeHtml(visits[0].album.title)}</strong>.`
          : "Your story starts with a song.";

    const deepTotal = deepCount + hitCount;
    const deepLine = deepTotal
      ? deepCount >= hitCount
        ? `Deep cuts make up ${Math.round((deepCount / deepTotal) * 100)}% of your explored highlights.`
        : `Essentials make up ${Math.round((hitCount / deepTotal) * 100)}% of your explored highlights.`
      : "Your favourites will find their shape.";

    const noteEntries = Object.entries(notes).sort((a, b) => (b[1].updated || 0) - (a[1].updated || 0));
    const favSongs = favs.map((key) => byKey.get(key)).filter(Boolean);

    const { overlay, close } = openOverlay("tt-trail", `
      <p class="tt-eyebrow">Your collection</p>
      <h2>The songs you keep.</h2>
      <p class="tt-trail__wander">${wander}</p>
      <div class="tt-trail__stats">
        <div><strong>${read.size}</strong><small>Explored</small></div>
        <div><strong>${favSongs.length}</strong><small>Favourites</small></div>
        <div><strong>${noteEntries.length}</strong><small>Notes</small></div>
        <div><strong>${stats.streak || 0}</strong><small>Day streak</small></div>
      </div>
      ${visits.length ? `
        <section class="tt-trail__block">
          <h3>Your eras</h3>
          <div class="tt-trail__eras">
            ${visits.slice(0, 3).map((item) => `
              <span style="--era:${item.album.color}">${escapeHtml(item.album.title)} · ${item.count} visits</span>
            `).join("")}
          </div>
        </section>` : ""}
      <section class="tt-trail__block">
        <h3>Recurring themes</h3>
        ${themeRank.length ? themeRank.map(([theme, count]) => `
          <div class="tt-theme-row">
            <span>${themeLabels[theme] || theme}</span>
            <div class="tt-theme-bar"><i style="width:${themeMax ? Math.round((count / themeMax) * 100) : 0}%"></i></div>
            <small>${count}</small>
          </div>
        `).join("") : `<p class="tt-empty">Explore a few songs to find your themes.</p>`}
        <p class="tt-trail__deep">${deepLine}</p>
      </section>
      <section class="tt-trail__block">
        <h3>Saved songs</h3>
        ${favSongs.length ? `<div class="tt-chiplist">${favSongs.map((song, index) => `
          <button type="button" data-fav="${index}" style="--era:${song.album.color}">♥ ${escapeHtml(song.title)}</button>
        `).join("")}</div>` : `<p class="tt-empty">Tap the heart on a song to save it.</p>`}
      </section>
      <section class="tt-trail__block">
        <h3>Your notes</h3>
        ${noteEntries.length ? `<div class="tt-notes">${noteEntries.map(([key, note], index) => `
          <button type="button" data-note="${index}">
            <strong>${escapeHtml(note.title || key)}</strong>
            <p>${escapeHtml(String(note.text).slice(0, 60))}${String(note.text).length > 60 ? "…" : ""}</p>
          </button>
        `).join("")}</div>` : `<p class="tt-empty">Your private song notes will appear here.</p>`}
      </section>
      <p class="tt-trail__foot">Saved on this browser. Clearing browser data clears your collection.</p>
    `);

    overlay.querySelectorAll("[data-fav]").forEach((button) => {
      button.addEventListener("click", () => {
        const song = favSongs[Number(button.dataset.fav)];
        if (song) jumpToSong(song, close);
      });
    });
    overlay.querySelectorAll("[data-note]").forEach((button) => {
      button.addEventListener("click", () => {
        const [key] = noteEntries[Number(button.dataset.note)];
        const song = byKey.get(key);
        if (song) jumpToSong(song, close);
      });
    });
  }

  /* ---------- 9. 接管入口按钮 + 包装原函数 ---------- */

  function replaceListeners(element) {
    const fresh = element.cloneNode(true);
    element.replaceWith(fresh);
    return fresh;
  }

  function init() {
    // 9.1 包装 openSongModal：每次打开歌曲 → 记录时代足迹 + 注入便签/Favourites
    const baseOpenSongModal = openSongModal;
    openSongModal = function (title) {
      baseOpenSongModal(title);
      try {
        const album = albums[currentAlbumIndex];
        if (album) recordAlbumVisit(album.id);
        enhanceSongModal(title);
      } catch (error) {
        console.warn("companion enhance failed", error);
      }
    };

    // 9.2 "今天读这首" → Daily ritual
    const todayBtn = document.getElementById("todaySongBtn");
    if (todayBtn) {
      const fresh = replaceListeners(todayBtn);
      fresh.textContent = "Discover ↗";
      fresh.addEventListener("click", openRitual);
    }

    // 9.3 进度按钮 → Era passport（注：当前设计里 .rail-tools 被 CSS 隐藏，
    //     这里保留绑定是为了将来如果恢复侧栏入口仍然可用）
    const progressBtn = document.getElementById("progressBtn");
    if (progressBtn) {
      const fresh = replaceListeners(progressBtn);
      fresh.setAttribute("aria-label", "Open era passport");
      fresh.title = "Era passport";
      fresh.addEventListener("click", openPassport);
      updateProgressDisplay();
    }

    // 9.4 常驻浮动入口坞（右下角）：Daily ritual / Era passport / Your collection
    if (!document.querySelector(".tt-dock")) {
      const read = readSongSet();
      const dock = document.createElement("nav");
      dock.className = "tt-dock";
      dock.setAttribute("aria-label", "Your collection");
      dock.innerHTML = `
        <button type="button" data-dock="ritual" title="Daily ritual">
          <i>☀</i><span>Daily</span>
        </button>
        <button type="button" data-dock="passport" title="Era passport">
          <i>✦</i><span>Passport</span>
        </button>
        <button type="button" data-dock="trail" title="Your collection">
          <i>♥</i><span>Collection</span>
        </button>
      `;
      dock.querySelector('[data-dock="ritual"]').addEventListener("click", openRitual);
      dock.querySelector('[data-dock="passport"]').addEventListener("click", openPassport);
      dock.querySelector('[data-dock="trail"]').addEventListener("click", openTrajectory);
      document.body.appendChild(dock);
      void read;
    }

    // 9.5 当天第一次进站时，轻轻提醒Daily ritual（不打扰，只出现一次）
    const stats = getStats();
    if (stats.lastRitualDay !== dayNumber()) {
      const hint = document.createElement("button");
      hint.type = "button";
      hint.className = "tt-daily-hint";
      const today = songOfDay(0);
      hint.innerHTML = today
        ? `A song from <strong>${escapeHtml(today.album.title)}</strong>, for today →`
        : "Your daily ritual is ready →";
      hint.addEventListener("click", () => {
        hint.remove();
        openRitual();
      });
      document.body.appendChild(hint);
      setTimeout(() => hint.classList.add("show"), 1200);
      setTimeout(() => {
        hint.classList.remove("show");
        setTimeout(() => hint.remove(), 600);
      }, 13000);
    }
  }

  window.SwiftieCompanion = {
    openRitual,
    openPassport,
    openTrajectory,
    songOfDay,
    weeklyTheme
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
