/*
2. Дан маркированный список из 5 пунктов с произвольным текстом
    - при клике на какой-либо элемент списка, этот элемент должен менять цвет на красный, причем всегда должен быть только 1 выделенный элемент;
    - при двойном клике элемент должен дублироваться и копия помещаться в конец списка;
    - при наведении на элемент текст должен становится полужирным (использовать тег b для этого), при убирании курсора - возвращаться в исходное состояние;
*/
// делигирование
let ul = document.querySelector("ul");
// - при клике на какой - либо элемент списка, этот элемент должен менять цвет на красный, причем всегда должен быть только 1 выделенный элемент;
ul.addEventListener("click", function(event){
   let li = event.target;
   
    if (li.classList.contains('bg-red')){
        li.classList.remove('bg-red');
        
    }
    else{
        li.classList.add('bg-red');
    }
   
});


// - при двойном клике элемент должен дублироваться и копия помещаться в конец списка;

ul.addEventListener("dblclick", function(event){
    let li = document.createElement("li");
    li.innerHTML = event.target.innerHTML;
    ul.insertAdjacentElement("beforeend", li);
})

// - при наведении на элемент текст должен становится полужирным (использовать тег b для этого), при убирании курсора - возвращаться в исходное состояние;

// ul.addEventListener("mouseover", function(event){
//     if (event.target.tagName = ("LI")){
//     event.target.innerHTML = `<b>${event.target.innerText}</b>`
//     }
// })

// ul.addEventListener("mouseout", function(event){
//     if(event.target.tagName = ("LI")){
//     event.target.innerHTML = event.target.innerText
//     }
// })


