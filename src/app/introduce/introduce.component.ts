import { Component, OnInit } from '@angular/core';
import { IntroduceService } from '../services/introduce.service';
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss', './introduce.component.mobile.scss']
})
export class IntroduceComponent implements OnInit {
  introduces = [];
  constructor(private introduceService: IntroduceService) { }

  ngOnInit(): void {
    this.introduceService.getIntroduces().subscribe(introduces => { this.introduces = introduces; });
  }

}
