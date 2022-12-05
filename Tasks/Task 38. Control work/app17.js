//17. Дана строка. Вывести символы, которые в ней повторяются.

let sentence = "Строка, представляет, собой! совокупность. символов!"

let characters = ".,:;!?-";

let repeatingCharacters = sentence.split("").filter((item, index) =>{
   return characters.indexOf(item) !== -1 && characters.indexOf(item) == index;
})

console.log(repeatingCharacters);