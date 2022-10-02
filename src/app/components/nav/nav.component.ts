import { Component, Input } from '@angular/core'

// /. imports

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() role?: string

  // /. props
}
