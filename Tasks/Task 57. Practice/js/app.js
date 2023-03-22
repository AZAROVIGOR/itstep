/*
1. Дан выпадающий список с 5 цветами и блок.
    - сделать так, что каждый пункт был закрашен в соответствующий цвет
    - при выборе цвета сделать так, чтобы блок также закрашивался в выбранный цвет   // событие change
*/

const colors = document.getElementById("color");


colors.addEventListener("change", function(event){
    let options = document.querySelectorAll("option");
    
    let block = document.querySelector(".block");
    block.style.backgroundColor = `${this.value}`;
})