/**
 * @vitest-environment jsdom
 */

import { test, expect, describe, expectTypeOf } from 'vitest';
import { getById } from '../getById';

describe('Utility.getByID()', () => {
	test('Returns null if element does not exist', () => {
		expect(getById('app-name')).toEqual(null);
	});

	test('Returns matched element if one exists', () => {
		const div = document.createElement('div');
		div.id = 'test'
		document.body.appendChild(div)
		expectTypeOf(getById('test')).toEqualTypeOf<HTMLElement>;
	});
});
