import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, Observable, delay } from 'rxjs'

import { Iproduct } from '../models/product'

// /. imports

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL = 'https://my-json-server.typicode.com/Fpsska/mockjson/products'
  productsData: Iproduct[] = []
  selectedProducts: Iproduct[] = []
  selectedProductsCount = new BehaviorSubject<number>(0)

  // /. state

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> {
    console.log('getProducts')
    return this.http.get<Iproduct[]>(this.URL).pipe(delay(4500))
  }

  saveProductsData(data: Iproduct[]): void {
    this.productsData = data
    console.log('productsData', this.productsData)
  }

  saveSelectedProduct(product: Iproduct): void {
    this.selectedProducts.push(product)
    this.selectedProductsCount.next(this.selectedProducts.length)
    console.log('selectedProducts', this.selectedProducts)
  }

  removeSelectedProduct(_id: number): void {
    this.selectedProducts = this.selectedProducts.filter(({ id }) => id !== _id)
    this.selectedProductsCount.next(this.selectedProducts.length)
    console.log('removeSelectedProduct', this.selectedProducts)
  }

  getSelectedProductsCount(): Observable<number> {
    return this.selectedProductsCount
  }
}
