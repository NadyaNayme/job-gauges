
const appName = 'job-gauges';

export function createHeading(size: string, content: string): HTMLElement {
	const header = document.createElement(size);
	header.innerHTML = content;
	return header;
}

export function createText(content: string): HTMLElement {
	const text = document.createElement('p');
	text.innerHTML = content;
	return text;
}

export function createSmallText(content: string): HTMLElement {
	const text = document.createElement('small');
	text.innerHTML = content;
	return text;
}

export function createSeperator(): HTMLElement {
	return document.createElement('hr');
}

export function createButton(
	content: string,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	fn: Function,
	options: { classes: Array<string> }
): HTMLButtonElement {
	const { classes = options.classes } = options;
	const button = document.createElement('button');
	button.innerHTML = content;
	if (classes.length) {
		for (let i = classes.length; i--; i >= 0) {
			button.classList.add(classes[i]);
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
	defaultValue: unknown,
	options: DropdownOption[]
): HTMLElement {
	const select = createDropdown(name, defaultValue, options);
	const label = createLabel(name, description);
	const container = createFlexContainer('reverse-setting');
	container.appendChild(select);
	container.appendChild(label);
	return container;
}

export function createTextSetting(
	name: string,
	description: string,
	defaultValue: string
): HTMLElement {
	const input = createInput('text', name, defaultValue);
	const label = createLabel(name, description);
	label.setAttribute('for', name);
	const container = createFlexContainer();
	container.appendChild(input);
	container.appendChild(label);
	return container;
}

export function createCheckboxSetting(
	name: string,
	description: string,
	defaultValue: unknown
): HTMLElement {
	const input = createCheckboxInput(name, defaultValue);
	const label = createLabel(name, description);
	const checkboxLabel = createLabel(name, '');
	const checkbox = document.createElement('span');
	checkbox.classList.add('checkbox');
	const container = createFlexContainer('reverse-setting');
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
	const {
		defaultValue = options.defaultValue ?? 10,
		min = options.min ?? 1,
		max = options.max ?? 20,
	} = options;
	const input = createInput('number', name, defaultValue);
	input.setAttribute('min', min.toString());
	input.setAttribute('max', max.toString());
	const label = createLabel(name, description);
	const container = createFlexContainer('reverse-setting');
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
	const {
		classes = options.classes ?? '',
		defaultValue = options.defaultValue ?? '100',
		min = options.min ?? 0,
		max = options.max ?? 100,
		unit = options.unit ?? '%',
	} = options;
	const input = createInput('range', name, defaultValue);
	input.setAttribute('min', min.toString());
	input.setAttribute('max', max.toString());
	const label = createLabel(name, description);
	label.classList.add('full');
	if (getSetting(name) != undefined) {
		input.value = getSetting(name);
	}
	const output = createOutput();
	output.setAttribute('id', `${name}Output`);
	output.setAttribute('for', name);
	output.innerHTML = input.value + unit;
	output.after(unit);
	const container = createFlexContainer();
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
		const profileNameInput: HTMLInputElement =
			container.querySelector('#ProfileName');
		const profileName = profileNameInput.value;
		if (profileName.indexOf('|') > -1) {
			console.log('Pipe character is not allowed in profile names.');
			return;
		}
		let profiles = localStorage.getItem('bbb_profiles');
		const profilesArray = localStorage
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
		const data = {};
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
		const index = container.querySelector('select').selectedIndex;
		const profileName =
			container.querySelector('select').options[index].text;
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
		const index = container.querySelector('select').selectedIndex;
		if (index !== 0) {
			const profiles = localStorage
				.getItem('bbb_profiles')
				.split('|')
				.filter((str) => str !== '');
			const storageName = profiles[index - 1];
			const data = JSON.parse(
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

	const profileOptions = [{ value: '0', name: 'Select Profile' }];
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

	const profileHeader = createHeading('h3', 'Profiles');
	const profileText = createText(
		'Select a profile to load or delete. To save a new profile, give it a name in the field below and then click Save. To update an existing profile save a profile using the same name.'
	);
	const saveButton = createButton('Save', saveProfile, {
		classes: ['nisbutton'],
	});
	const profileName = createInput('text', 'ProfileName', '');
	profileName.classList.add('profile-name');
	const loadOptions = createDropdownSetting(
		'Profile',
		'',
		'Add',
		profileOptions
	);
	loadOptions.classList.add('profile-list');
	loadOptions.querySelector('select').selectedIndex = 0;
	const loadButton = createButton('Load', loadProfile, {
		classes: ['nisbutton'],
	});
	loadButton.classList.add('load-btn');
	const deleteButton = createButton('Delete', deleteProfile, {
		classes: ['nisbutton', 'delete'],
	});
	const container = createFlexContainer();
	container.classList.remove('flex');
	const endSeperator = createSeperator();
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
	const label = document.createElement('label');
	label.setAttribute('for', name);
	label.innerHTML = description;
	return label;
}

function createInput(
	type: string,
	name: string,
	defaultValue: unknown
): HTMLInputElement {
	const input = document.createElement('input');
	input.id = name;
	input.type = type;
	input.dataset.setting = name;
	input.dataset.defaultValue = defaultValue.toString();
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

function createCheckboxInput(
	name: string,
	defaultValue: unknown
): HTMLInputElement {
	const input = document.createElement('input');
	input.id = name;
	input.type = 'checkbox';
	input.dataset.setting = name;
	input.dataset.defaultValue = defaultValue.toString();
	input.checked = Boolean(defaultValue);
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
	defaultValue: unknown,
	options: DropdownOption[]
): HTMLSelectElement {
	const select = document.createElement('select');
	select.id = name;
	select.dataset.setting = name;
	select.dataset.defaultValue = defaultValue.toString();
	select.value = defaultValue.toString();
	if (getSetting(name)) {
		select.value = getSetting(name);
	}
	for (let i = 0; i < options.length; i++) {
		const option = document.createElement('option');
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
	const output = document.createElement('output');
	return output;
}

function createFlexContainer(classes?): HTMLElement {
	const container = document.createElement('div');
	container.classList.add('flex');
	container.classList.add('setting');
	if (classes) {
		container.classList.add(classes);
	}
	return container;
}

export function setDefaultSettings(): void {
	const settings = document.querySelectorAll('[data-setting]');
	settings.forEach((setting: HTMLInputElement) => {
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
	const settings = document.querySelectorAll('[data-setting]');
	settings.forEach((setting: HTMLInputElement) => {
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

export function updateSetting(setting: string, value: unknown) {
	if (!localStorage.getItem(appName)) {
		localStorage.setItem(appName, JSON.stringify({}));
	}
	const save_data = JSON.parse(localStorage[appName]);
	save_data[setting] = value;
	localStorage.setItem(appName, JSON.stringify(save_data));
}

export async function timeout(millis: number): Promise<unknown> {
	return new Promise(function (resolve) {
		setTimeout(resolve, millis);
	});
}
