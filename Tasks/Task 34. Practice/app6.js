//6. Дан числовой массив и некоторое число x. Удалить все элементы больше заданного числа x. 

let array = [5, 2, 1, 8, 25, 16, 3];

let x = 16;

let newArray = array.filter(item => item <= x);

console.log(newArray);

