let angleA = 50;
let angleB = 50;
let angleC = 80;


if (angleA + angleB + angleC === 180) {
    console.log(true);
} else if (angleA + angleB + angleC != 180) {
    console.log(false);
} else if (angleA < 0  || angleB < 0 || angleC < 0) {
    console.log('erro: angulo invalido');
}

