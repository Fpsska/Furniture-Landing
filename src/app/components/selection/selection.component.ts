import { Component, Input, OnChanges, OnInit } from '@angular/core'

import { IselectButtons } from 'src/app/models/selectButtons'

import { selectButtonsData } from 'src/app/data/selectButtonsData'

// /. imports

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit, OnChanges {
  selectButtonsDataTemplates: IselectButtons[] = selectButtonsData

  // /. state

  @Input() updateFilterOption: (arg: string) => void
  @Input() loadingStatus: boolean

  // /. props

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  handleButtonClick(_id: number, reference: string) {
    this.updateFilterOption(reference)
    this.changeButtonActiveStatus(_id)
  }

  changeButtonActiveStatus(_id: number) {
    this.selectButtonsDataTemplates.map(item =>
      item.id === _id ? (item.isActive = true) : (item.isActive = false)
    )
  }
}
