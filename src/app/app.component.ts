import { Component, OnInit, HostListener } from '@angular/core'

import { ScrollService } from './services/scroll.service'

// /. imports

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHeaderStylized: boolean = false

  // /. state

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {}

  @HostListener('window:scroll') // + automatic unsubscribe of eventListener when component was deleted
  handleStickyHeader() {
    if (
      window.scrollY + this.scrollService.headerHeight >
      this.scrollService.welcomeSectionHeigth
    ) {
      this.isHeaderStylized = true
    } else {
      this.isHeaderStylized = false
    }
  }
}
