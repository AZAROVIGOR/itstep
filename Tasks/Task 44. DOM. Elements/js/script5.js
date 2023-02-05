/*
Элемент: #fifth-element
 - Найдите его родителя и покрасьте его в синий цвет.
 - Найдите родителя его родителя и покрасьте его в желтый цвет.
 */

let fifthElement = document.getElementById("fifth-element");

if(fifthElement){
    fifthElement.parentElement.style.color = "#00f";
    fifthElement.parentElement.parentElement.style.color = "#ff0"
}







