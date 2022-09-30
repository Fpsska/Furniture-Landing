import { Pipe, PipeTransform } from '@angular/core'

import { Iproduct } from '../models/product'

// /. imports

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: Iproduct[], filterOpt: string): Iproduct[] {
    return products.filter(({ name }) => {
      if (!filterOpt || filterOpt === 'all') {
        return products
      } else {
        return name.toLowerCase() === filterOpt
      }
    })
  }
}
