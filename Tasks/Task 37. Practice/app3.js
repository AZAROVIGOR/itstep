//3. Слить 3 массива и вывести на экран элементы полученного массива в порядке убывания значений.

let array1 = [1, 2, -2, -3, 4];

let array2 = [1, 2, 6, 8, 4];

let array3 = [1, 2, 7, 2, 4];

let newArray = array1.concat(array2).concat(array3).sort((a, b) => b - a)

console.log(newArray);