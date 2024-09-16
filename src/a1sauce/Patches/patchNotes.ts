import { A1Sauce } from '..';
import { getSetting, updateSetting } from '../Settings/Storage';
import { tempTooltip } from '../Utils/tempTooltip';

import './Style/style.css';

export type PatchNote = {
    date: `${number}/${number}/${number} - ${string} v${string}`;
    note: string[];
};

const sauce = A1Sauce.instance;

export class Patches {
    _notes: PatchNote[] = [];

    public checkForNewVersion = (): boolean => {
        // [0] = Major ; [1] = Minor ; [2] = Patch
        const lastKnownVersion = getSetting('lastKnownVersion');
        const currentVersion = sauce.getVersion();
        updateSetting('lastKnownVersion', currentVersion);
        const isNewVersion = lastKnownVersion !== currentVersion;
        if (isNewVersion) {
            tempTooltip(
                `New update! See ${sauce.getPublicName()} window for patch notes.`,
                5000,
            );
        }
        return isNewVersion;
    };

    public setNotes = (notes: PatchNote[]): Patches => {
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
    };

    private createPatchHeader = (): HTMLElement => {
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('title-row');
        const header = document.createElement('h2');
        header.innerText = 'Patch Notes';
        const closeButton = document.createElement('button');
        closeButton.innerText = 'Close Patch Notes';
        closeButton.title = 'Close patch notes';
        closeButton.classList.add('nisbutton');
        closeButton.classList.add('close-button');
        headerContainer.appendChild(header);
        headerContainer.appendChild(closeButton);
        return headerContainer;
    };

    private addNotesToContainer = (
        notes: PatchNote[],
        container: HTMLElement,
    ): void => {
        const noteContainer = document.createElement('div');
        noteContainer.classList.add('patch-notes');

        for (const note of notes) {
            const noteDate = document.createElement('h3');
            noteDate.innerText = note.date;
            const notesList = document.createElement('ul');
            notesList.classList.add('note');

            for (const details of note.note) {
                const noteText = document.createElement('li');
                noteText.innerText = details;
                notesList.appendChild(noteText);
            }

            noteContainer.appendChild(noteDate);
            noteContainer.appendChild(notesList);
            container.appendChild(noteContainer);
        }
    };

    public showPatchNotes = () => {
        const container = this.createPatchContainer();

        const headerContainer = this.createPatchHeader();
        headerContainer
            .querySelector('.close-button')
            ?.addEventListener('click', () => {
                container.remove();
            });

        container.appendChild(headerContainer);

        const notes = this.getNotes();
        this.addNotesToContainer(notes, container);

        document.body.appendChild(container);
    };
}
