export const getById = (id: string): HTMLElement | null => {
	let el = document.getElementById(id);
	if (el) return el;
	return null;
};
