/**
 * @vitest-environment jsdom
 */
import { expect, test, vi, expectTypeOf, describe } from 'vitest';
import { createButton } from '../button';

const fn = vi.fn();

const testButton = createButton('TestButton', 'Testing Button', fn, {
	classes: ['test', 'test2'],
});

describe('Library.Controls.createButton()', () => {
	test('Should create an element', () => {
		expect(testButton).toBeTruthy();
	});

	test('Should be an <HTMLButtonElement>', () => {
		expectTypeOf(testButton).toMatchTypeOf<HTMLButtonElement>();
	});

	test('Should have ID that matches `name` parameter', () => {
		expect(testButton.id).toEqual('TestButton');
	});

	test('Should fire callback fn() when clicked', () => {
		testButton.dispatchEvent(new Event('click'));
		expect(fn).toHaveBeenCalledOnce();
	});

	test('Should have a class for each passed classes[] string', () => {
		expect(testButton.classList.contains('test')).toBeTruthy();
		expect(testButton.classList.contains('test2')).toBeTruthy();
	});

	test('Should have innerHTML matching the passed content', () => {
		expect(testButton.innerHTML).toEqual('Testing Button');
	});
});
