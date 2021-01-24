import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SlideConfig } from '../shared/slideconfig';
import { SLIDECONFIGS } from '../shared/slidesconfigs';

@Injectable({
    providedIn: 'root'
})
export class SlideConfigService {

    constructor() { }

    getSlidesConfigs(): Observable<SlideConfig[]> {
        return of(SLIDECONFIGS).pipe(delay(2000));
    }
    getSlideConfig(id: string): Observable<SlideConfig> {
        return of(SLIDECONFIGS.filter(slide => slide.id === id)[0]).pipe(delay(2000));
    }
}
