// Игра 1
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

// Игра 2
let password = 'пароль';
let answer = prompt('Введите пароль');
// let result = password === $пароль ? alert ('Пароль введен верно') : alert ('Пароль введен неверно');
if (answer === password) {
    console.log('пароль введен верно');
} else {
    console.log('пароль введен неверно');
}

// Игра 3
function ask(r) {
    return (r !== 0 && r <= 12) ? ('«Привет, друг!»') : ('Добро пожаловать')
}
let result3 = console.log(ask(prompt('Введите возраст')));