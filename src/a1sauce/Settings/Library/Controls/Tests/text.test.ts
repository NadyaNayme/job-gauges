/**
 * @vitest-environment jsdom
 */
import { expect, test, expectTypeOf, describe } from 'vitest';
import { createHeading, createSmallText, createText } from '../text';

const testHeader = createHeading('h1', 'Big h1');
const testText = createText('Text in a p tag');
const testSmallText = createSmallText('Text in a small tag');

describe('Library.Controls.createHeading()', () => {
	test('Should create an element', () => {
		expect(testHeader).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testHeader).toMatchTypeOf<HTMLElement>();
	});

	test('Should have innerText equivalent to `content` parameter', () => {
		expect(testHeader.innerHTML).toEqual('Big h1');
	});

	test('Should have an opening and closing <h#> surrounding the `content` parameter where `h#` is the passed `size` parameter', () => {
		expect(testHeader.outerHTML).toEqual('<h1>Big h1</h1>');
	});
});

describe('Library.Controls.createText()', () => {
	test('Should create an element', () => {
		expect(testText).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testText).toMatchTypeOf<HTMLElement>();
	});

	test('Should have innerText equivalent to `content` parameter', () => {
		expect(testText.innerHTML).toEqual('Text in a p tag');
	});

	test('Should have an opening and closing <p> surrounding the `content` parameter', () => {
		expect(testText.outerHTML).toEqual('<p>Text in a p tag</p>');
	});
});

describe('Library.Controls.createSmallText()', () => {
	test('Should create an element', () => {
		expect(testSmallText).toBeTruthy();
	});

	test('Should be an <HTMLElement>', () => {
		expectTypeOf(testSmallText).toMatchTypeOf<HTMLElement>();
	});

	test('Should have innerText equivalent to `content` parameter', () => {
		expect(testSmallText.innerHTML).toEqual('Text in a small tag');
	});

	test('Should have an opening and closing <small> surrounding the `content` parameter', () => {
		expect(testSmallText.outerHTML).toEqual(
			'<small>Text in a small tag</small>'
		);
	});
});
