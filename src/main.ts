const nomsPossibles = [
  "Amandine",
  "Benoit",
  "Cédric",
  "Dorian",
  "Emilie",
  "Fabien",
  "Géraldine",
  "Hélène",
  "Isabelle",
  "Jérôme",
  "Karine"
]

//1. Créez un tableau d'élèves qui contient un nom aléatoire pour chaque élève.
let prenom : string[] = [];

for (let index = 0; index < 16; index++) {
    prenom.push(nomsPossibles[Math.floor(Math.random() * 10)]);
    
}

console.log("1. Créez un tableau d''élèves qui contient un nom aléatoire pour chaque élève.", prenom);

//2. Créez un tableau de notes qui contient une note aléatoire entre 0 et 20 pour chaque élève.
let notes : number[] = [];

for (let index = 0; index < 16; index++) {
  notes.push(Math.floor(Math.random() * 21));
}

console.log("2. Créez un tableau de notes qui contient une note aléatoire entre 0 et 20 pour chaque élève.",notes);