export const notes = [
	// Add patch notes to top
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
