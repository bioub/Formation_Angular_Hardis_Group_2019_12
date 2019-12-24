export function createParagraph(text, container) {
  const pElt = document.createElement('p');
  pElt.innerText = text;
  container.appendChild(pElt);
}