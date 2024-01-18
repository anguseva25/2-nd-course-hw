// задание 1
alert(10);

alert(20);

// задание 2
let IphoneBirth = prompt('Год выпуска первого Iphone');
alert('2007');

// задание 3
let creator = prompt('Создател языка JavaScript');
alert('Брендан Эйх');

// задание 4
let MakeAddition = Number(prompt('10 + 2'));
let x = 10;
let y = 2;
let Addition = x + y;
alert(Addition);

let MakeSubtraction = Number(prompt('10 - 2'));
let a = 10;
let b = 2;
let Subtraction = a - b;
alert(Subtraction);

let MakeMultiply = Number(prompt('10 * 2'));
let i = 10;
let c = 2;
let Multiply = i * c;
alert(Multiply);

let MakeDivide = Number(prompt('10 / 2'));
let j = 10;
let k = 2;
let Divide = j / k;
alert(Divide);

// задание 5
let makeMath = Number(prompt('2^5'));
let F = 2;
let l = 5;
let Math = F ** l;
alert(Math);

// задание 6
let U = 9;
let Z = 2;
let RestResult = Number(prompt('Остаток деления (9/2)'));
let Rest = U % Z;
alert(Rest);

// задание 7
let num = 1;
num = num + 5; -> num += 5;
num = num - 3; -> num -= 3;
num = num * 7; -> num *= 7;
num = num / 3; -> num /= 3;
num = num + 1; -> num++;
num = num - 1; -> num--;
alert(num);

// задание 8
let age = Number(prompt('Сколько вам лет?'));
alert(age);

// задание 9
let userCat = {
    name: 'Самса';
    age: 2;
    isAdmin: false ;
}

// задание 9.1
let user.CityOfResidence = 'Саратов';

// задание 9.2
user.age = 54;

// Задание 9.3
delete user['CityOfResidence'];

// Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// Задание 10
let yourName = prompt('Ваше имя');
alert(`Привет, ${yourName}`);