/**
 * @vitest-environment jsdom
 */
import { expect, test, expectTypeOf, describe } from 'vitest';
import { createDropdownSetting } from '../dropdown';

const testDropdown = <HTMLElement>(
	createDropdownSetting('testDropdown', 'This is a test dropdown', 1, [
		{ value: '10', name: 'One' },
		{ value: '20', name: 'Two' },
		{ value: '30', name: 'Three' },
	])
);

describe('Library.Controls.createDropdownSetting()', () => {
	test('Should create an element', () => {
		expect(testDropdown).toBeTruthy();
	});

	test('Should have a <div> container which is an <HTMLElement>', () => {
		expectTypeOf(testDropdown).toMatchTypeOf<HTMLElement>();
	});

	test('Should have a <select> field which is an <HTMLSelectElement>', () => {
		expectTypeOf(
			testDropdown.querySelector('select')
		).toMatchTypeOf<HTMLSelectElement>();
	});

	test('Should have ID that matches `name` parameter', () => {
		expect(testDropdown.querySelector('select').id).toEqual('testDropdown');
	});

	test('Should have a label with text matching the `description` parameter', () => {
		expect(testDropdown.querySelector('label').innerHTML).toEqual(
			'This is a test dropdown'
		);
	});

	test('Should have a value matching the selectedIndex passed by the `devaultValue` parameter', () => {
		expect(testDropdown.querySelector('select').value).toEqual('20');
	});
});
