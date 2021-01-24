import { ThemePalette } from '@angular/material/core';
import { Orientation } from '@ngmodule/material-carousel';

export class SlideConfig {
    id: string;
    showContent?: boolean;
    parentHeight?: string;
    timings?: string;
    autoplay?: boolean;
    interval?: number;
    loop?: true;
    hideArrows?: false;
    hideIndicators?: false;
    color?: ThemePalette;
    maxWidth?: string;
    maintainAspectRatio?: true;
    proportion?: number;
    slideHeight?: string;
    slideOfLength?: number;
    overlayColor?: string;
    hideOverlay?: false;
    useKeyboard?: true;
    useMouseWheel?: false;
    orientation?: Orientation;
    log?: string[];
}
