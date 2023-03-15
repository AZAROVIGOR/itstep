/*
4. Дано поле ввода. В поле ввода вводятся чиcла через пробел. Сделать так, чтобы при наборе текста в поле выводилась сумма этих чисел.
*/
const input = document.getElementById("number");
const result = document.querySelector(".result");
console.log(result)

//result.innerHTML = "value"
input.addEventListener("change", function(){
   let sum = Array.from(input).reduce((sum, item) =>{
        sum = sum + (+item.value)
   },0)
    console.log(sum)
   result.innerHTML = input.value
})




