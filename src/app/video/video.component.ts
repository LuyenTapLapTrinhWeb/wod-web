import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { Video } from '../shared/video';

// tslint:disable-next-line:no-unused-expression
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videos: Video[];
  location: any;
  router: any;
  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(videos => { this.videos = videos; });
  }

}
