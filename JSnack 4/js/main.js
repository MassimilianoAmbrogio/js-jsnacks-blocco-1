/**
 * In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
   Chiedi all’utente il suo nome
   Comunicagli se può partecipare o no alla festa.
 */

 //  Start variables
var invitati = ['Paolo', 'Fabio', 'Lorenzo'];

//  Domanda all'utente
var utente = prompt('Quale è il tuo nome?');

var utenteFound = false;

for (var i = 0; i < invitati.length; i++) {
    var item = invitati[i];

    if (utente == item) {
        utenteFound = true;
    }
}

// Feedback
if (utenteFound == true) {
    console.log('Puoi partecipare');
}
else {
    console.log('Non puoi partecipare');
}