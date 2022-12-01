//12. Дана слово. Получить строку из данного слова, где нечетные буквы будут заглавными, а четные - строчными.

let word = "Christmas"

let newWord = word.toLowerCase().split("").map((item, index) => {
    if (index % 2 == 0){
       return item.toLocaleLowerCase()
    }
    else{
        return item.toLocaleUpperCase()
    }
   
}).join("")

console.log(newWord);