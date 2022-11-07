//Дан массив из n элементов. Создать 2 новых массива. В 1 первый записать все элементы с четными индексами, во 2 - с нечетными.

const min = 0, max = 100, n = 10;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let even = [];
let odd = [];

for (let i = 0; i < a.length; i++){
    if(i % 2 == 0){
        even[i] = a[i];
       
    }
    else{
        odd[i] = a[i];
       
     }
}
let filteredEven = even.filter(function(el){
    return el != null;
})
console.log(filteredEven);

let filteredOdd = odd.filter(function (el) {
    return el != null;
})

console.log(filteredOdd);
