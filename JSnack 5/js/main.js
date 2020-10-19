/**
 * Crea un array vuoto
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
 */

var arrayNumeri = [];

for (var i = 0; i < 6; i++) {
  var numero = parseInt( prompt('Inserisci un numero') );
  
  if (numero % 2 != 0) {
    arrayNumeri.push(numero);
  }
}

console.log(arrayNumeri);
