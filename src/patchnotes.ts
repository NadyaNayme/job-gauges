import { PatchNote } from './a1sauce/Patches/patchNotes';

export const notes: PatchNote[] = [
    // Add patch notes to top
    {
        date: '09/28/2024 - Hotfix v.1.2.1',
        note: [
            `Added ability to position each job gauge independently of one another for those looking for a little more control over placement so you don't need to reposition the gauge anytime you change combat styles`,
            `Alongside that is a button to move all of the gauges at once - like before - for people who don't care about individually positioning each gauge`,
            `ECB spec no longer swaps the user to the Ranged Job Gauge`,
            `Fixed Death's Swiftness tracking by using the updated buff image from Oct. 2023`,
            `Fixed various issues such as using Death's Swiftness swapping the user to Necromancy Gauge instead of Ranged Gauge`,
        ],
    },
    {
        date: '09/28/2024 - Redux Refactor v.1.2.0',
        note: [
            `More wizardry from Panku - most of Job Gauges has been rewritten to track the state of things better and by doing so a number of improvements were made.`,
            `Text should no longer flicker when counting down cooldown timers`,
            `Soulfire tracking has been significantly improved - it may still lose track of the cooldown from 39-24s or so but should no longer be plagued with false positives and junk data`,
            `The dropdown to change the active gauge is now separate buttons - to make it a little faster to switch. The styles of these buttons will be adjusted in the future.`,
            `Switching between gauges should feel snappier`,
            `Alarm playback should be more consistent and actually sound the alarm the first time the alarm threshold is crossed`,
            `Alarms thresholds are now properly "at or above  instead of only "above"`,
            `The setting about swapping on last used ultimate has been further clarified that only certain ultimates trigger an automatic change`,
            `Blame Nyu if stuff is broken she pushed the release out early on accident`,
        ],
    },
    {
        date: '09/19/2024 - Opt-in "Remember Buff/Debuff Positions" v.1.1.4',
        note: [
            `Added a setting to opt-in to the recently removed "remember buff/debuff bar position" functionality. The functionality was removed in a recent release because it made the plugin difficult to use on more than one account at a time. Please only enable the setting if you do not adjust your UI very often and only play on a single account.`,
        ],
    },
    {
        date: '09/15/2024 - Better Error Handling v.1.1.3',
        note: [
            `Error handling has been improved significantly. Errors now provide clearer messages to help with troubleshooting.`,
            `Job Gauges received its first contribution from another developer with @Panku making their first contribution. A large amount of refactoring some old copy/pasted junk code and adding additional type safety to the codebase. While these changes are invisible to users they are quite important for development.`,
        ],
    },
    {
        date: '09/08/2024 - Various Fixes v1.1.2',
        note: [
            `There is now an option to display 3 residual soul stacks for users who do not have a Soulbound Lantern. The setting is found under the visibility settings`,
            `The Ranged Gauge has been updated to match the Magic gauge aesthetic. None of the functionality was adjusted.`,
            `Any text overlays are now cleared when the gauge changes combat styles`,
            `Greater variants of Death's Swiftness and Sunshine should now have a more appropriate cooldown timer. Sorry, no Planted Feet support (yet)`,
            `Buff/Debuff Bar locations are now scanned for once before loading the last known position. This should reduce the need to reset locations after adjusting your interface.`,
            `Speaking of the "Reset Buffs and Debuffs Positions" please use that button if you move your buffs/debuffs or if Job Gauges seems to not be reading your buffs/debuffs then reload the app`,
            `Wording has been adjusted for some settings to be more clear as to what the setting does`,
            `Some old debug logging has been removed`,
            `The styles for the out of combat range slider have been fixed on initial load if you had set a value above 100`,
        ],
    },
    {
        date: '09/03/2024 - Magic Gauge cleanup v.1.1.1',
        note: [
            `Positioning of tracked items has been adjusted`,
            `Dual Wield spell tracking has been fixed (for real this time)`,
            `Some special handling of Sign of Life being a false positive for Ode of Deceit has been fixed. Unfortunately other false positives may still occur occasionally`,
            `Circles are out, hexagons are in`,
        ],
    },
    {
        date: '09/03/2024 - Ranged Gauge & Soulfire v.1.1.0',
        note: [
            `Similar to the barebones Magic Gauge - a Ranged Gauge has been added. The Ranged Gauge tracks your active ammo (must be in quiver, not all types are tracked only the most "meta" options), Perfect Eqilibruim stacks, Death's Swiftness, and Seren Godbow's Crystal Rain special attack. Eldritch Crossbow's Split Soul tracking is expected to be added soon.`,
            `Soulfire tracking has been added to the Magic Gauge`,
            `Crystal Rain and Soulfire are tracked using the Debuffs bar - and in order to succesfully be tracked Job Gauges must know where your debuffs are located. When loading the app it is recommended to use a defensive ability and activate your prayer for a brief period of time so that Job Gauges can find your buffs & debuffs bars.`,
            `Phantom Guardian duration tracking has been added to Conjure Undead Army - Phantom's Valour stacks may be added in a future update`,
            `Future updates will add visibility toggles for each individual ranged/magic overlay similar to the Necromancy overlays.`,
        ],
    },
    {
        date: '08/30/2024 - Magic Gauge Fixes v.1.0.9',
        note: [
            `Spell is now tracked when Dual Wield weapons are used`,
            `Necromancy Incantation Placement no longer messes with Magic Gauge positioning`,
            `The Out of Combat timer is now tracked properly and should be more reliable and properly respect the setting for how long to wait to consider the player out of combat`,
            `Possibly fixed a bug with Custom Sound Necrosis Alamrm not triggering - although I wasn't able to replicate the issue so I am not 100% sure I fixed it`,
            `Several minor code improvements`,
        ],
    },
    {
        date: '08/25/2024 - Custom Alarm Sounds v.1.0.8',
        note: [
            `You can now upload Custom Alarms. These save locally to an IndexDB within your Alt1 Chromium Browser. IndexDB has limited storage space.`,
        ],
    },
    {
        date: '08/25/2024 - Magic Gauge & Better Errors v.1.0.7',
        note: [
            `Magic Gauge has been added! It currently tracks Sunshine, Tsunami, Instability (FSOA Spec), Blood Tithe (Exsanguinate) stacks, and Glacial Embrace (Incite Fear) stacks`,
            `The Magic Gauge is quite barebones! More functionality will be added over time. If there is something you'd like to see please join the Discord and let me know!`,
            `Gauge will automatically swap when an Ultimate is used (Sunshine for Magic, Living Death for Necromancy)`,
            `Settings to disable the automatic swapping and to select a default combat style have been added`,
            `A new setting to adjust how many seconds to wait before considering the player to be "Out of Combat" has been added`,
            `Added better error messages if Buff Size is set to Medium or Large as those sizes are not supported by Alt1`,
        ],
    },
    {
        date: '08/18/2024 - Hotfix v.1.0.6',
        note: [`Fixed patch notes styling`],
    },
    {
        date: '8/18/2024 - Bug Fixes & Testing v1.0.5',
        note: [
            `Changes Necrosis stacks threshold to match previous thresholds in NJG. The new thresholds are 0-4 Purple ; 6-10 Orange ; 12 Red`,
            `In response to feedback the Red Necrosis Stacks have been made brighter and more obvious`,
            `Fixed positioning of 2nd Necrosis Stacks row when scale was set to a non-100% value`,
            `Fixed the value of range inputs not saving to settings if the - / + buttons were used to set the final value`,
            `Began adding tests to A1 Sauce to catch and prevent feature regressions and broken behavior`,
            `v1.0.4 is being skipped as it was used to test the version checking option from v1.0.3 and had no patch notes`,
        ],
    },
    {
        date: '8/18/2024 - Version Checking v1.0.3',
        note: [
            `Added option to periodically check if a new update is available and alert the user to refresh at their convenience to receive the new update.`,
            `Fix Necrosis alarm as it was still broken in v1.0.2`,
        ],
    },
    {
        date: '8/18/2024 - Alarm Hotfix v1.0.2',
        note: [`Fixed alarm sounds not...alarming`],
    },
    {
        date: '8/17/2024 - Internal Rewrite v1.0.1',
        note: [
            `Added patch notes that will show when the user opens the app for the first time with a new version`,
            `Added setting to change Necrosis Stacks orange or red when above certain thresholds. Defalt value: Off`,
            `Toggling visibility of individuals components should no longer take 3s~ for the overlay to unrender`,
            `Repositioning the overlay updates position less frequently but no longer causes screen tearing`,
            `Massively refactored code to speed up future development`,
            `Improved look of range input settings`,
            `Improved look of Alarm settings`,
            `Added -/+ buttons for range settings`,
        ],
    },
];
