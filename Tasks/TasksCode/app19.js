/*Напишите функцию, которая принимает целое число n и строку s в качестве параметров и возвращает строку s, повторяющуюся ровно n раз.*/


function repeatStr(n, s) {
    return s.repeat(n);
}
//repeatStr = (n, s) => s.repeat(n)

let result = repeatStr(3, '*');

console.log(result);