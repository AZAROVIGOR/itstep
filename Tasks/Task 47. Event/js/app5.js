//Дано: поле ввода и кнопка. При нажатии на кнопку, вывести, является ли введеное значение числом.

let btn = document.querySelector(".btn_click");
if(btn){
    btn.addEventListener("click", function(){
        let input = document.querySelector("#number1");
        let num = input.value
        let p = document.querySelector("p");
        if (Number.isFinite(+num)){
            p.innerText = `Значение ${num} является числом`
        }
        else
            p.innerText = `Значение ${num} не является числом`
        
    })
}