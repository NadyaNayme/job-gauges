import { describe, expect, expectTypeOf, test } from 'vitest';
import { notes } from './patchnotes';

describe('patchnotes.ts', () => {
	test('Should be defined / exist', async () => {
		expect(notes).not.toEqual(undefined);
	});
	test('Should contain at least 1 patch note', async () => {
		expect(notes.length).toBeGreaterThan(0);
	});
	test('Should contain fewer than 8 patch notes', async () => {
		expect(notes.length).toBeLessThanOrEqual(8)
	});
	test('Every patch note should contain non-empty, valid data', async () => {
		notes.forEach((note) => {
			expect(note.date).not.toEqual(undefined);
			expectTypeOf(note.date).toEqualTypeOf<string>;
			expect(note.date.length).toBeGreaterThan(0);
			expect(note.note).not.toEqual(undefined);
			expectTypeOf(note.note).toEqualTypeOf<string[]>;
			expect(note.note.length).toBeGreaterThan(0);
		});
	});
});
