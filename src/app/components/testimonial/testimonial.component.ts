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

  public handleImageError(event: any, role: string) {
    switch (role) {
      case 'avatar':
        event.target.src = 'https://via.placeholder.com/50x50'
        break
      case 'background':
        event.target.src = 'https://via.placeholder.com/370x475'
    }
  }

  ngOnInit(): void {
    // console.log('item', this.item)
  }
}
