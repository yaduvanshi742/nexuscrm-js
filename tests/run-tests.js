import assert from 'node:assert/strict';
import { money, titleCase } from '../client/src/utils/format.js';
import { normalizeSearch, includesText } from '../server/src/utils/query.js';

assert.equal(normalizeSearch('  CRM  '), 'crm');
assert.equal(includesText({ name: 'Aurora Labs' }, 'aurora', ['name']), true);
assert.equal(titleCase('expectedCloseDate'), 'ExpectedCloseDate');
assert.equal(typeof money(1200), 'string');

console.log('All tests passed.');
