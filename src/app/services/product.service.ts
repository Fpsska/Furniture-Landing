import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable, delay } from 'rxjs'

import { Iproduct } from '../models/product'

// /. imports

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsData: Iproduct[] = []
  URL = 'https://my-json-server.typicode.com/Fpsska/mockjson/products'

  // /. state

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.URL).pipe(delay(700))
  }
}
