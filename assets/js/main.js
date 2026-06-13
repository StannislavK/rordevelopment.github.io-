// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// Contact form — Formspree
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="ti ti-loader"></i> Sending...';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        btn.innerHTML = '<i class="ti ti-check"></i> Sent!';
        form.reset();
        setTimeout(() => { btn.innerHTML = originalText; btn.disabled = false; }, 3000);
      } else {
        throw new Error();
      }
    } catch {
      btn.innerHTML = originalText;
      btn.disabled = false;
      alert('Something went wrong. Please try again or contact us directly.');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
