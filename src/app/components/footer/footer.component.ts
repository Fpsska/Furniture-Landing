import { Component } from '@angular/core'

import { IlistData } from '../list/list.interfaces'

import { listData as data } from '../../data/listData'

// /. imports

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  listData: IlistData[] = data
}
