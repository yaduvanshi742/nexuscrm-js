import { asyncHandler } from '../utils/asyncHandler.js';
import { ok, created } from '../utils/apiResponse.js';
import { crmService } from '../services/crm.service.js';

export function resourceController(resource) {
  return {
    list: asyncHandler(async (req, res) => {
      const items = await crmService.list(resource, req.query);
      ok(res, { items }, `${resource} loaded`);
    }),

    create: asyncHandler(async (req, res) => {
      const item = await crmService.create(resource, req.body, req.user);
      created(res, { item }, `${resource} created`);
    }),

    update: asyncHandler(async (req, res) => {
      const item = await crmService.update(resource, req.params.id, req.body, req.user);
      ok(res, { item }, `${resource} updated`);
    }),

    remove: asyncHandler(async (req, res) => {
      const item = await crmService.remove(resource, req.params.id, req.user);
      ok(res, { item }, `${resource} deleted`);
    })
  };
}
