import {Input, OnInit, Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlighterRenderer]'
})
export class HighLightTextRenderer implements OnInit {

  @Input('appHighlighterRenderer')
  color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const nativeElement = this.element.nativeElement;
    this.renderer.setStyle(nativeElement, 'color', this.color);
  }

  @HostListener('mouseenter') onMouseEnter(event: Event) {
    const nativeElement = this.element.nativeElement;
    this.renderer.setStyle(nativeElement, 'color', 'grey');
  }
  @HostListener('mouseleave') onMouseLeave(event: Event) {
    const nativeElement = this.element.nativeElement;
    this.renderer.setStyle(nativeElement, 'color', this.color);
  }
}
