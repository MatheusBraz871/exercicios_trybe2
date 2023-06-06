const reader = {
    nome: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };
  let message = `o livro faorito de ${reader.nome} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`;
  console.log(message); 
  reader.favoriteBooks.push(
    {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  }
)
console.log(reader);
console.log(`julia tem ${reader.favoriteBooks.length} livros favoritos`)