import { Component, Input } from '@angular/core'

// /. imports

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {
  @Input() visibleStatus: boolean
  @Input() isHeaderStylized: boolean

  // /. props

  constructor() {}
}
