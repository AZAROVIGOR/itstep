//11. Дано предложение. Найти длину самого короткого слова.

let sentence = "JavaScript это мультипарадигменный язык программирования."

let shortestWord = sentence.split(" ").reduce((short, item) => {
    if(item.length < short.length){
        return item
    }
    else{
        return short
    }
})

console.log(shortestWord);