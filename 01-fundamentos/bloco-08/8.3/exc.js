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
  
  function formatedBookNames() {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  }
  console.log(formatedBookNames());

  function nameAndAge() {
    return books.map((book) => (
        { 
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear,
        }
    )).sort((a, b) => a.age - b.age);
};
console.log(nameAndAge());

const fantasyOrScienceFiction = () => {
 return books.filter((bookFanFic) => 
bookFanFic.genre === 'Ficção Científica' || bookFanFic.genre === 'Fantasia');
};
console.log(fantasyOrScienceFiction());

const oldBooksOrdered = () => {
 return books.filter((book) => 
 2022 - book.releaseYear > 60).sort((book1, book2) => book1.releaseYear - book2.releaseYear);
}
console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors() {
  const theBooks = books.filter((obj) => obj.genre === 'Ficção Científica' || obj.genre === 'Fantasia');
 return theBooks.map((nameAuthor) => nameAuthor.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  const books60 = books.filter((book) =>  2022 - book.releaseYear > 60);
  return books60.map((book60) => book60.name);
}
console.log(oldBooks());

function authorWith3DotsOnName() {
  const nameWithDots = books.filter((name3Dots) =>  
  name3Dots.author.name[1] === '.' && name3Dots.author.name[4] === '.' && name3Dots.author.name[7] === '.');
  return nameWithDots.map((book) => book.name).toString();
}
console.log(authorWith3DotsOnName());