 const beenPrice = 10;
const totalMoney = 800;
let message = ' ';

if (totalMoney < beenPrice) {
    message = 'voce não possui saldo o suficiente para realizar esta compra'
} else if (totalMoney === beenPrice) {
    message = 'compra aprovada, saldo atual igual a 0';
} else {
    message = 'compra aprovada'
} 

console.log(message);


const podeComprar = totalMoney >= 10 ? 'compra aprovada' : 'compra negada'

console.log(podeComprar)