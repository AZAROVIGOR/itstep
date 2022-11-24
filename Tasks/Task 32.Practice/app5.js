//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

function sumNumbers(x, y){

    if((x + y) > 10){
        return true
    }
    else{
        return false
    }
}

let a = sumNumbers(4, 6);

console.log(a);