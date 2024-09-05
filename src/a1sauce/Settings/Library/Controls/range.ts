import { timeout } from '../../../Utils/timeout';
import {
	createFlexContainer,
	createInput,
	createLabel,
	createOutput,
} from '../../Components';
import { getSetting, updateSetting } from '../../Storage';

import '../Styles/range.css';

let isMouseDown = false;
async function updateRangeValue(rangeInput: HTMLInputElement, add: boolean) {
	if (add) {
		rangeInput.value = String(parseInt(rangeInput.value, 10) + 1);
	} else {
		rangeInput.value = String(parseInt(rangeInput.value, 10) - 1);
	}
	rangeInput.dispatchEvent(new Event('input', { bubbles: true }));
	updateSetting(rangeInput.id, rangeInput.value);
	await timeout(50);
	if (isMouseDown) updateRangeValue(rangeInput, add);
}

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

	const minusButton = document.createElement('div');
	minusButton.classList.add('minus-btn');
	minusButton.classList.add('nis-btn');
	minusButton.addEventListener('mousedown', () => {
		isMouseDown = true;
		updateRangeValue(rangeInput, false);
	});

	const plusButton = document.createElement('div');
	plusButton.classList.add('plus-btn');
	plusButton.classList.add('nis-btn');
	plusButton.addEventListener('mousedown', () => {
		isMouseDown = true;
		updateRangeValue(rangeInput, true);
	});

	minusButton.addEventListener('mouseleave', () => {
		isMouseDown = false;
	});

	plusButton.addEventListener('mouseleave', () => {
		isMouseDown = false;
	});

	document.addEventListener('mouseleave', () => {
		isMouseDown = false;
	});

	minusButton.onmouseup = () => {
		isMouseDown = false;
	};

	plusButton.onmouseup = () => {
		isMouseDown = false;
	};

	document.addEventListener('mouseup', () => {
		isMouseDown = false;
	});

	const flexcontainer = document.createElement('div');
	flexcontainer.classList.add('flex');
	flexcontainer.classList.add('flex-between-center');

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
	flexcontainer.appendChild(minusButton);
	flexcontainer.appendChild(rangeInput);
	flexcontainer.appendChild(plusButton);
	container.appendChild(flexcontainer);
	container.appendChild(output);
	rangeInput.addEventListener('input', () => {
		output.innerHTML = rangeInput.value + unit;
	});
	return container;
};
