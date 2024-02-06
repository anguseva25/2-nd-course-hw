// Задание 1
const numbs = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] === 10) break;
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
const newArray = arrayOrigine.filter(item => (typeof item !== 'string' ))
console.log(newArray.sort());

// Задание 7
const array = [9, 8, 7, 6, 5]
if (array.includes(Number(prompt('угадайте число от 1 до 10, которое содержится в загаданном массиве'))))
    console.log(alert('угадал'));
else console.log(alert('не угадал'));


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
let origineArray = [[1, 2, 3,], [4, 5, 6]] // Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6]
const newArr = [];
for (let el of origineArray) newArr.push(...el);
console.log(newArr);

// Задание 10
const numbersMyArray = [7, 8, 9, 3, 5, 2]
for (let index = 0; index < (numbersMyArray.length - 1); index++)
    console.log(numbersMyArray[index] + numbersMyArray[index+1]);

// Задание 11
let box = [8, 9, 2, 4, 3, 5, 1]
let boxQuadro = box.map(item => (item**2))
console.log(boxQuadro);

// Задание 12
const word =['слово', '', 'слог', 'длинное предложение', 'буква']; // [5, 0, 4, 19, 5]
function getLengthWord(word){
    return word.map(el => el.length)
}
console.log(getLengthWord(word));

// Задание 13
const negativeArray = [-1, 0, 5, -10, 56];
const negativeArray2 = [-25, 25, 0, -1000, -2];
function filterPositive(array) {
    return array.filter (item => (item <0));
  }
  console.log(filterPositive(negativeArray));
  console.log(filterPositive(negativeArray2))


  
  //filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  //filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]
