/*
4. Элемент: #fourth-element
 - Найдите его соседа сверху и добавьте ему в конец текст '!'.
 - Найдите его соседа снизу и добавьте ему в конец текст '!'.
 - Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. 
 */

let fourthElement = document.getElementById("fourth-element");
let upSub =  fourthElement.previousSibling;
console.log(upSub)