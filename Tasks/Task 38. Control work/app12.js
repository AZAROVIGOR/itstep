// 12. Даны 2 слова.Удалить из обоих слов буквы, которые встречаются в обоих словах.

let words ="Народные новообразования";

let deletLetters = words.toLocaleLowerCase().split('').filter((item, index) => {
   return words.indexOf(item) == index
}
).join('');



console.log(deletLetters);