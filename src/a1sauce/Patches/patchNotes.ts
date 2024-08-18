import { A1Sauce } from '..';
import { getSetting, updateSetting } from '../Settings/Storage';
import { tempTooltip } from '../Utils/tempTooltip';

import './Style/style.css';

const sauce = A1Sauce.instance;

type PatchNote = {
	date: string;
	note: string[];
};

export class Patches {
	_notes = [];

	public checkForNewVersion = (): boolean => {
		// [0] = Major ; [1] = Minor ; [2] = Patch
		const lastKnownVersion = getSetting('lastKnownVersion');
		const currentVersion = sauce.getVersion();
		updateSetting('lastKnownVersion', currentVersion);
		console.log(lastKnownVersion);
		console.log(currentVersion);
		return lastKnownVersion !== currentVersion;
	};

	public setNotes = (notes: any[]): Patches => {
		this._notes = notes;
		return this;
	};

	private getNotes = () => {
		return this._notes;
	};

	private createPatchContainer = (): HTMLElement => {
		const container = document.createElement('div');
		container.id = 'PatchNotes';
		return container;
	}

	private createPatchHeader = (): HTMLElement => {
		const headerContainer = document.createElement('div');
		headerContainer.classList.add('title-row');
		let header = document.createElement('h2');
		header.innerText = 'Patch Notes';
		let closeButton = document.createElement('button');
		closeButton.innerText = 'Close Patch Notes';
		closeButton.title = 'Close patch notes';
		closeButton.classList.add('nisbutton');
		closeButton.classList.add('close-button');
		headerContainer.appendChild(header);
		headerContainer.appendChild(closeButton);
		return headerContainer;
	}

	private addNotesToContainer = (notes: any[], container: HTMLElement): void => {
			const noteContainer = document.createElement('div');
			noteContainer.classList.add('patch-notes');
			for (let i = 0; i < notes.length; i++) {
				let noteType: PatchNote = notes[i];
				const noteDate = document.createElement('h3');
				noteDate.innerText = noteType.date;
				const notesList = document.createElement('ul');
				notesList.classList.add('note');

				for (let j = 0; j < noteType.note.length; j++) {
					const noteText = document.createElement('li');
					noteText.innerText = noteType.note[j];
					notesList.appendChild(noteText);
				}

				noteContainer.appendChild(noteDate);
				noteContainer.appendChild(notesList);
				container.appendChild(noteContainer);
			}
	}

	public showPatchNotes = async () => {
		if (this.checkForNewVersion()) {
			const container = this.createPatchContainer();

			const headerContainer = this.createPatchHeader();
			headerContainer.querySelector('.close-button').addEventListener('click', () => {
				container.remove();
			});

			container.appendChild(headerContainer);

			let notes = this.getNotes();
			this.addNotesToContainer(notes, container);

			document.body.appendChild(container);
			tempTooltip(
				`New update! See ${sauce.getPublicName()} window for patch notes.`,
				5000
			);
		}
	};
}
