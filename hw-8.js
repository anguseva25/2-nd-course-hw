// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

const persons = console.log(people.sort((x, y) => x.age - y.age));

// Задание 2
function isPositive(number) {
    return number > 0;
}
function isMale() {
    // писать код тут
}
function filter(array, type) {
    const myResult = [];
    for (let i = 0; i < array.lenght; i++) {
        if (let) {

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

// Задание 5