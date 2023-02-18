/* Дано поле ввода, кнопка и div. Если в div нет списка, то добавить маркированный список с одним элементом с текстом введеным в поле. 
При последующем нажатии добавлять в конец списка элемент списка с текстом введеным в поле.  to doList
*/

let button = document.querySelector(".btn_click");

if(button){
    button.addEventListener("click", function(){
        let input = document.querySelector("#number");
        let val = input.value;
        
        let div = document.querySelector("div");
        if(div.children.length == 0){
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            li.innerText = val;
            ul.insertAdjacentElement("beforeend", li);
            div.insertAdjacentElement("afterbegin", ul);
        }

        else(
            
        )
    })

}