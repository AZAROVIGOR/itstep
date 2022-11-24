//Дан массив из n элементов и некоторое число x. Проверить наличие числа x в массиве.



const min = 0, max = 10, n = 8;

let a = [];

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let x = 5;

let isfind = false;


for (let i = 0; i < a.length; i++){
    
    if(a[i] == x){
        isfind = true;
        break;
    }
   
}


if(isfind){
    console.log(`Число ${x} присутствует в  массиве`);
}
else{
    console.log(`Число ${x} в массиве нету`);
}



