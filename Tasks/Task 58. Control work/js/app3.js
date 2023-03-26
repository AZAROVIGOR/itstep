/*
3. Напишите функцию, которая на вход получает произвольное количество аргументов и возвращает массив, 
состоящих только из уникальных значений параметров функции.
*/

function unique() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return [...new Set(arr)];
}
let x = unique(5, 5, 1, 2, 2, 6);
console.log(x)