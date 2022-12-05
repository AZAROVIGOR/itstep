//3. Дан числовой массив. Удалить все нулевые элементы из массива.

let array = [5, 0, 21, 10, 31, -5, 0, -21, 0, -31];

let newArray = array.filter(Boolean);

let newArray1 = array.filter(item => {
    return (item !== 0)
})

console.log(newArray);
console.log(newArray1);
