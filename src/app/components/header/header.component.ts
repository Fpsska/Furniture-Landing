import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener
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

  isBurgerVisible: boolean = false

  // /. state

  constructor(
    private scrollService: ScrollService,
    private burgerService: BurgerService
  ) {}

  ngOnInit() {
    this.burgerService.getBurgerVisibleStatus().subscribe(status => {
      this.isBurgerVisible = status
    })
  }

  @ViewChild('headerRef') headerRef: ElementRef<HTMLDivElement>

  @HostListener('window:keydown.escape')
  keyDownHandler(): void {
    if (this.isBurgerVisible) {
      this.burgerService.switchBurgerVisibleStatus(false)
    }
  }

  @HostListener('window:resize', ['$event'])
  onResizeHandler(e: any): void {
    const width = e.target.innerWidth
    if (this.isBurgerVisible && width > 768) {
      this.burgerService.switchBurgerVisibleStatus(false)
    }
  }

  ngAfterViewInit(): void {
    this.scrollService.getHeaderHeight(
      this.headerRef.nativeElement.offsetHeight
    )
  }

  handleBurgerButton(): void {
    this.burgerService.switchBurgerVisibleStatus(!this.isBurgerVisible)
  }
}
