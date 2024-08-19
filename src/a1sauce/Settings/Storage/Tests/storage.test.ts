/**
 * @vitest-environment jsdom
 */

import { afterEach, describe, expect, test, vi } from 'vitest';
import {
	getSetting,
	setDefaultSettings,
	settingsExist,
	updateSetting,
} from '..';
import { createCheckboxSetting } from '../../Library';
import { A1Sauce } from '../../..';

const testSetting = createCheckboxSetting(
	'testBox',
	'Test Checkbox setting',
	true
);
document.body.appendChild(testSetting);

const sauce = A1Sauce.instance;
sauce.setName('testing');

describe('settingsExist', () => {
	test('Settings should not exist until called', () => {
		expect(localStorage[sauce.getName()]).toEqual(undefined);
	});
	test('Settings should exist after first call of settingsExist()', () => {
		settingsExist();
		expect(localStorage[sauce.getName()]).not.toEqual(undefined);
	});
	test('Should be able to load a default settings on first call', () => {
		setDefaultSettings();
		settingsExist();
		expect(getSetting('testBox')).toEqual(true);
	});
	test('Should not be able to get a non-default setting on first call', () => {
		settingsExist();
		expect(getSetting('invisible')).not.toEqual(true);
	});
});

const msgSpy = {
	setDefaultSettings,
}

describe('setDefaultSettings', () => {
	test('Should return without error', () => {
		setDefaultSettings();
		expect(getSetting('testBox')).toEqual(true);
	});
	test('Should throw an error as no DOM elements exist', () => {
		let val = testSetting.dataset.setting;
		expect(val).toEqual(undefined);
	});
	describe('Given a "number" or "range" type', () => {
		afterEach(() => {
				vi.restoreAllMocks();
		});
		test('Should throw an error if no `defaultValue` parameter', () => {
			const spy = vi.spyOn(msgSpy, 'setDefaultSettings');
			expect(spy.getMockName()).toEqual('setDefaultSettings');
			expect(msgSpy.setDefaultSettings()).toEqual(undefined);
		});
	});
});

describe('setDefaultNumberOrRange', () => {
	test.todo('unimplemented test');
});

describe('setDefaultCheckbox', () => {
	test.todo('unimplemented test');
});

describe('setDefaultOther', () => {
	test.todo('unimplemented test');
});

describe('updateSetting() & getSetting()', () => {
	test('Should get and set localStorage values', () => {
		updateSetting('Test', 'Saucey');
		const returnValue = getSetting('Test');
		expect(returnValue).toEqual('Saucey');
	});
	test('Should return false after default value has been updated', () => {
		updateSetting('testBox', false);
		expect(getSetting('testBox')).toEqual(false);
	});
	test('Should return false after default value has been updated', () => {
		expect(getSetting('testBox')).toEqual(false);
	});
});
