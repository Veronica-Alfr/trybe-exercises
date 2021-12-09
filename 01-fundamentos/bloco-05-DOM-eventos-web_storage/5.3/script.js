function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

 const ul = document.getElementById('days');

 function daysCalendar(){
  for (let i = 0; let < dezDaysList.length; i++){
      let daysDez = document.createElement('li')
      daysDez.classList.add('day')
      daysDez.innerText = dezDaysList[i];

 switch (dezDaysList[i]) {
   case 4:
   case 11:
   case 18:
  daysDez.classList.add('friday');
  break;
  case 24:
  case 31:
  daysDez.classList.add('holiday');
  break;
  case 25:
  daysDez.classList.add('holiday' && 'friday');
  break;
  default:
  break;  
 }
 ul.appendChild(daysDez)
}
}
daysCalendar()

function button(feriados) {
  let butt = document.createElement('button');
  butt.id = ('btn-holiday');
  document.querySelector('div.buttons-container').appendChild(button);
}
button('Feriados')