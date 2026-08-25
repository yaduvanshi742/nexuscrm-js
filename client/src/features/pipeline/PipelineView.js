import { DEAL_STAGES } from '../../config/api.js';
import { money, date } from '../../utils/format.js';

export function renderPipeline(state) {
  const deals = state.deals || [];
  return `
    <section class="pipeline-board">
      ${DEAL_STAGES.map((stage) => {
        const items = deals.filter((deal) => deal.stage === stage.id);
        return `
          <article class="pipeline-column">
            <header>
              <div>
                <h3>${stage.label}</h3>
                <span>${items.length} deals</span>
              </div>
              <strong>${money(items.reduce((sum, deal) => sum + Number(deal.value || 0), 0))}</strong>
            </header>
            <div class="deal-stack">
              ${items.map((deal) => `
                <div class="deal-card">
                  <strong>${deal.title}</strong>
                  <span>${money(deal.value)} · ${deal.probability}%</span>
                  <small>Close: ${date(deal.expectedCloseDate)}</small>
                </div>
              `).join('') || '<p class="muted small">No deals here.</p>'}
            </div>
          </article>
        `;
      }).join('')}
    </section>
  `;
}
