//задание 1
let password = 'пароль';
let answer = prompt('Введите пароль');
// let result = password === $пароль ? alert ('Пароль введен верно') : alert ('Пароль введен неверно');
if (answer === password) {
    console.log('пароль введен верно');
} else {
    console.log('пароль введен неверно');
}

// задание 2
let c = 7;
if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('неверно');
}

// задание 3
let d = 6;
let e = 999;
if (d > 100 || e > 100) {
    console.log('верно');
} else {
    console.log('неверно');
}

// задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже : 
alert(number(a + b));

// задание 5
let monthNumber = 12;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log('нет такого месяца');
        break;
}
