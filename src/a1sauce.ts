var config = require('./appconfig.json');
var appName = config.appName;
appName = 'job-gauges';

export function createHeading(size: string, content: string): HTMLElement {
	let header = document.createElement(size);
	header.innerHTML = content;
	return header;
}

export function createText(content: string): HTMLElement {
	let text = document.createElement('p');
	text.innerHTML = content;
	return text;
}

export function createSmallText(content: string): HTMLElement {
	let text = document.createElement('small');
	text.innerHTML = content;
	return text;
}

export function createSeperator(): HTMLElement {
	return document.createElement('hr');
}

export function createButton(
	content: string,
	fn: Function,
	options: { classes: Array<string> }
): HTMLButtonElement {
	let { classes = options.classes } = options;
	const button = document.createElement('button');
	button.innerHTML = content;
	if (options.classes.length) {
		for (let i = options.classes.length; i--; i >= 0) {
			button.classList.add(options.classes[i]);
		}
	}
	button.addEventListener('click', () => {
		fn();
	});
	return button;
}

export function createDropdownSetting(
	name: string,
	description: string,
	defaultValue: any,
	options: DropdownOption[]
): HTMLElement {
	let select = createDropdown(name, defaultValue, options);
	let label = createLabel(name, description);
	let container = createFlexContainer('reverse-setting');
	container.appendChild(select);
	container.appendChild(label);
	return container;
}

export function createTextSetting(
	name: string,
	description: string,
	defaultValue: any
): HTMLElement {
	let input = createInput('text', name, defaultValue);
	let label = createLabel(name, description);
	label.setAttribute('for', name);
	let container = createFlexContainer();
	container.appendChild(input);
	container.appendChild(label);
	return container;
}

export function createCheckboxSetting(
	name: string,
	description: string,
	defaultValue: any
): HTMLElement {
	let input = createCheckboxInput(name, defaultValue);
	let label = createLabel(name, description);
	let checkboxLabel = createLabel(name, '');
	let checkbox = document.createElement('span');
	checkbox.classList.add('checkbox');
	let container = createFlexContainer('reverse-setting');
	checkboxLabel.appendChild(input);
	checkboxLabel.appendChild(checkbox);
	container.appendChild(checkboxLabel);
	container.appendChild(label);
	container.addEventListener('click', (e) => {
		if (e.target == container) {
			input.checked = !input.checked;
			input.dispatchEvent(new CustomEvent('change', { bubbles: true }));
			updateSetting(name, input.checked);
		}
	});
	return container;
}

export function createNumberSetting(
	name: string,
	description: string,
	options: {
		defaultValue?: number;
		min?: number;
		max?: number;
	} = {}
): HTMLElement {
	let {
		defaultValue = options.defaultValue ?? 10,
		min = options.min ?? 1,
		max = options.max ?? 20,
	} = options;
	let input = createInput('number', name, defaultValue);
	input.setAttribute('min', min.toString());
	input.setAttribute('max', max.toString());
	let label = createLabel(name, description);
	let container = createFlexContainer('reverse-setting');
	container.appendChild(input);
	container.appendChild(label);
	return container;
}

export function createRangeSetting(
	name: string,
	description: string,
	options: {
		classes?: Array<string>;
		defaultValue?: string;
		min?: number;
		max?: number;
		unit?: string;
	} = {}
): HTMLElement {
	let {
		classes = options.classes ?? '',
		defaultValue = options.defaultValue ?? '100',
		min = options.min ?? 0,
		max = options.max ?? 100,
		unit = options.unit ?? '%',
	} = options;
	let input = createInput('range', name, defaultValue);
	input.setAttribute('min', min.toString());
	input.setAttribute('max', max.toString());
	let label = createLabel(name, description);
	label.classList.add('full');
	if (getSetting(name) != undefined) {
		input.value = getSetting(name);
	}
	let output = createOutput();
	output.setAttribute('id', `${name}Output`);
	output.setAttribute('for', name);
	output.innerHTML = input.value + unit;
	output.after(unit);
	let container = createFlexContainer();
	if (classes.length) {
		for (let i = classes.length; i--; i >= 0) {
			container.classList.add(classes[i]);
		}
	}
	container.classList.add('flex-wrap');
	container.appendChild(label);
	container.appendChild(input);
	container.appendChild(output);
	input.addEventListener('input', () => {
		output.innerHTML = input.value + unit;
	});
	return container;
}

export function createProfileManager(): HTMLElement {
	function saveProfile(): void {
		let profileNameInput: HTMLInputElement =
			container.querySelector('#ProfileName');
		let profileName = profileNameInput.value;
		if (profileName.indexOf('|') > -1) {
			console.log('Pipe character is not allowed in profile names.');
			return;
		}
		let profiles = localStorage.getItem('bbb_profiles');
		let profilesArray = localStorage
			.getItem('bbb_profiles')
			.split('|')
			.filter((str) => str !== '');

		// If we do not have profiles set it to be empty
		if (profiles == undefined) {
			profiles = '';
		}

		// If the profile name doesn't exist in our profiles - add it
		if (!profilesArray.includes(profileName)) {
			profiles = profiles + '|' + profileName + '|';
			localStorage.setItem('bbb_profiles', profiles);
		}

		// Create and update or store any data
		let data = {};
		data['Buffs'] = localStorage['Buffs'];
		data['Buffs2'] = localStorage['Buffs2'];
		data['Buffs3'] = localStorage['Buffs3'];
		data['UntrackedBuffs'] = localStorage['UntrackedBuffs'];
		data['Settings'] = JSON.parse(localStorage[appName]);
		localStorage.setItem(
			`bbb_profile_${profileName}`,
			JSON.stringify(data)
		);
		console.log(
			`${profileName} added to profiles. Existing profiles: \n ${profiles}`
		);
		location.reload();
	}

	function deleteProfile(): void {
		let index = container.querySelector('select').selectedIndex;
		let profileName = container.querySelector('select').options[index].text;
		console.log(`Deleting: ${profileName} profile`);
		let profiles = localStorage
			.getItem('bbb_profiles')
			.split('|')
			.filter((str) => str !== '');
		profiles = profiles.filter((item) => item !== profileName);
		localStorage.setItem('bbb_profiles', profiles.join('|') + '|');
		localStorage.removeItem(`bbb_profile_${profileName}`);
		location.reload();
	}

	function loadProfile(): void {
		let index = container.querySelector('select').selectedIndex;
		if (index !== 0) {
			let profiles = localStorage
				.getItem('bbb_profiles')
				.split('|')
				.filter((str) => str !== '');
			let storageName = profiles[index - 1];
			let data = JSON.parse(
				localStorage.getItem(`bbb_profile_${storageName}`)
			);
			if (data['Buffs'] !== undefined && data['Buffs'] !== '') {
				localStorage.setItem('Buffs', data['Buffs']);
			}
			if (data['Buffs2'] !== undefined && data['Buffs2'] !== '') {
				localStorage.setItem('Buffs2', data['Buffs2']);
			}
			if (data['Buffs3'] !== undefined && data['Buffs3'] !== '') {
				localStorage.setItem('Buffs3', data['Buffs3']);
			}
			if (
				data['UntrackedBuffs'] !== undefined &&
				data['UntrackedBuffs'] !== ''
			) {
				localStorage.setItem('UntrackedBuffs', data['UntrackedBuffs']);
			}
			Object.entries(data['Settings']).forEach((setting) => {
				updateSetting(setting[0], setting[1]);
			});
		}
		location.reload();
	}

	let profileOptions = [{ value: '0', name: 'Select Profile' }];
	let profiles;
	if (localStorage.getItem('bbb_profiles')) {
		profiles = localStorage
			.getItem('bbb_profiles')
			.split('|')
			.filter((str) => str !== '');
		profiles.forEach((profile, index) => {
			profileOptions.push({ value: index.toString(), name: profile });
		});
	} else {
		profiles = '|';
	}

	var profileHeader = createHeading('h3', 'Profiles');
	var profileText = createText(
		'Select a profile to load or delete. To save a new profile, give it a name in the field below and then click Save. To update an existing profile save a profile using the same name.'
	);
	var saveButton = createButton('Save', saveProfile, {
		classes: ['nisbutton'],
	});
	var profileName = createInput('text', 'ProfileName', '');
	profileName.classList.add('profile-name');
	var loadOptions = createDropdownSetting(
		'Profile',
		'',
		'Add',
		profileOptions
	);
	loadOptions.classList.add('profile-list');
	loadOptions.querySelector('select').selectedIndex = 0;
	var loadButton = createButton('Load', loadProfile, {
		classes: ['nisbutton'],
	});
	loadButton.classList.add('load-btn');
	var deleteButton = createButton('Delete', deleteProfile, {
		classes: ['nisbutton', 'delete'],
	});
	var container = createFlexContainer();
	container.classList.remove('flex');
	var endSeperator = createSeperator();
	container.classList.add('flex-wrap');
	container.appendChild(profileHeader);
	container.appendChild(profileText);
	container.appendChild(loadOptions);
	container.appendChild(document.createElement('br'));
	container.appendChild(saveButton);
	container.appendChild(profileName);
	container.appendChild(loadButton);
	container.appendChild(deleteButton);
	//container.appendChild(deleteButton);
	container.appendChild(endSeperator);
	return container;
}

function createLabel(name: string, description: string): HTMLLabelElement {
	let label = document.createElement('label');
	label.setAttribute('for', name);
	label.innerHTML = description;
	return label;
}

function createInput(type: string, name: string, defaultValue: any): HTMLInputElement {
	let input = document.createElement('input');
	input.id = name;
	input.type = type;
	input.dataset.setting = name;
	input.dataset.defaultValue = defaultValue;
	input.value = input.dataset.defaultValue;
	if (getSetting(name)) {
		input.value = getSetting(name) ?? input.dataset.defaultValue;
	} else {
		updateSetting(name, input.dataset.defaultValue);
	}
	input.addEventListener('change', () => {
		if (type == 'text') {
			updateSetting(name, input.value);
		} else if (type == 'number' || type == 'range') {
			updateSetting(name, parseInt(input.value, 10));
		}
	});
	return input;
}

function createCheckboxInput(name: string, defaultValue: any): HTMLInputElement {
	let input = document.createElement('input');
	input.id = name;
	input.type = 'checkbox';
	input.dataset.setting = name;
	input.dataset.defaultValue = defaultValue;
	input.checked = defaultValue;
	if (getSetting(name)) {
		input.checked = getSetting(name);
	} else {
		updateSetting(name, input.checked);
	}
	input.addEventListener('change', () => {
		updateSetting(name, input.checked);
	});
	return input;
}

type DropdownOption = {
	name: string;
	value: string;
};

function createDropdown(
	name: string,
	defaultValue: any,
	options: DropdownOption[]
): HTMLSelectElement {
	let select = document.createElement('select');
	select.id = name;
	select.dataset.setting = name;
	select.dataset.defaultValue = defaultValue;
	select.value = defaultValue;
	if (getSetting(name)) {
		select.value = getSetting(name);
	}
	for (var i = 0; i < options.length; i++) {
		let option = document.createElement('option');
		option.value = options[i].value;
		option.text = options[i].name;
		select.appendChild(option);
	}
	if (getSetting(name)) {
		select.value = getSetting(name);
	} else {
		updateSetting(name, select.value);
	}
	select.addEventListener('change', () => {
		updateSetting(name, select.value);
	});
	return select;
}

function createOutput(): HTMLOutputElement {
	let output = document.createElement('output');
	return output;
}

function createFlexContainer(classes?): HTMLElement {
	let container = document.createElement('div');
	container.classList.add('flex');
	container.classList.add('setting');
	if (classes) {
		container.classList.add(classes);
	}
	return container;
}

export function setDefaultSettings(): void {
	let settings = document.querySelectorAll('[data-setting]');
	settings.forEach((setting: any) => {
		switch (setting.type) {
			case 'number':
			case 'range':
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

export function loadSettings(): void {
	let settings = document.querySelectorAll('[data-setting]');
	settings.forEach((setting: any) => {
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

export function settingsExist(): void {
	if (!localStorage[appName]) {
		setDefaultSettings();
	} else {
		loadSettings();
	}
}

export function getSetting(setting: string) {
	if (!localStorage[appName]) {
		localStorage.setItem(appName, JSON.stringify({}));
		setDefaultSettings();
	}
	return JSON.parse(localStorage[appName])[setting];
}

export function updateSetting(setting: string, value: any) {
	if (!localStorage.getItem(appName)) {
		localStorage.setItem(appName, JSON.stringify({}));
	}
	var save_data = JSON.parse(localStorage[appName]);
	save_data[setting] = value;
	localStorage.setItem(appName, JSON.stringify(save_data));
}

export async function timeout(millis: number): Promise<Function> {
	return new Promise(function (resolve) {
		setTimeout(resolve, millis);
	});
}
