/*
4. Дано поле ввода, кнопка и текст. В поле ввода разрешить вводить не более одного символа. Если в поле ввода введен один символ, 
то при нажатии на кнопку неоходимо подсчитать - сколько раз этот символ втречается в тексте.
*/

document.querySelector("input").onkeyup = function (event) {
    let symbol = this.value;
    let text = document.querySelector(".text").textContent;
    let showButton = document.querySelector(".btn-11");

    showButton.addEventListener("click", function (event) {
        let count = text.toLowerCase().split(symbol).length - 1;
        let result = document.querySelector(".result");
        result.innerHTML = `Символ ${symbol} встечается в тексте ${count} раз`;
        result.style.fontSize = "25px";
    })
}




