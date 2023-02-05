/*
1. Элемент: #first-element. 
- поменяйте "Я сосед" на "Я хороший сосед"
- добавить к каждому соседу его номер, например, "Я хороший сосед №2"
- оберните текст в элементах с классом "neighbor" в тег span
- замените теги span на тег b
- замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"
*/

let firstElement = document.querySelector("#first-element");
let parants = firstElement.parentElement
console.log(parants)

if(firstElement){
    
    firstElement.innerHTML = "Я хороший сосед";
    firstElement.previousElementSibling.innerHTML = "Я хороший сосед";
    firstElement.previousElementSibling.previousElementSibling.innerHTML = "Я хороший сосед";
    
        
    firstElement.insertAdjacentText("beforeend", "№3")
    firstElement.previousElementSibling.insertAdjacentText("beforeend", "№2")
    firstElement.previousElementSibling.previousElementSibling.insertAdjacentText("beforeend", "№1")

    let span = document.createElement("span");

}