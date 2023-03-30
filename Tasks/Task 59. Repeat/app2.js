/*
2. Дано 2 поля ввода и кнопка. В каждое поле вводится время в формате "часы:минуты".
 При нажатии на кнопку найти разницу между временами, учитывая, что второе время больше первого и вывести разницу также в формате "часы:минуты". 
*/


let button = document.querySelector(".btn");

button.addEventListener("click", function(){
    let input1 = document.getElementById("time1").value.split(':').map(item => +item);
    let input2 = document.getElementById("time2").value.split(':').map(item => +item);;
    let result = document.querySelector(".result");
   
    let differenceTimeHour = input2[0] - input1[0];
    let differenceTimeMinutes = input2[1] - input1[1];
 
    result.innerHTML = `${differenceTimeHour}:${differenceTimeMinutes}`
    
    
    console.log(input1)
    console.log(input2)
    console.log(differenceTimeHour)
})

