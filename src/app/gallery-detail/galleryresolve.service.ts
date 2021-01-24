import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryService } from '../services/gallery.service';
import { Gallery } from '../shared/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryresolveService implements Resolve<Gallery[]> {

  constructor(private galleryService: GalleryService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Gallery[] | Observable<Gallery[]> | Promise<Gallery[]> {
    return this.galleryService.getGalleries();
  }
}
