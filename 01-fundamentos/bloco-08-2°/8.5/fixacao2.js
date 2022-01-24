
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const userInfos = {...user, ...jobInfos};

  const {name, age, nationality, profession, squad, squadInitials} = userInfos;
  console.log(`Nome: ${name}, Idade: ${age}, Nacionalidade: ${nationality}, Profissão: ${profession}, Esquadrão: ${squad} - ${squadInitials} .`);