import { asyncHandler } from '../utils/asyncHandler.js';
import { ok } from '../utils/apiResponse.js';
import { crmService } from '../services/crm.service.js';

export const getDashboard = asyncHandler(async (_req, res) => {
  const dashboard = await crmService.dashboard();
  ok(res, dashboard, 'Dashboard loaded');
});
