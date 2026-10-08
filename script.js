/* =====================================================
   ✏️  EDITA AQUÍ: nombres, canción, fotos/videos y textos
   (cualquier foto .jpg .jpeg .png .webp o video .mp4; el nombre debe coincidir EXACTO)
   ===================================================== */
const CONFIG = {
  nombres: "Johan & Tiffany",
  cancion: "assets/music/cancion.mp3",
  portada: "assets/images/portada.jfif",

  // citas: [
  //   { e: "🍔", corto: "Comer juntos",   largo: "Comer juntos" },
  //   { e: "🎬", corto: "Cine",           largo: "Ir al cine" },
  //   { e: "🍦", corto: "Helado",         largo: "Comer un helado" },
  //   { e: "🚗", corto: "Car show",       largo: "Car show / exposición de carros" },
  //   { e: "🧺", corto: "Picnic",         largo: "Picnic" },
  //   { e: "👩‍🍳", corto: "Cocinar",        largo: "Cocinar juntos" },
  //   { e: "🎵", corto: "Concierto",      largo: "Ir a un concierto" },
  //   { e: "🎄", corto: "Cena navideña",  largo: "Cena navideña juntos" },
  // ],

  // timeline: [
  //   { titulo: "📍 2025 — Cuando todo comenzó", texto: "Aquí comenzó todo...",
  //     fotos: ["assets/images/foto1.jpg"] },
  //   { titulo: "💬 Nuestro primer momento", texto: "Y poco a poco comenzamos a conocernos... (cuenta aquí un recuerdo)",
  //     fotos: ["assets/images/foto2.jpg"] },
  //   { titulo: "❤️ Nuestro primer recuerdo juntos", texto: "Hasta que comenzamos a crear nuestros propios recuerdos.",
  //     fotos: ["assets/images/foto3.jpg"] },
  //   { titulo: "📸 Momentos que hemos compartido", texto: "Paseos, risas y días que no se nos olvidan.",
  //     fotos: ["assets/images/foto4.jpg", "assets/images/foto5.jpg"] },
  //   { titulo: "🥰 Y seguimos creando recuerdos...", texto: "Y lo mejor es que todavía hay más.",
  //     fotos: ["assets/images/foto6.mp4"] },
  // ],
    citas: [
    { e: "🍔", corto: "Comer juntos",   largo: "Comer juntos" },
    { e: "🎬", corto: "Cine",           largo: "Ir al cine" },
    { e: "🍦", corto: "Helado",         largo: "Comer un helado" },
    { e: "🎮", corto: "PlayZone",       largo: "A jugar juntos Si!" },
  ],

  timeline: [
    { titulo: "📍 2025 — Cuando todo comenzó", texto: "Aquí comenzó todo...",
      fotos: ["assets/images/foto1.jpeg"] },
    { titulo: "💬 Nuestro primer momento", texto: "Y poco a poco comenzamos a conocernos... Eres persona responsable y que se esfuerza en todo lo que se propone  - Sabe como llegar a mi corazón para calmarme - Se preocupa de detalles menores sobre mí - Posee virtudes como sinceridad , amorosa y amable",
      fotos: ["assets/images/foto2.jpeg"] },
    { titulo: "❤️ Nuestro primer recuerdo juntos", texto: "Hasta que comenzamos a crear nuestros propios recuerdos.",
      fotos: ["assets/images/foto3.jpeg"] },
    { titulo: "📸 Momentos que hemos compartido", texto: "Paseos, risas y días que no se nos olvidan.",
      fotos: ["assets/images/foto4.jpeg", "assets/images/foto5.jpeg"] },
    { titulo: "🥰 Y seguimos creando recuerdos...", texto: "Y lo mejor es que todavía hay más.",
      fotos: ["assets/images/foto6.mp4"] },
  ],

  fraseInicial: "❤️ Y sin darnos cuenta comenzamos a crear nuestra historia.",

  ositos: { foto: "assets/images/ositos.jpeg", texto: "💕 Platicando desde el 2025" },

  /* Mezcla fotos y frases como quieras: {foto, pie} o {frase} */
  galeria: [
    { foto: "assets/images/galeria1.jpeg", pie: "Compartiendo juntos" },
    { foto: "assets/images/galeria2.jpeg", pie: "Nuestro primer paseo" },
    { frase: "🥰 Cada momento contigo se convirtió en un recuerdo." },
    { foto: "assets/images/galeria3.jpeg", pie: "Regalo 1" },
    { foto: "assets/images/galeria4.jpeg", pie: "Regalo 2" },
    { foto: "assets/images/galeria5.jpeg", pie: "Regalo 3" },
    { frase: "💕 Y todavía nos quedan muchas historias por escribir." },
    { foto: "assets/images/galeria6.jpeg", pie: "Celebraciones" },
    { foto: "assets/images/galeria7.jpeg", pie: "Fotos espontáneas" },
    { foto: "assets/images/galeria8.jpeg", pie: "Momentos especiales" },
  ],

  final: {
    titulo: "Nuestra historia apenas comienza...",
    texto: "El día 5 de octubre del 2026 , tuve el agrado de avanzar en “nosotros”.  Compartiendo un momento grandioso contigo, que me hizo sobrellevar el resto de mi semana ♥️.",
    foto: "assets/images/final.jpeg",
    boton: "💕 Continuemos escribiendo nuestra historia",
  },

  burlas: ["😈 No puedes escapar.", "Ese botón no coopera...", "Mejor di que sí 😏", "Ya te dije: no hay salida.", "Cada vez es más fácil darle al Sí 💕", "Resígnate, amor 😈"],
};

/* =====================================================
   Código (no necesitas tocar nada de aquí hacia abajo)
   ===================================================== */
const $ = (s) => document.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Corazones suaves de fondo */
for (let i = 0; i < 10; i++) {
  const h = document.createElement("span");
  h.className = "fh"; h.textContent = i % 3 ? "💗" : "💕";
  h.style.cssText = `left:${Math.random() * 96}%;font-size:${14 + Math.random() * 16}px;animation-duration:${14 + Math.random() * 14}s;animation-delay:${-Math.random() * 20}s`;
  document.body.appendChild(h);
}

/* ---------- RULETA ---------- */
const canvas = $("#wheel"), ctx = canvas.getContext("2d");
const N = CONFIG.citas.length, SEG = 360 / N;
const COLORS = ["#fbc9d6", "#e3d6f5", "#f4a6bd", "#cdbbea"];
const dpr = window.devicePixelRatio || 1;
canvas.width = canvas.height = 340 * dpr;
ctx.scale(dpr, dpr);

function drawWheel() {
  const c = 170, r = 166;
  CONFIG.citas.forEach((cita, i) => {
    const a0 = (i * SEG - 90) * Math.PI / 180, a1 = ((i + 1) * SEG - 90) * Math.PI / 180;
    ctx.beginPath(); ctx.moveTo(c, c); ctx.arc(c, c, r, a0, a1); ctx.closePath();
    ctx.fillStyle = COLORS[i % COLORS.length]; ctx.fill();
    ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();
    ctx.save();
    ctx.translate(c, c); ctx.rotate((a0 + a1) / 2);
    ctx.textAlign = "right"; ctx.textBaseline = "middle"; ctx.fillStyle = "#3b1d2e";
    ctx.font = "600 12px Figtree, sans-serif"; ctx.fillText(cita.corto, r - 38, 0);
    ctx.font = "22px sans-serif"; ctx.fillText(cita.e, r - 8, 0);
    ctx.restore();
  });
}
drawWheel();

let rot = 0, spinning = false, chosen = null;
$("#spin").addEventListener("click", () => {
  if (spinning) return;
  spinning = true; $("#spin").disabled = true;
  $("#result").hidden = true; $("#confirm").hidden = true;
  const k = Math.floor(Math.random() * N);
  const jitter = (Math.random() - 0.5) * SEG * 0.7;
  const wanted = ((360 - (k + 0.5) * SEG + jitter) % 360 + 360) % 360;
  rot += 360 * 6 + ((wanted - (rot % 360)) % 360 + 360) % 360;
  canvas.style.transform = `rotate(${rot}deg)`;
  setTimeout(() => {
    chosen = CONFIG.citas[k]; spinning = false; $("#spin").disabled = false;
    $("#result-text").textContent = `${chosen.e} ${chosen.largo}`;
    $("#result").hidden = false; $("#confirm").hidden = false;
    $("#result").style.animation = "none"; void $("#result").offsetWidth; $("#result").style.animation = "";
    $("#confirm").scrollIntoView({ behavior: "smooth", block: "center" });
  }, reduce ? 100 : 5300);
});

/* ---------- BOTÓN "NO" QUE ESCAPA ---------- */
const yes = $("#yes"), no = $("#no"), row = $(".confirm-row");
let tries = 0, last = { x: -999, y: -999 };

function maxScale() { return Math.min(3.2, (innerWidth - 40) / yes.offsetWidth); }
function dodge(e) {
  e.preventDefault();
  const pad = 12, w = no.offsetWidth, h = no.offsetHeight;
  if (!no.classList.contains("run")) {
    const b = no.getBoundingClientRect();
    no.style.width = w + "px";
    no.classList.add("run"); no.style.left = b.left + "px"; no.style.top = b.top + "px";
    void no.offsetWidth;
  }
  const yb = yes.getBoundingClientRect(), rb = $("#result").getBoundingClientRect();
  let x, y, ok = false, n = 0;
  while (!ok && n++ < 40) {
    x = pad + Math.random() * (innerWidth - w - pad * 2);
    y = pad + Math.random() * (innerHeight - h - pad * 2);
    const far = Math.hypot(x - last.x, y - last.y) > 140;
    const hitYes = x < yb.right + 10 && x + w > yb.left - 10 && y < yb.bottom + 10 && y + h > yb.top - 10;
    const hitRes = x < rb.right && x + w > rb.left && y < rb.bottom && y + h > rb.top;
    ok = far && !hitYes && !hitRes;
  }
  last = { x, y };
  no.style.left = x + "px"; no.style.top = y + "px";
  tries++;
  const s = Math.min(1 + tries * 0.4, maxScale());
  yes.style.transform = `scale(${s})`;
  row.style.padding = `${((s - 1) * yes.offsetHeight) / 2 + 4}px 0`;
  if (tries >= 6) yes.textContent = "❤️ ¡SÍ, VAMOS!";
  $("#taunt").textContent = CONFIG.burlas[(tries - 1) % CONFIG.burlas.length];
}
no.addEventListener("pointerenter", (e) => e.pointerType === "mouse" && dodge(e));
no.addEventListener("pointerdown", dodge);
no.addEventListener("click", (e) => e.preventDefault());
no.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") dodge(e); });

/* ---------- MÚSICA ---------- */
const bgm = $("#bgm"); bgm.src = CONFIG.cancion; bgm.volume = 0.3;
const playBtn = $("#play"), muteBtn = $("#mute");
const sync = () => { playBtn.textContent = bgm.paused ? "▶️" : "⏸️"; muteBtn.textContent = bgm.muted ? "🔇" : "🔊"; };
playBtn.onclick = () => { bgm.paused ? bgm.play().catch(() => {}) : bgm.pause(); };
muteBtn.onclick = () => { bgm.muted = !bgm.muted; sync(); };
bgm.addEventListener("play", sync); bgm.addEventListener("pause", sync);

/* ---------- COMPONENTES ---------- */
const lb = $("#lightbox"), lbImg = lb.querySelector("img"), lbVid = lb.querySelector("video");
let resumeMusic = false;
function openLB(src, vid) {
  lbImg.hidden = vid; lbVid.hidden = !vid;
  if (vid) { lbVid.src = src; lbVid.play().catch(() => {}); resumeMusic = !bgm.paused; bgm.pause(); }
  else lbImg.src = src;
  lb.hidden = false;
}
function closeLB() {
  lb.hidden = true; lbVid.pause(); lbVid.removeAttribute("src");
  if (resumeMusic) { bgm.play().catch(() => {}); resumeMusic = false; }
}
lb.onclick = closeLB; lbVid.onclick = (e) => e.stopPropagation();
document.addEventListener("keydown", (e) => e.key === "Escape" && !lb.hidden && closeLB());

/* Acepta fotos (jpg, jpeg, png, webp...) y videos (mp4, webm, mov) */
function polaroid(src, pie, tilt, big) {
  const isVid = /\.(mp4|webm|mov|m4v)$/i.test(src);
  const f = document.createElement("figure");
  f.className = "polaroid reveal" + (big ? " big" : "");
  f.style.setProperty("--r", tilt + "deg");
  let media;
  if (isVid) {
    media = document.createElement("video");
    media.src = src; media.muted = true; media.loop = true; media.autoplay = true;
    media.playsInline = true; media.setAttribute("playsinline", ""); media.preload = "metadata";
  } else {
    media = new Image(); media.src = src; media.alt = pie || ""; media.loading = "lazy";
  }
  media.onerror = () => {
    const ph = document.createElement("div"); ph.className = "ph";
    ph.innerHTML = `<b>💗</b>Pon tu ${isVid ? "video" : "foto"} en<br>${src.replace("assets/images/", "")}`;
    media.replaceWith(ph); f.style.cursor = "default"; f.onclick = null;
  };
  f.appendChild(media);
  if (isVid) { const b = document.createElement("span"); b.className = "badge"; b.textContent = "▶"; f.appendChild(b); }
  if (pie) { const c = document.createElement("figcaption"); c.textContent = pie; f.appendChild(c); }
  f.onclick = () => openLB(src, isVid);
  return f;
}

const note = (txt, tilt, solo) => {
  const n = document.createElement("div");
  n.className = "note reveal" + (solo ? " solo" : "");
  n.style.setProperty("--r", tilt + "deg"); n.textContent = txt; return n;
};
const TILTS = [-4, 3, 0, -2, 4, -3, 1, 2.5];

function build() {
  $("#names").textContent = CONFIG.nombres;
  $("#cover").appendChild(polaroid(CONFIG.portada, "", -3, true));

  const tl = $("#timeline");
  CONFIG.timeline.forEach((t, i) => {
    const item = document.createElement("article");
    item.className = "tl-item reveal";
    item.style.setProperty("--x", i % 2 ? "40px" : "-40px"); item.style.setProperty("--y", "0px");
    item.innerHTML = `<h3></h3><p></p><div class="tl-photos"></div>`;
    item.querySelector("h3").textContent = t.titulo;
    item.querySelector("p").textContent = t.texto;
    t.fotos.forEach((s, j) => item.querySelector(".tl-photos").appendChild(polaroid(s, "", TILTS[(i + j * 3) % 8])));
    tl.appendChild(item);
  });
  tl.appendChild(note(CONFIG.fraseInicial, 0, true));

  const os = $("#ositos");
  os.append(polaroid(CONFIG.ositos.foto, "", 3, true));
  const tag = document.createElement("p"); tag.className = "tag reveal"; tag.textContent = CONFIG.ositos.texto; os.append(tag);

  const g = $("#gallery");
  CONFIG.galeria.forEach((it, i) => g.appendChild(it.frase ? note(it.frase, TILTS[i % 8] / 2) : polaroid(it.foto, it.pie, TILTS[i % 8])));

  const F = CONFIG.final, fin = $("#finale");
  fin.innerHTML = `<h2 class="script big reveal"></h2><p class="script reveal" style="font-size:clamp(1.8rem,6vw,2.6rem)"></p><blockquote class="reveal"></blockquote><p class="tag reveal">${CONFIG.ositos.texto.replace("💕", "🥰")}</p>`;
  fin.querySelector("h2").textContent = CONFIG.nombres;
  fin.querySelector("p.script").textContent = F.titulo;
  fin.querySelector("blockquote").textContent = `“${F.texto}”`;
  fin.appendChild(polaroid(F.foto, "", -2, true));
  const b = document.createElement("button"); b.className = "btn end reveal"; b.textContent = F.boton;
  b.onclick = (e) => hearts(e.currentTarget); fin.appendChild(b);

  const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el, i) => {
    if (!el.style.getPropertyValue("--x") && !el.classList.contains("polaroid") && !el.classList.contains("note")) el.style.setProperty("--y", "28px");
    io.observe(el);
  });
}

function hearts(btn) {
  const r = btn.getBoundingClientRect(), E = ["💕", "❤️", "💖", "✨", "⭐", "🥰"];
  for (let i = 0; i < 36; i++) {
    const s = document.createElement("span"); s.className = "burst"; s.textContent = E[i % E.length];
    s.style.left = r.left + r.width / 2 + "px"; s.style.top = r.top + r.height / 2 + "px";
    document.body.appendChild(s);
    const a = Math.random() * Math.PI * 2, d = 90 + Math.random() * 190;
    s.animate([{ transform: "translate(0,0) scale(.4)", opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d - 60}px) scale(1.3)`, opacity: 0 }],
      { duration: 1400 + Math.random() * 800, easing: "cubic-bezier(.2,.8,.3,1)" }).onfinish = () => s.remove();
  }
}

/* Línea de tiempo que avanza al hacer scroll */
const line = document.querySelector(".tl-line i");
function progress() {
  const tl = $("#timeline").getBoundingClientRect();
  const p = (innerHeight * 0.6 - tl.top) / tl.height;
  line.style.setProperty("--p", Math.max(0, Math.min(1, p)) * 100 + "%");
}
addEventListener("scroll", () => requestAnimationFrame(progress), { passive: true });

/* ---------- "SÍ" → empieza la canción y la historia ---------- */
yes.addEventListener("click", () => {
  bgm.play().catch(() => {});      // el clic permite reproducir audio
  sync(); $("#player").hidden = false;
  build();
  $("#wheel-screen").classList.add("leave");
  setTimeout(() => {
    $("#wheel-screen").hidden = true; no.classList.remove("run");
    $("#story").hidden = false; window.scrollTo({ top: 0, behavior: "instant" });
    document.querySelectorAll(".fh").forEach((h) => (h.style.opacity = ".14"));
    progress();
  }, reduce ? 50 : 900);
});
