/*
7. До таблица 5х5. При наведении на ячейку таблицы должны выделяться цветом строка и столбец 
(все ячейки в этих строке и столбце), в которой находится ячейка.
*/

document.querySelector("table").onmouseover = function(event){
    let td = event.target;

    if(td.tagName != "TD"){
        return false;
    }

    let tds = td.parentElement.children;  // при наведении мыши выбирает всю строку таблицы (все дети tr )

    Array.from(tds).forEach(item => {
        item.classList.add("hover");
    })

    let numColumns = td.cellIndex; // номер столбца   0, 1, 2, 3, 4 - ый столбец

    tds = document.querySelectorAll(`tr td:nth-child(${numColumns + 1})`);
    Array.from(tds).forEach(item =>{
        item.classList.add("hover");     // на  наведенный столбец  вешаем hover 
    })
   
}

document.querySelector("table").onmouseout = function(event){
    let td = event.target;

    if(td.tagName != "TD"){
        return false
    }
    let tds = document.querySelectorAll("td.hover");
    Array.from(tds).forEach(item =>{
        item.classList.remove("hover");
    })
    
}