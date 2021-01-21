import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { Slide } from '../shared/slide';
import { ThemePalette } from '@angular/material/core';
import {
  MatCarouselSlideComponent,
  Orientation
} from '@ngmodule/material-carousel';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // slides: Slide[];
  slide: Slide;
  route: ActivatedRoute;
  prev: string;
  next: string;
  galeryIds: string[];
  public slidesList: Slide[];
  public showContent = true;

  public parentHeight = 'auto';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 25;
  public slideHeight = '200px';
  public slideOfLength: number;
  // public overlayColor = '#00000040';
  public overlayColor = '#FAFAFA';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];

  heroes: Hero[];


  constructor(private slidesService: GalleryService, private heroService: HeroService) { }

  ngOnInit(): void {
    this.slidesService.getSlides().subscribe(slidesList => {
      this.slideOfLength = slidesList.length;
      this.slidesList = slidesList;
    });
    // this.route.params.pipe(switchMap((params) => this.slidesService.getSlide(params['id'])))
    //   .subscribe(slide => { this.slide = slide; this.setPrevNext(slide.id); });

    this.heroService.getHeroes().subscribe(heroes => {
      this.slideOfLength = heroes.length;
      this.heroes = heroes;
    });
  }
  // tslint:disable-next-line:typedef
  setPrevNext(dishId: string): void {
    const index = this.galeryIds.indexOf(dishId);
    this.prev = this.galeryIds[(this.galeryIds.length + index - 1) % this.galeryIds.length];
    this.next = this.galeryIds[(this.galeryIds.length + index + 1) % this.galeryIds.length];
  }
  // tslint:disable-next-line:typedef
  public onChange(index: number) {
    this.log.push(`MatCarousel#change emitted with index ${index}`);
  }
}
