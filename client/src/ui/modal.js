export function openModal(title, content, footer = '') {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <section class="modal-card">
      <header class="modal-header">
        <h2>${title}</h2>
        <button class="icon-btn" data-close-modal aria-label="Close">×</button>
      </header>
      <div class="modal-body">${content}</div>
      ${footer ? `<footer class="modal-footer">${footer}</footer>` : ''}
    </section>
  `;
  document.body.appendChild(backdrop);
  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop || event.target.matches('[data-close-modal]')) closeModal(backdrop);
  });
  return backdrop;
}

export function closeModal(backdrop = document.querySelector('.modal-backdrop')) {
  if (backdrop) backdrop.remove();
}
