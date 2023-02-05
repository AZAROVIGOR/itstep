/*
4. Элемент: #fourth-element
 - Найдите его соседа сверху и добавьте ему в конец текст '!'.
 - Найдите его соседа снизу и добавьте ему в конец текст '!'.
 - Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. 
 */

let fourthElement = document.getElementById("fourth-element");

if(fourthElement){
    fourthElement.previousElementSibling.insertAdjacentHTML("beforeend", "!");
    fourthElement.nextElementSibling.insertAdjacentHTML("beforeend","!");
    fourthElement.nextElementSibling.nextElementSibling.insertAdjacentHTML("beforeend", "!");
}





