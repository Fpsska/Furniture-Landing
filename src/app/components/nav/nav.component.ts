import { Component, Input } from '@angular/core'

import { navData } from 'src/app/data/navData'

import { Inav } from 'src/app/models/nav'

// /. imports

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navDataTemplates: Inav[] = navData

  // /. state

  @Input() role: string

  // /. props
}
