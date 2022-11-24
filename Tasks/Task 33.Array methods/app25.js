//Дан массив с числами. Найти сумму квадратов положительных элементов массива.

let array = [3, 4, 1, -2, 7];

let results = array.filter(element => element > 0)
.map(( element) => element ** 2)
.reduce((sum, element) => sum + element, 0);

console.log(results);