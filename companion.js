/* ============================================================
   companion.js — Swiftie 私人阅读房间 · 陪伴模块
   ------------------------------------------------------------
   这个文件不修改 app.js 的任何原有逻辑，只在它之后加载，
   通过"包装函数 + 注入按钮"的方式增加 5 组功能：

   1. 每日仪式：今日歌曲 / 今日情绪 / 今日一句 / 今日问题 /
      明日预告 / 本周主题 / 连续打卡
   2. 私人便签：每首歌的"我的记忆"，只存浏览器本地
   3. 收藏：每首歌可以点亮一颗心
   4. 我的 Taylor 轨迹：停留最久的时代、主题偏好、
      隐藏曲偏好、记忆盒子
   5. 专辑护照：把 0/154 进度变成 12 枚时代徽章 + 完成寄语

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

  // 每张专辑的情绪主题（用于"轨迹"里的主题统计与每周主题选歌）
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
    heartbreak: "心碎",
    revenge: "反击",
    growth: "成长",
    nostalgia: "怀旧",
    love: "恋爱",
    release: "释然"
  };

  // 每个时代徽章点亮后的完成寄语
  const eraBlessings = {
    "taylor-swift": "你陪一个少女把校车和吉他写成了第一章。",
    fearless: "童话会碎，但你和她一起选择了仍然敢爱。",
    "speak-now": "全部署名都是她自己——这一章你听完了她的独白。",
    red: "猩红色的秋天走完了，伤疤变成了金色的纪念。",
    "1989": "你看着她搬进大城市，把心碎跳成了舞。",
    reputation: "蛇蜕了皮。你见证了名声废墟里长出的真心。",
    lover: "粉色与金色的日光——你陪她学会了安心被爱。",
    folklore: "森林里的故事讲完了，篝火留给路过的你。",
    evermore: "雪停了。有些悲伤不必痊愈，也可以共存。",
    midnights: "十三个失眠的午夜，你都陪她醒着。",
    ttpd: "诗稿合上了。最痛的一章，你没有跳过。",
    showgirl: "舞台灯亮起，演出落幕——而她终于在谢幕时微笑。"
  };

  // 今日情绪牌（13 张，向 13 致敬）
  const moods = [
    { label: "失落", line: "今天可以不必振作，先把情绪放进一首歌里。" },
    { label: "自信", line: "今天适合昂着头走路，像 reputation 巡演开场那样。" },
    { label: "怀旧", line: "有些日子就是会突然想念过去的自己。" },
    { label: "恋爱", line: "心跳加速不需要理由，今天的世界是粉色的。" },
    { label: "释然", line: "放下不是认输，是终于把背包卸下来。" },
    { label: "勇敢", line: "Fearless 不是不害怕，是害怕着也往前走。" },
    { label: "想念", line: "今天允许自己想念一个人、一个地方、一段时间。" },
    { label: "温柔", line: "对世界温柔之前，先对自己温柔一点。" },
    { label: "倔强", line: "他们越说不行，你越要把它写成一首歌。" },
    { label: "平静", line: "不是所有日子都要轰轰烈烈，平静也是一种抵达。" },
    { label: "心动", line: "也许是天气，也许是某个眼神，今天有点 Enchanted。" },
    { label: "自由", line: "把日程表合上五分钟，这五分钟只属于你。" },
    { label: "清醒", line: "凌晨写下的问题，今天的你已经有了答案。" }
  ];

  // 今日问题（13 个，循环出现）
  const questions = [
    "这首歌让你想起谁，或者哪个阶段的自己？",
    "如果把今天写成一句歌词，会是什么？",
    "你第一次认真听 Taylor 是在什么时候、什么场景？",
    "有没有一首歌，你听的时候必须一个人？",
    "如果能回到某个时代现场，你会选哪一场演出？",
    "哪句歌词曾经在某个艰难的时刻接住过你？",
    "你想把今天这首歌送给谁？为什么？",
    "五年前的你和现在的你，最喜欢的专辑一样吗？",
    "有没有一首歌，你是后来才突然听懂的？",
    "你的人生现在更像哪张专辑的哪一首 track？",
    "如果给今天的心情选一个时代颜色，是哪种颜色？",
    "有没有一段歌词，你一直想抄下来送给过去的自己？",
    "听完今天这首，你最想做的一件小事是什么？"
  ];

  // 每周主题（按周轮换，制造"下周回来有新东西"的期待）
  const weeklyThemes = [
    { name: "告别", desc: "本周读那些说再见的歌：有的体面，有的狼狈，都很真实。", themes: ["heartbreak"] },
    { name: "重生", desc: "本周读关于放下与重新开始的歌，把灰烬留在上一章。", themes: ["release", "growth"] },
    { name: "童话", desc: "本周允许自己相信一次童话，哪怕知道结局可能会改写。", themes: ["love"] },
    { name: "反击", desc: "本周读那些不再道歉的歌——温柔的人也有锋利的权利。", themes: ["revenge"] },
    { name: "怀旧", desc: "本周回到旧时光：校车、舞会、秋天的围巾和老照片。", themes: ["nostalgia"] },
    { name: "成长", desc: "本周读关于长大的歌，长大不是变硬，是变完整。", themes: ["growth"] },
    { name: "深夜", desc: "本周适合在晚上读：失眠、自我怀疑，和凌晨三点的清醒。", themes: ["heartbreak", "release"] },
    { name: "盛夏恋歌", desc: "本周读那些心跳很快的歌，残酷的夏天也值得一场心动。", themes: ["love", "nostalgia"] }
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

  // 今日一句：优先取这首歌的解读首句，否则用专辑论点
  function dailyLine(song) {
    const lower = songKey(song.title);
    const analyzed =
      song.album.hits.find((s) => songKey(s.title) === lower) ||
      song.album.deeps.find((s) => songKey(s.title) === lower);
    const source = analyzed ? analyzed.analysis : song.album.thesis;
    const first = String(source).split("。")[0].trim();
    if (!first) return source;
    return /[。！？…?!]$/.test(first) ? first : first + "。";
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
    const overlay = document.createElement("div");
    overlay.className = `tt-overlay ${className}`;
    overlay.innerHTML = `
      <div class="tt-overlay__backdrop"></div>
      <section class="tt-overlay__card" role="dialog" aria-modal="true">
        <button class="tt-overlay__close" type="button" aria-label="关闭">×</button>
        <div class="tt-overlay__body">${html}</div>
      </section>
    `;
    document.body.appendChild(overlay);
    document.body.classList.add("modal-open");
    const close = () => {
      overlay.remove();
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKey);
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

  /* ---------- 5. 每日仪式弹窗 ---------- */

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
      <p class="tt-eyebrow">${dateText} · 每日仪式</p>
      <div class="tt-ritual__mood" style="--era:${today.album.color}">
        <span>今日情绪</span>
        <strong>${escapeHtml(mood.label)}</strong>
        <p>${escapeHtml(mood.line)}</p>
      </div>
      <div class="tt-ritual__song" style="--era:${today.album.color}">
        <span>今日歌曲</span>
        <h3>${escapeHtml(today.title)}</h3>
        <p>${escapeHtml(today.album.title)} · ${escapeHtml(today.album.year)} · ${escapeHtml(today.album.cn)}</p>
        <blockquote>${escapeHtml(dailyLine(today))}</blockquote>
        <button class="tt-btn primary" type="button" data-open-today>打开这首歌</button>
      </div>
      <div class="tt-ritual__question">
        <span>今日问题</span>
        <p>${escapeHtml(question)}</p>
        <small>可以在歌曲页底部的"我的记忆"里写下答案，它只会留在你的浏览器里。</small>
      </div>
      <div class="tt-ritual__theme">
        <span>本周主题 · ${escapeHtml(theme.name)}</span>
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
        <span>已连续来这里 <strong>${stats.streak}</strong> 天</span>
        <span>明天会打开一首来自 <strong>${escapeHtml(tomorrow.album.title)}</strong> 的歌</span>
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

  /* ---------- 6. 歌曲弹窗增强：收藏 + 私人便签 ---------- */

  function refreshFav(button) {
    const favs = load(KEYS.favs, []);
    const on = favs.includes(button.dataset.key);
    button.textContent = on ? "♥" : "♡";
    button.classList.toggle("on", on);
    button.setAttribute("aria-label", on ? "取消收藏" : "收藏这首歌");
    button.title = on ? "已收藏" : "收藏这首歌";
  }

  function enhanceSongModal(title) {
    const modal = document.querySelector("#songModal");
    if (!modal) return;
    const album = albums[currentAlbumIndex];
    const key = songKey(title);

    // 收藏按钮（固定在弹窗右上角、关闭按钮旁，桌面与移动端都可见）
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
        <p class="tt-memory__title">我的记忆</p>
        <textarea rows="3" placeholder="这首歌对我意味着……
第一次听它的时候……
我想把它送给……"></textarea>
        <div class="tt-memory__bar">
          <small class="tt-memory__state">${existing ? "已保存在本浏览器" : "只保存在你的浏览器里，不会上传"}</small>
          <button type="button" class="tt-btn">保存</button>
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
        state.textContent = text ? "已保存在本浏览器" : "只保存在你的浏览器里，不会上传";
      };
      box.querySelector("button").addEventListener("click", persist);
      textarea.addEventListener("blur", persist);
      content.appendChild(box);
    }
  }

  /* ---------- 7. 专辑护照（替换原进度弹窗） ---------- */

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
      <p class="tt-eyebrow">专辑护照</p>
      <h2>${journeyDone ? "我的 12 Eras Journey" : "十二枚时代徽章"}</h2>
      <p class="tt-passport__sub">
        已探索 ${totalDone} / ${totalAll} 首 · 点亮 ${litCount} / ${eras.length} 枚徽章
        ${journeyDone ? "" : "（每个时代读满 13 首即可点亮徽章）"}
      </p>
      ${journeyDone ? `<div class="tt-journey">十二个时代你都走过了。这趟旅程从校车出发，停在舞台灯下——而你一直都在。</div>` : ""}
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
                ${era.lit ? `<p class="tt-era__bless">${escapeHtml(eraBlessings[era.album.id] || "这个时代，你读完了。")}</p>` : ""}
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

  /* ---------- 8. 我的 Taylor 轨迹 ---------- */

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

    // 主题统计：每首读过的歌为其专辑主题各 +1
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
        ? `你现在像在 <strong>${escapeHtml(visits[0].album.title)}</strong> 和 <strong>${escapeHtml(visits[1].album.title)}</strong> 之间来回走。`
        : visits.length === 1
          ? `你最近一直停留在 <strong>${escapeHtml(visits[0].album.title)}</strong> 的时代里。`
          : "你的旅程刚刚开始，去任何一个时代逛逛吧。";

    const deepTotal = deepCount + hitCount;
    const deepLine = deepTotal
      ? deepCount >= hitCount
        ? `你偏爱深藏曲（${Math.round((deepCount / deepTotal) * 100)}%）——真正的心跳总在 B 面。`
        : `你更常回到热门歌（${Math.round((hitCount / deepTotal) * 100)}%）——大合唱也是一种归属感。`
      : "还没有足够的数据看出你的隐藏曲偏好。";

    const noteEntries = Object.entries(notes).sort((a, b) => (b[1].updated || 0) - (a[1].updated || 0));
    const favSongs = favs.map((key) => byKey.get(key)).filter(Boolean);

    const { overlay, close } = openOverlay("tt-trail", `
      <p class="tt-eyebrow">我的 Taylor 轨迹</p>
      <h2>关于你的阅读地图</h2>
      <p class="tt-trail__wander">${wander}</p>
      <div class="tt-trail__stats">
        <div><strong>${read.size}</strong><small>读过的歌</small></div>
        <div><strong>${favSongs.length}</strong><small>收藏</small></div>
        <div><strong>${noteEntries.length}</strong><small>记忆便签</small></div>
        <div><strong>${stats.streak || 0}</strong><small>连续天数</small></div>
      </div>
      ${visits.length ? `
        <section class="tt-trail__block">
          <h3>你停留最久的时代</h3>
          <div class="tt-trail__eras">
            ${visits.slice(0, 3).map((item) => `
              <span style="--era:${item.album.color}">${escapeHtml(item.album.title)} · ${item.count} 次</span>
            `).join("")}
          </div>
        </section>` : ""}
      <section class="tt-trail__block">
        <h3>你读得最多的主题</h3>
        ${themeRank.length ? themeRank.map(([theme, count]) => `
          <div class="tt-theme-row">
            <span>${themeLabels[theme] || theme}</span>
            <div class="tt-theme-bar"><i style="width:${themeMax ? Math.round((count / themeMax) * 100) : 0}%"></i></div>
            <small>${count}</small>
          </div>
        `).join("") : `<p class="tt-empty">读几首歌之后，这里会长出你的主题地图。</p>`}
        <p class="tt-trail__deep">${deepLine}</p>
      </section>
      <section class="tt-trail__block">
        <h3>我的收藏</h3>
        ${favSongs.length ? `<div class="tt-chiplist">${favSongs.map((song, index) => `
          <button type="button" data-fav="${index}" style="--era:${song.album.color}">♥ ${escapeHtml(song.title)}</button>
        `).join("")}</div>` : `<p class="tt-empty">在歌曲页右上角点 ♡，把它别在这里。</p>`}
      </section>
      <section class="tt-trail__block">
        <h3>我的记忆盒子</h3>
        ${noteEntries.length ? `<div class="tt-notes">${noteEntries.map(([key, note], index) => `
          <button type="button" data-note="${index}">
            <strong>${escapeHtml(note.title || key)}</strong>
            <p>${escapeHtml(String(note.text).slice(0, 60))}${String(note.text).length > 60 ? "…" : ""}</p>
          </button>
        `).join("")}</div>` : `<p class="tt-empty">每首歌底部都有一张便签，写下的话只会留在这台设备上。</p>`}
      </section>
      <p class="tt-trail__foot">以上全部数据只存在你的浏览器本地（localStorage），清除浏览器数据会同时清空它们。</p>
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
    // 9.1 包装 openSongModal：每次打开歌曲 → 记录时代足迹 + 注入便签/收藏
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

    // 9.2 "今天读这首" → 每日仪式
    const todayBtn = document.getElementById("todaySongBtn");
    if (todayBtn) {
      const fresh = replaceListeners(todayBtn);
      fresh.textContent = "今日仪式 · 抽一张情绪牌";
      fresh.addEventListener("click", openRitual);
    }

    // 9.3 进度按钮 → 专辑护照（注：当前设计里 .rail-tools 被 CSS 隐藏，
    //     这里保留绑定是为了将来如果恢复侧栏入口仍然可用）
    const progressBtn = document.getElementById("progressBtn");
    if (progressBtn) {
      const fresh = replaceListeners(progressBtn);
      fresh.setAttribute("aria-label", "打开专辑护照");
      fresh.title = "专辑护照";
      fresh.addEventListener("click", openPassport);
      updateProgressDisplay();
    }

    // 9.4 常驻浮动入口坞（右下角）：今日仪式 / 专辑护照 / 我的轨迹
    if (!document.querySelector(".tt-dock")) {
      const read = readSongSet();
      const dock = document.createElement("nav");
      dock.className = "tt-dock";
      dock.setAttribute("aria-label", "我的阅读房间");
      dock.innerHTML = `
        <button type="button" data-dock="ritual" title="今日仪式">
          <i>☀</i><span>今日</span>
        </button>
        <button type="button" data-dock="passport" title="专辑护照">
          <i>✦</i><span>护照</span>
        </button>
        <button type="button" data-dock="trail" title="我的轨迹">
          <i>♥</i><span>轨迹</span>
        </button>
      `;
      dock.querySelector('[data-dock="ritual"]').addEventListener("click", openRitual);
      dock.querySelector('[data-dock="passport"]').addEventListener("click", openPassport);
      dock.querySelector('[data-dock="trail"]').addEventListener("click", openTrajectory);
      document.body.appendChild(dock);
      void read;
    }

    // 9.5 当天第一次进站时，轻轻提醒今日仪式（不打扰，只出现一次）
    const stats = getStats();
    if (stats.lastRitualDay !== dayNumber()) {
      const hint = document.createElement("button");
      hint.type = "button";
      hint.className = "tt-daily-hint";
      const today = songOfDay(0);
      hint.innerHTML = today
        ? `今天为你留了一首 <strong>${escapeHtml(today.album.title)}</strong> 的歌 →`
        : "今日仪式已就绪 →";
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
