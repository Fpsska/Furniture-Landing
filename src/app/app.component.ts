import { Component, HostListener, OnInit } from '@angular/core'

import { ScrollService } from './services/scroll.service'

// /. imports

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHeaderStylized: boolean = false

  // /. state

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    const isSectionHeightExist = this.scrollService.welcomeSectionHeigth
    if (!isSectionHeightExist) {
      this.isHeaderStylized = true
    }
  }

  @HostListener('window:scroll') // + automatic unsubscribe of eventListener when component was deleted
  handleStickyHeader(): void {
    const isValidBreakpoint =
      window.scrollY + this.scrollService.headerHeight >
      this.scrollService.welcomeSectionHeigth

    if (isValidBreakpoint) {
      this.isHeaderStylized = true
    } else {
      this.isHeaderStylized = false
    }
  }
}
