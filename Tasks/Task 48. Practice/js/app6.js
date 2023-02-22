




const addButton = document.querySelector(".add_click");
let div = document.querySelector("div");
let ul = document.createElement("ul");

if (addButton) {
    addButton.addEventListener("click", function () {
        let input = document.querySelector("#number").value;
        let li = document.createElement("li");

        if (div.children.length == 0) {
            div.insertAdjacentElement("beforeend", ul)
            ul.insertAdjacentElement("beforeend", li);
            li.innerHTML = input;
            input.value = "";
        }

        else {
            ul.insertAdjacentElement("beforeend", li);
            li.innerHTML = input;
            input.value = "";
        }


        if (ul.children.length !== 0) {
            let buttonRemove = document.createElement("button");
            buttonRemove.innerText = "remove";
            li.insertAdjacentElement("beforeend", buttonRemove);

            buttonRemove.addEventListener("click", function () {
                this.parentElement.remove();     //   this  - это формально buttonRemove , тот элемент на  который сейчас кликают 
            })
        }

        if (ul.children.length !== 0) {
            let buttonEdit = document.createElement("button");
            buttonEdit.innerText = "Edit";
            li.insertAdjacentElement("beforeend", buttonEdit);


            // При выборе элемента из списка li при клике на него элемент будет показан в  input

            buttonEdit.addEventListener("click", function () {
                let text = this.parentElement.firstChild.nodeValue; // сохраняем в переменную text текс элемента li =>  РОДИТЕЛЬСКИЙ элемент buttonEdit (им будет являтся li). первый ребенок элемента li. со значением 
                document.querySelector("input").value = text;   // 
                let editLi = document.querySelector(".edit");   // находим елемент с  классом li
                if (editLi) {                                   // если элемент с классом li найден 
                    editLi.classList.remove("edit");             // то удаляем  у элемента li класс edit
                }

                this.parentElement.classList.add("edit");   //при клике на кнопку edit  добовляем нашему элементу  li класс edit
            })

        }
    })
}

// Редактируем значение и сохраняем его

let buttonSave = document.querySelector(".save_click"); 

buttonSave.addEventListener("click", function () {
    let task = document.querySelector("input").value;  // в task сохраняем значение введенное в input
    let editLi = document.querySelector(".edit");  // находим элемент с классом edit
    if (editLi) {                                   // если элемент нашли
        editLi.firstChild.nodeValue = task;        // элементу li присваиаем новое значение
        editLi.classList.remove("edit");
        document.querySelector("input").value = ""; // после клика на  save строка input становиться пустой
    }

})

