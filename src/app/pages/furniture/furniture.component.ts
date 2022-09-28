import { Component, OnInit } from '@angular/core'

import { Ifeature } from 'src/app/models/feature'
import { Iproduct } from 'src/app/models/product'
import { Icomment } from 'src/app/models/comment'

import { featuresData } from '../../data/featuresData'

import { CommentService } from 'src/app/services/comment.service'
import { ProductService } from 'src/app/services/product.service'
import { Observable } from 'rxjs'

// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation } from 'swiper'

// install Swiper modules
SwiperCore.use([Navigation])

// /. imports

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {
  featuresDataTemplates: Ifeature[] = featuresData
  commentsData: Icomment[] = []
  // productsData$: Observable<Iproduct[]>
  productsData: Iproduct[] = []
  productsMockData: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  commentsMockData: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }]
  filterOption: string = ''
  isCommentsDataLoading: boolean = false
  isProductsDataLoading: boolean = false

  configProductSlider: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 42,
    navigation: {
      nextEl: '.swiper-button.next.product',
      prevEl: '.swiper-button.prev.product'
    },
    loop: false
  }
  configTestimonialSlider: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button.next.testimonial',
      prevEl: '.swiper-button.prev.testimonial'
    },
    loop: false
  }

  constructor(
    private commentService: CommentService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // handle commentsData
    this.isCommentsDataLoading = true
    this.commentService.getComments().subscribe(comments => {
      this.commentsData = comments
      this.isCommentsDataLoading = false
    })
    // handle productsData
    this.isProductsDataLoading = true
    // this.productsData$ = this.productService.getProducts()
    this.productService.getProducts().subscribe(products => {
      this.productsData = products
      this.isProductsDataLoading = false
    })
  }

  updateFilterOption(reference: any): void {
    this.filterOption = reference
  }

  changeFilterOption(refElement: any): void {
    this.filterOption = refElement.innerText.toLowerCase()
  }
}
