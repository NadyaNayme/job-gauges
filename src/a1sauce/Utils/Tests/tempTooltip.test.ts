/**
 * @vitest-environment jsdom
 */

import { test, expect } from 'vitest';
import { tempTooltip } from '../tempTooltip';

test('Throw Error if window.alt1 is undefined', () => {
	expect(() => tempTooltip('Test', 3000)).toThrowError(/^Alt1 not detected in window object$/);
});
