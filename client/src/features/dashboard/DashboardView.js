import { money, date } from '../../utils/format.js';

export function renderDashboard(state) {
  const data = state.dashboard;
  if (!data) return '<section class="empty-state">Loading dashboard...</section>';

  const stats = data.stats;
  return `
    <section class="stats-grid">
      ${statCard('Pipeline value', money(stats.pipelineValue), 'Open deal value')}
      ${statCard('Weighted value', money(stats.weightedValue), 'Probability adjusted')}
      ${statCard('Contacts', stats.contacts, `${stats.companies} companies`)}
      ${statCard('Open tasks', stats.openTasks, `${stats.overdueTasks} overdue`)}
    </section>

    <section class="dashboard-grid">
      <article class="panel wide">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Sales</p>
            <h2>Pipeline Overview</h2>
          </div>
        </div>
        <div class="pipeline-bars">
          ${data.pipeline.map((column) => {
            const max = Math.max(...data.pipeline.map((item) => item.value), 1);
            const width = Math.max(8, Math.round((column.value / max) * 100));
            return `
              <div class="bar-row">
                <span>${column.label}</span>
                <div class="bar-track"><i style="width:${width}%"></i></div>
                <strong>${money(column.value)}</strong>
              </div>
            `;
          }).join('')}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header"><h2>Upcoming Tasks</h2></div>
        <div class="stack-list">
          ${data.upcomingTasks.map((task) => `
            <div class="list-item">
              <div><strong>${task.title}</strong><span>${date(task.dueDate)}</span></div>
              <em class="badge ${task.priority}">${task.priority}</em>
            </div>
          `).join('') || '<p class="muted">No upcoming tasks.</p>'}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header"><h2>Recent Deals</h2></div>
        <div class="stack-list">
          ${data.recentDeals.map((deal) => `
            <div class="list-item">
              <div><strong>${deal.title}</strong><span>${deal.stage}</span></div>
              <em>${money(deal.value)}</em>
            </div>
          `).join('')}
        </div>
      </article>

      <article class="panel wide">
        <div class="panel-header"><h2>Activity Timeline</h2></div>
        <div class="timeline">
          ${data.activities.map((activity) => `
            <div class="timeline-item">
              <span></span>
              <div><strong>${activity.message}</strong><small>${date(activity.createdAt)}</small></div>
            </div>
          `).join('')}
        </div>
      </article>
    </section>
  `;
}

function statCard(label, value, helper) {
  return `
    <article class="stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${helper}</small>
    </article>
  `;
}
