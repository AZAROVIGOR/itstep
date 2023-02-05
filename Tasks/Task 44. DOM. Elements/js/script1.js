/*
1. Элемент: #first-element. 
 -    Добавьте ему класс www.
 -    Удалите у него класс www.
 -    Проверьте наличие у него класса www.
 -    Добавьте ему класс www, если его нет и удалите - если есть.
 -    Узнайте количество его классов.
 -    Выведите последовательно через console.log его классы.
 -    Сделайте его красного цвета, размером 30px, добавьте ему границу
 -    Выведите название его тега в нижнем регистре
 -    Вставьте ему в конец span с текстом 'мой любимый спан'
 -    Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.
 -  Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'
 */

let firstElement = document.getElementById("first-element");
if (firstElement) {

    firstElement.classList.add("www");

    firstElement.classList.remove("www");

    console.log(firstElement.classList.contains("www"));

    firstElement.classList.toggle("www");

    console.log(firstElement.classList.length);

    for (let element of firstElement.classList) {
        console.log(element);
    }

    //    альтернатива
    //    for (let i = 0; i < firstElement.classList.length; i++){
    //     console.log(firstElement.classList.item(i));
    //    }

    firstElement.style.color = "#f00";
    firstElement.style.fontSize = "30px"
    firstElement.style.border = "3px solid #0f0"
    firstElement.style.width = "400px"

    console.log(firstElement.tagName.toLocaleLowerCase());

    //Вставка строкой
    firstElement.insertAdjacentHTML("beforeend", "<span>мой любимый спан</span>");

    let arrElements = ["createElement", "appendChild", "insertBefore"];
    // Вставка объектом
    let ul = document.createElement("ul");
    firstElement.append(ul);

    arrElements.forEach(item =>{
        ul.innerHTML += `<li> ${item} </li>`;
    })
    // Вставка строкой
    // let out = "ul";
    // arrElements.forEach(item => {
    //     out += `<li>${item}</li>`
    // })
    // out += "</ul>"
    // firstElement.insertAdjacentHTML("beforeend", out)

    let div = document.createElement("div");
    div.classList.add("neighbor");
    div.innerText = ("еще один сосед")
    firstElement.insertAdjacentElement("beforebegin", div)


}

// if(element){
// element.classList.add("www")
// console.log(element.className);
// }

// let element2 = document.getElementById("first-element");
// element2.classList.remove("www");
// console.log(element2.className);

// console.log(element2.classList.contains("www"))

// let element4 = document.getElementById("first-element");
// element4.classList.toggle("www")
// console.log(element4.className)

// let countOfClass = element.classList.length
// console.log(countOfClass);

// for(let item of element.classList){
//     console.log(item);
// }

// element.style.color = "red";
// element.style.fontSize = "30px";
// element.style.border = "5px solid green"
// element.style.width = "400px "

// let tegLowerCase = element.tagName
// console.log(tegLowerCase.toLowerCase());

// let span = document.createElement("span");
// span.innerHTML = "мой любимый спан";
// element.append(span);
// console.log(span);

// let ul = document.createElement("ul")
// element.append(ul)

// let listOfElements = ["createElement", "appendChild", "insertBefore"];

// listOfElements.forEach((item) => {
//     ul.innerHTML += '<li>' + item + '</li>'
// })

// let div = document.createElement("div");
// element.before(div)
// div.className = "neighbor";
// div.innerHTML = "Еще один сосед";
// console.log(div);

