export const createHeading = (size: string, content: string): HTMLElement => {
	const header = document.createElement(size);
	header.innerHTML = content;
	return header;
}

export const createText = (content: string): HTMLElement => {
	const text = document.createElement('p');
	text.innerHTML = content;
	return text;
}

export const createSmallText = (content: string): HTMLElement => {
	const text = document.createElement('small');
	text.innerHTML = content;
	return text;
}
