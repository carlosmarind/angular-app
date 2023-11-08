import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements AfterViewInit {
  @Input('appTextColor') textColor: string = 'black';

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.style.color = this.textColor;
  }
}

