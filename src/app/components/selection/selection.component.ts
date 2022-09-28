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
}
