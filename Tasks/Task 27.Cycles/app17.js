/*Бизнессмен взял ссуду M тысяч рублей в банке под 20% годовых. через сколько лет его долг 
превысит S тысяч рублей, если за это время он не будет отдавать долг.*/

var creditAmount = 1000;
var year = 0;
var s = 3000;

while(creditAmount < s){
    creditAmount *= 1.20;
    year++;
}
console.log(year);