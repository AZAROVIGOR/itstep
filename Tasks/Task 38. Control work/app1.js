//1. Дано число N. Получить массив квадратов чисел от 1 до N.

let array = [];
let N = 5;

for(let i = 1; i <= N; i ++){
    array.push(i);
}

let sqrArray = array.map(item => item * item);



console.log(sqrArray);