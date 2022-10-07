import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core'

import { ScrollService } from 'src/app/services/scroll.service'

// /. imports

@Component({
  selector: 'app-start-section',
  templateUrl: './start-section.component.html',
  styleUrls: ['./start-section.component.scss']
})
export class StartSectionComponent implements AfterViewInit {
  constructor(private scrollService: ScrollService) {}

  @ViewChild('welcomeSectionRef') welcomeSectionRef: ElementRef<HTMLDivElement>

  ngAfterViewInit() {
    this.scrollService.getWelcomeSectionHeigth(
      this.welcomeSectionRef.nativeElement.offsetHeight
    )
  }
}
