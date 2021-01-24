import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryService } from '../services/gallery.service';

@Injectable({
  providedIn: 'root'
})
export class GallerydetailguardService implements CanActivate {

  constructor(private galleryService: GalleryService, private router: Router) { }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const galleryExists = !!this.galleryService.getGallery(route.params.id);
    if (galleryExists) {
      return true;
    } else {
      this.router.navigate(['/notfound']);
    }
  }
}
