import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProduitComponent} from "./views/list-produit/list-produit.component";
import {CreateProduitComponent} from "./views/create-produit/create-produit.component";


const routes: Routes = [
  {
    path: 'listproduit',
    component: ListProduitComponent
  },
  {
    path: 'createproduit',
    component: CreateProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
