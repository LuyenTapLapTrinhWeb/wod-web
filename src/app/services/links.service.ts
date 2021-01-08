import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Link } from '../shared/link';
import { LINKS } from '../shared/links';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }

  getLinks(): Observable<Link[]> {
    return of(LINKS).pipe(delay(2000));
  }
}
