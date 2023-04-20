// exo 1


class Avion {
  constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
    this.marque = marque;
    this.modele = modele;
    this.longueur = longueur;
    this.nbPlace = nbPlace;
    this.reservoir = reservoir;
    this.vitesse = vitesse;
  }
}

const avion1 = new Avion("Boeing", "747", 70, 416, 241140, 907);
console.log(avion1);


// exo 2

class Avion {
  constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
    this._marque = marque;
    this._modele = modele;
    this._longueur = longueur;
    this._nbPlace = nbPlace;
    this._reservoir = reservoir;
    this._vitesse = vitesse;
  }

  get marque() {
    return this._marque;
  }

  set marque(value) {
    this._marque = value;
  }

  get modele() {
    return this._modele;
  }

  set modele(value) {
    this._modele = value;
  }

  get longueur() {
    return this._longueur;
  }

  set longueur(value) {
    this._longueur = value;
  }

  get nbPlace() {
    return this._nbPlace;
  }

  set nbPlace(value) {
    this._nbPlace = value;
  }

  get reservoir() {
    return this._reservoir;
  }

  set reservoir(value) {
    this._reservoir = value;
  }

  get vitesse() {
    return this._vitesse;
  }

  set vitesse(value) {
    this._vitesse = value;
  }
}

const avion1 = new Avion("Boeing", "747", 70, 416, 241140, 907);

console.log(avion1.marque); 
console.log(avion1.modele); 
console.log(avion1.longueur); 
console.log(avion1.nbPlace); 
console.log(avion1.reservoir); 
console.log(avion1.vitesse); 

avion1.marque = "Airbus";
avion1.modele = "A380";
avion1.longueur = 73;
avion1.nbPlace = 853;
avion1.reservoir = 320000;
avion1.vitesse = 913;


console.log(avion1.marque);
console.log(avion1.modele);
console.log(avion1.longueur);
console.log(avion1.nbPlace); 
console.log(avion1.reservoir); 
console.log(avion1.vitesse);