// export const createProfileManager = (): HTMLElement => {
// 	function saveProfile(): void {
// 		const profileNameInput: HTMLInputElement =
// 			container.querySelector('#ProfileName');
// 		const profileName = profileNameInput.value;
// 		if (profileName.indexOf('|') > -1) {
// 			console.log('Pipe character is not allowed in profile names.');
// 			return;
// 		}
// 		let profiles = localStorage.getItem('bbb_profiles');
// 		if (profiles === null) return;
// 		const profilesArray = localStorage
// 			.getItem(appName+'profiles')
// 			.split('|')
// 			.filter((str) => str !== '');

// 		// If we do not have profiles set it to be empty
// 		if (profiles == undefined) {
// 			profiles = '';
// 		}

// 		// If the profile name doesn't exist in our profiles - add it
// 		if (!profilesArray.includes(profileName)) {
// 			profiles = profiles + '|' + profileName + '|';
// 			localStorage.setItem('bbb_profiles', profiles);
// 		}

// 		// Create and update or store any data
// 		const data = {};
// 		data['Buffs'] = localStorage['Buffs'];
// 		data['Buffs2'] = localStorage['Buffs2'];
// 		data['Buffs3'] = localStorage['Buffs3'];
// 		data['UntrackedBuffs'] = localStorage['UntrackedBuffs'];
// 		data['Settings'] = JSON.parse(localStorage[appName]);
// 		localStorage.setItem(
// 			`bbb_profile_${profileName}`,
// 			JSON.stringify(data)
// 		);
// 		console.log(
// 			`${profileName} added to profiles. Existing profiles: \n ${profiles}`
// 		);
// 		location.reload();
// 	}

// 	function deleteProfile(): void {
// 		const index = container.querySelector('select').selectedIndex;
// 		const profileName =
// 			container.querySelector('select').options[index].text;
// 		console.log(`Deleting: ${profileName} profile`);
// 		let profiles = localStorage
// 			.getItem('bbb_profiles')
// 			.split('|')
// 			.filter((str) => str !== '');
// 		profiles = profiles.filter((item) => item !== profileName);
// 		localStorage.setItem('bbb_profiles', profiles.join('|') + '|');
// 		localStorage.removeItem(`bbb_profile_${profileName}`);
// 		location.reload();
// 	}

// 	function loadProfile(): void {
// 		const index = container.querySelector('select').selectedIndex;
// 		if (index !== 0) {
// 			const profiles = localStorage
// 				.getItem('bbb_profiles')
// 				.split('|')
// 				.filter((str) => str !== '');
// 			const storageName = profiles[index - 1];
// 			const data = JSON.parse(
// 				localStorage.getItem(`bbb_profile_${storageName}`)
// 			);
// 			if (data['Buffs'] !== undefined && data['Buffs'] !== '') {
// 				localStorage.setItem('Buffs', data['Buffs']);
// 			}
// 			if (data['Buffs2'] !== undefined && data['Buffs2'] !== '') {
// 				localStorage.setItem('Buffs2', data['Buffs2']);
// 			}
// 			if (data['Buffs3'] !== undefined && data['Buffs3'] !== '') {
// 				localStorage.setItem('Buffs3', data['Buffs3']);
// 			}
// 			if (
// 				data['UntrackedBuffs'] !== undefined &&
// 				data['UntrackedBuffs'] !== ''
// 			) {
// 				localStorage.setItem('UntrackedBuffs', data['UntrackedBuffs']);
// 			}
// 			Object.entries(data['Settings']).forEach((setting) => {
// 				updateSetting(setting[0], setting[1]);
// 			});
// 		}
// 		location.reload();
// 	}

// 	const profileOptions = [{ value: '0', name: 'Select Profile' }];
// 	let profiles;
// 	if (localStorage.getItem('bbb_profiles')) {
// 		profiles = localStorage
// 			.getItem('bbb_profiles')
// 			.split('|')
// 			.filter((str) => str !== '');
// 		profiles.forEach((profile, index) => {
// 			profileOptions.push({ value: index.toString(), name: profile });
// 		});
// 	} else {
// 		profiles = '|';
// 	}

// 	const profileHeader = createHeading('h3', 'Profiles');
// 	const profileText = createText(
// 		'Select a profile to load or delete. To save a new profile, give it a name in the field below and then click Save. To update an existing profile save a profile using the same name.'
// 	);
// 	const saveButton = createButton('Save', saveProfile, {
// 		classes: ['nisbutton'],
// 	});
// 	const profileName = createInput('text', 'ProfileName', '');
// 	profileName.classList.add('profile-name');
// 	const loadOptions = createDropdownSetting(
// 		'Profile',
// 		'',
// 		'Add',
// 		profileOptions
// 	);
// 	loadOptions.classList.add('profile-list');
// 	loadOptions.querySelector('select').selectedIndex = 0;
// 	const loadButton = createButton('Load', loadProfile, {
// 		classes: ['nisbutton'],
// 	});
// 	loadButton.classList.add('load-btn');
// 	const deleteButton = createButton('Delete', deleteProfile, {
// 		classes: ['nisbutton', 'delete'],
// 	});
// 	const container = createFlexContainer();
// 	container.classList.remove('flex');
// 	const endSeperator = createSeperator();
// 	container.classList.add('flex-wrap');
// 	container.appendChild(profileHeader);
// 	container.appendChild(profileText);
// 	container.appendChild(loadOptions);
// 	container.appendChild(document.createElement('br'));
// 	container.appendChild(saveButton);
// 	container.appendChild(profileName);
// 	container.appendChild(loadButton);
// 	container.appendChild(deleteButton);
// 	container.appendChild(endSeperator);
// 	return container;
// }
