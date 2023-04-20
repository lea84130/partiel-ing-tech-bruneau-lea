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


// exo 3

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
}

const avions = [];

const avion1 = new Avion("Boeing", "747", 70, 416, 241140, 907);
const avion2 = new Avion("Airbus", "A380", 73, 853, 320000, 913);
const avion3 = new Avion("Boeing", "777", 63, 368, 181280, 905);
const avion4 = new Avion("Airbus", "A320", 37, 150, 23600, 828);
const avion5 = new Avion("Embraer", "E190", 36, 100, 16020, 834);

avions.push(avion1, avion2, avion3, avion4, avion5);

for (let i = 0; i < avions.length; i++) {
  console.log("Avion " + (i + 1) + " : " + avions[i].marque);
}


// exo 4

class Avion {
  constructor(marque, modele, longueur, nbPlace, reservoir, vitesse) {
    this._marque = marque;
    this._modele = modele;
    this._longueur = longueur;
    this._nbPlace = nbPlace;
    this._reservoir = reservoir;
    this._vitesse = vitesse;
  }

  get nbPlace() {
    return this._nbPlace;
  }
}

const avions = [];

const avion1 = new Avion("Boeing", "747", 70, 416, 241140, 907);
const avion2 = new Avion("Airbus", "A380", 73, 853, 320000, 913);
const avion3 = new Avion("Boeing", "777", 63, 368, 181280, 905);
const avion4 = new Avion("Airbus", "A320", 37, 150, 23600, 828);
const avion5 = new Avion("Embraer", "E190", 36, 100, 16020, 834);

avions.push(avion1, avion2, avion3, avion4, avion5);

function additionnerNombrePlaces(avions) {
  let total = 0;
  for (let i = 0; i < avions.length; i++) {
    total += avions[i].nbPlace;
  }
  return total;
}

const totalNombrePlaces = additionnerNombrePlaces(avions);
console.log("Le nombre total de places dans les avions est : " + totalNombrePlaces);



