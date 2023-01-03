//15. Дано слово. Проверить, является ли данное слово палиндромом.

let word = "радар";

let reversWord = word.toLowerCase().split("").reverse().join("");
   if(word === reversWord){
       console.log(`Слово ${word} является полиндромом`);
   }
   else{
       console.log(`Слово ${word} не является полиндромом`)
   }
