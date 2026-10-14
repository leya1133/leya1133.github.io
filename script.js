// Kartlar ekrana girince yumuşakça belirsin
const stops = document.querySelectorAll(".stop");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

stops.forEach((stop) => observer.observe(stop));

// Fotoğraf henüz yoksa yer tutucu göster
document.querySelectorAll(".stop-photo img").forEach((img) => {
  const markEmpty = () => {
    const box = img.parentElement;
    if (!box) return;
    img.remove();
    box.classList.add("empty");
  };
  img.addEventListener("error", markEmpty);
  if (img.complete && img.naturalWidth === 0) markEmpty();
});

// ---------- AÇIK / KOYU TEMA ----------
const themeBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const light = theme === "light";
  themeBtn.textContent = light ? "🌙" : "☀️";
  themeBtn.setAttribute("aria-label", light ? "Koyu temaya geç" : "Açık temaya geç");
}

applyTheme(document.documentElement.dataset.theme || "dark");

themeBtn.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// ---------- DİL (TR / EN) ----------
// Sayfadaki Türkçe metin -> İngilizce karşılığı. Sözlükte olmayan metin olduğu gibi kalır.
const EN = {
  "Merhaba, ben": "Hi, I'm",
  "Yazılım Mühendisliği 4. sınıf öğrencisi": "4th-year Software Engineering student",
  "“Zekâ, değişime uyum sağlama yeteneğidir.”": "“Intelligence is the ability to adapt to change.”",
  "Yolculuğuma göz at ↓": "Explore my journey ↓",

  // kart etiketleri ve tarihler
  "Yarışma": "Competition",
  "Staj": "Internship",
  "Proje": "Project",
  "Eğitim": "Training",
  "İş": "Work",
  "Gönüllü": "Volunteer",
  "Halen": "Present",
  "Temmuz – Ağustos 2026": "July – August 2026",
  "Temmuz – Ağustos 2025": "July – August 2025",
  "Kasım 2024": "November 2024",
  "Şubat – Eylül 2026": "February – September 2026",
  "Mayıs – Haziran 2025": "May – June 2025",
  "Nisan 2026": "April 2026",
  "Ocak 2026": "January 2026",

  // teknoloji / beceri etiketleri
  "Bilgisayarlı Görü": "Computer Vision",
  "Veri Artırma": "Data Augmentation",
  "Yapay Zekâ": "AI",
  "Makine Öğrenmesi": "Machine Learning",
  "Girişimcilik": "Entrepreneurship",
  "Takım Kaptanlığı": "Team Leadership",
  "Sunum": "Pitching",
  "Prompt Mühendisliği": "Prompt Engineering",
  "Konuşma Kuralları": "Conversation Design",
  "İngilizce / Arapça": "English / Arabic",
  "Veri Analitiği": "Data Analytics",
  "İş Zekâsı": "Business Intelligence",
  "Gönüllülük": "Volunteering",
  "Sosyal Etki": "Social Impact",

  // Fırat Üniversitesi
  "Fırat Üniversitesi": "Fırat University",
  "Mühendislik Fakültesi · Yazılım Mühendisliği · 4. Sınıf": "Faculty of Engineering · Software Engineering · 4th Year",
  "Kod yazmayı derslerde öğrendim, üretmeyi ise hocalarımla birlikte imza attığım projelerde.":
    "I learned to code in class, and learned to build through the projects I created alongside my professors.",

  // TEKNOFEST
  "TEKNOFEST 5G &amp; Yapay Zekâ ile Akıllı Yol Güvenliği": "TEKNOFEST Smart Road Safety with 5G &amp; AI",
  "FifthWave Takımı · Bilgisayarlı Görü": "FifthWave Team · Computer Vision",
  "TEKNOFEST yolculuğumuzda yapay zekâ ve 5G’yi bir araya getirerek daha güvenli yollar için çalıştık. Videodan sürücü davranışlarını (telefon kullanımı, sigara, emniyet kemeri) tespit eden modülü YOLOv11 ile geliştirdim; veri toplama, temizleme ve artırma süreçlerini üstlendim.":
    "On our TEKNOFEST journey, we brought AI and 5G together to work toward safer roads. I built the module that detects driver behavior from video (phone use, smoking, seatbelt status) with YOLOv11, and handled data collection, cleaning and augmentation.",

  // Prodrom
  "Yapay Zekâ Stajyeri · Fırat Teknokent": "AI Intern · Fırat Technopark",
  "CVE güvenlik açığı kayıtlarını LLM ve RAG ile özetleyen, sınıflandıran ve önceliklendiren bir siber güvenlik asistanı geliştirdim. Ayrıca 5 uzman CrewAI ajanıyla çalışan fikir doğrulama platformu <strong>TSI – Test Your Idea</strong>’yı geliştirdim; paralel çalıştırmayla analiz süresini ~25 saniyeye indirdim, sonuçları Chart.js panoları ve otomatik PDF raporlarıyla sundum.":
    "I developed a cybersecurity assistant that summarizes, classifies and prioritizes CVE vulnerability records using LLMs and RAG. I also built <strong>TSI – Test Your Idea</strong>, an idea-validation platform powered by 5 expert CrewAI agents; parallel execution cut analysis time to ~25 seconds, with results delivered through Chart.js dashboards and automated PDF reports.",

  // AppBerrySoft
  "Yazılım Mühendisliği Stajyeri · EV Charger Projesi": "Software Engineering Intern · EV Charger Project",
  "Elektrikli araç şarj projesinde React, Node.js ve MongoDB ile hem ön yüz hem arka uç geliştirdim. Gerçek bir projede sorumluluk alarak kod optimizasyonu ve görev yönetimi üzerine pratik kazandım.":
    "I developed both the front end and back end of an electric vehicle charging project with React, Node.js and MongoDB. Taking on real responsibility in a live project sharpened my code optimization and task management skills.",

  // TÜBİTAK
  "Yapay Zekâ Destekli Deprem Yardım Platformu": "AI-Powered Earthquake Relief Platform",
  "TÜBİTAK 2209-A · Proje Lideri": "TÜBİTAK 2209-A · Project Lead",
  "Deprem sonrası yardım çalışmalarını koordine eden, yapay zekâ ve makine öğrenmesi tabanlı bir web platformu. Projeyi öneri aşamasından teslimata kadar yönettim.":
    "An AI and machine learning–based web platform that coordinates post-earthquake relief efforts. I led the project from proposal to delivery.",

  // Gen-U
  "Genç Girişimciler Fikir Maratonu &amp; Gen-U Demo Day": "Young Entrepreneurs Idea Marathon &amp; Gen-U Demo Day",
  "Takım Kaptanı · Habitat Derneği &amp; UNICEF Türkiye": "Team Captain · Habitat Association &amp; UNICEF Türkiye",
  "Aylar süren eğitim ve çalışma serüveninin sonunda Mindigo projemizle 179 başvuru arasından ilk 17 takıma girdik. Ankara’da iki gün boyunca projemizi jüriye sunduk, mentorlarla birebir çalışarak fikrimizi geliştirdik.":
    "After months of training and hard work, our project Mindigo made it into the top 17 teams out of 179 applicants. Over two days in Ankara, we pitched to the jury and refined our idea in one-on-one sessions with mentors.",

  // Tahweel
  "Yapay Zekâ Mühendisi · Uzaktan": "AI Engineer · Remote",
  "Fintech hizmetlerine yapay zekâ özellikleri entegre ettim ve şirketin İngilizce/Arapça yapay zekâ asistanı “Tahweel Boy”un geliştirilmesine liderlik ettim; kural mimarisinden bilgi tabanına kadar uçtan uca sorumluluk aldım.":
    "I integrated AI features into fintech services and led the development of “Tahweel Boy”, the company’s bilingual English/Arabic AI assistant, owning it end to end from rule architecture to knowledge base.",

  // Dijital Vizyon
  "Dijital Vizyon: Yapay Zekâ ve Dijital Dönüşüm": "Digital Vision: AI &amp; Digital Transformation",
  "Fırat Üniversitesi YBS Topluluğu · ÜNİDES": "Fırat University MIS Club · ÜNİDES",
  "5 hafta, 40 saat: yapay zekâ temelleri, veri analitiği ve iş zekâsı, finans ve muhasebede yapay zekâ, dijital dönüşüm ve RPA. Program, uygulamalı bir hackathon ile tamamlandı.":
    "5 weeks, 40 hours: AI fundamentals, data analytics and business intelligence, AI in finance and accounting, digital transformation and RPA. The program wrapped up with a hands-on hackathon.",

  // Ideathon
  "PropTech &amp; İleri Veri Analitiği Ideathonu": "PropTech &amp; Advanced Data Analytics Ideathon",
  "TriMind Takımı · Emlak Konut GYO, Ankara": "TriMind Team · Emlak Konut REIT, Ankara",
  "Gayrimenkulde yapay zekâ destekli çözümler üzerine 12 saatlik yoğun bir maraton. Ankara finalinde projemizi jüriye sunduk ve bir fikrin gerçek kullanıcıyla test edilmeden tamamlanmadığını öğrendik.":
    "A 12-hour sprint on AI-powered solutions for real estate. We presented our project to the jury at the Ankara final and learned that an idea isn’t finished until it’s tested with real users.",

  // UNV
  "Birleşmiş Milletler Gönüllüleri (UNV)": "United Nations Volunteers (UNV)",
  "Online Gönüllü": "Online Volunteer",
  "UNV programında gönüllü olarak yer alıyorum; yapay zekâ ve teknoloji alanındaki bilgimi sosyal etki yaratan projelere katmayı hedefliyorum.":
    "I volunteer with the UNV programme, aiming to bring my AI and technology skills to projects that create social impact.",

  "Yolculuk devam ediyor…": "The journey continues…",

  // Diller
  "Diller": "Languages",
  "Arapça": "Arabic",
  "Ana dil": "Native",
  "Türkçe": "Turkish",
  "C2 · İleri": "C2 · Proficient",
  "İngilizce": "English",
  "B2 · Orta-üstü": "B2 · Upper-intermediate",

  // Sertifikalar
  "Sertifikalar": "Certificates",
  "Veri Analizi Okulu": "Data Analysis School",
  "“Yapay Zekâ ve Makine Öğrenmesi” modülü": "“Artificial Intelligence and Machine Learning” module",
  "YÖK · ODTÜ · İTÜ · Boğaziçi Üniversitesi": "Council of Higher Education (YÖK) · METU · ITU · Boğaziçi University",
  "Proje Yazım Eğitimi": "Project Writing Training",
  "Fikir üretme, geliştirme ve proje yazım araçları": "Idea generation, development and project writing tools",
  "Belgeyi gör →": "View certificate →",
  "Python Programlama Dili": "Python Programming",

  // Okul projeleri
  "Okul Projeleri": "School Projects",
  "Okul Projesi": "School Project",
  "Kripto Para Fiyat Tahmin Platformu": "Cryptocurrency Price Prediction Platform",
  "XGBoost, LightGBM ve Random Forest topluluk (ensemble) modellerinin tahmin sonuçlarını görselleştiren bir web platformu. Backend’i FastAPI, arayüzü React ve TypeScript ile geliştirdim.":
    "A web platform that visualizes predictions from XGBoost, LightGBM and Random Forest ensemble models. I built the backend with FastAPI and the frontend with React and TypeScript.",
  "Elektrikli Araç Şarj Yönetim Sistemi": "EV Charging Management System",
  "Kütüphane Yönetim Sistemi": "Library Management System",
  "Nesne yönelimli programlama (OOP) ile geliştirilmiş kütüphane yönetim sistemi.": "A library management system built with object-oriented programming (OOP).",
  "Akıllı Erişim Sistemi": "Smart Access System",
  "Okul Giriş Sistemi": "School Entrance System",
  "Kodu gör →": "View code →",
  "Tüm projeler GitHub’da →": "All projects on GitHub →",

  // İletişim
  "İletişim": "Contact",
  "Bir proje, fırsat ya da sadece merhaba için bana ulaşabilirsin.": "Reach out about a project, an opportunity, or just to say hi.",
};

const TRANSLATABLE = [
  ".hero-tag", ".hero-sub", ".quote-text", ".hero-btn",
  ".stop-body h2", ".stop-body h3", ".stop-body p", ".stop-tag", ".stop-date", ".stop-tech li",
  ".road-end p", ".section-title", ".lang-head h3", ".lang-level",
  ".cert-year", ".cert-card h3", ".cert-detail", ".cert-issuer", ".cert-link",
  ".project-type", ".project-card h3", ".project-card p", ".github-link",
  ".contact h2", ".contact-sub",
].join(", ");

const norm = (s) => s.replace(/\s+/g, " ").trim();
const langBtn = document.getElementById("lang-toggle");
const translatable = document.querySelectorAll(TRANSLATABLE);
translatable.forEach((el) => { el.dataset.tr = el.innerHTML; });

function applyLang(lang) {
  const en = lang === "en";
  translatable.forEach((el) => {
    el.innerHTML = en ? (EN[norm(el.dataset.tr)] ?? el.dataset.tr) : el.dataset.tr;
  });
  document.documentElement.lang = en ? "en" : "tr";
  document.title = en ? "Layan Bassout | Portfolio" : "Layan Bassout | Portfolyo";
  langBtn.textContent = en ? "TR" : "EN";
  langBtn.setAttribute("aria-label", en ? "Türkçeye geç" : "Switch to English");
}

// ?lang=en ile açılırsa doğrudan İngilizce gelsin; yoksa son seçim hatırlansın
let lang = new URLSearchParams(location.search).get("lang");
if (lang !== "en" && lang !== "tr") {
  try { lang = localStorage.getItem("lang"); } catch (e) { lang = null; }
}
applyLang(lang === "en" ? "en" : "tr");

langBtn.addEventListener("click", () => {
  const next = document.documentElement.lang === "en" ? "tr" : "en";
  applyLang(next);
  try { localStorage.setItem("lang", next); } catch (e) {}
});
