const beenPrice = 10;
const totalMoney = 8;
let message = ' ';

if (totalMoney < beenPrice) {
    message = 'voce não possui saldo o suficiente para realizar esta compra'
} else if (totalMoney === beenPrice) {
    message = 'compra aprovada, saldo atual igual a 0';
} else {
    message = 'compra aprovada, saldo atual iagua ao de antes menos 8';
} 

console.log(message);