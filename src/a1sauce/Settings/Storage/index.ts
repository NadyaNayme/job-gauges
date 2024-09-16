import { A1Sauce } from '../../index';

export const setDefaultSettings = (): void => {
    const settings =
        document.querySelectorAll<HTMLInputElement>('[data-setting]');

    for (const setting of settings) {
        if (setting.dataset.setting === undefined)
            throw Error(`Setting (${setting.id}) is missing a data-setting`);

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
    }
};

export const setDefaultNumberOrRange = (setting: HTMLInputElement) => {
    if (setting.dataset.defaultValue === undefined)
        throw Error('Range input value is undefined');

    updateSetting(
        setting.dataset.setting,
        parseInt(setting.dataset.defaultValue, 10),
    );
};

export const setDefaultCheckbox = (setting: HTMLInputElement) => {
    if (setting.dataset.defaultValue == 'false') {
        updateSetting(setting.dataset.setting, false);
    } else {
        updateSetting(setting.dataset.setting, true);
    }
};

export const setDefaultOther = (setting: HTMLInputElement) => {
    updateSetting(setting.dataset.setting, setting.dataset.defaultValue);
};

export const loadSettings = (): void => {
    const settings =
        document.querySelectorAll<HTMLInputElement>('[data-setting]');

    for (const dataSetting of settings) {
        if (dataSetting.dataset.setting === undefined)
            throw Error(
                `Setting (${dataSetting.id}) is missing a data-setting`,
            );

        const { setting, defaultValue } = dataSetting.dataset;

        switch (dataSetting.type) {
            case 'number':
            case 'range':
                dataSetting.value = getSetting(setting) ?? defaultValue;
                break;
            case 'checkbox':
                dataSetting.checked = getSetting(setting) || defaultValue;
                break;
            default:
                dataSetting.value = getSetting(setting) || defaultValue;
        }
    }
};

export const settingsExist = (): void => {
    const sauce = A1Sauce.instance;

    if (!localStorage[sauce.getName()]) {
        setDefaultSettings();
    } else {
        loadSettings();
    }
};

export const getSetting = (setting: string) => {
    const sauce = A1Sauce.instance;

    if (!localStorage[sauce.getName()]) {
        localStorage.setItem(sauce.getName(), JSON.stringify({}));
        setDefaultSettings();
    }

    return JSON.parse(localStorage[sauce.getName()])[setting];
};

export const updateSetting = (setting: string | undefined, value: unknown) => {
    if (!setting) {
        throw Error(`Failed to updating setting as it's invalid.`);
    }

    const sauce = A1Sauce.instance;

    if (!localStorage.getItem(sauce.getName())) {
        localStorage.setItem(sauce.getName(), JSON.stringify({}));
    }

    const save_data = JSON.parse(localStorage[sauce.getName()]);
    save_data[setting] = value;
    localStorage.setItem(sauce.getName(), JSON.stringify(save_data));
};
