import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

//Material design components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, 
  MatIconModule,
  MatListModule
} from '@angular/material';

//Bootstrap Imports
import { 
  BsDropdownModule
} from 'ngx-bootstrap/dropdown';

import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { SafeHtmlPipePipe } from './safe-html-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    SafeHtmlPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MatIconModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
