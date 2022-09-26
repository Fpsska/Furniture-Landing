import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core'

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
export class SliderComponent implements OnChanges {
  // @Input() props: { data: any[]; role?: string }
  @Input() role?: string
  @Input() data: any[]

  currentRenderData: any[] = []
  configProductSlider: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 42,
    navigation: {
      nextEl: '.swiper-button.next.product',
      prevEl: '.swiper-button.prev.product'
    },
    loop: true
  }
  configTestimonialSlider: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button.next.testimonial',
      prevEl: '.swiper-button.prev.testimonial'
    },
    loop: true
  }

  ngOnChanges(): void {
    this.currentRenderData = this.data
  }
}
