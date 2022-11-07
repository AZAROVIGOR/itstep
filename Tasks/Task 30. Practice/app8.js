//Дан массив из n элементов и число k<n. Удалить элемент с номером k и сдвинуть на  одну позицию влево все элементы, следующие за ним.

const min = 0, max = 100, n = 10;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let k = 0;

// for(let i = 0; i < a.length; i++){

// }

a.splice(k, 1);

console.log(a);