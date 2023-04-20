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

