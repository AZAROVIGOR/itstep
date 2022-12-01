//+8. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.

let number = 56789;
let str = String(number);

let newNum = str.split("")
let reversNumber = newNum.reverse().join("");
console.log(number)
console.log(+reversNumber);