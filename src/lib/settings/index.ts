
import { A1Sauce } from "../../a1sauce";
import { getSetting } from "../../a1sauce/Settings/Storage";
import {
	appName,
	majorVersion,
	minorVersion,
	patchVersion,
} from '../../data/constants';
import { setOverlayPosition } from "../utility";

const sauce = A1Sauce.instance;
sauce.setName(appName);
sauce.setVersion(majorVersion, minorVersion, patchVersion);
const settings = sauce.createSettings();

export const renderSettings = async (gauges) => {
	settings
		.addHeader('h2', 'Job Gauges - v' + sauce.getVersion())
		.addText(
			`Please <a href="https://discord.gg/KJ2SgWyJFF" target="_blank" rel="nofollow">join the Discord</a> for any suggestions or support`
		)
		.addSeperator()
		.addHeader('h3', 'General')
		.addCheckboxSetting(
			'checkForUpdates',
			'Periodically check if a new update is available',
			false
		)
		.addDropdownSetting(
			'defaultCombatStyle',
			'Select default combat style',
			getSetting('defaultCombatStyle') ?? '4',
			[
				{ value: '3', name: 'Magic' },
				{ value: '4', name: 'Necromancy' },
			]
		)
		.addCheckboxSetting(
			'automaticSwapping',
			'Swap gauge automatically based on last used Ultimate Ability',
			false
		)
		.addCheckboxSetting(
			'hideOutsideCombat',
			'Hide the overlay while out of combat',
			false
		)
		.addRangeSetting(
			'combatTimer',
			'How long - in seconds - before the player is considered "Out of Combat"',
			{ defaultValue: '5', min: 1, max: 600, unit: 's' }
		)
		.addSeperator()
		.addButton(
			'repositionOverlay',
			'Reposition Overlay',
			setOverlayPosition,
			{
				classes: ['nisbutton'],
			}
		)
		.addSeperator()
		.addHeader('h3', 'Scale')
		.addRangeSetting(
			'scale',
			'Adjusts the size of the overlay. You must reload and reposition the overlay after scaling.',
			{ defaultValue: '100', min: 50, max: 300 }
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
			]
		)
		.addSeperator()
		.addHeader('h3', 'Visible Components')
		.addText('Select which components of the overlay you wish to see.')
		.addCheckboxSetting(
			'showConjures',
			'Show Conjures',
			getSetting('showConjures') ?? true
		)
		.addCheckboxSetting(
			'showLivingDeath',
			'Show Living Death',
			getSetting('showLivingDeath') ?? true
		)
		.addCheckboxSetting(
			'showIncantations',
			'Show Incantations',
			getSetting('showIncantations') ?? true
		)
		.addCheckboxSetting(
			'showInvokeDeath',
			'Show Invoke Death',
			getSetting('showInvokeDeath') ?? true
		)
		.addCheckboxSetting(
			'showDarkness',
			'Show Darkness',
			getSetting('showDarkness') ?? true
		)
		.addCheckboxSetting(
			'showThreads',
			'Show Threads of Fate',
			getSetting('showThreads') ?? true
		)
		.addCheckboxSetting(
			'showSplitSoul',
			'Show Split Soul',
			getSetting('showSplitSoul') ?? true
		)
		.addCheckboxSetting(
			'showSouls',
			'Show Residual Souls',
			getSetting('showSouls') ?? true
		)
		.addCheckboxSetting(
			'showNecrosis',
			'Show Necrosis',
			getSetting('showNecrosis') ?? true
		)
		.addCheckboxSetting(
			'dupeRow',
			'Show 2nd row of Necrosis stacks',
			getSetting('dupeRow') ?? false
		)
		.addCheckboxSetting(
			'useColoredNecrosis',
			'Use orange and red Necrosis Stacks when above certain thresholds',
			getSetting('useColoredNecrosis') ?? false
		)
		.addCheckboxSetting(
			'showBloat',
			'Show Bloat',
			getSetting('showBloat') ?? true
		)
		.addSeperator()
		.addHeader('h3', 'Residual Souls Alarm')
		.addRangeSetting(
			'alarmSoulsThreshold',
			'Alert when at or above this many souls',
			{ defaultValue: '5', min: 2, max: 5, unit: ' souls' }
		)
		.addAlarmSetting('alarmSouls', '')
		.addSeperator()
		.addHeader('h3', 'Necrosis Stacks Alarm')
		.addRangeSetting(
			'alarmNecrosisThreshold',
			'Alert when at or above this many stacks',
			{ defaultValue: '12', min: 2, max: 12, unit: ' stacks' }
		)
		.addAlarmSetting('alarmNecrosis', '')
		.build();
}
