//16. Дана строка. Подсчитать количество цифр встречающихся в строке.

let str = "Первые из простых чисел - 2, 3, 5, 7, 11";

let number = "0123456789";

let countNumber = str.split('').filter(item => number.includes(item)).length;

console.log(`${countNumber} цифр в строке`);
