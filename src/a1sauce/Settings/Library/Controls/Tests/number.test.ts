/**
 * @vitest-environment jsdom
 */
import { expect, test, expectTypeOf, describe } from 'vitest';
import { createNumberSetting } from '../number';

const testNumber = <HTMLInputElement>(
	createNumberSetting('testNumber', 'This is a test dropdown', {defaultValue: 50, min: 0, max: 100})
);

const testNumberNoOptions = <HTMLInputElement>(
	createNumberSetting('testNumber2', 'This is a test dropdown')
);

describe('Library.Controls.createNumberSetting()', () => {
	test('Should create an element', () => {
		expect(testNumber).toBeTruthy();
	});

	test('Should be an <HTMLInputElement>', () => {
		expectTypeOf(testNumber).toMatchTypeOf<HTMLInputElement>();
	});

	test('Should be of [type="number"]', () => {
		expect(testNumber.querySelector('input').type).toEqual('number');
	});

	test('Should have an input ID that matches `name` parameter', () => {
		expect(testNumber.querySelector('input').id).toEqual('testNumber');
	});

	test('Should have a label with text matching the `description` parameter', () => {
		expect(testNumber.querySelector('label').innerHTML).toEqual(
			'This is a test dropdown'
		);
	});

	test('Should have a default value matching the passed `defaultValue` option', () => {
		expect(testNumber.querySelector('input').value).toEqual('50');
	});

	test('Should have default values for min, max, and defaultValue if no options are passed', () => {
		expect(testNumberNoOptions.querySelector('input').getAttribute('min')).toEqual('1');
		expect(testNumberNoOptions.querySelector('input').getAttribute('max')).toEqual('20');
		expect(testNumberNoOptions.querySelector('input').value).toEqual('10');
	});

	test('Should be invalid if value is below minimum', () => {
		testNumber.querySelector('input').value = '-20';
		testNumber.querySelector('input').dispatchEvent(new Event('input'));
		expect(testNumber.querySelector('input').checkValidity()).toEqual(
			false
		);
		expect(testNumber.querySelector('input').value).toEqual('-20');
	});

	test('Should be invalid if value is above maximum', () => {
		testNumber.querySelector('input').value = '500';
		testNumber.querySelector('input').dispatchEvent(new Event('input'));
		expect(testNumber.querySelector('input').checkValidity()).toEqual(
			false
		);
		expect(testNumber.querySelector('input').value).toEqual('500');
	});
});
