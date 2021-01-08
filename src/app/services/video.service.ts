import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Video } from '../shared/video';
import { VIDEOS } from '../shared/videos';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }
  getVideos(): Observable<Video[]> {
    return of(VIDEOS).pipe(delay(2000));
  }
}
