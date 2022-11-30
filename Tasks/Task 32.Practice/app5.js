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

let sumNum = (a, b) => {
    if(a + b > 10){
        return true
    }
    return false
}

let b = sumNum(5, 6);
console.log(b);