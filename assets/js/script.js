function app() {
  return {
    dark: false,
    mm: false,
    sc: false,
    s: 'hero',

    init() {
      // dark mode
      this.dark = localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.$watch('dark', v => localStorage.setItem('theme', v ? 'dark' : 'light'));

      // scroll
      window.addEventListener('scroll', () => {
        this.sc = window.scrollY > 20;
        this.updateSection();
      }, { passive: true });

      // reveal
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));

      // year
      document.getElementById('yr').textContent = new Date().getFullYear();
    },

    updateSection() {
      const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 60;
      if (atBottom) { this.s = 'contact'; return; }
      const ids = ['contact','blog','reviews','about','work','services','hero'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) { this.s = id; return; }
      }
    }
  }
}

// contact form
function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const button = document.getElementById('contact-submit');
  const status = document.getElementById('contact-status');

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  button.disabled = true;
  button.textContent = 'Sending...';

  status.className = 'text-xs text-center text-zinc-400';
  status.textContent = 'Sending your message...';

  form.submit();
}

function handleContactResponse() {
  const form = document.querySelector('form[action*="script.google.com"]');
  const button = document.getElementById('contact-submit');
  const status = document.getElementById('contact-status');

  if (!form || !button || !status) {
    return;
  }

  if (button.textContent !== 'Sending...') {
    return;
  }

  status.className = 'text-xs text-center text-green-400';
  status.textContent = 'Message sent successfully. Thanks for reaching out!';

  form.reset();

  button.disabled = false;
  button.textContent = 'Send message →';
}

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