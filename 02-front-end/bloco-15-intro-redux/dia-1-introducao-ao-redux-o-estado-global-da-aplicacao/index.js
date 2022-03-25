const Redux = require('redux');

// const ESTADO_INICIAL = {
//     colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
//     index: 0,
//   };

// const NEXT_COLOR = {
//     type: 'Next color',
// }                                                                                   

// // const PREVIOUS_COLOR = {
// //     type: 'Previous color',
// // }

// const reducer = (state = ESTADO_INICIAL, action) => {
//     console.log(action.type);
//     switch (action.type) {
//         case 'Next color' :
//           return {
//               ...state,
//               colors:  b,
//               index: state.index + 1,
//           };
//         // case 'Previous color' :
//         //     return {
//         //         ...state,
//         //         colors: a 
//         //     }
//         default: return state;    
//     }
// };

// const store = Redux.createStore(reducer);

// const buttonNext = document.getElementById('next');
// buttonNext.addEventListener('click', () => {
//     store.dispatch(NEXT_COLOR);
//     console.log('oi');
// });

// // const buttonPrev = document.getElementById('previous');
// // buttonPrev.addEventListener('click', () => {
// //     store.dispatch(PREVIOUS_COLOR);
// // });

// store.subscribe(() => {
//     const stateGlobal = store.getState();
//     console.log(stateGlobal); // alterar o que recebe.
//     const colorValue = document.getElementById('value');
//     colorValue.innerText = stateGlobal.colors;
// });

// 3 - Incremente o switch criado no exercício anterior com as actions NEXT_COLOR e PREVIOUS_COLOR . 
// Essas actions devem alterar o valor index guardado no ESTADO_INICIAL . 
// Atente-se aos limites de tamanho do array, as posições devem iniciar em 0 
// e não podem exceder a numeração do último item do array.

// 4 - Crie eventListeners que escutam os cliques de cada botão, 
// o Previous color e o Next color , e realizam um dispatch com o respectivo action.type de cada.

// 5 - Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual
// e o style do elemento com id container . Você deverá ser capaz de ver as cores mudando ao fundo,
// e o nome da cor exibida.