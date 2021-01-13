import { Component, OnInit } from '@angular/core';
import { LinksService } from '../services/links.service';
import { Link } from '../shared/link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  links: Link[];
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.linksService.getLinks().subscribe(links => { this.links = links; });
  }

}
