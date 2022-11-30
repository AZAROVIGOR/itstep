/*Сделайте функцию, которая параметром принимает целое число и проверяет: четное оно или нет. 
Если четное - пусть функция возвращает true, если нечетное - false.*/

function evenOrOddNumber(x){

    if(x % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

let a = evenOrOddNumber(7);

console.log(a);

let num = (a) =>{
    if(a % 2 == 0){
        return true
    }
    return false
}

let b = num(4);
console.log(b);


