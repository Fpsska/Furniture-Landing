import { Component, Input, OnInit } from '@angular/core'

import { Icomment } from 'src/app/models/comment'

// /. imports

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  @Input() item: Icomment
  @Input() isCommentsDataLoading: boolean

  ngOnInit(): void {
    console.log('item', this.item)
  }
}
