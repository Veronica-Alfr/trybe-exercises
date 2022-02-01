const API_URL = `https://api.coincap.io/v2/assets`;

const append = (array) => {
    const ol = document.getElementById('criptoContainer');
    array.forEach((element ) => {
    const li = document.createElement('li');
    li.innerText = element;
    ol.appendChild(li);
    })
}

const fetchCripto = () => {
    const myObject = {
      method: 'GET',
      redirect: 'follow',
    };
  
    fetch(API_URL)
      .then(response => response.json())
      .then(data => append(data.data
      .filter((element, index) => index < 10).map((element) => 
      `${element.name} (${element.symbol}) : ${element.priceUsd}`)
      ))
      .catch(error => console.log('error', error));
  };
  window.onload = () => fetchCripto();