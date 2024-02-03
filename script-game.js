// Игра 1
function guessSeason(){
    const monthNumber = Number(prompt('Введите число от 1 до 12, и я назову время года'))
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert('Это зима');
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert ('Это весна');
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert('Это лето');
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert('Это осень');
    }
}

// Игра 2
function rememberWords(r) {
    confirm(`Запомните слова: "письмо", "шуфлятка", "одеколон", "цветы", "радиатор", "корги", "сапоги"`);
    let r = String(prompt('Введите пятое слово'))
    return (r === 'радиатор' || r === 'Радиатор') ? 'хорошая память! Ты молодец!' : "Похоже что слово не запомнилось"
}
alert('Правильный ответ "радиатор". Спасибо за игру');


// Игра 3

//                       Вариант 1
// function riddle(riddleQuestion, answerUser) {
//     let riddleQuestion = prompt('Что посмотреть с закрытыми глазами?')
//     let answerUser
//     if (answer === 'сон' || answer === 'сны' ) {
//         console.log(alert('Молодец! Угадал!')); 
//      } else {
//         console.log(alert('Не угадал'));
// }
// }
//                        Вариант 2
// function riddle(question, answer) {
//     let answerUser = prompt(question);

//     if (answerUser === answer){
//         console.log('угадал!');
//     } else {
//         console.log('не угадал');
//     }
// }

//                       Вариант 3

riddle ('Что посмотреть с закрытыми глазами?', 'сон');
riddle ('Куда я, туда и она', 'тень');
