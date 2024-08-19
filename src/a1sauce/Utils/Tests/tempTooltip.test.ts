/**
 * @vitest-environment jsdom
 */

import { test, expect, vi, describe } from 'vitest';
import { tempTooltip } from '../tempTooltip';

describe('Utility.tempTooltip()', () => {
	test('Throw Error if window.alt1 is undefined', () => {
		expect(() => tempTooltip('Test', 3000)).toThrowError(/^Alt1 not detected in window object$/);
	});
});
