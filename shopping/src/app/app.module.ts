import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FormsModule } from '@angular/forms';
import { AddShoppingComponent } from './add-shopping/add-shopping.component';
import { BhDirective } from './bh.directive';
import { NotTureDirective } from './not-ture.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    AddShoppingComponent,
    BhDirective,
    NotTureDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
