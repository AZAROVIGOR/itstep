//СОБЫТИЯ  - js может отлавливать поведение пользователя

// window.onload = function(){
//     const block = document.querySelector(".block")

//     block.addEventListener("click", onClick )  // имя функции передается как ссылка

//     function onClick () {      // Добавляем событие слушателя addEventListener принимает до 3 аргументов , первый - само событие , второй функция
//         console.log("click")
//     }

//     block.addEventListener("click", onClick2 )
//     function onClick2  () {
//         console.log("click2")
//     }

//    // для удаления блоков  применяем  removeEventListener  первый парамтр - какое событие удаляем , второй - название  функции , функции должны быть с именем

//     block.removeEventListener("click", onClick)


//     console.dir(block)  // все события которые можем навесить на  этот block можем увидеть в консоли, все фразы которые начинаются с on это все события onclick onclose

// }


//********
// let ul = document.querySelectorAll("ul > li") // получаем список всех элементов
// console.log(ul);
// for(let value of ul){
//     console.log(value);   // выводим список всех элементов
// }

// let ulFirstElem = document.querySelectorAll("ul > li:first-child") // получаем первый элемент списка li
// console.log(ulFirstElem);
// for (let value of ulFirstElem) {
//     console.log(value);   // выводим первый элемент списка
// }

// let ulLastElem = document.querySelectorAll("ul > li:last-child") // получаем последний элемент списка li
// console.log(ulLastElem);
// for (let value of ulLastElem) {
//     console.log(value);   // выводим последний элемент списка
// }


// let ol = document.querySelectorAll("ol > li");
// console.log(ol);

// let olFirstElem = document.querySelector("ol > li") //querySelector выбирает только первый элемент списка ol
// console.log(olFirstElem);

//  *  matches  - позволяет определить подхот ли данный элемент под указанный css селектор или  нет, если подходит возвращает true если нет false 

// Выбираем все элементы с классом number
// let ul = document.querySelectorAll("ul.superNumber > li") // получаем список всех элементов 
// for(let item of ul){
//     if(item.matches('li.number'))
//     console.log(item);   // выводим список всех элементов
// }

/* * elem.closest(css!!!!!!!) ищет ближайшего предка который соответствует css!!!!!!!! селектору ( который указан в скобках) сам элемент так же включается 
в поиск Этот метод возвращает либо предка либо значение null если такой элемент не был найден
*/
let li = document.querySelector("li.number");
console.log(li.closest(".superNumber"));  //superNumber
console.log(li.closest(".container__ul")); //container__ul
console.log(li.closest(".block"));  //null

/* В старых версиях языка JS  ES5 и ниже существуют такие методы поиска как :
-elem.getElementsByTagName(tag) ищет элементы с данным тегом и возвращает их коллекцию. Передав "*" вместо тега, можно получить всех потомков. 
-elem.getElementsByClassName(className) возвращает элементы, которые имеют данный CSS-класс. 
-document.getElementsByName(name) возвращает элементы с заданным атрибутом name. Очень редко используется
    Все перечисленные методы возвращают «живые» коллекции. Другими словами, они отражают текущее состояние DOM и автоматически обновляется при его
    изменении. Если сохранить ссылку на NodeList и добавить/удалить узлы в DOM, то они появятся в сохранённой коллекции автоматически.
*/

//  *contains   elemA.contains.elemB - возвращает значение true если элемент B является дочерним по отношению к элементу A

const containerOl = document.querySelector("div.container_ol");
const ol = document.querySelector("ol.string")
if(containerOl.contains(ol)){
    console.log("ol внутри containerOl")
}