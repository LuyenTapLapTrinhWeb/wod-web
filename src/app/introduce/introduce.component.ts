import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IntroduceService } from '../services/introduce.service';
import { Video } from '../shared/video';
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {
  videos: Observable<Video[]>;
  constructor(
    private introduceService: IntroduceService
  ) { }

  ngOnInit(): void {
    this.videos = this.introduceService.getVideos();
  }

}
