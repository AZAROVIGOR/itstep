//Дан массив из n элементов. Удалить все повторяющие элементы (удалить и сдвинуть следующие за ним).

const min = 0, max = 100, n = 10;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);
