import { Injectable } from '@angular/core';
import { ISticky } from './isticky.interface';
import { StickyElement } from './stickyElement.service';


@Injectable({
    providedIn: 'root',
})
export class OffsetService {
    //#region variable
    // tslint:disable-next-line:variable-name
    _offset!: number;
    // Get the navbar
    // navbar!: HTMLElement;
    // aside!: HTMLElement;
    // drawersidenav!: HTMLElement;
    screenlistsearch!: HTMLElement;

    // Get the offset position of the navbar
    // stickyNavOffset!: number;
    // stickyAsideOffset!: number;
    // stickydrawersidenavOffset!: number;
    stickyscreenlistsearch!: number;
    stickies!: ISticky[];
    nav: StickyElement;
    //#endregion

    constructor() {
        /* stickyaside stickydrawersidenav sticky*/
        this.nav = new StickyElement();
    }
    set offset(offset: number) { this._offset = offset; }
    get offset(): number { return this._offset; }

    onActionSticky(): StickyElement {
        // this.navbar = document.getElementById('navbar');
        // this.aside = document.getElementById('aside');
        // this.drawersidenav = document.getElementById('drawersidenav');
        this.screenlistsearch = document.getElementById('screen-list-search');
        // Get the offset position of the navbar
        // this.stickyNavOffset = this.navbar.offsetTop;
        // this.stickyAsideOffset = this.aside.offsetTop;
        // this.stickydrawersidenavOffset = this.drawersidenav.offsetTop;
        this.stickyscreenlistsearch = this.screenlistsearch.offsetTop;
        /* stickyaside stickydrawersidenav sticky*/
        this.stickies = [
            // tslint:disable-next-line:max-line-length
            // { offset: this.offset || 0, offsetStickyElement: this.stickyNavOffset, stickyElement: this.navbar, stickyClassName: 'sticky' },
            // tslint:disable-next-line:max-line-length
            // { offset: this.offset || 0, offsetStickyElement: this.stickyAsideOffset, stickyElement: this.aside, stickyClassName: 'stickyaside' },
            // {
            //     offset: this.offset || 0, offsetStickyElement: this.stickydrawersidenavOffset,
            //     stickyElement: this.drawersidenav, stickyClassName: 'stickydrawersidenav'
            // },
            {
                offset: this.offset || 0, offsetStickyElement: this.stickyscreenlistsearch,
                stickyElement: this.screenlistsearch, stickyClassName: 'screenlistsearch'
            },
        ];
        this.nav = new StickyElement(undefined, this.stickies);
        return this.nav;
    }
}
