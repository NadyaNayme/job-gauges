import * as a1lib from 'alt1';


export let white = a1lib.mixColor(255, 255, 255);

export async function forceClearOverlay(overlay: string) {
	alt1.overLaySetGroup(overlay);
	alt1.overLayFreezeGroup(overlay);
	alt1.overLayClearGroup(overlay);
	alt1.overLayRefreshGroup(overlay);
	console.log('Force cleared: ' + overlay);
	return;
}
