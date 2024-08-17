import { createDropdown, createFlexContainer, DropdownOption } from "../../Components";
import { createCheckboxSetting } from "./checkbox";
import { createRangeSetting } from "./range";
import { createText } from "./text";

import '../Styles/alarm.css';

const alarms: DropdownOption[] = [
	{ name: 'alarm2', value: './resource/alarms/alarm2.wav' },
	{ name: 'notification1', value: './resource/alarms/notification1.wav' },
	{ name: 'notification2', value: './resource/alarms/notification2.wav' },
	{ name: 'notification3', value: './resource/alarms/notification3.wav' },
	{ name: 'bell', value: './resource/alarms/bell.wav' },
	{ name: 'elevator', value: './resource/alarms/elevator.wav' },
	{ name: 'nuclear', value: './resource/alarms/nuclear.wav' },
];

export const createAlarmSetting = (
	headerText: string,
	name: string,
	description: string,
	options: {
		classes?: Array<string>;
		defaultValue?: string;
		min?: number;
		max?: number;
		unit?: string;
	} = {}
): HTMLElement => {
	const {
		classes = options.classes ?? '',
		defaultValue = options.defaultValue ?? '100',
		min = options.min ?? 0,
		max = options.max ?? 100,
		unit = options.unit ?? '%',
	} = options;

	const shortDescription = createText(description);
	const activeCheckbox = createCheckboxSetting(
		name + 'Active',
		'Active',
		false
	);
	activeCheckbox.classList.add('alarm-active');
	activeCheckbox.style.marginRight = '20px';
	const alertDropdown = createDropdown(name + 'AlertSound', '', alarms);
	alertDropdown.classList.add('full');
	alertDropdown.style.marginBottom = '5px';
	const loopCheckbox = createCheckboxSetting(name + 'Loop', 'Loop', false);
	loopCheckbox.classList.add('alarm-looping');
	const volumeSlider = createRangeSetting(name + 'Volume', '', {
		defaultValue: '100',
		unit: '%',
		min: 0,
		max: 100,
	});
	volumeSlider.classList.add('half');
	volumeSlider.classList.add('alarm-volume');

	const alarmSoundText = createText('Alarm Sound');
	alarmSoundText.classList.add('full');
	alarmSoundText.classList.add('alarm-sound');
	alarmSoundText.style.paddingTop = '0px';
	alarmSoundText.style.marginTop = '0px';

	const volumeText = createText('Volume');
	volumeText.style.marginTop = '-1px';
	volumeText.style.marginRight = '5px';
	volumeText.classList.add('half');
	volumeText.style.paddingTop = '0px';

	const container = createFlexContainer(['flex-wrap']);
	container.classList.add('alarm-setting');
	if (classes.length) {
		for (let i = classes.length; i--; i >= 0) {
			container.classList.add(classes[i]);
		}
	}
	container.appendChild(shortDescription);
	const innerContainer = createFlexContainer();
	innerContainer.appendChild(activeCheckbox);
	innerContainer.appendChild(loopCheckbox);
	innerContainer.classList.remove('setting');
	container.appendChild(innerContainer);
	container.appendChild(alarmSoundText);
	container.appendChild(alertDropdown);
	container.appendChild(volumeText);
	container.appendChild(volumeSlider);
	return container;
}
