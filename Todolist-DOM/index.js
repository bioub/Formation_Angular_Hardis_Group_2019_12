const formElt = document.querySelector('.todo-form');
const inputElt = document.querySelector('.todo-input');
const listElt = document.querySelector('.todo-list');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = inputElt.value;

  const pElt = document.createElement('p');
  pElt.innerText = todo;
  listElt.appendChild(pElt);
});