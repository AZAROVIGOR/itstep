//Дана: кнопка и поле. При нажатии на кнопку, удалить все цифры из поля ввода.

let btn = document.querySelector(".btn_click");
if (btn) {
    btn.addEventListener("click", function () {
        let input = document.querySelector("#number1").value;

        let pattern = "0123456789";
        input = input.split("").filter(item => {
            return !pattern.includes(item);
        })
        document.querySelector("input").value = input;
    })
}