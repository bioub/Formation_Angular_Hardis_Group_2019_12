const prenoms = ['Romain', 'Joseph'];

function hello(name) {
  return 'Hello ' + name;
}

// ES2015
for (const prenom of prenoms) {
  console.log(hello(prenom));
}
