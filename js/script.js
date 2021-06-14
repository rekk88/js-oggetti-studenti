var studente = {
    nome : "gianni",
    cognome  : "g",
    età : 15,
};

for(var k in studente){
    // k identifica il nome della proprietà mentre studente[k] identifica il valore 
    console.log(k , " : ", studente[k]); //visualizza tutte le proprietà dell'oggetto
}

var studenti = [];

studenti.push(studente);
console.log(studenti);

