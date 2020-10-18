/**
 * L’utente inserisce due numeri in successione, con due prompt.
   software stampa il maggiore.
 */

var user1 = parseInt(prompt('Inserire il primo numero'));

var user2 = parseInt(prompt('Inserire il secondo numero'));

// Controllo
if (user1 > user2) {
  console.log('Il primo numero ' + user1 + ' è maggiore');
}
else if (user1 < user2) {
  console.log('Il secondo numero ' + user2 + ' è maggiore');
}
else {
  console.log('Numeri uguali');
}