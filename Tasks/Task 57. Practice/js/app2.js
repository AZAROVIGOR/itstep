/*
2. Дана форма с одним полем ввода.
    - при унастновки курсора в поле ввода закрашивать ее в синий цвет.
    - при убирании курсора из поля возвращать фон в начальное состояние. focus blur
 */   

let input = document.getElementById("number");

input.addEventListener("focus", function(event){
  this.style.backgroundColor = "#00f";
});

input.addEventListener("blur", function(){
    this.style.backgroundColor = "#fff"
})