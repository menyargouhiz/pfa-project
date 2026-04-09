// ===== DATA — RESTAURANTS TUNISIA =====
const RESTAURANTS = [
  {
    id:1, name:"Dar El Jeld", cuisine:"Tunisian", category:"gastronomique",
    address:"5-10 Rue Dar El Jeld, Medina", city:"Tunis", phone:"+216 71 560 916",
    priceRange:"€€€", lat:36.7990, lng:10.1695,
    tags:["Palace","Medina","Refined"],
    image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description:"Housed in an 18th-century palace in the heart of the Medina, Dar El Jeld is the reference for fine dining in Tunis. Refined Tunisian cuisine in an exceptional setting.",
    openHours:"Mon-Sat : 12:30–3PM, 7:30–11PM",
    reviews:[
      {author:"Leila M.",rating:5,date:"2026-03-15",text:"An exceptional meal in a beautiful setting. The egg brik and fish couscous are sublime."},
      {author:"Karim B.",rating:5,date:"2026-02-28",text:"The best fine-dining Tunisian food. The decor is breathtaking."}
    ]
  },
  {
    id:2, name:"L'Escargot", cuisine:"French", category:"gastronomique",
    address:"Sidi Salem Route", city:"Bizerte", phone:"+216 72 431 111",
    priceRange:"€€€", lat:37.2744, lng:9.8739,
    tags:["Vieux Port","Seafood","Elegant"],
    image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    description:"A historic establishment offering refined French and Mediterranean cuisine near the beautiful old port of Bizerte.",
    openHours:"Tue-Sun : 12PM–3PM, 7PM–11PM",
    reviews:[
      {author:"Sophie V.",rating:4,date:"2026-01-20",text:"Magnificent experience! Extremely well prepared seafood."}
    ]
  },
  {
    id:3, name:"Le Saf Saf", cuisine:"Tunisian", category:"brasserie",
    address:"Place du Saf Saf", city:"La Marsa", phone:"+216 71 743 333", // Actually Tunis Governorate but distinct area
    priceRange:"€", lat:36.8785, lng:10.3247,
    tags:["Traditional","Brik","Historical"],
    image:"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    description:"A legendary outdoor café and eatery under giant trees, serving traditional Brik, lablabi, and mint tea.",
    openHours:"Daily : 8AM–11PM",
    reviews:[
      {author:"Yasmine T.",rating:5,date:"2026-03-20",text:"You must try their Brik, it's a piece of Tunisian history."}
    ]
  },
  {
    id:4, name:"Dar Zarrouk", cuisine:"Mediterranean", category:"gastronomique",
    address:"Route de la Corniche", city:"Sidi Bou Said", phone:"+216 71 740 591",
    priceRange:"€€€", lat:36.8706, lng:10.3456,
    tags:["Sea View","Terrace","Elegant"],
    image:"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    description:"Nestled in the heights of Sidi Bou Said, offering a panoramic terrace overlooking the Gulf of Tunis. Mediterranean cuisine redefined.",
    openHours:"Tue-Sun : 12PM–3PM, 7PM–11PM",
    reviews:[
      {author:"Rania K.",rating:5,date:"2026-03-12",text:"Breathtaking view over the gulf. The food is simply excellent."}
    ]
  },
  {
    id:5, name:"El Walima", cuisine:"Seafood", category:"fruits-de-mer",
    address:"Port Area", city:"La Goulette", phone:"+216 71 736 444",
    priceRange:"€€", lat:36.8183, lng:10.3038,
    tags:["Fresh Fish","Port","Family"],
    image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description:"A staple in La Goulette, El Walima delights customers with the freshest seafood. Grilled fish and octopus cooked traditionally.",
    openHours:"Daily : 11:30AM–10:30PM",
    reviews:[
      {author:"Amine C.",rating:5,date:"2026-03-18",text:"The best fish in La Goulette! Impeccable freshness."}
    ]
  },
  {
    id:6, name:"Restaurant de l'Olivier", cuisine:"Tunisian", category:"brasserie",
    address:"Centre Ville", city:"Ariana", phone:"+216 71 710 000",
    priceRange:"€€", lat:36.8625, lng:10.1956,
    tags:["Couscous","Authentic","Cozy"],
    image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    description:"A lovely spot in Ariana dedicated to hearty, home-style Tunisian meals and rich couscous variations.",
    openHours:"Mon-Sat : 11AM–4PM",
    reviews:[
      {author:"Hana B.",rating:5,date:"2026-03-14",text:"Truly feels like eating at my grandmother's house."}
    ]
  },
  {
    id:7, name:"Le Pêcheur", cuisine:"Seafood", category:"fruits-de-mer",
    address:"Corniche", city:"Nabeul", phone:"+216 72 222 333",
    priceRange:"€€", lat:36.4561, lng:10.7376,
    tags:["Beach","Grill","Harissa"],
    image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description:"Famous for its fresh catches and local Nabeul harissa spice blend, right next to the beach.",
    openHours:"Daily : 12PM–10PM",
    reviews:[
      {author:"Mehdi R.",rating:4,date:"2026-03-25",text:"Great spicy grilled fish and amazing sea breeze."}
    ]
  },
  {
    id:8, name:"L'Oliveraie", cuisine:"Tunisian", category:"gastronomique",
    address:"Route de Zaghouan", city:"Zaghouan", phone:"+216 72 670 123",
    priceRange:"€€", lat:36.4011, lng:10.1433,
    tags:["Nature","Water Spring","Roast Meat"],
    image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description:"Enjoy roasted lamb and traditional bread baked in clay ovens, surrounded by Zaghouan's natural springs and mountains.",
    openHours:"Wed-Sun : 12PM–6PM",
    reviews:[
      {author:"Dina F.",rating:5,date:"2026-03-19",text:"The roasted lamb is tender and flavorful."}
    ]
  },
  {
    id:9, name:"Le Grill Marin", cuisine:"Seafood", category:"fruits-de-mer",
    address:"Port de Pêche", city:"Mahdia", phone:"+216 73 681 000",
    priceRange:"€€", lat:35.5047, lng:11.0622,
    tags:["Sardines","Harbor","Fresh"],
    image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description:"Offering the best sardines and squid right as the fishing boats dock in Mahdia's historic harbor.",
    openHours:"Daily : 11AM–9PM",
    reviews:[
      {author:"Clara M.",rating:4,date:"2026-03-08",text:"Superb beach town feel, fresh and cheap."}
    ]
  },
  {
    id:10, name:"Sfaxian Delights", cuisine:"Tunisian", category:"street-food",
    address:"Bab Diwan", city:"Sfax", phone:"+216 74 220 555",
    priceRange:"€", lat:34.7406, lng:10.7603,
    tags:["Spicy","Fast","Local"],
    image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    description:"The definitive spot for authentic Sfaxian street food and highly spiced snacks in the bustling Medina.",
    openHours:"Mon-Sat : 7AM–8PM",
    reviews:[
      {author:"Youssef K.",rating:5,date:"2026-02-20",text:"Incredible flavors. You must try their local specialties."}
    ]
  },
  {
    id:11, name:"Oasis Cafe", cuisine:"Tunisian", category:"brasserie",
    address:"Zone Touristique", city:"Tozeur", phone:"+216 76 450 111",
    priceRange:"€", lat:33.9185, lng:8.1336,
    tags:["Dates","Palm Trees","Tea"],
    image:"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    description:"Set deep in the Tozeur oasis. Enjoy fresh dates, mint tea, and mild curries shaded by palm trees.",
    openHours:"Daily : 9AM–11PM",
    reviews:[
      {author:"Samira A.",rating:5,date:"2026-01-11",text:"Such a relaxing experience amid the palm trees."}
    ]
  },
  {
    id:12, name:"Dar Djerba", cuisine:"Seafood", category:"fruits-de-mer",
    address:"Houmt Souk", city:"Medenine", // Specifically Djerba in Medenine gov
    phone:"+216 75 650 999",
    priceRange:"€€", lat:33.8750, lng:10.8580,
    tags:["Island","Octopus","Rice"],
    image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    description:"Experience Djerbian cuisine, famously known for its Djerbian rice and grilled octopus.",
    openHours:"Daily : 12PM–10PM",
    reviews:[
      {author:"Ali T.",rating:5,date:"2025-11-05",text:"The Djerbian rice is perfectly spiced. Love it!"}
    ]
  },
  {
    id:13, name:"Kairouan Sweets & Meats", cuisine:"Tunisian", category:"street-food",
    address:"Avenue de la République", city:"Kairouan", phone:"+216 77 220 000",
    priceRange:"€", lat:35.6781, lng:10.0963,
    tags:["Makroudh","Lamb","Traditional"],
    image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    description:"Best known for slow-cooked lamb and famous Kairouan Makroudh pastries.",
    openHours:"Daily : 8AM–8PM",
    reviews:[
      {author:"Nadia H.",rating:5,date:"2025-12-15",text:"The Makroudh is freshly baked and the lamb melts in your mouth."}
    ]
  },
  {
    id:14, name:"Le Kef Belvedere", cuisine:"Tunisian", category:"brasserie",
    address:"Kasbah area", city:"Le Kef", phone:"+216 78 200 444",
    priceRange:"€€", lat:36.1826, lng:8.7148,
    tags:["Mountains","Bread","View"],
    image:"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    description:"Perched on a hill near the Kasbah, providing stunning views of the surrounding plains and serving hearty mountain food.",
    openHours:"Tue-Sun : 11AM–9PM",
    reviews:[
      {author:"Omar F.",rating:4,date:"2026-02-14",text:"Amazing view and the local flatbread is fantastic."}
    ]
  },
  {
    id:15, name:"Tataouine Troglodyte", cuisine:"African", category:"africaine",
    address:"Chenini Village", city:"Tataouine", phone:"+216 75 860 111",
    priceRange:"€€", lat:32.9297, lng:10.4518,
    tags:["Berber","Cave","Desert"],
    image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description:"Dine inside an authentic Berber cave in Chenini. Try the traditional Berber couscous and local olive oil.",
    openHours:"Daily : 10AM–6PM",
    reviews:[
      {author:"Sara J.",rating:5,date:"2026-03-30",text:"A magical experience eating in a cave. Food was deeply flavorful."}
    ]
  },
  {
    id:16, name:"Sousse Riviera", cuisine:"Mediterranean", category:"gastronomique",
    address:"Boujaffar Corniche", city:"Sousse", phone:"+216 73 222 999",
    priceRange:"€€€", lat:35.8256, lng:10.6369,
    tags:["Luxury","Sea View","Italian-Tunisian"],
    image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    description:"A fine dining mix of Italian and Tunisian seafood right on the bustling Sousse Corniche.",
    openHours:"Daily : 12PM–11:30PM",
    reviews:[
      {author:"Elena P.",rating:4,date:"2026-01-22",text:"Very sophisticated menu. The pasta with local clams is amazing."}
    ]
  },
  {
    id:17, name:"Beja Dairy & Grill", cuisine:"Tunisian", category:"brasserie",
    address:"Avenue Habib Bourguiba", city:"Béja", phone:"+216 78 444 222",
    priceRange:"€", lat:36.7256, lng:9.1817,
    tags:["Dairy","Farming","Fresh"],
    image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    description:"Located in Tunisia's agricultural heartland. Famous for farm-fresh cheeses, ricotta, and hearty grills.",
    openHours:"Daily : 7AM–5PM",
    reviews:[
      {author:"Karim B.",rating:5,date:"2025-10-18",text:"The ricotta and honey plate is heaven."}
    ]
  },
  {
    id:18, name:"Jendouba Forest Cafe", cuisine:"Tunisian", category:"africaine",
    address:"Ain Draham Route", city:"Jendouba", phone:"+216 78 600 333",
    priceRange:"€€", lat:36.5011, lng:8.7802,
    tags:["Forest","Wild Boar","Cozy"],
    image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description:"Hidden in the oak forests near Ain Draham. Offers unique local forest specialties.",
    openHours:"Daily : 10AM–8PM",
    reviews:[
      {author:"Nizar W.",rating:4,date:"2026-02-05",text:"Great place for winter days. Hearty meals."}
    ]
  },
  {
    id:19, name:"Monastir Marina", cuisine:"Italian", category:"italien",
    address:"Cap Marina", city:"Monastir", phone:"+216 73 460 777",
    priceRange:"€€", lat:35.7770, lng:10.8261,
    tags:["Yachts","Pizza","Sunset"],
    image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    description:"Pizzeria and Italian dining viewing the beautiful yachts of Monastir marina.",
    openHours:"Daily : 12PM–11PM",
    reviews:[
      {author:"Fabio M.",rating:5,date:"2026-03-21",text:"Excellent wood-fired pizza and a cool sea breeze."}
    ]
  },
  {
    id:20, name:"Siliana Terroir", cuisine:"Tunisian", category:"brasserie",
    address:"Downtown", city:"Siliana", phone:"+216 77 870 123",
    priceRange:"€", lat:36.0849, lng:9.3708,
    tags:["Rural","Authentic","Olive Oil"],
    image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    description:"A rustic eatery focusing on dishes prepared with Siliana's award-winning olive oils.",
    openHours:"Mon-Sat : 8AM–4PM",
    reviews:[
      {author:"Aymen S.",rating:4,date:"2025-09-12",text:"Very basic interior but the food is packed with authentic flavor."}
    ]
  },
  {
    id:21, name:"Gabes Oasis Food", cuisine:"African", category:"africaine",
    address:"Chenini Oasis", city:"Gabès", phone:"+216 75 220 333",
    priceRange:"€", lat:33.8815, lng:10.0982,
    tags:["Pomegranate","Farm","Green"],
    image:"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    description:"Enjoy meals heavily featuring local dates and pomegranates within the unique maritime oasis of Gabès.",
    openHours:"Daily : 9AM–6PM",
    reviews:[
      {author:"Mona K.",rating:5,date:"2026-01-30",text:"The pomegranate juice and fresh salads are incredible."}
    ]
  },
  {
    id:22, name:"Gafsa Diner", cuisine:"Tunisian", category:"street-food",
    address:"Avenue Habib Bourguiba", city:"Gafsa", phone:"+216 76 222 111",
    priceRange:"€", lat:34.4250, lng:8.7842,
    tags:["Cheap","Fast","Spicy"],
    image:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    description:"A famous stopover for travelers heading south, offering the best street-style omelettes and Mlawi.",
    openHours:"Daily : 24/7",
    reviews:[
      {author:"Tarak L.",rating:4,date:"2025-11-20",text:"Perfect quick stop. The Mlawi is huge and very filling."}
    ]
  },
  {
    id:23, name:"Kasserine Peaks", cuisine:"Brasserie", category:"brasserie",
    address:"Chambi Mountain Route", city:"Kasserine", phone:"+216 77 400 222",
    priceRange:"€€", lat:35.1676, lng:8.8365,
    tags:["Trails","Grill","Nature"],
    image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description:"A great post-hike stop offering grilled meats and hearty soups near Mount Chambi.",
    openHours:"Tue-Sun : 10AM–7PM",
    reviews:[
      {author:"Hassen J.",rating:4,date:"2026-03-01",text:"Exactly what you need after a long hike in the mountains."}
    ]
  },
  {
    id:24, name:"Kebili Desert Camp", cuisine:"African", category:"africaine",
    address:"Douz Desert", city:"Kebili", phone:"+216 75 490 888",
    priceRange:"€€€", lat:33.7050, lng:8.9650,
    tags:["Sand","Campfire","Under Stars"],
    image:"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    description:"Dine beneath the stars in the Sahara. Bread baked in the sand and slow-roasted meats at a luxury camp.",
    openHours:"Daily : 6PM–11PM",
    reviews:[
      {author:"Lucas R.",rating:5,date:"2026-02-12",text:"Unforgettable night under the stars. The sand-baked bread is fascinating."}
    ]
  }
];

// ===== BADGE SYSTEM =====
const BADGES = [
  { id:'nouveau',  icon:'🌱', name:'Curious',          class:'badge-nouveau', desc:'Welcome!',              min:0,  max:0 },
  { id:'bronze',   icon:'🥉', name:'Bronze Loyal',     class:'badge-bronze',  desc:'1 to 3 reviews',        min:1,  max:3 },
  { id:'argent',   icon:'🥈', name:'Silver Gourmet',   class:'badge-argent',  desc:'4 to 9 reviews',        min:4,  max:9 },
  { id:'or',       icon:'🥇', name:'Gold Expert',      class:'badge-or',      desc:'10 to 19 reviews',      min:10, max:19 },
  { id:'platine',  icon:'💎', name:'Maestro Platinum', class:'badge-platine', desc:'20 reviews or more',  min:20, max:Infinity }
];

function getBadge(reviewCount) {
  return [...BADGES].reverse().find(b => reviewCount >= b.min) || BADGES[0];
}

// ===== SCORE =====
function calcScore(r) {
  if (!r.reviews || r.reviews.length === 0) return 0;
  const avg = avgRating(r);
  const count = r.reviews.length;
  const days = (Date.now() - new Date(r.reviews[0].date)) / 86400000;
  const freshness = Math.max(0, 1 - days / 180);
  return Math.round((avg / 5) * 60 + Math.min(count / 20, 1) * 30 + freshness * 10);
}
function avgRating(r) {
  if (!r.reviews || !r.reviews.length) return 0;
  return r.reviews.reduce((a, rv) => a + rv.rating, 0) / r.reviews.length;
}

// ===== STATE =====
const state = {
  restaurants: [],
  userReviews: JSON.parse(localStorage.getItem('appetitus_reviews') || '[]'),
  user: JSON.parse(localStorage.getItem('appetitus_user') || 'null'),
  pendingRating: 0
};

function loadRestaurants() {
  state.restaurants = RESTAURANTS.map(r => {
    const myReviews = state.userReviews.filter(ur => ur.restaurantId === r.id);
    const allReviews = [...myReviews, ...r.reviews];
    return { ...r, reviews: allReviews, score: 0, avg: 0 };
  }).map(r => ({ ...r, score: calcScore(r), avg: avgRating(r) }));
}

// ===== RENDER STARS =====
function renderStars(rating, size = '') {
  const full = Math.floor(rating), half = rating % 1 >= 0.5 ? 1 : 0, empty = 5 - full - half;
  const s = (cls) => `<span class="star ${cls} ${size}">★</span>`;
  return s('filled').repeat(full) + (half ? s('half') : '') + s('').repeat(empty);
}

// ===== DATE FORMAT =====
function fmtDate(d) {
  return new Date(d).toLocaleDateString('en-US', { day:'2-digit', month:'long', year:'numeric' });
}

// ===== TOAST =====
function toast(msg, type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg; t.className = `show ${type}`;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.className = '', 3500);
}

// ===== CASSEROLE MODAL — 3 PHASES =====
function openCasserole(id) {
  const r = state.restaurants.find(x => x.id === id);
  if (!r) return;
  state.pendingRating = 0;

  const overlay  = document.getElementById('casserole-overlay');
  const panelContent = document.getElementById('casserole-content');
  if (!overlay || !panelContent) return;

  // Build content
  const dist = [5,4,3,2,1].map(star => {
    const count = r.reviews.filter(rv => rv.rating === star).length;
    return { star, count, pct: r.reviews.length ? (count/r.reviews.length)*100 : 0 };
  });

  panelContent.innerHTML = `
    <div class="casserole-hero" data-category="${r.category}">
      <img src="${r.image}" alt="${r.name}" />
      <div class="casserole-hero-overlay"></div>
      <span class="casserole-hero-badge">🍽️ ${r.cuisine}</span>
      <button class="casserole-close" onclick="closeCasserole()">✕</button>
    </div>
    <div class="casserole-body" data-category="${r.category}">
      <div class="casserole-name">${r.name}</div>
      <div class="casserole-meta">
        <span>📍 ${r.address}</span><span>📞 ${r.phone||'—'}</span>
        <span>🕐 ${r.openHours}</span><span>💰 ${r.priceRange}</span>
        <span>⚡ Score ${r.score}/100</span>
      </div>
      <p class="casserole-desc">${r.description}</p>
      <div class="hr"></div>
      <div class="rating-overview">
        <div>
          <div class="rating-big-num">${r.avg.toFixed(1)}</div>
          <div class="stars" style="margin-top:4px">${renderStars(r.avg)}</div>
          <div style="font-size:.75rem;color:var(--text-muted);margin-top:3px">${r.reviews.length} reviews</div>
        </div>
        <div class="rating-detail">
          ${dist.map(d=>`<div class="rbar-row"><span>${d.star}★</span><div class="rbar-track"><div class="rbar-fill" style="width:${d.pct}%"></div></div><span>${d.count}</span></div>`).join('')}
        </div>
      </div>
      <div class="hr"></div>
      <div style="font-weight:700;font-size:.85rem;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:1rem">
        💬 Reviews (${r.reviews.length})
      </div>
      <div class="reviews-list">${r.reviews.map(rv=>`
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">${rv.author.charAt(0)}</div>
            <div><div class="review-author">${rv.author}</div><div class="stars">${renderStars(rv.rating)}</div></div>
            <div class="review-date">${fmtDate(rv.date)}</div>
          </div>
          <div class="review-text">${rv.text}</div>
        </div>`).join('')}
      </div>
      <div class="hr"></div>
      <div class="add-review">
        <h4>✍️ Leave a review</h4>
        ${state.user?`<div style="margin-bottom:.75rem"><span class="badge ${getBadge((state.userReviews||[]).length).class}">${getBadge((state.userReviews||[]).length).icon} ${getBadge((state.userReviews||[]).length).name}</span> &nbsp;<span style="font-size:.82rem;color:var(--text-muted)">Hello <strong>${state.user.name}</strong></span></div>`
          :'<p style="font-size:.85rem;color:var(--text-muted);margin-bottom:1rem">💡 <a href="login.html" style="color:var(--accent);font-weight:600">Log in</a> to post a review and unlock badges!</p>'}
        <div class="form-group">
          <label class="form-label">Your name</label>
          <input class="form-input" id="rv-author" placeholder="Your first name..." value="${state.user?state.user.name:''}" ${state.user?'readonly':''} />
        </div>
        <div class="form-group">
          <label class="form-label">Rating</label>
          <div class="star-picker" id="star-picker">${[1,2,3,4,5].map(n=>`<span class="star-pick" data-v="${n}" onclick="setRating(${n})">★</span>`).join('')}</div>
        </div>
        <div class="form-group">
          <label class="form-label">Comment</label>
          <textarea class="form-textarea" id="rv-text" placeholder="Share your experience..." maxlength="1000"></textarea>
        </div>
        <button class="btn btn-primary btn-full" style="border-radius:var(--radius-sm)" onclick="submitReview(${r.id})">🚀 Post my review</button>
      </div>
    </div>`;

  // Reset & start 3-phase animation
  overlay.className = '';
  void overlay.offsetWidth; // force reflow

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => overlay.classList.add('lid-open'),      100);
  setTimeout(() => overlay.classList.add('steam-on'),      350);
  setTimeout(() => overlay.classList.add('steam-off'),     700);
  setTimeout(() => overlay.classList.add('show-content'),  850);
}



function closeCasserole() {
  const overlay = document.getElementById('casserole-overlay');
  // 1 — panel content leaves
  overlay.classList.remove('show-content');
  // 2 — lid closes (lid returns to 0)
  setTimeout(() => overlay.classList.remove('lid-open', 'steam-on', 'steam-off'), 420);
  // 3 — casserole + overlay disappear
  setTimeout(() => overlay.classList.remove('open'), 900);
  document.body.style.overflow = '';
}

function setRating(v) {
  state.pendingRating = v;
  document.querySelectorAll('.star-pick').forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.v) <= v);
  });
}

function submitReview(restaurantId) {
  const author = document.getElementById('rv-author')?.value.trim();
  const text   = document.getElementById('rv-text')?.value.trim();
  const rating = state.pendingRating;
  if (!author) { toast('⚠️ Enter your name.', 'error'); return; }
  if (!rating) { toast('⚠️ Choose a rating.', 'error'); return; }
  if (text.length < 20) { toast('⚠️ Comment too short (min. 20 characters).', 'error'); return; }

  const review = { restaurantId, author, rating, text, date: new Date().toISOString().split('T')[0] };
  state.userReviews.push(review);
  localStorage.setItem('appetitus_reviews', JSON.stringify(state.userReviews));

  const r = state.restaurants.find(x => x.id === restaurantId);
  if (r) { r.reviews.unshift({ author, rating, text, date: review.date }); r.avg = avgRating(r); r.score = calcScore(r); }

  closeCasserole();
  if (typeof renderGrid === 'function') renderGrid();
  if (typeof renderTopPicks === 'function') renderTopPicks();
  toast('✅ Review published successfully!');

  if (state.user) {
    state.user.reviewCount = (state.user.reviewCount || 0) + 1;
    localStorage.setItem('appetitus_user', JSON.stringify(state.user));
  }
}

// ===== AUTH HELPERS =====
function getCurrentUser() { return JSON.parse(localStorage.getItem('appetitus_user') || 'null'); }
function logout() {
  localStorage.removeItem('appetitus_user');
  window.location.href = 'index.html';
}

// ===== NAV USER STATE =====
function updateNavUser() {
  const u = getCurrentUser();
  const actionsEl = document.getElementById('nav-actions');
  if (!actionsEl) return;
  if (u) {
    const badge = getBadge(u.reviewCount || 0);
    actionsEl.innerHTML = `
      <a href="profile.html" class="badge ${badge.class}" style="text-decoration:none;">${badge.icon} ${badge.name}</a>
      <a href="profile.html" class="btn btn-ghost">👤 ${u.name}</a>
      <button class="btn btn-outline" onclick="logout()">Log Out</button>`;
  } else {
    actionsEl.innerHTML = `
      <a href="login.html" class="btn btn-ghost">Log In</a>
      <a href="signup.html" class="btn btn-primary">Sign Up →</a>`;
  }
}

// ===== REVEAL ANIMATION =====
function setupReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let cur = 0, inc = target / 60;
    const tick = () => { cur = Math.min(cur + inc, target); el.textContent = Math.floor(cur) + suffix; if (cur < target) requestAnimationFrame(tick); };
    tick();
  });
}

// ===== INIT CASSEROLE OVERLAY =====
function initCasseroleOverlay() {
  if (document.getElementById('casserole-overlay')) return;
  const el = document.createElement('div');
  el.id = 'casserole-overlay';
  el.innerHTML = `
    <!-- Phase 1: Grande casserole centrée -->
    <div id="pot-stage">
      <div class="big-pot-wrap">
        <div class="big-steam-wrap">
          <div class="big-steam-w"></div><div class="big-steam-w"></div>
          <div class="big-steam-w"></div><div class="big-steam-w"></div>
          <div class="big-steam-w"></div>
        </div>
        <div class="big-lid"></div>
        <div class="big-body">
          <div class="big-handle big-handle-l"></div>
          <div class="big-handle big-handle-r"></div>
        </div>
      </div>
    </div>
    <!-- Phase 3: Panel contenu -->
    <div id="casserole-panel">
      <div class="casserole-panel-inner" id="casserole-content"></div>
    </div>`;
  document.body.appendChild(el);
  el.addEventListener('click', e => {
    if (e.target === el || e.target.id === 'casserole-panel') closeCasserole();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCasserole(); });
}

// ===== SHARED INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadRestaurants();
  updateNavUser();
  initCasseroleOverlay();
  setupReveal();
  if (document.getElementById('toast')) return;
  const t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t);
});
