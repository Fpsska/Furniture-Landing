import { Component, Input } from '@angular/core'

// /. imports

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() status: boolean

  // /. props

  constructor() {}
}
