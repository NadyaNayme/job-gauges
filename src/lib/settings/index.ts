import { findBuffAndDebuffBars } from '../..';
import { A1Sauce } from '../../a1sauce';
import { Patches } from '../../a1sauce/Patches/patchNotes';
import { getSetting, updateSetting } from '../../a1sauce/Settings/Storage';
import {
    appName,
    majorVersion,
    minorVersion,
    patchVersion,
} from '../../data/constants';
import { notes } from '../../patchnotes';
import { Overlay } from '../../types';
import { setOverlayPosition } from '../utility';

import PouchDB from 'pouchdb';

const sauce = A1Sauce.instance;
sauce.setName(appName);
sauce.setVersion(majorVersion, minorVersion, patchVersion);
const settings = sauce.createSettings();

const db = new PouchDB(appName);

const patchNotes = new Patches();
patchNotes.setNotes(notes);

export const renderSettings = async (gauges: Overlay) => {
    settings
        .addHeader('h2', 'Job Gauges - v' + sauce.getVersion())
        .addText(
            `Please <a href="https://discord.gg/KJ2SgWyJFF" target="_blank" rel="nofollow">join the Discord</a> for any suggestions or support`,
        )
        .addSeperator()
        .addHeader('h3', 'General')
        .addCheckboxSetting(
            'checkForUpdates',
            'Periodically check if a new update is available',
            false,
        )
        .addCheckboxSetting(
            'rememberUiPosition',
            'Remember last known position of buff/debuff bars to avoid needing to scan on every app start',
            false,
        )
        .addDropdownSetting(
            'defaultCombatStyle',
            'Select default combat style',
            getSetting('defaultCombatStyle') ?? '4',
            [
                { value: '2', name: 'Ranged' },
                { value: '3', name: 'Magic' },
                { value: '4', name: 'Necromancy' },
            ],
        )
        .addCheckboxSetting(
            'automaticSwapping',
            'Swap gauge automatically based on last used Ultimate Ability',
            false,
        )
        .addCheckboxSetting(
            'hideOutsideCombat',
            'Show gauges only while "In Combat"',
            false,
        )
        .addRangeSetting(
            'combatTimer',
            'Seconds until Player is no longer "In Combat" after Target Information goes away',
            { defaultValue: '5', min: 1, max: 600, unit: 's' },
        )
        .addSeperator()
        .addButton(
            'repositionOverlay',
            'Reposition Overlay',
            () => setOverlayPosition(gauges),
            {
                classes: ['nisbutton'],
            },
        )
        .addSeperator()
        .addHeader('h3', 'Scale')
        .addRangeSetting(
            'scale',
            'Adjusts the size of the overlay. You must reload and reposition the overlay after scaling.',
            { defaultValue: '100', min: 50, max: 300 },
        )
        .addSeperator()
        .addHeader('h3', 'Incantation Placement')
        .addDropdownSetting(
            'selectedOrientation',
            'Select how to group Incantations',
            getSetting('selectedOrientation') ?? 'reverse_split',
            [
                { value: 'grouped', name: 'Grouped' },
                { value: 'split', name: 'Split' },
                { value: 'reverse_split', name: 'Reverse Split' },
            ],
        )
        .addSeperator()
        .addHeader('h3', 'Visible Components')
        .addText('Select which components of the overlay you wish to see.')
        .addCheckboxSetting(
            'showConjures',
            'Show Conjures',
            getSetting('showConjures') ?? true,
        )
        .addCheckboxSetting(
            'showLivingDeath',
            'Show Living Death',
            getSetting('showLivingDeath') ?? true,
        )
        .addCheckboxSetting(
            'showIncantations',
            'Show Incantations',
            getSetting('showIncantations') ?? true,
        )
        .addCheckboxSetting(
            'showInvokeDeath',
            'Show Invoke Death',
            getSetting('showInvokeDeath') ?? true,
        )
        .addCheckboxSetting(
            'showDarkness',
            'Show Darkness',
            getSetting('showDarkness') ?? true,
        )
        .addCheckboxSetting(
            'showThreads',
            'Show Threads of Fate',
            getSetting('showThreads') ?? true,
        )
        .addCheckboxSetting(
            'showSplitSoul',
            'Show Split Soul',
            getSetting('showSplitSoul') ?? true,
        )
        .addCheckboxSetting(
            'showSouls',
            'Show Residual Souls',
            getSetting('showSouls') ?? true,
        )
        .addCheckboxSetting(
            'pre95Souls',
            'Only show 3 Residual Souls / No Soulbound Lantern',
            getSetting('pre95Souls') ?? false,
        )
        .addCheckboxSetting(
            'showNecrosis',
            'Show Necrosis',
            getSetting('showNecrosis') ?? true,
        )
        .addCheckboxSetting(
            'dupeRow',
            'Show 2nd row of Necrosis stacks',
            getSetting('dupeRow') ?? false,
        )
        .addCheckboxSetting(
            'useColoredNecrosis',
            'Use orange and red Necrosis Stacks when above certain thresholds',
            getSetting('useColoredNecrosis') ?? false,
        )
        .addCheckboxSetting(
            'showBloat',
            'Show Bloat',
            getSetting('showBloat') ?? true,
        )
        .addSeperator()
        .addHeader('h2', 'Alarms')
        .addFileSetting('customAlarms', 'Upload a custom alarm', '')
        .addHeader('h3', 'Residual Souls Alarm')
        .addRangeSetting(
            'alarmSoulsThreshold',
            'Alert when at or above this many souls',
            { defaultValue: '5', min: 2, max: 5, unit: ' souls' },
        )
        .addAlarmSetting('alarmSouls', '')
        .addSeperator()
        .addHeader('h3', 'Necrosis Stacks Alarm')
        .addRangeSetting(
            'alarmNecrosisThreshold',
            'Alert when at or above this many stacks',
            { defaultValue: '12', min: 2, max: 12, unit: ' stacks' },
        )
        .addAlarmSetting('alarmNecrosis', '')
        .addSeperator()
        .addButton(
            'openPatchNotes',
            'Open Patch Notes',
            patchNotes.showPatchNotes,
            { classes: ['nisbutton'] },
        )
        .addButton(
            'resetPositons',
            'Scan for Buff and Debuff Bars',
            findBuffAndDebuffBars,
            { classes: ['nisbutton'] },
        )
        .addText(
            'Use the above Scan button if you have adjusted your screen in any way and Job Gauges is no longer working.',
        )
        .build();

    db.allDocs({ include_docs: true, attachments: true, binary: true })
        .then((result) => {
            result.rows.forEach((row) => {
                let alarmDropdowns =
                    document.querySelectorAll('.alarm-dropdown');
                for (let i = 0; i < alarmDropdowns.length; i++) {
                    let option = document.createElement('option');
                    // @ts-ignore
                    option.value = `Custom:${row.doc._id}`;
                    // @ts-ignore
                    option.innerText = `${row.doc.name}`;
                    alarmDropdowns[i].appendChild(option);
                }
            });
        })
        .then(() => {
            let alarmDropdowns = document.querySelectorAll('.alarm-dropdown');
            alarmDropdowns.forEach((dropdown) => {
                dropdown.addEventListener('change', (e) => {
                    let target = <HTMLSelectElement>e.target;
                    let settingName = target.id;
                    updateSetting(settingName, target.value);
                });
                let dd = <HTMLSelectElement>dropdown;
                dd.value = getSetting(dropdown.id);
            });
        });
};
