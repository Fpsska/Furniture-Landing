import { Component } from '@angular/core'

import { Ilist } from 'src/app/models/list'

import { footerData } from '../../data/footerData'

// /. imports

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerDataTemplates: Ilist[] = footerData

  // /. state
}
