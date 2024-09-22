import * as a1lib from 'alt1';
import ChatReader from 'alt1/chatbox';
import { ActiveSpellNames, ActiveSpells } from '../../types';
import { StackingPlayerBuff } from '../../types/common';
import { adjustPositionForScale, handleResizingImages, white } from '../utility';
import { store } from '../../state';

const spellImages = a1lib.webpackImages({
    bloodTithe: require('../.././asset/gauge-ui/magic/active-spell/blood-tithe.data.png'),
    glacialEmbrace: require('../.././asset/gauge-ui/magic/active-spell/glacial-embrace.data.png'),
    iceBarrage: require('../.././asset/gauge-ui/magic/active-spell/ice-barrage.data.png'),
    noSpell: require('../.././asset/gauge-ui/magic/active-spell/no-spell.data.png'),
});

const chat = new ChatReader;
chat.diffRead = true;
chat.diffReadUseTimestamps = true;
chat.readargs = {
    colors: [
        a1lib.mixColor(255, 255, 255),
        a1lib.mixColor(127, 169, 255),
        a1lib.mixColor(132, 212, 119),
    ],
};

const SPELL_TEXT: Record<string, ActiveSpellNames> = {
    'Main-hand spell set to: Exsanguinate.': 'Exsanguinate',
    'Main-hand and off-hand spells set to: Exsanguinate.': 'Exsanguinate',
    'Main-hand spell set to: Incite Fear.': 'Incite_Fear',
    'Main-hand and off-hand spells set to: Incite Fear.': 'Incite_Fear',
    'Main-hand spell set to: Ice Barrage.': 'Ice_Barrage',
    'Main-hand and off-hand spells set to: Ice Barrage.': 'Ice_Barrage',
};

const getChat = () => {
    if (!chat.pos) {
        chat.find();
    }
};

let scaledOnce = false;

export async function spellsOverlay() {
    getChat();
    readChatbox();

    const magic = store.getState().magic;
    const gaugeData = store.getState().gaugeData;

    const { spells } = magic;

    if (!spells.isActiveOverlay) {
        return;
    }

    await spellImages.promise;

    if (!scaledOnce) {
        handleResizingImages(spellImages, gaugeData.scaleFactor);

        scaledOnce = true;
    }

    const { position } = spells.bloodTithe;
    const { x, y } = position.active_orientation;

    alt1.overLaySetGroup('Spells');

    switch (spells.activeSpell) {
        case 1:
            displaySpellImage(spellImages.bloodTithe);
            displaySpellStacks(magic.spells.bloodTithe);
            break;
        case 2:
            displaySpellImage(spellImages.glacialEmbrace);
            displaySpellStacks(magic.spells.glacialEmbrace);
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
            adjustPositionForScale(
                magic.position.x + x,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                magic.position.y + y,
                gaugeData.scaleFactor,
            ),
            a1lib.encodeImageString(image.toDrawableData()),
            image.width,
            1000,
        );
    }

    function displaySpellStacks(spell: StackingPlayerBuff): void {
        if (isNaN(spell.stacks)) return;
        alt1.overLaySetGroup(`Spell_Text`);
        alt1.overLayFreezeGroup(`Spell_Text`);
        alt1.overLayClearGroup(`Spell_Text`);
        alt1.overLayTextEx(
            `${spell.stacks || ''}`,
            white,
            14,
            adjustPositionForScale(
                magic.position.x + x + 26,
                gaugeData.scaleFactor,
            ),
            adjustPositionForScale(
                magic.position.y + y + 23,
                gaugeData.scaleFactor,
            ),
            3000,
            '',
            true,
            true,
        );
        alt1.overLayRefreshGroup('Spell_Text');
    }

    function readChatbox() {
        const magic = store.getState().magic;

        if (!chat.pos || !chat.pos.boxes[0]) {
            return;
        }

        const chatLines = chat.read();
        const pocketMessages = Object.keys(SPELL_TEXT);

        for (const line of chatLines ?? []) {
            const match = pocketMessages.find((m) => line.text.includes(m));

            if (!match) continue;

            magic.spells.activeSpell = ActiveSpells[SPELL_TEXT[match]];
            resetSpellText();
        }
    }
}

function resetSpellText() {
    alt1.overLayFreezeGroup(`Spell_Text`);
    alt1.overLayClearGroup(`Spell_Text`);
    alt1.overLayRefreshGroup('Spell_Text');
}
