//6. Удалить из предложения все знаки препинания(. , : ; ! ? -).

const str = "Функция, вызываемая! для; каждого? элемента - массива: arr."

let deletPunctuationMarks = ".,:;!?-";

let newStr = str.split("").filter((item) => {    //filter создает новый массив filter если условие  true  то проходит фильтрацию , если false то не проходит фильтрацию
    return deletPunctuationMarks.indexOf(item) == -1 //выбираем только те символы, которые не входят в deletedLetters. если значение не найдено возвращает -1
}).join('');                                         //если найдено , то будет возвращен первый индекс по которому элемент найден в массиве

console.log(newStr);




