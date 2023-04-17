/*
11. Реализовать калькулятор продуктов. Он будет представлять собой таблицу, в которую пользователь будет вносить свои покупки. 
Покупки вносятся с помощью формы (код_товара, название, цена_одной_единицы, количество). Кроме того, для каждого продукта предусмотреть 
кнопку удаления и редактирования. Редактирование также должно происходить по двойному клику по строке в таблице. 
Под таблицей должна выводится суммарная стоимость продуктов, которая должна пересчитываться при добавлении, удалении и редактировании продуктов.
*/

const addButton = document.querySelector(".add_button");

addButton.addEventListener("click", function () {
    let code = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("price").value);
    let quantity =Number(document.getElementById("quantity").value);

    console.log(typeof price, price)
    console.log(typeof quantity, quantity)

    let tdCode = document.createElement("td");
    let tdName = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdQuantity = document.createElement("td");

    tdCode.innerText = code;
    tdName.innerText = name;
    tdPrice.innerText = price;
    tdQuantity.innerText = quantity;
    

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    let deleteButton = document.createElement("button");
    deleteButton.className = ("delete_button");
    deleteButton.innerText = ("Удалить");
    deleteButton.classList.add("btn-3");
    td.insertAdjacentElement("beforeend", deleteButton);

    let editButton = document.createElement("button");
    editButton.className = ("edit_button");
    editButton.innerText = ("Редактировать");
    editButton.classList.add("btn-3")
    td.insertAdjacentElement("beforeend", editButton);

    tr.insertAdjacentElement("beforeend", tdCode);
    tr.insertAdjacentElement("beforeend", tdName);
    tr.insertAdjacentElement("beforeend", tdPrice);
    tr.insertAdjacentElement("beforeend", tdQuantity);
    tr.insertAdjacentElement("beforeend", td);

    let tBody = document.querySelector("tbody");
    tBody.insertAdjacentElement("beforeend", tr);

    deleteButton.addEventListener("click", function () {
        this.closest("tr").remove();
    })

    editButton.addEventListener("click", function () {
        let code = this.closest("tr").firstElementChild.innerText;
        let name = this.closest("tr").firstElementChild.nextElementSibling.innerText;
        let price = this.closest("tr").lastElementChild.previousElementSibling.previousElementSibling.innerText;
        let quantity = this.closest("tr").lastElementChild.previousElementSibling.innerText;

        document.getElementById("code").value = code;
        document.getElementById("name").value = name;
        document.getElementById("price").value = price;
        document.getElementById("quantity").value = quantity;

        let trEdit = document.querySelector(".edit");
        if (trEdit) {
            trEdit.closest("tr").classList.remove("edit");
        }
        this.closest("tr").classList.add("edit");

    })

})

const buttonSave = document.querySelector(".save_button");

buttonSave.addEventListener("click", function () {
    let trEdit = document.querySelector(".edit");
    if (trEdit) {
        let code = document.getElementById("code").value;
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let quantity = document.getElementById("quantity").value;

        trEdit.firstChild.innerText = code;
        trEdit.children[1].innerText = name;
        trEdit.children[2].innerText = price;
        trEdit.children[3].innerText = quantity;

       trEdit.classList.remove(".edit")
    }

})