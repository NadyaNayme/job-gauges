import { A1Sauce } from "../../index";

const sauce = A1Sauce.instance;

export const setDefaultSettings = (): void => {
	const settings = document.querySelectorAll('[data-setting]');
	settings.forEach((setting: HTMLInputElement) => {
		if (setting.dataset.setting === undefined) throw Error(`Setting (${setting.id}) is missing a data-setting`)
		switch (setting.type) {
			case 'number':
			case 'range':
				if (setting.dataset.defaultValue === undefined) throw Error('Range input value is undefined');
				updateSetting(
					setting.dataset.setting,
					parseInt(setting.dataset.defaultValue, 10)
				);
				break;
			case 'checkbox':
				if (setting.dataset.defaultValue == 'false') {
					updateSetting(setting.dataset.setting, false);
				} else {
					updateSetting(setting.dataset.setting, true);
				}
				break;
			default:
				updateSetting(
					setting.dataset.setting,
					setting.dataset.defaultValue
				);
		}
	});
}

export const loadSettings = (): void => {
	const settings = document.querySelectorAll('[data-setting]');
	settings.forEach((setting: HTMLInputElement) => {
		if (setting.dataset.setting === undefined) throw Error(`Setting (${setting.id}) is missing a data-setting`);
		switch (setting.type) {
			case 'number':
			case 'range':
				setting.value =
					getSetting(setting.dataset.setting) ??
					setting.dataset.defaultValue;
				break;
			case 'checkbox':
				setting.checked =
					getSetting(setting.dataset.setting) ||
					setting.dataset.defaultValue;
				break;
			default:
				setting.value =
					getSetting(setting.dataset.setting) ||
					setting.dataset.defaultValue;
		}
	});
}

export const settingsExist = (): void => {
	if (!localStorage[sauce.Settings.getName()]) {
		setDefaultSettings();
	} else {
		loadSettings();
	}
}

export const getSetting = (setting: string) => {
	if (!localStorage[sauce.Settings.getName()]) {
		localStorage.setItem(sauce.Settings.getName(), JSON.stringify({}));
		setDefaultSettings();
	}
	return JSON.parse(localStorage[sauce.Settings.getName()])[setting];
}

export const updateSetting = (setting: string, value: unknown) => {
	if (!localStorage.getItem(sauce.Settings.getName())) {
		localStorage.setItem(sauce.Settings.getName(), JSON.stringify({}));
	}
	const save_data = JSON.parse(localStorage[sauce.Settings.getName()]);
	save_data[setting] = value;
	localStorage.setItem(sauce.Settings.getName(), JSON.stringify(save_data));
}
