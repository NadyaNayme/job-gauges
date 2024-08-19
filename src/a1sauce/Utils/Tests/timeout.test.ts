import { test, expect, describe } from 'vitest';
import { timeout } from '../timeout';

describe('Utility.timeout()', () => {
	test('Return shortly after a 2 second duration', async () => {
		let fail = true;
		await timeout(2000).then(() => {
			fail = false;
		});
		expect(fail).toEqual(false);
	});

	test('Return shorlty after a 1_000 ms duration', async () => {
		let fail = true;
		await timeout(1_000).then(() => {
			fail = false;
		});
		expect(fail).toEqual(false);
	});
});
