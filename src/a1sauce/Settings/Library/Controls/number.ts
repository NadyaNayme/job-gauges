import { createFlexContainer, createInput, createLabel } from "../../Components";


export const createNumberSetting = (
	name: string,
	description: string,
	options: {
		defaultValue?: number;
		min?: number;
		max?: number;
	} = {}
): HTMLElement => {
	const {
		defaultValue = options.defaultValue ?? 10,
		min = options.min ?? 1,
		max = options.max ?? 20,
	} = options;
	const input = createInput('number', name, defaultValue);
	input.id = name;
	input.setAttribute('min', min.toString());
	input.setAttribute('max', max.toString());
	const label = createLabel(name, description);
	const container = createFlexContainer(['reverse-setting']);
	container.appendChild(input);
	container.appendChild(label);
	return container;
}
