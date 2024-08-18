import { A1Sauce } from '..';
import { appName } from '../../data/constants';
import { getSetting, updateSetting } from '../Settings/Storage';
import { capitalizeAppName } from '../Utils/capitalizeName';
import { timeout } from '../Utils/timeout';

import './Style/style.css';

const sauce = A1Sauce.instance;
sauce.setName(appName);

type PatchNote = {
	date: string;
	note: string[];
};

export class Patches {
	_notes = [];

	public checkForNewVersion = () => {
		// [0] = Major ; [1] = Minor ; [2] = Patch
		const lastKnownVersion = getSetting('lastKnownVersion');
		const currentVersion = sauce.getVersion();
		updateSetting('lastKnownVersion', currentVersion);
		console.log(lastKnownVersion);
		console.log(currentVersion);
		return lastKnownVersion !== currentVersion;
	};

	public setNotes = (notes) => {
		this._notes = notes;
	};

	private getNotes = () => {
		return this._notes;
	};

	public showPatchNotes = async () => {
		if (this.checkForNewVersion()) {
			const container = document.createElement('div');
			container.id = 'PatchNotes';

			const innerContainer = document.createElement('div');
			innerContainer.classList.add('title-row');

			let header = document.createElement('h2');
			header.innerText = 'Patch Notes';
			let closeButton = document.createElement('button');
			closeButton.innerText = 'Close Patch Notes';
			closeButton.title = 'Close patch notes';
			closeButton.classList.add('nisbutton');
			closeButton.classList.add('close-button');
			closeButton.addEventListener('click', () => {
				container.remove();
			});
			innerContainer.appendChild(header);
			innerContainer.appendChild(closeButton);
			container.appendChild(innerContainer);

			let notes = this.getNotes();
			for (let i = 0; i < notes.length; i++) {
				let noteType: PatchNote = notes[i];
				const noteContainer = document.createElement('div');
				noteContainer.classList.add('patch-notes');
				const noteDate = document.createElement('h3');
				noteDate.innerText =noteType.date;
				const notesList = document.createElement('ul');
				notesList.classList.add('note');

				for (let j = 0; j <noteType.note.length; j++) {
					const noteText = document.createElement('li');
					noteText.innerText =noteType.note[j];
					notesList.appendChild(noteText);
				}

				noteContainer.appendChild(noteDate);
				noteContainer.appendChild(notesList);
				container.appendChild(noteContainer);
			}

			//container.style.height = window.innerHeight.toString();
			document.body.appendChild(container);
			alt1.setTooltip(
				`New update! See ${sauce.getPublicName()} window for patch notes.`
			);
			await timeout(5000).then(() => {
				alt1.clearTooltip();
			});
		}
	};
}
