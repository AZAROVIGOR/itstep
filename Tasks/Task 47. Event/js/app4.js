//Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.

let btn = document.querySelector(".btn_click");

if(btn){
    btn.addEventListener("click", function(){

        let input1 = document.querySelector("#number1").value;
        let x = input1.value;
        let input2 = document.querySelector("#number2").value;
        let y = input2.value;
       
        // input2 = document.querySelector("#number1").value;
        // input1 = document.querySelector("#number2").value;
       
         console.log(x, y)     
    })
}