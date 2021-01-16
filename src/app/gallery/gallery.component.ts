import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { Slide } from '../shared/slide';
import { ThemePalette } from '@angular/material/core';
import {
  MatCarouselSlideComponent,
  Orientation
} from '@ngmodule/material-carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // slides: Slide[];
  // slide: Slide;

  public slidesList: Slide[];
  public showContent = false;

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
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];
  constructor(private slidesService: GalleryService) { }

  ngOnInit(): void {
    this.slidesService.getSlides().subscribe(slidesList => {
      this.slideOfLength = slidesList.length;
      // this.slidesList = slidesList.map(slide => slide.image);
      this.slidesList = slidesList;
      // console.log(slidesList);
    });
    // this.route.params.pipe(switchMap((params: Params) => this.slidesService.getSlide(params['id'])))
    //   .subscribe(slide => { this.slide = slide; this.setPrevNext(slide.id); });

  }
  // tslint:disable-next-line:typedef
  setPrevNext(dishId: string): void {
    // const index = this.dishIds.indexOf(dishId);
    // this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    // this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  // tslint:disable-next-line:typedef
  public onChange(index: number) {
    this.log.push(`MatCarousel#change emitted with index ${index}`);
  }
}
