const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultImpar = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        resultImpar += 1;
    }
};

if (resultImpar === 0) {
    console.log('não há elementos impares');
} else {
    console.log(resultImpar);
}