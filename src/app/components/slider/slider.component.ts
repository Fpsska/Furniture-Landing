import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core'
import { Iproduct } from 'src/app/models/product'

// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Thumbs } from 'swiper'

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
  @Input() role: string
  @Input() data: any[]
  @Input() filterOption?: string
  @Input() loadingStatus: boolean

  // /. props

  currentRenderData: any[] = []
  currentSliderConfig: any = {}
  currentSliderRole: string = ''

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

  // /. state

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filterOption || changes.role || changes.data) {
      this.defineSliderOptions(this.role, this.data.length)
    }
  }

  defineSliderOptions(role: string, arrayLength: number): void {
    switch (role) {
      case 'product':
        console.log('product')
        this.currentRenderData = this.data
        this.currentSliderConfig =
          arrayLength !== 0 ? this.productSliderConfig : this.emptySliderConfig
        this.currentSliderRole = role
        break
      case 'testimonial':
        console.log('testimonial')
        this.currentRenderData = this.data
        this.currentSliderConfig =
          arrayLength !== 0
            ? this.testimonialSliderConfig
            : this.emptySliderConfig
        this.currentSliderRole = role
        break
      default:
        console.log('default')
        this.currentSliderConfig = this.emptySliderConfig
    }
  }
}
