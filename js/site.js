/* Navegação e filtros em JavaScript puro. Não requer bibliotecas ou build. */
(() => {
  'use strict';
  const words = ['designer gráfico...', 'UX/UI designer...', 'designer de marcas...', 'editor de vídeos...', 'motion designer...', 'ilustrador...'];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    document.querySelectorAll('[data-typewriter]').forEach(element => {
      let index = 0, deleting = true, text = words[0];
      const tick = () => {
        const target = words[index];
        text = deleting ? text.slice(0, -1) : target.slice(0, text.length + 1);
        element.textContent = text;
        let delay = 70;
        if (deleting && !text) { deleting = false; index = (index + 1) % words.length; delay = 150; }
        else if (!deleting && text === target) { deleting = true; delay = 1500; }
        window.setTimeout(tick, delay);
      };
      window.setTimeout(tick, 1500);
    });
  }
  const homeCards = [...document.querySelectorAll('.home-page [data-site-root] [data-category]')];
  if (homeCards.length && !prefersReducedMotion) {
    homeCards.forEach((card, index) => card.style.setProperty('--card-index', index % 6));
    document.body.classList.add('motion-ready');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -40px 0px', threshold: 0.12 });
      homeCards.forEach(card => observer.observe(card));
    } else {
      homeCards.forEach(card => card.classList.add('is-visible'));
    }
  }
  const menu = document.getElementById('site-menu');
  const toggles = document.querySelectorAll('.menu-toggle');
  const setMenu = (open) => {
    menu.hidden = !open;
    toggles.forEach(button => {
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    document.body.classList.toggle('menu-open', open);
    if (open) menu.querySelector('a').focus();
  };
  toggles.forEach(button => button.addEventListener('click', () => setMenu(menu.hidden)));
  menu.querySelector('.menu-close').addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) {
      setMenu(false);
      [...toggles].find(button => button.getBoundingClientRect().width)?.focus();
    }
    if (event.key === 'Tab' && !menu.hidden) {
      const items = [...menu.querySelectorAll('button, a')].filter(item => item.getBoundingClientRect().width);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  document.querySelectorAll('[data-filter]').forEach(button => {
    const activate = () => {
      const selected = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.filter === selected)));
      document.querySelectorAll('[data-category]').forEach(card => {
        card.parentElement.hidden = selected !== 'Todos' && !card.dataset.category.split('|').includes(selected);
      });
      let empty = document.getElementById('filter-empty');
      if (!empty) {
        empty = document.createElement('p');
        empty.id = 'filter-empty'; empty.className = 'filter-empty'; empty.setAttribute('role', 'status');
        const cards = document.querySelector('[data-category]');
        cards.parentElement.parentElement.after(empty);
      }
      empty.textContent = 'Nenhum projeto publicado nesta categoria.';
      empty.hidden = [...document.querySelectorAll('[data-category]')].some(card => !card.parentElement.hidden);
    };
    button.addEventListener('click', activate);
    button.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); }
    });
  });
  document.querySelectorAll('[data-contact-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = `Contato pelo portfólio — ${data.get('nome')}`;
      const body = `Nome: ${data.get('nome')}\nE-mail: ${data.get('email')}\n\n${data.get('mensagem')}`;
      const link = document.createElement('a');
      link.href = `mailto:theushmpe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      document.body.append(link); link.click(); link.remove();
      form.querySelector('.form-help').textContent = 'Mensagem preparada. Conclua o envio no seu aplicativo de e-mail, ou escreva para theushmpe@gmail.com.';
    });
  });
})();
