const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
  return names.reduce((someName, curr) => someName + curr).split('').reduce((word, next) => {
      if(next === 'a' || next === 'A') {
      return word + 1;
      }
      return word;
  }, 0);
// Pq retornava 'undefineda'?
  }
  console.log(containsA());