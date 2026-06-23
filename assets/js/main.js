
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.toLowerCase() === current) a.classList.add('active');
  });
  document.querySelectorAll('[data-filter-target]').forEach(group => {
    const buttons = group.querySelectorAll('.filter-btn');
    const targetSelector = group.getAttribute('data-filter-target');
    const items = document.querySelectorAll(targetSelector);
    buttons.forEach(btn => btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.type === filter;
        item.style.display = show ? '' : 'none';
      });
    }));
  });
})();
