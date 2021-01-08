import { IntroduceComponent } from '../introduce/introduce.component';
import { VideoComponent } from '../video/video.component';

import { Routes } from '@angular/router';
import { VideoDetailComponent } from '../video-detail/video-detail.component';
export const ROUTES: Routes = [
  { path: 'gioithieu', component: IntroduceComponent },
  { path: 'video', component: VideoComponent },
  { path: 'video/:id', component: VideoDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'gioithieu' }
  // tslint:disable-next-line:eofline
];