/*
4. Дано поле ввода, кнопка и текст. В поле ввода разрешить вводить не более одного символа. Если в поле ввода введен один символ, 
то при нажатии на кнопку неоходимо подсчитать - сколько раз этот символ втречается в тексте.
*/

document.addEventListener("keyup", function (event) {
    event.preventDefault();

    document.addEventListener("keypress", function (event) {
        let input = document.getElementById("text").value;
        if (input.length <= 1) {
            event.preventDefault();
        }
        console.log(input)
    })
   

   
   
})