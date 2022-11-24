/*map:
16. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.*/

let array = [3, 4, 1, 2, 7];

let sqr = [];

let sqrArray = array.map(element => sqr = element * element);

console.log(sqrArray);