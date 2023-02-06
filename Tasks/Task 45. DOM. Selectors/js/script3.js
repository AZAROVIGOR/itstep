/*
3. Элемент: #third-element.
-    заменить теги b на strong
- удалить в тегах strong все теги, т.е. должен остаться только текст
- обернуть каждое слово в тег span 
*/

let thirdElement = document.getElementById("third-element");
//let col = document.querySelectorAll(".col");
let col = document.firstElementChild;
console.log(thirdElement.firstElementChild)

if(col){
   Array.from(col).forEach(item => {
       item.innerHTML = `<strong>${item.innerText}</strong>`
   })
   let elementStong = document.querySelectorAll("strong");
    
}

