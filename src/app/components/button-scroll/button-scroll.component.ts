import { Component, OnInit, Input } from '@angular/core'

import { ViewportScroller } from '@angular/common'

// /. imports

@Component({
  selector: 'app-button-scroll',
  templateUrl: './button-scroll.component.html',
  styleUrls: ['./button-scroll.component.scss']
})
export class ButtonScrollComponent implements OnInit {
  @Input() anchorID: string

  // /. props

  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {
    // console.log(this.anchorID)
  }

  scrollToElement() {
    this.scroller.scrollToAnchor(this.anchorID)
    console.log('clicked!')
  }
}
