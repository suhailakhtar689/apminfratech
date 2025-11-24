// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Auto close navbar on mobile after click
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  });
});

// Fade-in on Scroll
function checkFade() {
  const fadeElements = document.querySelectorAll(
    ".fade-element, .fade-left, .fade-right"
  );

  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Element is in viewport
    if (elementTop < windowHeight - 100 && elementBottom > 100) {
      element.classList.add("fade-in");
    } else {
      // Remove fade-in when scrolling out of view (for re-animation)
      element.classList.remove("fade-in");
    }
  });
}

// Run on page load
window.addEventListener("load", () => {
  checkFade();
});

// Run on scroll
window.addEventListener("scroll", () => {
  checkFade();
});

// Tab Functionality
function openTab(tabName) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  contents.forEach((content) => content.classList.remove("active"));
  buttons.forEach((button) => button.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
  event.target.closest(".tab-btn").classList.add("active");
}

// Team Carousel Functionality
let currentTeamIndex = 0;
const teamWrapper = document.getElementById("teamCarouselWrapper");
const teamSlides = document.querySelectorAll(".team-slide");
const teamDots = document.querySelectorAll(".team-dot");

function updateTeamCarousel() {
  const offset = -currentTeamIndex * 100;
  teamWrapper.style.transform = `translateX(${offset}%)`;

  teamDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentTeamIndex);
  });
}

function changeTeamSlide(direction) {
  currentTeamIndex += direction;

  if (currentTeamIndex < 0) {
    currentTeamIndex = teamSlides.length - 1;
  } else if (currentTeamIndex >= teamSlides.length) {
    currentTeamIndex = 0;
  }

  updateTeamCarousel();
}

function goToTeamSlide(index) {
  currentTeamIndex = index;
  updateTeamCarousel();
}

// Auto slide team carousel every 5 seconds
setInterval(() => {
  changeTeamSlide(1);
}, 5000);

// our service

// Carousel script to handle fade transition and dot controls
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dots .dot");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 7000);

function goToSlide(n) {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  dots[currentSlide].setAttribute("aria-selected", "false");
  dots[currentSlide].tabIndex = -1;

  currentSlide = (n + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
  dots[currentSlide].setAttribute("aria-selected", "true");
  dots[currentSlide].tabIndex = 0;
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(slideInterval);
    goToSlide(index);
    slideInterval = setInterval(nextSlide, 7000);
  });
  dot.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goToSlide((currentSlide + 1) % slides.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToSlide((currentSlide - 1 + slides.length) % slides.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToSlide(index);
    }
  });
});

// Automatically slide every 5 seconds (5000 ms)
setInterval(() => {
  const nextButton = document.querySelector(".carousel-arrow.next");
  if (nextButton) {
    nextButton.click();
  }
}, 5000);

const track = document.querySelector(".carousel-track");
const cards = Array.from(track.children);
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = cards[0].getBoundingClientRect().width + 30; // width + gap

  // animate translate to show proper cards
  track.style.transform = "translateX(" + -cardWidth * currentIndex + "px)";

  // Update active card
  cards.forEach((card, idx) => {
    card.classList.toggle("active", idx === currentIndex);
  });
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);

updateCarousel();

/* ---------------------------
   CERTIFICATIONS (ICONS)
---------------------------- */
const certifications = [
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/2-1.png",
  },
  {
    name: "",
    image:
      "https://apminfratech.com/wp-content/uploads/2023/10/startup-india.png",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/GST.jpg",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/MSME.jpg",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/1-1.png",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/2-1.png",
  },
];

/* ---------------------------
   CLIENTS (IMAGES)
---------------------------- */
const clients = [
  {
    name: "",
    image:
      "https://apminfratech.com/wp-content/uploads/2023/10/client-logo.jpeg",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/7.png",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/4.png",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/5.png",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/6.png",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/3.png",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/1.png",
  },
  {
    name: "",
    image: "https://apminfratech.com/wp-content/uploads/2023/10/2.png",
  },
];

/* ---------------------------
   GENERATE CERTIFICATION CARDS
---------------------------- */
function createCertificationCards() {
  const track = document.getElementById("certTrack");

  track.innerHTML = certifications
    .map(
      (item) => `
        <div class="carousel-card">

            <div class="card-img-box">
                ${
                  item.image
                    ? `<img src="${item.image}" alt="${item.name}">`
                    : `<div class="card-icon">${item.icon}</div>`
                }
            </div>

            <div class="card-name">${item.name}</div>
        </div>
    `
    )
    .join("");
}

/* ---------------------------
   GENERATE CLIENT CARDS (IMG)
---------------------------- */
function createClientCards() {
  const track = document.getElementById("clientTrack");
  track.innerHTML = clients
    .map(
      (item) => `
        <div class="carousel-card">
            <div class="card-img-box">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="card-name">${item.name}</div>
        </div>
    `
    )
    .join("");
}

/* ---------------------------
   DOTS GENERATOR
---------------------------- */
function createDots(count, dotsId, clickHandler) {
  const dotsContainer = document.getElementById(dotsId);
  dotsContainer.innerHTML = Array(count)
    .fill(0)
    .map(
      (_, i) =>
        `<button class="dot ${
          i === 0 ? "active" : ""
        }" onclick="${clickHandler}(${i})"></button>`
    )
    .join("");
}

/* ---------------------------
   SLIDER FUNCTIONS
---------------------------- */
let certIndex = 0;
let clientIndex = 0;

function updateTrack(index, trackId, items) {
  const track = document.getElementById(trackId);
  const card = track.querySelector(".carousel-card");
  const cardWidth = card.offsetWidth + 24;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function updateDots(index, dotsId, count) {
  const dots = document.getElementById(dotsId).querySelectorAll(".dot");
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

/* ---------------------------
   MOVE FUNCTIONS
---------------------------- */
function moveCert(direction) {
  certIndex =
    (certIndex + direction + certifications.length) % certifications.length;
  updateTrack(certIndex, "certTrack", certifications);
  updateDots(certIndex, "certDots", certifications.length);
}

function moveClient(direction) {
  clientIndex = (clientIndex + direction + clients.length) % clients.length;
  updateTrack(clientIndex, "clientTrack", clients);
  updateDots(clientIndex, "clientDots", clients.length);
}

function gotoCert(i) {
  certIndex = i;
  updateTrack(certIndex, "certTrack", certifications);
  updateDots(certIndex, "certDots", certifications.length);
}

function gotoClient(i) {
  clientIndex = i;
  updateTrack(clientIndex, "clientTrack", clients);
  updateDots(clientIndex, "clientDots", clients.length);
}

/* ---------------------------
   AUTO-PLAY
---------------------------- */
setInterval(() => moveCert(1), 5000);
setInterval(() => moveClient(1), 5500);

/* ---------------------------
   INITIALIZE
---------------------------- */
createCertificationCards();
createClientCards();
createDots(certifications.length, "certDots", "gotoCert");
createDots(clients.length, "clientDots", "gotoClient");

// captcha section
let generatedCode = "";

function generateCaptcha() {
  generatedCode = Math.floor(10000 + Math.random() * 90000); // 5 digit captcha
  document.getElementById("captchaImage").innerText = generatedCode;
}

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    let userValue = document.getElementById("captchaInput").value;

    if (userValue != generatedCode) {
      e.preventDefault();
      alert("Wrong Captcha! Please try again.");
      generateCaptcha();
    }
  });

generateCaptcha();

document.querySelectorAll(".dropdown-toggle").forEach((item) => {
  item.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    }
  });
});

document.querySelectorAll(".nav-item.dropdown > a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();

      // Remove open from others
      document.querySelectorAll(".dropdown").forEach((d) => {
        if (d !== this.parentElement) d.classList.remove("open");
      });

      // Toggle on current
      this.parentElement.classList.toggle("open");
    }
  });
});

const faders = document.querySelectorAll(".fade-left, .fade-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach((el) => observer.observe(el));
