import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input('appTextColor') textColor: string = "green";

  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.style.color = "green";
  }

  ngOnInit() {
    this.elemento.nativeElement.style.color = this.textColor;
  }

}
