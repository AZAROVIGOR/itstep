/*
Элемент: #third-element.
 -  Найдите первого потомка этого элемента и сделайте его текст красного цвета.
 -  Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
 - Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
 */

let thirdElement = document.getElementById("third-element");

thirdElement.style.color = "red";

let elementsFirstChild = thirdElement.firstElementChild.innerHTML;
console.log(elementsFirstChild)

let elementsLastChild = thirdElement.lastElementChild.innerHTML;
console.log(elementsLastChild)

let ollChild = thirdElement.children;
for(let elem of ollChild){
    console.log(elem.innerHTML)
}

// let addChild = document.querySelectorAll(".col");
// addChild.innerText += "!";
// console.log(addChild)