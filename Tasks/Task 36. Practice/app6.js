//6. Удалить из предложения все знаки препинания(. , : ; ! ? -).

const str = "Функция, вызываемая! для; каждого? элемента - массива: arr."

let deletPunctuationMarks = ".,:;!?-";

let newStr = str.split("").filter((item) => {
    return deletPunctuationMarks.indexOf(item) == -1 //выбираем только те символы, которые не входят в deletedLetters
}).join('');

console.log(newStr);