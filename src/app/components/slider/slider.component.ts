import { Component, Input, ViewEncapsulation } from '@angular/core'

import { testimonialsData } from 'src/app/data/testimonialsData'
import { Itestimonial } from '../testimonial/testimonial.interfaces'

// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation } from 'swiper'

// install Swiper modules
SwiperCore.use([Navigation])

// /. imports

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button.next',
      prevEl: '.swiper-button.prev'
    },
    loop: true
  }
  testimonialDataTemplates: Itestimonial[] = testimonialsData
  // @Input('testimonial') testimonial: Itestimonial
}
