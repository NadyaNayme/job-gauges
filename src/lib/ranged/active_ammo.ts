/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as utility from '../utility';
import * as BuffReader from 'alt1/buffs';
import { Overlay } from '../../types';

var quiverImages = a1lib.webpackImages({
	bik: require('../../asset/data/buffs/RangedAmmo/bik_arrows.data.png'),
	ful: require('../../asset/data/buffs/RangedAmmo/ful_arrows.data.png'),
	jas_dragonbane: require('../../asset/data/buffs/RangedAmmo/jas_dragonbane.data.png'),
	wen: require('../../asset/data/buffs/RangedAmmo/wen_arrows.data.png'),
	blackstone: require('../../asset/data/buffs/RangedAmmo/blackstone_arrows.data.png'),
	deathspore: require('../../asset/data/buffs/RangedAmmo/deathspore_arrows-quiver.data.png'),
	diamond_bak: require('../../asset/data/buffs/RangedAmmo/diamond_bak_bolts.data.png'),
	hydrix_bak: require('../../asset/data/buffs/RangedAmmo/hydrix_bak_bolts.data.png'),
	ruby_bak: require('../../asset/data/buffs/RangedAmmo/ruby_bak_bolts.data.png'),
	onyx_bak: require('../../asset/data/buffs/RangedAmmo/onyx_bak_bolts.data.png'),
});

let lastAmmo: string;

export async function findAmmo(gauges: Overlay, buffs: BuffReader.Buff[]) {
	if (!buffs) {
		return;
	}

	let ammmoActive: number = 0;
	let currentAmmo = '';

	for (let [_key, value] of Object.entries(buffs)) {
		let checkBik = value.countMatch(quiverImages.bik, false);
		let checkFul = value.countMatch(quiverImages.ful, false);
		let checkWen = value.countMatch(quiverImages.wen, false);
		let checkJas = value.countMatch(quiverImages.jas_dragonbane, false);
		let checkBlackstone = value.countMatch(quiverImages.blackstone, false);
		let checkDeathspores = value.countMatch(quiverImages.deathspore, false);
		let checkDiamond = value.countMatch(quiverImages.diamond_bak, false);
		let checkHydrix = value.countMatch(quiverImages.hydrix_bak, false);
		let checkRuby = value.countMatch(quiverImages.ruby_bak, false);
		let checkOnyx = value.countMatch(quiverImages.onyx_bak, false);

		if (checkBik.failed == 0 || checkBik.passed > 28) {
			currentAmmo = 'BIK';
			ammmoActive++;
		}
		if (checkFul.failed == 0 || checkFul.passed > 28) {
			currentAmmo = 'FUL';
			ammmoActive++;
		}
		if (checkWen.failed == 0 || checkWen.passed > 28) {
			currentAmmo = 'WEN';
			ammmoActive++;
		}
		if (checkJas.failed == 0 || checkJas.passed > 28) {
			currentAmmo = 'JAS';
			ammmoActive++;
		}
		if (checkBlackstone.failed == 0 || checkBlackstone.passed > 28) {
			currentAmmo = 'BSD';
			ammmoActive++;
		}
		if (checkDeathspores.failed == 0 || checkDeathspores.passed > 28) {
			currentAmmo = 'DSP';
			ammmoActive++;
		}
		if (checkDiamond.failed == 0 || checkDiamond.passed > 180) {
			currentAmmo = 'BAK (D)';
			ammmoActive++;
		}
		if (checkHydrix.failed == 0 || checkHydrix.passed > 180) {
			currentAmmo = 'BAK (H)';
			ammmoActive++;
		}
		if (checkRuby.failed == 0 || checkRuby.passed > 180) {
			currentAmmo = 'BAK (R)';
			ammmoActive++;
		}
		if (checkOnyx.failed == 0 || checkOnyx.passed > 180) {
			currentAmmo = 'BAK (O)';
			ammmoActive++;
		}
	}

	if (ammmoActive === 0) {
		gauges.ranged.ammo.activeAmmo = '';
	} else {
		gauges.ranged.ammo.activeAmmo = currentAmmo;
		if (lastAmmo !== currentAmmo) {
			lastAmmo = currentAmmo;
		}
	}
	displayAmmoName(gauges, currentAmmo);
}

function displayAmmoName(gauges: Overlay, ammo: string): void {
	alt1.overLaySetGroup(`Ammo_Text`);
	alt1.overLayFreezeGroup(`Ammo_Text`);
	alt1.overLayClearGroup(`Ammo_Text`);
	alt1.overLayTextEx(
		gauges.ranged.ammo.activeAmmo,
		utility.white,
		14,
		utility.adjustPositionForScale(
			gauges.ranged.position.x,
			gauges.scaleFactor
		),
		utility.adjustPositionForScale(
			gauges.ranged.position.y + 80,
			gauges.scaleFactor
		),
		3000,
		undefined,
		true,
		true
	);
	alt1.overLayRefreshGroup('Ammo_Text');
}
