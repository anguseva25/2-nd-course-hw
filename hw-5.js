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
function ask(r){
    return (r !== 0 && r <=12) ? ('«Привет, друг!»') : ('Добро пожаловать')
}
let result3 = console.log(ask(prompt('Введите возраст')));

//Задание 5
