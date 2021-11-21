import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[appHighlighter]'
})
export class HighLightText implements OnInit{

  constructor(private element: ElementRef) {}

  @Input()
  color: string;

  ngOnInit() {
    (<HTMLElement>this.element.nativeElement).style.color = this.color;
  }
}
