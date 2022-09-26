import { Component, Input } from '@angular/core'

import { Ilist } from 'src/app/models/list'

// /. imports

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input('list') list: Ilist
}
