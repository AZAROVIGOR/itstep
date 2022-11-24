//5. Дан числовой массив. Найти разность максимального и мининального элемента массива.

let array = [5, 2, 1, 8, 25, 16, 3];

let maxElement = array.reduce((max, item) => {
    if(item > max){
        max = item
    }
    return max;
});

let minElement = array.reduce((min,item) => {
    if(item < min){
        min = item
    }
    return min;
}) 

console.log(`Разность максимального и минимального элемента массива: ${maxElement - minElement}`);