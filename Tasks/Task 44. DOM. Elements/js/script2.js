/*
2. Элемент: #second-element.
 -  Вставьте перед ним span с текстом '!!!'.
 -  Вставьте после него span с текстом '!!!'.
 -  Вставьте ему в начало span с текстом '!!!'.
 -  Вставьте ему в конец span с текстом '!!!'.
 */

let secondElement = document.getElementById("second-element");

let span_2 = document.createElement("span");
span_2.innerHTML = "!!!";
secondElement.prepend(span_2);
console.log(span_2)

let span_3 = document.createElement("span");
span_3.innerHTML = "!!!";
secondElement.append(span_3);
console.log(span_3)


let span_4 = document.createElement("span");
span_4.innerHTML = "!!!";
secondElement.before(span_4);
console.log(span_4)

let span_5 = document.createElement("span");
span_5.innerHTML = "!!!";
secondElement.after(span_5);
console.log(span_5)