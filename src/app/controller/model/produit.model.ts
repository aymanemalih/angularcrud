export class Produit {
  id: number;
  ref: string;
  nom: string;
  description: string;
  prix: number;


  constructor() {
    this.id = 0;
    this.ref = '';
    this.nom = '';
    this.description = '';
    this.prix = 0;
  }
}
