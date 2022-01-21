const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
    function authorBornIn1947() {
      // escreva aqui o seu código
      const book  = books.find((obj) => obj.author.birthYear === 1947)
      return book.author.name;
    }
    console.log(authorBornIn1947());

    function smallerName() {
      let nameBook = books[0].name;
      // escreva aqui o seu código
    books.forEach((book) => {
        if(book.name.length < nameBook.length) {
            nameBook = book.name;
        }
    })
      // Variável nameBook que receberá o valor do menor nome;
      return nameBook;
    }
    console.log(smallerName());

    function getNamedBook() {
      // escreva seu código aqui
      const names = books.find((obj) => obj.name.length === 26)
      return names.name
    }
    console.log(getNamedBook());

    const booksOrder = () => books.sort((obj1, obj2) => obj2.releaseYear - obj1.releaseYear);
    console.log(booksOrder());

  function everyoneWasBornOnSecXX() {
    return books.every((el) => el.author.birthYear > 1900 && el.author.birthYear <= 2000);
  }
  console.log(everyoneWasBornOnSecXX());

  function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
    return books.some((el) => el.releaseYear > 1980 && el.releaseYear <= 1989);
  }
  console.log(someBookWasReleaseOnThe80s());

  function authorUnique() {
    // escreva seu código aqui
    //caso nenhum tenha nascido no mesmo ano retorne true
    return books.every((nasceu) => books.some((nasceuMesmo) => {
      const result = nasceu.birthYear === nasceuMesmo.birthYear
      if(result) {
        return false
      }
    }))
  }
  console.log(authorUnique());