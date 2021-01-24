import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { SlideConfigService } from '../services/slideConfig.service';
import { Gallery } from '../shared/gallery';
import { GALLERIES } from '../shared/galleryies';
import { SlideConfig } from '../shared/slideconfig';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [
    './responsive/gallery.component.desktop.scss',
    './responsive/gallery.component.mobile.scss',
    './responsive/gallery.component.carousel.scss'
  ]
})
export class GalleryComponent implements OnInit {

  gallery: Gallery;
  gallerysList: Gallery[];
  selectedgallery: Gallery = GALLERIES[0];
  slideCF: SlideConfig;

  constructor(
    private galleryService: GalleryService,
    private slideConfigService: SlideConfigService,
  ) { }

  ngOnInit(): void {
    this.slideConfigService.getSlideConfig('1').subscribe(
      slideCF => {
        this.slideCF = slideCF;
        this.galleryService.getGalleries().subscribe(
          gallerysList => {
            this.slideCF.slideOfLength = gallerysList.length;
            this.slideCF.showContent = true;
            this.slideCF.slideHeight = '500px !important';
            this.slideCF.parentHeight = '500px !important';
            this.gallerysList = gallerysList;
          }
          , error => console.log('GALLERYSLIST HTTP ERROR', error)
          , () => console.log('GALLERYSLIST HTTP SUCCESS', this.gallerysList));
      }
      , error => console.log('SLIDECF HTTP ERROR', error)
      , () => console.log('SLIDECF HTTP SUCCESS', this.slideCF));
  }

  onSelected(gallery: Gallery): void {
    this.gallery = gallery;
  }

  onChange(index: number): void {
    this.slideCF.log.push(`MatCarousel#change emitted with index ${index}`);
  }
  onChangeSlide(gallery: Gallery): void {
    this.slideCF.log.push(`MatCarousel#change emitted with index ${gallery.name}`);
  }
}
