import { Component, Input } from '@angular/core'

import { IfeaturesData } from './column.interfaces'

// /. imports

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input('column') column: IfeaturesData
}
