const globale = 'globale';

function externe() {
  const closure = 'closure';
  function interne() {
    const locale = 'locale';
    console.log(typeof globale); // string
    console.log(typeof closure); // string
    console.log(typeof locale); // string
  }

  interne();
}

externe();

console.log(typeof globale); // string
console.log(typeof closure); // undefined
console.log(typeof locale); // undefined
