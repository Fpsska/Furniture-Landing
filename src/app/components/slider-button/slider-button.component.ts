import { Component, Input } from '@angular/core'

// /. imports

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.scss']
})
export class SliderButtonComponent {
  @Input() role: string

  ngOnInit() {
    console.log(this.role)
  }
}
