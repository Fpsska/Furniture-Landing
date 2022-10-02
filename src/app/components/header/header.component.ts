import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core'

import { ScrollService } from 'src/app/services/scroll.service'
import { BurgerService } from 'src/app/services/burger.service'

// /. imports

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() isHeaderStylized: boolean

  // /. props

  isBurgerClose: boolean = false

  // /. state

  constructor(
    private scrollService: ScrollService,
    private burgerService: BurgerService
  ) {}

  ngOnInit() {
    this.burgerService.getBurgerVisibleStatus().subscribe(status => {
      this.isBurgerClose = status
    })
  }

  @ViewChild('headerRef') headerRef: ElementRef<HTMLDivElement>

  ngAfterViewInit(): void {
    this.scrollService.getHeaderHeight(
      this.headerRef.nativeElement.offsetHeight
    )
  }

  handleBurgerButton() {
    this.burgerService.switchBurgerVisibleStatus(!this.isBurgerClose)
  }
}
