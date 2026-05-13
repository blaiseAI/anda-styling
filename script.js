(() => {
  const els = document.querySelectorAll('.fade');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = Number(el.dataset.delay || 0);
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add('in');
      io.unobserve(el);
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));

  document.querySelectorAll('.svc-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      opt.classList.toggle('checked');
    });
  });
})();
