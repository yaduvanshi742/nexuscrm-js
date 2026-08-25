import { field, selectField } from '../../ui/forms.js';
import { DEAL_STAGES } from '../../config/api.js';

export function getResourceForm(resource, item = {}) {
  const formMap = {
    contacts: contactForm,
    companies: companyForm,
    deals: dealForm,
    tasks: taskForm,
    notes: noteForm
  };
  return formMap[resource]?.(item) || '';
}

function contactForm(item) {
  return `
    ${field('name', 'Name', item.name || '', 'text', 'Isha Mehta')}
    ${field('email', 'Email', item.email || '', 'email', 'name@example.com')}
    ${field('phone', 'Phone', item.phone || '')}
    ${field('title', 'Title', item.title || '')}
    ${selectField('status', 'Status', item.status || 'new', [
      { value: 'new', label: 'New' },
      { value: 'warm', label: 'Warm' },
      { value: 'hot', label: 'Hot' },
      { value: 'customer', label: 'Customer' }
    ])}
  `;
}

function companyForm(item) {
  return `
    ${field('name', 'Company Name', item.name || '')}
    ${field('domain', 'Domain', item.domain || '')}
    ${field('industry', 'Industry', item.industry || '')}
    ${field('size', 'Company Size', item.size || '')}
    ${field('city', 'City', item.city || '')}
  `;
}

function dealForm(item) {
  return `
    ${field('title', 'Deal Title', item.title || '')}
    ${field('value', 'Value', item.value || '', 'number')}
    ${selectField('stage', 'Stage', item.stage || 'lead', DEAL_STAGES.map((stage) => ({ value: stage.id, label: stage.label })))}
    ${field('probability', 'Probability', item.probability || '25', 'number')}
    ${field('expectedCloseDate', 'Expected Close Date', item.expectedCloseDate || '', 'date')}
  `;
}

function taskForm(item) {
  return `
    ${field('title', 'Task Title', item.title || '')}
    ${field('dueDate', 'Due Date', item.dueDate || '', 'date')}
    ${selectField('priority', 'Priority', item.priority || 'medium', [
      { value: 'low', label: 'Low' },
      { value: 'medium', label: 'Medium' },
      { value: 'high', label: 'High' }
    ])}
    ${selectField('status', 'Status', item.status || 'open', [
      { value: 'open', label: 'Open' },
      { value: 'in-progress', label: 'In Progress' },
      { value: 'done', label: 'Done' }
    ])}
  `;
}

function noteForm(item) {
  return `
    <label class="field full-span">
      <span>Note</span>
      <textarea name="body" rows="5" placeholder="Write a note...">${item.body || ''}</textarea>
    </label>
    ${selectField('relatedType', 'Related Type', item.relatedType || 'general', [
      { value: 'general', label: 'General' },
      { value: 'contact', label: 'Contact' },
      { value: 'company', label: 'Company' },
      { value: 'deal', label: 'Deal' }
    ])}
    ${field('relatedId', 'Related ID', item.relatedId || '')}
  `;
}
