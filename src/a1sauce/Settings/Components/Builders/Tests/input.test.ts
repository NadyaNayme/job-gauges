/**
 * @vitest-environment jsdom
 */
import { expect, test, expectTypeOf, describe } from 'vitest';
import {
	createCheckboxInput,
	createDropdown,
	createInput,
	createLabel,
} from '../input';

const testLabel = createLabel('LabelID', 'Description text');
const testTextInput = createInput('text', 'TextInputID', 'Unicorn');
const testNumberInput = createInput('number', 'NumberInputID', 'Buffalo');
const testCheckbox = createCheckboxInput('CheckboxID', true);
const testDropdown = createDropdown('DropdownID', 2, [
	{ name: 'test', value: 'test' },
	{ name: 'test2', value: 'test2' },
]);

describe('Components.Builders.createLabel()', () => {
	test('Should create an element', () => {
		expect(testLabel).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testLabel).toMatchTypeOf<HTMLElement>();
	});

	test('Should have a for attribute matching the `name` parameter', () => {
		expect(testLabel.getAttribute('for')).toEqual('LabelID');
	});

	test('Should have an innerHTML matching the `description` parameter', () => {
		expect(testLabel.innerHTML).toEqual('Description text');
	});
});

describe('Components.Builders.createInput(text)', () => {
	test('Should create an element', () => {
		expect(testTextInput).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testTextInput).toMatchTypeOf<HTMLElement>();
	});

	test('Should be of type="text"', () => {
		expect(testTextInput.getAttribute('type')).toEqual('text');
	});

	test('Should have a data-attribute of data-setting equal to the `name` parameter', () => {
		expect(testTextInput.dataset.setting).toEqual('TextInputID');
	});

	test('Should have a data-attribute of data-default-value equal to the `defaultValue` parameter', () => {
		expect(testTextInput.dataset.defaultValue).toEqual('Unicorn');
	});
});

describe('Components.Builders.createInput(number)', () => {
	test('Should create an element', () => {
		expect(testNumberInput).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testNumberInput).toMatchTypeOf<HTMLElement>();
	});

	test('Should be of type="number"', () => {
		expect(testNumberInput.getAttribute('type')).toEqual('number');
	});

	test('Should have a data-attribute of data-setting equal to the `name` parameter', () => {
		expect(testNumberInput.dataset.setting).toEqual('NumberInputID');
	});

	test('Should have a data-attribute of data-default-value equal to the `defaultValue` parameter', () => {
		expect(testNumberInput.dataset.defaultValue).toEqual('Buffalo');
	});
});

describe('Components.Builders.createCheckboxInput()', () => {
	test('Should create an element', () => {
		expect(testCheckbox).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testCheckbox).toMatchTypeOf<HTMLElement>();
	});
});

describe('Components.Builders.createDropdown()', () => {
	test('Should create an element', () => {
		expect(testDropdown).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testDropdown).toMatchTypeOf<HTMLElement>();
	});
});
