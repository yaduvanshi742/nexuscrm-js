import { escapeHtml } from '../utils/format.js';

export function field(name, label, value = '', type = 'text', placeholder = '') {
  return `
    <label class="field">
      <span>${label}</span>
      <input name="${name}" type="${type}" value="${escapeHtml(value)}" placeholder="${placeholder}" />
    </label>
  `;
}

export function selectField(name, label, value, options) {
  return `
    <label class="field">
      <span>${label}</span>
      <select name="${name}">
        ${options.map((option) => `
          <option value="${option.value}" ${option.value === value ? 'selected' : ''}>${option.label}</option>
        `).join('')}
      </select>
    </label>
  `;
}

export function getFormData(form) {
  return Object.fromEntries(new FormData(form).entries());
}
