import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, first } from 'rxjs/operators';
import { Slide } from '../shared/slide';
import { SLIDES } from '../shared/slides';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getSlides(): Observable<Slide[]> {
    return of(SLIDES).pipe(delay(2000));
  }
  getSlide(id: string): Observable<Slide> {
    return of(SLIDES.filter(slide => slide.id === id)[0]).pipe(delay(2000));
  }
  getSlideIds(): Observable<string[] | any> {
    return of(SLIDES.map(slide => slide.id));
  }
}
