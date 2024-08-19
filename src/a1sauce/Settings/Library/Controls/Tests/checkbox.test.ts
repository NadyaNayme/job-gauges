/**
 * @vitest-environment jsdom
 */

import { test, expect, expectTypeOf, describe } from 'vitest';
import { createCheckboxSetting } from '../checkbox';

const testCheckbox = createCheckboxSetting('TestCheckbox', 'A test of a checkbox', false);

describe('Library.Controls.createCheckboxSetting()', () => {
	test('Should create an element', () => {
		expect(testCheckbox).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testCheckbox).toMatchTypeOf<HTMLElement>();
	});

	test('Should be of [type="checkbox"]', () => {
		expect(testCheckbox.querySelector('input').type).toEqual('checkbox');
	});

	test('Should have :checked state that matches `defaultValue` parameter', () => {
		let falseCheck = <HTMLInputElement>(
			createCheckboxSetting('TestCheckbox', 'A test of a checkbox', false)
		);
		let trueCheck = <HTMLInputElement>(
			createCheckboxSetting('TestCheckbox', 'A test of a checkbox', true)
		);
		expect(falseCheck.querySelector('input').checked).toEqual(false);
		expect(trueCheck.querySelector('input').checked).toEqual(true);
	});

	test('Should have ID that matches `name` parameter', () => {
		expect(testCheckbox.querySelector('input').id).toEqual('TestCheckbox');
	});

	test('Should have an empty <label> wrapping the checkbox', () => {
		expect(
			testCheckbox.querySelectorAll('label')[0].querySelector('input')
		).toBeTruthy();
	});

	test('Should have a second <label> with the `description` parameter as innerText', () => {
		expect(testCheckbox.querySelectorAll('label')[1].innerHTML).toEqual(
			'A test of a checkbox'
		);
	});

	test('Should update :checked state after click events', () => {
		const testCheckbox = <HTMLInputElement>(
			createCheckboxSetting('TestCheckbox', 'A test of a checkbox', false)
		);
		testCheckbox
			.querySelector('input')
			.dispatchEvent(new Event('click', { bubbles: true }));
		expect(testCheckbox.querySelector('input').checked).toEqual(true);
	});
});
