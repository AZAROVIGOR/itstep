/*
1. Дан выпадающий список с 5 цветами и блок.
    - сделать так, что каждый пункт был закрашен в соответствующий цвет
    - при выборе цвета сделать так, чтобы блок также закрашивался в выбранный цвет   // событие change
*/

let colors = document.getElementById("color");
let options = document.querySelectorAll("option");

Array.from(options).forEach(item =>{
    item.style.background = item.value;
})

colors.addEventListener("change", function(event){
     let block = document.querySelector(".block");
    block.style.backgroundColor = `${this.value}`;
})


