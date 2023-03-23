/*
5. Реализовать экранную клавиатуру для русского алфавита: 33 клавиши с названием букв. 
При нажатии на опредленную клавишу выводить соотвествующий символ в какой-либо div.
*/

let clearButton = document.querySelector(".clear");
let keyboard = document.querySelector(".keyboard")

keyboard.addEventListener("click", function (event) {
    if (event.target.tagName == "BUTTON") {
        let screen = document.querySelector(".screen_text");
        screen.innerText += event.target.innerText;
    }
})

clearButton.addEventListener("click", function (event) {

    let screen = document.querySelector(".screen_text");
    screen.innerText = "";
})
