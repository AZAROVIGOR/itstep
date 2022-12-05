//Дан массив из n элементов. Поменять максимальный и минимальный элементы местами.

const min = 0, max = 100, n = 5;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);




let maxIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] > a[maxIndex]) {
        maxIndex = i;
    }
}

console.log(maxIndex)

let minIndex = 0;
for (let i = 1; i < a.length; i++) {
    if (a[i] < a[minIndex]) {
        minIndex = i;
    }
}
console.log(minIndex)

let temp;

temp = a[maxIndex];
a[maxIndex] = a[minIndex];
a[minIndex] = temp;

console.log(a);
