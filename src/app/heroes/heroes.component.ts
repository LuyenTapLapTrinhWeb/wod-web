import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { SlideConfigService } from '../services/slideConfig.service';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/heroes';
import { SlideConfig } from '../shared/slideconfig';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero = HEROES[0];
  slideCF: SlideConfig;
  constructor(
    private heroService: HeroService,
    private slideConfigService: SlideConfigService,
  ) { }

  ngOnInit(): void {
    this.slideConfigService.getSlideConfig('1').subscribe(slideCF => {
      this.slideCF = slideCF;
    });
    this.heroService.getHeroes().subscribe(heroes => {
      this.slideCF.slideOfLength = heroes.length;
      this.heroes = heroes;
    });
  }
  onSelected(selectedHero: Hero): void {
    this.selectedHero = selectedHero;
  }
}
