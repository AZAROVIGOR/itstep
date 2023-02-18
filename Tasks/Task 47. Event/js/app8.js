//Дано: 3 кнопки. При нажатии на любую кнопку, должны меняться цвета 2 оставшихся на случайный цвет.

let btn1 = document.querySelector(".btn_click1");
let btn2 = document.querySelector(".btn_click2");
let btn3 = document.querySelector(".btn_click3");

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

if (btn1) {
    btn1.addEventListener("click", function () {
        btn2.style.backgroundColor = randomColor();
        btn3.style.backgroundColor = randomColor();
    })
}

if (btn2) {
    btn2.addEventListener("click", function () {
        btn1.style.backgroundColor = randomColor();
        btn3.style.backgroundColor = randomColor();
    })
}

if (btn3) {
    btn3.addEventListener("click", function () {
        btn1.style.backgroundColor = randomColor();
        btn2.style.backgroundColor = randomColor();
    })
}


