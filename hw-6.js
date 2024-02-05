// Задание 1
const numbs = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] === 10) break;
    console.log(numbs[i]);
}

// Задание 2
const nummer = [1, 5, 4, 10, 0, 3]
console.log(nummer.indexOf(4))

// Задание 3
const space = [1, 3, 5, 10, 20]
result = console.log(space.join(" "))

// Задание 4
const t = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
const arr = []
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}
console.log(arr);

// Задание 5
const addNumbers = [1, 1, 1]
addNumbers.push(2, 2, 2)
console.log(addNumbers)

// Задание 6
let arrayOrigine = [9, 8, 7, 'a', 6, 5]
const newArray = arrayOrigine.splice(3, 1)
console.log(arrayOrigine);

// Задание 7
const array = [9, 8, 7, 6, 5]
const checkedArray = array.includes(Number(prompt('угадайте число от 1 до 10, которое содержится в загаданном массиве')));
console.log(alert(checkedArray))


// Задание 8
let alphabet = 'abcdef'
let newAlphabet = alphabet.split('')
console.log(newAlphabet);
let newAlphabet2 = newAlphabet.sort()
console.log(newAlphabet2);
let reverseAlphabet = newAlphabet2.reverse()
console.log(reverseAlphabet);
let wordNewAlphabet = reverseAlphabet.join('')
console.log(wordNewAlphabet);

// Задание 9
// Задание 10
// Задание 11
// Задание 12
// Задание 13

let x = 'привет=как=дела';
x = x.split('=');
const age = [11, 18, 20, 78, 32, 67, 98, 1, 27, 8, 9];
const result = age.filter(item => item >= 12);
console.log(result);

// Задание 11 (нужен reduce для суммы массива видео 5)

// Задание 11 (нужен map видео 5)
let mass = [178, 53, 42, 960, 4, 21, 45, 67, 98, 171]
function price 
    return (item)
