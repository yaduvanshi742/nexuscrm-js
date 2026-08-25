import { money, date, titleCase } from '../../utils/format.js';

const configs = {
  contacts: {
    title: 'Contacts',
    description: 'Manage people, leads, and decision makers.',
    columns: ['name', 'email', 'phone', 'title', 'status'],
    primary: 'name'
  },
  companies: {
    title: 'Companies',
    description: 'Track accounts, industries, size, and location.',
    columns: ['name', 'domain', 'industry', 'size', 'city'],
    primary: 'name'
  },
  deals: {
    title: 'Deals',
    description: 'Manage revenue opportunities and sales stages.',
    columns: ['title', 'value', 'stage', 'probability', 'expectedCloseDate'],
    primary: 'title'
  },
  tasks: {
    title: 'Tasks',
    description: 'Follow-ups, reminders, and team work items.',
    columns: ['title', 'dueDate', 'priority', 'status', 'relatedType'],
    primary: 'title'
  },
  notes: {
    title: 'Notes',
    description: 'Activity notes connected to contacts, companies, and deals.',
    columns: ['body', 'relatedType', 'relatedId', 'createdAt'],
    primary: 'body'
  }
};

export function renderResourceView(resource, state) {
  const config = configs[resource] || configs.contacts;
  const items = state[resource] || [];

  return `
    <section class="resource-toolbar">
      <div>
        <p class="eyebrow">CRM Data</p>
        <h2>${config.title}</h2>
        <p>${config.description}</p>
      </div>
      <button class="primary-btn" data-resource="${resource}" data-action-resource="create">Add ${config.title.slice(0, -1)}</button>
    </section>

    <section class="panel">
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              ${config.columns.map((column) => `<th>${titleCase(column)}</th>`).join('')}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${items.map((item) => `
              <tr>
                ${config.columns.map((column) => `<td>${formatCell(column, item[column])}</td>`).join('')}
                <td class="table-actions">
                  <button class="small-btn" data-resource="${resource}" data-id="${item.id}" data-action-resource="edit">Edit</button>
                  <button class="small-btn danger" data-resource="${resource}" data-id="${item.id}" data-action-resource="delete">Delete</button>
                </td>
              </tr>
            `).join('') || `<tr><td colspan="${config.columns.length + 1}" class="empty-cell">No records found.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function formatCell(column, value) {
  if (column === 'value') return money(value);
  if (column.toLowerCase().includes('date') || column === 'createdAt') return date(value);
  if (Array.isArray(value)) return value.join(', ');
  return value ?? '-';
}
