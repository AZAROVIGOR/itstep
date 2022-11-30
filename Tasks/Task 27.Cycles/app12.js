//Дано число N. Найти сумму всех четных чисел от 1 и не превосходящих N.

var i = 1;
var N = 10;
var sum = 0;
while(i <= N){
    
    if(i % 2 == 0){
      sum += i;
    }
    i++
  
}
console.log(sum);


let n = 10;
let res = 0;
for(i = 1; i <= n; i++){

    if(i % 2 ==0){
      res +=i;
    }
}

console.log(res);




    
    
    
