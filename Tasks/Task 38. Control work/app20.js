//20. Дан числовой массив. Найдите наименьший четный элемент массива. Если такого нет, то выведите первый элемент.

let array = [5, 7, 21, 13, 31, 47, 23];

let minElement = array.reduce((min, item) => {
    if (item < min && item % 2 == 0)
        return item;
    return min;

})

console.log(minElement);




