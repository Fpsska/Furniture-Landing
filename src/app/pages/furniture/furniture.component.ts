import { Component, OnInit } from '@angular/core'

import { Ifeature } from 'src/app/models/feature'
import { Iproduct } from 'src/app/models/product'
import { Icomment } from 'src/app/models/comment'

import { featuresData } from '../../data/featuresData'
import { productsData } from '../../data/productsData'

import { CommentService } from 'src/app/services/comment.service'

// /. imports

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {
  featuresDataTemplates: Ifeature[] = featuresData
  productDataTemplates: Iproduct[] = productsData
  commentsData: Icomment[] = []
  mockData: any[] = [{ id: '' }, { id: '' }, { id: '' }]
  isCommentsDataLoading: boolean = false

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.isCommentsDataLoading = true
    this.commentService.getComments().subscribe(comments => {
      this.commentsData = comments
      this.isCommentsDataLoading = false
    })
  }
}
