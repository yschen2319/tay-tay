(function () {
  "use strict";

  const wheel = document.querySelector(".era-wheel");
  const holder = document.querySelector("#eraBeads");
  const title = document.querySelector("#eraTitle");
  const year = document.querySelector("#eraYear");
  const enter = document.querySelector("#eraEnter");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let selected = albums.findIndex(album => album.id === "lover");
  let pointerType = "";
  let captionAnimation;

  // Leave the top of the bracelet open for its charm, as in the selected design.
  const angles = [-115, -143, -65, -37, -9, 19, 47, 75, 103, 131, 159, 187];
  const buttons = albums.map((album, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "era-node";
    button.dataset.era = album.id;
    button.setAttribute("aria-label", `${album.title} · ${album.year}`);
    button.setAttribute("aria-pressed", "false");
    button.style.setProperty("--sprite-x", `${(index % 4) * 100 / 3}%`);
    button.style.setProperty("--sprite-y", `${Math.floor(index / 4) * 50}%`);
    button.style.setProperty("--bead-color", album.color);
    button.innerHTML = `<span class="era-gem"><span class="era-texture"></span><img class="era-photo" src="${albumCovers[album.id]}" alt="" decoding="async" ${index === selected ? 'fetchpriority="high"' : 'loading="lazy"'} /></span>`;
    button.querySelector("img").addEventListener("load", () => button.classList.add("cover-ready"));
    if (button.querySelector("img").complete && button.querySelector("img").naturalWidth) button.classList.add("cover-ready");
    button.addEventListener("pointerdown", event => { pointerType = event.pointerType; });
    button.addEventListener("pointerenter", event => {
      if (event.pointerType === "mouse") preview(index);
    });
    button.addEventListener("focus", () => {
      if (button.matches(":focus-visible")) preview(index);
    });
    button.addEventListener("click", event => {
      if (event.detail === 0 || pointerType === "mouse" || selected === index) selectAlbum(index);
      else preview(index);
    });
    button.addEventListener("keydown", event => {
      let next;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % albums.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + albums.length - 1) % albums.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = albums.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        buttons[next].focus({ preventScroll: true });
        preview(next);
      }
    });
    holder.appendChild(button);
    return button;
  });

  function preview(index) {
    const changed = selected !== index;
    selected = index;
    const album = albums[index];
    buttons.forEach((button, beadIndex) => {
      const distance = ((angles[beadIndex] - angles[index] + 540) % 360) - 180;
      const offset = beadIndex === index ? 0 : Math.sign(distance) * Math.max(0, 1 - Math.abs(distance) / 70) * 13;
      const angle = (angles[beadIndex] + offset) * Math.PI / 180;
      const radius = beadIndex === index ? 38.3 - Math.abs(Math.cos(angle)) * 4.5 : 38.3;
      button.style.setProperty("--bead-x", (Math.cos(angle) * radius).toFixed(3));
      button.style.setProperty("--bead-y", (Math.sin(angle) * radius - .6).toFixed(3));
      button.classList.toggle("is-selected", beadIndex === index);
      button.setAttribute("aria-pressed", String(beadIndex === index));
    });
    title.textContent = album.title;
    year.textContent = album.year;
    enter.href = `#album-${album.id}`;
    enter.setAttribute("aria-label", `进入 ${album.title}`);
    wheel.dataset.selected = album.id;
    if (changed && !reducedMotion.matches) {
      captionAnimation?.cancel();
      captionAnimation = title.parentElement.animate([
        { opacity: .35, transform: "translateY(5px)" },
        { opacity: 1, transform: "translateY(0)" }
      ], { duration: 260, easing: "cubic-bezier(.2,.7,.2,1)" });
    }
  }

  enter.addEventListener("click", event => {
    event.preventDefault();
    selectAlbum(selected);
  });
  document.querySelectorAll("a[data-site-tab]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const tab = link.dataset.siteTab;
      const changed = document.body.classList.contains("album-mode") || document.body.dataset.siteTab !== tab;
      showLanding({ tab, pushHistory: changed });
    });
  });
  document.querySelectorAll("[data-personal]").forEach(button => {
    button.addEventListener("click", () => window.SwiftieCompanion?.[button.dataset.personal]());
  });
  preview(selected);
})();
