import { Component, Input } from '@angular/core'

import { IselectButton } from 'src/app/models/selectButtons'

import { selectButtonsData } from 'src/app/data/selectButtonsData'

// /. imports

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  selectButtonsDataTemplates: IselectButton[] = selectButtonsData

  // /. state

  @Input() updateFilterOption: (arg: string) => void
  @Input() loadingStatus: boolean

  // /. props

  constructor() {}

  handleButtonClick(_id: number, reference: string): void {
    this.updateFilterOption(reference)
    this.changeButtonActiveStatus(_id)
  }

  changeButtonActiveStatus(_id: number): void {
    this.selectButtonsDataTemplates.map(item =>
      item.id === _id ? (item.isActive = true) : (item.isActive = false)
    )
  }
}
