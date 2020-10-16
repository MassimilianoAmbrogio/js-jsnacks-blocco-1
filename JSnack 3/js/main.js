/**
 * Il software deve chiedere per 5 volte all’utente di inserire un numero.
   Il programma stampa la somma di tutti i numeri inseriti.
   Esegui questo programma con il for.
 */

var somma = 0;

for (var i = 0; i <= 4; i++) {
  var number = parseInt(prompt('Inserisci un numero'));
  
  somma += number; //è uguale a quella sotto

  // somma = somma + number;
}

console.log(somma);