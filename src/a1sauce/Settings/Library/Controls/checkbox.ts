import { createCheckboxInput, createFlexContainer, createLabel } from "../../Components";
import { updateSetting } from "../../Storage";


export const createCheckboxSetting = (
	name: string,
	description: string,
	defaultValue: unknown
): HTMLElement => {
	const input = createCheckboxInput(name, defaultValue);
	const label = createLabel(name, description);
	const checkboxLabel = createLabel(name, '');
	const checkbox = document.createElement('span');
	checkbox.classList.add('checkbox');
	checkbox.id = name;
	const container = createFlexContainer(['reverse-setting']);
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
