function sum() {
    try {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        verifyNumber(value1, value2);
        isNanOk(value1, value2);
        const result = parseInt(value1) + parseInt(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
    } catch (error) {
        document.getElementById('result').innerHTML = error.message;
    }
    finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
  }
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }

//criar erro personalizado se a pessoa digitar só um número
const verifyNumber = (value1, value2) => {
    if (value1 === "" || value2 === "") {
        throw new Error('Precisa-se de mais um valor para a soma!');
    }
};

const isNanOk = (value1, value2) => {
    if (isNaN(value1) || isNan(value2)) {
        throw new Error('Escreva um número!');
    }
};