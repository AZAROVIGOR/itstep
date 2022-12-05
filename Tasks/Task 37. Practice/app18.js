//18. Дан массив чисел и число N. Вывести из данного массива N самых больших по значению чисел.


let arrauNumber = [1, 12, 23, 34, 45, 56, 67, 78, 89, 100];

let n = 5;

let bigNum = arrauNumber.sort((a, b) => b - a).slice(0, n );


console.log(bigNum);