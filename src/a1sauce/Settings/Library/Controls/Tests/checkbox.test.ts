/**
 * @vitest-environment jsdom
 */

import { test, expect } from 'vitest';
import { createCheckboxSetting } from '../checkbox';

test('Should have :checked state that matches `defaultValue` parameter', () => {
	let falseCheck = <HTMLInputElement>createCheckboxSetting('TestCheckbox', 'A test of a checkbox', false);
	let trueCheck = <HTMLInputElement>(
		createCheckboxSetting('TestCheckbox', 'A test of a checkbox', true)
	);
	document.body.appendChild(falseCheck);
	expect(falseCheck.querySelector('input').checked).toEqual(false);
	expect(trueCheck.querySelector('input').checked).toEqual(true);
});


test('Should have ID that matches `name` parameter', () => {
	let titleCheck = <HTMLInputElement>(
		createCheckboxSetting('TestCheckbox', 'A test of a checkbox', false)
	);
	document.body.appendChild(titleCheck);
	expect(titleCheck.querySelector('input').id).toEqual('TestCheckbox');
});

test('Should have an empty <label> wrapping the checkbox', () => {
	let labelCheck = <HTMLInputElement>(
		createCheckboxSetting('TestCheckbox', 'A test of a checkbox', false)
	);
	document.body.appendChild(labelCheck);
	expect(labelCheck.querySelectorAll('label')[0].querySelector('input')).toBeTruthy();
});

test('Should have a second <label> with the `description` parameter as innerText', () => {
	let labelCheck = <HTMLInputElement>(
		createCheckboxSetting('TestCheckbox', 'A test of a checkbox', false)
	);
	document.body.appendChild(labelCheck);
	expect(labelCheck.querySelectorAll('label')[1].innerHTML).toEqual(
		'A test of a checkbox'
	);
});

test('Should update :checked state after click events', () => {
	let clickCheck = <HTMLInputElement>(
		createCheckboxSetting('TestCheckbox', 'A test of a checkbox', false)
	);
	document.body.appendChild(clickCheck);
	clickCheck
		.querySelector('input')
		.dispatchEvent(new Event('click', { bubbles: true }));
	expect(clickCheck.querySelector('input').checked).toEqual(true);
});
