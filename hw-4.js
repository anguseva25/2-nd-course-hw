// Задание 1
while (i <= 2) {
    console.log(alert('Привет'));
    i++;
}

// Задание 2
let w = 1;
do {
    console.log(w);
    w++;
} while (w <= 5);

// Задание 3
let u = 7;
do {
    console.log(u);
    u++;
} while (u <= 22);

// Задание 4

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// Задание 5
let n = 1000;
let num = 0;
while (n>=50) {
    n /= 2;
    num++;
}
console.log(`количество итераций ${num}`)
console.log(`финальное число в ходе деления ${n}`) //когда в консоли браузера переписываешь несколько раз условия, то меняешь, как правило, переменные, чтобы не выдавалась ошибка, и работал код.

// let num1 = 0
// let s = 1000
// for (s; s >= 50; num1++) {
//     s /= 2;
// }
// console.log(`количество итераций ${num1}`)
// console.log(`финальное число в ходе деления ${s}`)


// Задание 6
let currentDay = 0 // первый день месяца
let date // дата календаря
let dayOfWeek // день недели
do {
    ++currentDay
    date = new Date(2024, 0, currentDay)
    dayOfWeek = date.getDay()
}
while (dayOfWeek !== 5)

while (currentDay < 32) {
    console.log(`Сегодня ${currentDay}-е число. Это пятница - садись делать отчет`)
    currentDay += 7
}
