// função no parâmetro para chamá-la dps.
const person = {
    name: 'Ala',
    lastName: 'Lhama',
    greet: (name, func) => {
        return func(name);
    }
};

const loveGreet = (name) => {
    return `Olá, ${name}!`;
};

const badMoodGreet = () => {
    return 'Não me dê bom dia!';
};

console.log(person.greet(loveGreet)); // Agora pode se chamar as outras functions.
console.log(person.greet(person.name, loveGreet));

const megaNumbers = [5, 12, 16, 22, 44, 57];
megaNumbers.forEach((element) => {
    console.log(element);
});
