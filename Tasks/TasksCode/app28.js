/*
Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.*/

function removeExclamationMarks(s) {
    let remove = s.replaceAll("!", "");
    return remove;
    //return s.split('!').join('');
}

let rem = removeExclamationMarks("Hello World!");
console.log(rem)