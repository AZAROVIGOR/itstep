/*
Элемент: #fifth-element
-    Добавить 2 div до элемента с текстом "1" и "2", и 2 div после элемента с текстом "3" и "4"
-    В первый div с текстом "1" добавить нумерованный список с 7 элементами с днями недели. Субботу и воскресение покрасить в красный цвет
-    В div с текстом "2" вставить 2 span с произвольным текстом. В конец каждого span добавить в скобочках длину (в символах) содержимого span.
-    div с текстом "3" обернуть содержимое в тег a со ссылкой на Google, добавить границу и подчеркивание текста.
-    div с текстом "4" заменить на тег article с тем же содержимым, добавить классы "news" и "good-news".
*/

let fifthElement = document.getElementById("fifth-element");

if (fifthElement) {
    fifthElement.insertAdjacentHTML("beforebegin", "<div>1</div>");
    fifthElement.insertAdjacentHTML("beforebegin", "<div>2</div>");
    fifthElement.insertAdjacentHTML("afterend", "<div>4</div>")
    fifthElement.insertAdjacentHTML("afterend", "<div>3</div>")

    let div1 = fifthElement.parentElement.firstElementChild;

    let ol = document.createElement("ol");

    div1.insertAdjacentElement("beforeend", ol)

    let DaysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    for (let i = 0; i < DaysOfTheWeek.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = DaysOfTheWeek[i];
        ol.insertAdjacentElement("beforeend", li)
    }
    div1.firstElementChild.firstElementChild.style.color = "#f00"
    div1.firstElementChild.lastElementChild.style.color = "#f00"

}

let div2 = fifthElement.previousElementSibling;

if (div2) {
    div2.insertAdjacentHTML("beforeend", "<span>Мой любимый спан</span>");
    div2.insertAdjacentHTML("beforeend", "<span>Мой самый любимый спан</span>");

    let firstSpan = div2.firstElementChild;
    let secondSpan = div2.lastElementChild;

    let firstSpanLength = firstSpan.innerHTML.length
    let secondSpanLength = secondSpan.innerHTML.length
    firstSpan.insertAdjacentHTML("beforeend", `(${firstSpanLength})`)
    secondSpan.insertAdjacentHTML("beforeend", `(${secondSpanLength})`)
}

// div с текстом "3" обернуть содержимое в тег a со ссылкой на Google, добавить границу и подчеркивание текста.
let div3 = fifthElement.nextElementSibling;
div3.innerHTML = `<a href="//google.com">${div3.innerHTML}</a>`;
div3.style.border = "2px solid #f00";
div3.style.width = "10px";
div3.style.textDecoration = "underline";

// let a = document.createElement("a");
// a.href = "https://google.com/";
// a.innerHTML = div3.innerHTML;
// div3.innerHTML = "";
// div3.insertAdjacentElement("afterbegin", a);



////div с текстом "4" заменить на тег article с тем же содержимым, добавить классы "news" и "good-news".
let div4 = fifthElement.parentElement.lastElementChild;


div4.outerHTML = `<article>${div4.innerHTML}</article>`;
let article = document.querySelector("article");

article.classList.add("news", "good-news");









