function validNotes(n1, n2, n3, n4) {
    if ( typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
        throw new Error('os valores devem ser numéricos');
    }
};

function calculateNote(n1, n2, n3, n4) {
    try {
        validNotes(n1, n2, n3, n4)
        let sum = n1 + n2 + n3 + n4;
        let media = sum / 4;
        return media; 
    } catch(error) {
        return error.message
    }
};

console.log(calculateNote(10, 10, 10, '10'));

