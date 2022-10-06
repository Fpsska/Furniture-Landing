import { Component, Input } from '@angular/core'

import { Inav } from 'src/app/models/nav'

import { BurgerService } from 'src/app/services/burger.service'

// /. imports

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavLinkComponent {
  @Input() link: Inav

  // /. props

  constructor(private burgerService: BurgerService) {}

  handleLinkClick(e: any) {
    e.preventDefault()
    this.burgerService.switchBurgerVisibleStatus(false)
  }
}
