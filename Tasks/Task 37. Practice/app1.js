//1. Дан пустой массив, его размер n и некоторое значение value. Заполнить массив этим значением. (используя fill)

let array = [];

let n = 5;
array.length = n;
let value = "Hi!";

let fillArray = array.fill(value, 0 , n);
console.log(fillArray);



