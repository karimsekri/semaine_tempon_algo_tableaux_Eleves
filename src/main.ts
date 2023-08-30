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
let prenoms : string[] = [];

for (let index = 0; index < 16; index++) {
    prenoms.push(nomsPossibles[Math.floor(Math.random() * 10)]);
    
}

console.log("1. Créez un tableau d''élèves qui contient un nom aléatoire pour chaque élève.", prenoms);

//2. Créez un tableau de notes qui contient une note aléatoire entre 0 et 20 pour chaque élève.
let notes : number[] = [];

for (let index = 0; index < 16; index++) {
  notes.push(Math.floor(Math.random() * 21));
}

console.log("2. Créez un tableau de notes qui contient une note aléatoire entre 0 et 20 pour chaque élève.",notes);

//3. Créez une procédure qui affiche le nom de l'élève et sa note.
console.log("3. Créez une procédure qui affiche le nom de l'élève et sa note.")
for (let index = 0; index < 16; index++) {
  console.log(prenoms[index]+" : ", notes[index]);
}

//4. Créez une procédure qui affiche un nom d'élève et la note moyenne des élèves qui portent ce prénom.
console.log("4. Créez une procédure qui affiche un nom d'élève et la note moyenne des élèves qui portent ce prénom.");
noteMoyenneDuPrenomDonnerprenom("Amandine");

function noteMoyenneDuPrenomDonnerprenom(monPrenom:string) {
  let somme = 0 ; 
  let nbreDeFois = 0;
  let moyenne = 0;
  prenoms.forEach((item, index) => {
      if (item === monPrenom) {        
        console.log("Item : ", item, "Index : ", index)
        console.log(notes[index])
        somme = somme + notes[index]
        nbreDeFois++                
      }      
  });
  moyenne = somme / nbreDeFois
  console.log("Le prénom ", monPrenom, " apparait ", nbreDeFois, " fois.  la note moyenne des élèves qui portent ce prénom est ", moyenne)  
}

//5. Créez une fonction qui retourne la note maximale de la classe.
console.log("5. Créez une fonction qui retourne la note maximale de la classe.");
console.log("la note maximale de la classe est : ",noteMaximaleClasse());
function noteMaximaleClasse() {
  let noteMaximale = 0;
  
  notes.forEach((item, index) => {
    if (item > noteMaximale) {
      noteMaximale = item      
    }
  });
  return noteMaximale
}

// 6. Créez une fonction qui retourne la note minimale de la classe.
console.log("6. Créez une fonction qui retourne la note minimale de la classe.");
console.log("la note minimale de la classe est : ",noteMinimaleClasse());
function noteMinimaleClasse() {
  let noteMinimale = 20;  
  notes.forEach((item, index) => {
    if (item < noteMinimale) {
      noteMinimale = item      
    }
  });
  return noteMinimale
}

//7. Créez une fonction qui retourne la moyenne de la classe.
console.log("7. Créez une fonction qui retourne la moyenne de la classe.");
console.log("La moyenne de la classe est : ", moyenneDeLaClasse());
function moyenneDeLaClasse() {
  let moyenne = 0;
  let somme = 0 ;
  let nbreDeFois = 0 ;
  notes.forEach((item)=>{
    somme = somme + item
    nbreDeFois++;
  });
  moyenne = somme / nbreDeFois;
  return moyenne
}

//8. Créez une fonction qui retourne le nombre d'élèves qui ont la moyenne.
console.log("8. Créez une fonction qui retourne le nombre d'élèves qui ont la moyenne.")
console.log("le nombre d'élèves qui ont la moyenne : ", nombreEleveQuiOntLaMoyenne());
function nombreEleveQuiOntLaMoyenne() {
  let nombreEleve = 0;
  notes.forEach((item)=>{
    if (item >= 10) {
      nombreEleve++
    }
  });
  return nombreEleve 
}

//9. Créez une procédure qui affiche pour chaque note, le nombre d'élèves qui ont cette note.
function nombreEleveParNote() {
  let countNumber :  number[] = [];

  for (let index = 0; index < notes.length; index++) { 
   
    let nombreNote = 0 ;   
    notes.forEach((item)=>{
        if (item === notes[index]) {
          nombreNote ++;
        }
    });
    console.log(notes[index],nombreNote);
  }
  
}
nombreEleveParNote();