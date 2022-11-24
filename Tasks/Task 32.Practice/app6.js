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