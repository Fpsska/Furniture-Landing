import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core'

import { ScrollService } from 'src/app/services/scroll.service'

// /. imports

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  constructor(private scrollService: ScrollService) {}

  @Input() isHeaderStylized: boolean

  @ViewChild('headerRef') headerRef: ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {
    this.scrollService.getHeaderHeight(
      this.headerRef.nativeElement.offsetHeight
    )
  }
}
