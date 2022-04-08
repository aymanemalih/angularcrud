import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { ListProduitComponent } from './views/list-produit/list-produit.component';
import { CreateProduitComponent } from './views/create-produit/create-produit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListProduitComponent,
    CreateProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
