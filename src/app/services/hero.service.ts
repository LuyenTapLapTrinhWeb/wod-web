import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Observable<Hero[]> {
    return of(HEROES).pipe(delay(2000));
  }
  getHero(id: number): Observable<Hero> {
    return of(HEROES.filter(hero => hero.id === id)[0]).pipe(delay(2000));
  }
  getHeroImages(): Observable<string[]> {
    return of(HEROES.map(hero => hero.image)).pipe(delay(2000));
  }
  getHeroIds(): Observable<number[]> {
    return of(HEROES.map(hero => hero.id)).pipe(delay(2000));
  }
}
