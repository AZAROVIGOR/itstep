//14. Дано предложение. Вывести частоту стречаемости каждого символа в строке.

let str = "Язык и межкультурная коммуникацияИ";

let unique = str.toLowerCase().split("").filter((item, index) => str.toLowerCase().indexOf(item) == index);
let uniqueCount = [];

unique.forEach(function (item, index, array) {
    let count = str.toLowerCase().split("").filter((letter) => letter == item).length;
    uniqueCount[index] = count;
});

unique.forEach((item, index) => console.log(item, "->", uniqueCount[index]));

// или
str = "Аргентина манит негра";

unique = str.toLowerCase().split("").filter((item, index) => str.toLowerCase().indexOf(item) == index);

unique.forEach(function (item, index, array) {
    let count = str.toLowerCase().split("").filter((letter) => letter == item).length;
    console.log(item, "->", count);
});


