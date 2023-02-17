//Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.

let btn = document.querySelector(".btn_click");

if(btn){
    btn.addEventListener("click", function(){

        let num1 = document.getElementById('number1').value;
        let num2 = document.getElementById('number2').value;

        document.getElementById('number1').value = num2;
        document.getElementById('number2').value = num1;
    })
}