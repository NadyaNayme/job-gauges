/**
 * @vitest-environment jsdom
 */
import { expect, test, expectTypeOf, describe } from 'vitest';
import { createSeperator } from '../seperator';

const testInput = createSeperator();

describe('Library.Controls.createSeperator()', () => {
	test('Should create an element', () => {
		expect(testInput).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testInput).toMatchTypeOf<HTMLElement>();
	});

	test('Should be nothing but an <hr>', () => {
		expect(testInput.outerHTML).toEqual('<hr>');
	});
});
