/*
6. Дан квадрат. При наведении на квадрат сделать так, чтобы при движении мыши квадрат двигался вместе с курсором мыши. 
Курсор должен находится в центре квадрата. position fixid
*/

const item = document.querySelector(".item");

item.addEventListener("mousemove", function (event) {
    item.style.position = "fixed"
    item.style.left = event.clientX + -25 + "px";
    item.style.top = event.clientY + -25 + "px";
    
})

