/*15. Дано слова. Получить 2 новые строки, где 1 строка состоит из гласных букв слова в верхнем регистре, 
а вторая строка - из согласных в нижним регистре.*/

let word = "Christmas";
let vowels = "aeiouy";


let str1 = word.toLocaleLowerCase().split('').filter(item => {
    return vowels.indexOf(item)  !== -1
}).join("");

let str2 = word.toLowerCase().split("").filter(item => {
    return vowels.indexOf(item) == -1
}).join("");




console.log(str1.toLocaleUpperCase());
console.log(str2.toLocaleLowerCase());