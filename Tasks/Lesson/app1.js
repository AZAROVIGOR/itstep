
// Максимальный элемент массива

const min = 0, max = 100, n = 10;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;//Math.floor  округление  в  меньшую сторону
}
console.log(a);

let maxElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > maxElement) {
        maxElement = a[i];
    }
}
console.log("Максимальный элемент равен " + maxElement);
