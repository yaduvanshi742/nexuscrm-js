import { Store } from '../core/store.js';
import { HttpClient } from '../services/http.js';
import { AuthService } from '../services/auth.service.js';
import { CrmService } from '../services/crm.service.js';
import { renderShell } from './shell.js';
import { renderLogin } from '../features/auth/LoginView.js';
import { renderDashboard } from '../features/dashboard/DashboardView.js';
import { renderResourceView } from '../features/resources/ResourceView.js';
import { renderPipeline } from '../features/pipeline/PipelineView.js';
import { toast } from '../ui/toast.js';

export class App {
  constructor(root) {
    this.root = root;
    this.store = new Store();
    this.http = new HttpClient(() => this.store.getState().token);
    this.auth = new AuthService(this.http);
    this.crm = new CrmService(this.http);
    this.store.subscribe(() => this.render());
  }

  async start() {
    document.documentElement.dataset.theme = this.store.getState().theme;
    this.bindGlobalEvents();
    if (this.store.getState().token) {
      try {
        const { user } = await this.auth.me();
        this.store.setState({ user });
        await this.loadAll();
      } catch {
        localStorage.removeItem('nexuscrm_token');
        this.store.setState({ token: null, user: null });
      }
    }
    this.render();
  }

  async loadAll() {
    this.store.setState({ loading: true });
    const [dashboard, contacts, companies, deals, tasks, notes] = await Promise.all([
      this.crm.dashboard(),
      this.crm.list('contacts'),
      this.crm.list('companies'),
      this.crm.list('deals'),
      this.crm.list('tasks'),
      this.crm.list('notes')
    ]);
    this.store.setState({
      dashboard,
      contacts: contacts.items,
      companies: companies.items,
      deals: deals.items,
      tasks: tasks.items,
      notes: notes.items,
      loading: false
    });
  }

  bindGlobalEvents() {
    this.root.addEventListener('click', async (event) => {
      const action = event.target.closest('[data-action]')?.dataset.action;
      if (!action) return;

      if (action === 'navigate') {
        this.store.setState({ view: event.target.closest('[data-view]').dataset.view });
      }

      if (action === 'logout') {
        localStorage.removeItem('nexuscrm_token');
        this.store.setState({ token: null, user: null, view: 'dashboard' });
      }

      if (action === 'theme') {
        const next = this.store.getState().theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('nexuscrm_theme', next);
        document.documentElement.dataset.theme = next;
        this.store.setState({ theme: next });
      }

      if (action === 'refresh') {
        await this.loadAll();
        toast('Workspace refreshed');
      }
    });

    this.root.addEventListener('submit', async (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();

      if (form.dataset.form === 'login') {
        await this.handleLogin(form);
      }
    });
  }

  async handleLogin(form) {
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const result = await this.auth.login(data.email, data.password);
      localStorage.setItem('nexuscrm_token', result.token);
      this.store.setState({ token: result.token, user: result.user });
      await this.loadAll();
      toast('Welcome to NexusCRM');
    } catch (error) {
      toast(error.message, 'error');
    }
  }

  render() {
    const state = this.store.getState();
    if (!state.user) {
      this.root.innerHTML = renderLogin();
      return;
    }

    this.root.innerHTML = renderShell(state, this.renderCurrentView(state));
    this.attachViewHandlers();
  }

  renderCurrentView(state) {
    if (state.view === 'dashboard') return renderDashboard(state);
    if (state.view === 'pipeline') return renderPipeline(state);
    return renderResourceView(state.view, state);
  }

  attachViewHandlers() {
    const view = this.store.getState().view;
    import('../features/resources/resource.handlers.js').then(({ attachResourceHandlers }) => {
      attachResourceHandlers({ root: this.root, view, store: this.store, crm: this.crm, reload: () => this.loadAll() });
    });
  }
}
