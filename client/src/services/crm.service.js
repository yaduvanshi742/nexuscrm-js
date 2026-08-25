export class CrmService {
  constructor(http) {
    this.http = http;
  }

  dashboard() {
    return this.http.get('/dashboard');
  }

  list(resource, search = '') {
    const qs = search ? `?search=${encodeURIComponent(search)}` : '';
    return this.http.get(`/${resource}${qs}`);
  }

  create(resource, payload) {
    return this.http.post(`/${resource}`, payload);
  }

  update(resource, id, payload) {
    return this.http.put(`/${resource}/${id}`, payload);
  }

  remove(resource, id) {
    return this.http.delete(`/${resource}/${id}`);
  }
}
