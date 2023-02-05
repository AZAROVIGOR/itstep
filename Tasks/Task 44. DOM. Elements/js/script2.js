/*
2. Элемент: #second-element.
 -  Вставьте перед ним span с текстом '!!!'.
 -  Вставьте после него span с текстом '!!!'.
 -  Вставьте ему в начало span с текстом '!!!'.
 -  Вставьте ему в конец span с текстом '!!!'.
 */
// let secondElement = document.getElementById("second-element");
let secondElement = document.querySelector("#second-element");
secondElement.insertAdjacentHTML("beforebegin", "<span>!!!</span>");
secondElement.insertAdjacentHTML("afterend", "<span>!!!</span>");
secondElement.insertAdjacentHTML("beforeend", "<span>!!!</span>");
secondElement.insertAdjacentHTML("afterbegin", "<span>!!!</span>");










// let secondElement = document.getElementById("second-element");

