/*
Ваша задача — создать функцию, которая выполняет четыре основные математические операции.

Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
Функция должна возвращать числовой результат после применения выбранной операции.
*/

const basicOp = (operation, value1, value2) => {
     if(operation == "+"){
        return value1 + value2;
     }
     else if (operation == "-") {
         return value1 - value2;
     } 
    else if (operation == "*") {
        return value1 * value2;
    } 
    else if (operation == "/") {
        return value1 / value2;
    } 

    //return operation == "+" ? value1 + value2 : operation == "-" ? value1 - value2 : operation == "*"  ? value1 * value2 : value1 / value2;

};

let result = basicOp('/', 4, 7);
console.log(result)









//('+', 4, 7)-- > 11