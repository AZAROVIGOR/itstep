/*
7. Данно 2 массива с целыми числами. Написать функцию, которая возвращает массив элементов, которые входят в оба массива без повторений. 
*/

let arr1 = [1, 2 , 5, 6, 8, 2, 2, 5];
let arr2 = [5, 6 , 8, 4, 2];

let uniqueArr = (arr1 , arr2) => {
    let array = Array.from(new Set(arr1.concat(arr2)));
    return array
}

let arr = uniqueArr(arr1, arr2)
console.log(arr);