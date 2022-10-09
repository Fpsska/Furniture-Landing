import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

import { Irating } from 'src/app/models/rating'

// /. imports

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {
  @Input() role: string
  @Input() status: boolean
  @Input() name: string
  @Input() rating?: number = 0

  // /. props

  ratingDataTemplates: Irating[] = []

  // /. state

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.name) {
      this.ratingDataTemplates = [...Array(5).keys()].reverse().map(index => {
        return { id: index + 1, name: this.name, isChecked: false }
      })
    }
    if (changes.rating) {
      const userRating = +String(this.rating)[0]
      this.ratingDataTemplates.map(item => {
        item.id === userRating
          ? (item.isChecked = true)
          : (item.isChecked = false)
      })
    }
  }

  handleInputClick(id: number): void {
    this.ratingDataTemplates.map(item =>
      item.id === id ? (item.isChecked = true) : (item.isChecked = false)
    )
  }
}
