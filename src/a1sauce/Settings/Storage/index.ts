import { A1Sauce } from "../../index";

export const setDefaultSettings = (): void => {
	const settings = document.querySelectorAll('[data-setting]');
	settings.forEach((setting: HTMLInputElement) => {
		if (setting.dataset.setting === undefined) throw Error(`Setting (${setting.id}) is missing a data-setting`)
		switch (setting.type) {
			case 'number':
			case 'range':
					setDefaultNumberOrRange(setting);
				break;
			case 'checkbox':
				setDefaultCheckbox(setting);
				break;
			default:
				setDefaultOther(setting);
		}
	});
}

export const setDefaultNumberOrRange = (setting: HTMLElement) => {
	if (setting.dataset.defaultValue === undefined)
		throw Error('Range input value is undefined');
	updateSetting(
		setting.dataset.setting,
		parseInt(setting.dataset.defaultValue, 10)
	);
}

export const setDefaultCheckbox = (setting: HTMLElement) => {
	if (setting.dataset.defaultValue == 'false') {
		updateSetting(setting.dataset.setting, false);
	} else {
		updateSetting(setting.dataset.setting, true);
	}
};

export const setDefaultOther = (setting: HTMLElement) => {
	updateSetting(setting.dataset.setting, setting.dataset.defaultValue);
};

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
	const sauce = A1Sauce.instance;
	if (!localStorage[sauce.getName()]) {
		setDefaultSettings();
	} else {
		loadSettings();
	}
}

export const getSetting = (setting: string) => {
	const sauce = A1Sauce.instance;
	if (!localStorage[sauce.getName()]) {
		localStorage.setItem(sauce.getName(), JSON.stringify({}));
		setDefaultSettings();
	}
	return JSON.parse(localStorage[sauce.getName()])[setting];
}

export const updateSetting = (setting: string, value: unknown) => {
	const sauce = A1Sauce.instance;
	if (!localStorage.getItem(sauce.getName())) {
		localStorage.setItem(sauce.getName(), JSON.stringify({}));
	}
	const save_data = JSON.parse(localStorage[sauce.getName()]);
	save_data[setting] = value;
	localStorage.setItem(sauce.getName(), JSON.stringify(save_data));
}
