import { Component, Input } from '@angular/core'

// /. imports

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string

  // /. props
}
