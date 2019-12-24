import { createParagraph } from "./dom.js";

const formElt = document.querySelector('.todo-form');
const inputElt = document.querySelector('.todo-input');
const listElt = document.querySelector('.todo-list');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = inputElt.value;
  createParagraph(todo, listElt);
});