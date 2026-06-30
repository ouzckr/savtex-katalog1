(() => {
  "use strict";

  const products = {
    vehicle: {
      eyebrow: "ARAÇ ISI YÖNETİMİ",
      title: "Araç ısı izolasyon ceketleri",
      intro: "Motor bölmesi, turbo, egzoz hattı ve susturucu gibi yüksek sıcaklığa maruz kalan parçalara özel olarak üretilir. Isının kaynak bölgesinde tutulmasına ve çevredeki bileşenlerin korunmasına yardımcı olur.",
      image: "assets/generated-engine-insulation.png",
      alt: "Araç motor bölmesi ısı izolasyonu",
      features: ["Parçaya özel ölçü ve formda üretim", "Radyant ısı yayılımının azaltılmasına katkı", "Kablo ve hassas çevre bileşenleri için koruma", "Bakım için sökülüp yeniden takılabilen yapı", "Zorlu çalışma koşullarına uygun malzeme seçenekleri"]
    },
    ev: {
      eyebrow: "ELEKTRİKLİ ARAÇ ÇÖZÜMLERİ",
      title: "Batarya ve güç elektroniği koruması",
      intro: "Elektrikli araçlardaki batarya, yüksek gerilim kabloları ve güç elektroniği bileşenleri için uygulamaya özel tekstil kompozit koruma ürünleri.",
      image: "assets/generated-ev-thermal.png",
      alt: "Elektrikli araç termal koruma sistemi",
      features: ["Batarya ve akü koruma kılıfları", "Batarya modülleri için termal bariyerler", "Alev ilerlemesini geciktirmeye yönelik ceketler", "Yüksek gerilim kabloları için koruyucu kılıflar", "Motor, inverter ve güç elektroniği ısı kalkanları"]
    },
    industrial: {
      eyebrow: "ENDÜSTRİYEL İZOLASYON",
      title: "Vana ve ekipman ceketleri",
      intro: "Enerji kayıplarının azaltılmasına, çalışan güvenliğinin desteklenmesine ve bakım erişiminin kolaylaştırılmasına yönelik özel ölçülü izolasyon ceketleri.",
      image: "assets/generated-valve.png",
      alt: "Vana izolasyon ceketi",
      features: ["Sökülebilir vana ve flanş ceketleri", "Isıtıcı kablo entegreli vana ceketleri", "Kimyasal ortama uygun dış katman seçenekleri", "Boru, eşanjör, kazan ve proses ekipmanı izolasyonu", "Ölçüye özel tekstil katmanlı yapı"]
    },
    turbine: {
      eyebrow: "ENERJİ TESİSLERİ",
      title: "Türbin izolasyonları",
      intro: "Türbinler ve bağlantılı sıcak yüzeyler için ısı kaybını sınırlamaya ve bakım erişimini korumaya yardımcı olan sökülebilir, katmanlı izolasyon sistemleri.",
      image: "assets/generated-turbine.png",
      alt: "Türbin izolasyon sistemi",
      features: ["Sıcak yüzey geometrisine özel tasarım", "Enerji kaybının azaltılmasına katkı", "Çalışan güvenliğini destekleyen yüzey koruması", "Servis işlemleri için sökülebilir yapı", "Uygulamaya göre dış yüzey ve katman seçimi"]
    },
    tank: {
      eyebrow: "TANK VE PROSES ISITMA",
      title: "Tank ve proses ısıtma ceketleri",
      intro: "İçeriğin sıcaklığının korunması, donma riskinin azaltılması ve proses koşullarının desteklenmesi amacıyla uygulamaya özel hazırlanır.",
      image: "assets/ibc.jpg",
      alt: "IBC tank ısıtıcı ceketi",
      features: ["IBC tank izolasyon ve ısıtıcı ceketleri", "Varil izolasyon ve ısıtma ürünleri", "Isıtıcı kablo entegreli çözümler", "Kimyasal tank ve özel proses ekipmanları", "Kolay sökme, takma ve bakım erişimi"]
    },
    compensator: {
      eyebrow: "BEZ KOMPANSATÖRLER",
      title: "Kumaş katmanlı genleşme elemanları",
      intro: "Çalışma koşulları ve uygulama gereksinimleri doğrultusunda; ısı, basınç ve kimyasal dayanım ihtiyaçlarına göre özel olarak tasarlanır.",
      image: "assets/comp-round.jpg",
      alt: "Yuvarlak bez kompansatör",
      features: ["Yuvarlak, dikdörtgen ve özel ölçülü tasarım", "Uygulamaya özel kumaş ve katman seçimi", "Yüksek sıcaklık koşullarına uygun yapı", "Titreşim ve termal genleşmenin karşılanması", "Sisteme uygun bağlantı ve montaj seçenekleri"]
    },
    cable: {
      eyebrow: "KABLO KORUMA KILIFLARI",
      title: "Isı ve mekanik etkilere karşı kablo koruması",
      intro: "Motor ve egzoz bölgelerindeki kablo demetlerini ısı, aşınma, sıvı ve dış etkenlere karşı korumaya yardımcı olan esnek ve sökülebilir çözümler.",
      image: "assets/cable-application-v2.png",
      alt: "Araç üzerinde kablo koruma kılıfı",
      features: ["Uygun malzeme seçimiyle 1000°C’ye kadar seçenekler", "Aşınma ve yırtılma direnci", "Dar alanlara uyum sağlayan esnek yapı", "Çıtçıtlı hızlı montaj ve söküm", "Çap, uzunluk ve branşmana göre özel üretim"]
    },
    custom: {
      eyebrow: "ÖZEL MÜHENDİSLİK",
      title: "Ölçüye özel kompozit ürünler",
      intro: "Standart ürünlerin yeterli olmadığı geometri ve çalışma koşulları için teknik veriye dayalı tekstil katmanlı kompozit çözümler geliştiriyoruz.",
      image: "assets/generated-industrial-grid.png",
      alt: "Özel ölçülü endüstriyel izolasyon ürünleri",
      features: ["Ölçü, fotoğraf ve teknik veriyle uzaktan tasarım", "CAD destekli ürün geliştirme", "Koşula özel malzeme ve katman yapısı", "ERP ile izlenebilir üretim süreci", "Ara kontrol ve son ürün kalite değerlendirmesi"]
    }
  };

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const backToTop = document.querySelector("[data-back-to-top]");
  const searchInput = document.querySelector("[data-search]");
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const productCards = [...document.querySelectorAll("[data-category]")];
  const resultCount = document.querySelector("[data-result-count]");
  const emptyState = document.querySelector("[data-empty]");
  const resetSearch = document.querySelector("[data-reset-search]");
  const dialog = document.querySelector("[data-dialog]");
  let activeFilter = "all";

  const normalize = (value) => value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i");

  const setMenu = (open) => {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  menuToggle?.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

  const applyFilters = () => {
    const query = normalize(searchInput?.value.trim() || "");
    let visible = 0;

    productCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const categoryMatch = activeFilter === "all" || categories.includes(activeFilter);
      const searchMatch = !query || normalize(card.dataset.searchable).includes(query) || normalize(card.textContent).includes(query);
      const show = categoryMatch && searchMatch;
      card.classList.toggle("is-hidden", !show);
      card.setAttribute("aria-hidden", String(!show));
      if (show) visible += 1;
    });

    resultCount.textContent = visible === 1 ? "1 ürün grubu gösteriliyor" : `${visible} ürün grubu gösteriliyor`;
    emptyState.hidden = visible !== 0;
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      applyFilters();
    });
  });
  searchInput?.addEventListener("input", applyFilters);
  searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.value = "";
      applyFilters();
      searchInput.blur();
    }
  });
  resetSearch?.addEventListener("click", () => {
    activeFilter = "all";
    searchInput.value = "";
    filterButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.filter === "all"));
    applyFilters();
    searchInput.focus();
  });

  const openProduct = (key) => {
    const product = products[key];
    if (!product || !dialog) return;
    dialog.querySelector("[data-dialog-eyebrow]").textContent = product.eyebrow;
    dialog.querySelector("[data-dialog-title]").textContent = product.title;
    dialog.querySelector("[data-dialog-intro]").textContent = product.intro;
    const image = dialog.querySelector("[data-dialog-image]");
    image.src = product.image;
    image.alt = product.alt;
    dialog.querySelector("[data-dialog-features]").innerHTML = product.features.map((feature) => `<li>${feature}</li>`).join("");
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };

  document.querySelectorAll("[data-product]").forEach((button) => button.addEventListener("click", () => openProduct(button.dataset.product)));
  document.querySelector("[data-dialog-close]")?.addEventListener("click", () => dialog.close());
  document.querySelector("[data-dialog-contact]")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
    if (outside) dialog.close();
  });

  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle("is-scrolled", y > 24);
    backToTop?.classList.toggle("is-visible", y > 650);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const revealElements = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: "0px 0px -40px" });
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-revealed"));
  }

  const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-30% 0px -60%", threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
