import { Component, Input } from '@angular/core'

// /. imports

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.scss']
})
export class SliderButtonComponent {
  @Input() action: string
  @Input() role: string
  @Input() isCommentsDataLoading: boolean
}
