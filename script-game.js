// Игра 1
function guessSeason() {
    const monthNumber = Number(prompt('Введите число от 1 до 12, и я назову время года'))
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        alert('Это зима');
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert('Это весна');
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert('Это лето');
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert('Это осень');
    }
}

// Игра 2
function rememberWords() {
    let wordsArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    alert('Яблоко, Груша, Дыня, Виноград, Персик, Апельсин, Мандарин')
    wordsArr = wordsArr.sort(() => Math.random() - 0.5);
    const answerUser1 = String(prompt('Чему равнялся первый элемент массива?'));
    const answer1 = alert(words[0]);
    const answerUser2 = String(prompt('Чему равнялся последний элемент массива?'));
    const answer2 = alert(words[6]);
        if (answerUser1.toLowerCase() === answer1.toLowerCase() && answerUser2.toLowerCase() === answer2.toLowerCase()) {
            alert('Поздравляем! У вас отличная память!');
         } else {
                if (answerUser1.toLowerCase() !== answer1.toLowerCase() || answerUser2.toLowerCase() !== answer2.toLowerCase()) {
                alert('Вы были близки к победе!');
                    } else {
                    alert(`Вы ответили неверно, попробуйте еще раз пройти игру`);
                    }
                }
}

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
function riddle(question, answer) {
    let answerUser = prompt(question);

    if (answerUser === answer) {
        alert('угадал!');
    } else {
        alert('не угадал');
    }
}

//                       Вариант 3
function riddle2() {
    riddle('Что посмотреть с закрытыми глазами?', 'сон');
    riddle('Куда я, туда и она', 'тень');
}

