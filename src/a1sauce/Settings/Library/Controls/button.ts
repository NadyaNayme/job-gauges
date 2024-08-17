export const createButton = (
	name: string,
	content: string,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	fn: any,
	options: { classes: Array<string> }
): HTMLButtonElement => {
	const { classes = options.classes } = options;
	const button = document.createElement('button');
	button.id = name;
	button.innerHTML = content;
	if (classes.length) {
		for (let i = classes.length; i--; i >= 0) {
			button.classList.add(classes[i]);
		}
	}
	button.addEventListener('click', () => {
		fn();
	});
	return button;
}
