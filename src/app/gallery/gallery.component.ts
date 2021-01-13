import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { Slide } from '../shared/slide';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  slides: Slide[];
  auto = 'auto';
  constructor(private slidesService: GalleryService) { }

  ngOnInit(): void {
    this.slidesService.getSlides().subscribe(slides => { this.slides = slides; });
  }

}
