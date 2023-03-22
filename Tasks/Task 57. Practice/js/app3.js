/*
3. Дана кнопка (Показать) и div с текстом, который по-умолчанию скрыт. При нажатии на кнопку с надписью "Показать" 
отображать данный div и менять название кнопки на "Скрыть". При нажатии на кнопку с надписью 
"Скрыть" скрывать div и менять название кнопки на "Показать".
*/

let button = document.querySelector(".btn-11");
let div = document.querySelector(".text");
div.style.display = "none";

button.addEventListener("click", function (event) {

    if (div.style.display === "none") {
        div.style.display = "block";
        button.innerHTML = "Скрыть";
    }
    else {
        div.style.display = "none";
        button.innerHTML = "Показать";
    }

})