import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { Video } from '../shared/video';
import { VIDEOS } from '../shared/videos';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntroduceService {

  constructor() { }


  getVideos(): Observable<Video[]> {
    return of(VIDEOS).pipe(delay(2000));
  }
}
