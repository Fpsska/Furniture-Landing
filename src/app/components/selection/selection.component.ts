import { Component, Input, OnInit } from '@angular/core'

import { IselectButtons } from 'src/app/models/selectButtons'

import { selectButtonsData } from 'src/app/data/selectButtonsData'

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  selectButtonsDataTemplates: IselectButtons[] = selectButtonsData

  constructor() {}

  @Input() updateFilterOption: (arg: string) => void

  ngOnInit(): void {}

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
