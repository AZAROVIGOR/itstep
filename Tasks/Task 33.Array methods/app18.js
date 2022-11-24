/*every, some:
18. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.*/

let array = [3, 4, 1, -2, 7];

let newArray = array.some(element => element < 0);

console.log(newArray);