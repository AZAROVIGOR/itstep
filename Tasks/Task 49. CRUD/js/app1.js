/*
При нажатии кнопки "Добавить" в таблицу добавляется новая строка со структурой аналогичной 2 строке (сок).
При нажатии кнопки "Удалить" из таблицы удаляется соотвествующая строка.
При нажатии кнопки "Редактировать" в поля заносятся данные из ячеек таблицы, а затем после нажатия кнопки "Сохранить" перезиписываются данные из полей в ту строку, которая редактируется. 
*/

//При нажатии кнопки "Добавить" в таблицу добавляется новая строка со структурой аналогичной 2 строке (сок).
// ищем кнопку добавить => навешиваем ей события => ищем элементы которые будем добавлять => создаем столбец td food, tdweight => в строки помещаем наши значения 

const addButton = document.querySelector(".btn_add");
addButton.addEventListener("click", function () {
    let food = document.getElementById("food").value;
    let weight = document.getElementById("weight").value;

    let tdFood = document.createElement("td");
    let tdweight = document.createElement("td");
    tdFood.innerText = food;
    tdweight.innerText = weight;

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete_button";
    deleteButton.innerText = "Delete";
    td.insertAdjacentElement("beforeend", deleteButton)

    let editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.innerText = "Edit";
    td.insertAdjacentElement("beforeend", editButton);

    tr.insertAdjacentElement("beforeend", tdFood)
    tr.insertAdjacentElement("beforeend", tdweight)
    tr.insertAdjacentElement("beforeend", td);

    let tBody = document.querySelector("tbody");
    tBody.insertAdjacentElement("beforeend", tr);

    //При нажатии кнопки "Удалить" из таблицы удаляется соотвествующая строка.
    deleteButton.addEventListener("click", function () {
        this.closest("tr").remove()   // closest возвращает ближайший родительский элемент (или сам элемент) который соответствует заданному CSS-селектору ()  deleteButton   this.parentElement.parentElement.remove()
    })

    //При нажатии кнопки "Редактировать" в поля заносятся данные из ячеек таблицы
    // ищем наши значения столбцов относительно кнопки edit ? найденые значения сохраняем в переменные 
    // затем найденые значения помещаем в строку ввода input
    // что бы найти нужную нам строку из всех присвоим ей class 
    // после того как нашли строку с классом удаляем у строки класс
    // и при клике на строку без класса  присваиваем ей класс
    //что бы  найти нужную нам tr  повесим  при клике на  указанную строку класс edit
    editButton.addEventListener("click", function () {
        let food = this.closest("tr").firstElementChild.innerText
        let weight = this.closest("tr").firstElementChild.nextElementSibling.innerText

        document.getElementById("food").value = food;    // при клике на  кнопку редактировать в input появляютя именно те значения которые мы хотим изменить
        document.getElementById("weight").value = weight;

        let trEdit = document.querySelector(".edit");
        if (trEdit) {
            trEdit.closest("tr").classList.remove("edit");
        }
        this.closest("tr").classList.add("edit");
    })
})

//а затем после нажатия кнопки "Сохранить" перезиписываются данные из полей в ту строку, которая редактируется. 

let buttonSave = document.querySelector(".btn_save");
buttonSave.addEventListener("click", function () {

    let trEdit = document.querySelector(".edit");
    if (trEdit) {
        let food = document.getElementById("food").value;
        let weight = document.getElementById("weight").value;
        trEdit.firstElementChild.innerText = food;
        trEdit.children[1].innerText = weight;
        trEdit.classList.remove("edit");
        console.log(trEdit)
    }
})

