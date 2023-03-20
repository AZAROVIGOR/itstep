// Дано 10 блоков, пронумерованных от 0 до 9. При нажатии на определенную цифру на клавиатуре подсвечивать блок с соотвествующим номером.


document.addEventListener("keydown", function (event) {
    event.preventDefault();
    let block0 = document.querySelector(".block-0");
    let block1 = document.querySelector(".block-1");
    let block2 = document.querySelector(".block-2");
    let block3 = document.querySelector(".block-3");
    let block4 = document.querySelector(".block-4");
    let block5 = document.querySelector(".block-5");
    let block6 = document.querySelector(".block-6");
    let block7 = document.querySelector(".block-7");
    let block8 = document.querySelector(".block-8");
    let block9 = document.querySelector(".block-9");
   
    switch (event.key) {
        case "1":
            block1.style.backgroundColor = "blue"; break;
        case "2":
            block2.style.backgroundColor = "blue"; break;
        case "3":
            block3.style.backgroundColor = "blue"; break;
        case "4":
            block4.style.backgroundColor = "blue"; break;
        case "5":
            block5.style.backgroundColor = "blue"; break;
        case "6":
            block6.style.backgroundColor = "blue"; break;
        case "7":
            block7.style.backgroundColor = "blue"; break;
        case "8":
            block8.style.backgroundColor = "blue"; break;
        case "9":
            block9.style.backgroundColor = "blue"; break;
        case "0":
            block0.style.backgroundColor = "blue"; break;
    }
})

document.addEventListener("keyup", function (event) {
    event.preventDefault();
    let block0 = document.querySelector(".block-0");
    let block1 = document.querySelector(".block-1");
    let block2 = document.querySelector(".block-2");
    let block3 = document.querySelector(".block-3");
    let block4 = document.querySelector(".block-4");
    let block5 = document.querySelector(".block-5");
    let block6 = document.querySelector(".block-6");
    let block7 = document.querySelector(".block-7");
    let block8 = document.querySelector(".block-8");
    let block9 = document.querySelector(".block-9");

    switch (event.key) {
        case "1":
            block1.style.backgroundColor = "red"; break;
        case "2":
            block2.style.backgroundColor = "red"; break;
        case "3":
            block3.style.backgroundColor = "red"; break;
        case "4":
            block4.style.backgroundColor = "red"; break;
        case "5":
            block5.style.backgroundColor = "red"; break;
        case "6":
            block6.style.backgroundColor = "red"; break;
        case "7":
            block7.style.backgroundColor = "red"; break;
        case "8":
            block8.style.backgroundColor = "red"; break;
        case "9":
            block9.style.backgroundColor = "red"; break;
        case "0":
            block0.style.backgroundColor = "red"; break;
    }
})











