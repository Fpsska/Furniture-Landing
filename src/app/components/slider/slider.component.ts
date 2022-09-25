import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'

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
export class SliderComponent implements OnInit {
  // @Input() props: { data: any[]; role?: string }
  @Input() role?: string
  @Input() data: any[]

  currentRenderData: any[] = []
  configProductSlider: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 42,
    navigation: {
      nextEl: '.swiper-button.next',
      prevEl: '.swiper-button.prev'
    },
    loop: true
  }
  configTestimonialSlider: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button.next',
      prevEl: '.swiper-button.prev'
    },
    loop: true
  }

  ngOnInit(): void {
    console.log(this.data)
    this.currentRenderData = this.data
  }
}
