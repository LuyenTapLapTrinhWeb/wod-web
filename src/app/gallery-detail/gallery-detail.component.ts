import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GalleryService } from '../services/gallery.service';
import { Gallery } from '../shared/gallery';
@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
  prev: string;
  next: string;
  galeryIds: string[];
  gallery: Gallery;
  constructor(
    private gallerysService: GalleryService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.gallerysService.getGalleryIds().subscribe(galeryIds => this.galeryIds = galeryIds);
    this.route.params.pipe(switchMap((params) => this.gallerysService.getGallery(params.id))).subscribe(
      gallery => {
        this.gallery = gallery;
        console.log(this.gallery);
        this.setPrevNext(gallery.id);
      }
      , error => console.log('GALLERYSLIST HTTP ERROR', error)
      , () => console.log('GALLERYSLIST HTTP SUCCESS', this.gallery));
  }

  // tslint:disable-next-line:typedef
  setPrevNext(galeryId: string): void {
    const index = this.galeryIds.indexOf(galeryId);
    this.prev = this.galeryIds[(this.galeryIds.length + index - 1) % this.galeryIds.length];
    this.next = this.galeryIds[(this.galeryIds.length + index + 1) % this.galeryIds.length];
  }
  onBack(): void {
    this.location.back();
  }
}
