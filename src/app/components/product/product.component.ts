import { Component, Input } from '@angular/core'

import { Iproduct } from '../../models/product'

// /. imports

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() item: Iproduct
  @Input() loadingStatus: boolean

  // /. props

  public handleImageError(e: Event): void {
    const target = e.target as HTMLImageElement
    target.src = 'https://via.placeholder.com/260x280'
  }
}
