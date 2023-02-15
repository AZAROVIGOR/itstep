//Дано: кнопка и абзац с произвольным текстом. Сделать так, чтобы  при нажатии на кнопку текст выделялся полужирным шрифтом.

let btn = document.querySelector(".btn_click");

if (btn) {
    btn.addEventListener("click", function () {
        let p = document.querySelector("p");
        p.outerHTML = `<b>${p.innerHTML}</b>`;
    })

}