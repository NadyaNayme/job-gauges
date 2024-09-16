import {
    createDropdown,
    createFlexContainer,
    createLabel,
    DropdownOption,
} from '../../Components';

export const createDropdownSetting = (
    name: string,
    description: string,
    defaultValue: number | string,
    options: DropdownOption[],
): HTMLElement => {
    const select = createDropdown(name, defaultValue, options);
    const label = createLabel(name, description);
    select.id = name;
    if (typeof defaultValue === 'number') select.selectedIndex = defaultValue;
    if (typeof defaultValue === 'string') {
        for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].value === defaultValue) {
                select.selectedIndex = i;
                break;
            }
        }
    }
    const container = createFlexContainer(['reverse-setting']);
    container.appendChild(select);
    container.appendChild(label);
    return container;
};
