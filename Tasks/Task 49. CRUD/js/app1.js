/*
При нажатии кнопки "Добавить" в таблицу добавляется новая строка со структурой аналогичной 2 строке (сок).
При нажатии кнопки "Удалить" из таблицы удаляется соотвествующая строка.
При нажатии кнопки "Редактировать" в поля заносятся данные из ячеек таблицы, а затем после нажатия кнопки "Сохранить" перезиписываются данные из полей в ту строку, которая редактируется. 
*/

//При нажатии кнопки "Добавить" в таблицу добавляется новая строка со структурой аналогичной 2 строке (сок).

let addButton = document.createElement("button");
addButton.classList.add("add-button");
addButton.innerHTML = ("Добавить");

let deleteButton = document.querySelector(".delete-button");
deleteButton.insertAdjacentElement("beforebegin", addButton)


if(addButton){
    addButton.addEventListener("click", function(){
       let td = document.createElement("td");
       let tr = document.createElement("tr");
        let tbody = document.querySelector("tbody");
        
    })
    
}



//При нажатии кнопки "Удалить" из таблицы удаляется соотвествующая строка.

if(deleteButton){
    deleteButton.addEventListener("click", function(){
        console.log("delete")
    })
}

