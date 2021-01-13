import { IntroduceComponent } from '../introduce/introduce.component';
import { VideoComponent } from '../video/video.component';

import { Routes } from '@angular/router';
import { VideoDetailComponent } from '../video-detail/video-detail.component';
import { HeroFormComponent } from '../hero-form/hero-form.component';
import { GalleryComponent } from '../gallery/gallery.component';
export const ROUTES: Routes = [
  { path: '', component: IntroduceComponent },
  { path: 'gioithieu', component: IntroduceComponent },
  { path: 'video', component: VideoComponent },
  { path: 'nhanvat', component: HeroFormComponent },
  { path: 'phongtranh', component: GalleryComponent },
  { path: 'video/:id', component: VideoDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'gioithieu' }
  // tslint:disable-next-line:eofline
];