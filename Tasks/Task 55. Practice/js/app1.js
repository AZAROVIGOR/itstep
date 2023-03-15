/*
1. Дано поле ввода и кнопка. Вводится число. При нажатии на кнопку сгенерировать маркированный список из чисел от 1 до введенного.
*/

const button = document.querySelector(".btn-4");

button.addEventListener("click", function(){
    let input = document.getElementById("number");
    let value = +input.value;
    
    let result = document.querySelector(".resalt");

    if(result.children.length == 0){
        let ul = document.createElement("ul");
        for(let i = 1; i <= value; i++){
            let li = document.createElement("li");
            li.innerText = `${i}`;
            ul.insertAdjacentElement("beforeend", li);
        }
        result.insertAdjacentElement("beforeend", ul);
    }
})
