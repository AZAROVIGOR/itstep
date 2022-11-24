/*10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].*/

let array = [1, 2, 3, 4, 5];

let newArray = array.splice(1, 3);

console.log(newArray);
console.log(array);