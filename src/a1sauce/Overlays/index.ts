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
    overlayTimeouts: Map<string, number>;

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
    drawOverlaysByCategory(category: string): void;
    drawOverlays(overlay: Overlays): void;
    drawImageOverlay(overlay: ImageOverlay): void;
    drawTextOverlay(overlay: TextOverlay): void;
    drawRectOverlay(overlay: RectOverlay): void;
    removeOverlaysByCategory(category: string): void;
}

export const OverlaysManager: OverlaysManagerInterface = {
    Overlays: [],
    overlayTimeouts: new Map<string, number>(),

    /**
     * Updates an existing managed overlay and if one does not exist adds it to the managed overlays
     * @param overlay - All necessary metadata to draw the overlay
     */
    updateOverlay(overlay: Overlays) {
        const existingOverlayIndex = OverlaysManager.Overlays.findIndex(
            (existing) => existing.name === overlay.name,
        );

        // If the overlay exists in Overlays[]
        if (existingOverlayIndex >= 0) {
            const existingOverlay =
                OverlaysManager.Overlays[existingOverlayIndex];

            if (OverlaysManager.overlayTimeouts.has(overlay.name)) {
                return;
            }
            const timeoutId = window.setInterval(() => {
                OverlaysManager.drawOverlaysByCategory(overlay.category);
                OverlaysManager.overlayTimeouts.delete(overlay.name);
            }, 30000);

            OverlaysManager.overlayTimeouts.set(overlay.name, timeoutId);

            // Data is different, update the existing overlay
            OverlaysManager.Overlays[existingOverlayIndex] = {
                ...existingOverlay,
                ...overlay,
            };
            // Redraw the overlay as we have new data
            OverlaysManager.drawOverlays(overlay);
            return;
        }
        OverlaysManager.Overlays.push(overlay);

        // We are adding the overlay to our OverlaysManager - draw them
        // Text overlays should always draw one higher than image overlays so that they appear above
        if (isTextOverlay(overlay)) {
            alt1.overLaySetGroupZIndex(overlay.name, 3);
            OverlaysManager.drawTextOverlay(overlay);
        }
        if (isImageOverlay(overlay)) {
            alt1.overLaySetGroupZIndex(overlay.name, 1);
            OverlaysManager.drawImageOverlay(overlay);
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
        alt1.overLaySetGroup(name);
        alt1.overLayFreezeGroup(name);
        alt1.overLayClearGroup(name);
        alt1.overLayContinueGroup(name);
    },

    /**
     * Draws all overlays that match the specified category.
     * @param category - The category to filter overlays by.
     */
    drawOverlaysByCategory(category: string) {
        // First, clear overlays that do not match the category
        OverlaysManager.removeOverlaysByCategory(category);

        // Now draw the remaining overlays that match the category
        OverlaysManager.Overlays.forEach((overlay) => {
            if (overlay.category === category) {
                OverlaysManager.drawOverlays(overlay);
            } else {
                OverlaysManager.forceClearOverlay(overlay.name);
            }
        });
    },

    drawOverlays(overlay: Overlays) {
        const existingOverlayIndex = OverlaysManager.Overlays.findIndex(
            (existing) => existing.name === overlay.name,
        );
        if (isImageOverlay(overlay) && existingOverlayIndex >= 0) {
            const existingOverlay =
                OverlaysManager.Overlays[existingOverlayIndex];
            if (
                isImageOverlay(existingOverlay) &&
                !(overlay.image === existingOverlay.image)
            ) {
                OverlaysManager.drawImageOverlay(overlay);
            }
        }
        if (isTextOverlay(overlay) && existingOverlayIndex >= 0) {
            const existingOverlay =
                OverlaysManager.Overlays[existingOverlayIndex];
            if (
                isTextOverlay(existingOverlay) &&
                !(overlay.text === existingOverlay.text)
            ) {
                OverlaysManager.drawTextOverlay(overlay);
            }
        }
        if (isRectOverlay(overlay)) {
            OverlaysManager.drawRectOverlay(overlay);
        }
    },

    drawImageOverlay(overlay: ImageOverlay) {
        if (!OverlaysManager.overlayExists(overlay.name)) return;

        OverlaysManager.forceClearOverlay(overlay.name);

        alt1.overLayImage(
            overlay.position.x,
            overlay.position.y,
            overlay.image,
            overlay.width,
            overlay.duration,
        );
    },

    drawTextOverlay(overlay: TextOverlay) {
        if (!OverlaysManager.overlayExists(overlay.name)) return;

        OverlaysManager.forceClearOverlay(overlay.name);

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

    /**
     * Removes all overlays and their timers from Overlays[] and overlayTimeouts that
     * do not match the specified category.
     * @param category - The category to filter overlays by.
     */
    removeOverlaysByCategory(category: string) {
        const remainingOverlays: Overlays[] = [];

        OverlaysManager.Overlays.forEach((overlay) => {
            if (overlay.category === category) {
                remainingOverlays.push(overlay); // Keep overlays that match the category
            } else {
                // If it does not match, clear the timeout and overlays
                const timeoutId = OverlaysManager.overlayTimeouts.get(
                    overlay.name,
                );
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    OverlaysManager.overlayTimeouts.delete(overlay.name);
                    console.log(`${timeoutId} removed`);
                }
                OverlaysManager.forceClearOverlay(overlay.name);
            }
        });

        OverlaysManager.Overlays = remainingOverlays;
    },
};

const isImageOverlay = (overlay: Overlay): overlay is ImageOverlay => {
    return (overlay as ImageOverlay).image !== undefined;
};

const isTextOverlay = (overlay: Overlay): overlay is TextOverlay => {
    return (overlay as TextOverlay).text !== undefined;
};

const isRectOverlay = (overlay: Overlay): overlay is RectOverlay => {
    return (overlay as RectOverlay).lineWidth !== undefined;
};
