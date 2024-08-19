/**
 * @vitest-environment jsdom
 */
import { expect, test, expectTypeOf, describe } from 'vitest';
import { createFlexContainer, createOutput } from '../container';

const testContainer = createFlexContainer();
const testContainerWithClasses = createFlexContainer(['test', 'test2']);

const testOutput = createOutput();

describe('Library.Controls.createFlexContainer()', () => {
	test('Should create an element', () => {
		expect(testContainer).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testContainer).toMatchTypeOf<HTMLElement>();
	});

	test('Should have 2 default classes: [flex, setting] if no `classes[]` parameter is passed', () => {
		expect(testContainer.classList.length).toEqual(2);
		expect(testContainer.classList.contains('flex')).toEqual(
			true
		);
		expect(testContainer.classList.contains('setting')).toEqual(
			true
		);
	});

	test('Should have 4 classes. Defaults: flex, setting & `classes[]` parameter: test, test2', () => {
		expect(testContainerWithClasses.classList.length).toEqual(4);
		expect(testContainerWithClasses.classList.contains('flex')).toEqual(
			true
		);
		expect(testContainerWithClasses.classList.contains('setting')).toEqual(
			true
		);
		expect(testContainerWithClasses.classList.contains('test')).toEqual(
			true
		);
		expect(testContainerWithClasses.classList.contains('test2')).toEqual(
			true
		);
	});
});

describe('Library.Controls.createOutput()', () => {
	test('Should create an element', () => {
		expect(testOutput).toBeTruthy();
	});

	test('Should be an <HTMLOutputElement>', () => {
		expectTypeOf(testOutput).toMatchTypeOf<HTMLOutputElement>();
	});

	test('Should be nothing but "<output></output>"', () => {
		expect(testOutput.outerHTML).toEqual('<output></output>');
	});
});
