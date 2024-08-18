/**
 * @vitest-environment jsdom
 */

import { test, expect } from 'vitest';
import { getById } from '../getById';

test('Returns null if element does not exist', () => {
	expect(getById('app-name')).toEqual(null);
});
