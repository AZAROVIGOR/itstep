/* Дано поле ввода, кнопка и div. Если в div нет списка, то добавить маркированный список с одним элементом с текстом введеным в поле. 
При последующем нажатии добавлять в конец списка элемент списка с текстом введеным в поле.  to doList
*/

const button = document.querySelector(".btn_click");
let div = document.querySelector("div");
let ul = document.createElement("ul");

if (button) {
    button.addEventListener("click", function () {
        let input = document.querySelector("#number").value;
        let li = document.createElement("li");
       
        if (div.children.length == 0) {
            div.insertAdjacentElement("beforeend", ul)
            ul.insertAdjacentElement("beforeend", li);
            li.innerHTML = input;
        }

        else{
            ul.insertAdjacentElement("beforeend", li);
            li.innerHTML = input;
            li.addEventListener("click", function(){      // вешаем событие  клик  на  элемент li
                let parent = this.parentElement;      // находим родителя (this  указывает на  li.addEventListener ) 
                this.remove();                          // удаляем 

                if(parent.children.length == 0){    // 
                    parent.remove();
                }
            })
        }
    })
    
}


/*4. Во второй задаче добавить возможность при клике на элемент списка удалять его из списка. Если удаляется последний элемент списка, 
то список также удаляется.
*/

 
