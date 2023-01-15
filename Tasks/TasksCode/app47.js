/*
Задача
Учитывая массив целых чисел, удалите наименьшее значение. Не изменяйте исходный массив/список. 
Если есть несколько элементов с одинаковым значением, удалите элемент с более низким индексом. 
Если вы получили пустой массив/список, верните пустой массив/список.

Не меняйте порядок оставшихся элементов.
Input: [5,3,2,1,4], output = [5,3,2,4]
*/


function removeSmallest(numbers) {
    const copy = numbers.slice(0)
    let min = numbers.indexOf(Math.min(...numbers))
    copy.splice(min, 1)
    return copy
}


let remove = removeSmallest([5, 3, 2, 1, 4]);
console.log(remove);

//const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));