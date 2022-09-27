import { Component, OnInit, Input } from '@angular/core'

// /. imports

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() status: boolean

  constructor() {}

  ngOnInit(): void {}
}
