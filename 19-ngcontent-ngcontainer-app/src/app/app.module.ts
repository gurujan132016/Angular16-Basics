import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgcontentdemoComponent } from './ngcontentdemo/ngcontentdemo.component';
import { NgcontainerdemoComponent } from './ngcontainerdemo/ngcontainerdemo.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NgcontentdemoComponent,
    NgcontainerdemoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
