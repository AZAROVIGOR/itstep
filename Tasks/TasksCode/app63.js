//Сделать реверс массива  не используя reverse


let arr = [10, 15, 20, 25, 35];
const reversed = []
for (let i = arr.length - 1; i >= 0; i--) {   // начиная с  последнего индекса   arr.length -1  до первого числа с нулевым индексом i >= 0 уменьшаем индекс на 1 i--
    
    
   reversed.push(arr[i]);
}

console.log(reversed)

const rev = arr.map((item, index,arr) => arr[arr.length - index -1]); // итерации (длинна массива  - 0 - 1(5-0-1) => элемент с индексом 4)(длинна массива - 1 - 1(5-1-1) => элемент с индексом 3) и т д 
console.log(rev)