export class AuthService {
  constructor(http) {
    this.http = http;
  }

  login(email, password) {
    return this.http.post('/auth/login', { email, password });
  }

  me() {
    return this.http.get('/auth/me');
  }
}
