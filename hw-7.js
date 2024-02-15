// Задание 1 >>>>>>>>>>>>
let wordJs = 'Преобразуйте строку js в верхний регистр JS'
console.log(newString = wordJs.toUpperCase());

let magic = 'science-fiction'
console.log(newString = magic.toUpperCase());

let smile = 'HAPPYNESS'
console.log(newString1 = smile.toLowerCase());




// Задание 2 >>>>>>>>>>>>
// const searchStart = ([]; String())

const searchStart = (words, prefix) => {
    return words.filter(word => word.toLowerCase().includes(prefix.toLowerCase()))
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

// const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';
// searchStart[0].forEach(thing) => {
//     if (thing.toLowerCase().includes(search.toLowerCase())) {
//         console.log(thing);
//     }
// }




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
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}
let x = 1;
let y = 10;
function anyNumber(minU, maxW) {
    return Math.random() * (maxW - minU) + minU;
}
console.log(anyNumber(x, y))


// Задание 6 >>>>>>>>>>>>
const getRandomArrNumbers = (randomNumbers) => {
    const arrayN = [];
    for (let i = 0; i < Math.floor(randomNumbers / 2); i++) {
        arrayN.push(Math.round(Math.random() * randomNumbers));
    }
    return arrayN;
}
getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего (!) меньшего
// числа, получаем 3
getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6



// Задание 7 >>>>>>>>>>>>
let max1 = Number(prompt('введите число'))
let min1 = Number(prompt('введите число меньше предыдущего'))
function roundNummer(minU, maxW) {
    return Math.round(Math.random() * (maxW - minU) + minU);
}
console.log(roundNummer(max1, min1));



//Задание 8  >>>>>>>>>>>>
let myCurrentDate = new Date();
console.log(myCurrentDate);

//Задание 9  >>>>>>>>>>>>
const CurrentDate = new Date();
console.log(+CurrentDate);
let days73 = 73 * 24 * 60 * 60 * 1000; // 73 дня * 24 часа * 60 минут * 60 секунд * 1000 миллисекунд
let searchDate = +CurrentDate + days73;
let days73Ahead = new Date(searchDate);
console.log(days73Ahead);


// Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
var d = new Date();
var n = d.toLocaleTimeString();
let myDate = new Date();
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " это" + " " + days[myDate.getDay()] + " текущее время " + d.toLocaleTimeString();

console.log(fullDate)