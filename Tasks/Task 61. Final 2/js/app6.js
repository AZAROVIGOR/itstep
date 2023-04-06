//6. Дано предложение. Найти самое короткое слово в предложении.

function findShortestWord(str) {
    let arr = str.split(" ");
    
    let shortWorld = arr.reduce((count, item) => {
        if (item.length < count.length) {
            return item;
        }
        return count;
    }, arr[0])
    
    return shortWorld;
}

console.log(findShortestWord("Найти самое короткое слово в предложении"))
