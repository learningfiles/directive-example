import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlternativeNgIfDirective } from './directives/alternate-ngIf.directive';
import { HighLightText } from './directives/highlight-text';
import { HighLightTextRenderer } from './directives/highlight-text-renderer';

@NgModule({
  declarations: [
    AppComponent,
    HighLightText,
    HighLightTextRenderer,
    AlternativeNgIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
