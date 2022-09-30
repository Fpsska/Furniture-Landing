import { Component, OnInit } from '@angular/core'

import { Ifeature } from 'src/app/models/feature'
import { Iproduct } from 'src/app/models/product'
import { Icomment } from 'src/app/models/comment'

import { featuresData } from '../../data/featuresData'

import { CommentService } from 'src/app/services/comment.service'
import { ProductService } from 'src/app/services/product.service'
import { Observable } from 'rxjs'

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
  filterOption: string = 'all'
  isCommentsDataLoading: boolean = false
  isProductsDataLoading: boolean = false

  // /. state

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
}
