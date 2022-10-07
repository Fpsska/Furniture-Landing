import { Component, OnInit } from '@angular/core'

import { Ifeature } from 'src/app/models/feature'
import { Iproduct } from 'src/app/models/product'
import { Icomment } from 'src/app/models/comment'

import { productsData as productsMockData } from 'src/app/data/productsData'
import { commentsData as commentsMockData } from 'src/app/data/commentsData'
import { featuresData as featuresMockData } from '../../data/featuresData'

import { CommentService } from 'src/app/services/comment.service'
import { ProductService } from 'src/app/services/product.service'

// /. imports

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {
  featuresDataTemplates: Ifeature[] = featuresMockData
  productsData: Iproduct[] = productsMockData
  commentsData: Icomment[] = commentsMockData
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
    this.productService.getProducts().subscribe(products => {
      this.productsData = products
      this.isProductsDataLoading = false
    })
  }

  updateFilterOption(reference: any): void {
    this.filterOption = reference
  }
}
