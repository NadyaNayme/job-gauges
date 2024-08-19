/**
 * @vitest-environment jsdom
 */

import { test, expect, describe } from 'vitest';
import { getById } from '../getById';

describe('Utility.getByID()', () => {
	test('Returns null if element does not exist', () => {
		expect(getById('app-name')).toEqual(null);
	});
});
