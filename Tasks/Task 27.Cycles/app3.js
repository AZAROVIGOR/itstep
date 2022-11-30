// Вывести  числа  в  последовательности  4 7 10 13

var i = 1;
var sum;
while(i < 13){
    sum = i+=3;
    console.log(`${sum}`);
}

for(i = 4; i <= 13; i+=3){
    console.log(i);
}