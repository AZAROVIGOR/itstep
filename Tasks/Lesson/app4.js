// Реверс


const min = 0, max = 100, n = 10;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;//Math.floor  округление  в  меньшую сторону
}
console.log(a);

let reverse = [];
for (let k = 0, i = a.length - 1; k < a.length; k++, i--) {
    reverse[k] = a[i]; //reverse[k] = a[n-1-k];
}
console.log(a, reverse);