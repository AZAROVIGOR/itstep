/*
3. Дан список из 10 чисел в виде маркированного списка.  При наведении на четный элемент списка он подсвечивает красным цветом, 
а на нечетный элемент списка - синим. 
*/

let ul = document.querySelector("ul");
ul.addEventListener("mouseover", function (event) {
    
    let li = event.target;
    if (li.tagName != "LI") {
        return false
    }

    if ((+li.innerText % 2) == 0) {
        li.classList.add("red");
    }
    else {
        li.classList.add("blue");
    }
    })


ul.addEventListener("mouseout", function (event) {
    let li = event.target;
    if (li.tagName != "LI") {
        return false
    }

    if ((+li.innerText % 2) == 0) {
        li.classList.remove("red");
    }
    else {
        li.classList.remove("blue");
    }

})

