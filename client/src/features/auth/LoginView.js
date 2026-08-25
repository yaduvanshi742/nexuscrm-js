export function renderLogin() {
  return `
    <main class="login-screen">
      <section class="login-hero">
        <div class="hero-badge">NexusCRM JS</div>
        <h1>Manage customers, deals, tasks, and sales pipelines from one clean workspace.</h1>
        <p>A scalable JavaScript CRM project with a polished dashboard, REST API backend, authentication, local database, and modular architecture.</p>
        <div class="hero-grid">
          <span>Contacts</span>
          <span>Companies</span>
          <span>Deals</span>
          <span>Tasks</span>
          <span>Pipeline</span>
          <span>Analytics</span>
        </div>
      </section>
      <section class="login-card">
        <h2>Welcome back</h2>
        <p>Use the demo account to open the CRM workspace.</p>
        <form data-form="login" class="auth-form">
          <label class="field">
            <span>Email</span>
            <input name="email" type="email" value="admin@nexuscrm.dev" required />
          </label>
          <label class="field">
            <span>Password</span>
            <input name="password" type="password" value="nexus12345" required />
          </label>
          <button class="primary-btn full" type="submit">Open workspace</button>
        </form>
        <div class="demo-note">
          <strong>Demo:</strong> admin@nexuscrm.dev / nexus12345
        </div>
      </section>
    </main>
  `;
}
