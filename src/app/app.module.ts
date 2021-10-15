import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GroceryComponent } from './app-grocery/app.grocery';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})

export class AppModule { }