import { Component } from '@angular/core'

import { IlistData } from '../list/list.interfaces'

import { footerData } from '../../data/footerData'

// /. imports

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerDataTemplates: IlistData[] = footerData
}
