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
    div.innerHTML += `О себе: ${about}`

})