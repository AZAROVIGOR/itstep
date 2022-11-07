// Средне арифметическое  значение элементов

const min = 0, max = 100, n = 10;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;//Math.floor  округление  в  меньшую сторону
}
console.log(a);

let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i]
}
console.log("Среднее арифмитическое элементов равно " + (sum / (a.length)));





