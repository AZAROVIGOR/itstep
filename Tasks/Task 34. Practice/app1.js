/*1. Дан числовой массив. Удалить все отрицательные элементы в нем, а все положительные элементы умножить на -1.*/


let array = [5, 2, -1, 8, -25, 16, -3];

let newArray = array.filter(item => item >= 0)
    .map(item => item * -1);

    console.log(newArray);