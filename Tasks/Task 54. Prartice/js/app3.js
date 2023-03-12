/*
3. Дана шахматная таблица 4х4 и 3 кнопки
    - при нажатии на первую кнопку на доску случайным образом должна помещаться шашка в одну из клеток. Если шашка уже стоит, то она должна удалятся и ставится новая;
    - при нажатии на вторую кнопку черные клетки должны меняться на белые, а белые - на черные;
    - при нажатии на третью кнопку доска должна поворачиваться на 90 градусов (использовать CSS-анимацию)
    */
let out = "<table class='chess'>";

for (let i = 1; i <= 4; i++) {
    out += "<tr>";
    for (let j = 1; j <= 4; j++) {
        if ((i + j) % 2 == 0) {
            out += "<td class='white'></td>";
        }
        else {
            out += "<td class='black'></td>";
        }
    }
    out += "</tr>";
}

out += "</table>";
document.write(out);

const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");


button1.addEventListener("click", function (event) {
    let td = document.querySelectorAll("td");
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.width = `50px`;
    circle.style.height = `50px`;

    td.forEach(item => {
        item.insertAdjacentElement("beforeend", circle);
        console.log(item)
    })

})

//- при нажатии на вторую кнопку черные клетки должны меняться на белые, а белые - на черные;

button2.addEventListener("click", function (event) {
    const tdWhite = document.querySelectorAll(".white");
    const tdblack = document.querySelectorAll(".black");
    tdWhite.forEach(item => {
        item.classList.remove("white")
        item.classList.add("black")
        console.log(item)
    })
    tdblack.forEach(item => {
        item.classList.remove("black")
        item.classList.add("white")
        console.log(item)
    })
})


// //- при нажатии на третью кнопку доска должна поворачиваться на 90 градусов (использовать CSS-анимацию)

button3.addEventListener("click", function (event) {
    const table = document.querySelector(".chess");
    let degree = 90;
    let time = 2;
    table.style.transform = `rotate(${degree}deg)`;
    table.style.transitionDuration = `${time}s`;

})

