const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

function comportamento1(acontecimento) {
   acontecimento.preventDefault();
}
hrefLink.addEventListener('click', comportamento1);

function comportamneto2(acontecimento) {
    acontecimento.preventDefault();
}
inputCheckbox.addEventListener('click', comportamneto2);
