/*
5. Дано 2 поля ввода для чисел и 4 радиокнопки (+,-,*,/). Выводить результат выбранной операции над 2 числами, когда выбирается сама операция. 
В случае неккоретного ввода чисел предусмотреть вывод сообщения об этом вместо результата.
*/


let equals = document.querySelectorAll("input[name='equals']");

for (let i = 0; i < equals.length; i++) {
    equals[i].onchange = function () {

        let number1 = +(document.getElementById("number1").value);
        let number2 = +(document.getElementById("number2").value);

        let radio = this.value;
        let result = "";
       
        if(radio == "+"){
            result = number1 + number2;
        }
        if(radio == "-"){
            result = number1 - number2;
        }
        if(radio == "*"){
            result = number1 * number2;
        }
        if(radio == "/"){
            result = number1 / number2;
        }
        document.querySelector(".result").innerHTML = result;
    }
   
}
