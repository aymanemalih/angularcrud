import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../controller/service/produit.service";
import {Produit} from "../../controller/model/produit.model";

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.scss']
})
export class CreateProduitComponent implements OnInit {

  constructor(private service: ProduitService) { }

  ngOnInit(): void {
  }


  get produit():Produit{
    return this.service.produit;
  }


  save(){
    this.service.save();
  }
}
