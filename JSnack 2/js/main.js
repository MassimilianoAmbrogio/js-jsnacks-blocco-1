 /**
 * L’utente inserisce due parole in successione, con due prompt.
   Il software stampa una stringa contenente prima la parola più corta,
   uno spazio e poi la parola più lunga.
 */

var word1 = prompt('Inserire parola 1');
var word2 = prompt('Inserire parola 2');

// Check
if (word1.length > word2.length) {
    console.log(word2 + ' ' + word1);
}
else if (word2.length > word1.length) {
    console.log(word1 + ' ' + word2);
}
else {
    console.log('La lunghezza di entrambe le parole è uguale');
}