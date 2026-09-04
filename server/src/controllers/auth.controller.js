import { asyncHandler } from '../utils/asyncHandler.js';
import { ok } from '../utils/apiResponse.js';
import { authService } from '../services/auth.service.js';

export const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body.email, req.body.password);
  ok(res, result, 'Logged in successfully');
});

export const me = asyncHandler(async (req, res) => {
  ok(res, { user: req.user }, 'Current user');
});
