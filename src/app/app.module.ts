import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { SafeHtmlPipePipe } from './safe-html-pipe.pipe';
import { GSDComponent } from './gsd/gsd.component';
import { MDComponent } from './md/md.component';
import { GRDComponent } from './grd/grd.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipePipe,
    GSDComponent,
    MDComponent,
    GRDComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
