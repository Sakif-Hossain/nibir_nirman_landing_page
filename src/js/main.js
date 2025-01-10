"use strict";

// ============================
// Navbar Functionality
// ============================
let lastScroll = 0;
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

// ============================
// Mobile Menu
// ============================
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
});

closeMenu?.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
});

// ============================
// Carousel Functionality
// ============================
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");
let currentSlide = 0;
let slideInterval;

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

// Initialize carousel if elements exist
if (slides.length > 0 && dots.length > 0) {
  showSlide(0);
  slideInterval = setInterval(nextSlide, 5000);

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
      // Reset interval when manually changing slides
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });
}

// ============================
// Animation Observers
// ============================
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

// Slide-up animations
const slideUpObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Fade-in animations
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      fadeObserver.unobserve(entry.target); // Stop observing once animation is triggered
    }
  });
}, observerOptions);

// ============================
// Leader Section
// ============================
function showCard(cardNumber) {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");

  if (card1 && card2) {
    card1.classList.toggle("block", cardNumber === 1);
    card1.classList.toggle("hidden", cardNumber !== 1);
    card2.classList.toggle("block", cardNumber === 2);
    card2.classList.toggle("hidden", cardNumber !== 2);
  }
}

// ============================
// Initialize Observers
// ============================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize slide-up animations
  const slideUpElements = document.querySelectorAll(".slide-up");
  slideUpElements.forEach((element) => {
    slideUpObserver.observe(element);
  });

  // Initialize fade-in animations
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((element) => {
    fadeObserver.observe(element);
  });
});
