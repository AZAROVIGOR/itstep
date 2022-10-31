// Пользователь вводит 2 числа и опрерацию (+, -, *, /). Вывести результат или сообщение о ошибке.

var num1 = 6;
var num2 = 0;
var operator = '/' ;



if (operator == "-"){
    console.log(`= ${num1 - num2}`);
}

else if (operator == "+"){
    console.log(`= ${num1 + num2}`);
}

else if (operator == "*") {
    console.log(`= ${num1 * num2}`);
}

else if (operator == "/" && num2 !=0) {
    console.log(`= ${num1 / num2}`);
}

else if(num2 == 0){
    console.log("Error")
}
 



