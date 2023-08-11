const format = require('date-fns/format')

const newDate = new Date();

const formatDate = format(newDate, 'dd/MM/yyyy');

console.log(formatDate);
