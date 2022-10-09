import { Component, Input } from '@angular/core'

import { Iproduct } from '../../models/product'

import { ProductService } from 'src/app/services/product.service'

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

  isButtonActive: boolean = false

  // /. state

  constructor(private productService: ProductService) {}

  handleButtonClick(_id: number): void {
    const product = this.productService.productsData.find(
      ({ id }) => id === _id
    )
    const isProductAlreadyAdded = this.productService.selectedProducts.some(
      ({ id }) => id === _id
    )
    if (product && !isProductAlreadyAdded) {
      this.productService.saveSelectedProduct(product)
      this.isButtonActive = true
    } else if (product && isProductAlreadyAdded) {
      this.productService.removeSelectedProduct(product.id)
      this.isButtonActive = false
    }
  }

  handleImageError(e: Event): void {
    const target = e.target as HTMLImageElement
    target.src = 'https://via.placeholder.com/260x280'
  }
}
