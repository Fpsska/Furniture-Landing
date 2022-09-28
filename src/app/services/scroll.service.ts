import { Injectable } from '@angular/core'

// /. imports

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  headerHeight: number = 0
  welcomeSectionHeigth: number = 0

  constructor() {}

  getHeaderHeight(value: number) {
    this.headerHeight = value
  }
  getWelcomeSectionHeigth(value: number) {
    this.welcomeSectionHeigth = value
  }
}
