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

function comportamento3(acontecimento) {
    const caractere = acontecimento.key 
    if (caractere !== 'a') {
        acontecimento.preventDefault();
    }
}
inputText.addEventListener('keypress', comportamento3);ref
