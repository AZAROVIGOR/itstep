//Дано: кнопка и div с 3 различными классами. По нажатию на кнопку вывести в div нумерованный список с этими классами.

let btn = document.querySelector(".btn_click");


if (btn) {
    btn.addEventListener("click", function () {
        let ol = document.createElement("ol");
        let div = document.querySelector("div");
        div.append(ol);

        for (let i = 0; i < div.classList.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = div.classList[i];
            ol.insertAdjacentElement("beforeend", li);
        }
    })
}