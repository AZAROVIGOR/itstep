/*
3. Дан список из 10 чисел в виде маркированного списка.  При наведении на четный элемент списка он подсвечивает красным цветом, 
а на нечетный элемент списка - синим. 
*/

let ul = document.querySelector("ul");
ul.addEventListener("click", function(event){
    let li = document.querySelectorAll("li");
   li.forEach(item => {
    if(event.target % 2 == 0){
        item.style.background = "red"
    }
    else{
        item.style.background = "blue"
    }
   })
    
})