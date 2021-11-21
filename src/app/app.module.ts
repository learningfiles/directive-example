import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlternativeNgIfDirective } from './directives/alternate-ngIf.directive';
import { HighLightText } from './directives/highlight-text';
import { HighLightTextRenderer } from './directives/highlight-text-renderer';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    HighLightText,
    HighLightTextRenderer,
    AlternativeNgIfDirective,
    TemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
