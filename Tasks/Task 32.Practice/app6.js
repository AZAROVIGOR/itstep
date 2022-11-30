/*Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
Если отрицательное - пусть функция вернет true, а если нет - false.*/

function numberCheck(x){

    if(x < 0){
        return true;
    }
    else{
        return false;
    }
}

let a = numberCheck(5);

console.log(a);

let num = (a) =>{
    if(a < 0){
        return true
    }
    return false
}

let b = num(-5);
console.log(b);