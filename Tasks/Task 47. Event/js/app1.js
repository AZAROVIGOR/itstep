//Дано: кнопка и абзац со значением 0. Сделать так, чтобы при нажатии на кнопку число увеличивалось на 1.

let btn = document.querySelector(".btn_click");
let count = 0;
if (btn) {
    btn.addEventListener("click", function () {

        let p = document.querySelector("p");
        count++;
        p.innerHTML = count;
    })


}