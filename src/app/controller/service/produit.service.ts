import {Injectable} from '@angular/core';
import {Produit} from "../model/produit.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) {
  }

  url: string = 'http://localhost:8036/produits/'


  // @ts-ignore
  private _produit: Produit;
  // @ts-ignore
  private _produits: Array<Produit>;


  get produit(): Produit {
    if (this._produit == null) {
      this._produit = new Produit();
    }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get produits(): Array<Produit> {
    if (this._produits == null) {
      this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }

  findAll() {
    this.http.get(this.url).subscribe(data => {
        // @ts-ignore
        this._produits = data;
      },
      erreur => {
        alert('erreur');
      });
  }

  save() {
    this.http.post<Produit>(this.url, this._produit).subscribe(data => {
      this._produits.push(data)
    });
  }
}
