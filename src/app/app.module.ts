import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { IntroduceComponent } from './introduce/introduce.component';
import { VideoComponent } from './video/video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LinksService } from './services/links.service';
import { IntroduceService } from './services/introduce.service';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroduceComponent,
    VideoComponent,
    NavBarComponent,
    VideoDetailComponent,
    FooterComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule, MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [
    LinksService,
    IntroduceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
