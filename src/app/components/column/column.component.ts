import { Component, Input } from '@angular/core'

import { Ifeature } from 'src/app/models/feature'

// /. imports

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() column: Ifeature

  // /. props
}
