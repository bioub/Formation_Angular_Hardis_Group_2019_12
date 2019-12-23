const prenoms = ['Romain', 'Joseph'];

// Afficher en majuscules les prénoms du tableau

// Un callback est une fonction déclarée
// que l'on appelle pas directement
// mais qui sera appelé par un autre API (ici par forEach)
// function hello(prenom) {
//   console.log('Hello ' + prenom)
// }
// prenoms.forEach(hello);
// for (const prenom of prenoms) {
//   callback(prenom)
// }
//
// prenoms.forEach(function () {
//   console.log('Hello')
// });

prenoms.forEach((prenom) => console.log('Hello ' + prenom));

console.log('FIN');

// ^
// |lg   lg
// |=> - =>
// |forEach - lg
// +-----------------------------------
// Console
// Hello Hello FIN


// function bonjour() {
//   console.log('Bonjour')
// }
// function hello() {
//   bonjour();
//   console.log('Hello');

// }
// hello();

// ^
// |log
// |bonjour - log
// |hello
// +-----------------------------------
// Console :
//  Bonjour   Hello
