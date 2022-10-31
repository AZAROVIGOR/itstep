// Найти  сумму  всех трехзначных которые делятся на  10  и  на  13


var sum = 0;
for (let i = 100; i < 1000; i++){
    if(i % 10 == 0 && i % 13 == 0){
        sum += i;
    }
    
}
console.log(sum);

//

var i = 100;
var sum = 0;
while(i < 1000){
    if(i % 10 == 0 && i % 13 == 0){
        sum += i
    }
    i++
}
console.log(sum);

//

var i = 100;
var sum = 0;
do{
    if (i % 10 == 0 && i % 13 == 0) {
        sum += i;
    }
    i++
}
while(i < 1000){
   
}
console.log(sum);
