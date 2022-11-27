import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDolar]'
})
export class DolarDirective implements OnInit {

  constructor(private element: ElementRef, private render: Renderer2) { }
  ngOnInit(): void {
    this.render.setStyle(this.element.nativeElement, 'color', 'green');
    this.render.setStyle(this.element.nativeElement, 'font-weight', '700');
    this.render.addClass(this.element.nativeElement, 'test')
  }

}
