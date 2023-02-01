/*
1. Элемент: #first-element. 
 -  Добавьте ему класс www.
 -  Удалите у него класс www.
 -  Проверьте наличие у него класса www.
 -  Добавьте ему класс www, если его нет и удалите - если есть.
 -  Узнайте количество его классов.
 -  Выведите последовательно через console.log его классы.
 -  Сделайте его красного цвета, размером 30px, добавьте ему границу
 -  Выведите название его тега в нижнем регистре
 - Вставьте ему в конец span с текстом 'мой любимый спан'
 - Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.
 - Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'
 */

let  element = document.getElementById("first-element");

if(element){
element.classList.add("www")
console.log(element.className);
}

let element2 = document.getElementById("first-element");
element2.classList.remove("www");
console.log(element2.className);

console.log(element2.classList.contains("www"))

let element4 = document.getElementById("first-element");
element4.classList.toggle("www") 
console.log(element4.className)

let countOfClass = element.classList.length
console.log(countOfClass);

for(let item of element.classList){
    console.log(item);
}

element.style.color = "red";
element.style.fontSize = "30px";

let tegLowerCase = element.tagName
console.log(tegLowerCase.toLowerCase());

let span = document.createElement("span");
span.innerHTML = "мой любимый спан";
console.log(span)



