/*  let data = new FormData(this);
    data.forEach(function(item, index){
        console.log(index,item)   data.get("name")
    });  */

let form = document.getElementById("reg_form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let errors = document.querySelectorAll(".error-text");

    if (errors.length) {
        Array.from(errors).forEach((errorSpan) => {
            errorSpan.parentElement.classList.remove("error");
            errorSpan.remove();
        })
    }

    let hasError = false;

    let data = new FormData(this);
    
    let fields = ["name", "email", "phone", "about", "education", "sex"];

    fields.forEach(item => {
        if (data.get(item) == "") {
            let span = document.createElement("span");
            span.className = "error-text";
            span.innerText = "Заполните поле";
            let field = this.querySelector(`[name="${item}"]`);
            field.insertAdjacentElement("afterend", span);
            field.parentElement.classList.add("error");
            hasError = true;
        }
    });

    let hobbies = data.getAll("hobby[]");
   
    if (hobbies.length = 0) {
        let span = document.createElement("span");
        span.className = "error-text";
        document.querySelector("#hobby-3").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    if (!hasError) {
        let div = document.querySelector(".result");

        div.innerHTML += `Имя: ${data.get("name")}<br>`;
        div.innerHTML += `Email: ${data.get("email")}<br>`;
        div.innerHTML += `Телефон: ${data.get("phone")}<br>`;
        div.innerHTML += `Образование: ${data.get("education")}<br>`;
        div.innerHTML += `Пол: ${data.get("sex")}<br>`;
        div.innerHTML += `Хобби: ${data.getAll("hobby[]").join(",")}<br>`;
        div.innerHTML += `О себе: ${data.get("about")}<br>`;

        let path = data.get("avatar").name;
        let pathArray = path.split("\\");
        let file = pathArray[pathArray.length - 1];
        div.innerHTML += `Аватар: ${file}<br>`;

        this.reset(); // очищение формы this==form
    }
})