import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { IntroduceComponent } from './introduce/introduce.component';
import { VideoComponent } from './video/video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LinksService } from './services/links.service';
import { IntroduceService } from './services/introduce.service';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { LinksComponent } from './links/links.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './services/gallery.service';
import { VideoService } from './services/video.service';
@NgModule({
  declarations: [
    AppComponent,
    IntroduceComponent,
    VideoComponent,
    NavBarComponent,
    VideoDetailComponent,
    FooterComponent,
    LogoComponent,
    HeroFormComponent,
    LinksComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule, MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCarouselModule.forRoot(),
    MatTableModule
  ],
  providers: [
    LinksService,
    IntroduceService,
    GalleryService,
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
