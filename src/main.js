// main.js
import './style.css';
import { homePage } from './homePage.js';

document.querySelector('#app').innerHTML = homePage;

// ---- THEME: dark par défaut + toggle + persistence ----
(function initTheme() {
  const STORAGE_KEY = 'portfolio-theme';
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefer =
    saved ||
    // si aucune préférence, on force "dark" par défaut
    'dark';

  document.documentElement.setAttribute('data-theme', prefer);

  const toggleBtn = document.querySelector('.theme-toggle');
  const setIcon = (theme) => {
    // Classes utilitaires pour l’icône
    toggleBtn.classList.toggle('is-dark', theme === 'dark');
    toggleBtn.classList.toggle('is-light', theme === 'light');
  };
  setIcon(prefer);

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', current);
    localStorage.setItem(STORAGE_KEY, current);
    setIcon(current);
  });
})();

// ---- NAV mobile + animations / observer + carrousel + formulaire ----
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(10px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    }
  });

  navMenu.querySelectorAll('a, .theme-toggle').forEach(el => {
    el.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.project-card, .skill-category, .service-card').forEach(el => observer.observe(el));

  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn-prev');
  const nextBtn = document.querySelector('.carousel-btn-next');
  const cards = Array.from(document.querySelectorAll('.project-card'));
  let currentIndex = 0;
  const cardWidth = 280;
  const gap = 32;
  const moveDistance = cardWidth + gap;
  const updateCarousel = () => { track.style.transform = `translateX(${-currentIndex * moveDistance}px)`; };

  nextBtn.addEventListener('click', () => { if (currentIndex < cards.length - 3) { currentIndex++; updateCarousel(); } });
  prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateCarousel(); } });

  let touchStartX = 0;
  let touchEndX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
  track.addEventListener('touchend', (e) => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); });
  function handleSwipe() {
    if (touchStartX - touchEndX > 50 && currentIndex < cards.length - 1) { currentIndex++; updateCarousel(); }
    if (touchEndX - touchStartX > 50 && currentIndex > 0) { currentIndex--; updateCarousel(); }
  }

  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé avec succès !');
    form.reset();
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
