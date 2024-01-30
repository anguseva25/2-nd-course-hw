//Задание 1
function interval(a, b) {
    return (a => b) ? b : a;
}

let result1 = console.log(interval(8, 4));
let result2 = console.log(interval(6, 6));

//Задание 2
function backNumberType(n) {
    return (n % 2 == 0) ? ('число четное') : ('число нечетное')
}
let chance1 = console.log(backNumberType(15));
let chance2 = console.log(backNumberType(26));

//Задание 3.1
function value(n) {
    return Math.pow(n, 2) ? n ** 2 : 'none info'
}
let question = console.log(value(8));

//Задание 3.2
function value(n) {
    return Math.sqrt(n)
}
let question1 = console.log(value(121));

//Задание 4
function ask(r) {
    return (r !== 0 && r <= 12) ? ('«Привет, друг!»') : ('Добро пожаловать')
}
let result3 = console.log(ask(prompt('Введите возраст')));

//Задание 5
function theNumbers(p, k) {
    return !(isNaN(Number(p)) || isNaN(Number(k))) ? Number(p * k) : 'Одно или оба значения не являются числом'
}
let result4 = console.log(theNumbers(8, 9));
let result5 = console.log(theNumbers(13, 't'));

//Задание 6
function cubeValue(n = prompt('введите число от 0 до 10')) {
    return (n === Number(n) || n === 0) ? Number(n ** 3) : 'Переданный параметр не является числом'
}
let result6 = console.log(`${cubeValue(n)} в кубе равняется ${n}`)

//Задание 7
const circle1 = {
    radius: 7,
    getArea: returnSquareCirleViaRadius,
    getPerimeter: returnCirlePerimetre,
}
const circle2 = {
    radius: 5,
    getArea2: returnSquareCirleViaRadius2,
    getPerimeter2: returnCirlePerimetre2,
}