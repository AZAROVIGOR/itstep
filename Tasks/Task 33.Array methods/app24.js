/*24. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел.*/

let array = [5, 2, -1, 8, -25, 16, -3];

let positiveNumbers = array.filter(item => item > 0);
let sqrNum = positiveNumbers.map(item => Math.sqrt (item) );


console.log(positiveNumbers);
console.log(sqrNum);