import {
    createDropdown,
    createFlexContainer,
    DropdownOption,
} from '../../Components';
import { createCheckboxSetting } from './checkbox';
import { createRangeSetting } from './range';
import { createText } from './text';

import { appName } from '../../../../data/constants';

import '../Styles/alarm.css';

import PouchDB from 'pouchdb';
const db = new PouchDB(appName);

let alarms: DropdownOption[] = [
    { name: 'alarm2', value: './a1sauce/Settings/Library/Controls/Alarms/alarm2.wav' },
    { name: 'notification1', value: './a1sauce/Settings/Library/Controls/Alarms/notification1.wav' },
    { name: 'notification2', value: './a1sauce/Settings/Library/Controls/Alarms/notification2.wav' },
    { name: 'notification3', value: './a1sauce/Settings/Library/Controls/Alarms/notification3.wav' },
    { name: 'bell', value: './a1sauce/Settings/Library/Controls/Alarms/bell.wav' },
    { name: 'elevator', value: './a1sauce/Settings/Library/Controls/Alarms/elevator.wav' },
    { name: 'nuclear', value: './a1sauce/Settings/Library/Controls/Alarms/nuclear.wav' },
];

export const createAlarmSetting = (
    name: string,
    description: string,
    options: {
        classes?: Array<string>;
    } = {},
): HTMLElement => {
    const { classes = options.classes ?? '' } = options;

    const shortDescription = createText(description);
    const activeCheckbox = createCheckboxSetting(
        name + 'Active',
        'Active',
        false,
    );
    activeCheckbox.classList.add('alarm-active');
    activeCheckbox.style.marginRight = '20px';

    const alertDropdown = createDropdown(name + 'AlertSound', '', alarms);
    alertDropdown.classList.add('alarm-dropdown');
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
};
