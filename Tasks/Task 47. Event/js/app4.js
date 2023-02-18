//Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.

let btn = document.querySelector(".btn_click");

if(btn){
    btn.addEventListener("click", function(){

        let input1 = document.getElementById('number1');
        let input2 = document.getElementById('number2');

        let temp = input1.value;
        input1.value = input2.value;
        input2.value = temp;
    })
}