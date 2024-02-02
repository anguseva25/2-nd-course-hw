// Игра 1
const monthNumber = prompt('Введите число от 1 до 12, и я назову время года')
function guessSeason(){
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        return 'Это зима"';
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return 'Это весна"';
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        return 'Это лето"';
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        return 'Это осень"';
    }
}

// Игра 2
confirm(`Запомните слова: "письмо", "шуфлятка", "одеколон", "цветы", "радиатор", "корги", "сапоги"`);
let r = prompt('Введите пятое слово')
function rememberWords(r) {
    return (r === 'радиатор' || r === 'Радиатор') ? 'хорошая память! Ты молодец!' : "Похоже что слово не запомнилось"
}
console.log(alert('Правильный ответ "радиатор". Спасибо за игру'));


// Игра 3
let riddleQuestion = prompt('Что посмотреть с закрытыми глазами?')
let answerUser;
function riddle(riddleQuestion, answerUser) {
    if (answer === 'сон' || answer === 'сны' ) {
        console.log('Молодец! Угадал!'); 
     } else {
        console.log('Не угадал');
}
}
function riddle(question, answer) {
    let answerUser = prompt(question);

    if (answerUser === answer){
        console.log('угадал!');
    } else {
        console.log('не угадал');
    }
}

riddle ('Что посмотреть с закрытыми глазами?', 'сон');
riddle ('Куда я, туда и она', 'тень');

