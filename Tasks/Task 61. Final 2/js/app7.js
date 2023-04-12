/*
7. Дано 2 массива. Проверить, можно ли один массив путем перестановки элементов 
получить из второго массива. сотоят из одних и тех же элементов
*/

function checkArrays(arr1, arr2) {

    arr1.sort();
    arr2.sort();
  
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

let arr1 = [1, 2, 3, 4, 8];
let arr2 = [5, 4, 3, 2, 1];

console.log(checkArrays(arr1, arr2))








