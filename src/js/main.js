"use strict";

// Navbar Hide/Show on Scroll
let lastScroll = 0;
const heroSection = document.getElementById("hero");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.transform = "translateY(0)";
    return;
  }

  if (currentScroll > lastScroll && !navbar.contains(document.activeElement)) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
});

// Carousel
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => (slide.style.opacity = "0"));
  dots.forEach((dot) => (dot.style.opacity = "0.5"));

  slides[index].style.opacity = "1";
  dots[index].style.opacity = "1";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initialize carousel
showSlide(0);
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Add click events to dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Intersection Observer for slide-up animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all slide-up elements
document.querySelectorAll(".slide-up").forEach((element) => {
  observer.observe(element);
});

// Leader Section JS
function showCard(cardNumber) {
  document.getElementById("card1").classList.toggle("block", cardNumber === 1);
  document.getElementById("card1").classList.toggle("hidden", cardNumber !== 1);
  document.getElementById("card2").classList.toggle("block", cardNumber === 2);
  document.getElementById("card2").classList.toggle("hidden", cardNumber !== 2);
}
