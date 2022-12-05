//4. Дан числовой массив. Найти максимальный элемент массива.

let array = [5, 2, 1, 8, 25, 16, 3];

let maxElement = array.reduce((max, item) => {
    if(item > max)
        return item
        return max;
    
    
});

console.log(maxElement);