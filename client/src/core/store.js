const initialState = {
  user: null,
  token: localStorage.getItem('nexuscrm_token'),
  view: 'dashboard',
  theme: localStorage.getItem('nexuscrm_theme') || 'dark',
  search: '',
  dashboard: null,
  contacts: [],
  companies: [],
  deals: [],
  tasks: [],
  notes: [],
  loading: false
};

export class Store {
  constructor() {
    this.state = structuredClone(initialState);
    this.listeners = new Set();
  }

  getState() {
    return this.state;
  }

  setState(partial) {
    this.state = { ...this.state, ...partial };
    this.listeners.forEach((listener) => listener(this.state));
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}
