import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

import { Irating } from 'src/app/models/rating'

// /. imports

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {
  @Input() status: boolean
  @Input() name: string

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
  }

  handleInputClick(id: number): void {
    console.log(id)
    this.ratingDataTemplates.map(item =>
      item.id === id ? (item.isChecked = true) : (item.isChecked = false)
    )
    console.log(this.ratingDataTemplates)
  }
}
