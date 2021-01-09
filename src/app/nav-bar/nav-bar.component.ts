import { Component, OnInit } from '@angular/core';
import { LinksService } from '../services/links.service';
import { Link } from '../shared/link';
/**
 * @title Basic Nav bar
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', './nav-bar.component.mobile.scss']
})
export class NavBarComponent implements OnInit {
  links: Link[];
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.linksService.getLinks()
      .subscribe(links => this.links = links);
  }
}
