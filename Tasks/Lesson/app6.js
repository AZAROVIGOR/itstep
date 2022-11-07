

const min = 0, max = 100, n = 10;

let a = [], count = 0, j;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;//Math.floor  округление  в  меньшую сторону
}
console.log(a);


let str = "";
for (let i = 0; i < a.length - 1; i++) {
    str = str + a[i] + ", ";
}
str = str + a[a.length - 1];
console.log(str);