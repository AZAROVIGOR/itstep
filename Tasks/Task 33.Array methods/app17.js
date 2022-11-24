/*every, some:
17. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.*/

let array = [3, 4, 1, 2, 20];

let newArray = array.every(element => element > 0);

console.log(newArray);