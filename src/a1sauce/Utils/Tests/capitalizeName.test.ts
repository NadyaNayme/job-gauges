import { test, expect, describe } from 'vitest';
import { capitalizeAppName } from '../capitalizeName';

describe('Utility.capitalizeName()', () => {
	test('Capitalizes kebab-case names: App-Name', () => {
		expect(capitalizeAppName('app-name')).toEqual('App Name');
	});

	test('Capitalizes snake_case names: App_Name', () => {
		expect(capitalizeAppName('app_name')).toEqual('App Name');
	});

	test('Capitalizes PascaleCase names: AppName', () => {
		expect(capitalizeAppName('AppName')).toEqual('App Name');
	});

	test('Does not modify valid names: App Name', () => {
		expect(capitalizeAppName('App Name')).not.toEqual('App Name');
	});

	test('Does not allow mixing kebab-case and snake_case: App-Test_Name'),
		() => {
			expect(() => capitalizeAppName('App-Test_Name')).toThrowError(
				'AppName must use either a hyphen or underscore as seperator - not both!'
			);
		};
});
