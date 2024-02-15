// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

const persons = console.log(people.sort((x, y) => x.age - y.age));

// Задание 2
function isPositive(Number) {
    return Number > 0;
}

function isMale(String) {
    return person.gender === 'male'
}
function filter(array, functionRule) {
    const myResult = [];
    for (let i = 0; i < array.lenght; i++) {
        if (functionRule(array[i])) {
            myResult.push(array[i])
        }
    }
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const men = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
// Задание 3

// Задание 4
let myCurrentDate = new Date();
console.log(myCurrentDate);

const intervalId = setInterval(function () {
    for (let k = 0; k < 30; k++)
        console.log(myCurrentDate)
}, 3000)

// Задание 5