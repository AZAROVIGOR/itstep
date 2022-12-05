//18. Дан числовой массив. Заменить каждый элемент массива с нечетным индексом на ноль.

let array = [5, 7, 21, 14, 31, 46, 22];

let newArray = array.map((item, index) => {
    if (index % 2 !== 0){
        item = 0;
    }
    return item
})

console.log(newArray);