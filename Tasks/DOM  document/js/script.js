/*getElementById
getElementsByName  редко используется , выбирает все элементы по имени
getElementsByClassName

querySelector    выбирает один элемент . первый 
querySelectorAll  выбирает коллекцию элементов 
*/




// window.onload = function(){    // window.onload отлавливает загрузку страницы  когда загрузится все дом дерево все скрипты и теги только тогда запустится код который указан внутри, эта функция имеет отложеное действие она загрузится только тогда когда загрузиться окно
//       const elem = document.getElementById("super - block") //ссылка на  объект 
//     console.log(elem)
//     console.log(elem.id)
//     setTimeout(function(){
//         elem.id += "foo"
//     }, 2000)
// }

// window.onload = function(){
//     const block = document.querySelector(".block") // из документа выполняет метод  querySelector (сделать запрос по селектору)  .block - означает выбрать элемент с классом блок 
//     console.log(block)
//     console.dir(block)
//     block.style.backgroundColor = "rgba(13, 203, 167, 0.7)"
//     console.log(block)
// }


// window.onload = function () {
//     const blocks = document.querySelectorAll(".block") // из документа выполняет метод  querySelectorAll (сделать запрос по селектору)  .block - означает выбрать элемент с классом блок 
    
//     // for(let i = 0; i < blocks.length; i++){
//     //     blocks[i].style.backgroundColor = "rgba(13, 203, 167, 0.7)";
//     // }
//     blocks.forEach(item => {
//         item.style.backgroundColor = "rgba(13, 203, 167, 0.7)"
//         console.log(item)
//     });
// }

// classList   Манипуляции с классами 

window.onload = function(){
    const block = document.querySelector(".block", "bar")
//    block.classList.add("target")                             // добавляем класс target можно добавить два класса  через запятую
//    block.classList.remove("f1", "f2")                             // удаляем класс f1 , можно удалить два класса  через запятую
//    block.classList.toggle("foo")   // toggle  - если класс был он его удалит , если класса не было он его добавит  сдесь удалит так как он был 
//    block.classList.toggle("foo")  // toggle  - если класс был он его удалит , если класса не было он его добавит сдесь добавит  т.к. его небыло 
    
//    setInterval(function(){
//     block.classList.toggle("target")    //ПРикольная штука
//    }, 500)
   
   
   console.dir(block)
}