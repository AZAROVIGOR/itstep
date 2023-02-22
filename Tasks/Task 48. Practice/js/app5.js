/*5. Дано 2 поля, кнопка и div. Вывести в div сумму, разность, произведение и частное 2 чисел, введеных в поля. 
При делении на ноль, вместо результата деления выводить текст "Деление на 0".
*/

let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){
        let input1 = document.querySelector("#number1");
        let input2 = document.querySelector("#number2");
        let num1 = +input1.value;
        let num2 = +input2.value;

        let div = document.querySelector("div");
        if(div.children.length == 0){
            let sum = num1 + num2;
            let difference = num1 - num2;
            let product = num1 * num2;
            let quotient = num1 / num2;
            if(num2 === 0){
                quotient = "Деление на 0"
            }
            div.innerText = `Сумма: ${sum}  Разость: ${difference}  Произведение: ${product}  Частное: ${quotient}`
        }
    })
}