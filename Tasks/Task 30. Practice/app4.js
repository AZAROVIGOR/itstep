//Дан массив из n элементов. Поменять максимальный и минимальный элементы местами.

const min = 0, max = 100, n = 5;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);



let maxElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > maxElement) {
        maxElement = a[i];
    }
}
console.log("Максимальный элемент равен " + maxElement);

let minElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] < minElement) {
        minElement = a[i];
    }
}
console.log("Минимальный элемент равен " + minElement);

let change = maxElement;
maxElement = minElement;
minElement = change;

console.log(a[i]);
//console.log(minElement);
