import { test, expect, describe, expectTypeOf } from 'vitest';
import { A1Sauce } from '.';
import { SettingsManager } from './Settings';

A1Sauce.instance;

describe('A1Sauce', () => {
	const sauce = A1Sauce.instance;

	describe('A1Sauce.instance', () => {
		test('Should return same A1Sauce on second init', () => {
			expect(A1Sauce.instance).toEqual(A1Sauce.instance);
		});
	});
	describe('A1Sauce.createSettings()', () => {
		test('Creates and returns a SettingsManager when called', () => {
			expectTypeOf(sauce.createSettings()).toEqualTypeOf<SettingsManager>;
		});
	});
	describe('A1Sauce.setPublicName()', () => {
		test('Sets only the public name', () => {
			expect(sauce.setPublicName('Test Name')).toEqual(A1Sauce.instance);
			sauce.setPublicName('ElfenLied');
			expect(sauce.getPublicName()).toEqual('Elfen Lied');
			expect(sauce.getName()).toEqual('');
		});
	});
	describe('A1Sauce.setName()', () => {
		test('Sets the Internal and Public names and returns self', () => {
			expect(sauce.setName('test-name')).toEqual(A1Sauce.instance);
		});
	});
	describe('A1Sauce.getName()', () => {
		test('Returns the internal name if set', () => {
			sauce.setName('YoRoShiKu')
			expect(sauce.getName()).toEqual('YoRoShiKu');
		});
	});
	describe('A1Sauce.getPublicName()', () => {
		test('Returns the public name if set', () => {
			sauce.setName('YoRoShiKu');
			expect(sauce.getPublicName()).toEqual('Yo Ro Shi Ku');
		});
	});
	describe('A1Sauce.setVersion() && A1Sauce.getVersion()', () => {
		test('Sets and Gets the SemVer versioning', () => {
			expect(sauce.setVersion(1,1,1)).toEqual(A1Sauce.instance);
			sauce.setVersion(1, 5, 3);
			expect(sauce.getVersion()).toEqual('1.5.3');
		});
	});
});
