import { Component, OnInit, Input } from '@angular/core'

// /. imports

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  @Input() visibleStatus: boolean
  @Input() isHeaderStylized: boolean

  // /. props

  constructor() {}

  ngOnInit(): void {}
}
