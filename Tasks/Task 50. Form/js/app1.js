let form = document.getElementById("reg_form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let div = document.querySelector(".result")
    
    let name = document.getElementById("name").value;
    div.innerHTML += `Имя: ${name}<br>`
    
    let email = document.getElementById("email").value;
    div.innerHTML += `Email: ${email}<br>`

    let tel = document.getElementById("Tel").value;
    div.innerHTML += `Телефон: ${tel}<br>`;

    let education = document.getElementById("education").value;
    div.innerHTML += `Образование: ${education}<br>`;

    let sex = document.getElementsByName("sex");
    
    for(let element of sex){
        if (element.checked){
            div.innerHTML += `Пол: ${element.value}<br>`
        }

    }

    let hobby = document.getElementsByName("hobby[]");
    Array.from(hobby).forEach(item => {
        if (item.checked){
            div.innerHTML += `Хобби: ${item.value}<br>` 
        }
    })
   
    let about = document.getElementById("about").value;
    div.innerHTML += `О себе: ${about}`;
 
    if(name == ""){
        let span = document.querySelector(".formName");
        if(span){
            span.remove();
        }
        let formControl = document.querySelectorAll(".form-control")[0];
        let spanName = document.createElement("span");
        spanName.className = "formName"
        spanName.innerText = "Имя не введено"
        formControl.insertAdjacentElement("beforeend", spanName);
         document.querySelector(".formName");
       
    }

    if (email == ""){
        let span = document.querySelector(".formEmail");
        if (span) {
            span.remove();
        }
        let spanMail = document.createElement("span");
        let formMail = document.querySelectorAll(".form-control")[1];
        spanMail.className = "formEmail"
        spanMail.innerText = "Введите email"
        formMail.insertAdjacentElement("beforeend", spanMail);
    }

    if (tel == "") {
        let span = document.querySelector(".formPhone");
        if (span) {
            span.remove();
        }
        let spanPhone = document.createElement("span");
        let formPhone = document.querySelectorAll(".form-control")[2];
        spanPhone.className = "formPhone"
        spanPhone.innerText = "Введите номер телефона"
        formPhone.insertAdjacentElement("beforeend", spanPhone);

    }

    if (education == "") {
        let span = document.getElementById("education");
        if(span){
            span.remove();
        }
        let spanEducation = document.createElement("span");
        let formEducation = document.getElementById(".education");
        spanEducation.className = "formeducation"
        spanEducation.innerText = "Образование не выбрано"
    }

    let path = avatarInput.value;
    let pathArray = path.split("\\");
    let file = pathArray[pathArray.length - 1];
    div.innerHTML += `Аватар: ${file}<br>`;

    this.reset();

})

