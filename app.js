function renderRail() {
  const rail = document.querySelector("#albumRail");
  const map = document.querySelector("#heroMap");

  albums.forEach((album, index) => {
    const railLink = document.createElement("a");
    railLink.className = "rail-item";
    railLink.href = `#album-${album.id}`;
    railLink.style.setProperty("--era", album.color);
    railLink.innerHTML = `
      <span class="chip"></span>
      <span class="num">${String(index + 1).padStart(2, "0")}</span>
      <span><strong>${album.title}</strong><small>${album.year} · ${album.cn}</small></span>
    `;
    rail.appendChild(railLink);

    const mapLink = document.createElement("a");
    mapLink.className = "map-item";
    mapLink.href = `#album-${album.id}`;
    mapLink.style.setProperty("--era", album.color);
    mapLink.innerHTML = `<img class="map-cover" src="${albumCovers[album.id]}" alt="" loading="lazy" decoding="async" /><strong>${album.title}</strong>`;
    map.appendChild(mapLink);
  });
}

function songCard(song, album, kind) {
  return `
    <article class="${kind === "hit" ? "song-card" : "deep-card"}" id="${slug(album.id + "-" + song.title)}">
      <header>
        <h4>${song.title}</h4>
        <span class="tag">${kind === "hit" ? "Essential" : "Deep cut"}</span>
      </header>
      <p>${song.analysis}</p>
      <div class="life"><strong>Context: </strong>${song.life}</div>
    </article>
  `;
}

function renderAlbums() {
  const stage = document.querySelector("#albums");
  stage.innerHTML = albums
    .map((album, index) => {
      const next = albums[index + 1];
      return `
        <article class="album" id="album-${album.id}" style="--era:${album.color}">
          <div class="album-header">
            <div>
              <div class="album-kicker">${String(index + 1).padStart(2, "0")} · ${album.year}</div>
              <h2>${album.title}<span class="cn">${album.cn}</span></h2>
              <div class="album-meta">
                <span>${album.genre}</span>
                <span>${album.length}</span>
                <span>Era colour ${album.color}</span>
              </div>
            </div>
            <div>
              <p class="era-thesis">${album.thesis}</p>
              <div class="album-copy">
                <section class="context-card">
                  <h3>The record</h3>
                  <p>${album.context}</p>
                </section>
                <section class="context-card">
                  <h3>In context</h3>
                  <p>${album.life}</p>
                </section>
              </div>
            </div>
          </div>
          <div class="tracks">
            <section class="track-group">
              <h3>Essential tracks</h3>
              <div class="song-grid">
                ${album.hits.map((song) => songCard(song, album, "hit")).join("")}
              </div>
            </section>
            <section class="track-group">
              <h3>Deep cuts</h3>
              <div class="song-grid">
                ${album.deeps.map((song) => songCard(song, album, "deep")).join("")}
              </div>
            </section>
          </div>
          <div class="timeline">
            ${album.timeline
              .map(([date, text]) => `<div><strong>${date}</strong><span>${text}</span></div>`)
              .join("")}
          </div>
          ${
            next
              ? `<a class="button secondary" style="margin-top:32px" href="#album-${next.id}">Next: ${next.title}</a>`
              : `<a class="button primary" style="margin-top:32px" href="#sources">Sources</a>`
          }
        </article>
      `;
    })
    .join("");
}

function renderSongIndex(filter = "all") {
  const list = document.querySelector("#songList");
  const songs = albums.flatMap((album) => [
    ...album.hits.map((song) => ({ ...song, album, kind: "hit" })),
    ...album.deeps.map((song) => ({ ...song, album, kind: "deep" }))
  ]);
  const filtered = filter === "all" ? songs : songs.filter((song) => song.kind === filter);
  list.innerHTML = filtered
    .map(
      (song) => `
      <a class="song-pill" href="#${slug(song.album.id + "-" + song.title)}" style="--era:${song.album.color}; border-left:6px solid ${song.album.color}">
        <strong>${song.title}</strong>
        <small>${song.album.title} · ${song.kind === "hit" ? "Essentials" : "Deep cuts"}</small>
      </a>
    `
    )
    .join("");
}

function bindFilters() {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderSongIndex(button.dataset.filter);
    });
  });
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

let currentAlbumIndex = 0;
let currentFilter = "all";
let currentReadingIndex = 0;
let activeAlbumSection = "guide";
const readingIndexByAlbum = {};
let applyingHistoryState = false;

const landingCopy = {
  micro: "",
  title: "The album archive.",
  titleHtml: 'The album archive.',
  lead: "Songs, stories & your own notes.",
  primary: "Explore albums ↓",
  secondary: ""
};

const heroMapPositions = [
  { x: 20, y: 78, mx: 20, my: 78 },
  { x: 32, y: 82, mx: 32, my: 82 },
  { x: 44, y: 76, mx: 44, my: 76 },
  { x: 56, y: 70, mx: 56, my: 70 },
  { x: 68, y: 64, mx: 68, my: 64 },
  { x: 78, y: 56, mx: 78, my: 56 },
  { x: 74, y: 48, mx: 74, my: 48 },
  { x: 62, y: 42, mx: 62, my: 42 },
  { x: 68, y: 34, mx: 68, my: 34 },
  { x: 76, y: 32, mx: 76, my: 32 },
  { x: 78, y: 40, mx: 78, my: 40 },
  { x: 66, y: 56, mx: 66, my: 56 }
];



heroMapPositions.splice(
  0,
  heroMapPositions.length,
  { x: 28, y: 78, mx: 15, my: 70 },
  { x: 45, y: 64, mx: 16, my: 65 },
  { x: 53, y: 44, mx: 28, my: 57 },
  { x: 64, y: 34, mx: 44, my: 53 },
  { x: 80, y: 17, mx: 69, my: 46 },
  { x: 78, y: 30, mx: 66, my: 51 },
  { x: 75, y: 45, mx: 61, my: 57 },
  { x: 89, y: 36, mx: 83, my: 54 },
  { x: 88, y: 56, mx: 82, my: 62 },
  { x: 70, y: 72, mx: 54, my: 68 },
  { x: 55, y: 88, mx: 30, my: 75 },
  { x: 88, y: 88, mx: 82, my: 75 }
);

const albumCovers = {
  "taylor-swift": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg",
  fearless: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg",
  "speak-now": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg",
  red: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c6/27/9c/c6279c07-9329-827d-31c4-f5d4c7d99ff4/21UM1IM25046.rgb.jpg/600x600bb.jpg",
  "1989": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg",
  reputation: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg",
  lover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg",
  folklore: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8c/ef/c2/8cefc23a-61b7-05ff-b52a-bb1e4922087c/20UMGIM64216.rgb.jpg/600x600bb.jpg",
  evermore: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/18/93/99/189399a7-95e1-324b-e40a-bd9e3ea22a95/20UM1IM14847.rgb.jpg/600x600bb.jpg",
  midnights: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fb/b7/5d/fbb75d98-3b52-2fa5-ca82-658194f3c498/23UMGIM58157.rgb.jpg/600x600bb.jpg",
  ttpd: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f2/e9/df/f2e9dfd0-6602-1aef-6171-51cd3138df86/24UM1IM07019.rgb.jpg/600x600bb.jpg",
  showgirl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"
};

renderRail = function () {
  const rail = document.querySelector("#albumRail");
  const map = document.querySelector("#heroMap");
  rail.innerHTML = "";
  if (map) map.innerHTML = "";

  const homeLink = document.createElement("a");
  homeLink.className = "palette-home";
  homeLink.href = "#top";
  homeLink.setAttribute("aria-label", "All eras");
  homeLink.title = "All eras";
  homeLink.innerHTML = "<span></span>";
  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    closePalette();
    showLanding({ pushHistory: true });
  });
  rail.appendChild(homeLink);

  albums.forEach((album, index) => {
    const railLink = document.createElement("a");
    railLink.className = "rail-item";
    railLink.href = `#album-${album.id}`;
    railLink.dataset.album = album.id;
    railLink.dataset.label = album.title;
    railLink.title = `${album.title} · ${album.cn}`;
    const angle = -90 + index * 30;
    const radius = 124;
    railLink.style.setProperty("--x", `${Math.round(Math.cos((angle * Math.PI) / 180) * radius)}px`);
    railLink.style.setProperty("--y", `${Math.round(Math.sin((angle * Math.PI) / 180) * radius)}px`);
    railLink.style.setProperty("--era", album.color);
    railLink.innerHTML = `
      <span class="chip"></span>
      <span class="num">${String(index + 1).padStart(2, "0")}</span>
      <span><strong>${album.title}</strong><small>${album.year} · ${album.cn}</small></span>
    `;
    railLink.addEventListener("click", (event) => {
      event.preventDefault();
      if (isTouchPalette() && railLink.dataset.preview !== "true") {
        document.querySelectorAll(".rail-item").forEach((item) => {
          item.dataset.preview = "false";
          item.classList.remove("preview");
        });
        railLink.dataset.preview = "true";
        railLink.classList.add("preview");
        document.querySelector(".rail")?.classList.add("open");
        return;
      }
      selectAlbum(index);
      closePalette();
    });
    rail.appendChild(railLink);

    if (map) {
      const mapLink = document.createElement("a");
      const position = heroMapPositions[index] || { x: 50, y: 50, mx: 50, my: 50 };
      mapLink.className = "map-item";
      mapLink.href = `#album-${album.id}`;
      mapLink.dataset.album = album.id;
      mapLink.dataset.label = album.title;
      mapLink.style.setProperty("--era", album.color);
      mapLink.style.setProperty("--map-x", `${position.x}%`);
      mapLink.style.setProperty("--map-y", `${position.y}%`);
      mapLink.style.setProperty("--map-mobile-x", `${position.mx}%`);
      mapLink.style.setProperty("--map-mobile-y", `${position.my}%`);
      mapLink.setAttribute("aria-label", album.title);
      mapLink.innerHTML = `<img class="map-cover" src="${albumCovers[album.id]}" alt="" loading="lazy" decoding="async" /><strong>${album.title}</strong>`;
      mapLink.addEventListener("click", (event) => {
        event.preventDefault();
        selectAlbum(index);
      });
      map.appendChild(mapLink);
    }
  });
};

songCard = function (song, album, kind) {
  return `
    <article class="${kind === "hit" ? "song-card" : "deep-card"} song-open-card" id="${slug(album.id + "-" + song.title)}" data-song-title="${escapeHtml(song.title)}" role="button" tabindex="0">
      <header>
        <h4>${song.title}</h4>
        <span class="tag">${kind === "hit" ? "Essential" : "Deep cut"}</span>
      </header>
      <p>${song.analysis}</p>
      <div class="life">${song.life}</div>
      ${renderNeteasePlay(album, song.title, "card")}
    </article>
  `;
};

renderAlbums = function () {
  if (window.location.hash.startsWith("#album-")) {
    selectAlbum(getAlbumIndexFromHash(), { fromHash: true, skipScroll: true });
    return;
  }
  showLanding();
};

function applyLandingCopy() {
  const micro = document.querySelector(".hero .micro");
  const title = document.querySelector("#hero-title");
  const lead = document.querySelector(".hero .lead");
  const primary = document.querySelector(".hero-actions .button.primary");
  const secondaryButtons = document.querySelectorAll(".hero-actions .button.secondary");

  if (micro) micro.textContent = landingCopy.micro;
  if (title) title.innerHTML = landingCopy.titleHtml || landingCopy.title;
  if (lead) lead.textContent = landingCopy.lead;
  if (primary) primary.textContent = landingCopy.primary;
  secondaryButtons.forEach((secondary) => {
    if (landingCopy.secondary) {
      secondary.textContent = landingCopy.secondary;
      secondary.hidden = false;
    } else {
      secondary.hidden = true;
    }
  });
}

function appHistoryState(view = "landing", albumIndex = currentAlbumIndex, section = activeAlbumSection) {
  const album = albums[albumIndex] || albums[0];
  return {
    swiftStory: true,
    view,
    album: album?.id || albums[0].id,
    section: section || "guide"
  };
}

function replaceAppHistory(state, url) {
  if (window.history?.replaceState) {
    history.replaceState(state, "", url);
  }
}

function pushAppHistory(state, url) {
  if (!applyingHistoryState && window.history?.pushState) {
    history.pushState(state, "", url);
  }
}

function applyRouteState(state) {
  applyingHistoryState = true;
  if (state?.view === "album") {
    const index = albums.findIndex((album) => album.id === state.album);
    currentAlbumIndex = index >= 0 ? index : 0;
    activeAlbumSection = state.section || "guide";
    currentFilter = "all";
    renderCurrentAlbum();
    requestAnimationFrame(() => {
      const target = document.querySelector("#albums");
      if (target) window.scrollTo({ top: target.offsetTop, behavior: "auto" });
    });
  } else {
    showLanding({ preserveHistory: true });
  }
  applyingHistoryState = false;
}

function initializeHistoryState() {
  const hash = window.location.hash;
  if (hash.startsWith("#album-")) {
    const index = getAlbumIndexFromHash();
    replaceAppHistory(appHistoryState("album", index, activeAlbumSection), `#album-${albums[index].id}`);
  } else {
    replaceAppHistory(appHistoryState("landing"), window.location.pathname + window.location.search);
  }
}

function showLanding(options = {}) {
  applyLandingCopy();
  const stage = document.querySelector("#albums");
  document.body.classList.add("landing-mode");
  document.body.classList.remove("album-mode", "album-hub-mode", "album-section-mode", "modal-open", "reading-open");
  document.body.style.removeProperty("--era");
  delete document.body.dataset.album;
  if (stage) {
    stage.innerHTML = "";
    stage.style.removeProperty("--era");
  }
  document.querySelectorAll("[data-album]").forEach((item) => {
    item.classList.remove("active", "preview");
    item.dataset.preview = "false";
  });
  if (!options.preserveHistory) {
    const landingUrl = window.location.pathname + window.location.search;
    if (options.pushHistory) {
      pushAppHistory(appHistoryState("landing"), landingUrl);
    } else if (window.location.hash.startsWith("#album-")) {
      replaceAppHistory(appHistoryState("landing"), landingUrl);
    }
  }
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
}

const albumDirectorySections = [
  { key: "reading", title: "Liner notes", subtitle: "The story behind the record", icon: "book" },
  { key: "timeline", title: "Timeline", subtitle: "Moments that shaped the era", icon: "hourglass" },
  { key: "tracklist", title: "Tracklist", subtitle: "Every track, in order", icon: "disc" }
];

function sectionByKey(key) {
  return albumDirectorySections.find((section) => section.key === key) || albumDirectorySections[0];
}

function renderDirectoryIcon(icon) {
  const paths = {
    back: `<path d="m15 5-7 7 7 7"/>`,
    book: `<path d="M5 5.5c3.4-.6 5.7.2 7 2.1v13.2c-1.3-1.5-3.6-2.1-7-1.6z"/><path d="M19 5.5c-3.4-.6-5.7.2-7 2.1v13.2c1.3-1.5 3.6-2.1 7-1.6z"/><path d="M12 7.6v13.2"/>`,
    note: `<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>`,
    disc: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4"/><path d="M12 4a8 8 0 0 1 8 8"/>`,
    feather: `<path d="M20 4c-7.5.4-12.2 3.5-14 9.3-.8 2.5-1 4.7-.7 6.7 1.8.2 4-.3 6.5-1.5 5.6-2.8 8.4-7.6 8.2-14.5z"/><path d="M5.4 19.8 14 11"/><path d="M9.5 16.1H6.2"/><path d="M12.2 13.3H8.8"/>`,
    heart: `<path d="M20.2 5.9c-1.8-2-4.7-2-6.5-.1L12 7.5l-1.7-1.7c-1.8-1.9-4.7-1.9-6.5.1-1.9 2.1-1.7 5.3.4 7.3l7.8 7.1 7.8-7.1c2.1-2 2.3-5.2.4-7.3z"/>`,
    hourglass: `<path d="M6 3h12"/><path d="M6 21h12"/><path d="M8 3c0 4 2.5 5.8 4 8 1.5-2.2 4-4 4-8"/><path d="M8 21c0-4 2.5-5.8 4-8 1.5 2.2 4 4 4 8"/>`
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[icon] || paths.book}</svg>`;
}

function renderAlbumSwitchDock(prev, album, next) {
  return `
    <nav class="album-switch-dock" style="--era:${album.color}" aria-label="Switch era">
      <button type="button" data-switch="-1">
        <span class="switch-thumb"><img src="${albumCovers[prev.id] || ""}" alt="" loading="lazy" /></span>
        <span class="switch-copy"><small>Previous</small><strong>${prev.title}</strong></span>
      </button>
      <button class="album-switch-dock__current" type="button" data-home-page>
        <span class="switch-thumb"><img src="${albumCovers[album.id] || ""}" alt="" loading="lazy" /></span>
        <span class="switch-copy"><small>All eras</small><strong>${String(currentAlbumIndex + 1).padStart(2, "0")} / ${albums.length}</strong></span>
      </button>
      <button type="button" data-switch="1">
        <span class="switch-copy"><small>Next</small><strong>${next.title}</strong></span>
        <span class="switch-thumb"><img src="${albumCovers[next.id] || ""}" alt="" loading="lazy" /></span>
      </button>
    </nav>
  `;
}

function renderAlbumGuide(album, prev, next) {
  return `
    <article class="album album-guide" id="album-${album.id}" style="--era:${album.color}; --cover:url('${albumCovers[album.id] || ""}')">
      <div class="album-atmosphere" aria-hidden="true"></div>
      <div class="album-guide__wash" aria-hidden="true"></div>
      <div class="album-guide__top">
        <div class="album-guide__nav">
          <button class="album-guide__back" type="button" data-home-page aria-label="Home">${renderDirectoryIcon("back")}</button>
          <button class="album-guide__heart" type="button" data-home-page aria-label="Explore eras">All eras ↗</button>
        </div>
        <h2>${album.title}</h2>
        <p class="album-guide__meta">${album.year}</p>
        <div class="album-guide__cover-wrap">
          <figure class="album-guide__cover">
            <img src="${albumCovers[album.id] || ""}" alt="${album.title} album cover" loading="eager" fetchpriority="high" decoding="async" />
          </figure>
          <div class="album-guide__vinyl" aria-hidden="true"></div>
        </div>
      </div>
      <section class="album-directory" aria-label="${escapeHtml(album.title)} Explore this era">
        <div class="album-directory__title">
          <span></span>
          <strong>Explore this era</strong>
        </div>
        <div class="album-directory__cards">
          ${albumDirectorySections
            .map(
              (section) => `
                <button class="directory-card directory-card--${section.key}" type="button" data-album-section="${section.key}">
                  <span class="directory-card__icon">${renderDirectoryIcon(section.icon)}</span>
                  <span class="directory-card__copy">
                    <strong>${section.title}</strong>
                  </span>
                  <span class="directory-card__arrow">→</span>
                </button>
              `
            )
            .join("")}
        </div>
      </section>
      ${renderAlbumSwitchDock(prev, album, next)}
    </article>
  `;
}

function getTrackTitlesWithGroups(album) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  return [
    ...list.core.map((title, index) => ({ title, index: index + 1, group: "Standard" })),
    ...list.expanded.map((title, index) => ({ title, index: list.core.length + index + 1, group: "Bonus / Vault" }))
  ];
}

function renderLyricsRoom(album) {
  const tracks = getTrackTitlesWithGroups(album);
  return `
    <section class="lyrics-room">
      <div class="tracklist-heading">
        <h3>Lyrics</h3>
        <p>Lyrics, notes and a way to listen.</p>
      </div>
      <div class="lyrics-room__grid">
        ${tracks
          .map(
            (row) => `
              <button class="lyrics-room__song song-open-row" type="button" data-song-title="${escapeHtml(row.title)}">
                <span>${String(row.index).padStart(2, "0")}</span>
                <strong>${escapeHtml(row.title)}</strong>
                <small>${row.group} · ${trackStatus(album, row.title)}</small>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderReadingPortal(album) {
  const reading = albumReadings[album.id];
  if (!reading) return "";
  return `
    <section class="reading-portal">
      <div class="reading-portal__intro">
        <p class="era-thesis">${album.thesis}</p>
        <div class="era-narrative">
          <p>${album.context}</p>
          <p>${album.life}</p>
        </div>
      </div>
      <div class="reading-portal__grid" aria-label="${escapeHtml(album.title)} Reading chapters">
        ${reading.lenses
          .map(
            (item, index) => `
              <button class="reading-entry" type="button" data-reading-card="${index}">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <small>${escapeHtml(item.label)}</small>
                <strong>${escapeHtml(item.title)}</strong>
                <em>Read ↗</em>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function buildTimelineMoments(album) {
  const reading = albumReadings[album.id];
  const stages = ["Beginnings", "Turning point", "The record", "Echoes", "Afterwards"];
  return album.timeline.map(([date, text], index) => {
    const lens = reading?.lenses[index % reading.lenses.length];
    const hit = album.hits[index % album.hits.length];
    const deep = album.deeps[index % album.deeps.length];
    const isFirst = index === 0;
    const isLast = index === album.timeline.length - 1;
    let reflection = lens?.text || album.thesis;
    if (isFirst) {
      reflection = `${album.context}`;
    }
    if (isLast) {
      reflection = `Revisit ${hit.title} and ${deep.title}: two different ways into this chapter.`;
    }
    return {
      date,
      text,
      stage: stages[index % stages.length],
      anchor: hit?.title || deep?.title,
      reflection
    };
  });
}

function renderExpandedTimeline(album) {
  const moments = buildTimelineMoments(album);
  return `
    <section class="timeline-panel timeline-panel--deep">
      <div class="tracklist-heading timeline-heading">
        <h3>Timeline</h3>
        <p>The moments behind the music.</p>
      </div>
      <div class="timeline-story">
        ${moments
          .map(
            (moment, index) => `
              <article class="timeline-moment">
                <div class="timeline-moment__date">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <strong>${escapeHtml(moment.date)}</strong>
                </div>
                <div class="timeline-moment__body">
                  <small>${escapeHtml(moment.stage)}</small>
                  <h4>${escapeHtml(moment.text)}</h4>
                  <p>${escapeHtml(moment.reflection)}</p>
                  ${
                    moment.anchor
                      ? `<button class="timeline-song-link song-open-row" type="button" data-song-title="${escapeHtml(moment.anchor)}">Listen: ${escapeHtml(moment.anchor)}</button>`
                      : ""
                  }
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <aside class="timeline-coda">
        <strong>In perspective</strong>
        <p>${album.thesis}</p>
      </aside>
    </section>
  `;
}

function renderAlbumSection(album) {
  const section = sectionByKey(activeAlbumSection);
  const content =
    section.key === "reading"
      ? renderReadingPortal(album)
      : section.key === "tracklist"
        ? renderCompleteTracklist(album)
        : renderExpandedTimeline(album);
  const isCompactSection = section.key === "tracklist" || section.key === "timeline";
  const compactNav =
    isCompactSection
      ? `<div class="album-section__compact-nav">
          <button class="album-section__back" type="button" data-back-to-guide>${renderDirectoryIcon("back")}<span>Back</span></button>
          <p>${album.title}</p>
        </div>`
      : "";
  const header =
    isCompactSection
      ? ""
      : `<header class="album-section__header">
          <button class="album-section__back" type="button" data-back-to-guide>${renderDirectoryIcon("book")}<span>Back</span></button>
          <div>
            <p>${album.title}</p>
            <h2>${section.title}</h2>
            <small>${section.subtitle}</small>
          </div>
          <figure>
            <img src="${albumCovers[album.id] || ""}" alt="${album.title} album cover" loading="lazy" />
          </figure>
        </header>`;

  return `
    <article class="album album-section album-section--${section.key}" id="album-${album.id}" style="--era:${album.color}; --cover:url('${albumCovers[album.id] || ""}')">
      <div class="album-atmosphere" aria-hidden="true"></div>
      ${header}
      <div class="album-section__body">
        ${compactNav}
        ${content}
      </div>
    </article>
  `;
}

function renderCurrentAlbum() {
  const stage = document.querySelector("#albums");
  const album = albums[currentAlbumIndex];
  const prev = albums[(currentAlbumIndex - 1 + albums.length) % albums.length];
  const next = albums[(currentAlbumIndex + 1) % albums.length];

  document.body.style.setProperty("--era", album.color);
  document.body.dataset.album = album.id;
  document.body.classList.remove("landing-mode");
  document.body.classList.remove("reading-open");
  document.body.classList.add("album-mode");
  stage.style.setProperty("--era", album.color);
  document.querySelector("#songIndex").style.setProperty("--era", album.color);

  stage.innerHTML = `
    <article class="album" id="album-${album.id}" style="--era:${album.color}; --cover:url('${albumCovers[album.id] || ""}')">
      <div class="album-atmosphere" aria-hidden="true"></div>
      <div class="album-header">
        <div class="album-identity">
          <div class="album-kicker">${String(currentAlbumIndex + 1).padStart(2, "0")} · ${album.year}</div>
          <h2>${album.title}<span class="cn">${album.cn}</span></h2>
          <div class="album-meta">
            <span>${album.genre}</span>
            <span>${album.length}</span>
          </div>
          <div class="album-swatch" aria-hidden="true"></div>
          ${renderEraRituals(album)}
          <figure class="album-cover-card">
            <img src="${albumCovers[album.id] || ""}" alt="${album.title} album cover" loading="eager" fetchpriority="high" decoding="async" onerror="this.closest('.album-cover-card').classList.add('cover-fallback'); this.remove();" />
          </figure>
          ${renderAlbumReadingNav(album)}
        </div>
        <div>
          <p class="era-thesis">${album.thesis}</p>
          <div class="era-narrative">
            <p>${album.context}</p>
            <p>${album.life}</p>
          </div>
          ${renderAlbumReading(album)}
        </div>
      </div>
      ${renderCompleteTracklist(album)}
      <div class="tracks">
        <section class="track-group">
          <h3>Essential tracks</h3>
          <div class="song-grid">
            ${album.hits.map((song) => songCard(song, album, "hit")).join("")}
          </div>
        </section>
        <section class="track-group">
          <h3>Deep cuts</h3>
          <div class="song-grid">
            ${album.deeps.map((song) => songCard(song, album, "deep")).join("")}
          </div>
        </section>
      </div>
      <div class="timeline">
        ${album.timeline.map(([date, text]) => `<div><strong>${date}</strong><span>${text}</span></div>`).join("")}
      </div>
    </article>
    <nav class="mobile-era-dock" style="--era:${album.color}" aria-label="Mobile Switch era">
      <button type="button" data-switch="-1">
        <span>Previous</span>
        <strong>${prev.title}</strong>
      </button>
      <button class="mobile-era-dock__current" type="button" data-home-page>
        <span>${String(currentAlbumIndex + 1).padStart(2, "0")} / ${albums.length}</span>
        <strong>${album.title}</strong>
      </button>
      <button type="button" data-switch="1">
        <span>Next</span>
        <strong>${next.title}</strong>
      </button>
    </nav>
  `;

  stage.querySelectorAll("[data-switch]").forEach((button) => {
    button.addEventListener("click", () => selectAlbum(currentAlbumIndex + Number(button.dataset.switch)));
  });
  stage.querySelectorAll("[data-open-palette]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openPalette();
    });
  });

  document.querySelectorAll("[data-album]").forEach((item) => {
    item.classList.toggle("active", item.dataset.album === album.id);
  });

  renderSongIndex(currentFilter);
  bindSongOpeners(stage);
  bindEraRituals(stage, album);
  bindReadingOpeners(stage, album);
}

renderCurrentAlbum = function () {
  const stage = document.querySelector("#albums");
  const album = albums[currentAlbumIndex];
  const prev = albums[(currentAlbumIndex - 1 + albums.length) % albums.length];
  const next = albums[(currentAlbumIndex + 1) % albums.length];

  document.body.style.setProperty("--era", album.color);
  document.body.dataset.album = album.id;
  document.body.classList.remove("landing-mode", "reading-open");
  document.body.classList.add("album-mode");
  document.body.classList.toggle("album-hub-mode", activeAlbumSection === "guide");
  document.body.classList.toggle("album-section-mode", activeAlbumSection !== "guide");
  stage.style.setProperty("--era", album.color);
  document.querySelector("#songIndex")?.style.setProperty("--era", album.color);

  stage.innerHTML = activeAlbumSection === "guide" ? renderAlbumGuide(album, prev, next) : renderAlbumSection(album);

  stage.querySelectorAll("[data-album-section]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlbumSection = button.dataset.albumSection;
      renderCurrentAlbum();
      pushAppHistory(appHistoryState("album", currentAlbumIndex, activeAlbumSection), `#album-${albums[currentAlbumIndex].id}`);
      requestAnimationFrame(() => window.scrollTo({ top: stage.offsetTop, behavior: "auto" }));
    });
  });

  stage.querySelectorAll("[data-back-to-guide]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlbumSection = "guide";
      renderCurrentAlbum();
      replaceAppHistory(appHistoryState("album", currentAlbumIndex, activeAlbumSection), `#album-${albums[currentAlbumIndex].id}`);
      requestAnimationFrame(() => window.scrollTo({ top: stage.offsetTop, behavior: "auto" }));
    });
  });

  stage.querySelectorAll("[data-home-page]").forEach((button) => {
    button.addEventListener("click", () => showLanding({ pushHistory: true }));
  });

  stage.querySelectorAll("[data-switch]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlbumSection = "guide";
      selectAlbum(currentAlbumIndex + Number(button.dataset.switch));
    });
  });

  stage.querySelectorAll("[data-open-palette]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openPalette();
    });
  });

  document.querySelectorAll("[data-album]").forEach((item) => {
    item.classList.toggle("active", item.dataset.album === album.id);
  });

  renderSongIndex(currentFilter);
  bindSongOpeners(stage);
  bindEraRituals(stage, album);
  bindReadingPortal(stage, album);
  bindReadingOpeners(stage, album);
};

renderSongIndex = function (filter = "all") {
  currentFilter = filter;
  const list = document.querySelector("#songList");
  const album = albums[currentAlbumIndex];
  const heading = document.querySelector("#songIndex .section-heading");
  const songs = [
    ...album.hits.map((song) => ({ ...song, album, kind: "hit" })),
    ...album.deeps.map((song) => ({ ...song, album, kind: "deep" }))
  ];
  const filtered = filter === "all" ? songs : songs.filter((song) => song.kind === filter);

  heading.innerHTML = `
    <h2>${album.title} Track index</h2>
    <p>Every track, in order.</p>
  `;
  list.innerHTML = filtered
    .map(
      (song) => `
      <a class="song-pill" href="#${slug(song.album.id + "-" + song.title)}" style="--era:${song.album.color}; border-left:6px solid ${song.album.color}">
        <strong>${song.title}</strong>
        <small>${song.album.title} · ${song.kind === "hit" ? "Essentials" : "Deep cuts"}</small>
      </a>
    `
    )
    .join("");
};

bindFilters = function () {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderSongIndex(button.dataset.filter);
    });
  });
};

function selectAlbum(index, options = {}) {
  currentAlbumIndex = (index + albums.length) % albums.length;
  const album = albums[currentAlbumIndex];
  currentFilter = "all";
  activeAlbumSection = "guide";
  currentReadingIndex = readingIndexByAlbum[album.id] ?? 0;
  document.querySelectorAll(".filter").forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === "all");
  });
  renderCurrentAlbum();
  if (!options.fromHash && !options.skipHistory) {
    pushAppHistory(appHistoryState("album", currentAlbumIndex, activeAlbumSection), `#album-${album.id}`);
  }
  if (!options.skipScroll) {
    requestAnimationFrame(() => {
      const target = document.querySelector("#albums");
      if (!target) return;
      window.scrollTo({ top: target.offsetTop, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }
}

function getAlbumIndexFromHash() {
  const hash = decodeURIComponent(window.location.hash.replace(/^#album-/, ""));
  const index = albums.findIndex((album) => album.id === hash);
  return index >= 0 ? index : 0;
}

function getReadingIndex(album) {
  const reading = albumReadings[album.id];
  const saved = readingIndexByAlbum[album.id] ?? currentReadingIndex;
  if (!reading) return 0;
  return Math.min(Math.max(saved, 0), reading.lenses.length - 1);
}

function getAlbumTrackTitles(album) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  return [...list.core, ...list.expanded];
}

function hasTrack13(album) {
  return getAlbumTrackTitles(album).length >= 13;
}

function renderEraRituals(album) {
  const tracks = getAlbumTrackTitles(album);
  return `
    <section class="era-rituals" aria-label="${escapeHtml(album.title)} Discover">
      <div class="ritual-actions">
        <button type="button" data-surprise-song>Surprise me</button>
        ${hasTrack13(album) ? `<button type="button" data-lucky-track>13th</button>` : ""}
      </div>
      <div class="bracelet-track" aria-label="Featured tracks">
        ${tracks
          .map(
            (title, index) => `
              <button class="bracelet-bead song-open-row" type="button" data-song-title="${escapeHtml(title)}" title="${escapeHtml(title)}" aria-label="${escapeHtml(title)}">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <em>${escapeHtml(title)}</em>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function bindEraRituals(scope, album) {
  const tracks = getAlbumTrackTitles(album);
  scope.querySelectorAll("[data-surprise-song]").forEach((button) => {
    button.addEventListener("click", () => {
      const title = tracks[Math.floor(Math.random() * tracks.length)];
      if (title) openSongModal(title);
    });
  });
  scope.querySelectorAll("[data-lucky-track]").forEach((button) => {
    button.addEventListener("click", () => {
      const title = tracks[12] || tracks[tracks.length - 1] || tracks[0];
      if (title) openSongModal(title);
    });
  });
}

function renderAlbumReadingNav(album) {
  const reading = albumReadings[album.id];
  if (!reading) return "";
  const activeIndex = getReadingIndex(album);
  return `
    <div class="reading-console" aria-label="${escapeHtml(album.title)} Reading chapters">
      <div class="reading-console-head">
        <span>Liner notes</span>
      </div>
      <div class="reading-tabs" role="tablist">
        ${reading.lenses
          .map(
            (item, index) => `
              <button class="reading-tab ${index === activeIndex ? "active" : ""}" type="button" role="tab" aria-selected="${index === activeIndex}" data-reading-index="${index}">
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(item.title)}</strong>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderAlbumReading(album) {
  const reading = albumReadings[album.id];
  if (!reading) return "";
  const activeIndex = getReadingIndex(album);
  return `<div class="era-reading">${renderReadingDetail(album, activeIndex)}</div>`;
}

function renderReadingDetail(album, activeIndex) {
  const reading = albumReadings[album.id];
  const item = reading.lenses[activeIndex];
  const hit = album.hits[activeIndex % album.hits.length];
  const deep = album.deeps[activeIndex % album.deeps.length];
  const anchor = reading.anchors[activeIndex] || reading.anchors[0];
  return `
    <article class="reading-detail" data-active-reading="${activeIndex}">
      <button class="reading-close" type="button" data-close-reading aria-label="Close liner notes">×</button>
      <div class="reading-detail-kicker">
        <span>${String(activeIndex + 1).padStart(2, "0")}</span>
        <small>${escapeHtml(item.label)}</small>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
      <div class="reading-song-pair">
        <section>
          <span>Essentials</span>
          <h4>${escapeHtml(hit.title)}</h4>
          <p>${escapeHtml(hit.analysis)}</p>
          <small>${escapeHtml(hit.life)}</small>
        </section>
        <section>
          <span>Deep cuts</span>
          <h4>${escapeHtml(deep.title)}</h4>
          <p>${escapeHtml(deep.analysis)}</p>
          <small>${escapeHtml(deep.life)}</small>
        </section>
      </div>
      <div class="song-anchors" aria-label="Related songs">
        <span>${escapeHtml(anchor)}</span>
        <span>${escapeHtml(album.title)} · A closer listen.</span>
      </div>
    </article>
  `;
}

function ensureAlbumReadingModal() {
  let modal = document.querySelector("#albumReadingModal");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.id = "albumReadingModal";
  modal.className = "album-reading-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="album-reading-modal__backdrop" data-close-album-reading></div>
    <section class="album-reading-modal__card" role="dialog" aria-modal="true" aria-labelledby="albumReadingTitle">
      <button class="album-reading-modal__close" type="button" data-close-album-reading aria-label="Close liner notes">×</button>
      <div class="album-reading-modal__body"></div>
    </section>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-album-reading]")) closeAlbumReadingModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeAlbumReadingModal();
  });
  return modal;
}

function openAlbumReadingModal(album, index) {
  const modal = ensureAlbumReadingModal();
  currentReadingIndex = index;
  readingIndexByAlbum[album.id] = index;
  modal.style.setProperty("--era", album.color);
  modal.querySelector(".album-reading-modal__body").innerHTML = renderReadingDetail(album, index);
  modal.querySelector(".reading-detail h3")?.setAttribute("id", "albumReadingTitle");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".album-reading-modal__close").focus();
}

function closeAlbumReadingModal() {
  const modal = document.querySelector("#albumReadingModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function bindReadingPortal(scope, album) {
  scope.querySelectorAll("[data-reading-card]").forEach((button) => {
    button.addEventListener("click", () => openAlbumReadingModal(album, Number(button.dataset.readingCard)));
  });
}

function bindReadingOpeners(scope, album) {
  const reading = scope.querySelector(".era-reading");
  const closeReading = () => {
    reading?.classList.remove("open");
    document.body.classList.remove("reading-open");
  };

  scope.querySelectorAll("[data-reading-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.dataset.readingIndex);
      currentReadingIndex = nextIndex;
      readingIndexByAlbum[album.id] = nextIndex;
      if (reading) reading.innerHTML = renderReadingDetail(album, nextIndex);
      scope.querySelectorAll("[data-reading-index]").forEach((item) => {
        const active = Number(item.dataset.readingIndex) === nextIndex;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });
      if (window.matchMedia("(max-width: 720px)").matches) {
        reading?.classList.add("open");
        document.body.classList.add("reading-open");
      }
    });
  });

  reading?.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-reading]")) closeReading();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeReading();
  });
}

function bindPalette() {
  const rail = document.querySelector(".rail");
  const toggle = document.querySelector(".palette-toggle");
  if (!rail || !toggle) return;
  toggle.addEventListener("click", () => {
    const open = rail.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  rail.addEventListener("mouseenter", () => rail.classList.add("hover-open"));
  rail.addEventListener("mouseleave", () => rail.classList.remove("hover-open"));
  document.addEventListener("click", (event) => {
    if (!rail.contains(event.target)) closePalette();
  });
}

function closePalette() {
  const rail = document.querySelector(".rail");
  const toggle = document.querySelector(".palette-toggle");
  if (!rail || !toggle) return;
  rail.classList.remove("open", "hover-open");
  document.querySelectorAll(".rail-item").forEach((item) => {
    item.dataset.preview = "false";
    item.classList.remove("preview");
  });
  toggle.setAttribute("aria-expanded", "false");
}

function openPalette() {
  const rail = document.querySelector(".rail");
  const toggle = document.querySelector(".palette-toggle");
  if (!rail || !toggle) return;
  rail.classList.add("open");
  toggle.setAttribute("aria-expanded", "true");
}

function isTouchPalette() {
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

const completeTracklists = {};

Object.assign(completeTracklists, {
  "taylor-swift": {
    core: ["Tim McGraw", "Picture to Burn", "Teardrops on My Guitar", "A Place in This World", "Cold As You", "The Outside", "Tied Together with a Smile", "Stay Beautiful", "Should've Said No", "Mary's Song (Oh My My My)", "Our Song"],
    expanded: ["I'm Only Me When I'm with You", "Invisible", "A Perfectly Good Heart"]
  },
  fearless: {
    core: ["Fearless", "Fifteen", "Love Story", "Hey Stephen", "White Horse", "You Belong with Me", "Breathe", "Tell Me Why", "You're Not Sorry", "The Way I Loved You", "Forever & Always", "The Best Day", "Change"],
    expanded: ["Jump Then Fall", "Untouchable", "Forever & Always (Piano Version)", "Come In with the Rain", "Superstar", "The Other Side of the Door", "Today Was a Fairytale", "You All Over Me", "Mr. Perfectly Fine", "We Were Happy", "That's When", "Don't You", "Bye Bye Baby"]
  },
  "speak-now": {
    core: ["Mine", "Sparks Fly", "Back to December", "Speak Now", "Dear John", "Mean", "The Story of Us", "Never Grow Up", "Enchanted", "Better than Revenge", "Innocent", "Haunted", "Last Kiss", "Long Live"],
    expanded: ["Ours", "Superman", "Electric Touch", "When Emma Falls in Love", "I Can See You", "Castles Crumbling", "Foolish One", "Timeless"]
  },
  red: {
    core: ["State of Grace", "Red", "Treacherous", "I Knew You Were Trouble", "All Too Well", "22", "I Almost Do", "We Are Never Ever Getting Back Together", "Stay Stay Stay", "The Last Time", "Holy Ground", "Sad Beautiful Tragic", "The Lucky One", "Everything Has Changed", "Starlight", "Begin Again"],
    expanded: ["The Moment I Knew", "Come Back... Be Here", "Girl at Home", "State of Grace (Acoustic Version)", "Ronan", "Better Man", "Nothing New", "Babe", "Message in a Bottle", "I Bet You Think About Me", "Forever Winter", "Run", "The Very First Night", "All Too Well (10 Minute Version)"]
  }
});

completeTracklists["1989"] = { core: ["Welcome to New York", "Blank Space", "Style", "Out of the Woods"], expanded: [] };
completeTracklists["1989"].core.push("All You Had to Do Was Stay", "Shake It Off", "I Wish You Would", "Bad Blood", "Wildest Dreams");
completeTracklists["1989"].core.push("How You Get the Girl", "This Love", "I Know Places", "Clean");
completeTracklists["1989"].expanded.push("Wonderland", "You Are in Love", "New Romantics");
completeTracklists["1989"].expanded.push("\"Slut!\"", "Say Don't Go", "Now That We Don't Talk", "Suburban Legends", "Is It Over Now?", "Bad Blood (feat. Kendrick Lamar)");
completeTracklists.reputation = { core: ["...Ready for It?", "End Game", "I Did Something Bad", "Don't Blame Me", "Delicate", "Look What You Made Me Do", "So It Goes...", "Gorgeous", "Getaway Car", "King of My Heart", "Dancing with Our Hands Tied", "Dress", "This Is Why We Can't Have Nice Things", "Call It What You Want", "New Year's Day"], expanded: [] };
completeTracklists.lover = { core: ["I Forgot That You Existed", "Cruel Summer", "Lover", "The Man", "The Archer", "I Think He Knows", "Miss Americana & the Heartbreak Prince", "Paper Rings"], expanded: [] };
completeTracklists.lover.core.push("Cornelia Street", "Death by a Thousand Cuts", "London Boy", "Soon You'll Get Better");
completeTracklists.lover.core.push("False God", "You Need to Calm Down", "Afterglow", "ME!", "It's Nice to Have a Friend", "Daylight");
completeTracklists.folklore = { core: ["the 1", "cardigan", "the last great american dynasty", "exile", "my tears ricochet", "mirrorball", "seven", "august"], expanded: [] };
completeTracklists.folklore.core.push("this is me trying", "illicit affairs", "invisible string", "mad woman", "epiphany", "betty", "peace", "hoax");
completeTracklists.folklore.expanded.push("the lakes");
completeTracklists.evermore = { core: ["willow", "champagne problems", "gold rush", "'tis the damn season", "tolerate it", "no body, no crime", "happiness", "dorothea"], expanded: [] };
completeTracklists.evermore.core.push("coney island", "ivy", "cowboy like me", "long story short", "marjorie", "closure", "evermore");
completeTracklists.evermore.expanded.push("right where you left me", "it's time to go");
completeTracklists.midnights = { core: ["Lavender Haze", "Maroon", "Anti-Hero", "Snow on the Beach", "You're on Your Own, Kid", "Midnight Rain", "Question...?", "Vigilante Shit"], expanded: [] };
completeTracklists.midnights.core.push("Bejeweled", "Labyrinth", "Karma", "Sweet Nothing", "Mastermind");
completeTracklists.midnights.expanded.push("The Great War", "Bigger Than the Whole Sky", "Paris", "High Infidelity", "Glitch", "Would've, Could've, Should've", "Dear Reader", "Hits Different", "Snow on the Beach (More Lana Del Rey)", "Karma (feat. Ice Spice)");
completeTracklists.ttpd = { core: ["Fortnight"], expanded: [] };
completeTracklists.ttpd.core.push("The Tortured Poets Department", "My Boy Only Breaks His Favorite Toys", "Down Bad", "So Long, London");
completeTracklists.ttpd.core.push("But Daddy I Love Him", "Fresh Out the Slammer", "Florida!!!", "Guilty as Sin?", "Who's Afraid of Little Old Me?");
completeTracklists.ttpd.core.push("I Can Fix Him (No Really I Can)", "loml", "I Can Do It with a Broken Heart", "The Smallest Man Who Ever Lived", "The Alchemy", "Clara Bow");
completeTracklists.ttpd.expanded.push("The Black Dog", "imgonnagetyouback", "The Albatross", "Chloe or Sam or Sophia or Marcus", "How Did It End?");
completeTracklists.ttpd.expanded.push("So High School", "I Hate It Here", "thanK you aIMee", "I Look in People's Windows", "The Prophecy", "Cassandra");
completeTracklists.ttpd.expanded.push("Peter", "The Bolter", "Robin", "The Manuscript");
completeTracklists.showgirl = { core: ["The Fate of Ophelia", "Elizabeth Taylor", "Opalite", "Father Figure", "Eldest Daughter", "Ruin the Friendship"], expanded: [] };
completeTracklists.showgirl.core.push("Actually Romantic", "Wi$h Li$t", "Wood", "CANCELLED!", "Honey", "The Life of a Showgirl");

const neteaseTrackIds = {
  "taylor-swift": [2002411, 2002416, 2002422, 2002426, 2002431, 2002436, 2002442, 2002445, 2002449, 2002452, 2002455, 2002459, 2002464, 2002469],
  fearless: [1832431765, 1832419318, 1819857342, 1832431769, 1832428071, 1832431773, 1832431780, 1832431782, 1832428075, 1832428078, 1832428089, 1832428096, 1832428099, 1832431810, 1832431813, 1832431815, 1832428107, 1832431828, 1832431829, 1832428122, 1832581492, 1832428129, 1832431862, 1832428134, 1832431870, 1832431882],
  "speak-now": [2059790268, 2059790297, 2059790317, 2059793928, 2059793938, 2059790508, 2059793961, 2059790519, 2059790521, 2059790524, 2059790531, 2059790533, 2059790558, 2059790562, 2059790563, 2059790567, 2059790576, 2059794021, 2059790586, 2059790595, 2059790597, 2059790598],
  red: [1891454307, 1891454308, 1891454314, 1891454316, 1891454317, 1891454320, 1891456099, 1891456102, 1891454326, 1891454328, 1891456109, 1891454332, 1891454347, 1891456123, 1891454351, 1891454353, 1891456126, 1891454354, 1891454356, 1891454357, 1891454371, 1891456136, 1891456138, 1891454375, 1891456141, 1891454393, 1891454385, 1891456145, 1891454388, 1891456146],
  "1989": [2094488206, 2094488214, 2094490746, 2094488215, 2094488207, 2094488216, 2094488208, 2094490749, 2094490747, 2094488217, 2094488209, 2094490750, 2094488210, 2094490751, 2094488211, 2094488218, 2094490748, 2094490752, 2094488212, 2092285325, 2094488213, 2094488219],
  reputation: [503207093, 516823324, 516827355, 516823325, 516818336, 501133611, 516827356, 514235010, 516818337, 516818338, 516823326, 516827357, 516819321, 516776413, 516823327],
  lover: [1382572453, 1382576173, 1382778514, 1382781100, 1382778829, 1382781397, 1382781399, 1382781417, 1382778878, 1382781434, 1382781444, 1382781478, 1382781502, 1382778973, 1382781546, 1382781549, 1382790037, 1382781566],
  folklore: [1465111714, 1465114419, 1465114457, 1465114465, 1465114469, 1465111904, 1465114488, 1465111917, 1465114509, 1465114515, 1465114561, 1465111966, 1465114564, 1465111971, 1465111983, 1465111994, 1471998613],
  evermore: [1803546869, 1803546393, 1803546394, 1803546395, 1803546870, 1803546871, 1803546872, 1803546873, 1803546396, 1803546874, 1803546397, 1803546875, 1803546398, 1803546399, 1803546400, 1810009762, 1810009779],
  midnights: [1990192689, 1990192692, 1990192694, 1990192705, 1990191997, 1990192000, 1990192006, 1990192720, 1990192722, 1990192724, 1990192725, 1990192728, 1990192019, 1991240680, 1991239979, 1991240681, 1991239980, 1991240682, 1991239981, 1991239982, 2050561748, 2050561749, 2050560270],
  ttpd: [2147408164, 2147408165, 2147407554, 2147408166, 2147408167, 2147408168, 2147408169, 2147407555, 2147408170, 2147407556, 2147407557, 2147408171, 2147407558, 2147407559, 2147408172, 2147407560, 2147407561, 2147408173, 2147407562, 2147407563, 2147408174, 2147407564, 2147408175, 2147408176, 2147408177, 2147408178, 2147408179, 2147407565, 2147407566, 2147408180, 2147407567],
  showgirl: [2744403174, 2744399122, 2744403189, 2744399145, 2744399152, 2744403230, 2744404187, 2744403405, 2744404374, 2744403423, 2744404393, 2744403471]
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTrackPosition(album, title) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  const rows = [...list.core, ...list.expanded];
  return rows.findIndex((track) => track.toLowerCase() === title.toLowerCase());
}

function getNeteaseId(album, title) {
  const position = getTrackPosition(album, title);
  return position >= 0 ? neteaseTrackIds[album.id]?.[position] : null;
}

function neteaseSongUrl(album, title) {
  const id = getNeteaseId(album, title);
  if (id) return `https://music.163.com/#/song?id=${id}`;
  return `https://music.163.com/#/search/m/?s=${encodeURIComponent(`Taylor Swift ${title}`)}&type=1`;
}

function renderNeteasePlay(album, title, variant = "inline") {
  const id = getNeteaseId(album, title);
  const label = id ? "Listen ↗" : "Find on NetEase ↗";
  return `
    <a class="netease-play netease-play--${variant}" href="${neteaseSongUrl(album, title)}" target="_blank" rel="noreferrer" aria-label="Listen on NetEase: ${escapeHtml(title)}">
      <span class="netease-play__icon" aria-hidden="true"></span>
      <span class="netease-play__text">
        <strong>${label}</strong>
      </span>
    </a>
  `;
}

function normalizeLyricTitle(value) {
  return String(value)
    .replace(/\([^)]*Taylor's Version[^)]*\)/gi, "")
    .replace(/\([^)]*From The Vault[^)]*\)/gi, "")
    .replace(/\([^)]*\bfeat(?:uring)?\.?[^)]*\)/gi, "")
    .replace(/\bfeat(?:uring)?\.?\s*/gi, "")
    .replace(/\bft\.?\s*/gi, "")
    .replace(/&/g, "and")
    .replace(/\$/g, "s")
    .replace(/[’‘]/g, "'")
    .replace(/^\.*|\.*$/g, "")
    .replace(/[^a-z0-9]+/gi, "")
    .toLowerCase();
}

function getProvidedLyrics(album, title) {
  const albumLyrics = window.taylorLyrics?.[album.id];
  if (!albumLyrics) return null;
  return albumLyrics[normalizeLyricTitle(title)] || null;
}

function renderLyricReader(detail) {
  const lyricEntry = detail.lyrics;
  if (!lyricEntry) {
    return `
      <div class="lyric-reader lyric-reader--empty" aria-label="Lyrics">
        <p class="lyric-kicker">Lyrics coming soon</p>
        <p class="active">${escapeHtml(detail.title)}</p>
        <p>Explore the liner notes.</p>
      </div>
    `;
  }

  const lines = lyricEntry.lyrics.split("\n");
  return `
    <div class="lyric-reader" aria-label="Lyrics">
      <p class="lyric-kicker">Lyrics</p>
      ${lines
        .map((line) => {
          const trimmed = line.trim();
          if (!trimmed) return `<p class="lyric-blank" aria-hidden="true"></p>`;
          const cue = /^\[[^\]]+\]$/.test(trimmed);
          return `<p class="${cue ? "lyric-cue" : ""}">${escapeHtml(trimmed)}</p>`;
        })
        .join("")}
    </div>
  `;
}

function getSongDetail(album, title) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  const coreIndex = list.core.findIndex((track) => track.toLowerCase() === title.toLowerCase());
  const expandedIndex = list.expanded.findIndex((track) => track.toLowerCase() === title.toLowerCase());
  const analyzedHit = album.hits.find((song) => song.title.toLowerCase() === title.toLowerCase());
  const analyzedDeep = album.deeps.find((song) => song.title.toLowerCase() === title.toLowerCase());
  const analyzed = analyzedHit || analyzedDeep;
  const trackNumber = coreIndex >= 0 ? coreIndex + 1 : list.core.length + expandedIndex + 1;
  const group = coreIndex >= 0 ? "Standard edition" : "Deluxe edition";
  const status = analyzedHit ? "Essential" : analyzedDeep ? "Deep cut" : "Album track";
  const fallbackAnalysis = `A closer reading of this track is still to come. Explore the lyrics alongside the story of ${album.title}.`;
  const fallbackLife = album.context;
  const analysisText = analyzed?.analysis || fallbackAnalysis;
  const lifeText = analyzed ? analyzed.life : fallbackLife;
  return {
    title,
    album,
    trackNumber,
    group,
    status,
    geniusUrl: geniusLyricsUrl(title),
    lyrics: getProvidedLyrics(album, title),
    analysis: analysisText,
    life: lifeText,
    lyricGuide: buildLyricGuide(album, title, trackNumber, analysisText, lifeText),
    insightCards: buildSongInsights(album, title, trackNumber, group, status, analysisText, lifeText)
  };
}

function buildLyricGuide(album, title, trackNumber, analysis, life) {
  return [
    "Original English Lyrics",
    `${title}`,
    `Track ${String(trackNumber).padStart(2, "0")} · ${album.title}`,
    "Open the authorized lyric page.",
    "Read Verse 1.",
    "Then come back for the image map.",
    "Read the chorus.",
    "Notice what repeats, what disappears.",
    "Read the bridge.",
    "Genius keeps the full licensed text."
  ];
}

function splitPoemLines(value) {
  const text = String(value).trim();
  if (!text) return [];
  const punctuationSplit = text
    .split(/(?<=[。！？；;])\s*|(?<=[，、：:])\s*/u)
    .map((line) => line.trim())
    .filter(Boolean);

  return punctuationSplit.flatMap((line) => {
    const chars = Array.from(line);
    if (chars.length <= 24) return [line];
    if (/[a-zA-Z]{3,}/.test(line)) return [line];
    const chunks = [];
    for (let index = 0; index < chars.length; index += 22) {
      chunks.push(chars.slice(index, index + 22).join(""));
    }
    return chunks;
  });
}

function buildSongInsights(album, title, trackNumber, group, status, analysis, life) {
  return [analysis, life].filter(Boolean).map((text) => ({ lines: [text] }));
}

function geniusLyricsUrl(title) {
  const clean = title
    .replace(/\([^)]*\)/g, "")
    .replace(/feat\..*/i, "")
    .replace(/\$/g, "s")
    .replace(/&/g, "and")
    .replace(/\.\.\./g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return `https://genius.com/Taylor-swift-${clean}-lyrics`;
}

function ensureSongModal() {
  let modal = document.querySelector("#songModal");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.id = "songModal";
  modal.className = "song-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="song-modal__backdrop" data-close-song></div>
    <section class="song-modal__card" role="dialog" aria-modal="true" aria-labelledby="songModalTitle">
      <button class="song-modal__close" type="button" data-close-song aria-label="Close song">×</button>
      <div class="song-modal__body"></div>
    </section>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-song-view]");
    if (viewButton) {
      setSongModalView(viewButton.dataset.songView, modal);
      return;
    }
    if (event.target.closest("[data-close-song]")) closeSongModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeSongModal();
  });
  return modal;
}

function setSongModalView(view, modal = document.querySelector("#songModal")) {
  if (!modal) return;
  const nextView = view === "lyrics" ? "lyrics" : "analysis";
  const body = modal.querySelector(".song-modal__body");
  if (!body) return;
  body.classList.toggle("view-lyrics", nextView === "lyrics");
  body.classList.toggle("view-analysis", nextView === "analysis");
  modal.querySelectorAll("[data-song-view]").forEach((button) => {
    const active = button.dataset.songView === nextView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  const targetPane = nextView === "lyrics" ? modal.querySelector(".song-modal__cover") : modal.querySelector(".song-modal__content");
  if (targetPane) targetPane.scrollTop = 0;
}

function openSongModal(title) {
  const album = albums[currentAlbumIndex];
  const detail = getSongDetail(album, title);
  const modal = ensureSongModal();
  modal.style.setProperty("--era", album.color);
  modal.querySelector(".song-modal__body").innerHTML = `
    <div class="song-modal__view-tabs" role="tablist" aria-label="Song view">
      <span>${escapeHtml(detail.title)}</span>
      <div>
        <button class="active" type="button" data-song-view="lyrics" role="tab" aria-selected="true">Lyrics</button>
        <button type="button" data-song-view="analysis" role="tab" aria-selected="false">Notes</button>
      </div>
    </div>
    <div class="song-modal__cover song-pane--lyrics">
      ${renderLyricReader(detail)}
    </div>
    <div class="song-modal__content song-pane--analysis">
      <p class="song-modal__eyebrow">${album.title}</p>
      <h2 id="songModalTitle">${escapeHtml(detail.title)}</h2>
      <section class="netease-panel">
        ${renderNeteasePlay(album, detail.title, "modal")}
      </section>
      <div class="song-insights">
        <p class="song-poem__intro">Liner notes</p>
        ${detail.insightCards
          .map(
            (card, index) => `
              <article class="song-poem__stanza" aria-label="Note ${index + 1}">
                <span>${String(index + 1).padStart(2, "0")}</span>
                ${card.lines.flatMap(splitPoemLines).map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
  setSongModalView("lyrics", modal);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".song-modal__close").focus();
}

function closeSongModal() {
  const modal = document.querySelector("#songModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function bindSongOpeners(scope = document) {
  scope.querySelectorAll(".netease-play").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  scope.querySelectorAll(".song-open-card, .song-open-row").forEach((item) => {
    item.addEventListener("click", () => openSongModal(item.dataset.songTitle));
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSongModal(item.dataset.songTitle);
      }
    });
  });
}

function trackStatus(album, title) {
  const hit = album.hits.some((song) => song.title.toLowerCase() === title.toLowerCase());
  const deep = album.deeps.some((song) => song.title.toLowerCase() === title.toLowerCase());
  return hit ? "Essential" : deep ? "Deep cut" : "Explore";
}

function renderCompleteTracklist(album) {
  const list = completeTracklists[album.id] || { core: [], expanded: [] };
  const rows = [
    ...list.core.map((title, index) => ({ title, index: index + 1, group: "Standard" })),
    ...list.expanded.map((title, index) => ({ title, index: list.core.length + index + 1, group: "Bonus / Vault" }))
  ];
  return `
    <section class="complete-tracklist">
      <div class="tracklist-heading">
        <h3>Tracklist</h3>
        <p>Lyrics, notes and a way to listen.</p>
      </div>
      <div class="tracklist-grid">
        ${rows
          .map(
            (row) => `
          <div class="track-row">
            <button class="track-main song-open-row" type="button" data-song-title="${escapeHtml(row.title)}">
              <span>${String(row.index).padStart(2, "0")}</span>
              <strong>${row.title}</strong>
              <small>${row.group} · ${trackStatus(album, row.title)}</small>
            </button>
            ${renderNeteasePlay(album, row.title, "row")}
          </div>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}

renderSongIndex = function (filter = "all") {
  currentFilter = filter;
  const list = document.querySelector("#songList");
  const album = albums[currentAlbumIndex];
  const heading = document.querySelector("#songIndex .section-heading");
  const tracklist = completeTracklists[album.id] || { core: [], expanded: [] };
  const analyzed = [
    ...album.hits.map((song) => ({ title: song.title, album, kind: "Essentials" })),
    ...album.deeps.map((song) => ({ title: song.title, album, kind: "Deep cuts" }))
  ];
  const full = [
    ...tracklist.core.map((title) => ({ title, album, kind: trackStatus(album, title) })),
    ...tracklist.expanded.map((title) => ({ title, album, kind: `Bonus track · ${trackStatus(album, title)}` }))
  ];
  const rows = filter === "hit" ? analyzed.filter((song) => song.kind === "Essentials") : filter === "deep" ? analyzed.filter((song) => song.kind === "Deep cuts") : full;

  heading.innerHTML = `
    <h2>${album.title} Track index</h2>
  `;
  list.innerHTML = rows
    .map(
      (song) => `
      <div class="song-pill-row" style="--era:${song.album.color}">
        <button class="song-pill song-open-row" type="button" data-song-title="${escapeHtml(song.title)}">
          <strong>${song.title}</strong>
          <small>${song.album.title} · ${song.kind}</small>
        </button>
        ${renderNeteasePlay(song.album, song.title, "pill")}
      </div>
    `
    )
    .join("");
  bindSongOpeners(list);
};
renderRail();
renderAlbums();
initializeHistoryState();
renderSongIndex();
bindFilters();
bindPalette();

function bindMobileDockAutoHide() {
  const mobileQuery = window.matchMedia("(max-width: 720px)");
  let lastY = window.scrollY;
  let ticking = false;

  function updateDock() {
    ticking = false;
    if (!mobileQuery.matches || document.body.classList.contains("modal-open")) {
      document.body.classList.remove("dock-hidden");
      lastY = window.scrollY;
      return;
    }

    const currentY = window.scrollY;
    const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const scrollingDown = currentY > lastY + 10;
    const nearTop = currentY < 220;
    const nearBottom = maxY - currentY < 260;

    document.body.classList.toggle("dock-hidden", scrollingDown && !nearTop && !nearBottom);
    lastY = currentY;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateDock);
      }
    },
    { passive: true }
  );
  mobileQuery.addEventListener?.("change", updateDock);
  updateDock();
}

bindMobileDockAutoHide();

window.addEventListener("popstate", (event) => {
  const state = event.state;
  if (state?.swiftStory) {
    applyRouteState(state);
  } else if (window.location.hash.startsWith("#album-")) {
    selectAlbum(getAlbumIndexFromHash(), { fromHash: true, skipScroll: true, skipHistory: true });
  } else {
    showLanding({ preserveHistory: true });
  }
});

window.addEventListener("hashchange", () => {
  if (window.location.hash.startsWith("#album-")) {
    selectAlbum(getAlbumIndexFromHash(), { fromHash: true, skipHistory: true });
  } else if (!window.location.hash || window.location.hash === "#top") {
    showLanding({ preserveHistory: true });
  }
});

function getTodaySong() {
  const allSongs = albums.flatMap(album => {
    const list = completeTracklists[album.id] || { core: [], expanded: [] };
    return [...list.core, ...list.expanded].map(title => ({ title, album }));
  });
  const daysSinceEpoch = Math.floor(Date.now() / 86400000);
  return allSongs[daysSinceEpoch % allSongs.length];
}

function getReadSongs() {
  try {
    return JSON.parse(localStorage.getItem('taylorSwiftReadSongs') || '[]');
  } catch {
    return [];
  }
}

function markSongAsRead(title) {
  const read = getReadSongs();
  const normalized = title.toLowerCase().trim();
  if (!read.includes(normalized)) {
    read.push(normalized);
    localStorage.setItem('taylorSwiftReadSongs', JSON.stringify(read));
    updateProgressDisplay();
  }
}

function getTotalSongCount() {
  return albums.reduce((sum, album) => {
    const list = completeTracklists[album.id] || { core: [], expanded: [] };
    return sum + list.core.length + list.expanded.length;
  }, 0);
}

function updateProgressDisplay() {
  const btn = document.getElementById('progressBtn');
  if (!btn) return;
  const read = getReadSongs().length;
  const total = getTotalSongCount();
  btn.querySelector('.progress-count').textContent = `${read}/${total}`;
}

function showProgressModal() {
  const read = getReadSongs();
  const allSongs = albums.flatMap(album => {
    const list = completeTracklists[album.id] || { core: [], expanded: [] };
    return [...list.core, ...list.expanded].map(title => ({
      title,
      album,
      isRead: read.includes(title.toLowerCase().trim())
    }));
  });

  const modal = document.createElement('div');
  modal.className = 'progress-modal';
  modal.innerHTML = `
    <div class="progress-modal__backdrop"></div>
    <div class="progress-modal__card">
      <button class="progress-modal__close" type="button" aria-label="Close">×</button>
      <h2>Your listening journey</h2>
      <p class="progress-stats">${read.length} / ${allSongs.length} tracks explored</p>
      <div class="progress-list">
        ${allSongs.map(song => `
          <div class="progress-item ${song.isRead ? 'read' : ''}">
            <span class="progress-check">${song.isRead ? '✓' : ''}</span>
            <button class="progress-song" type="button" data-song-title="${escapeHtml(song.title)}">
              <strong>${escapeHtml(song.title)}</strong>
              <small>${song.album.title}</small>
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add('modal-open');

  modal.querySelector('.progress-modal__backdrop').addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.classList.remove('modal-open');
  });

  modal.querySelector('.progress-modal__close').addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.classList.remove('modal-open');
  });

  modal.querySelectorAll('[data-song-title]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.songTitle;
      const song = allSongs.find(s => s.title === title);
      if (song) {
        const albumIndex = albums.findIndex(a => a.id === song.album.id);
        if (albumIndex >= 0) {
          currentAlbumIndex = albumIndex;
          document.body.removeChild(modal);
          document.body.classList.remove('modal-open');
          openSongModal(title);
        }
      }
    });
  });
}

const originalOpenSongModal = openSongModal;
openSongModal = function(title) {
  markSongAsRead(title);
  originalOpenSongModal(title);
};

document.addEventListener('DOMContentLoaded', () => {
  updateProgressDisplay();

  const progressBtn = document.getElementById('progressBtn');
  if (progressBtn) {
    progressBtn.addEventListener('click', showProgressModal);
  }

  const todayBtn = document.getElementById('todaySongBtn');
  if (todayBtn) {
    const todaySong = getTodaySong();
    todayBtn.addEventListener('click', () => {
      if (document.body.classList.contains("landing-mode")) {
        selectAlbum(0);
        return;
      }
      const albumIndex = albums.findIndex(a => a.id === todaySong.album.id);
      if (albumIndex >= 0) {
        currentAlbumIndex = albumIndex;
        openSongModal(todaySong.title);
      }
    });
  }
});

// Masthead links work from both the archive and individual eras.
document.querySelectorAll("[data-site-home], [data-site-explore], [data-site-daily]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = link.hasAttribute("data-site-explore") ? "#albumCollection" : link.hasAttribute("data-site-daily") ? "#swiftieClub" : "#top";
    showLanding({ pushHistory: document.body.classList.contains("album-mode") });
    requestAnimationFrame(() => document.querySelector(target)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));
  });
});

// Keep keyboard navigation inside whichever reading panel is open.
document.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  const dialog = [...document.querySelectorAll('[role="dialog"]')].find((element) => element.getClientRects().length);
  if (!dialog) return;
  const controls = [...dialog.querySelectorAll('button, a[href], textarea, input, [tabindex="0"]')].filter((element) => element.getClientRects().length && !element.disabled);
  const first = controls[0], last = controls[controls.length - 1];
  if (!first) return;
  if (!dialog.contains(document.activeElement) || (!event.shiftKey && document.activeElement === last)) {
    event.preventDefault(); first.focus();
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault(); last.focus();
  }
});
