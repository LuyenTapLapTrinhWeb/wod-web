import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ROUTES } from '../shared/routes';
import { RouterModule, RouterLinkActive } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
