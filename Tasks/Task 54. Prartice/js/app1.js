/*1. Дан квадратный зеленый блок.
    - при наведении он должен менять цвет на синий, при уводе курсора возвращаться в исходное положение;
    - при клике на квадрат правой кнопкой мыши квадрат должен увеличиваться в 2 раза;   contextmenu
    - при клике на квадрат левой кнопкой мыши квадрат должен уменьшаться в 2 раза.     click
*/

// - при наведении он должен менять цвет на синий, при уводе курсора возвращаться в исходное положение;
let block = document.querySelector(".parent");

block.addEventListener("mouseover", function(event){
    this.classList.add("bg-blue");
})

block.addEventListener("mouseout", function(event){
    this.classList.remove("bg-blue");
})
// - при клике на квадрат правой кнопкой мыши квадрат должен увеличиваться в 2 раза;   contextmenu

block.addEventListener("contextmenu", function(event){
    event.preventDefault()
    let styles = getComputedStyle(this);
    let width = parseInt(styles.width);
    let height = parseInt(styles.height);

    this.style.width = `${width*2}px`
    this.style.height = `${height*2}px`
})

//- при клике на квадрат левой кнопкой мыши квадрат должен уменьшаться в 2 раза.     click

block.addEventListener("click", function(event){
    let styles = getComputedStyle(this);
    let width = parseInt(styles.width);
    let height = parseInt(styles.height);

    this.style.width = `${width/2}px`
    this.style.height = `${height/2}px`
})
