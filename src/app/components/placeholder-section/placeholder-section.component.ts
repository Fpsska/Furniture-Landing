import { Component, Input, OnInit } from '@angular/core'

// /. imports

@Component({
  selector: 'app-placeholder-section',
  templateUrl: './placeholder-section.component.html',
  styleUrls: ['./placeholder-section.component.scss']
})
export class PlaceholderSectionComponent implements OnInit {
  @Input() pageName: string

  // /. props

  constructor() {}

  ngOnInit(): void {}
}
