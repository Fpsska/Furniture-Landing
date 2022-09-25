import { Component, Input } from '@angular/core'

import { Iproducts } from './product.interfaces'

// /. imports

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() item: Iproducts
}
