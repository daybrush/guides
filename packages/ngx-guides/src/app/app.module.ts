import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGuidesModule } from 'projects/ngx-guides/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGuidesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
