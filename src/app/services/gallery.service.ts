import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, first } from 'rxjs/operators';
import { Gallery } from '../shared/gallery';
import { GALLERIES } from '../shared/galleryies';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getGalleries(): Observable<Gallery[]> {
    return of(GALLERIES).pipe(delay(2000));
  }
  getGallery(id: number): Observable<Gallery> {
    return of(GALLERIES.filter(gallery => gallery.id === id.toString())[0]).pipe(delay(2000));
  }
  getGalleryIds(): Observable<string[] | any> {
    return of(GALLERIES.map(gallery => gallery.id));
  }
}
