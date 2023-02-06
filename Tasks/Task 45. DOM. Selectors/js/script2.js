/*
2. Элемент: #second-element.
-    добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.
- каждый четный пункт покрасить в красный цвет
- каждому нечетному пункту добавить класс odd-element
- элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.
*/

let secondElement = document.querySelector("#second-element");
console.log(secondElement)

if(secondElement){
    let ul = document.createElement("ul");
    secondElement.append(ul);
    
    let listElements = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4", "Пункт 5", "Пункт 6", "Пункт 7", "Пункт 8", "Пункт 9", "Пункт 10"];
   
   Array.from(listElements).forEach(item =>{
        ul.innerHTML += `<li>${item}</li>`;
    })
   
    let li = ul.children;
  console.log(li)

   Array.from(li).forEach((item, index) => {
        if(index % 2 !== 0){
           
        }
   })

    // li[1].style.color = "red"
    // li[3].style.color = "red"
    // li[5].style.color = "red"
    // li[7].style.color = "red"
    // li[9].style.color = "red"
   
    
    Array.from(li).forEach((item, index) => {
        if (index % 2 == 0) {
            item.classList.add("odd-element")
        }
    })

    Array.from(li).forEach((item, index) => {
        if (index % 3 !== 0 && item.classList == "odd-element" ) {
            
        }
    })

}