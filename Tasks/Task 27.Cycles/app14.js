//Составьте программу, которая вычисляет сумму квадратов чисел от 1 до целого числа N.

var i = 1;
var N = 4;
var s = 1;

 
 while(i <= N){
     
     s += i * i;
     i++;
    
 }

console.log(s);

let sum = 0;
for(i = 1; i <= N; i++){
    sum += i * i;
}

console.log(sum);

