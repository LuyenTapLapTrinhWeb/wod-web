import { IntroduceComponent } from '../introduce/introduce.component';
import { VideoComponent } from '../video/video.component';

import { Routes } from '@angular/router';
export const ROUTES: Routes = [
  { path: 'gioithieu', component: IntroduceComponent },
  { path: 'videolist', component: VideoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'gioithieu' }
]