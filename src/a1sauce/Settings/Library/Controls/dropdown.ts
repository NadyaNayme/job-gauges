import { createDropdown, createFlexContainer, createLabel, DropdownOption } from "../../Components";


export const createDropdownSetting = (
	name: string,
	description: string,
	defaultValue: number,
	options: DropdownOption[]
): HTMLElement => {
	const select = createDropdown(name, defaultValue, options);
	const label = createLabel(name, description);
	select.id = name;
	select.selectedIndex = defaultValue;
	const container = createFlexContainer(['reverse-setting']);
	container.appendChild(select);
	container.appendChild(label);
	return container;
}
