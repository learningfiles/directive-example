import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIf2]'
})
export class AlternativeNgIfDirective implements OnInit, OnChanges{

  @Input('ngIf2')
  condition: boolean;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
