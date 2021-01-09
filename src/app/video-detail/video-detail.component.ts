import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { VideoService } from '../services/video.service';
import { Video } from '../shared/video';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {

  router: Router;
  video: Video;
  videoIds: string[];
  prev: string;
  next: string;
  index: number;
  constructor(private location: Location, private videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.videoService.getVideoIds().subscribe(videoIds => this.videoIds = videoIds);
    this.route.params.pipe(switchMap((params: Params) => this.videoService.getVideo(params['id'])))
      .subscribe(video => {
        this.video = video;
        this.setNextPrev(video.videoId);
      });
  }
  onBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/gioithieu']);
    }
  }
  setNextPrev(dishId: string): void {
    const index = this.index = this.videoIds.indexOf(dishId);
    this.prev = this.videoIds[(this.videoIds.length + index - 1) % this.videoIds.length];
    this.next = this.videoIds[(this.videoIds.length + index + 1) % this.videoIds.length];
  }
}
