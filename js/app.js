// DEP-TECH Auth, Cart, Orders Logic

// ---- AUTH ----
function getUsers() { return JSON.parse(localStorage.getItem('dep_users') || '[]'); }
function saveUsers(u) { localStorage.setItem('dep_users', JSON.stringify(u)); }
function getCurrentUser() { return JSON.parse(localStorage.getItem('dep_current_user') || 'null'); }
function setCurrentUser(u) { localStorage.setItem('dep_current_user', JSON.stringify(u)); }
function logout() { localStorage.removeItem('dep_current_user'); navigate('index.html'); }

function register(firstName, lastName, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) return { ok: false, msg: 'Email already registered.' };
  const user = { id: Date.now(), firstName, lastName, email, password, phone:'', location:'', createdAt: new Date().toISOString() };
  users.push(user);
  saveUsers(users);
  setCurrentUser(user);
  return { ok: true };
}

function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return { ok: false, msg: 'Invalid email or password.' };
  setCurrentUser(user);
  return { ok: true };
}

function updateProfile(data) {
  const users = getUsers();
  const cu = getCurrentUser();
  const idx = users.findIndex(u => u.id === cu.id);
  if (idx > -1) {
    Object.assign(users[idx], data);
    saveUsers(users);
    setCurrentUser(users[idx]);
  }
}

// ---- CART ----
function getCart() { return JSON.parse(localStorage.getItem('dep_cart') || '[]'); }
function saveCart(c) { localStorage.setItem('dep_cart', JSON.stringify(c)); updateCartBadge(); }

function addToCart(partId) {
  const part = PARTS.find(p => p.id === partId);
  if (!part) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === partId);
  if (existing) existing.qty++;
  else cart.push({ ...part, qty: 1 });
  saveCart(cart);
  showToast('Added to cart: ' + part.name, 'success');
}

function removeFromCart(partId) {
  const cart = getCart().filter(i => i.id !== partId);
  saveCart(cart);
}

function updateQty(partId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === partId);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
  }
}

function getCartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}

function updateCartBadge() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

// ---- ORDERS ----
function getOrders() { return JSON.parse(localStorage.getItem('dep_orders') || '[]'); }
function saveOrders(o) { localStorage.setItem('dep_orders', JSON.stringify(o)); }

function placeOrder(location, phone) {
  const cu = getCurrentUser();
  if (!cu) { navigate('auth.html'); return null; }
  const cart = getCart();
  if (!cart.length) return null;
  const order = {
    id: 'DEP-' + Date.now(),
    userId: cu.id,
    customerName: cu.firstName + ' ' + cu.lastName,
    email: cu.email,
    phone, location,
    items: cart,
    total: getCartTotal(),
    date: new Date().toISOString(),
    status: 'Processing'
  };
  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
  saveCart([]);
  return order;
}

function getUserOrders() {
  const cu = getCurrentUser();
  if (!cu) return [];
  return getOrders().filter(o => o.userId === cu.id);
}

// ---- TOAST ----
function showToast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = 'dep-toast dep-toast-' + type;
  t.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> ${msg}`;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
}

// ---- NAVIGATION with ANIMATION ----
function navigate(url) {
  const overlay = document.getElementById('pageTransition');
  if (overlay) {
    overlay.classList.add('enter');
    setTimeout(() => window.location.href = url, 500);
  } else {
    window.location.href = url;
  }
}

// ---- SAFETY TIPS ----
let safetyIndex = 0;
function showSafetyTip() {
  const tip = SAFETY_TIPS[safetyIndex % SAFETY_TIPS.length];
  safetyIndex++;
  const toast = document.getElementById('safetyToast');
  if (!toast) return;
  toast.querySelector('.safety-icon').textContent = tip.icon;
  toast.querySelector('h4').textContent = tip.title;
  toast.querySelector('p').textContent = tip.msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 8000);
}

function initSafetyTips() {
  setTimeout(() => {
    showSafetyTip();
    setInterval(showSafetyTip, 120000);
  }, 5000);
}

// ---- CURSOR ----
// Removed to improve performance and stop sluggishness
function initCursor() {}


// ---- CANVAS CAR ANIMATION ----
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -1000, y: -1000 };

  function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
  resize(); window.addEventListener('resize', resize);
  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  canvas.addEventListener('click', spawnBurst);

  function rand(a, b) { return Math.random() * (b - a) + a; }

  class Particle {
    constructor(burst = false, bx = 0, by = 0) {
      this.reset(burst, bx, by);
    }
    reset(burst = false, bx = 0, by = 0) {
      if (burst) {
        this.x = bx; this.y = by;
        this.vx = rand(-6, 6); this.vy = rand(-6, 6);
        this.life = 1; this.decay = rand(0.02, 0.05);
        this.size = rand(3, 8);
        this.color = `hsl(${rand(30,50)},100%,60%)`;
        this.burst = true;
      } else {
        this.x = rand(0, W); this.y = rand(0, H);
        this.vx = rand(-0.5, 0.5); this.vy = rand(-0.3, -0.8);
        this.life = 1; this.decay = rand(0.002, 0.006);
        this.size = rand(1, 3);
        this.color = Math.random() > 0.5 ? `rgba(255,184,0,` : `rgba(10,132,255,`;
        this.burst = false;
      }
    }
    update() {
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150 && !this.burst) { this.vx += dx / dist * 0.5; this.vy += dy / dist * 0.5; }
      this.x += this.vx; this.y += this.vy;
      this.life -= this.decay;
      if (this.life <= 0) this.reset();
      if (!this.burst && (this.y < -10 || this.x < -10 || this.x > W + 10)) this.reset();
    }
    draw() {
      ctx.save();
      if (this.burst) {
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
      } else {
        ctx.globalAlpha = this.life * 0.7;
        ctx.fillStyle = this.color + this.life + ')';
      }
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function spawnBurst(e) {
    const rect = canvas.getBoundingClientRect();
    for (let i = 0; i < 40; i++) particles.push(new Particle(true, e.clientX - rect.left, e.clientY - rect.top));
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  // Draw road lines
  function drawRoad() {
    ctx.save();
    ctx.strokeStyle = 'rgba(255,184,0,0.06)';
    ctx.lineWidth = 1;
    const cols = 8;
    for (let i = 0; i <= cols; i++) {
      const x = (W / cols) * i;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + H * 0.3, H); ctx.stroke();
    }
    ctx.restore();
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawRoad();
    particles = particles.filter(p => p.life > 0 || !p.burst);
    while (particles.filter(p => !p.burst).length < 120) particles.push(new Particle());
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
}

// ---- NAVBAR UPDATES ----
function updateNavbar() {
  const cu = getCurrentUser();
  const authBtns = document.getElementById('authBtns');
  const userMenu = document.getElementById('userMenu');
  const userGreet = document.getElementById('userGreet');
  const cartCount = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = cartCount);
  if (cu) {
    if (authBtns) authBtns.style.display = 'none';
    if (userMenu) userMenu.style.display = 'flex';
    if (userGreet) userGreet.textContent = 'Hi, ' + cu.firstName;
  } else {
    if (authBtns) authBtns.style.display = 'flex';
    if (userMenu) userMenu.style.display = 'none';
  }
}

// ---- PAGE TRANSITION EXIT ----
window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('pageTransition');
  if (overlay) {
    overlay.style.transformOrigin = 'right';
    overlay.style.transform = 'scaleX(1)';
    overlay.style.transition = 'transform 0.5s ease';
    setTimeout(() => { overlay.style.transform = 'scaleX(0)'; }, 50);
  }
  initCursor();
  updateNavbar();
  if (document.getElementById('heroCanvas')) initHeroCanvas();
  if (document.getElementById('safetyToast') && window.location.pathname.includes('index')) initSafetyTips();
});

// ---- FORMAT CURRENCY ----
function formatKES(n) { return 'KSh ' + n.toLocaleString(); }

// ---- TOAST STYLES (injected) ----
const toastStyles = document.createElement('style');
toastStyles.textContent = `
.dep-toast {
  position:fixed; bottom:30px; left:30px; z-index:99990;
  background:var(--card); border:1px solid var(--border);
  border-radius:12px; padding:14px 20px;
  display:flex; align-items:center; gap:10px;
  font-size:14px; font-weight:500;
  transform:translateY(100px); opacity:0;
  transition:all 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
  box-shadow:0 10px 40px rgba(0,0,0,0.4);
}
.dep-toast.show { transform:translateY(0); opacity:1; }
.dep-toast-success { border-color:rgba(0,200,83,0.4); }
.dep-toast-error { border-color:rgba(255,59,59,0.4); }
`;
document.head.appendChild(toastStyles);
