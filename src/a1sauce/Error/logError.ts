import './Style/style.css';

type Error = {
	title: string;
	message: string;
};

export class LogError {
	private createErrorContainer = (): HTMLElement => {
		const container = document.createElement('div');
		container.id = 'Error';
		return container;
	};

	private createErrorHeader = (error: Error): HTMLElement => {
		const headerContainer = document.createElement('div');
		headerContainer.classList.add('title-row');
		let header = document.createElement('h2');
		header.innerText = error.title;
		let closeButton = document.createElement('button');
		closeButton.innerText = 'Close Error';
		closeButton.title = 'Close error window';
		closeButton.classList.add('nisbutton');
		closeButton.classList.add('close-button');
		headerContainer.appendChild(header);
		headerContainer.appendChild(closeButton);
		return headerContainer;
	};

	private createErrorMessage = (error: Error): HTMLElement => {
		const msg = document.createElement('div');
		msg.innerHTML = error.message;
		return msg;
	};

	public showError = async (error: Error) => {
		let activeError = document.getElementById('Error');
		if (activeError && activeError.title === error.title) return;

		const container = this.createErrorContainer();
		const headerContainer = this.createErrorHeader(error);
		/*
		 * Null check is suppressed because headerContainer is created above using createErrorHeader
		 * which appends a .close-button element meaning it can't possibly be null
		 */
		headerContainer
			.querySelector('.close-button')!
			.addEventListener('click', () => {
				container.remove();
			});

		container.appendChild(headerContainer);
		container.appendChild(this.createErrorMessage(error));
		document.body.appendChild(container);
	};
}
