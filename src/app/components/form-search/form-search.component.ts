import { Component, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {
  constructor() {}

  @ViewChild('inputRef') inputRef: ElementRef<HTMLInputElement>

  formSubmitHandler(e: SubmitEvent): void {
    e.preventDefault()

    const inputValue = this.inputRef.nativeElement.value
    if (inputValue) {
      this.inputRef.nativeElement.value = ''
    }
  }
}
