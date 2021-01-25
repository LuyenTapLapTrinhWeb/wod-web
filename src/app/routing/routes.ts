import { IntroduceComponent } from '../introduce/introduce.component';
import { VideoComponent } from '../video/video.component';

import { Routes } from '@angular/router';
import { VideoDetailComponent } from '../video-detail/video-detail.component';
import { HeroFormComponent } from '../hero-form/hero-form.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { GalleryDetailComponent } from '../gallery-detail/gallery-detail.component';
import { Page404Component } from '../page404/page404.component';
import { GallerydetailguardService } from '../gallery-detail/gallerydetailguard.service';
import { GalleryresolveService } from '../gallery-detail/galleryresolve.service';

export const ROUTES: Routes = [
  { path: '', component: IntroduceComponent },
  { path: 'gioithieu', component: IntroduceComponent },
  { path: 'video', component: VideoComponent },
  { path: 'video/:id', component: VideoDetailComponent },
  { path: 'nhanvat', component: HeroFormComponent },
  { path: 'phongtranh', component: GalleryComponent, resolve: [GalleryresolveService] },
  { path: 'phongtranh/:id', component: GalleryDetailComponent, canActivate: [GallerydetailguardService] },
  { path: 'notfound', component: Page404Component },
  { path: '**', redirectTo: 'notfound' },
  { path: '', pathMatch: 'full', redirectTo: 'gioithieu' }
  // tslint:disable-next-line:eofline
];