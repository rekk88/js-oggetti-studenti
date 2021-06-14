var studente = {
    nome : "gianni",
    cognome  : "g",
    età : 15,
};

for(var k in studente){
    // k identifica il nome della proprietà mentre studente[k] identifica il valore 
    console.log(k , " : ", studente[k]); //visualizza tutte le proprietà dell'oggetto
}

var studenti = [
    {
        nome : "arancia",
        cognome  : "agrume",
        età : 13,
    },
    {
        nome : "mela",
        cognome  : "bo",
        età : 17,
    }
];

studenti.push(studente);
console.log(studenti);

for(var i=0 ; i < studenti.length ; i++){
    console.log("studente n. " , i+1);
    console.log("nome : ",studenti[i].nome , "  cognome  : ", studenti[i].cognome);
}

var n = prompt("inserisci il nome dello studente : ");
var c = prompt("inserisci il cognome : ");
var e = parseInt(prompt("inserisci l'età : "));

var newStudente = {
    nome : n,
    cognome : c,
    età : e, 
};

studenti.push(newStudente);

console.log(studenti);