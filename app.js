let currentView = 'hero';
let currentProject = null;

// --- Language ---
function setLang(l) {
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  localStorage.setItem('lang', l);
  location.reload();
}

// --- Hero Canvas Animation ---
const heroCanvas = document.getElementById('hero-canvas');
const hctx = heroCanvas.getContext('2d');
let heroAnimId = null;

if (HERO_VIDEO_SRC) {
  const heroVideo = document.getElementById('hero-video');
  heroVideo.src = HERO_VIDEO_SRC;
  heroVideo.style.display = 'block';
  heroCanvas.style.display = 'none';
  heroVideo.play();
} else {
  heroAnimId = requestAnimationFrame(drawHeroFrame);
}

function resizeHeroCanvas() {
  const rect = heroCanvas.parentElement.getBoundingClientRect();
  heroCanvas.width = rect.width;
  heroCanvas.height = rect.height;
}
resizeHeroCanvas();
window.addEventListener('resize', resizeHeroCanvas);

function drawHeroFrame(t) {
  const w = heroCanvas.width, h = heroCanvas.height;
  const ctx = hctx;
  const grad = ctx.createLinearGradient(0,0,w,0);
  const hue1 = (t * 0.02) % 360;
  const hue2 = (hue1 + 120) % 360;
  const hue3 = (hue2 + 120) % 360;
  grad.addColorStop(0, `hsl(${hue1},100%,50%)`);
  grad.addColorStop(0.5, `hsl(${hue2},100%,50%)`);
  grad.addColorStop(1, `hsl(${hue3},100%,50%)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,w,h);

  for (let i = 0; i < 12; i++) {
    const x = (Math.sin(t*0.0005 + i*1.7) * 0.5 + 0.5) * w;
    const y = (Math.cos(t*0.0007 + i*2.3) * 0.5 + 0.5) * h;
    const r = 30 + Math.sin(t*0.001 + i) * 20 + 20;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.strokeStyle = `rgba(255,255,255,${0.1 + Math.sin(t*0.0008 + i)*0.05 + 0.05})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  heroAnimId = requestAnimationFrame(drawHeroFrame);
}
heroAnimId = requestAnimationFrame(drawHeroFrame);

// --- Canvas Video Maker ---
function createCanvasVideo(container, color, w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  canvas.style.width = w + 'px'; canvas.style.height = h + 'px';

  const controls = document.createElement('div');
  controls.className = 'gallery-video-controls';
  const playBtn = document.createElement('button');
  playBtn.textContent = '⏸';
  const volSlider = document.createElement('input');
  volSlider.type = 'range'; volSlider.min = 0; volSlider.max = 100; volSlider.value = 100;
  controls.appendChild(playBtn);
  controls.appendChild(volSlider);

  const wrap = document.createElement('div');
  wrap.className = 'gallery-video-wrap';
  wrap.appendChild(canvas);
  wrap.appendChild(controls);

  let playing = true;
  let vol = 1;
  let animId = null;
  const ctx = canvas.getContext('2d');
  const start = performance.now();

  function parseColor(c) {
    return [parseInt(c.slice(1,3),16), parseInt(c.slice(3,5),16), parseInt(c.slice(5,7),16)];
  }
  const [r,g,b] = parseColor(color || '#FF0000');

  function drawVideoFrame(t) {
    const elapsed = (t - start) / 1000;
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(0,0,w,h);
    const bands = 6;
    for (let i = 0; i < bands; i++) {
      const yOff = ((elapsed * 40 + i * (h/bands)) % (h + 40)) - 20;
      ctx.fillStyle = `rgba(${255-r},${255-g},${255-b},${0.15 * vol})`;
      ctx.fillRect(0, yOff, w, h/bands - 2);
    }
    for (let i = 0; i < 5; i++) {
      const cx = (Math.sin(elapsed * 0.5 + i * 1.3) * 0.4 + 0.5) * w;
      const cy = (Math.cos(elapsed * 0.7 + i * 2.1) * 0.4 + 0.5) * h;
      const rad = 15 + Math.sin(elapsed + i) * 10 + 10;
      ctx.beginPath();
      ctx.arc(cx, cy, rad, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${Math.min(255,r+80)},${Math.min(255,g+80)},${Math.min(255,b+80)},${0.3 * vol})`;
      ctx.fill();
    }
    if (playing) animId = requestAnimationFrame(drawVideoFrame);
  }
  animId = requestAnimationFrame(drawVideoFrame);

  playBtn.onclick = function(e) {
    e.stopPropagation();
    playing = !playing;
    playBtn.textContent = playing ? '⏸' : '▶';
    if (playing) animId = requestAnimationFrame(drawVideoFrame);
  };
  volSlider.oninput = function() { vol = this.value / 100; };
  return wrap;
}

// --- Floating Thumb ---
const floatingThumb = document.getElementById('floating-thumb');
function posThumb(e) {
  const x = Math.max(10, e.clientX - 238);
  const y = Math.min(e.clientY + 18, window.innerHeight - 140);
  floatingThumb.style.left = x + 'px';
  floatingThumb.style.top = y + 'px';
}

function showFloatingThumb(project, clientX, clientY) {
  floatingThumb.innerHTML = '';
  const firstVideo = project.gallery.find(g => g.type === 'video');
  const firstImg = project.gallery.find(g => g.type === 'image');
  if (firstVideo && firstVideo.src) {
    const video = document.createElement('video');
    video.src = firstVideo.src;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');
    video.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block';
    floatingThumb.style.background = '';
    floatingThumb.appendChild(video);
    video.play().catch(() => {});
  } else if (firstImg && firstImg.src) {
    const img = document.createElement('img');
    img.src = firstImg.src;
    img.alt = '';
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block';
    floatingThumb.style.background = '';
    floatingThumb.appendChild(img);
  } else {
    const grad = 'linear-gradient(135deg, ' + project.gradient[0] + ', ' + project.gradient[1] + ')';
    floatingThumb.style.background = grad;
  }
  const x = Math.max(10, clientX - 238);
  const y = Math.min(clientY + 18, window.innerHeight - 140);
  floatingThumb.style.left = x + 'px';
  floatingThumb.style.top = y + 'px';
  floatingThumb.classList.add('visible');
}

// --- Render Projects Menu ---
const HOVER_COLORS = [
  { bg: '#FF00FF', text: '#fff' },
  { bg: '#FFA500', text: '#fff' },
  { bg: '#0000FF', text: '#fff' },
  { bg: '#FFFF00', text: '#000' },
  { bg: '#00FF00', text: '#000' },
];
const BORDER_COLORS = ['#FF00FF','#FFA500','#0000FF','#FFFF00','#00FF00','#FF0000'];
const SCROLL_COLORS = ['#FF00FF','#FFFF00','#00FF00','#0000FF'];

function randomHighlight() {
  return HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
}

function renderProjectsMenu(container, highlightId) {
  container.style.setProperty('--scrollbar-color', SCROLL_COLORS[Math.floor(Math.random() * SCROLL_COLORS.length)]);
  container.innerHTML = '';
  projects.forEach(p => {
    const item = document.createElement('div');
    item.className = 'project-item';

    const title = document.createElement('h3');
    title.textContent = p.name;
    if (highlightId && p.id === highlightId) {
      const h = randomHighlight();
      title.style.background = h.bg;
      title.style.color = h.text;
      item.dataset.selected = 'true';
    }
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'tags';
    p.tags.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = t;
      tagsDiv.appendChild(tag);
    });
    item.appendChild(title);
    item.appendChild(tagsDiv);

    if (window.innerWidth > 767) {
      item.addEventListener('mouseenter', (e) => {
        const h = randomHighlight();
        title.style.background = h.bg;
        title.style.color = h.text;
        showFloatingThumb(p, e.clientX, e.clientY);
      });
      item.addEventListener('mousemove', (e) => { posThumb(e); });
      item.addEventListener('mouseleave', () => {
        if (!item.dataset.selected) {
          title.style.background = '';
          title.style.color = '#1b1b1b';
        }
        floatingThumb.classList.remove('visible');
      });
    }
    if (window.innerWidth > 767) {
      (function(proj) {
        let holdTimer = null;
        item.addEventListener('touchstart', function(e) {
          const touch = e.touches[0];
          holdTimer = setTimeout(function() {
            showFloatingThumb(proj, touch.clientX, touch.clientY);
          }, 500);
        }, { passive: true });
        item.addEventListener('touchend', function() {
          clearTimeout(holdTimer);
          floatingThumb.classList.remove('visible');
        }, { passive: true });
        item.addEventListener('touchmove', function() {
          clearTimeout(holdTimer);
          floatingThumb.classList.remove('visible');
        }, { passive: true });
      })(p);
    }
    item.addEventListener('click', () => {
      document.querySelectorAll('.project-item[data-selected]').forEach(el => {
        delete el.dataset.selected;
        const t = el.querySelector('h3');
        t.style.background = ''; t.style.color = '#1b1b1b';
      });
      const h = randomHighlight();
      title.style.background = h.bg;
      title.style.color = h.text;
      item.dataset.selected = 'true';
      if (window.innerWidth <= 767) {
        document.getElementById('mobile-drawer').classList.remove('open');
        document.getElementById('mobile-drawer-overlay').classList.remove('open');
      }
      setTimeout(() => navigateToProject(p.id), 150);
    });
    container.appendChild(item);
  });
}

// --- Media Overlay ---
function toggleOverlay(el) {
  const overlay = document.getElementById('media-overlay');
  const content = document.getElementById('media-overlay-content');
  if (overlay.classList.contains('open')) {
    overlay.classList.remove('open');
    content.innerHTML = '';
    return;
  }
  const media = el.querySelector('img, video, canvas');
  if (media) {
    const clone = media.cloneNode();
    if (clone.tagName === 'VIDEO') {
      clone.muted = false;
      clone.loop = true;
      clone.autoplay = true;
      clone.controls = true;
    }
    if (clone.tagName === 'CANVAS') {
      clone.style.width = ''; clone.style.height = '';
    }
    content.appendChild(clone);
  } else {
    const bg = getComputedStyle(el).background;
    if (bg && bg !== 'none') {
      const div = document.createElement('div');
      div.style.cssText = 'width:60vw;height:60vh;border-radius:4px;' + bg;
      content.appendChild(div);
    }
  }
  overlay.classList.add('open');
}
document.getElementById('media-overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('open');
    document.getElementById('media-overlay-content').innerHTML = '';
  }
});

// --- Render Gallery ---
function renderGallery(project) {
  const wrap = document.getElementById('gallery-wrap');
  wrap.style.setProperty('--scrollbar-color', SCROLL_COLORS[Math.floor(Math.random() * SCROLL_COLORS.length)]);
  const inner = document.getElementById('gallery-inner');
  inner.innerHTML = '';
  const count = project.gallery.length;
  const viewH = window.innerHeight;
  const cw = inner.parentElement.clientWidth || 400;
  const isMobile = window.innerWidth <= 767;
  if (!isMobile) inner.style.height = (viewH * 0.1 + count * viewH * 0.7) + 'px';

  function rand(min, max) { return min + Math.random() * (max - min); }

  const preloads = project.gallery.map(item => {
    return new Promise(resolve => {
      if (item.type === 'image' && item.src) {
        const img = new Image();
        img.onload = () => resolve({ naturalW: img.naturalWidth, naturalH: img.naturalHeight });
        img.onerror = () => resolve({ naturalW: null, naturalH: null });
        img.src = item.src;
      } else {
        resolve({ naturalW: null, naturalH: null });
      }
    });
  });

  Promise.all(preloads).then(dims => {
    let prevBottom = viewH * 0.02;
    let prevH = 0;
    var containerH = isMobile ? wrap.clientHeight : 0;

    const sorted = [...project.gallery].sort((a, b) => {
      if (a.type === 'video' && b.type !== 'video') return -1;
      if (a.type !== 'video' && b.type === 'video') return 1;
      return 0;
    });
    sorted.forEach((item, i) => {
      const el = document.createElement('div');
      el.className = 'gallery-item';
      const ph = item.placeholder || item;
      const d = dims[i];

      let w, h;
      if (isMobile) {
        h = containerH;
        if (d.naturalW && d.naturalH) {
          w = h * (d.naturalW / d.naturalH);
        } else if (ph.w && ph.h) {
          w = h * (ph.w / ph.h);
        } else {
          w = h;
        }
      } else {
        if (d.naturalW && d.naturalH) {
          const scale = rand(1.5, 2.8);
          w = Math.min(d.naturalW * scale, cw * 0.5);
          if (w < cw * 0.35) w = cw * 0.35;
          h = w * (d.naturalH / d.naturalW);
        } else {
          const scale = rand(1.3, 2.2);
          w = Math.min((ph.w + rand(-20, 20)) * scale, cw * 0.5);
          if (w < cw * 0.35) w = cw * 0.35;
          const ar = ph.w / ph.h;
          h = w / ar;
        }
        if (h > viewH * 0.75) {
          h = viewH * 0.75;
          w = h * (d.naturalW && d.naturalH ? d.naturalW / d.naturalH : ph.w / ph.h);
        }
      }

      const x = isMobile ? 0 : rand(0, cw - w);
      const y = i === 0
        ? rand(viewH * 0.02, viewH * 0.06)
        : prevBottom - rand(prevH * 0.15, prevH * 0.50);

      prevBottom = y + h;
      prevH = h;

      if (isMobile) {
        el.style.width = w + 'px';
        el.style.height = h + 'px';
      } else {
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.width = w + 'px';
        el.style.height = h + 'px';
        el.style.zIndex = Math.floor(rand(1, count * 2));
      }

      if (item.type === 'image') {
        if (item.src) {
          const img = document.createElement('img');
          img.src = item.src;
          img.alt = '';
          img.style.cssText = 'width:100%;height:auto;display:block;object-fit:cover;transform:scale(1.2)';
          img.onerror = () => img.remove();
          el.appendChild(img);
        } else {
          const gradient = `linear-gradient(135deg, ${ph.colors[0]}, ${ph.colors[1]})`;
          el.style.background = gradient;
        }
      } else {
        if (item.src) {
          const video = document.createElement('video');
          video.src = item.src;
          video.muted = true;
          video.loop = true;
          video.autoplay = true;
          video.playsInline = true;
          video.setAttribute('muted', '');
          video.setAttribute('loop', '');
          video.setAttribute('autoplay', '');
          video.setAttribute('playsinline', '');
          video.style.cssText = 'width:100%;height:auto;display:block;object-fit:cover;transform:scale(1.2)';
          video.onerror = () => video.remove();
          el.appendChild(video);
          video.play().catch(() => {});
        } else {
          const videoEl = createCanvasVideo(el, ph.color, w, h);
          el.appendChild(videoEl);
        }
      }

      el.addEventListener('mouseenter', () => {
        el.style.zIndex = 9999;
        const media = el.querySelector('img, video, .gallery-video-wrap');
        if (media) {
          media.style.outline = '1px solid ' + BORDER_COLORS[Math.floor(Math.random() * BORDER_COLORS.length)];
          media.style.outlineOffset = '-1px';
        }
      });
      el.addEventListener('mouseleave', () => {
        el.style.zIndex = Math.floor(rand(1, count * 2));
        const media = el.querySelector('img, video, .gallery-video-wrap');
        if (media) {
          media.style.outline = '';
          media.style.outlineOffset = '';
        }
      });
      el.addEventListener('click', () => { toggleOverlay(el); });
      inner.appendChild(el);
    });
    if (!isMobile) inner.style.height = (prevBottom + viewH * 0.1) + 'px';
    if (isMobile) {
      createScrollBar(wrap, inner);
    }
  });
}

// --- Mobile Scroll Bar ---
function createScrollBar(wrap, inner) {
  var old = wrap.parentNode.querySelector('.scroll-bar');
  if (old) old.remove();
  if (wrap.scrollWidth <= wrap.clientWidth) return;
  var track = document.createElement('div');
  track.className = 'scroll-bar';
  var thumb = document.createElement('div');
  thumb.className = 'scroll-bar-thumb';
  track.appendChild(thumb);
  wrap.parentNode.appendChild(track);
  function update() {
    var sl = wrap.scrollLeft;
    var sw = wrap.scrollWidth;
    var cw = wrap.clientWidth;
    var frac = sw > cw ? sl / (sw - cw) : 0;
    var trackW = track.clientWidth;
    var thumbW = Math.max(20, trackW * (cw / sw));
    thumb.style.width = thumbW + 'px';
    thumb.style.transform = 'translateX(' + (frac * (trackW - thumbW)) + 'px)';
  }
  update();
  wrap.addEventListener('scroll', update);
}

// --- Navigation ---
function navigateToProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  currentProject = p;
  currentView = 'project';
  document.getElementById('hero-view').classList.remove('active');
  document.getElementById('project-view').classList.add('active');
  document.getElementById('home-btn').classList.remove('hidden');

  document.getElementById('project-info-content').innerHTML = `
    <h2>${p.name}</h2>
    <div class="project-meta">${p.tags.join(' · ')}</div>
    <p>${p.desc}</p>
    ${p.link !== '#' ? `<a href="${p.link}" target="_blank">Ver proyecto →</a>` : ''}
  `;
  renderGallery(p);
  document.getElementById('gallery-wrap').scrollTop = 0;
  renderProjectsMenu(document.getElementById('projects-menu'), p.id);
  renderProjectsMenu(document.getElementById('projects-menu-2'), p.id);
  renderProjectsMenu(document.getElementById('mobile-drawer-projects'), p.id);
}

function goHome() {
  currentView = 'hero';
  currentProject = null;
  document.getElementById('project-view').classList.remove('active');
  document.getElementById('hero-view').classList.add('active');
  document.getElementById('home-btn').classList.add('hidden');
  document.getElementById('gallery-inner').innerHTML = '';
  renderProjectsMenu(document.getElementById('projects-menu'), null);
  renderProjectsMenu(document.getElementById('projects-menu-2'), null);
  renderProjectsMenu(document.getElementById('mobile-drawer-projects'), null);
}

function toggleContact() {
  const overlay = document.getElementById('contact-overlay');
  const opening = !overlay.classList.contains('open');
  overlay.classList.toggle('open');
  if (opening) {
    const box = document.querySelector('.contact-box');
    box.style.borderColor = ['#FF00FF','#0000FF','#00FF00'][Math.floor(Math.random() * 3)];
  }
}

function handleContact(e) {
  e.preventDefault();
  var form = document.getElementById('contact-form');
  var nombre = form.nombre.value;
  var email = form.email.value;
  var mensaje = form.mensaje.value;
  var body = 'Enviado por: ' + nombre + '%0D%0A';
  body += 'Email: ' + email + '%0D%0A%0D%0A';
  body += mensaje;
  window.location.href = 'mailto:carloslavina@gmail.com?subject=Contacto%20desde%20portfolio&body=' + body;
}

// --- Mobile Drawer ---
(function() {
  var drawer = document.getElementById('mobile-drawer');
  var overlay = document.getElementById('mobile-drawer-overlay');
  var handle = document.getElementById('mobile-drawer-handle');
  if (!drawer) return;

  var startY = null, startTranslate = 0, moved = false;

  var COLORS = ['#FF00FF', '#FFFF00', '#0000FF', '#00FF00'];

  function open() {
    drawer.classList.add('open'); overlay.classList.add('open');
    overlay.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
    drawer.style.transition = 'transform 0.3s ease';
    drawer.style.transform = 'translateY(0)';
  }
  function close() {
    drawer.classList.remove('open');
    drawer.style.transition = 'transform 0.3s ease';
    drawer.style.transform = 'translateY(100%)';
    setTimeout(function() {
      overlay.classList.remove('open');
      overlay.style.background = '';
    }, 300);
  }

  handle.addEventListener('click', function() {
    if (moved) { moved = false; return; }
    drawer.classList.contains('open') ? close() : open();
  });
  overlay.addEventListener('click', close);

  document.getElementById('mobile-drawer-projects').addEventListener('click', function(e) {
    if (e.target.closest('.project-item')) setTimeout(close, 200);
  });

  handle.addEventListener('touchstart', function(e) {
    moved = false;
    startY = e.touches[0].clientY;
    startTranslate = drawer.classList.contains('open') ? 0 : drawer.offsetHeight;
    drawer.style.transition = 'none';
  }, { passive: true });

  document.addEventListener('touchmove', function(e) {
    if (startY === null) return;
    moved = true;
    var delta = e.touches[0].clientY - startY;
    var h = drawer.offsetHeight;
    var t = Math.max(0, Math.min(h, startTranslate + delta));
    drawer.style.transform = 'translateY(' + t + 'px)';
  }, { passive: true });

  document.addEventListener('touchend', function() {
    if (startY === null) return;
    if (moved) {
      var m = drawer.style.transform.match(/translateY\(([\d.]+)px\)/);
      if (m) {
        var t = parseFloat(m[1]);
        t < drawer.offsetHeight / 2 ? open() : close();
      }
    }
    startY = null;
  }, { passive: true });

  drawer.style.transform = 'translateY(100%)';
})();

// --- Init ---
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var overlay = document.getElementById('media-overlay');
    if (overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      document.getElementById('media-overlay-content').innerHTML = '';
    }
  }
});
var savedLang = localStorage.getItem('lang') || 'pt';
document.querySelectorAll('.lang-btn').forEach(function(b) {
  b.classList.toggle('active', b.dataset.lang === savedLang);
});
var bioContainer = document.getElementById('hero-bio-text');
if (bioContainer) {
  bioContainer.innerHTML = HERO_BIO.map(function(p, i) {
    return '<p' + (i > 0 ? ' style="margin-top:1rem"' : '') + '>' + p + '</p>';
  }).join('');
}
  renderProjectsMenu(document.getElementById('projects-menu'), null);
  renderProjectsMenu(document.getElementById('projects-menu-2'), null);
  renderProjectsMenu(document.getElementById('mobile-drawer-projects'), null);
  document.getElementById('home-btn').style.color = ['#0000FF','#FF00FF'][Math.floor(Math.random() * 2)];

// --- Scroll projects menu from anywhere on hero ---
document.getElementById('hero-view').addEventListener('wheel', function(e) {
  if (currentView !== 'hero') return;
  const menu = document.getElementById('projects-menu');
  menu.scrollTop += e.deltaY;
  e.preventDefault();
}, { passive: false });
