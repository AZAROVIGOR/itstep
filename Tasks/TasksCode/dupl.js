let arr = [1, 3, 3, 3, 4, 4, 3, 7, 7, 8, 4];

console.log([...new Set(arr)]);
console.log(Array.from(new Set(arr)));

let a = arr.filter((item, index)  =>  arr.indexOf(item) === index); //
console.log(a);

let b = arr.filter((item, index) => arr.indexOf(item) !== index); // получаем массив дубликатов
console.log(b);

let c = arr.reduce((result, item) => result.includes(item) ? result : [...result, item], []);//result.includes(item) проверяет существует ли элемент в новом массиве (result []) , если нет , то добавляет , если да , то возвращаем тот же самый масив что и был и проверяем дальше
console.log(c)


// Если дан отсартированный массив
let arr1 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3 ]

for(let i = 0; i < arr1.length; i++){
    if (arr1[i] === arr1[i - 1]) {             // если текущий элемент равен предыдущему 
        arr1.splice(i, 1)                     // то удаляем текущий элемент    
        i--
    }   
      
}
console.log(arr1)  