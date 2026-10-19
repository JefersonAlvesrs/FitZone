document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  const form = document.querySelector('#contact-form');
  if (form) {
    const params = new URLSearchParams(window.location.search);
    const selected = params.get('plano');
    const select = form.querySelector('#plan');
    if (['start', 'move', 'unlimited'].includes(selected)) select.value = selected;
    form.addEventListener('submit', event => {
      event.preventDefault();
      const feedback = document.querySelector('#form-feedback');
      if (!form.checkValidity()) {
        feedback.textContent = 'Confira os campos obrigatórios antes de continuar.';
        feedback.className = 'form-feedback error';
        form.reportValidity();
        return;
      }
      const name = form.querySelector('#name').value.trim();
      feedback.textContent = `Tudo certo, ${name}! Esta é uma demonstração: nenhuma mensagem foi enviada.`;
      feedback.className = 'form-feedback success';
      form.reset();
    });
  }
});
