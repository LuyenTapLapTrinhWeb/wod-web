import { Component, OnInit } from '@angular/core';
import { LinksService } from '../services/links.service';
import { Link } from '../shared/link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links: Link[];
  constructor(private linkService: LinksService) { }

  ngOnInit(): void {
    this.linkService.getLinks().subscribe(links => this.links = links);
  }

}
