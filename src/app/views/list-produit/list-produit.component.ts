import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../controller/service/produit.service";
import {Produit} from "../../controller/model/produit.model";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {

  constructor(private service: ProduitService) { }

  ngOnInit(): void {
    this.service.findAll();
  }

  get produits():Array<Produit>{
    return this.service.produits;
  }

}
