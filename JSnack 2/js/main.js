/**
 * L’utente inserisce due parole in successione, con due prompt.
   Il software stampa una stringa contenente prima la parola più corta,
   uno spazio e poi la parola più lunga.
 */

var word = prompt('Inserire prima parola');
var word1 = prompt('Inserire seconda parola');

if (word.length > word1.length) {
    console.log(word1 + ' ' + word);
}
else if (word1.length > word.length) {
    console.log(word + ' ' + word1);
}
else {
    console.log('La lunghezza di entrambe le parole è uguale');
}