import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

// /. imports

@Injectable({
  providedIn: 'root'
})
export class BurgerService {
  isBurgerVisible = new BehaviorSubject<boolean>(false)

  // /. state

  constructor() {}

  switchBurgerVisibleStatus(status: boolean): void {
    this.isBurgerVisible.next(status)
  }

  getBurgerVisibleStatus(): Observable<boolean> {
    return this.isBurgerVisible.asObservable()
  }
}
