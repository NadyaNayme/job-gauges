import { resetPositionsAndFindBuffAndDebuffBars } from '../..';
import { A1Sauce } from '../../a1sauce';
import { Patches } from '../../a1sauce/Patches/patchNotes';
import { getSetting, updateSetting } from '../../a1sauce/Settings/Storage';
import { appName, majorVersion, minorVersion, patchVersion } from '../../data/constants';
import { notes } from '../../patchnotes';
import { forceClearOverlays, setOverlayPosition } from '../utility';

import PouchDB from 'pouchdb';
import { store } from '../../state';
import { GaugeDataSlice } from '../../state/gauge-data/gauge-data.state';
import { NecromancyGaugeSlice } from '../../state/gauge-data/necromancy-gauge.state';
import { CombatStyle } from '../../types';

const sauce = A1Sauce.instance;
sauce.setName(appName);
sauce.setVersion(majorVersion, minorVersion, patchVersion);
const settings = sauce.createSettings();

const db = new PouchDB(appName);

const patchNotes = new Patches();
patchNotes.setNotes(notes);

function updateCombatStyle(combatStyle: CombatStyle) {
    store.dispatch(GaugeDataSlice.actions.updateCombatStyle(combatStyle));

    forceClearOverlays();
}

export const renderSettings = () => {
    settings
        .addText(
            `
            <a class="external-button discord-button" href="https://discord.gg/KJ2SgWyJFF" target="_blank" rel="nofollow"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><path fill="#fff" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg></span>Join the Discord Server</a>
            <a class="external-button kofi-button" href="https://ko-fi.com/nadyanayme" target="_blank" rel="nofollow"><span class="icon"><svg width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/></svg></span>Support me on Ko-fi</a>
            `,
        )
        .addSeperator()
        .addHeader('h2', 'Job Gauges ' + sauce.getVersion())
        .addSeperator()
        .addHeader('h3', 'Change Active Gauge')
        .addButton(
            'necromancyCombatStyle',
            'Necromancy',
            () => updateCombatStyle(CombatStyle.necromancy),
            { classes: ['nisbutton-small'] },
        )
        .addButton(
            'magicCombatStyle',
            'Magic',
            () => updateCombatStyle(CombatStyle.magic),
            { classes: ['nisbutton-small'] },
        )
        .addButton(
            'rangedCombatStyle',
            'Ranged',
            () => updateCombatStyle(CombatStyle.ranged),
            { classes: ['nisbutton-small'] },
        )
        .addSeperator()
        .addButton(
            'repositionOverlay',
            'Position Active Gauge',
            () => setOverlayPosition(false),
            { classes: ['nisbutton'] },
        )
        .addButton(
            'repositionOverlay',
            'Position All Gauges',
            () => setOverlayPosition(true),
            { classes: ['nisbutton'] },
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
            true,
        )
        .addCheckboxSetting(
            'automaticSwapping',
            "Swap gauge automatically when Living Death, Sunshine, or Death's Swiftness are used",
            false,
            (event) =>
                store.dispatch(
                    GaugeDataSlice.actions.updateState({
                        automaticSwapping: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'hideOutsideCombat',
            'Show gauges only while "In Combat"',
            false,
            (event) => {
                store.dispatch(
                    GaugeDataSlice.actions.updateState({
                        checkCombatStatus: event,
                        isInCombat: false,
                    }),
                );
            },
        )
        .addRangeSetting(
            'combatTimer',
            'Seconds until Player is no longer "In Combat" after Target Information goes away',
            { defaultValue: '5', min: 1, max: 600, unit: 's' },
        )
        .addCheckboxSetting(
            'hideExternalButtons',
            'Hide Discord & Ko-fi buttons',
            false,
        )
        .addSeperator()
        .addHeader('h3', 'Scale')
        .addRangeSetting(
            'scale',
            'Adjusts the size of the overlay. You must reload and reposition the overlay after scaling.',
            { defaultValue: '100', min: 50, max: 300 },
            (scaleFactor) => {
                store.dispatch(
                    GaugeDataSlice.actions.updateState({
                        scaleFactor: scaleFactor / 100,
                    }),
                );
                location.reload();
            },
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
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateIsActiveOverlay({
                        key: 'conjures',
                        isActiveOverlay: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'showLivingDeath',
            'Show Living Death',
            getSetting('showLivingDeath') ?? true,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateIsActiveOverlay({
                        key: 'livingDeath',
                        isActiveOverlay: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'showIncantations',
            'Show Incantations',
            getSetting('showIncantations') ?? true,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateIsActiveOverlay({
                        key: 'incantations',
                        isActiveOverlay: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'showInvokeDeath',
            'Show Invoke Death',
            getSetting('showInvokeDeath') ?? true,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateIncantationActive({
                        key: 'invokeDeath',
                        isActiveOverlay: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'showDarkness',
            'Show Darkness',
            getSetting('showDarkness') ?? true,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateIncantationActive({
                        key: 'darkness',
                        isActiveOverlay: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'showThreads',
            'Show Threads of Fate',
            getSetting('showThreads') ?? true,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateIncantationActive({
                        key: 'threads',
                        isActiveOverlay: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'showSplitSoul',
            'Show Split Soul',
            getSetting('showSplitSoul') ?? true,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateIncantationActive({
                        key: 'splitSoul',
                        isActiveOverlay: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'showSouls',
            'Show Residual Souls',
            getSetting('showSouls') ?? true,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateStacksAbility({
                        stackType: 'souls',
                        stack: { isActiveOverlay: event },
                    }),
                ),
        )
        .addCheckboxSetting(
            'pre95Souls',
            'Only show 3 Residual Souls / No Soulbound Lantern',
            getSetting('pre95Souls') ?? false,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateStacks({
                        pre95Souls: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'showNecrosis',
            'Show Necrosis',
            getSetting('showNecrosis') ?? true,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateStacksAbility({
                        stackType: 'necrosis',
                        stack: { isActiveOverlay: event },
                    }),
                ),
        )
        .addCheckboxSetting(
            'dupeRow',
            'Show 2nd row of Necrosis stacks',
            getSetting('dupeRow') ?? false,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateStacks({
                        duplicateNecrosisRow: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'useColoredNecrosis',
            'Use orange and red Necrosis Stacks when above certain thresholds',
            getSetting('useColoredNecrosis') ?? false,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateStacks({
                        useColoredNecrosis: event,
                    }),
                ),
        )
        .addCheckboxSetting(
            'showBloat',
            'Show Bloat',
            getSetting('showBloat') ?? true,
            (event) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateBloat({
                        isActiveOverlay: event,
                    }),
                ),
        )
        .addSeperator()
        .addHeader('h2', 'Alarms')
        .addFileSetting('customAlarms', 'Upload a custom alarm', '')
        .addHeader('h3', 'Residual Souls Alarm')
        .addRangeSetting(
            'alarmSoulsThreshold',
            'Alert when at or above this many souls',
            { defaultValue: '5', min: 2, max: 5, unit: ' souls' },
            (threshold) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateStackAlarm({
                        stackName: 'souls',
                        alarm: { threshold },
                    }),
                ),
        )
        .addAlarmSetting('alarmSouls', '')
        .addSeperator()
        .addHeader('h3', 'Necrosis Stacks Alarm')
        .addRangeSetting(
            'alarmNecrosisThreshold',
            'Alert when at or above this many stacks',
            { defaultValue: '12', min: 2, max: 12, unit: ' stacks' },
            (threshold) =>
                store.dispatch(
                    NecromancyGaugeSlice.actions.updateStackAlarm({
                        stackName: 'necrosis',
                        alarm: { threshold },
                    }),
                ),
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
            resetPositionsAndFindBuffAndDebuffBars,
            { classes: ['nisbutton'] },
        )
        .addText(
            'Use the above Scan button if you have adjusted your screen in any way and Job Gauges is no longer working.',
        )
        .build();

    db.allDocs({ include_docs: true, attachments: true, binary: true })
        .then((result) => {
            for (const row of result.rows) {
                if (!row.doc) {
                    console.error(`Doc for row was undefined.`);
                    return;
                }

                const alarmDropdowns = document.querySelectorAll('.alarm-dropdown');
                for (let i = 0; i < alarmDropdowns.length; i++) {
                    const option = document.createElement('option');
                    option.value = `Custom:${row.doc._id}`;
                    // @ts-ignore
                    option.innerText = `${row.doc.name}`;
                    alarmDropdowns[i].appendChild(option);
                }
            }
        })
        .then(() => {
            const alarmDropdowns = document.querySelectorAll('.alarm-dropdown');
            alarmDropdowns.forEach((dropdown) => {

                dropdown.addEventListener('change', (e) => {
                    const target = <HTMLSelectElement>e.target;
                    const settingName = target.id;
                    updateSetting(settingName, target.value);
                });
                const dd = <HTMLSelectElement>dropdown;
                dd.value = getSetting(dropdown.id);
            });
        });
};
