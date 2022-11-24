//Сделайте функцию, которая параметром принимает число и возвращает массив его делителей

function arrayDivisors(x){

    let array = [];
    let j = 0;

    for(let i = 1; i <= x; i++){
        if(x % i == 0){
            array[j] = i;
            j++;
        }
    }
    return array;
}
let a = arrayDivisors(10);

console.log(a);

