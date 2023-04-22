//8. Дано предложение. Найти символ, который чаще всего в нем встречается.

let str = "самый часто встечаемый элемент";

let unique = Array.from(new Set(str.toLowerCase().split("")));

let uniqueCount = [];

unique.forEach((item, index) => {
    let count = str.toLowerCase().split("").filter(letter => letter == item).length;
    uniqueCount[index] = count;
});

let maxIndex = (uniqueCount.indexOf(Math.max(...uniqueCount)));
console.log(`Символ который чаще всего встречается: "${unique[maxIndex]}"`);




