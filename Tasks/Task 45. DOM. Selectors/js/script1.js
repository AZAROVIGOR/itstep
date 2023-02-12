/*
1. Элемент: #first-element. 
-    поменяйте "Я сосед" на "Я хороший сосед"
-    добавить к каждому соседу его номер, например, "Я хороший сосед №2"
-    оберните текст в элементах с классом "neighbor" в тег span
-    замените теги span на тег b
-    замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"
*/

let firstElement = document.querySelector("#first-element");
let neighbors = firstElement.parentElement.querySelectorAll(".neighbor")

if (neighbors.length) {
    Array.from(neighbors).forEach(item => {
        item.innerHTML = "Я хороший сосед";
    })


    Array.from(neighbors).forEach((item, index) => {
        item.innerHTML = `Я хороший сосед №${index + 1}`
    })

    Array.from(neighbors).forEach(item => {
        item.innerHTML = `<span>${item.innerHTML}</span>`
    })

    Array.from(neighbors).forEach(item => {
        item.innerHTML = `<b>${item.innerText}</b>`
    })

    let lastNeighbor = document.querySelector(".fourth-neighbor");
    lastNeighbor.firstElementChild.innerHTML = "Я последний хороший сосед"
}

