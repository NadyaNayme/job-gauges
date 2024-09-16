import {
    createFlexContainer,
    createInput,
    createLabel,
} from '../../Components';

import { nanoid } from 'nanoid';
import PouchDB from 'pouchdb';
import { appName } from '../../../../data/constants';
import { createButton } from './button';

import '../Styles/file.css';

const db = new PouchDB(appName);

export const createFileSetting = (
    name: string,
    description: string,
    defaultValue: string,
): HTMLElement => {
    function uploadAlarm() {
        const file = input.files?.[0];

        if (!file) {
            throw Error(`Failed to find file when uploading alarm.`);
        }

        db.put({
            _id: nanoid(),
            _attachments: {
                filename: {
                    content_type: file.type,
                    data: file,
                },
            },
            name: file.name,
        })
            .then(() => {
                console.log('File Uploaded');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const input = createInput('file', name, defaultValue);

    input.addEventListener('change', () => {
        const button = innerContainer.querySelector('button');

        if (!button) {
            throw Error(`Failed to find button for file settings.`);
        }

        button.innerText = 'Uploading file...';

        const file = input.files?.[0];

        if (!file) {
            throw Error(`File settings contained no files.`);
        }

        db.put({
            _id: nanoid(),
            _attachments: {
                filename: {
                    content_type: file.type,
                    data: file,
                },
            },
            name: file.name,
        })
            .then(() => {
                button.innerText = 'File Uploaded!';
                setTimeout(() => {
                    const fileInput = <HTMLInputElement>(
                        container.querySelector('input[type="file"]')
                    );
                    fileInput.value = '';
                    button.innerText = 'Upload File';
                }, 6000);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    const label = createLabel(name, description);
    label.setAttribute('for', name);
    const container = createFlexContainer();
    container.classList.add('upload-alarm');
    container.appendChild(label);
    const innerContainer = createFlexContainer();
    innerContainer.appendChild(input);
    innerContainer.appendChild(
        createButton('FileUpload', 'Upload File', uploadAlarm, { classes: [] }),
    );
    container.appendChild(innerContainer);
    return container;
};
