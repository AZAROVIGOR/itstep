/*
Элемент: #fifth-element
 - Найдите его родителя и покрасьте его в синий цвет.
 - Найдите родителя его родителя и покрасьте его в желтый цвет.
 */

let fifthElement = document.getElementById("fifth-element");
let parent = document.querySelector("#fifth-element").parentElement;
console.log(parent)

let parentParants = document.querySelector("#fifth-element").parentNode;
console.log(parentParants)
