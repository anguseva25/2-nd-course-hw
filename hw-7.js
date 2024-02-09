// Задание 1 >>>>>>>>>>>>
let magic = 'science-fiction'
console.log(newString = magic.toUpperCase());

let smile = 'HAPPYNESS'
console.log(newString1 = smile.toLowerCase());

// Задание 2 >>>>>>>>>>>>
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

// Задание 3 >>>>>>>>>>>>
// Округлите число 32.58884

// До меньшего целого
console.log(Math.floor(32.58884));

// До большего целого
console.log(Math.ceil(32.58884));

// До ближайшего целого
console.log(Math.round(32.58884))

// Задание 4 >>>>>>>>>>>>

let priceStock = [52, 53, 49, 77, 21, 32]

// число наименьшее
console.log(Math.min.apply(null, priceStock));
// число наибольшее
console.log(Math.max.apply(null, priceStock));

// Задание 5 >>>>>>>>>>>>
// function randomNumbers(max, min) {
//     return Math.random() * (max - min) + min;
// }
// console.log(randomNumbers(1, 10))
console.log(Math.random(1, 10))

// Задание 6 >>>>>>>>>>>>
getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6

// Задание 7 >>>>>>>>>>>>
// let x = Math.round(Math.random())
let max1 = Number(prompt('введите число'))
let min1 = Number(prompt('введите число'))
function roundNummer(max1, min1) {
    return Math.random(max1, min1)
}
console.log(roundNummer(Math.random(max1, min1)));