const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
 function addCustomer (customer) {
   if (typeof customer != 'string') {
     return 'O parametro passado deve ser do tipo string'
   } 
    
    return trybeBankCustomers.push(customer)
   }
 
 console.log(addCustomer('matheus'))
 console.log(trybeBankCustomers)
 console.log(addCustomer(true))
