/*
Элемент: #third-element.
 -  Найдите первого потомка этого элемента и сделайте его текст красного цвета.
 -  Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
 -  Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
 */

let thirdElement = document.getElementById("third-element");

if (thirdElement) {
    thirdElement.firstElementChild.style.color = "#f00";
    thirdElement.lastElementChild.style.color = "#f00";
    Array.from(thirdElement.children).forEach(item => {
        item.insertAdjacentHTML("beforeend", "!");    //  берем каждого потомка item  и добавляем insertAdjacentHTML к нему  в конец "beforeend"
    })

}

















// let elementsFirstChild = thirdElement.firstElementChild.style.color = "red";
// console.log(elementsFirstChild)

// let elementsLastChild = thirdElement.lastElementChild.style.color = "red";
// console.log(elementsLastChild)

// let ollChild = thirdElement.children;
// for(let elem of ollChild){
//     console.log(elem.innerHTML)
// }

// let addChild = document.querySelectorAll(".col");
// addChild.innerText += "!";
// console.log(addChild)