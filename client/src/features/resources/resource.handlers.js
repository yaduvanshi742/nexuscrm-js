import { openModal, closeModal } from '../../ui/modal.js';
import { getFormData } from '../../ui/forms.js';
import { toast } from '../../ui/toast.js';
import { getResourceForm } from './resource.forms.js';

const attached = new WeakSet();

export function attachResourceHandlers({ root, view, store, crm, reload }) {
  if (attached.has(root)) return;
  attached.add(root);

  root.addEventListener('click', async (event) => {
    const trigger = event.target.closest('[data-action-resource]');
    if (!trigger) return;

    const action = trigger.dataset.actionResource;
    const resource = trigger.dataset.resource || view;
    const id = trigger.dataset.id;

    if (action === 'create') openResourceModal({ resource, crm, reload });

    if (action === 'edit') {
      const item = store.getState()[resource].find((record) => record.id === id);
      openResourceModal({ resource, crm, reload, item });
    }

    if (action === 'delete') {
      if (!confirm('Delete this record?')) return;
      try {
        await crm.remove(resource, id);
        await reload();
        toast('Record deleted');
      } catch (error) {
        toast(error.message, 'error');
      }
    }
  });
}

function openResourceModal({ resource, crm, reload, item = null }) {
  const title = item ? `Edit ${resource.slice(0, -1)}` : `Add ${resource.slice(0, -1)}`;
  const body = `
    <form class="modal-form" data-resource-form>
      ${getResourceForm(resource, item || {})}
      <div class="form-actions full-span">
        <button type="button" class="ghost-btn" data-close-modal>Cancel</button>
        <button type="submit" class="primary-btn">Save</button>
      </div>
    </form>
  `;
  const modal = openModal(title, body);
  modal.querySelector('[data-resource-form]').addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const payload = getFormData(event.target);
      if (item) await crm.update(resource, item.id, payload);
      else await crm.create(resource, payload);
      closeModal(modal);
      await reload();
      toast(item ? 'Record updated' : 'Record created');
    } catch (error) {
      toast(error.message, 'error');
    }
  });
}
