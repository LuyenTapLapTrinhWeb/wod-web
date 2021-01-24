import { SlideConfig } from './slideConfig';

export const SLIDECONFIGS: SlideConfig[] = [
    {
        id: '1',
        showContent: true,
        parentHeight: 'auto',
        timings: '250ms ease-in',
        autoplay: true,
        interval: 5000,
        loop: true,
        hideArrows: false,
        hideIndicators: false,
        color: 'accent',
        maxWidth: 'auto',
        maintainAspectRatio: true,
        proportion: 25,
        slideHeight: '600px',
        slideOfLength: 5,
        overlayColor: '#00000040',
        hideOverlay: false,
        useKeyboard: true,
        useMouseWheel: false,
        orientation: 'ltr',
        log: [],
    },
];
