/*
7. Данно 2 массива с целыми числами. Написать функцию, которая возвращает массив элементов, которые входят в оба массива без повторений. 
*/

function sortArray(arr1, arr2) {
    
    let result = [];

    newArr1.forEach(item => {
        if (newArr2.includes(item)) {
            result.push(item)
        }
    })
    return result
}
let arr1 = [1, 2, 3, 4, 5, 3, 5, 9];
let arr2 = [6, 2, 3, 4, 5, 7, 4, 2, 8, 9];
console.log(sortArray(arr1, arr2));