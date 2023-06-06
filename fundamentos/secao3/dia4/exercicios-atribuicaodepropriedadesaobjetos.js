const costumer = {
    age: 18,
    name: 'Matheus',
    work: 'desempregado'
};
costumer.lastName = 'Braz'
console.log(costumer)

const addProperty = (objeto, chave, valor) => {
    if (typeof objeto[chave] === "undefined") {
        objeto[chave] = valor;
    }
}

addProperty(costumer, 'birthDate', '10/03/2002')
addProperty(costumer, 'birthPlace', 'São Luis')
addProperty(costumer, 'maritalStatus', 'solteiro')
console.log(costumer);