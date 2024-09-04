/* eslint-disable @typescript-eslint/no-require-imports */
import * as a1lib from 'alt1';
import * as ChatReader from 'alt1/chatbox';
import * as utility from '../utility';
import { Overlay } from '../../types';
import { keys } from 'lodash';
import { StackingPlayerBuff } from '../../types/common';

const spellImages = a1lib.webpackImages({
	bloodTithe: require('../.././asset/data/magic/spells/blood_tithe.data.png'),
	glacialEmbrace: require('../.././asset/data/magic/spells/glacial_embrace.data.png'),
	iceBarrage: require('../.././asset/data/magic/spells/ice_barrage.data.png'),
	noSpell: require('../.././asset/data/magic/spells/no_spell.data.png'),
});

let chat = new ChatReader.default();
chat.diffRead = true;
chat.diffReadUseTimestamps = true;
chat.readargs = {
	colors: [
		a1lib.mixColor(255, 255, 255),
		a1lib.mixColor(127, 169, 255),
		a1lib.mixColor(132, 212, 119),
	],
};

const SPELL_TEXT = {
	'Main-hand spell set to: Exsanguinate.': 'Exsanguinate',
	'Main-hand and off-hand spells set to: Exsanguinate.': 'Exsanguinate',
	'Main-hand spell set to: Incite Fear.': 'Incite Fear',
	'Main-hand and off-hand spells set to: Incite Fear.': 'Incite Fear',
	'Main-hand spell set to: Ice Barrage.': 'Ice Barrage',
	'Main-hand and off-hand spells set to: Ice Barrage.': 'Ice Barrage',
};

const getChat = () => {
	if (chat) {
		if (!chat.pos) {
			chat.find();
		}
	}
};

let scaledOnce = false;

export async function spellsOverlay(gauges: Overlay) {
	getChat();
	readChatbox(gauges);

	const { spells } = gauges.magic;

	if (!spells.isActiveOverlay) {
		return;
	}

	await spellImages.promise;

	if (!scaledOnce) {
		Object.keys(spellImages).forEach(async (key) => {
			spellImages[key] = await utility.resizeImageData(
				spellImages[key],
				gauges.scaleFactor
			);
		});
		scaledOnce = true;
	}

	const { position } = spells.bloodTithe;
	const { x, y } = position.active_orientation;

	alt1.overLaySetGroup('Spells');

	switch (spells.activeSpell) {
		case 1:
			displaySpellImage(spellImages.bloodTithe);
			displaySpellStacks(gauges.magic.spells.bloodTithe);
			break;
		case 2:
			displaySpellImage(spellImages.glacialEmbrace);
			displaySpellStacks(gauges.magic.spells.glacialEmbrace);
			break;
		case 3:
			displaySpellImage(spellImages.iceBarrage);
			break;
		default:
			displaySpellImage(spellImages.noSpell);
			break;
	}

	function displaySpellImage(image: ImageData): void {
		alt1.overLayImage(
			utility.adjustPositionForScale(
				gauges.magic.position.x + x,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.magic.position.y + y,
				gauges.scaleFactor
			),
			a1lib.encodeImageString(image.toDrawableData()),
			image.width,
			1000
		);
	}

	function displaySpellStacks(spell: StackingPlayerBuff): void {
		if (isNaN(spell.stacks)) return;
		alt1.overLaySetGroup(`Spell_Text`);
		alt1.overLayFreezeGroup(`Spell_Text`);
		alt1.overLayClearGroup(`Spell_Text`);
		alt1.overLayTextEx(
			spell.stacks === 0 ? '' : spell.stacks.toString(),
			utility.white,
			14,
			utility.adjustPositionForScale(
				gauges.magic.position.x + x + 26,
				gauges.scaleFactor
			),
			utility.adjustPositionForScale(
				gauges.magic.position.y + y + 23,
				gauges.scaleFactor
			),
			3000,
			undefined,
			true,
			true
		);
		alt1.overLayRefreshGroup('Spell_Text');
	}

	async function readChatbox(gauges: Overlay) {
		if (chat && chat.pos && chat.pos.boxes[0] !== undefined) {
			// alt1.overLayRect(
			// 	utility.red,
			// 	chat.pos.mainbox.rect.x,
			// 	chat.pos.mainbox.rect.y,
			// 	chat.pos.mainbox.rect.width,
			// 	chat.pos.mainbox.rect.height,
			// 	10000,
			// 	2
			// );
			let chatLines = chat.read();
			let pocketMessages = keys(SPELL_TEXT);
			chatLines?.forEach((line) => {
				let match = pocketMessages.find((message) =>
					line.text.includes(message)
				);
				if (match?.indexOf('Exsanguinate') > -1) {
					gauges.magic.spells.activeSpell = 1;
					resetSpellText();
				}
				if (match?.indexOf('Incite Fear') > -1) {
					gauges.magic.spells.activeSpell = 2;
					resetSpellText();
				}
				if (match?.indexOf('Ice Barrage') > -1) {
					gauges.magic.spells.activeSpell = 3;
					resetSpellText();
				}
			});
		}
	}
}

function resetSpellText() {
	alt1.overLayFreezeGroup(`Spell_Text`);
	alt1.overLayClearGroup(`Spell_Text`);
	alt1.overLayRefreshGroup('Spell_Text');
}
