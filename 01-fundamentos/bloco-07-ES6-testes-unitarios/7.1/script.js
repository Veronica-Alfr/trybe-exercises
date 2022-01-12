// const testingScope = (escopo) => {
//     if (escopo) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = `${ifScope}`;
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a, b) => a - b);
  //a será o 1° numero comparando com o próximo número que será o b.
  //
  const text = "se encontram ordenados de forma crescente!";
  oddsAndEvens.forEach((x) => console.log(x));
  console.log(`Os números ${oddsAndEvens.join(',')} ${text}`);