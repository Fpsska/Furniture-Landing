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
  productsData: Iproduct[] = []
  mockData: any[] = [{ id: '' }, { id: '' }, { id: '' }]
  isCommentsDataLoading: boolean = false

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
    // handle productsData stream
    this.productService.getProducts().subscribe(products => {
      this.productsData = products
    })
  }
}
