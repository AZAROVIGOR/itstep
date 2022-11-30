//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function compareNumbers(x, y){

    if (x == y){
        return true;
    }
    
        return false;
    
}

let a = compareNumbers(3, 4);

console.log(a);

let twoNum = (a, b) =>{
    if(a == b){
        return true
    }
    return false;
}

let b = twoNum(3, 3);

console.log(b);