import { Component, Input } from '@angular/core'

import { Itestimonial } from 'src/app/models/testimonial'

// /. imports

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() item: Itestimonial
}
