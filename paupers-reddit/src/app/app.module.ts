import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from
'@angular/common/http';
import { PaupRedditComponent } from './paup-reddit-list/paup-reddit.component';
import { PaupRedditResultComponent } from './paup-reddit-result/paup-reddit-result.component';


@NgModule({
  declarations: [
    AppComponent,
    PaupRedditComponent,
    PaupRedditResultComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
