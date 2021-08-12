import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LinksService } from '../services/links.service';
import { OffsetService } from '../services/stickyElement/offset.service';
import { StickyElement } from '../services/stickyElement/stickyElement.service';
import { Link } from '../shared/link';
/**
 * @title Basic Nav bar
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss', './nav-bar.component.mobile.scss', '../services/stickyElement/sticky.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  links: Link[];
  nav!: StickyElement;
  constructor(private linksService: LinksService, private offsetService: OffsetService) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.nav = this.offsetService.onActionSticky();
      console.log(this.nav);
    }, 2000);
  }

  ngOnInit(): void {
    this.linksService.getLinks()
      .subscribe(links => this.links = links);
  }
  getOffset(offset: number): void {
    this.nav.onElementStickiesOffset(offset);
  }
}
