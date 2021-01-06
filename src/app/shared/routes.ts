import { IntroduceComponent } from "../introduce/introduce.component";

import { Routes } from '@angular/router';
export const ROUTES: Routes = [
  { path: 'gioithieu', component: IntroduceComponent },
  { path: '', pathMatch: 'full', redirectTo: 'gioithieu' }
]