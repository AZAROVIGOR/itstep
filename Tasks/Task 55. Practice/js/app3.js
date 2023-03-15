/*
3. Дано 10 блоков. Сделать так, что при наведении в блоке менялась прозрачность фона и выводился порядковый номер блока, а при уведении 
курсора все возвращалось в исходное состояние.
*/


const block = document.querySelector(".container");
const parent = document.querySelectorAll(".parent");

Array.from(parent).forEach(item => {
    item.style.color = "red"
})


block.addEventListener("mouseover", function (event) {
    if (event.target.tagName == "DIV")
        event.target.style.opacity = 0.5;
    event.target.style.color = "black"
    event.target.style.fontSize = "50px"

})

block.addEventListener("mouseout", function (event) {
    if (event.target.tagName == "DIV")
        event.target.style.opacity = 1;
    event.target.style.color = "red";
    event.target.style.fontSize = "50px"
})