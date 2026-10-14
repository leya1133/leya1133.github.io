// ============ ÇEVİRİLER ============
// Türkçe metinler doğrudan HTML'de duruyor; burada sadece İngilizce var.
// Yeni metin eklemek için: HTML'de öğeye data-i18n="anahtar" ver, aşağıya aynı anahtarı ekle.
const I18N = {
  en: {
    "title": "Layan Bassout | Portfolio",
    "nav.exp": "Experience", "nav.proj": "Projects", "nav.lang": "Languages", "nav.cert": "Certificates", "nav.contact": "Contact",
    "meta.issue": "Issue 04 · Fall 2026", "meta.place": "Elazığ, Türkiye", "meta.field": "Software &amp; AI",
    "cover.lead": "Senior Software Engineering student. I train models, get agents talking, and bring ideas to the stage.",
    "cover.quote": "“Intelligence is the ability to adapt to change.”",
    "cover.cite": "— Stephen Hawking",
    "cover.btn": "Read the story",
    "cover.fig": "Fig. 1 — One of the rare moments she isn’t coding",
    "stat.1": "TEKNOFEST preliminary design report score",
    "stat.2": "Gen-U Demo Day — among the finalist teams",
    "stat.unit": "s",
    "stat.3": "for a 5-agent idea analysis",
    "stat.4": "languages: Arabic, Turkish, English",
    "ch.1": "Experience<em>, or what I gathered along the way</em>",
    "ch.2": "Projects<em>, things that left the classroom and run</em>",
    "ch.3": "Languages<em>, between three worlds</em>",
    "ch.4": "Certificates<em>, the ones on record</em>",
    "tag.work": "Work", "tag.intern": "Internship", "tag.comp": "Competition", "tag.finalist": "Finalist",
    "tag.project": "Project", "tag.edu": "Training", "tag.vol": "Volunteer", "tag.uni": "University",
    "date.tahweel": "Feb – Sep 2026", "date.summer26": "Jul – Aug 2026", "date.apr26": "Apr 2026",
    "date.summer25": "Jul – Aug 2025", "date.dv": "May – Jun 2025", "date.nov24": "Nov 2024",
    "date.now": "Present", "date.jan26": "Jan 2026",
    "chip.prompt": "Prompt Engineering", "chip.enar": "English / Arabic", "chip.cv": "Computer Vision",
    "chip.ai": "AI", "chip.data": "Data Analytics", "chip.ml": "Machine Learning",
    "chip.entre": "Entrepreneurship", "chip.captain": "Team Leadership", "chip.pitch": "Pitching",
    "chip.vol": "Volunteering", "chip.impact": "Social Impact",
    "tahweel.role": "AI Engineer · Remote",
    "tahweel.desc": "I integrated AI features into fintech services and led the development of “Tahweel Boy”, the company’s English/Arabic AI assistant, owning it end to end from the rule architecture to the knowledge base.",
    "prodrom.role": "AI Intern · Fırat Technopark",
    "prodrom.desc": "I built a cybersecurity assistant that summarizes, classifies and prioritizes CVE vulnerability records using LLMs and RAG. I also developed <strong>TSI – Test Your Idea</strong>, an idea validation platform powered by 5 expert CrewAI agents; parallel execution brought analysis time down to ~25 seconds.",
    "tekno.title": "TEKNOFEST Smart Road Safety with 5G &amp; AI",
    "tekno.role": "FifthWave Team · Computer Vision",
    "tekno.desc": "I built the module that detects driver behavior from video (phone use, smoking, seat belt) with YOLOv11, and handled data collection, cleaning and augmentation. Our preliminary design report scored <strong>91.33</strong>.",
    "idea.title": "PropTech &amp; Advanced Data Analytics Ideathon",
    "idea.role": "TriMind Team · Emlak Konut GYO, Ankara",
    "idea.desc": "A 12-hour sprint on AI-powered real estate solutions. We pitched our project to the jury at the Ankara final and learned that an idea isn’t finished until it’s tested with real users.",
    "abs.role": "Software Engineering Intern · EV Charger Project",
    "abs.desc": "On an electric vehicle charging project I built both the frontend and the backend with React, Node.js and MongoDB. Owning real work on a live project gave me hands-on practice in code optimization and task management.",
    "tubitak.title": "AI-Powered Earthquake Relief Platform",
    "tubitak.role": "TÜBİTAK 2209-A · Project Lead",
    "tubitak.desc": "A web platform built on AI and machine learning that coordinates post-earthquake relief efforts. I led the project from proposal to delivery.",
    "dv.title": "Digital Vision: AI and Digital Transformation",
    "dv.role": "Fırat University MIS Club · ÜNİDES",
    "dv.desc": "5 weeks, 40 hours: AI fundamentals, data analytics and business intelligence, AI in finance and accounting, digital transformation and RPA. The program wrapped up with a hands-on hackathon.",
    "pq.text": "“We made the top 17 out of 179 applications.”",
    "pq.src": "— Gen-U Demo Day, Nov 2024",
    "genu.title": "Young Entrepreneurs Idea Marathon &amp; Gen-U Demo Day",
    "genu.role": "Team Captain · Habitat Association &amp; UNICEF Türkiye",
    "genu.desc": "After months of training and hard work, our project Mindigo made it to the final. For two days in Ankara we pitched to the jury and refined our idea one-on-one with mentors.",
    "unv.title": "United Nations Volunteers (UNV)",
    "unv.role": "Online Volunteer",
    "unv.desc": "I aim to bring my knowledge of AI and technology to projects that create social impact.",
    "firat.title": "Fırat University",
    "firat.role": "Faculty of Engineering · Software Engineering · 4th Year",
    "firat.desc": "I learned to write code in class, and to build things in the projects I took on with my professors.",
    "p1.title": "Crypto Price Prediction Platform",
    "p1.desc": "A web platform that visualizes predictions from XGBoost, LightGBM and Random Forest ensemble models. I built the backend with FastAPI and the interface with React and TypeScript.",
    "p2.title": "Library Management System",
    "p2.desc": "A library management system built with object-oriented programming.",
    "p3.title": "School Entrance System",
    "p4.title": "EV Charging Management System",
    "p5.title": "Smart Access System",
    "card.code": "View code ↗", "card.github": "All projects on GitHub",
    "lang.ar": "Arabic", "lang.tr": "Turkish", "lang.en": "English",
    "lvl.native": "Native", "lvl.c2": "C2 · Proficient", "lvl.b2": "B2 · Upper-intermediate",
    "c1.title": "Data Analysis School", "c1.detail": "“AI and Machine Learning” module", "c1.issuer": "YÖK · METU · ITU · Boğaziçi",
    "c3.title": "Project Writing Training", "c3.detail": "Idea generation, development and project writing tools",
    "cert.view": "View certificate ↗",
    "c5.title": "Python Programming Language",
    "outro.kicker": "Last word",
    "outro.title": "Just say<br/><em>hello.</em>",
    "outro.classic": "Back to the classic design →",
  },

};

const LOCALE = { tr: "tr-TR", en: "en-US" };
let lang = "tr";

const fmt = (el, v) => {
  const d = +(el.dataset.decimals || 0);
  el.textContent = v.toLocaleString(LOCALE[lang], { minimumFractionDigits: d, maximumFractionDigits: d });
};

// Türkçe orijinalleri sakla
const nodes = document.querySelectorAll("[data-i18n]");
nodes.forEach((el) => { el.dataset.tr = el.innerHTML; });

function applyLang(next) {
  lang = I18N[next] ? next : "tr";
  const dict = I18N[lang] || {};
  nodes.forEach((el) => {
    el.innerHTML = dict[el.dataset.i18n] ?? el.dataset.tr;
  });
  const root = document.documentElement;
  root.lang = lang;
  document.title = dict.title || "Layan Bassout | Portfolyo";
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.lang === lang);
  });
  // sayımı bitmiş rakamları yeni dile göre biçimlendir
  document.querySelectorAll("[data-count][data-done]").forEach((el) => fmt(el, parseFloat(el.dataset.count)));
  try { localStorage.setItem("lang-yeni", lang); } catch (e) {}
}

document.querySelectorAll(".lang-switch button").forEach((b) => {
  b.addEventListener("click", () => applyLang(b.dataset.lang));
});

// ?lang=en ile açılırsa o dil gelsin; yoksa son seçim
let initial = new URLSearchParams(location.search).get("lang");
if (!initial) { try { initial = localStorage.getItem("lang-yeni"); } catch (e) {} }
applyLang(initial || "tr");

// ============ KAYDIRDIKÇA BELİRME + SAYAÇLAR ============
const countUp = (el) => {
  const target = parseFloat(el.dataset.count);
  const start = performance.now();
  const dur = 1400;
  const tick = (now) => {
    const t = Math.min((now - start) / dur, 1);
    fmt(el, target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
    else el.dataset.done = "1";
  };
  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      e.target.querySelectorAll("[data-count]").forEach(countUp);
      observer.unobserve(e.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ============ OKUMA İLERLEME ÇUBUĞU ============
const bar = document.querySelector(".progress");
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ============ TEMA ============
document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme-yeni", next); } catch (e) {}
});
