// Посчитать кол-во делителей  заданного числа

var N = 12;
var number = 0;

for( let i = 1; i <= N; i++){
  if(N % i == 0){
    number++
  }
  
}
console.log(number)