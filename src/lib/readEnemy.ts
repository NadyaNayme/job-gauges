import * as a1lib from 'alt1';
import TargetMob from 'alt1/targetmob';
import { roundedToFixed } from './utility';
import { getSetting } from '../a1sauce/Settings/Storage';
import { store } from '../state';
import { NecromancyGaugeSlice } from '../state/gauge-data/necromancy-gauge.state';
import { GaugeDataSlice } from '../state/gauge-data/gauge-data.state';

const targetDisplay = new TargetMob();

const enemyDebuffImages = a1lib.webpackImages({
    invokeDeath: require('../asset/data/enemyDebuffs/death-mark.data.png'),
    bloat: require('../asset/data/enemyDebuffs/bloated.data.png'),
});

// Thanks to rodultra97 for PR to previous repo
const bloatInterval = new Map();
const bloatString = 'bloat';

const combatInterval = new Map();
const outOfCombat = 'isInCombat';
let combatTimer = -1;

export async function readEnemy() {
    const { gaugeData } = store.getState();

    //TODO: Store LastPos and detect when to rescan to avoid spamming CHFRS in loop
    const targetData = targetDisplay.read();

    if (combatTimer < 0) {
        combatTimer = parseInt(getSetting('combatTimer'), 10);
    }

    if (gaugeData.checkCombatStatus) {
        if (targetData) {
            store.dispatch(GaugeDataSlice.actions.updateState({ isInCombat: true }));
            if (combatInterval.has(outOfCombat)) {
                clearInterval(combatInterval.get(outOfCombat));
                combatInterval.delete(outOfCombat);
            }
        } else if (!targetData && !combatInterval.has(outOfCombat)) {
            const intervalId = setInterval(() => {
                const currentTick = combatTimer;

                if (currentTick > 0) {
                    combatTimer = currentTick - 1;
                } else if (!targetData) {
                    store.dispatch(GaugeDataSlice.actions.updateState({ isInCombat: false }));

                    combatTimer = parseInt(getSetting('combatTimer'), 10);
                }
            }, 1000);

            combatInterval.set(outOfCombat, intervalId);
        }
    } else {
        if (!gaugeData.isInCombat) {
            store.dispatch(GaugeDataSlice.actions.updateState({ isInCombat: true }));
        }

        if (combatInterval.has(outOfCombat)) {
            clearInterval(combatInterval.get(outOfCombat));
            combatInterval.delete(outOfCombat);
        }
    }

    if (!(targetData && gaugeData.isInCombat)) {
        store.dispatch(NecromancyGaugeSlice.actions.updateActiveIncantation({ active: false, incantation: 0 }));
        store.dispatch(NecromancyGaugeSlice.actions.updateBloat({ active: false, time: 0 }));
        return;
    }

    const target_display_loc = {
        x: (targetDisplay?.lastpos?.x ?? 0) - 120,
        y: (targetDisplay?.lastpos?.y ?? 0) + 20,
        w: 150,
        h: 60,
    };

    const targetDebuffs = a1lib.captureHold(
        target_display_loc.x,
        target_display_loc.y,
        target_display_loc.w,
        target_display_loc.h,
    );

    const targetIsDeathMarked = targetDebuffs.findSubimage(
        enemyDebuffImages.invokeDeath,
    ).length;

    store.dispatch(NecromancyGaugeSlice.actions.updateActiveIncantation({
        active: !!targetIsDeathMarked,
        incantation: 0,
    }));

    const targetIsBloated = targetDebuffs.findSubimage(
        enemyDebuffImages.bloat,
    ).length;

    if (targetIsBloated && !bloatInterval.has(bloatString)) {
        store.dispatch(NecromancyGaugeSlice.actions.updateBloat({
            active: true,
            time: 20.5,
        }));

        const intervalId = setInterval(() => {
            const { bloat } = store.getState().necromancy
            const currentTick = bloat.time;
            const timeRemaining = parseFloat(roundedToFixed(currentTick - 0.6, 1));

            if (currentTick <= 0) {
                clearInterval(bloatInterval.get(bloat));
                bloatInterval.delete(bloat);
            }

            store.dispatch(NecromancyGaugeSlice.actions.updateBloat({
                time: currentTick > 0 ? timeRemaining : 0,
            }));
        }, 600);
        bloatInterval.set(bloatString, intervalId);
    } else if (!targetIsBloated) {
        if (bloatInterval.has(bloatString)) {
            clearInterval(bloatInterval.get(bloatString));
            bloatInterval.delete(bloatString);
        }

        store.dispatch(NecromancyGaugeSlice.actions.updateBloat({
            time: 0,
            active: false,
        }));
    }
}
