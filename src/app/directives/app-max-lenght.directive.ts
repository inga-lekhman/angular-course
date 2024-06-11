import { ElementRef, HostListener } from '@angular/core';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLenght]',
  standalone: true
})
export class MaxLenghtDirective {
  @Input('appMaxLenght') maxLength!: number;

  constructor(private el: ElementRef<HTMLInputElement>) { }
  @HostListener('input') onInput() {
    const inputValue: string = this.el.nativeElement.value;

    if (inputValue.length > this.maxLength) {
      this.el.nativeElement.setCustomValidity(`Maximum length is ${this.maxLength} characters.`);
      console.log(`Maximum length is ${this.maxLength} characters.`)
    } else {
      this.el.nativeElement.setCustomValidity('');
    }

  }
}
