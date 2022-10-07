import { Component, Input } from '@angular/core'

import { Icomment } from 'src/app/models/comment'

// /. imports

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() item: Icomment
  @Input() loadingStatus: boolean

  // /. props

  handleImageError(e: Event, role: string): void {
    const target = e.target as HTMLImageElement
    switch (role) {
      case 'avatar':
        target.src = 'https://via.placeholder.com/50x50'
        break
      case 'background':
        target.src = 'https://via.placeholder.com/370x475'
    }
  }
}
