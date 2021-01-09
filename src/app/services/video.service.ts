import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Video } from '../shared/video';
import { VIDEOS } from '../shared/videos';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor() { }

  getVideo(videoId: string): Observable<Video> {
    return of(VIDEOS.filter((video) => (video.videoId === videoId))[0]).pipe(delay(2000));
  }
  getVideos(): Observable<Video[]> {
    return of(VIDEOS).pipe(delay(2000));
  }
  getVideoIds(): Observable<string[] | any> {
    return of(VIDEOS.map(video => video.videoId));
  }
}
