import { Component, Input } from '@angular/core'

import { Itestimonial } from './testimonial.interfaces'

// /. imports

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input('testimonial') testimonial: Itestimonial
}
