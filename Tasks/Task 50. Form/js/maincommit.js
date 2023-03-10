let form = document.getElementById("reg_form");

form.addEventListener("submit", function(event){
    event.preventDefault();                                   // отменяет стандартные действия браузера

                                                             

    let errors = document.querySelectorAll(".error-text");   // Находим все элементы с классом  .error-text  (span заполните поле)
    if(errors.length){                                          // если в input ничего не ввели добавляется span 
        Array.from(errors).forEach((errorSpan) => {                 // то у каждго найденого элемента
            errorSpan.parentElement.classList.remove("error");    // удаляем класс  error
            errorSpan.remove();                                     // удаляем <span></span>
        })
    }

    let hasError = false;                   // проверка на  ошибки предпологаем что ошибок нет

    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let phoneInput = document.querySelector("#phone");
    let aboutInput = document.querySelector("#about");
    let educationInput = document.querySelector("#education");

    let fields = [nameInput, emailInput, phoneInput, aboutInput, educationInput];  // создаем массив элементов input

    fields.forEach((field) => {
        if(field.value == ""){                                 // если поле не заполнено
            let span = document.createElement("span");
            span.className = "error-text"; // span.classList.add("error-text");   вешаем элементу span class "error-text"
            span.innerText = "Заполните поле";                      // со значением  "Заполните поле"
            field.insertAdjacentElement("afterend", span);  // в элементы input  заносим span  // <span class="error-text">Заполните поле</span>
            field.parentElement.classList.add("error");  //  родителю inputa  добавляем класс  "error"
            hasError = true;  // если ошибка есть меняем на true => ошибка  есть 
        }
    });

    let sexs = ["sex-m", "sex-f"];

    let checked = sexs.some((radioId) => {                  // если хотябы один из элементов чекнут (метод some)
        return document.querySelector("#"+radioId).checked; //document.querySelector("#"+radioId) - input    возвращаем тот элемент который чекнут
    })

    if(!checked){               // если чекбокс не чекнут
        let span = document.createElement("span");
        span.className = "error-text"; // span.classList.add("error-text");
        span.innerText = "Выберите пол";
        document.querySelector("#sex-f").parentElement.insertAdjacentElement("afterend", span);  // навешиваем span с классом error-text и текстом Выберите пол
        hasError = true;
    }

    let hobbies = ["hobby-1", "hobby-2", "hobby-3"];

    checked = hobbies.some((checkboxId) => {
        return document.querySelector("#"+checkboxId).checked; //document.querySelector("#"+checkbox) - input возвращаем тот input который выбран
    })

    if(!checked){                                     //  если Input c хобби не выбран  
        let span = document.createElement("span");
        span.className = "error-text"; // span.classList.add("error-text");
        span.innerText = "Выберите хобби";
        document.querySelector("#hobby-3").parentElement.insertAdjacentElement("afterend", span); //навешиваем span с классом error - text и текстом "Выберите хобби"
        hasError = true;
    }

    if (!hasError) {                                      // если hasError  везде не true  если везде ошибок не было то выводим данные
        let div = document.querySelector(".result");

        div.innerHTML += `Имя: ${nameInput.value}<br>`;    // выводим в  div . result все значения
        div.innerHTML += `Email: ${emailInput.value}<br>`;
        div.innerHTML += `Телефон: ${phoneInput.value}<br>`;
        div.innerHTML += `Образование: ${educationInput.value}<br>`;
        if (document.querySelector("#sex-m").checked) {                 //  если чекнут sex-m
            div.innerHTML += `Пол: ${document.querySelector("#sex-m").value}<br>`;  //выводими  sex-m с его значением (("#sex-m").value)
        } else if (document.querySelector("#sex-f").checked) {                       // если чекнут  #sex-f
            div.innerHTML += `Пол: ${document.querySelector("#sex-f").value}<br>`;   //выводими  #sex-f с его значением (("#sex-f").value)
        } 

        let hobbyValue = [];   // создаем пустой массив в который будем помещать выбранные пользователем хобби

        hobbies.forEach((hobby) => {
            if(document.querySelector("#"+hobby).checked){                     // если выбрали хобби 
                hobbyValue.push(document.querySelector("#" + hobby).value);   //  добавляем в  let hobbyValue = [];  выбраное хобби 
            }
        })

        div.innerHTML += `Хобби: ${hobbyValue.join(",")}<br>`;  // в div с result помещаем  помещаем  хобби 
        div.innerHTML += `О себе: ${aboutInput.value}<br>`;

        let path = avatarInput.value;
        let pathArray = path.split("\\");
        let file = pathArray[pathArray.length - 1];
        div.innerHTML += `Аватар: ${file}<br>`;

        this.reset(); // очищение формы this==form
    }
})