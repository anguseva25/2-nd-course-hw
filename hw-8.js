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
    return number > 0 ? true : false;
}

function isMale(string) {
    return string.gender === 'male' ? true : false;
}

function isFemale(string) {
    return string.gender === 'female' ? true : false;
}

function filter(array, callback) {
    const result = [];
    for (let element of array) {
        if (callback(element))
            result.push(element)
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
console.log(filter(people, isFemale)); // для женщин

// Задание 3
let myCurrentDate = new Date();
console.log(myCurrentDate);

const intervalId = setInterval(() => {
    console.log(new Date())
}, 3000)
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Прошло 30 секунд');
}, 30000);


// Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

// Задание 5
function newDelayForSecond(callback) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (callback) { callback(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
newDelayForSecond(() => sayHi('Глеб'))
