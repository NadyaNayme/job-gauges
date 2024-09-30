type Position = {
    x: number;
    y: number;
};

type Overlay = {
    name: string;
    active: boolean;
    position: Position;
    duration: number;
    category: string;
};

type ImageOverlayData = {
    image: string;
    width: number;
};

type TextOverlayData = {
    text: string;
	size: number;
    color: number;
};

type RectOverlayData = {
    color: number;
    x: number;
    y: number;
    width: number;
    height: number;
    duration: number;
    lineWidth: number;
};

export type ImageOverlay = Overlay & ImageOverlayData;
export type TextOverlay = Overlay & TextOverlayData;
export type RectOverlay = Overlay & RectOverlayData;

type Overlays = ImageOverlay | TextOverlay | RectOverlay;

interface OverlaysManagerInterface {
    Overlays: Overlays[];

    updateOverlay(overlay: Overlays): void;
    getOverlay(name: string): Overlay | undefined;
    overlayExists(name: string): boolean;
    freezeOverlays(): void;
    clearOverlays(): void;
    continueOverlays(): void;
    forceClearOverlays(): void;
    refreshOverlay(name: string): void;
    freezeOverlay(name: string): void;
    clearOverlay(name: string): void;
    continueOverlay(name: string): void;
    forceClearOverlay(name: string): void;
    drawImageOverlay(overlay: ImageOverlay): void;
    drawTextOverlay(overlay: TextOverlay): void;
    drawRectOverlay(overlay: RectOverlay): void;
}

export const OverlaysManager: OverlaysManagerInterface = {
    Overlays: [],

    /**
     * Updates an existing managed overlay and if one does not exist adds it to the managed overlays
     * @param overlay - All necessary metadata to draw the overlay
     */
    updateOverlay(overlay: Overlays) {
        const existingOverlayIndex = OverlaysManager.Overlays.findIndex(
            (existing) => existing.name === overlay.name,
        );
        if (existingOverlayIndex >= 0) {
            OverlaysManager.Overlays[existingOverlayIndex] = {
                ...OverlaysManager.Overlays[existingOverlayIndex],
                ...overlay,
            };
        } else {
            OverlaysManager.Overlays.push(overlay);

            // Text overlays should always draw one higher than image overlays so that they appear above
            if (isTextOverlay(overlay)) {
                alt1.overLaySetGroupZIndex(overlay.name, 3);
            }
            if (isImageOverlay(overlay)) {
                alt1.overLaySetGroupZIndex(overlay.name, 1);
            }
        }
        if (isImageOverlay(overlay)) {
            OverlaysManager.drawImageOverlay(overlay);
        }
        if (isTextOverlay(overlay)) {
            OverlaysManager.drawTextOverlay(overlay);
        }
        if (isRectOverlay(overlay)) {
            OverlaysManager.drawRectOverlay(overlay);
        }
    },

    /**
     * Get an overlay by name
     * @param name - String that is used to refer to the Overlay
     * @returns Overlay with matching name
     */
    getOverlay(name: string) {
        return OverlaysManager.Overlays.find((overlay) => {
            overlay.name === name;
        });
    },

    overlayExists(name: string): boolean {
        return OverlaysManager.Overlays.some(
            (overlay) => overlay.name === name,
        );
    },

    /**
     * Freezes all managed overlays. This will prevent Alt1 from updating them until continueOverlays() is called
     */
    freezeOverlays() {
        OverlaysManager.Overlays.forEach((overlay) => {
            alt1.overLayFreezeGroup(overlay.name);
        });
    },

    /**
     * Clears all existing overlays
     */
    clearOverlays() {
        OverlaysManager.Overlays.forEach((overlay) => {
            alt1.overLayClearGroup(overlay.name);
        });
    },

    /**
     * Continue rendering all managed overlays
     */
    continueOverlays() {
        OverlaysManager.Overlays.forEach((overlay) => {
            alt1.overLayContinueGroup(overlay.name);
        });
    },

    /**
     * Used to force a redraw of all existing managed overlays at once
     */
    forceClearOverlays() {
        OverlaysManager.freezeOverlays();
        OverlaysManager.clearOverlays();
        OverlaysManager.continueOverlays();
    },

    refreshOverlay(name: string) {
        alt1.overLayRefreshGroup(name);
    },

    freezeOverlay(name: string) {
        alt1.overLayFreezeGroup(name);
    },

    clearOverlay(name: string) {
        alt1.overLayClearGroup(name);
    },

    continueOverlay(name: string) {
        alt1.overLayContinueGroup(name);
    },

    forceClearOverlay(name: string) {
        OverlaysManager.freezeOverlay(name);
        OverlaysManager.clearOverlay(name);
        OverlaysManager.continueOverlay(name);
    },

    drawImageOverlay(overlay: ImageOverlay) {
        if (!OverlaysManager.overlayExists(overlay.name)) return;
        alt1.overLayFreezeGroup(overlay.name);
        forceClearOverlay(overlay.name);
        alt1.overLayImage(
            overlay.position.x,
            overlay.position.y,
            overlay.image,
            overlay.width,
            overlay.duration,
        );
        this.continueOverlay(overlay.name);
    },

    drawTextOverlay(overlay: TextOverlay) {
        if (!OverlaysManager.overlayExists(overlay.name)) return;
        forceClearOverlay(overlay.name);
        alt1.overLayTextEx(
            overlay.text,
            overlay.color,
            overlay.size,
            overlay.position.x,
            overlay.position.y,
            overlay.duration,
            '',
            true,
            true,
        );
        alt1.overLayRefreshGroup(overlay.name);
    },

    drawRectOverlay(overlay: RectOverlay) {
        if (!OverlaysManager.overlayExists(overlay.name)) return;
        alt1.overLaySetGroup(overlay.name);
        alt1.overLayRect(
            overlay.color,
            overlay.position.x,
            overlay.position.y,
            overlay.width,
            overlay.height,
            overlay.duration,
            overlay.lineWidth,
        );
    },
};

const forceClearOverlay = (name: string) => {
	alt1.overLaySetGroup(name);
	alt1.overLayFreezeGroup(name);
	alt1.overLayClearGroup(name);
	alt1.overLayContinueGroup(name);
}

const isImageOverlay = (overlay: Overlay): overlay is ImageOverlay => {
	return (overlay as ImageOverlay).image !== undefined;
}

const isTextOverlay = (overlay: Overlay): overlay is TextOverlay => {
	return (overlay as TextOverlay).text !== undefined;
}

const isRectOverlay = (overlay: Overlay): overlay is RectOverlay => {
	return (overlay as RectOverlay).lineWidth !== undefined;
}
