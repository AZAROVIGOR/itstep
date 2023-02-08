/*
3. Элемент: #third-element.
-    заменить теги b на strong
-    удалить в тегах strong все теги, т.е. должен остаться только текст
-    обернуть каждое слово в тег span 
*/

let thirdElement = document.getElementById("third-element");

if(thirdElement){
    let bTeg = thirdElement.querySelectorAll("b");
    Array.from(bTeg).forEach(item => {
        item.outerHTML = `<strong>${item.innerText}</strong>`
    })
    
    let strong = thirdElement.querySelectorAll("strong");
    if(strong.length){
        Array.from(strong).forEach(item =>{
            item.innerHTML = item.innerText
        })
    }

    Array.from(strong).forEach(item => {
        let words = item.innerText.split(" ");
        let newStrong = words.map(item =>{
            return `<span>${item}</span>`
        }).join("");
        item.innerHTML = newStrong
    })

}















// //let col = document.querySelectorAll(".col");
// let col = document.firstElementChild;
// console.log(thirdElement.firstElementChild)

// if(col){
//    Array.from(col).forEach(item => {
//        item.innerHTML = `<strong>${item.innerText}</strong>`
//    })
//    let elementStong = document.querySelectorAll("strong");
    
// }

