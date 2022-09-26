import { Component, OnInit } from '@angular/core'

import { Icomment } from './models/comment'

import { CommentService } from './services/comment.service'

// /. imports

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // commentsData: Icomment[] = []

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    // this.commentsService.getComments().subscribe((comments) => {
    //   console.log(comments)
    //   this.commentsData = comments
    // })
  }
}
