// Case Study Script
document.getElementById("yr").textContent = new Date().getFullYear();

// Reveal on scroll
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

// Back to top
function initBackToTop() {
  if (document.getElementById('back-to-top')) {
    return;
  }

  const button = document.createElement('button');

  button.id = 'back-to-top';
  button.type = 'button';
  button.setAttribute('aria-label', 'Back to top');
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
    </svg>`;

  document.body.appendChild(button);

  const updateBackToTop = () => {
    button.classList.toggle('is-visible', window.scrollY > 500);
  };

  window.addEventListener('scroll', updateBackToTop, { passive: true });

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  updateBackToTop();
}

document.addEventListener('DOMContentLoaded', initBackToTop);