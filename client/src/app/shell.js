const navItems = [
  ['dashboard', 'Dashboard'],
  ['pipeline', 'Pipeline'],
  ['contacts', 'Contacts'],
  ['companies', 'Companies'],
  ['deals', 'Deals'],
  ['tasks', 'Tasks'],
  ['notes', 'Notes']
];

export function renderShell(state, content) {
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">N</div>
          <div>
            <strong>NexusCRM</strong>
            <span>Sales workspace</span>
          </div>
        </div>
        <nav class="nav-list">
          ${navItems.map(([id, label]) => `
            <button class="nav-item ${state.view === id ? 'active' : ''}" data-action="navigate" data-view="${id}">
              <span>${label}</span>
            </button>
          `).join('')}
        </nav>
        <div class="sidebar-card">
          <span>Signed in as</span>
          <strong>${state.user.name}</strong>
          <small>${state.user.role}</small>
        </div>
      </aside>
      <main class="main-panel">
        <header class="topbar">
          <div>
            <p class="eyebrow">NexusCRM JS</p>
            <h1>${navItems.find(([id]) => id === state.view)?.[1] || 'Workspace'}</h1>
          </div>
          <div class="topbar-actions">
            <button class="ghost-btn" data-action="refresh">Refresh</button>
            <button class="ghost-btn" data-action="theme">${state.theme === 'dark' ? 'Light' : 'Dark'} mode</button>
            <button class="primary-btn" data-action="logout">Logout</button>
          </div>
        </header>
        ${content}
      </main>
    </div>
  `;
}
