//12. Преобразуйте первую букву строки в верхний регистр.

let str = "я учу javascript!";

let newStr = str[0].toUpperCase() + str.slice(1);

console.log(newStr);