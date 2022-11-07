//Дан массив из n элементов.Увеличить все нечетные элементы на 1 и уменьшить все четные в 2 раза.



const min = 0, max = 100, n = 10;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let even = a[0];
let odd;

for (let i = 0; i < a.length; i++){
    if(a[i] % 2 ==0){
       even = a[i] / 2;
        console.log(even);
    }
    else{
        odd = a[i] + 1;
        console.log(odd);
    }
}