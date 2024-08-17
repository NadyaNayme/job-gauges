import * as Storage from '../../Storage/index';

export type DropdownOption = {
	name: string;
	value: string;
};

export const createLabel = (name: string, description: string): HTMLLabelElement => {
	const label = document.createElement('label');
	label.setAttribute('for', name);
	label.innerHTML = description;
	return label;
}

export const createInput = (
	type: string,
	name: string,
	defaultValue: unknown
): HTMLInputElement => {
	const input = document.createElement('input');
	input.id = name;
	input.type = type;
	input.dataset.setting = name;
	input.dataset.defaultValue = defaultValue?.toString();
	input.value = String(input.dataset.defaultValue);
	if (Storage.getSetting(name)) {
		input.value = Storage.getSetting(name) ?? input.dataset.defaultValue;
	} else {
		Storage.updateSetting(name, input.dataset.defaultValue);
	}
	input.addEventListener('change', () => {
		if (type == 'text') {
			Storage.updateSetting(name, input.value);
		} else if (type == 'number' || type == 'range') {
			Storage.updateSetting(name, parseInt(input.value, 10));
		}
	});
	return input;
}

export const createCheckboxInput = (
	name: string,
	defaultValue: unknown
): HTMLInputElement => {
	const input = document.createElement('input');
	input.id = name;
	input.type = 'checkbox';
	input.dataset.setting = name;
	input.dataset.defaultValue = defaultValue?.toString();
	input.checked = Boolean(defaultValue);
	if (Storage.getSetting(name)) {
		input.checked = Storage.getSetting(name);
	} else {
		Storage.updateSetting(name, input.checked);
	}
	input.addEventListener('change', () => {
		Storage.updateSetting(name, input.checked);
	});
	return input;
}

export const createDropdown = (
	name: string,
	defaultValue: unknown,
	options: DropdownOption[]
): HTMLSelectElement => {
	const select = document.createElement('select');
	select.id = name;
	select.dataset.setting = name;
	select.dataset.defaultValue = defaultValue?.toString();
	select.value = String(defaultValue);
	if (Storage.getSetting(name)) {
		select.value = Storage.getSetting(name);
	}
	for (let i = 0; i < options.length; i++) {
		const option = document.createElement('option');
		option.value = options[i].value;
		option.text = options[i].name;
		select.appendChild(option);
	}
	if (Storage.getSetting(name)) {
		select.value = Storage.getSetting(name);
	} else {
		Storage.updateSetting(name, select.value);
	}
	select.addEventListener('change', () => {
		Storage.updateSetting(name, select.value);
	});
	return select;
}
