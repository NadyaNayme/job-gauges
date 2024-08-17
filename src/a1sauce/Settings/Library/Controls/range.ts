import {
	createFlexContainer,
	createInput,
	createLabel,
	createOutput,
} from '../../Components';
import { getSetting } from '../../Storage';

import '../Styles/range.css';

export const createRangeSetting = (
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
	const rangeInput = createInput('range', name, defaultValue);
	rangeInput.setAttribute('min', min.toString());
	rangeInput.setAttribute('max', max.toString());

	const value =
		((parseInt(rangeInput.value, 10) - parseInt(rangeInput.min, 10)) /
			(parseInt(rangeInput.max, 10) - parseInt(rangeInput.min))) *
		100;
	rangeInput.style.background =
		'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
		value +
		'%, #0d1c24 ' +
		value +
		'%, #0d1c24 100%)';
	rangeInput.oninput = function () {
		const value =
			((parseInt(rangeInput.value, 10) - parseInt(rangeInput.min, 10)) /
				(parseInt(rangeInput.max, 10) - parseInt(rangeInput.min))) *
			100;
		rangeInput.style.background =
			'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
			value +
			'%, #0d1c24 ' +
			value +
			'%, #0d1c24 100%)';
	};

	const label = createLabel(name, description);
	label.classList.add('full');
	if (getSetting(name) != undefined) {
		rangeInput.value = getSetting(name);
	}
	const output = createOutput();
	output.setAttribute('id', `${name}Output`);
	output.setAttribute('for', name);
	output.innerHTML = rangeInput.value + unit;
	output.after(unit);
	const container = createFlexContainer();
	if (classes.length) {
		for (let i = classes.length; i--; i >= 0) {
			container.classList.add(classes[i]);
		}
	}
	container.classList.add('flex-wrap');
	container.appendChild(label);
	container.appendChild(rangeInput);
	container.appendChild(output);
	rangeInput.addEventListener('rangeInput', () => {
		output.innerHTML = rangeInput.value + unit;
	});
	return container;
};
