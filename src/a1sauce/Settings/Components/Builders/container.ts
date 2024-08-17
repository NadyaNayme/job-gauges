
export const createFlexContainer = (classes?: string[]): HTMLElement => {
	const container = document.createElement('div');
	container.classList.add('flex');
	container.classList.add('setting');
	if (classes !== undefined && classes.length) {
		for (let i = 0; i < classes.length; i++) {
			container.classList.add(classes[i]);
		}
	}
	return container;
}

export const createOutput = (): HTMLOutputElement => {
	const output = document.createElement('output');
	return output;
}
