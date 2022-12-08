//5. Дан числовой массив.Поменять максимальный и минимальный элемент местами. (максимальный и минимальный элементы не повторяются)

let array = [5, 7, 211, 14, 31, 1, 90];

console.log(array);

let maxIndex = array.reduce((max, item, index,arr) =>{
    if(arr[index] > arr[max]){
        max = index
    }
    
    return max
    
},0)

let minIndex = array.reduce((min, item, index, arr) => {
    if(arr[index] < arr[min]){
        min = index
    }
    return min
},0)



let swap = array[maxIndex];
array[maxIndex] = array[minIndex];
array[minIndex] = swap;
console.log(array);

