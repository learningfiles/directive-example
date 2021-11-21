import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('templateContent', {read: TemplateRef})
  templateRef: TemplateRef<any>;

  @ViewChild('target', {read: ViewContainerRef})
  targetElement: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.targetElement.createEmbeddedView(this.templateRef);
  }

  onRemove() {
    this.targetElement.clear()
  }

}
