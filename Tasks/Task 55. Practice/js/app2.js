//2. Дана ссылка. Сделать так, чтобы при нажатии на ссылку не происходил переход по адресу.


let p = document.querySelector("p");
p.addEventListener("click",function(event){
    event.preventDefault();
})