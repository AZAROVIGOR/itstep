/*В бригаде, работающей на уборке сена, имеется N сенокосилок. Первая сенокосилка работала m часов, а каждая следующая на 10 минут 
больше, чем предыдущая.Сколько часов проработала вся бригада?*/

var mower = 4;
var workingHours = 3;
var timeMinutes = workingHours * 60;
var i = 1;
var sum = 0;
var min = 10;

while(i <= mower){
    sum += timeMinutes + min;
    i++

   
}
console.log(`${sum / 60 } часов проработала вся бригада`);