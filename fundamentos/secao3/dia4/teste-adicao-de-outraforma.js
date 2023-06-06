const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  const addProperty = (Objeto, key, value) => {
    if (typeof Objeto.key === 'undefined') {
      Objeto.key = value;
    }
  }
  addProperty(customer, email, 'matheusbraz871@gmail.com')
  addProperty(customer, fone, '98796098')
  addProperty(customer, userGithub, 'roberto123')
  addProperty(customer, linkedIn, 'roberto333')
  console.log(customer)