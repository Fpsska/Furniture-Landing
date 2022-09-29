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
  @Input() role: string
  @Input() data: any[]
  @Input() filterOption?: string
  @Input() loadingStatus: boolean

  currentRenderData: any[] = []
  currentSliderConfig: any = {}
  currentSliderRole: string = ''
  dataArr: any[] = []
  productSliderConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 42,
    navigation: {
      nextEl: '.swiper-button.next.product',
      prevEl: '.swiper-button.prev.product'
    }
  }
  testimonialSliderConfig: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button.next.testimonial',
      prevEl: '.swiper-button.prev.testimonial'
    }
  }
  emptySliderConfig: SwiperOptions = {
    centeredSlides: true,
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true
  }

  ngOnInit(): void {
    this.defineSliderOptions(this.role, this.data.length)
  }

  defineSliderOptions(role: string, arrayLength: number) {
    switch (role) {
      case 'product':
        this.currentRenderData = this.data
        this.currentSliderConfig =
          arrayLength > 0 ? this.productSliderConfig : this.emptySliderConfig
        this.currentSliderRole = role
        break
      case 'testimonial':
        this.currentRenderData = this.data
        this.currentSliderConfig =
          arrayLength > 0
            ? this.testimonialSliderConfig
            : this.emptySliderConfig
        this.currentSliderRole = role
        break
      default:
        this.currentRenderData = []
        this.currentSliderRole = ''
        this.currentSliderConfig = this.emptySliderConfig
    }
  }
}
