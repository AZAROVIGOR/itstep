/*
4. Дано поле ввода. В поле ввода вводятся чиcла через пробел. Сделать так, чтобы при наборе текста в поле выводилась сумма этих чисел.
*/
const input = document.getElementById("number");




input.addEventListener("keyup", function(event){
   let str = this.value  //  this.value = input.value;
   let numbers = str.split(" ");
   let sum = numbers.reduce((sum, item) =>{
      return sum += (+item);
   },0)
   let result = document.querySelector(".result")
   result.innerHTML = sum;
})




