//16. Дано предложение. Найти самое длинное слово в предложении.

let sentence = "JavaScript это мультипарадигменный язык программирования.";

let longestWord = sentence.split(" ").reduce((max, item) => {
    if (item.length > max.length) {
        return item
    }
    else {
        return max
    }
})

console.log(`${longestWord} - самое длинное слово в предложении`);





    


