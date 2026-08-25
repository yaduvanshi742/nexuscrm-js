import { API_BASE_URL } from '../config/api.js';

export class HttpClient {
  constructor(getToken) {
    this.getToken = getToken;
  }

  async request(path, options = {}) {
    const headers = new Headers(options.headers || {});
    headers.set('Content-Type', 'application/json');

    const token = this.getToken();
    if (token) headers.set('Authorization', `Bearer ${token}`);

    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.success === false) {
      throw new Error(payload.message || 'Request failed');
    }
    return payload.data;
  }

  get(path) {
    return this.request(path);
  }

  post(path, body) {
    return this.request(path, { method: 'POST', body });
  }

  put(path, body) {
    return this.request(path, { method: 'PUT', body });
  }

  delete(path) {
    return this.request(path, { method: 'DELETE' });
  }
}
