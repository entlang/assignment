import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from './components/contact';
import { ContactsService } from "./services/contact";

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  providers: [ContactsService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
