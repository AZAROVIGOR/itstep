/*
5. Дано 2 поля ввода для чисел и 4 радиокнопки (+,-,*,/). Выводить результат выбранной операции над 2 числами, когда выбирается сама операция. 
В случае неккоретного ввода чисел предусмотреть вывод сообщения об этом вместо результата.
*/

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");
let equals = document.querySelectorAll(".radio");


console.log(equals)
input1.addEventListener("change",function(){
    console.log(this.value)
   
})

input2.addEventListener("change", function(){
    console.log(this.value)
})

equals.addEventListener("click", function(){
    equals.forEach(item => {
        console.log(5)
    })
})