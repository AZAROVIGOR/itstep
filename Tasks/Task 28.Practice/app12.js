// Найти сумму первых 20 натуральных чисел кратных 5.
var sum = 0;
for(let i = 1; i <= 20; i++){
   
    if(i % 5 == 0)
    sum += i;
    
}
console.log(sum);

var i = 1;
    sum = 0;
while(i <= 20){
    
    if (i % 5 == 0)
        sum += i;
        i++;
}

console.log(sum);