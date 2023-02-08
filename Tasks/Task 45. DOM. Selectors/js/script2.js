/*
2. Элемент: #second-element.
-    добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.
-    каждый четный пункт покрасить в красный цвет
-    каждому нечетному пункту добавить класс odd-element
- элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.
*/

let secondElement = document.querySelector("#second-element");
console.log(secondElement)

if (secondElement) {
    let ul = document.createElement("ul");
    secondElement.append(ul);

    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.innerHTML = `Пункт №${i}`;       // элементу li присваимаем   с Пункт (с  номером) №...
        ul.insertAdjacentElement("beforeend", li);  // вставляем  ЭЛЕМЕНТ li  <li>Пункт №...</li>
    }

    let evenElements = ul.querySelectorAll("li:nth-child(2n)");
    if (evenElements.length) {
        Array.from(evenElements).forEach(item => {
            item.style.color = "#f00"
        })
    }

    let oddElements = ul.querySelectorAll("li:nth-child(2n+1)");
    if (oddElements.length) {
        Array.from(oddElements).forEach(item => {
            item.classList.add("odd-element");
        })
    }

    let elements = ul.querySelectorAll("li:nth-child(3n)");
    if(elements.length){
        Array.from(elements).forEach(item =>{
            if (item.classList = "odd-element"){
                let styles = getComputedStyle(item);  // в styles лежат scc свойства
                let fontSize = parseInt(styles.fontSize, 10);
                item.style.fontSize = `${fontSize * 2}px`
            }     
        })
    }

}



