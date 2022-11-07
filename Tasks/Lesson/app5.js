// Количество четные элемнты  массива;
const min = 0, max = 100, n = 10;

let a = [],  j;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;//Math.floor  округление  в  меньшую сторону
}
console.log(a);

let count = 0;

for(i = 0; i < a.length; i++){
    if(a[i] % 2 == 0){
        console.log(a[i]);
        count++;
    }
}

console.log("Количество четных элементов в массиве равно " + count);